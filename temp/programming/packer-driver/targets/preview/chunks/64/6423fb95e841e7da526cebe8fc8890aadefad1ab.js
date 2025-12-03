System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, LayerHelper, LayerUISceneNode, _crd;

  function _reportPossibleCrUseOfLayerHelper(extras) {
    _reporterNs.report("LayerHelper", "./LayerHelper", _context.meta, extras);
  }

  _export("LayerUISceneNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      LayerHelper = _unresolved_2.LayerHelper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebf09Zt49RLJpdU2qAW3lDu", "LayerUISceneNode", undefined);

      __checkObsolete__(['Node']);

      _export("LayerUISceneNode", LayerUISceneNode = class LayerUISceneNode extends Node {
        constructor(name) {
          super(name);
          (_crd && LayerHelper === void 0 ? (_reportPossibleCrUseOfLayerHelper({
            error: Error()
          }), LayerHelper) : LayerHelper).setFullScreen(this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6423fb95e841e7da526cebe8fc8890aadefad1ab.js.map