import { _decorator, Component, Node as CCNode } from 'cc';
import { UIViewState } from '../base/UIViewState';
import { UIComponentBase } from '../base/UICompBase';
import { Fwk } from '../../Fwks';
const { ccclass, property } = _decorator;


/**
 * UI 元素组件基类
 * 用于管理 UI的生命周期和行为
 * @export
 * @class UIElementComponent
 * @extends {Component}
 */
@ccclass('UIElementComponent')
export class UIElementComponent extends Component {
    /** 视图参数 */
    uiInfo: UIViewState = null!;
    /** 关闭窗口之前 */
    onClose: Function = null!;

    /**
     * 初始化界面元素，触发所有 UI 组件的 onAdded 事件
     * @returns {Promise<boolean>} 返回一个 Promise，解析为 true 表示初始化成功，false 表示被中断
     */
    initializeUI(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {

            /**
             * 触发所有挂载在节点上的 UI 组件的 onAdded 事件
             */
            for (let i = 0; i < this.node.components.length; i++) {

                const component = this.node.components[i];

                if (!(component instanceof UIComponentBase)) continue;

                const result = await component.onAdded(this.uiInfo.params.data);
                if (result === false) {
                    resolve(false);
                    return;
                }
            }

            resolve(true);
        });
    }

    /**
     * 触发 onBeforeRemove 事件，并执行关闭前的回调
     */
    finalizeRemoveUI(): void {
        if (this.uiInfo.valid === false) return;

        for (let i = 0; i < this.node.components.length; i++) {

            const component = this.node.components[i];

            if (!(component instanceof UIComponentBase)) continue;

            component.onBeforeRemove();
        }

        this.onClose && this.onClose();

    }

    /**
     * 销毁节点并释放资源
     */
    public destroyNode(): void {

        // 先触发组件的 onRemoved

        this.triggerComponentsOnRemoved();

        // 销毁节点
        this.node.destroy();

    }

    /**
     * 从 层级 中移除 ViewNode
     * 支持 界面缓存 逻辑
     */
    public removeFromLayer(): void {
        this.node.removeFromParent();
        this.triggerComponentsOnRemoved();
    }


    /**
     * 触发所有 UI 组件的 onRemoved 事件
     */

    public triggerComponentsOnRemoved(): void {
        for (let i = 0; i < this.node.components.length; i++) {
            const component = this.node.components[i];
            if (!(component instanceof UIComponentBase)) continue;
            component.onRemoved();
        }
    }
    onDestroy() {
        this.uiInfo = null!;
        this.onClose = null!;
    }



}

