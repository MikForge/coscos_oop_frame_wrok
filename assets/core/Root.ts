import { _decorator, Component, director, JsonAsset, log, Node, sys, UI, screen, game, Game } from 'cc';
import { Fwk, version } from './Fwks';
import { UIMgr } from './gui/UIMgr';
import { ResManager } from './common/loader/ResManager';
const { property } = _decorator;


const config_name = "game_config";

export class Root extends Component {

    /** 游戏层节点 */
    @property({
        type: Node,
        tooltip: 'Game  Node',
    })
    gameRoot: Node = null!;

    /** UI 层节点 */
    @property({
        type: Node,
        tooltip: 'UI  Node',
    })
    uiRoot: Node = null!;

    /** 框架常驻节点 */
    private persist: Node = null!

    onLoad(): void {

        Fwk.log.trace(`Framework ${version}`)
        this.enabled = false;

        this.initModule()

        this.startup();

    }


    update(deltaTime: number) {

    }


    /** 启动流程 */
    private async startup() {
        try {
            // 1. 加载配置
            await this.loadGameConfig();

            Fwk.log.trace("游戏配置加载完成");

            // 2. 初始化 UI 层
            Fwk.uiMgr.initLayer(this.uiRoot);

            // 3. 初始化游戏界面
            this.initGui();

            // 4. 启动游戏
            this.run();

            // 5. 启用更新
            this.enabled = true;



        } catch (error) {
            Fwk.log.error("游戏启动失败:", error);
            // TODO: 显示错误提示界面
            // this.showErrorUI("游戏加载失败,请重试");
        }
    }


    private async loadGameConfig() {

        const jsonInfo = await Fwk.resMgr.load({
            path: config_name,
            type: JsonAsset
        });

        if (jsonInfo == null) {
            throw new Error(`配置文件 ${config_name} 加载失败`);
        }

        // TODO: 解析配置到 Fwk.config
        // Fwk.config = jsonInfo.json;

    }



    /** 初始化模块 */
    private initModule() {
        /** 
         * 创建常驻节点
         * 绑定 时间管理器 音频模块
         */
        this.persist = new Node("FwkPersistNode")
        director.addPersistRootNode(this.persist)


        Fwk.resMgr = new ResManager()

        // LayerMgr
        Fwk.uiMgr = new UIMgr()



    }


    /** 初始化游戏界面 */
    protected initGui() {

    }


    /** 加载完引擎配置文件后执行 */
    protected run() {

    }



    private init() {
        // 初始化游戏界面
        this.initGui();

        // ecs 初始化

        // 游戏显示事件
        game.on(Game.EVENT_SHOW, this.onShow, this);
        // 游戏隐藏事件
        game.on(Game.EVENT_HIDE, this.onHide, this);

        // 游戏尺寸修改事件
        if (!sys.isMobile) {
            screen.on("window-resize", () => {
                // 派发游戏窗口尺寸变化事件
            }, this);

            screen.on("fullscreen-change", () => {
                // 派发游戏全屏事件
            }, this);
        }

        screen.on("orientation-change", () => {
            // 派发游戏方向变化事件
        }, this);
    }


    private onShow() {

        // TODO:处理回到游戏时减去逝去时间

        // TODO:恢复所有暂停的音乐播放

        // 恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生
        director.resume();

        // 恢复游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效
        game.resume();

        // TODO:框架事件派发 gameshow
    }

    private onHide() {
        // TODO:处理切到后台后记录切出时间

        // TODO:处理暂停所有音乐播放

        // 暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。 如果想要更彻底得暂停游戏，包含渲染，音频和事件处理，请使用 game.pause()
        director.pause();

        // 暂停游戏主循环。包含：游戏逻辑、渲染、输入事件派发（Web 和小游戏平台除外），背景音乐和所有音效
        game.pause();


        // TODO:框架事件派发 gamehide

    }



}

