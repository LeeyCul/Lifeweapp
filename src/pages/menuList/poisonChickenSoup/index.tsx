import Taro, { useState, useCallback } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./style.scss";

import api from "../../../service";
import CardPage from "../../../components/cardPage";

function PoisonChickenSoup() {
    const [content, setContent] = useState<string>(
        "生活和电影一样，只不过生活难多了。"
    );
    const getData = async () => {
        let res: any = await api.getPoisonChicken({});
        const { newslist } = res;
        const content = newslist[0].content;
        setContent(content);
    };

    const handleNext = useCallback(() => {
        getData();
    }, [content]);
    Taro.showShareMenu({
        withShareTicket: true
    });
    return (
        <View className="poison_chicken_conainer">
            <CardPage
                content={content}
                btnText="再喝一碗"
                onClickNext={handleNext}
            />
        </View>
    );
}

PoisonChickenSoup.config = {
    navigationBarTitleText: "一碗毒鸡汤"
};

export default PoisonChickenSoup;
