import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import store from "./store";
import Index from "./pages/tabBar/index/index";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        pages: ["pages/tabBar/index/index"],
        // tabBar: {
        //     selectedColor: "#1296db",
        //     list: [
        //         {
        //             pagePath: "pages/index/index",
        //             text: "趣味娱乐",
        //             iconPath: "./assets/image/icon1.png",
        //             selectedIconPath: "./assets/image/icon1s.png"
        //         },
        //         {
        //             pagePath: "pages/quotation/index",
        //             text: "资讯信息",
        //             iconPath: "./assets/image/icon2.png",
        //             selectedIconPath: "./assets/image/icon2s.png"
        //         }
        //         // {
        //         //     pagePath: "pages/loveTalk/index",
        //         //     text: "资源内容",
        //         //     iconPath: "./assets/image/icon3.png",
        //         //     selectedIconPath: "./assets/image/icon3s.png"
        //         // }
        //     ]
        // },
        subPackages: [
            {
                root: "pages/menuList/",
                name: "menuList",
                pages: [
                    "poisonChickenSoup/index",
                    "joke/index",
                    "storys/index",
                    "reply/index",
                    "goodMorning/index",
                    "goodNight/index",
                    "loveTalk/index",
                    "praise/index"
                ]
            },
            {
                root: "pages/recommend/",
                name: "recommend",
                pages: ["life/index", "weight/index", "xingzuo/index"]
            }
        ],
        preloadRule: {
            "pages/tabBar/index/index": {
                network: "all",
                packages: ["menuList", "recommend"]
            }
        },
        window: {
            backgroundTextStyle: "light",
            navigationBarBackgroundColor: "#fff",
            navigationBarTitleText: "WeChat",
            navigationBarTextStyle: "black"
        }
    };

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        );
    }
}

Taro.render(<App />, document.getElementById("app"));
