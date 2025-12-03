System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Node, Prefab, UIHelper, UIElementComponent, Fwk, UILayerNodeBase, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfUIHelper(extras) {
    _reporterNs.report("UIHelper", "../UIHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIViewState(extras) {
    _reporterNs.report("UIViewState", "./UIViewState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIElementComponent(extras) {
    _reporterNs.report("UIElementComponent", "../layer/UIElementComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFwk(extras) {
    _reporterNs.report("Fwk", "../../Fwks", _context.meta, extras);
  }

  _export("UILayerNodeBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      UIHelper = _unresolved_2.UIHelper;
    }, function (_unresolved_3) {
      UIElementComponent = _unresolved_3.UIElementComponent;
    }, function (_unresolved_4) {
      Fwk = _unresolved_4.Fwk;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b43672zWtJk4OhNVyq6cU1", "UILayerNodeBase", undefined);
      /**
       * 
       * P0 - 立即修复:
      
      改用组合替代继承 Node （引用ecs架构）
      完善错误处理和类型定义
      
      P1 - 近期优化:
      
      实现可配置的超时机制
      添加资源引用计数
      优化状态查询接口
      
      P2 - 长期演进:
      
      引入依赖注入容器
      实现 UI 生命周期的中间件机制
      添加性能监控埋点
       * 
       */


      __checkObsolete__(['instantiate', 'Node', 'Prefab']);

      _export("UILayerNodeBase", UILayerNodeBase = class UILayerNodeBase extends Node {
        constructor(name) {
          super(name);

          /** 全局窗口打开失败事件 */
          this.onOpenFailure = null;

          /** 显示界面节点集合 */
          this.ui_nodes = new Map();
          (_crd && UIHelper === void 0 ? (_reportPossibleCrUseOfUIHelper({
            error: Error()
          }), UIHelper) : UIHelper).setFullScreen(this);
          this.on(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
          this.on(Node.EventType.CHILD_REMOVED, this.onChildRemoved, this);
        }

        onChildAdded(child) {}

        onChildRemoved(child) {}

        addView(uiInfo) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.ui_nodes.has(uiInfo.config.prefab) && _this.ui_nodes.get(uiInfo.config.prefab).valid) {
              (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).log.debug("UILayerNodeBase: \u5DF2\u5B58\u5728\u76F8\u540C\u7684 UI \u8282\u70B9\uFF0C\u65E0\u6CD5\u91CD\u590D\u6DFB\u52A0: " + uiInfo.config.prefab);
              return Promise.reject("\u5DF2\u5B58\u5728\u76F8\u540C\u7684 UI \u8282\u70B9\uFF0C\u65E0\u6CD5\u91CD\u590D\u6DFB\u52A0: " + uiInfo.config.prefab);
            }

            yield _this.load(uiInfo);

            _this.ui_nodes.set(uiInfo.config.prefab, uiInfo);

            return uiInfo.node;
          })();
        }

        removeView(prefabPath) {
          var UIViewStateinfo = this.ui_nodes.get(prefabPath);
          if (UIViewStateinfo == null) return;
          var need_realse = UIViewStateinfo.config.destroy;

          if (!need_realse) {// 可以实现界面缓存逻辑
          }

          var comp = UIViewStateinfo.node.getComponent(_crd && UIElementComponent === void 0 ? (_reportPossibleCrUseOfUIElementComponent({
            error: Error()
          }), UIElementComponent) : UIElementComponent);

          if (comp) {
            comp.finalizeRemoveUI();

            if (need_realse) {
              comp.destroyNode();
              this.closeUi(UIViewStateinfo);
            } else {
              comp.removeFromLayer();
            }
          }
        }

        load(uiInfo) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            // 加载界面资源超时提示
            if (uiInfo.node == null) {
              var timerId = setTimeout(_this2.onLoadingTimeoutGui, 1000); // 优先加载配置的指定资源包中资源，如果没配置则加载默认资源包资源

              var res = yield (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).resMgr.load({
                paths: uiInfo.config.prefab,
                type: Prefab,
                bundle: uiInfo.config.bundle
              });

              if (res) {
                uiInfo.node = instantiate(res); // // 是否启动真机安全区域显示
                // if (state.config.safeArea) state.node.addComponent(SafeArea);
                // 窗口事件委托

                var _comp = uiInfo.node.addComponent(_crd && UIElementComponent === void 0 ? (_reportPossibleCrUseOfUIElementComponent({
                  error: Error()
                }), UIElementComponent) : UIElementComponent);

                _comp.uiInfo = uiInfo;
              } else {
                (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                  error: Error()
                }), Fwk) : Fwk).log.warn("\u8DEF\u5F84\u4E3A\u3010" + uiInfo.config.prefab + "\u3011\u7684\u9884\u5236\u52A0\u8F7D\u5931\u8D25");

                _this2.failure(uiInfo);
              } // 关闭界面资源超时提示
              // oops.gui.waitClose();


              clearTimeout(timerId);
            }

            var comp = uiInfo.node.getComponent(_crd && UIElementComponent === void 0 ? (_reportPossibleCrUseOfUIElementComponent({
              error: Error()
            }), UIElementComponent) : UIElementComponent);
            var r = yield comp.initializeUI();

            if (r) {
              uiInfo.valid = true; // 标记界面为使用状态

              if (!uiInfo.params.preload) {
                uiInfo.params.preload = false;
                uiInfo.node.parent = _this2;
              }
            } else {
              console.warn("\u8DEF\u5F84\u4E3A\u3010" + uiInfo.config.prefab + "\u3011\u7684\u81EA\u5B9A\u4E49\u9884\u5904\u7406\u903B\u8F91\u5F02\u5E38.\u68C0\u67E5\u9884\u5236\u4E0A\u7ED1\u5B9A\u7684\u7EC4\u4EF6\u4E2D onAdded \u65B9\u6CD5,\u8FD4\u56DEtrue\u624D\u80FD\u6B63\u786E\u5B8C\u6210\u7A97\u53E3\u663E\u793A\u6D41\u7A0B");

              _this2.failure(uiInfo);
            }

            return uiInfo.node;
          })();
        }
        /** 加载超时事件*/


        onLoadingTimeoutGui() {// oops.gui.waitOpen();
        }
        /** 打开窗口失败逻辑 */


        failure(uiInfo) {
          this.closeUi(uiInfo);
          this.onOpenFailure && this.onOpenFailure();
        }
        /** 窗口关闭事件 */


        closeUi(uiInfo) {
          this.ui_nodes.delete(uiInfo.config.prefab); // 释放界面相关资源

          (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
            error: Error()
          }), Fwk) : Fwk).resMgr.release({
            paths: uiInfo.config.prefab,
            bundle: uiInfo.config.bundle,
            type: Prefab
          });
          (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
            error: Error()
          }), Fwk) : Fwk).log.info("\u3010\u754C\u9762\u7BA1\u7406\u3011\u91CA\u653E\u3010" + uiInfo.config.prefab + "\u3011\u754C\u9762\u8D44\u6E90");
        }

        onDestroy() {
          this.off(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
          this.off(Node.EventType.CHILD_REMOVED, this.onChildRemoved, this); // 先销毁所有 UI 节点

          this.ui_nodes.forEach(uiInfo => {
            if (uiInfo.node) {
              var comp = uiInfo.node.getComponent(_crd && UIElementComponent === void 0 ? (_reportPossibleCrUseOfUIElementComponent({
                error: Error()
              }), UIElementComponent) : UIElementComponent);

              if (comp) {
                comp.finalizeRemoveUI();
                comp.destroyNode();
              }
            }
          }); // 清理所有 UI 节点

          this.ui_nodes.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc33b3afa35f7973786928d3418821b70c1f672b.js.map