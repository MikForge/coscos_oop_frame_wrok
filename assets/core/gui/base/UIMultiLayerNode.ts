import { Node } from "cc";
import { UILayerNodeBase } from "./UILayerNodeBase";
import { UIViewState } from "./UIViewState";


export class UIMultiLayerNode extends UILayerNodeBase {

    private static readonly MAX_NODES = -1;

    constructor(name: string) {
        super(name);
    }

    public async addView(uiInfo: UIViewState): Promise<Node> {
        
        return super.addView(uiInfo);
    } 

}

