System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UIConfigRegistry, _crd, uiConfigRegistry;

  function _reportPossibleCrUseOfUIComponentConfig(extras) {
    _reporterNs.report("UIComponentConfig", "../common/struct/ui-structs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfigMap(extras) {
    _reporterNs.report("UIConfigMap", "../common/struct/ui-structs", _context.meta, extras);
  }

  _export("UIConfigRegistry", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "742c3krpEpCPJLZWYSeF4tP", "UIConfigRegistry", undefined);

      __checkObsolete__(['UI']);

      /**
       * UI 配置注册器
       * 职责：管理所有 UI 配置的注册、查询、初始化
       */
      _export("UIConfigRegistry", UIConfigRegistry = class UIConfigRegistry {
        constructor() {
          this.configs = new Map();
          this.locked = false;
        }

        static getInstance() {
          if (!UIConfigRegistry.instance) {
            UIConfigRegistry.instance = new UIConfigRegistry();
          }

          return UIConfigRegistry.instance;
        }
        /** 批量初始化配置（只执行一次） */


        init(configMap) {
          if (this.locked) {
            console.warn("UIConfigRegistry 已初始化，忽略重复调用");
            return;
          }

          for (const key in configMap) {
            if (!configMap.hasOwnProperty(key)) continue;
            this.configs.set(key, configMap[key]);
          }

          this.locked = true;
        }
        /** 注册单个配置 */


        register(key, config) {
          if (this.configs.has(key)) {
            console.error(`界面 ${key} 重复注册`);
            return;
          }

          this.configs.set(key, config);
        }
        /** 获取配置 */


        get(key) {
          return this.configs.get(key) || null;
        }
        /** 检查是否存在 */


        has(key) {
          return this.configs.has(key);
        }
        /** 清空（测试用） */


        clear() {
          this.configs.clear();
          this.locked = false;
        }

      }); // 导出单例实例


      UIConfigRegistry.instance = void 0;

      _export("uiConfigRegistry", uiConfigRegistry = UIConfigRegistry.getInstance());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a448e66c195ece0dc35ced696650a6bde4f04a46.js.map