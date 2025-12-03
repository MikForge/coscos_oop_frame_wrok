import { ISdkPlatform } from "../base/ISdkPlatform";
import { LoginResult, PayParams, RewardAdResult, RewardAdStatus, SdkPlatformName, TrackEventPayload } from "../SdkTypes";


declare const WeixinJSBridge: any;  // 在微信 H5 里会有

export class WebSdkPlatform implements ISdkPlatform {
    readonly name = SdkPlatformName.WEB;

    async init(): Promise<void> {
        // 可做统计 SDK 初始化等
    }

    async login(): Promise<LoginResult> {
        // Web 环境下，可能直接调你自己的 PHP 的 /api/login
        const res = await fetch('/api/login', { method: 'POST' });
        const data = await res.json();
        return {
            uid: data.uid,
            token: data.token,
            nick: data.nick,
        };
    }

    async pay(params: PayParams): Promise<void> {
        // 1. 向 PHP 要微信支付参数
        const res = await fetch('/api/order/create', {
            method: 'POST',
            body: JSON.stringify(params),
        });
        const payCfg = await res.json();

        // 2. 在微信内置浏览器里调 WeixinJSBridge
        return new Promise<void>((resolve, reject) => {
            if (typeof WeixinJSBridge === 'undefined') {
                reject('WeixinJSBridge not found');
                return;
            }
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest',
                {
                    timeStamp: payCfg.timeStamp,
                    nonceStr: payCfg.nonceStr,
                    package: payCfg.package,
                    signType: payCfg.signType,
                    paySign: payCfg.paySign,
                },
                (res: any) => {
                    // 这里只处理 UI，真正发钻石还是服务器
                    resolve();
                },
            );
        });
    }

    async showRewardAd(placementId: string): Promise<RewardAdResult> {
        // H5 激励广告，按你接的广告 SDK 来
        return { status: RewardAdStatus.FAILED, placementId }; // 返回广告结果
    }

    trackEvent(data: TrackEventPayload): void {
        // 大数据统计 SDK 埋点

    }
}
