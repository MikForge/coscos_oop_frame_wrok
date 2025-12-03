System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LayerType, PopUpType, enumEntries, Fwk, UIMgr, _crd;

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../../common/enum/ui-layer.enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopUpType(extras) {
    _reporterNs.report("PopUpType", "../../common/enum/ui-layer.enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfenumEntries(extras) {
    _reporterNs.report("enumEntries", "../../common/enum/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFwk(extras) {
    _reporterNs.report("Fwk", "../../Fwks", _context.meta, extras);
  }

  _export("UIMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      LayerType = _unresolved_2.LayerType;
      PopUpType = _unresolved_2.PopUpType;
    }, function (_unresolved_3) {
      enumEntries = _unresolved_3.enumEntries;
    }, function (_unresolved_4) {
      Fwk = _unresolved_4.Fwk;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12b82bmbYZGcaDFvGHXOyPy", "UIMgr", undefined);

      __checkObsolete__(['Node', 'Camera']);

      _export("UIMgr", UIMgr = class UIMgr {
        constructor() {
          /** UI 根节点 */
          this.uiRoot = void 0;

          /** UI 摄像机 */
          this.uiCamera = void 0;
        }
        /** 
         * 初始化 UI节点
         * @param uiRoot UI 根节点
         */


        initLayer(uiRoot) {
          // 按枚举值升序排序后遍历
          var layerEntries = (_crd && enumEntries === void 0 ? (_reportPossibleCrUseOfenumEntries({
            error: Error()
          }), enumEntries) : enumEntries)(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).sort((a, b) => Number(a[1]) - Number(b[1]));

          for (var [layerName, layerType] of layerEntries) {
            (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
              error: Error()
            }), Fwk) : Fwk).log.trace("UIMgr init layer: " + layerName + " (" + layerType + ")");
          }

          var popupEntries = (_crd && enumEntries === void 0 ? (_reportPossibleCrUseOfenumEntries({
            error: Error()
          }), enumEntries) : enumEntries)(_crd && PopUpType === void 0 ? (_reportPossibleCrUseOfPopUpType({
            error: Error()
          }), PopUpType) : PopUpType).sort((a, b) => Number(a[1]) - Number(b[1]));

          for (var [popUpName, popUpType] of popupEntries) {
            (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
              error: Error()
            }), Fwk) : Fwk).log.trace("UIMgr init popup type: " + popUpName + " (" + popUpType + ")");
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=963ee58f8eb26cffb3d6ef9be3f3b929a2f05034.js.map