import { Node, Prefab, UI, instantiate } from "cc";
import { UILayerNodeBase } from "../base/UILayerNodeBase";
import { UIViewState } from "./UIViewState";
import { UIElementComponent } from "../layer/UIElementComponent";
import { Fwk } from "../../Fwks";

export class UISingletonLayerNode extends UILayerNodeBase {

    private static readonly MAX_NODES = 1

    constructor(name: string) {
        super(name);
    }

    public async addView(uiInfo: UIViewState): Promise<Node> {

        if (this.ui_nodes.size >= UISingletonLayerNode.MAX_NODES) {
            Fwk.log.warn(`UISingletonLayerNode: 达到最大节点数限制，无法添加新节点`);
            return Promise.reject(`达到最大节点数限制`);
        }

        return await super.addView(uiInfo);
    }



}
