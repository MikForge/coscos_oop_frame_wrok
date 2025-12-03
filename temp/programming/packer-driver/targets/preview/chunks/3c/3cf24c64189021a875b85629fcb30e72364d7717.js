System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, Fwk, ResManager, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfFwk(extras) {
    _reporterNs.report("Fwk", "../../Fwks", _context.meta, extras);
  }

  _export("ResManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      Fwk = _unresolved_2.Fwk;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e1013E4kBxFa5tW/AkrjgNF", "ResManager", undefined);

      __checkObsolete__(['__private', 'Asset', 'assetManager', 'AssetManager', 'resources']);

      /**
       * 资源操作选项
       */

      /**
       * 资源管理器
       */
      _export("ResManager", ResManager = class ResManager {
        constructor() {
          /** 全局默认加载的资源包名 */
          this.defaultBundleName = "resources";
        }

        /**
         * 加载资源
         * @param options 加载选项
         */
        load(options) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var bundleName = options.bundleName || _this.defaultBundleName;
            var bundle = yield _this.ensureBundle(bundleName);
            var path = options.path;
            var type = options.type;
            var assetPromise = new Promise((resolve, reject) => {
              bundle.load(path, type, (err, asset) => {
                if (err) {
                  reject(err);
                  (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                    error: Error()
                  }), Fwk) : Fwk).log.error("ResManager: \u8D44\u6E90\u52A0\u8F7D\u5931\u8D25 - Bundle: " + bundleName + ", Path: " + path + ", Error: " + err.message);
                } else {
                  resolve(asset);
                }
              });
            });
            return assetPromise;
          })();
        }
        /**
         * 加载资源包
         * @param name 资源包名
         * @param options 资源参数,例:{ version: "74fbe" }
         */


        loadBundle(name, options) {
          return _asyncToGenerator(function* () {
            if (options === void 0) {
              options = {};
            }

            var bundlePromise = new Promise((resolve, reject) => {
              assetManager.loadBundle(name, options, (err, bundle) => {
                if (err) {
                  reject(err);
                  (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                    error: Error()
                  }), Fwk) : Fwk).log.error("ResManager: \u8D44\u6E90\u5305\u52A0\u8F7D\u5931\u8D25 - Name: " + name + ", Error: " + err.message);
                } else {
                  resolve(bundle);
                }
              });
            });
            return bundlePromise;
          })();
        }
        /**
         * 获取资源包
         * @param name 资源包名
         */


        getBundle(name) {
          return assetManager.bundles.get(name);
        }
        /**
         * 确保资源包已加载
         */


        ensureBundle(name) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var bundle = assetManager.bundles.get(name);

            if (!bundle) {
              bundle = yield _this2.loadBundle(name);
            }

            return bundle;
          })();
        }
        /**
         * 释放资源
         * @param options 释放选项
         */


        release(options) {
          var bundleName = options.bundleName || this.defaultBundleName;
          var bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            var asset = bundle.get(options.path);

            if (asset) {
              asset.decRef();
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3cf24c64189021a875b85629fcb30e72364d7717.js.map