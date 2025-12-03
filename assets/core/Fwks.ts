import { ResManager } from "./common/loader/ResManager";
import { Logger } from "./common/log/Logger";
import { UIMgr } from "./gui/UIMgr";



/** Framework version 框架版本号 */
export var version = '1.0.0.20251126';


/** Framework 框架入口 */
export class Fwk {

    /** 核心模块 */

    /** 日志管理 */
    static log = Logger.instance;

    static resMgr: ResManager;

    /** 界面管理 */
    static uiMgr: UIMgr;


}