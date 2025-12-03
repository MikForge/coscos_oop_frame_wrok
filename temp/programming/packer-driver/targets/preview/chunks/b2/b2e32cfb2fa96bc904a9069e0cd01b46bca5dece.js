System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, UIHelper, UIGameLayerNode, _crd;

  function _reportPossibleCrUseOfUIHelper(extras) {
    _reporterNs.report("UIHelper", "../UIHelper", _context.meta, extras);
  }

  _export("UIGameLayerNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      UIHelper = _unresolved_2.UIHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "537faJkChpCNp9c0/rN4MGW", "UIGameLayerNode", undefined);

      __checkObsolete__(['Node']);

      _export("UIGameLayerNode", UIGameLayerNode = class UIGameLayerNode extends Node {
        constructor(name) {
          super(name);
          (_crd && UIHelper === void 0 ? (_reportPossibleCrUseOfUIHelper({
            error: Error()
          }), UIHelper) : UIHelper).setFullScreen(this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2e32cfb2fa96bc904a9069e0cd01b46bca5dece.js.map