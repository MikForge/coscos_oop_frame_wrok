/**
 * 
 * P0 - 立即修复:

改用组合替代继承 Node （引用ecs架构）
完善错误处理和类型定义

P1 - 近期优化:

实现可配置的超时机制
添加资源引用计数
优化状态查询接口

P2 - 长期演进:

引入依赖注入容器
实现 UI 生命周期的中间件机制
添加性能监控埋点
 * 
 */
import { instantiate, Node, Prefab } from "cc";
import { UIHelper } from "../UIHelper";
import { UIViewState } from "./UIViewState";
import { UIElementComponent } from "../layer/UIElementComponent";
import { Fwk } from "../../Fwks";


export abstract class UILayerNodeBase extends Node {
    /** 全局窗口打开失败事件 */
    onOpenFailure: Function = null!;

    /** 显示界面节点集合 */
    protected ui_nodes = new Map<string, UIViewState>();


    constructor(name: string) {

        super(name);

        UIHelper.setFullScreen(this);


        this.on(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
        this.on(Node.EventType.CHILD_REMOVED, this.onChildRemoved, this);
    }


    protected onChildAdded(child: Node) {


    }

    protected onChildRemoved(child: Node): void {

    }

    public async addView(uiInfo: UIViewState): Promise<Node> {

        if (this.ui_nodes.has(uiInfo.config.prefab) && this.ui_nodes.get(uiInfo.config.prefab)!.valid) {
            Fwk.log.debug(`UILayerNodeBase: 已存在相同的 UI 节点，无法重复添加: ${uiInfo.config.prefab}`);
            return Promise.reject(`已存在相同的 UI 节点，无法重复添加: ${uiInfo.config.prefab}`);
        }


        await this.load(uiInfo);

        this.ui_nodes.set(uiInfo.config.prefab, uiInfo);

        return uiInfo.node;
    }


    public removeView(prefabPath: string): void {
        const UIViewStateinfo = this.ui_nodes.get(prefabPath);
        if (UIViewStateinfo == null) return;

        let need_realse = UIViewStateinfo.config.destroy

        if (!need_realse) {
            // 可以实现界面缓存逻辑
        }

        const comp = UIViewStateinfo.node.getComponent(UIElementComponent);


        if (comp) {
            comp.finalizeRemoveUI();

            if (need_realse) {

                comp.destroyNode()

                this.closeUi(UIViewStateinfo)

            } else {

                comp.removeFromLayer()

            }
        }

    }

    protected async load(uiInfo: UIViewState): Promise<Node> {
        // 加载界面资源超时提示
        if (uiInfo.node == null) {
            let timerId = setTimeout(this.onLoadingTimeoutGui, 1000);

            // 优先加载配置的指定资源包中资源，如果没配置则加载默认资源包资源
            const res = await Fwk.resMgr.load({
                paths: uiInfo.config.prefab,
                type: Prefab,
                bundle: uiInfo.config.bundle
            }) as Prefab;
            if (res) {
                uiInfo.node = instantiate(res);

                // // 是否启动真机安全区域显示
                // if (state.config.safeArea) state.node.addComponent(SafeArea);

                // 窗口事件委托
                const comp = uiInfo.node.addComponent(UIElementComponent);

                comp.uiInfo = uiInfo;
            }
            else {
                Fwk.log.warn(`路径为【${uiInfo.config.prefab}】的预制加载失败`);
                this.failure(uiInfo);
            }

            // 关闭界面资源超时提示
            // oops.gui.waitClose();
            clearTimeout(timerId);
        }

        const comp = uiInfo.node.getComponent(UIElementComponent)!;
        const r: boolean = await comp.initializeUI();
        if (r) {
            uiInfo.valid = true;                         // 标记界面为使用状态
            if (!uiInfo.params.preload) {
                uiInfo.params.preload = false;
                uiInfo.node.parent = this;
            }
        }
        else {
            console.warn(`路径为【${uiInfo.config.prefab}】的自定义预处理逻辑异常.检查预制上绑定的组件中 onAdded 方法,返回true才能正确完成窗口显示流程`);
            this.failure(uiInfo);
        }


        return uiInfo.node;
    }


    /** 加载超时事件*/
    private onLoadingTimeoutGui() {
        // oops.gui.waitOpen();
    }

    /** 打开窗口失败逻辑 */
    protected failure(uiInfo: UIViewState) {
        this.closeUi(uiInfo);
        this.onOpenFailure && this.onOpenFailure();
    }

    /** 窗口关闭事件 */
    protected closeUi(uiInfo: UIViewState) {
        this.ui_nodes.delete(uiInfo.config.prefab);
        // 释放界面相关资源
        Fwk.resMgr.release({
            paths: uiInfo.config.prefab,
            bundle: uiInfo.config.bundle,
            type: Prefab
        });

        Fwk.log.info(`【界面管理】释放【${uiInfo.config.prefab}】界面资源`);
    }

    protected onDestroy(): void {

        this.off(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
        this.off(Node.EventType.CHILD_REMOVED, this.onChildRemoved, this);
        // 先销毁所有 UI 节点
        this.ui_nodes.forEach((uiInfo) => {
            if (uiInfo.node) {
                const comp = uiInfo.node.getComponent(UIElementComponent);
                if (comp) {
                    comp.finalizeRemoveUI();
                    comp.destroyNode();
                }
            }
        });
        // 清理所有 UI 节点
        this.ui_nodes.clear();
    }



}
