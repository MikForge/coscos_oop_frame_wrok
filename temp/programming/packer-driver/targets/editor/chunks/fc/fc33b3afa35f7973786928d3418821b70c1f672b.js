System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Node, Prefab, UIHelper, UIElementComponent, Fwk, UILayerNodeBase, _crd;

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

        async addView(uiInfo) {
          if (this.ui_nodes.has(uiInfo.config.prefab) && this.ui_nodes.get(uiInfo.config.prefab).valid) {
            (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
              error: Error()
            }), Fwk) : Fwk).log.debug(`UILayerNodeBase: 已存在相同的 UI 节点，无法重复添加: ${uiInfo.config.prefab}`);
            return Promise.reject(`已存在相同的 UI 节点，无法重复添加: ${uiInfo.config.prefab}`);
          }

          await this.load(uiInfo);
          this.ui_nodes.set(uiInfo.config.prefab, uiInfo);
          return uiInfo.node;
        }

        removeView(prefabPath) {
          const UIViewStateinfo = this.ui_nodes.get(prefabPath);
          if (UIViewStateinfo == null) return;
          let need_realse = UIViewStateinfo.config.destroy;

          if (!need_realse) {// 可以实现界面缓存逻辑
          }

          const comp = UIViewStateinfo.node.getComponent(_crd && UIElementComponent === void 0 ? (_reportPossibleCrUseOfUIElementComponent({
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

        async load(uiInfo) {
          // 加载界面资源超时提示
          if (uiInfo.node == null) {
            let timerId = setTimeout(this.onLoadingTimeoutGui, 1000); // 优先加载配置的指定资源包中资源，如果没配置则加载默认资源包资源

            const res = await (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
              error: Error()
            }), Fwk) : Fwk).resMgr.load({
              path: uiInfo.config.prefab,
              type: Prefab,
              bundleName: uiInfo.config.bundle
            });

            if (res) {
              uiInfo.node = instantiate(res); // // 是否启动真机安全区域显示
              // if (state.config.safeArea) state.node.addComponent(SafeArea);
              // 窗口事件委托

              const comp = uiInfo.node.addComponent(_crd && UIElementComponent === void 0 ? (_reportPossibleCrUseOfUIElementComponent({
                error: Error()
              }), UIElementComponent) : UIElementComponent);
              comp.uiInfo = uiInfo;
            } else {
              (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).log.warn(`路径为【${uiInfo.config.prefab}】的预制加载失败`);
              this.failure(uiInfo);
            } // 关闭界面资源超时提示
            // oops.gui.waitClose();


            clearTimeout(timerId);
          }

          const comp = uiInfo.node.getComponent(_crd && UIElementComponent === void 0 ? (_reportPossibleCrUseOfUIElementComponent({
            error: Error()
          }), UIElementComponent) : UIElementComponent);
          const r = await comp.initializeUI();

          if (r) {
            uiInfo.valid = true; // 标记界面为使用状态

            if (!uiInfo.params.preload) {
              uiInfo.params.preload = false;
              uiInfo.node.parent = this;
            }
          } else {
            console.warn(`路径为【${uiInfo.config.prefab}】的自定义预处理逻辑异常.检查预制上绑定的组件中 onAdded 方法,返回true才能正确完成窗口显示流程`);
            this.failure(uiInfo);
          }

          return uiInfo.node;
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
            path: uiInfo.config.prefab,
            bundleName: uiInfo.config.bundle
          });
          (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
            error: Error()
          }), Fwk) : Fwk).log.info(`【界面管理】释放【${uiInfo.config.prefab}】界面资源`);
        }

        onDestroy() {
          this.off(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
          this.off(Node.EventType.CHILD_REMOVED, this.onChildRemoved, this); // 先销毁所有 UI 节点

          this.ui_nodes.forEach(uiInfo => {
            if (uiInfo.node) {
              const comp = uiInfo.node.getComponent(_crd && UIElementComponent === void 0 ? (_reportPossibleCrUseOfUIElementComponent({
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