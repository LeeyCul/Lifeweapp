import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./style.scss";

interface Props {
    title: string;
    content: string;
}

function ListView({ title, content }: Props) {
    let reg = new RegExp("<br/>", "g");
    return (
        <View className="listview_box">
            <Text className="title">{title}</Text>
            <View className="content">
                <Text>{content && content.replace(reg, "\n")}</Text>
            </View>
        </View>
    );
}

export default ListView;
