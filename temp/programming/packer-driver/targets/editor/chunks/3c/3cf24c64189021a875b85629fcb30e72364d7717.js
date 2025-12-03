System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, Fwk, ResManager, _crd;

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
        async load(args) {
          const bundleName = args.bundle || this.defaultBundleName;
          const bundle = await this.ensureBundle(bundleName);
          return new Promise((resolve, reject) => {
            bundle.load(args.paths, args.type, args.onProgress, (err, assets) => {
              if (err) {
                reject(err);
                (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                  error: Error()
                }), Fwk) : Fwk).log.error(`ResManager: 资源加载失败 - Bundle: ${bundleName}, Paths: ${JSON.stringify(args.paths)}, Error: ${err.message}`);
              } else {
                resolve(assets);
                args.onComplete == null || args.onComplete(null, assets);
              }
            });
          });
        }
        /**
         * 预加载资源
         * @param args IResArgs 参数
         */


        async preload(args) {
          const bundleName = args.bundle || this.defaultBundleName;
          const bundle = await this.ensureBundle(bundleName);
          return new Promise((resolve, reject) => {
            bundle.preload(args.paths, args.type, args.onProgress, err => {
              if (err) {
                reject(err);
                (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                  error: Error()
                }), Fwk) : Fwk).log.error(`ResManager: 资源预加载失败 - Bundle: ${bundleName}, Paths: ${JSON.stringify(args.paths)}, Error: ${err.message}`);
              } else {
                resolve();
                args.onComplete == null || args.onComplete(null, null);
              }
            });
          });
        }
        /**
         * 加载目录资源
         * @param args IResDirArgs 参数
         */


        async loadDir(args) {
          const bundleName = args.bundle || this.defaultBundleName;
          const bundle = await this.ensureBundle(bundleName);
          return new Promise((resolve, reject) => {
            bundle.loadDir(args.dir, args.type, args.onProgress, (err, assets) => {
              if (err) {
                reject(err);
                (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                  error: Error()
                }), Fwk) : Fwk).log.error(`ResManager: 目录资源加载失败 - Bundle: ${bundleName}, Dir: ${args.dir}, Error: ${err.message}`);
              } else {
                resolve(assets);
                args.onComplete == null || args.onComplete(null, assets);
              }
            });
          });
        }
        /**
         * 预加载目录资源
         * @param args IResDirArgs 参数
         */


        async preloadDir(args) {
          const bundleName = args.bundle || this.defaultBundleName;
          const bundle = await this.ensureBundle(bundleName);
          return new Promise((resolve, reject) => {
            bundle.preloadDir(args.dir, args.type, args.onProgress, err => {
              if (err) {
                reject(err);
                (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                  error: Error()
                }), Fwk) : Fwk).log.error(`ResManager: 目录资源预加载失败 - Bundle: ${bundleName}, Dir: ${args.dir}, Error: ${err.message}`);
              } else {
                resolve();
                args.onComplete == null || args.onComplete(null, null);
              }
            });
          });
        }
        /**
         * 加载资源包
         * @param name 资源包名
         * @param options 资源参数,例:{ version: "74fbe" }
         */


        async loadBundle(name, options = {}) {
          const bundlePromise = new Promise((resolve, reject) => {
            assetManager.loadBundle(name, options, (err, bundle) => {
              if (err) {
                reject(err);
                (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                  error: Error()
                }), Fwk) : Fwk).log.error(`ResManager: 资源包加载失败 - Name: ${name}, Error: ${err.message}`);
              } else {
                resolve(bundle);
              }
            });
          });
          return bundlePromise;
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


        async ensureBundle(name) {
          let bundle = assetManager.bundles.get(name);

          if (!bundle) {
            bundle = await this.loadBundle(name);
          }

          return bundle;
        }
        /**
         * 释放资源
         * @param args 释放选项
         */


        release(args) {
          const bundleName = args.bundle || this.defaultBundleName;
          const bundle = assetManager.getBundle(bundleName);
          const path = args.paths;

          if (bundle) {
            if (Array.isArray(path)) {
              path.forEach(p => {
                const asset = bundle.get(p);
                if (asset) asset.decRef();
              });
            } else {
              const asset = bundle.get(path);
              if (asset) asset.decRef();
            }
          }
        }
        /**
         * 释放目录资源
         * @param args 释放选项
         */


        releaseDir(args) {
          const bundleName = args.bundle || this.defaultBundleName;
          const bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            const infos = bundle.getDirWithPath(args.dir);
            infos.forEach(info => {
              const asset = bundle.get(info.path, args.type);
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