System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIComponentBase, _dec, _class, _crd, ccclass, property, MainuiComp;

  function _reportPossibleCrUseOfUIComponentBase(extras) {
    _reporterNs.report("UIComponentBase", "db://assets/core/gui/base/UICompBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UIComponentBase = _unresolved_2.UIComponentBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47db3XwcVFGYIcF40zRTgci", "MainuiComp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      /**
       * 主界面组件
       */
      _export("MainuiComp", MainuiComp = (_dec = ccclass('MainuiComp'), _dec(_class = class MainuiComp extends (_crd && UIComponentBase === void 0 ? (_reportPossibleCrUseOfUIComponentBase({
        error: Error()
      }), UIComponentBase) : UIComponentBase) {
        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ee4242ad6f62c757feacd6f8fd3f27fc3ac04ce.js.map