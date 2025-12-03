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
        async load(options) {
          const bundleName = options.bundleName || this.defaultBundleName;
          const bundle = await this.ensureBundle(bundleName);
          const path = options.path;
          const type = options.type;
          const assetPromise = new Promise((resolve, reject) => {
            bundle.load(path, type, (err, asset) => {
              if (err) {
                reject(err);
                (_crd && Fwk === void 0 ? (_reportPossibleCrUseOfFwk({
                  error: Error()
                }), Fwk) : Fwk).log.error(`ResManager: 资源加载失败 - Bundle: ${bundleName}, Path: ${path}, Error: ${err.message}`);
              } else {
                resolve(asset);
              }
            });
          });
          return assetPromise;
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
         * @param options 释放选项
         */


        release(options) {
          const bundleName = options.bundleName || this.defaultBundleName;
          const bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            const asset = bundle.get(options.path);

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