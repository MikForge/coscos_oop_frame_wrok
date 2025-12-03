System.register(["__unresolved_0", "cc", "__unresolved_1", "cc/env", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, profiler, Root, DEBUG, Fwk, UI_MANIFEST, ViewId, _dec, _class, _crd, ccclass, property, Main;

  function _reportPossibleCrUseOfRoot(extras) {
    _reporterNs.report("Root", "../core/Root", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFwk(extras) {
    _reporterNs.report("Fwk", "../core/Fwks", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_MANIFEST(extras) {
    _reporterNs.report("UI_MANIFEST", "./game/common/UIManifest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewId(extras) {
    _reporterNs.report("ViewId", "./game/common/UIManifest", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      profiler = _cc.profiler;
    }, function (_unresolved_2) {
      Root = _unresolved_2.Root;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_3) {
      Fwk = _unresolved_3.Fwk;
    }, function (_unresolved_4) {
      UI_MANIFEST = _unresolved_4.UI_MANIFEST;
      ViewId = _unresolved_4.ViewId;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60646LwlrJEdY8GHc/PKYHn", "Main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'profiler']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Main", Main = (_dec = ccclass('Main'), _dec(_class = class Main extends (_crd && Root === void 0 ? (_reportPossibleCrUseOfRoot({
        error: Error()
      }), Root) : Root) {
        start() {
          /**
           * 显示性能面板
           */
          if (DEBUG) {
            profiler.showStats(); // 优雅暴露：不可枚举、不可写（可配置）

            Object.defineProperty(globalThis, 'Fwk', {
              value: _crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk,
              configurable: true,
              // 调试结束可 delete globalThis.Fwk
              writable: false,
              enumerable: false
            });
          }
        }
        /**
         * 继承自 框架 Root, 重写初始化游戏界面方法
         */


        initGui() {
          super.initGui();
          (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
            error: Error()
          }), Fwk) : Fwk).uiMgr.registerUIComponents(_crd && UI_MANIFEST === void 0 ? (_reportPossibleCrUseOfUI_MANIFEST({
            error: Error()
          }), UI_MANIFEST) : UI_MANIFEST);
        }

        run() {
          (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
            error: Error()
          }), Fwk) : Fwk).log.trace("游戏启动"); // 打开主界面

          (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
            error: Error()
          }), Fwk) : Fwk).uiMgr.open((_crd && ViewId === void 0 ? (_reportPossibleCrUseOfViewId({
            error: Error()
          }), ViewId) : ViewId).MainUI);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4087735f30bcc22a259586fa376b89c453246e0e.js.map