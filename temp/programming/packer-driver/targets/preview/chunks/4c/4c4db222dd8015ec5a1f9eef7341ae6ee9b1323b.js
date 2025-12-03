System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UIViewState, _crd;

  function _reportPossibleCrUseOfUIComponentConfig(extras) {
    _reporterNs.report("UIComponentConfig", "db://assets/core/common/struct/ui-structs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIComponentParam(extras) {
    _reporterNs.report("UIComponentParam", "db://assets/core/common/struct/ui-structs", _context.meta, extras);
  }

  _export("UIViewState", void 0);

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

      _cclegacy._RF.push({}, "b959cnoJaVEkKsrMwIiLlsB", "UIViewState", undefined);

      __checkObsolete__(['Node']);

      /**
       * UI 界面组件状态
       */
      _export("UIViewState", UIViewState = class UIViewState {
        constructor() {
          /** 界面唯一编号 */
          this.uiid = null;

          /** 界面配置 */
          this.config = null;

          /** 窗口事件 */
          this.params = null;

          /** 是否在使用状态 */
          this.valid = true;

          /** 界面根节点 */
          this.node = null;
        }

        /**
         * 初始化 UI 视图状态
         * @param uiid 界面唯一编号
         * @param config 界面配置
         * @param params 窗口事件参数
         * @param node 界面根节点（可选）
         */
        init(uiid, config, params, node) {
          this.uiid = uiid;
          this.config = config;
          this.params = params || {};
          this.valid = true;

          if (node) {
            this.node = node;
          }

          return this;
        }
        /**
         * 重置状态
         */


        reset() {
          this.uiid = null;
          this.config = null;
          this.params = null;
          this.valid = false;
          this.node = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c4db222dd8015ec5a1f9eef7341ae6ee9b1323b.js.map