System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, JsonAsset, Node, sys, screen, game, Game, Fwk, version, UIMgr, ResManager, _dec, _dec2, _class, _descriptor, _descriptor2, _crd, property, config_name, Root;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFwk(extras) {
    _reporterNs.report("Fwk", "./Fwks", _context.meta, extras);
  }

  function _reportPossibleCrUseOfversion(extras) {
    _reporterNs.report("version", "./Fwks", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "./gui/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "./common/loader/ResManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      JsonAsset = _cc.JsonAsset;
      Node = _cc.Node;
      sys = _cc.sys;
      screen = _cc.screen;
      game = _cc.game;
      Game = _cc.Game;
    }, function (_unresolved_2) {
      Fwk = _unresolved_2.Fwk;
      version = _unresolved_2.version;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ResManager = _unresolved_4.ResManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9f43GoyVRNCoZhebdDKB+p", "Root", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'JsonAsset', 'log', 'Node', 'sys', 'UI', 'screen', 'game', 'Game']);

      ({
        property
      } = _decorator);
      config_name = "game_config";

      _export("Root", Root = (_dec = property({
        type: Node,
        tooltip: 'Game  Node'
      }), _dec2 = property({
        type: Node,
        tooltip: 'UI  Node'
      }), (_class = class Root extends Component {
        constructor() {
          super(...arguments);

          /** 游戏层节点 */
          _initializerDefineProperty(this, "gameRoot", _descriptor, this);

          /** UI 层节点 */
          _initializerDefineProperty(this, "uiRoot", _descriptor2, this);

          /** 框架常驻节点 */
          this.persist = null;
        }

        onLoad() {
          (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
            error: Error()
          }), Fwk) : Fwk).log.trace("Framework " + (_crd && version === void 0 ? (_reportPossibleCrUseOfversion({
            error: Error()
          }), version) : version));
          this.enabled = false;
          this.initModule();
          this.startup();
        }

        update(deltaTime) {}
        /** 启动流程 */


        startup() {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              // 1. 加载配置
              yield _this.loadGameConfig();
              (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).log.trace("游戏配置加载完成"); // 2. 初始化 UI 层

              (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).uiMgr.initLayer(_this.uiRoot); // 3. 初始化游戏界面

              _this.initGui(); // 4. 启动游戏


              _this.run(); // 5. 启用更新


              _this.enabled = true;
            } catch (error) {
              (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).log.error("游戏启动失败:", error); // TODO: 显示错误提示界面
              // this.showErrorUI("游戏加载失败,请重试");
            }
          })();
        }

        loadGameConfig() {
          return _asyncToGenerator(function* () {
            var jsonInfo = yield (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
              error: Error()
            }), Fwk) : Fwk).resMgr.load({
              path: config_name,
              type: JsonAsset
            });

            if (jsonInfo == null) {
              throw new Error("\u914D\u7F6E\u6587\u4EF6 " + config_name + " \u52A0\u8F7D\u5931\u8D25");
            } // TODO: 解析配置到 Fwk.config
            // Fwk.config = jsonInfo.json;

          })();
        }
        /** 初始化模块 */


        initModule() {
          /** 
           * 创建常驻节点
           * 绑定 时间管理器 音频模块
           */
          this.persist = new Node("FwkPersistNode");
          director.addPersistRootNode(this.persist);
          (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
            error: Error()
          }), Fwk) : Fwk).resMgr = new (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager)(); // LayerMgr

          (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
            error: Error()
          }), Fwk) : Fwk).uiMgr = new (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr)();
        }
        /** 初始化游戏界面 */


        initGui() {}
        /** 加载完引擎配置文件后执行 */


        run() {}

        init() {
          // 初始化游戏界面
          this.initGui(); // ecs 初始化
          // 游戏显示事件

          game.on(Game.EVENT_SHOW, this.onShow, this); // 游戏隐藏事件

          game.on(Game.EVENT_HIDE, this.onHide, this); // 游戏尺寸修改事件

          if (!sys.isMobile) {
            screen.on("window-resize", () => {// 派发游戏窗口尺寸变化事件
            }, this);
            screen.on("fullscreen-change", () => {// 派发游戏全屏事件
            }, this);
          }

          screen.on("orientation-change", () => {// 派发游戏方向变化事件
          }, this);
        }

        onShow() {
          // TODO:处理回到游戏时减去逝去时间
          // TODO:恢复所有暂停的音乐播放
          // 恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生
          director.resume(); // 恢复游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效

          game.resume(); // TODO:框架事件派发 gameshow
        }

        onHide() {
          // TODO:处理切到后台后记录切出时间
          // TODO:处理暂停所有音乐播放
          // 暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。 如果想要更彻底得暂停游戏，包含渲染，音频和事件处理，请使用 game.pause()
          director.pause(); // 暂停游戏主循环。包含：游戏逻辑、渲染、输入事件派发（Web 和小游戏平台除外），背景音乐和所有音效

          game.pause(); // TODO:框架事件派发 gamehide
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gameRoot", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "uiRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e48cf005590e51c491cfce0670b30a7ec4192b6.js.map