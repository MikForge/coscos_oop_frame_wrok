import { UI } from "cc";
import { UIComponentConfig, UIConfigMap } from "../common/struct/ui-structs";



/**
 * UI 配置注册器
 * 职责：管理所有 UI 配置的注册、查询、初始化
 */
export class UIConfigRegistry {
    private static instance: UIConfigRegistry;
    private configs: Map<string, UIComponentConfig> = new Map();
    private locked: boolean = false;

    private constructor() { }

    static getInstance(): UIConfigRegistry {
        if (!UIConfigRegistry.instance) {
            UIConfigRegistry.instance = new UIConfigRegistry();
        }
        return UIConfigRegistry.instance;
    }

    /** 批量初始化配置（只执行一次） */
    init(configMap: UIConfigMap): void {
        if (this.locked) {
            console.warn("UIConfigRegistry 已初始化，忽略重复调用");
            return;
        }

        for (const key in configMap) {
            if (!configMap.hasOwnProperty(key)) continue;
            this.configs.set(key, configMap[key]);
        }

        this.locked = true;
    }

    /** 注册单个配置 */
    register(key: string, config: UIComponentConfig): void {
        if (this.configs.has(key)) {
            console.error(`界面 ${key} 重复注册`);
            return;
        }
        this.configs.set(key, config);
    }

    /** 获取配置 */
    get(key: string): UIComponentConfig | null {
        return this.configs.get(key) || null;
    }

    /** 检查是否存在 */
    has(key: string): boolean {
        return this.configs.has(key);
    }

    /** 清空（测试用） */
    clear(): void {
        this.configs.clear();
        this.locked = false;
    }
}

// 导出单例实例
export const uiConfigRegistry = UIConfigRegistry.getInstance();