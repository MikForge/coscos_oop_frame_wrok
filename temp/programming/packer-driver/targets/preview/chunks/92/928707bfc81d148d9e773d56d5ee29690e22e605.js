System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, uiConfigRegistry, _crd, UI_METADATA_KEY;

  /**
   * UI 组件装饰器
   * 用于标记 UI 组件类并注册配置
   * @param key UI 唯一标识
   * @param config UI 配置对象
   * @example
   * @registerUI("LoginUI", { layer: LayerType.UI, prefab: "prefabs/Login" })
   * export class LoginUI extends Component {}
   */
  function registerUI(key, config) {
    return function (ctor) {
      // 给类添加元数据标记
      ctor[UI_METADATA_KEY] = key; // 注册配置到注册器

      (_crd && uiConfigRegistry === void 0 ? (_reportPossibleCrUseOfuiConfigRegistry({
        error: Error()
      }), uiConfigRegistry) : uiConfigRegistry).register(key, config);
    };
  }
  /**
   * 获取 UI 组件的标记 key
   * @param ctor UI 组件类
   */


  function getUIKey(ctor) {
    return ctor[UI_METADATA_KEY];
  }

  function _reportPossibleCrUseOfUIComponentConfig(extras) {
    _reporterNs.report("UIComponentConfig", "../common/struct/ui-structs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiConfigRegistry(extras) {
    _reporterNs.report("uiConfigRegistry", "./UIConfigRegistry", _context.meta, extras);
  }

  _export({
    registerUI: registerUI,
    getUIKey: getUIKey
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      uiConfigRegistry = _unresolved_2.uiConfigRegistry;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9328fSJoLxE0592rvjbjMaU", "UIDecorator", undefined);
      /**
       * UI 组件装饰器
       * 用于标记 UI 组件类并注册配置
       * 
       */


      /** UI 组件元数据标记键 */
      _export("UI_METADATA_KEY", UI_METADATA_KEY = "UI_KEY");

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=928707bfc81d148d9e773d56d5ee29690e22e605.js.map