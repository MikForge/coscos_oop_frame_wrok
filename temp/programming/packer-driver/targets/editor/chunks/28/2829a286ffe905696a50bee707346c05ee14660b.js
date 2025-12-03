System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layers, Widget, UIHelper, _crd;

  _export("UIHelper", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layers = _cc.Layers;
      Widget = _cc.Widget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0762brX+rJIZ7wIcDeul3m0", "UIHelper", undefined);

      __checkObsolete__(['Layers']);

      /** 界面层辅助工具 */
      __checkObsolete__(['Node', 'Widget']);

      _export("UIHelper", UIHelper = class UIHelper {
        /**
         * 界面层全屏布局
         * @param node 全屏布局的节点
         */
        static setFullScreen(node) {
          const widget = node.addComponent(Widget);
          widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
          widget.left = widget.right = widget.top = widget.bottom = 0;
          widget.alignMode = 2;
          widget.enabled = true;
          node.layer = Layers.Enum.UI_2D;
          return widget;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2829a286ffe905696a50bee707346c05ee14660b.js.map