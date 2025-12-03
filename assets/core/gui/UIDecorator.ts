

/**
 * UI 组件装饰器
 * 用于标记 UI 组件类并注册配置
 * 
 */
import { UIComponentConfig } from "../common/struct/ui-structs";
import { uiConfigRegistry } from "./UIConfigRegistry";


/** UI 组件元数据标记键 */
export const UI_METADATA_KEY = "UI_KEY";

/**
 * UI 组件装饰器
 * 用于标记 UI 组件类并注册配置
 * @param key UI 唯一标识
 * @param config UI 配置对象
 * @example
 * @registerUI("LoginUI", { layer: LayerType.UI, prefab: "prefabs/Login" })
 * export class LoginUI extends Component {}
 */
export function registerUI(key: string, config: UIComponentConfig) {
    return function (ctor: any) {
        // 给类添加元数据标记
        ctor[UI_METADATA_KEY] = key;
        // 注册配置到注册器
        uiConfigRegistry.register(key, config);
    };
}

/**
 * 获取 UI 组件的标记 key
 * @param ctor UI 组件类
 */
export function getUIKey(ctor: any): string | undefined {
    return ctor[UI_METADATA_KEY];
}