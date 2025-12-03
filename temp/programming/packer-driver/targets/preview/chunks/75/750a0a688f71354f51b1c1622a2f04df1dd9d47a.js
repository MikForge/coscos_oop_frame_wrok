System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIMultiLayerNode, UIPopupLayerNode, _crd;

  function _reportPossibleCrUseOfUIMultiLayerNode(extras) {
    _reporterNs.report("UIMultiLayerNode", "../base/UIMultiLayerNode", _context.meta, extras);
  }

  _export("UIPopupLayerNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UIMultiLayerNode = _unresolved_2.UIMultiLayerNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2b81zlYTVDEr7+L0Vnrl+m", "UIPopupLayerNode", undefined);

      _export("UIPopupLayerNode", UIPopupLayerNode = class UIPopupLayerNode extends (_crd && UIMultiLayerNode === void 0 ? (_reportPossibleCrUseOfUIMultiLayerNode({
        error: Error()
      }), UIMultiLayerNode) : UIMultiLayerNode) {
        constructor(name) {
          super(name);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=750a0a688f71354f51b1c1622a2f04df1dd9d47a.js.map