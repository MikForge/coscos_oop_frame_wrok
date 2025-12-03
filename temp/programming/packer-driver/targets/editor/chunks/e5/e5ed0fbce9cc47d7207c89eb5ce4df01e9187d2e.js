System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, UIComponentBase;

  function _reportPossibleCrUseOfIUILifecycle(extras) {
    _reporterNs.report("IUILifecycle", "../../common/struct/ui-structs", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a47d8kA0RJEr9W1KH92MDM", "UICompBase", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass
      } = _decorator);
      /**
       * UI 组件基类
       */

      _export("UIComponentBase", UIComponentBase = (_dec = ccclass("UIComponentBase"), _dec(_class = class UIComponentBase extends Component {
        async onAdded(data) {
          return true;
        }
        /** UI 移除前调用 */


        onBeforeRemove() {}
        /** UI 移除后调用 */


        onRemoved() {}

        onDestroy() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e5ed0fbce9cc47d7207c89eb5ce4df01e9187d2e.js.map