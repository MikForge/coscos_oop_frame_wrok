System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UILayerNodeBase, UIMultiLayerNode, _crd;

  function _reportPossibleCrUseOfUILayerNodeBase(extras) {
    _reporterNs.report("UILayerNodeBase", "./UILayerNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIViewState(extras) {
    _reporterNs.report("UIViewState", "./UIViewState", _context.meta, extras);
  }

  _export("UIMultiLayerNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      UILayerNodeBase = _unresolved_2.UILayerNodeBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8dcfeb4WURIko9DkAZXqCoC", "UIMultiLayerNode", undefined);

      __checkObsolete__(['Node']);

      _export("UIMultiLayerNode", UIMultiLayerNode = class UIMultiLayerNode extends (_crd && UILayerNodeBase === void 0 ? (_reportPossibleCrUseOfUILayerNodeBase({
        error: Error()
      }), UILayerNodeBase) : UILayerNodeBase) {
        constructor(name) {
          super(name);
        }

        async addView(uiInfo) {
          return super.addView(uiInfo);
        }

      });

      UIMultiLayerNode.MAX_NODES = -1;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=849caca0c61995c809210c240377cf2b058f9d90.js.map