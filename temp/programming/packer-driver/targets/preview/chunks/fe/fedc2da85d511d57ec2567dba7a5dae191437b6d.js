System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UIComponentBase, _dec, _class, _crd, ccclass, property, UIElementComponent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfUIViewState(extras) {
    _reporterNs.report("UIViewState", "../base/UIViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIComponentBase(extras) {
    _reporterNs.report("UIComponentBase", "../base/UICompBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      UIComponentBase = _unresolved_2.UIComponentBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a85f5XPcplEOKxdGucFlmkv", "UIElementComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * UI 元素组件基类
       * 用于管理 UI的生命周期和行为
       * @export
       * @class UIElementComponent
       * @extends {Component}
       */

      _export("UIElementComponent", UIElementComponent = (_dec = ccclass('UIElementComponent'), _dec(_class = class UIElementComponent extends Component {
        constructor() {
          super(...arguments);

          /** 视图参数 */
          this.uiInfo = null;

          /** 关闭窗口之前 */
          this.onClose = null;
        }

        /**
         * 初始化界面元素，触发所有 UI 组件的 onAdded 事件
         * @returns {Promise<boolean>} 返回一个 Promise，解析为 true 表示初始化成功，false 表示被中断
         */
        initializeUI() {
          var _this = this;

          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            /**
             * 触发所有挂载在节点上的 UI 组件的 onAdded 事件
             */
            for (var i = 0; i < _this.node.components.length; i++) {
              var component = _this.node.components[i];
              if (!(component instanceof (_crd && UIComponentBase === void 0 ? (_reportPossibleCrUseOfUIComponentBase({
                error: Error()
              }), UIComponentBase) : UIComponentBase))) continue;
              var result = yield component.onAdded(_this.uiInfo.params.data);

              if (result === false) {
                resolve(false);
                return;
              }
            }

            resolve(true);
          }));
        }
        /**
         * 触发 onBeforeRemove 事件，并执行关闭前的回调
         */


        finalizeRemoveUI() {
          if (this.uiInfo.valid === false) return;

          for (var i = 0; i < this.node.components.length; i++) {
            var component = this.node.components[i];
            if (!(component instanceof (_crd && UIComponentBase === void 0 ? (_reportPossibleCrUseOfUIComponentBase({
              error: Error()
            }), UIComponentBase) : UIComponentBase))) continue;
            component.onBeforeRemove();
          }

          this.onClose && this.onClose();
        }
        /**
         * 销毁节点并释放资源
         */


        destroyNode() {
          // 先触发组件的 onRemoved
          this.triggerComponentsOnRemoved(); // 销毁节点

          this.node.destroy();
        }
        /**
         * 从 层级 中移除 ViewNode
         * 支持 界面缓存 逻辑
         */


        removeFromLayer() {
          this.node.removeFromParent();
          this.triggerComponentsOnRemoved();
        }
        /**
         * 触发所有 UI 组件的 onRemoved 事件
         */


        triggerComponentsOnRemoved() {
          for (var i = 0; i < this.node.components.length; i++) {
            var component = this.node.components[i];
            if (!(component instanceof (_crd && UIComponentBase === void 0 ? (_reportPossibleCrUseOfUIComponentBase({
              error: Error()
            }), UIComponentBase) : UIComponentBase))) continue;
            component.onRemoved();
          }
        }

        onDestroy() {
          this.uiInfo = null;
          this.onClose = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fedc2da85d511d57ec2567dba7a5dae191437b6d.js.map