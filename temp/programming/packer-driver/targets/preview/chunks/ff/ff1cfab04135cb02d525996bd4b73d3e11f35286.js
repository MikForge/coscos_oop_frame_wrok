System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LayerType, utils, _crd, ViewId, UI_MANIFEST;

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "db://assets/core/common/enum/ui-layer.enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIComponentConfig(extras) {
    _reporterNs.report("UIComponentConfig", "db://assets/core/common/struct/ui-structs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "db://assets/core/common/utils/utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LayerType = _unresolved_2.LayerType;
    }, function (_unresolved_3) {
      utils = _unresolved_3.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23a6d83yiBB5qpGxAjHeiHq", "UIManifest", undefined);

      /** 界面唯一标识（服务器/代码通过枚举触发打开界面） */
      _export("ViewId", ViewId = /*#__PURE__*/function (ViewId) {
        ViewId["Loading"] = "loading";
        ViewId["Alert"] = "alert";
        ViewId["Confirm"] = "confirm";
        ViewId["MainUI"] = "main_ui";
        return ViewId;
      }({}));
      /** 界面配置清单（key = ViewId） */


      _export("UI_MANIFEST", UI_MANIFEST = {
        [ViewId.Loading]: {
          layer: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getLayerKey((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).UIScene),
          prefab: "gui/loading/loadingUI",
          bundle: "resources"
        },
        [ViewId.Alert]: {
          layer: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getLayerKey((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp),
          prefab: "common/prefab/alert",
          bundle: "resources",
          mask: true,
          vacancy: true
        },
        [ViewId.Confirm]: {
          layer: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getLayerKey((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp),
          prefab: "common/prefab/confirm",
          bundle: "resources",
          mask: true,
          vacancy: true
        },
        [ViewId.MainUI]: {
          layer: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getLayerKey((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).UIScene),
          prefab: "gui/mainui/MainUI",
          bundle: "resources"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff1cfab04135cb02d525996bd4b73d3e11f35286.js.map