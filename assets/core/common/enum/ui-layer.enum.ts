

export enum LayerType {
    /** 2d 游戏层 */
    UIGame = 0,

    /** 场景型UI */
    UIScene = 2,

    /** 弹窗型UI */
    PopUp = 3,

    /** 提示 层 飘字  */
    Notify = 4,
    /** 引导 层 */
    Guide = 5,
    /** 顶层  （断线重连 强制热更新） */
    Top = 6,
}

export enum UIType {

    UIGame = 'UIGame',

    Scene = 'Scene',

    PopUp = 'PopUp',
}


/**
 * 层级容器类型
 */
export enum LayerContainerType {
    /** 单实例层 */
    Single = "Single",

    /** 多实例层 */
    Multi = "Multi"
}