import { LayerType } from "../enum/ui-layer.enum";

export class utils {


    /** 获取层级枚举的字符串键名
     * @param layer 层级枚举值
     * @returns 层级枚举的字符串键名
     */
    static getLayerKey(layer: LayerType): string {
        return LayerType[layer] as string;
    }
    /**
     * 通用 Promise 包装工具
     * 将回调风格的 API 转换为 Promise 风格
     * @param fn 需要 Promise 化的函数
     * @param args 传递给函数的参数
     */
    static promisify<T = any>(
        fn: (...args: any[]) => void,
        ...args: any[]
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            fn(...args, (err: Error | null, data: T) => {
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
    static enumKeys<E>(e: E): string[] {
        return Object.keys(e).filter(k => isNaN(Number(k)));
    }

    /**
     * 返回枚举的 [键, 值] 列表
     */
    static enumEntries<E>(e: E): [string, number | string][] {
        return utils.enumKeys(e).map(k => [k, (e as any)[k]]);
    }

    /**
     * 返回枚举的值列表（数字或字符串）
     */
    static enumValues<E>(e: E): (number | string)[] {
        return utils.enumEntries(e).map(([_, v]) => v);
    }
}

