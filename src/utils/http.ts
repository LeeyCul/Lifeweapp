import Taro from "@tarojs/taro";

const BASE_URL: string = "https://api.tianapi.com/txapi";
const key: string = "87869524d72df1b399f458edcd4a6a65";

// api请求封装
const htttRequest = function(
    url: string,
    paramet: object,
    method: any,
    showToast: Boolean
) {
    // 获取token
    const token = Taro.getStorageSync("Info");

    if (showToast) {
        Taro.showLoading({
            title: "加载中"
        });
    }

    return new Promise<{}>((resolve, reject) => {
        Taro.request({
            url: `${BASE_URL}${url}?key=${key}`,
            data: paramet,
            method: method,
            header: {
                "content-type": "application/json",
                Authorization: token.accessToken ? token.accessToken : ""
            }
        })
            .then(res => {
                Taro.hideLoading();
                switch (res.data.code) {
                    case 200:
                        return resolve(res.data);

                    case 10014:
                        // token校验失败
                        Taro.navigateTo({
                            url: "/pages/login/index"
                        });
                        Taro.clearStorageSync();
                        return reject(res.data);

                    case 10002:
                        // 缺少商户信息
                        Taro.navigateTo({
                            url: "/pages/login/index"
                        });
                        return reject(res.data);

                    default:
                        setTimeout(() => {
                            Taro.showToast({
                                title: res.data.msg,
                                icon: "none"
                            });
                        }, 500);
                }
            })
            .catch(err => {
                Taro.showToast({
                    title: "当前网络不佳，请稍后尝试",
                    icon: "none"
                });
                return reject(err);
            });
    });
};

export default htttRequest;
