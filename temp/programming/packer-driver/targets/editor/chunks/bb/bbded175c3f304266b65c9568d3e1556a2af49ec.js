System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UILayerNodeBase, Fwk, UISingletonLayerNode, _crd;

  function _reportPossibleCrUseOfUILayerNodeBase(extras) {
    _reporterNs.report("UILayerNodeBase", "../base/UILayerNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIViewState(extras) {
    _reporterNs.report("UIViewState", "./UIViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFwk(extras) {
    _reporterNs.report("Fwk", "../../Fwks", _context.meta, extras);
  }

  _export("UISingletonLayerNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      UILayerNodeBase = _unresolved_2.UILayerNodeBase;
    }, function (_unresolved_3) {
      Fwk = _unresolved_3.Fwk;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f090aU5Nt5MyaZe/3QEWnlj", "UISingletonLayerNode", undefined);

      __checkObsolete__(['Node', 'Prefab', 'UI', 'instantiate']);

      _export("UISingletonLayerNode", UISingletonLayerNode = class UISingletonLayerNode extends (_crd && UILayerNodeBase === void 0 ? (_reportPossibleCrUseOfUILayerNodeBase({
        error: Error()
      }), UILayerNodeBase) : UILayerNodeBase) {
        constructor(name) {
          super(name);
        }

        async addView(uiInfo) {
          if (this.ui_nodes.size >= UISingletonLayerNode.MAX_NODES) {
            (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
              error: Error()
            }), Fwk) : Fwk).log.warn(`UISingletonLayerNode: 达到最大节点数限制，无法添加新节点`);
            return Promise.reject(`达到最大节点数限制`);
          }

          return await super.addView(uiInfo);
        }

      });

      UISingletonLayerNode.MAX_NODES = 1;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bbded175c3f304266b65c9568d3e1556a2af49ec.js.map