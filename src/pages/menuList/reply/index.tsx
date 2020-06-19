import Taro, { useState, useCallback } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./style.scss";

import api from "../../../service";
import CardPage from "../../../components/cardPage";

function PoisonChickenSoup() {
    const [content, setContent] = useState<string>("所以我没有脱你的裤子啊");
    const [title, setTitle] = useState<string>(
        "最讨厌别人骂我傻逼，没一点道德素养，没听过骂人不揭短吗？"
    );
    const getData = async () => {
        let res: any = await api.getGodreply({});
        const { newslist } = res;
        const content = newslist[0].content;
        const title = newslist[0].title;
        setContent(content);
        setTitle(title);
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
                title={title}
                content={content}
                btnText="在看一条"
                onClickNext={handleNext}
            />
        </View>
    );
}

PoisonChickenSoup.config = {
    navigationBarTitleText: "神回复"
};

export default PoisonChickenSoup;
