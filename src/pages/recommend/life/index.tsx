import Taro, { useState, useCallback, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./style.scss";

import api from "../../../service";
import CardPage from "../../../components/cardPage";

function PoisonChickenSoup() {
    const [content, setContent] = useState<string>(
        "生活和电影一样，只不过生活难多了。"
    );
    const getData = async () => {
        let res: any = await api.getLife({});
        const { newslist } = res;
        const content = newslist[0].content;
        setContent(content);
    };

    useEffect(() => {
        getData();
    }, []);

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
                btnText="再了解点"
                onClickNext={handleNext}
            />
        </View>
    );
}

PoisonChickenSoup.config = {
    navigationBarTitleText: "生活小窍门"
};

export default PoisonChickenSoup;
