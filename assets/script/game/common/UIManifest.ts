import { LayerType } from "db://assets/core/common/enum/ui-layer.enum";
import { UIComponentConfig } from "db://assets/core/common/struct/ui-structs";
import { utils } from "db://assets/core/common/utils/utils";

/** 界面唯一标识（服务器/代码通过枚举触发打开界面） */
export enum ViewId {
    Loading = "loading",
    Alert = "alert",
    Confirm = "confirm",
    MainUI = "main_ui",
}

/** 界面配置清单（key = ViewId） */
export const UI_MANIFEST: { [key: string]: UIComponentConfig } = {
    [ViewId.Loading]: {
        layer: utils.getLayerKey(LayerType.UIScene),
        prefab: "gui/loading/loadingUI",
        bundle: "resources"
    },
    [ViewId.Alert]: {
        layer: utils.getLayerKey(LayerType.PopUp),
        prefab: "common/prefab/alert",
        bundle: "resources",
        mask: true,
        vacancy: true
    },
    [ViewId.Confirm]: {
        layer: utils.getLayerKey(LayerType.PopUp),
        prefab: "common/prefab/confirm",
        bundle: "resources",
        mask: true,
        vacancy: true
    },
    [ViewId.MainUI]: {
        layer: utils.getLayerKey(LayerType.UIScene),
        prefab: "gui/mainui/MainUI",
        bundle: "resources"
    },
};