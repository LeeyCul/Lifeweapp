import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./style.scss";

import IconFont from "../iconfont";

interface Content {
    icon: string;
    content: string;
    key?: string;
}

interface INavGrid {
    data: Content[];
    onHandleClick: (key: string | undefined) => void;
}

function NavGrid({ data, onHandleClick }: INavGrid) {
    return (
        <View className="navgrid_conainer">
            {data &&
                data.map((item, index) => {
                    return (
                        <View
                            className="item"
                            key={item.key || index}
                            onClick={() => onHandleClick(item.key)}
                        >
                            <View className="icon">
                                <IconFont name={item.icon} size={80} />
                            </View>
                            <Text className="text">{item.content}</Text>
                        </View>
                    );
                })}
        </View>
    );
}

export default NavGrid;
