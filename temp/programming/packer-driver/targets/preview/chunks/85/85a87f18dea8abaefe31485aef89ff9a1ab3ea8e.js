System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Camera, LayerContainerType, LayerType, utils, UIGameLayerNode, uiConfigRegistry, Fwk, UILayerNodeBase, UISingletonLayerNode, UIMultiLayerNode, UIViewState, UIMgr, _crd, layerMap;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfLayerContainerType(extras) {
    _reporterNs.report("LayerContainerType", "../common/enum/ui-layer.enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../common/enum/ui-layer.enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../common/utils/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIGameLayerNode(extras) {
    _reporterNs.report("UIGameLayerNode", "./layer/UIGameLayerNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIComponentConfig(extras) {
    _reporterNs.report("UIComponentConfig", "db://assets/core/common/struct/ui-structs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfigMap(extras) {
    _reporterNs.report("UIConfigMap", "db://assets/core/common/struct/ui-structs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiConfigRegistry(extras) {
    _reporterNs.report("uiConfigRegistry", "./UIConfigRegistry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIComponentParam(extras) {
    _reporterNs.report("UIComponentParam", "db://assets/core/common/struct/ui-structs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFwk(extras) {
    _reporterNs.report("Fwk", "../Fwks", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayerNodeBase(extras) {
    _reporterNs.report("UILayerNodeBase", "./base/UILayerNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUISingletonLayerNode(extras) {
    _reporterNs.report("UISingletonLayerNode", "./base/UISingletonLayerNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMultiLayerNode(extras) {
    _reporterNs.report("UIMultiLayerNode", "./base/UIMultiLayerNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIViewState(extras) {
    _reporterNs.report("UIViewState", "./base/UIViewState", _context.meta, extras);
  }

  _export("UIMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Camera = _cc.Camera;
    }, function (_unresolved_2) {
      LayerContainerType = _unresolved_2.LayerContainerType;
      LayerType = _unresolved_2.LayerType;
    }, function (_unresolved_3) {
      utils = _unresolved_3.utils;
    }, function (_unresolved_4) {
      UIGameLayerNode = _unresolved_4.UIGameLayerNode;
    }, function (_unresolved_5) {
      uiConfigRegistry = _unresolved_5.uiConfigRegistry;
    }, function (_unresolved_6) {
      Fwk = _unresolved_6.Fwk;
    }, function (_unresolved_7) {
      UILayerNodeBase = _unresolved_7.UILayerNodeBase;
    }, function (_unresolved_8) {
      UISingletonLayerNode = _unresolved_8.UISingletonLayerNode;
    }, function (_unresolved_9) {
      UIMultiLayerNode = _unresolved_9.UIMultiLayerNode;
    }, function (_unresolved_10) {
      UIViewState = _unresolved_10.UIViewState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b0769tAqpBEpqCSnbebJB6", "UIMgr", undefined);

      __checkObsolete__(['Node', 'Camera']);

      layerMap = {
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).UIScene]: (_crd && LayerContainerType === void 0 ? (_reportPossibleCrUseOfLayerContainerType({
          error: Error()
        }), LayerContainerType) : LayerContainerType).Multi,
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).PopUp]: (_crd && LayerContainerType === void 0 ? (_reportPossibleCrUseOfLayerContainerType({
          error: Error()
        }), LayerContainerType) : LayerContainerType).Multi,
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).Notify]: (_crd && LayerContainerType === void 0 ? (_reportPossibleCrUseOfLayerContainerType({
          error: Error()
        }), LayerContainerType) : LayerContainerType).Single,
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).Guide]: (_crd && LayerContainerType === void 0 ? (_reportPossibleCrUseOfLayerContainerType({
          error: Error()
        }), LayerContainerType) : LayerContainerType).Single,
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).Top]: (_crd && LayerContainerType === void 0 ? (_reportPossibleCrUseOfLayerContainerType({
          error: Error()
        }), LayerContainerType) : LayerContainerType).Single
      };

      _export("UIMgr", UIMgr = class UIMgr {
        constructor() {
          /** UI 根节点 */
          this.uiRoot = void 0;

          /** UI 摄像机 */
          this.uiCamera = void 0;

          /** 界面层集合 - 无自定义类型 */
          this.uiLayersMap = new Map();
          this.uiGameLayerNode = void 0;
        }
        /** 
         * 初始化 UI节点
         * @param uiRoot UI 根节点
         */


        initLayer(uiRoot) {
          this.uiRoot = uiRoot;
          this.uiCamera = this.uiRoot.getComponentInChildren(Camera); // 按枚举值升序排序后遍历

          var layerEntries = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).enumEntries(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).sort((a, b) => Number(a[1]) - Number(b[1]));

          for (var [layerName, layerTypeValue] of layerEntries) {
            var layerType = Number(layerTypeValue);
            var layerNode = void 0; // 特殊处理 UIGame 层

            if (layerType === (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
              error: Error()
            }), LayerType) : LayerType).UIGame) {
              var n = new (_crd && UIGameLayerNode === void 0 ? (_reportPossibleCrUseOfUIGameLayerNode({
                error: Error()
              }), UIGameLayerNode) : UIGameLayerNode)(layerName);
              this.uiGameLayerNode = n;
              layerNode = n;
            } else {
              // 从 layerMap 获取容器类型
              var containerType = layerMap[layerType]; // 根据容器类型创建对应的层节点

              if (containerType === (_crd && LayerContainerType === void 0 ? (_reportPossibleCrUseOfLayerContainerType({
                error: Error()
              }), LayerContainerType) : LayerContainerType).Single) {
                layerNode = new (_crd && UISingletonLayerNode === void 0 ? (_reportPossibleCrUseOfUISingletonLayerNode({
                  error: Error()
                }), UISingletonLayerNode) : UISingletonLayerNode)(layerName);
              } else if (containerType === (_crd && LayerContainerType === void 0 ? (_reportPossibleCrUseOfLayerContainerType({
                error: Error()
              }), LayerContainerType) : LayerContainerType).Multi) {
                layerNode = new (_crd && UIMultiLayerNode === void 0 ? (_reportPossibleCrUseOfUIMultiLayerNode({
                  error: Error()
                }), UIMultiLayerNode) : UIMultiLayerNode)(layerName);
              } else {
                // 未配置则默认创建普通节点
                layerNode = new Node(layerName);
              }
            } // 将创建的节点加入 uiRoot 并记录


            this.uiRoot.addChild(layerNode);

            if (layerNode instanceof (_crd && UILayerNodeBase === void 0 ? (_reportPossibleCrUseOfUILayerNodeBase({
              error: Error()
            }), UILayerNodeBase) : UILayerNodeBase)) {
              this.uiLayersMap.set(layerName, layerNode);
            }

            var containerTypeName = layerMap[layerType] || 'None';
            (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
              error: Error()
            }), Fwk) : Fwk).log.debug("[UIMgr] Created layer: " + layerName + " (LayerType: " + (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
              error: Error()
            }), LayerType) : LayerType)[layerType] + ", Container: " + containerTypeName + ")");
          }
        }
        /** 
         * 注册 UI 组件
         * @param configMap UI 组件配置映射表
         */


        registerUIComponents(configMap) {
          (_crd && uiConfigRegistry === void 0 ? (_reportPossibleCrUseOfuiConfigRegistry({
            error: Error()
          }), uiConfigRegistry) : uiConfigRegistry).init(configMap);
        }

        open(viewId, param) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var uiConfig = (_crd && uiConfigRegistry === void 0 ? (_reportPossibleCrUseOfuiConfigRegistry({
              error: Error()
            }), uiConfigRegistry) : uiConfigRegistry).get(viewId);

            if (!uiConfig) {
              (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).log.error("UI \u914D\u7F6E\u672A\u627E\u5230: " + viewId);
              return null;
            }

            var layerNode = _this.uiLayersMap.get(uiConfig.layer);

            if (!layerNode) {
              (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).log.error("UI \u5C42\u672A\u627E\u5230: " + uiConfig.layer + " for viewId: " + viewId);
              return null;
            } // 创建 UIViewState 实例


            var uiInfo = new (_crd && UIViewState === void 0 ? (_reportPossibleCrUseOfUIViewState({
              error: Error()
            }), UIViewState) : UIViewState)().init(viewId, uiConfig, param);
            var node = yield layerNode.addView(uiInfo);

            if (!node) {
              (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                error: Error()
              }), Fwk) : Fwk).log.error("UI \u6253\u5F00\u5931\u8D25: " + viewId + " on layer: " + uiConfig.layer);
              return Promise.reject("UI \u6253\u5F00\u5931\u8D25: " + viewId + " on layer: " + uiConfig.layer);
            }

            return node;
          })();
        }

        close(viewId) {
          var uiConfig = (_crd && uiConfigRegistry === void 0 ? (_reportPossibleCrUseOfuiConfigRegistry({
            error: Error()
          }), uiConfigRegistry) : uiConfigRegistry).get(viewId);

          if (!uiConfig) {
            (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
              error: Error()
            }), Fwk) : Fwk).log.error("UI \u914D\u7F6E\u672A\u627E\u5230: " + viewId);
            return;
          }

          var layerNode = this.uiLayersMap.get(uiConfig.layer);

          if (!layerNode) {
            (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
              error: Error()
            }), Fwk) : Fwk).log.error("UI \u5C42\u672A\u627E\u5230: " + uiConfig.layer + " for viewId: " + viewId);
            return;
          }

          layerNode.removeView(uiConfig.prefab);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=85a87f18dea8abaefe31485aef89ff9a1ab3ea8e.js.map