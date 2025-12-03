System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UILayerNodeBase, UIMultiLayerNode, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        addView(uiInfo) {
          var _superprop_getAddView = () => super.addView,
              _this = this;

          return _asyncToGenerator(function* () {
            return _superprop_getAddView().call(_this, uiInfo);
          })();
        }

      });

      UIMultiLayerNode.MAX_NODES = -1;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=849caca0c61995c809210c240377cf2b058f9d90.js.map