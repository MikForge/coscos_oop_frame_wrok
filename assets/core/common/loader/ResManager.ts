


import { __private, Asset, assetManager, AssetManager, resources } from "cc";
import { utils } from "../utils/utils";
import { Fwk } from "../../Fwks";

export type AssetType<T = Asset> = __private.__types_globals__Constructor<T>;

// 补充类型声明
export type Paths = string | string[];
export type ProgressCallback = (finished: number, total: number, item: any) => void;
export type CompleteCallback = (err: Error | null, asset: any) => void;

/** 加载普通资源的参数 */
export interface IResArgs<T extends Asset> {
    /** 资源包名 */
    bundle?: string;
    /** 资源路径 */
    paths: Paths;
    /** 资源类型 */
    type: AssetType<T>;
    /** 资源加载进度 */
    onProgress?: ProgressCallback;
    /** 资源加载完成 */
    onComplete?: CompleteCallback;
}

/** 加载目录资源的参数 */
export interface IResDirArgs<T extends Asset> {
    /** 资源包名 */
    bundle?: string;
    /** 资源文件夹路径 */
    dir: string;
    /** 资源类型 */
    type: AssetType<T>;
    /** 资源加载进度 */
    onProgress?: ProgressCallback;
    /** 资源加载完成 */
    onComplete?: CompleteCallback;
}

/**
 * 资源管理器
 */
export class ResManager {


    /** 全局默认加载的资源包名 */
    defaultBundleName: string = "resources";

    /**
     * 加载资源
     * @param args IResArgs 参数
     */
    async load<T extends Asset>(args: IResArgs<T>): Promise<T | T[]> {
        const bundleName: string = args.bundle || this.defaultBundleName;
        const bundle: AssetManager.Bundle = await this.ensureBundle(bundleName);

        return new Promise<T | T[]>((resolve, reject) => {
            bundle.load(
                args.paths as any,
                args.type,
                args.onProgress,
                (err: Error | null, assets: any) => {
                    if (err) {
                        reject(err);
                        Fwk.log.error(`ResManager: 资源加载失败 - Bundle: ${bundleName}, Paths: ${JSON.stringify(args.paths)}, Error: ${err.message}`);
                    } else {
                        resolve(assets);
                        args.onComplete?.(null, assets);
                    }
                }
            );
        });
    }

    /**
     * 预加载资源
     * @param args IResArgs 参数
     */
    async preload<T extends Asset>(args: IResArgs<T>): Promise<void> {
        const bundleName: string = args.bundle || this.defaultBundleName;
        const bundle: AssetManager.Bundle = await this.ensureBundle(bundleName);

        return new Promise<void>((resolve, reject) => {
            bundle.preload(
                args.paths as any,
                args.type,
                args.onProgress,
                (err: Error | null) => {
                    if (err) {
                        reject(err);
                        Fwk.log.error(`ResManager: 资源预加载失败 - Bundle: ${bundleName}, Paths: ${JSON.stringify(args.paths)}, Error: ${err.message}`);
                    } else {
                        resolve();
                        args.onComplete?.(null, null);
                    }
                }
            );
        });
    }

    /**
     * 加载目录资源
     * @param args IResDirArgs 参数
     */
    async loadDir<T extends Asset>(args: IResDirArgs<T>): Promise<T[]> {
        const bundleName: string = args.bundle || this.defaultBundleName;
        const bundle: AssetManager.Bundle = await this.ensureBundle(bundleName);

        return new Promise<T[]>((resolve, reject) => {
            bundle.loadDir(
                args.dir,
                args.type,
                args.onProgress,
                (err: Error | null, assets: T[]) => {
                    if (err) {
                        reject(err);
                        Fwk.log.error(`ResManager: 目录资源加载失败 - Bundle: ${bundleName}, Dir: ${args.dir}, Error: ${err.message}`);
                    } else {
                        resolve(assets);
                        args.onComplete?.(null, assets);
                    }
                }
            );
        });
    }

    /**
     * 预加载目录资源
     * @param args IResDirArgs 参数
     */
    async preloadDir<T extends Asset>(args: IResDirArgs<T>): Promise<void> {
        const bundleName: string = args.bundle || this.defaultBundleName;
        const bundle: AssetManager.Bundle = await this.ensureBundle(bundleName);

        return new Promise<void>((resolve, reject) => {
            bundle.preloadDir(
                args.dir,
                args.type,
                args.onProgress,
                (err: Error | null) => {
                    if (err) {
                        reject(err);
                        Fwk.log.error(`ResManager: 目录资源预加载失败 - Bundle: ${bundleName}, Dir: ${args.dir}, Error: ${err.message}`);
                    } else {
                        resolve();
                        args.onComplete?.(null, null);
                    }
                }
            );
        });
    }

    /**
     * 加载资源包
     * @param name 资源包名
     * @param options 资源参数,例:{ version: "74fbe" }
     */
    async loadBundle(name: string, options: Record<string, any> = {}): Promise<AssetManager.Bundle> {
        const bundlePromise: Promise<AssetManager.Bundle> = new Promise<AssetManager.Bundle>((resolve, reject) => {
            assetManager.loadBundle(name, options, (err: Error | null, bundle: AssetManager.Bundle) => {
                if (err) {
                    reject(err);
                    Fwk.log.error(`ResManager: 资源包加载失败 - Name: ${name}, Error: ${err.message}`);
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
    getBundle(name: string): AssetManager.Bundle | undefined {
        return assetManager.bundles.get(name);
    }

    /**
     * 确保资源包已加载
     */
    private async ensureBundle(name: string): Promise<AssetManager.Bundle> {
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
    release<T extends Asset>(args: IResArgs<T>) {
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
    releaseDir<T extends Asset>(args: IResDirArgs<T>) {
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


}