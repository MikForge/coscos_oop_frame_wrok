System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, LayerType, UIType, LayerContainerType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13951JmC4NIrruPKHXbQnnn", "ui-layer.enum", undefined);

      _export("LayerType", LayerType = /*#__PURE__*/function (LayerType) {
        LayerType[LayerType["UIGame"] = 0] = "UIGame";
        LayerType[LayerType["UIScene"] = 2] = "UIScene";
        LayerType[LayerType["PopUp"] = 3] = "PopUp";
        LayerType[LayerType["Notify"] = 4] = "Notify";
        LayerType[LayerType["Guide"] = 5] = "Guide";
        LayerType[LayerType["Top"] = 6] = "Top";
        return LayerType;
      }({}));

      _export("UIType", UIType = /*#__PURE__*/function (UIType) {
        UIType["UIGame"] = "UIGame";
        UIType["Scene"] = "Scene";
        UIType["PopUp"] = "PopUp";
        return UIType;
      }({}));
      /**
       * 层级容器类型
       */


      _export("LayerContainerType", LayerContainerType = /*#__PURE__*/function (LayerContainerType) {
        LayerContainerType["Single"] = "Single";
        LayerContainerType["Multi"] = "Multi";
        return LayerContainerType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aecfe355659993a5ce2058a5d916f9accc161669.js.map