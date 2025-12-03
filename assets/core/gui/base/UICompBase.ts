import { _decorator, Component } from 'cc';
import { IUILifecycle } from '../../common/struct/ui-structs';
import { Fwk } from '../../Fwks';

const { ccclass } = _decorator;

/**
 * UI 组件基类
 */
@ccclass("UIComponentBase")
export class UIComponentBase extends Component implements IUILifecycle {


    async onAdded(data: any): Promise<boolean> {
        return true;
    }

    /** UI 移除前调用 */
    onBeforeRemove(): void { }

    /** UI 移除后调用 */
    onRemoved(): void { }


    protected onDestroy(): void {

    }
    
}
