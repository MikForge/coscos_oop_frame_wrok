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

      // 补充类型声明

      /** 加载普通资源的参数 */

      /** 加载目录资源的参数 */

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
         * @param args IResArgs 参数
         */
        load(args) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var bundleName = args.bundle || _this.defaultBundleName;
            var bundle = yield _this.ensureBundle(bundleName);
            return new Promise((resolve, reject) => {
              bundle.load(args.paths, args.type, args.onProgress, (err, assets) => {
                if (err) {
                  reject(err);
                  (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                    error: Error()
                  }), Fwk) : Fwk).log.error("ResManager: \u8D44\u6E90\u52A0\u8F7D\u5931\u8D25 - Bundle: " + bundleName + ", Paths: " + JSON.stringify(args.paths) + ", Error: " + err.message);
                } else {
                  resolve(assets);
                  args.onComplete == null || args.onComplete(null, assets);
                }
              });
            });
          })();
        }
        /**
         * 预加载资源
         * @param args IResArgs 参数
         */


        preload(args) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var bundleName = args.bundle || _this2.defaultBundleName;
            var bundle = yield _this2.ensureBundle(bundleName);
            return new Promise((resolve, reject) => {
              bundle.preload(args.paths, args.type, args.onProgress, err => {
                if (err) {
                  reject(err);
                  (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                    error: Error()
                  }), Fwk) : Fwk).log.error("ResManager: \u8D44\u6E90\u9884\u52A0\u8F7D\u5931\u8D25 - Bundle: " + bundleName + ", Paths: " + JSON.stringify(args.paths) + ", Error: " + err.message);
                } else {
                  resolve();
                  args.onComplete == null || args.onComplete(null, null);
                }
              });
            });
          })();
        }
        /**
         * 加载目录资源
         * @param args IResDirArgs 参数
         */


        loadDir(args) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var bundleName = args.bundle || _this3.defaultBundleName;
            var bundle = yield _this3.ensureBundle(bundleName);
            return new Promise((resolve, reject) => {
              bundle.loadDir(args.dir, args.type, args.onProgress, (err, assets) => {
                if (err) {
                  reject(err);
                  (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                    error: Error()
                  }), Fwk) : Fwk).log.error("ResManager: \u76EE\u5F55\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25 - Bundle: " + bundleName + ", Dir: " + args.dir + ", Error: " + err.message);
                } else {
                  resolve(assets);
                  args.onComplete == null || args.onComplete(null, assets);
                }
              });
            });
          })();
        }
        /**
         * 预加载目录资源
         * @param args IResDirArgs 参数
         */


        preloadDir(args) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var bundleName = args.bundle || _this4.defaultBundleName;
            var bundle = yield _this4.ensureBundle(bundleName);
            return new Promise((resolve, reject) => {
              bundle.preloadDir(args.dir, args.type, args.onProgress, err => {
                if (err) {
                  reject(err);
                  (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                    error: Error()
                  }), Fwk) : Fwk).log.error("ResManager: \u76EE\u5F55\u8D44\u6E90\u9884\u52A0\u8F7D\u5931\u8D25 - Bundle: " + bundleName + ", Dir: " + args.dir + ", Error: " + err.message);
                } else {
                  resolve();
                  args.onComplete == null || args.onComplete(null, null);
                }
              });
            });
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
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var bundle = assetManager.bundles.get(name);

            if (!bundle) {
              bundle = yield _this5.loadBundle(name);
            }

            return bundle;
          })();
        }
        /**
         * 释放资源
         * @param args 释放选项
         */


        release(args) {
          var bundleName = args.bundle || this.defaultBundleName;
          var bundle = assetManager.getBundle(bundleName);
          var path = args.paths;

          if (bundle) {
            if (Array.isArray(path)) {
              path.forEach(p => {
                var asset = bundle.get(p);
                if (asset) asset.decRef();
              });
            } else {
              var _asset = bundle.get(path);

              if (_asset) _asset.decRef();
            }
          }
        }
        /**
         * 释放目录资源
         * @param args 释放选项
         */


        releaseDir(args) {
          var bundleName = args.bundle || this.defaultBundleName;
          var bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            var infos = bundle.getDirWithPath(args.dir);
            infos.forEach(info => {
              var asset = bundle.get(info.path, args.type);
              if (asset) asset.decRef();
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3cf24c64189021a875b85629fcb30e72364d7717.js.map