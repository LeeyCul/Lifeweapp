import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtActionSheet, AtActionSheetItem } from "taro-ui";

import "./style.scss";

import IconFont from "../../../components/iconfont";
import api from "../../../service";

const Xingzuo = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [current, setCurrent] = useState("nv");
    const [nvText, setNvText] = useState("白羊");
    const [naText, setNaText] = useState("狮子");
    const [content, setContent] = useState<any>({});
    const dataArr = [
        "白羊",
        "金牛",
        "双子",
        "巨蟹",
        "狮子",
        "处女",
        "天秤",
        "天蝎",
        "射手",
        "摩羯",
        "水瓶",
        "双鱼"
    ];
    const start =
        content.grade && content.grade.replace(new RegExp("友情："), ",");
    const st1 = start && start.replace(new RegExp("爱情："), ",");
    const st2 = st1 && st1.replace(new RegExp("婚姻："), ",");
    const st3 = st2 && st2.replace(new RegExp("亲情："), ",");
    const startResult = st3 && st3.split(",").filter(Boolean);

    async function getData() {
        let res: any = await api.getXingZuo({ me: nvText, he: naText });
        const { newslist } = res;
        const data = newslist[0];
        setContent(data);
    }

    useEffect(() => {
        getData();
    }, []);

    function selectNv() {
        setIsOpened(true);
        setCurrent("nv");
    }
    function selectNa() {
        setIsOpened(true);
        setCurrent("na");
    }
    function actionSheetItem(val) {
        if (current === "nv") {
            setNvText(val);
        } else {
            setNaText(val);
        }
        setIsOpened(false);
    }

    function handleBgin() {
        getData();
    }
    Taro.showShareMenu({
        withShareTicket: true
    });
    return (
        <View className="xingzuo_conainer">
            <View className="name">
                <Text className="title1">十二星座最佳配对</Text>
                <Text className="title2">查看你跟哪个星座最配！</Text>
            </View>
            <View className="peidui">
                <View className="item" onClick={selectNv}>
                    <IconFont name="icon-nvhai" size={100} />
                    <Text>{nvText}</Text>
                </View>
                <View className="item" onClick={selectNa}>
                    <IconFont name="icon-nanhai" size={100} />
                    <Text>{naText}</Text>
                </View>
            </View>
            <Button className="btn" onClick={handleBgin}>
                开始配对
            </Button>
            <View className="peiContent">
                <View className="mb10">
                    友情：
                    <Text className="start">{startResult[0]}</Text>
                </View>

                <View className="mb10">
                    爱情：
                    <Text className="start">{startResult[1]}</Text>
                </View>
                <View className="mb10">
                    婚姻：
                    <Text className="start">{startResult[2]}</Text>
                </View>
                <View className="mb10">
                    亲情：
                    <Text className="start">{startResult[3]}</Text>
                </View>
                <View className="mb10">
                    <Text>配对结果： \n</Text>
                    <Text>{content.content}</Text>
                </View>
            </View>

            <AtActionSheet
                isOpened={isOpened}
                cancelText="取消"
                onClose={() => setIsOpened(false)}
                onCancel={() => setIsOpened(false)}
            >
                {dataArr.map(item => {
                    return (
                        <AtActionSheetItem
                            key={item}
                            onClick={() => actionSheetItem(item)}
                        >
                            {item}
                        </AtActionSheetItem>
                    );
                })}
            </AtActionSheet>
        </View>
    );
};

Xingzuo.config = {
    navigationBarTitleText: "星座配对"
};

export default Xingzuo;
