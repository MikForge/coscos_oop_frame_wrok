System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UILayerNodeBase, Fwk, UISingletonLayerNode, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        addView(uiInfo) {
          var _superprop_getAddView = () => super.addView,
              _this = this;

          return _asyncToGenerator(function* () {
            if (_this.ui_nodes.size >= UISingletonLayerNode.MAX_NODES) {
              (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).log.warn("UISingletonLayerNode: \u8FBE\u5230\u6700\u5927\u8282\u70B9\u6570\u9650\u5236\uFF0C\u65E0\u6CD5\u6DFB\u52A0\u65B0\u8282\u70B9");
              return Promise.reject("\u8FBE\u5230\u6700\u5927\u8282\u70B9\u6570\u9650\u5236");
            }

            return yield _superprop_getAddView().call(_this, uiInfo);
          })();
        }

      });

      UISingletonLayerNode.MAX_NODES = 1;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bbded175c3f304266b65c9568d3e1556a2af49ec.js.map