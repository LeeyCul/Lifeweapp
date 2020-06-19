import Taro, { useState } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtGrid, AtNoticebar, AtIcon } from "taro-ui";

import "./index.scss";

import Carousel from "./component/Carousel";
import xingzuo from "../../../assets/image/xingzuo.png";
import lift from "../../../assets/image/lift.png";
import weight from "../../../assets/image/weight.png";
import NavGrid from "../../../components/navGrid";

// interface Data {
//     icon: any;
//     content: string;
// }

function Index() {
    const [data, setData] = useState([
        { icon: "icon-love", content: "土味情话", key: "nav1" },
        { icon: "icon-cat", content: "彩虹屁", key: "nav2" },
        { icon: "icon-kiss", content: "雷人笑话", key: "nav3" },
        { icon: "icon-potion", content: "毒鸡汤", key: "nav4" },
        { icon: "icon-chat-", content: "早安心语", key: "nav5" },
        { icon: "icon-love-letter-", content: "晚安心语", key: "nav6" },
        { icon: "icon-microphone", content: "神回复", key: "nav7" },
        { icon: "icon-love-letter1", content: "故事大全", key: "nav8" }
    ]);

    const handleClick = (key: string) => {
        const urlObject = {
            nav1: { url: "/pages/menuList/loveTalk/index" },
            nav2: { url: "/pages/menuList/praise/index" },
            nav3: { url: "/pages/menuList/joke/index" },
            nav4: { url: "/pages/menuList/poisonChickenSoup/index" },
            nav5: { url: "/pages/menuList/goodMorning/index" },
            nav6: { url: "/pages/menuList/goodNight/index" },
            nav7: { url: "/pages/menuList/reply/index" },
            nav8: { url: "/pages/menuList/storys/index" }
        };
        Taro.navigateTo(urlObject[key]);
    };
    Taro.showShareMenu({
        withShareTicket: true
    });
    return (
        <View className="index_conainer">
            <Carousel />
            <View className="trem">
                <NavGrid data={data} onHandleClick={handleClick} />
            </View>
            <AtNoticebar marquee single icon="volume-plus" speed={100}>
                本小程序资源基本来自网上，如有侵权，请及时联系我！
            </AtNoticebar>
            <View className="hot_box">
                <Text className="hot_title">热门推荐</Text>
                <View className="recommend">
                    <View
                        className="left"
                        onClick={() =>
                            Taro.navigateTo({
                                url: "/pages/recommend/xingzuo/index"
                            })
                        }
                    >
                        <Image className="rco_img" src={xingzuo} />
                    </View>
                    <View className="right">
                        <View className="right_top">
                            <Image
                                className="rco_img"
                                src={lift}
                                onClick={() =>
                                    Taro.navigateTo({
                                        url: "/pages/recommend/life/index"
                                    })
                                }
                            />
                        </View>
                        <View className="right_bottom">
                            <Image
                                className="rco_img"
                                src={weight}
                                onClick={() =>
                                    Taro.navigateTo({
                                        url: "/pages/recommend/weight/index"
                                    })
                                }
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

Index.config = {
    navigationBarTitleText: "首页"
};

export default Index;
