System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LayerType, utils, _crd;

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../enum/ui-layer.enum", _context.meta, extras);
  }

  _export("utils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LayerType = _unresolved_2.LayerType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3307aZvyPhJIquqTUTwQ4IC", "utils", undefined);

      _export("utils", utils = class utils {
        /** 获取层级枚举的字符串键名
         * @param layer 层级枚举值
         * @returns 层级枚举的字符串键名
         */
        static getLayerKey(layer) {
          return (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType)[layer];
        }
        /**
         * 通用 Promise 包装工具
         * 将回调风格的 API 转换为 Promise 风格
         * @param fn 需要 Promise 化的函数
         * @param args 传递给函数的参数
         */


        static promisify(fn, ...args) {
          return new Promise((resolve, reject) => {
            fn(...args, (err, data) => {
              if (err) {
                console.error('[utils.promisify]', err);
                reject(err);
              } else {
                resolve(data);
              }
            });
          });
        }
        /**
         * 返回枚举的键（排除反向映射的数字键）
         */


        static enumKeys(e) {
          return Object.keys(e).filter(k => isNaN(Number(k)));
        }
        /**
         * 返回枚举的 [键, 值] 列表
         */


        static enumEntries(e) {
          return utils.enumKeys(e).map(k => [k, e[k]]);
        }
        /**
         * 返回枚举的值列表（数字或字符串）
         */


        static enumValues(e) {
          return utils.enumEntries(e).map(([_, v]) => v);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=72fc194729d99ba66ea1ce706809fdbcc5f58895.js.map