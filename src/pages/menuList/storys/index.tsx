import Taro, { useState, useCallback, useEffect } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { AtTag } from "taro-ui";

import "./style.scss";

import api from "../../../service";
import { number } from "prop-types";

type StoryType = {
    text: string;
    value: string;
    active: boolean;
};

function Storys() {
    const [content, setContent] = useState<any>();
    const [storyType, setStoryType] = useState<StoryType[]>([
        { text: "成语故事", value: "1", active: false },
        { text: "睡前故事", value: "2", active: true },
        { text: "童话故事", value: "3", active: false },
        { text: "预言故事", value: "4", active: false }
    ]);
    const [type, setType] = useState<number>(2);

    const getData = async () => {
        let res: any = await api.getStory({ type });
        const { newslist } = res;
        const content = newslist[0];
        setContent(content);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleNext = useCallback(() => {
        getData();
    }, [content]);

    function handleSelect(name) {
        const result = storyType.map(item => {
            item.active = false;
            if (item.value === name.name) {
                item.active = true;
            }
            return item;
        });
        setType(Number(name.name));
        setStoryType(result);
        getData();
    }
    Taro.showShareMenu({
        withShareTicket: true
    });

    return (
        <View className="story_conainer">
            <View className="content">
                <Text className="title">{content.title}</Text>
                <Text decode={true} space={"emsp"}>
                    {content.content}
                </Text>
            </View>
            <View className="control_btn">
                <View className="btn_box">
                    <Button className="next_btn btn" onClick={handleNext}>
                        再看一条
                    </Button>
                    <Button className="share_btn btn" open-type="share">
                        告诉朋友
                    </Button>
                </View>
                <View className="type">
                    {storyType.map(item => (
                        <AtTag
                            key={item.value}
                            size="small"
                            name={item.value}
                            type="primary"
                            circle
                            onClick={handleSelect}
                            active={item.active}
                        >
                            {item.text}
                        </AtTag>
                    ))}
                </View>
            </View>
        </View>
    );
}

Storys.config = {
    navigationBarTitleText: "故事大全"
};

export default Storys;
