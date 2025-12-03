// sdk/SdkManager.ts
import { sys } from 'cc';
import { ISdkPlatform } from './base/ISdkPlatform';
import { PayParams, TrackEventPayload } from './SdkTypes';
import { Fwk } from '../../core/Fwks';
import { WxMiniSdkPlatform } from './platform/WxMiniSdkPlatform';
import { NativeSdkPlatform } from './platform/NativeSdkPlatform';
import { WebSdkPlatform } from './platform/WebSdkPlatform';

class SdkManager {
    private static _inst: SdkManager;
    static get inst(): SdkManager {
        if (!this._inst) this._inst = new SdkManager();
        return this._inst;
    }

    private _platform!: ISdkPlatform;
    private _inited = false;

    /** 初始化：选平台 + 调平台 init */
    async init(): Promise<void> {
        if (this._inited) return;

        this._platform = this.detectPlatform();
        
        Fwk.log.info('[SDK] use platform:' + this._platform.name);

        await this._platform.init();
        this._inited = true;
    }

    private detectPlatform(): ISdkPlatform {
        // 这里只是示例，实际可以再细分渠道
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            return new WxMiniSdkPlatform();
        } else if (sys.isNative) {
            return new NativeSdkPlatform();
        } else {
            return new WebSdkPlatform();
        }
    }

    // ==== 对外封装接口 ====

    async login() {
        if (!this._inited) await this.init();
        return this._platform.login();
    }

    async pay(params: PayParams) {
        if (!this._inited) await this.init();
        return this._platform.pay(params);
    }

    async showRewardAd(placementId: string) {
        if (!this._inited) await this.init();
        return this._platform.showRewardAd(placementId);
    }

    trackEvent(data: TrackEventPayload) {
        if (!this._inited) {
            // 简单做法：没初始化就先丢日志，或者缓存起来
            Fwk.log.warn(`[SDK] trackEvent before init: ${data.event}` + JSON.stringify(data));
            return;
        }
        this._platform.trackEvent(data);
    }
}

// 对外暴露一个全局单例
export const SdkMgr = SdkManager.inst;
