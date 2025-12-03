System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIMultiLayerNode, UIScreenLayerNode, _crd;

  function _reportPossibleCrUseOfUIMultiLayerNode(extras) {
    _reporterNs.report("UIMultiLayerNode", "../base/UIMultiLayerNode", _context.meta, extras);
  }

  _export("UIScreenLayerNode", void 0);

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

      _cclegacy._RF.push({}, "0fc5aQz46dIMYTceCXpn8DS", "UIScreenLayerNode", undefined);

      _export("UIScreenLayerNode", UIScreenLayerNode = class UIScreenLayerNode extends (_crd && UIMultiLayerNode === void 0 ? (_reportPossibleCrUseOfUIMultiLayerNode({
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
//# sourceMappingURL=cd1cd7bef7a3682c7f073e43cc7d73b16ab7dd27.js.map