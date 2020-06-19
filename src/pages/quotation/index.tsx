import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import IconFont from "../../components/iconfont";

function Quotation() {
    return (
        <View>
            <Text
                className="iconfont icon-love"
                style={{ fontSize: 30 }}
            ></Text>
            <IconFont name="icon-love" size={80} />
        </View>
    );
}

export default Quotation;
