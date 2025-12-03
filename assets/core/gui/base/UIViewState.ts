import { Node } from 'cc';
import type { UIComponentConfig, UIComponentParam } from 'db://assets/core/common/struct/ui-structs';

/**
 * UI 界面组件状态
 */
export class UIViewState {
    /** 界面唯一编号 */
    uiid: string = null!;
    /** 界面配置 */
    config: UIComponentConfig = null!;
    /** 窗口事件 */
    params: UIComponentParam = null!;
    /** 是否在使用状态 */
    valid: boolean = true;
    /** 界面根节点 */
    node: Node = null!;


    /**
     * 初始化 UI 视图状态
     * @param uiid 界面唯一编号
     * @param config 界面配置
     * @param params 窗口事件参数
     * @param node 界面根节点（可选）
     */
    public init(
        uiid: string,
        config: UIComponentConfig,
        params?: UIComponentParam,
        node?: Node
    ): this {
        this.uiid = uiid;
        this.config = config;
        this.params = params || {};
        this.valid = true;
        if (node) {
            this.node = node;
        }
        return this;
    }

    /**
     * 重置状态
     */
    public reset(): void {
        this.uiid = null!;
        this.config = null!;
        this.params = null!;
        this.valid = false;
        this.node = null!;
    }
}