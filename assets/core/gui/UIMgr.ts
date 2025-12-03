
import { Node, Camera } from "cc";
import { LayerContainerType, LayerType, UIType } from "../common/enum/ui-layer.enum";
import { enumEntries } from '../common/enum/utils';
import { UIGameLayerNode } from "./layer/UIGameLayerNode";
import { UIComponentConfig, UIConfigMap } from 'db://assets/core/common/struct/ui-structs';
import { uiConfigRegistry } from "./UIConfigRegistry";
import { UIComponentParam } from 'db://assets/core/common/struct/ui-structs';
import { Fwk } from "../Fwks";
import { UILayerNodeBase } from "./base/UILayerNodeBase";
import { UISingletonLayerNode } from "./base/UISingletonLayerNode";
import { UIMultiLayerNode } from "./base/UIMultiLayerNode";
import { UIViewState } from "./base/UIViewState";

const layerMap: Partial<Record<LayerType, LayerContainerType>> = {
    [LayerType.UIScene]: LayerContainerType.Multi,
    [LayerType.PopUp]: LayerContainerType.Multi,
    [LayerType.Notify]: LayerContainerType.Single,
    [LayerType.Guide]: LayerContainerType.Single,
    [LayerType.Top]: LayerContainerType.Single,
}

export class UIMgr {
    /** UI 根节点 */
    uiRoot!: Node;
    /** UI 摄像机 */
    uiCamera!: Camera

    /** 界面层集合 - 无自定义类型 */
    private uiLayersMap: Map<string, UILayerNodeBase> = new Map<string, UILayerNodeBase>();

    private uiGameLayerNode!: UIGameLayerNode;

    constructor() {
    }

    /** 
     * 初始化 UI节点
     * @param uiRoot UI 根节点
     */
    initLayer(uiRoot: Node): void {

        this.uiRoot = uiRoot;

        this.uiCamera = this.uiRoot.getComponentInChildren(Camera)!;

        // 按枚举值升序排序后遍历
        const layerEntries = enumEntries(LayerType).sort((a, b) => Number(a[1]) - Number(b[1]));

        for (const [layerName, layerTypeValue] of layerEntries) {
            const layerType = Number(layerTypeValue) as LayerType;

            let layerNode: Node;

            // 特殊处理 UIGame 层
            if (layerType === LayerType.UIGame) {
                const n = new UIGameLayerNode(layerName);
                this.uiGameLayerNode = n;
                layerNode = n;
            } else {
                // 从 layerMap 获取容器类型
                const containerType = layerMap[layerType];

                // 根据容器类型创建对应的层节点
                if (containerType === LayerContainerType.Single) {
                    layerNode = new UISingletonLayerNode(layerName);
                } else if (containerType === LayerContainerType.Multi) {
                    layerNode = new UIMultiLayerNode(layerName);
                } else {
                    // 未配置则默认创建普通节点
                    layerNode = new Node(layerName);
                }
            }

            // 将创建的节点加入 uiRoot 并记录
            this.uiRoot.addChild(layerNode);
            if (layerNode instanceof UILayerNodeBase) {
                this.uiLayersMap.set(layerName, layerNode);
            }

            const containerTypeName = layerMap[layerType] || 'None';
            Fwk.log.debug(`[UIMgr] Created layer: ${layerName} (LayerType: ${LayerType[layerType]}, Container: ${containerTypeName})`);
        }
    }


    /** 
     * 注册 UI 组件
     * @param configMap UI 组件配置映射表
     */
    registerUIComponents(configMap: UIConfigMap): void {
        uiConfigRegistry.init(configMap);
    }



    public async open(viewId: string, param?: UIComponentParam): Promise<Node> {
        const uiConfig: UIComponentConfig = uiConfigRegistry.get(viewId);

        if (!uiConfig) {
            Fwk.log.error(`UI 配置未找到: ${viewId}`);
            return null;
        }

    

        let layerNode = this.uiLayersMap.get(uiConfig.layer);
        if (!layerNode) {
            Fwk.log.error(`UI 层未找到: ${uiConfig.layer} for viewId: ${viewId}`);
            return null;
        }

        // 创建 UIViewState 实例
        let uiInfo = new UIViewState().init(viewId, uiConfig, param);

        let node = await layerNode.addView(uiInfo);

        if (!node) {
            Fwk.log.error(`UI 打开失败: ${viewId} on layer: ${uiConfig.layer}`);
            return Promise.reject(`UI 打开失败: ${viewId} on layer: ${uiConfig.layer}`);
        }

        return node;

    }

    public close(viewId: string): void {
        const uiConfig: UIComponentConfig = uiConfigRegistry.get(viewId);

        if (!uiConfig) {
            Fwk.log.error(`UI 配置未找到: ${viewId}`);
            return;
        }

        let layerNode = this.uiLayersMap.get(uiConfig.layer);
        if (!layerNode) {
            Fwk.log.error(`UI 层未找到: ${uiConfig.layer} for viewId: ${viewId}`);
            return;
        }

        layerNode.removeView(uiConfig.prefab);
    }


}
