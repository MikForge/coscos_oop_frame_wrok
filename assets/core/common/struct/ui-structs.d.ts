

import { Component, Node, _decorator } from "cc";

export type UIConfigMap = { [key: string]: UIComponentConfig }



export interface UIComponentConfig {
    /** -----公共属性----- */
    /** 远程包名 */
    bundle?: string;
    /** 窗口层级 */
    layer: string;
    /** 预制资源相对路径 */
    prefab: string;
    /** 是否自动施放（默认自动释放） */
    destroy?: boolean;

    /** -----弹窗属性----- */

    /** 是否触摸非窗口区域关闭（默认关闭） */
    vacancy?: boolean,
    /** 是否打开窗口后显示背景遮罩（默认关闭） */
    mask?: boolean;
    /** 是否启动真机安全区域显示（默认关闭） */
    safeArea?: boolean;
    /** 界面弹出时的节点排序索引 */
    siblingIndex?: number;

}


export interface UIComponentParam {
    /** 自定义传递参数 */
    data?: any;

    /** 是否开启预加载（默认不开启 - 开启后加载完不显示界面） */
    preload?: boolean;
}


/**
 * UI 生命周期接口
 */
export interface IUILifecycle {

    onAdded?(data: any): Promise<boolean> | boolean;

    onBeforeRemove?(): void;

    onRemoved?(): void;
}