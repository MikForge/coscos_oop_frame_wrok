System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Camera, LayerType, UIType, enumEntries, LayerUIGameNode, LayerUISceneNode, LayerUIPopUpNode, LayerMgr, _crd, layerMap;

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../../common/enum/ui-layer.enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIType(extras) {
    _reporterNs.report("UIType", "../../common/enum/ui-layer.enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfenumEntries(extras) {
    _reporterNs.report("enumEntries", "../../common/enum/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUIGameNode(extras) {
    _reporterNs.report("LayerUIGameNode", "./LayerUIGameNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUISceneNode(extras) {
    _reporterNs.report("LayerUISceneNode", "./LayerUISceneNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUIPopUpNode(extras) {
    _reporterNs.report("LayerUIPopUpNode", "./LayerUIPopUpNode", _context.meta, extras);
  }

  _export("LayerMgr", void 0);

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
      LayerType = _unresolved_2.LayerType;
      UIType = _unresolved_2.UIType;
    }, function (_unresolved_3) {
      enumEntries = _unresolved_3.enumEntries;
    }, function (_unresolved_4) {
      LayerUIGameNode = _unresolved_4.LayerUIGameNode;
    }, function (_unresolved_5) {
      LayerUISceneNode = _unresolved_5.LayerUISceneNode;
    }, function (_unresolved_6) {
      LayerUIPopUpNode = _unresolved_6.LayerUIPopUpNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56e3f1pw1VLBpeSW1ZZfLpE", "LayerMgr", undefined);

      __checkObsolete__(['Node', 'Camera']);

      layerMap = {
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).UIGame]: (_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
          error: Error()
        }), UIType) : UIType).UIGame,
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).UIScene]: (_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
          error: Error()
        }), UIType) : UIType).Scene,
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).PopUp]: (_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
          error: Error()
        }), UIType) : UIType).PopUp,
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).Notify]: (_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
          error: Error()
        }), UIType) : UIType).PopUp,
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).Guide]: (_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
          error: Error()
        }), UIType) : UIType).PopUp,
        [(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
          error: Error()
        }), LayerType) : LayerType).Top]: (_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
          error: Error()
        }), UIType) : UIType).PopUp
      };

      _export("LayerMgr", LayerMgr = class LayerMgr {
        constructor() {
          /** UI 根节点 */
          this.uiRoot = void 0;

          /** UI 摄像机 */
          this.uiCamera = void 0;
        }
        /** 
         * 初始化 UI节点
         * @param uiRoot UI 根节点
         */


        initLayer(uiRoot) {
          this.uiRoot = uiRoot;
          this.uiCamera = this.uiRoot.getComponentInChildren(Camera); // UIType -> factory: 根据具体 UIType 创建不同类型的节点/挂载不同组件

          const uiFactories = {
            [(_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
              error: Error()
            }), UIType) : UIType).UIGame]: name => {
              const n = new (_crd && LayerUIGameNode === void 0 ? (_reportPossibleCrUseOfLayerUIGameNode({
                error: Error()
              }), LayerUIGameNode) : LayerUIGameNode)(name);
              return n;
            },
            [(_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
              error: Error()
            }), UIType) : UIType).Scene]: name => {
              const n = new (_crd && LayerUISceneNode === void 0 ? (_reportPossibleCrUseOfLayerUISceneNode({
                error: Error()
              }), LayerUISceneNode) : LayerUISceneNode)(name);
              return n;
            },
            [(_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
              error: Error()
            }), UIType) : UIType).PopUp]: name => {
              const n = new (_crd && LayerUIPopUpNode === void 0 ? (_reportPossibleCrUseOfLayerUIPopUpNode({
                error: Error()
              }), LayerUIPopUpNode) : LayerUIPopUpNode)(name);
              return n;
            }
          }; // 按枚举值升序排序后遍历

          const layerEntries = (_crd && enumEntries === void 0 ? (_reportPossibleCrUseOfenumEntries({
            error: Error()
          }), enumEntries) : enumEntries)(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).sort((a, b) => Number(a[1]) - Number(b[1]));

          for (const [layerName, layerTypeValue] of layerEntries) {
            const layerType = Number(layerTypeValue); // 从 layerMap 找到对应的 UIType

            const uiType = layerMap[layerType]; // 使用对应 factory 创建节点，若无则退回到默认 new Node

            const factory = uiFactories[uiType];
            const layerNode = factory ? factory(layerName, layerType) : new Node(layerName); // 将创建的节点加入 uiRoot

            this.uiRoot.addChild(layerNode);
            console.log(`[LayerMgr] Created layer node: ${layerName} of type ${(_crd && UIType === void 0 ? (_reportPossibleCrUseOfUIType({
              error: Error()
            }), UIType) : UIType)[uiType]} (LayerType: ${(_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
              error: Error()
            }), LayerType) : LayerType)[layerType]})`);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6748b0f2c11455354ae0831f62e8327da7c25355.js.map