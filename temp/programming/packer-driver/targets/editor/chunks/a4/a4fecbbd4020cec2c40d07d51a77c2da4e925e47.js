System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Logger, Fwk, _crd, version;

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "./common/loader/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "./common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "./gui/UIMgr", _context.meta, extras);
  }

  _export("Fwk", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36eafnyAypEG73VxKADbGWo", "Fwks", undefined);

      /** Framework version 框架版本号 */
      _export("version", version = '1.0.0.20251126');
      /** Framework 框架入口 */


      _export("Fwk", Fwk = class Fwk {});

      /** 核心模块 */

      /** 日志管理 */
      Fwk.log = (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
        error: Error()
      }), Logger) : Logger).instance;
      Fwk.resMgr = void 0;

      /** 界面管理 */
      Fwk.uiMgr = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a4fecbbd4020cec2c40d07d51a77c2da4e925e47.js.map