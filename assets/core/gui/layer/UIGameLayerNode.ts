import { Node } from "cc";
import { UIHelper } from "../UIHelper";

export class UIGameLayerNode extends Node {


    constructor(name: string) {
        super(name);
        UIHelper.setFullScreen(this);
    }

}