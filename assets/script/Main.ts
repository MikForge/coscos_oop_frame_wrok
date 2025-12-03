import { _decorator, Component, Node, profiler } from 'cc';
import { Root } from '../core/Root';
import { DEBUG } from 'cc/env';
import { Fwk } from '../core/Fwks';
import { UI_MANIFEST, ViewId } from './game/common/UIManifest';


const { ccclass, property } = _decorator;



@ccclass('Main')
export class Main extends Root {


    start() {
        /**
         * 显示性能面板
         */
        if (DEBUG) {
            profiler.showStats();

            // 优雅暴露：不可枚举、不可写（可配置）
            Object.defineProperty(globalThis, 'Fwk', {
                value: Fwk,
                configurable: true,   // 调试结束可 delete globalThis.Fwk
                writable: false,
                enumerable: false
            });
        }
    }


    /**
     * 继承自 框架 Root, 重写初始化游戏界面方法
     */
    protected initGui() {
        super.initGui();

        Fwk.uiMgr.registerUIComponents(UI_MANIFEST);

    }


    protected run() {

        Fwk.log.trace("游戏启动");

        // 打开主界面
        Fwk.uiMgr.open(ViewId.MainUI);
    }


}

