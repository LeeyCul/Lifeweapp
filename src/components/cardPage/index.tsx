import Taro, { memo, FC } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

import "./style.scss";

interface Props {
    content: string;
    btnText?: string;
    onClickNext: () => void;
    color?: string[];
    title?: string;
}

const CardPage: FC<Props> = ({ title, content,
    btnText = "下一条",
    onClickNext,
    color = []
}) => {
    function handleCopy() {
        Taro.setClipboardData({ data: content });
    }
    return (
        <View className="card_page_conainer">
            <View className="content">
                <Text className="text" space="nbsp">
                    {title ? `${title}\n \n${content}` : content}
                </Text>
            </View>
            <View className="btn_box">
                <Button
                    className="copy_btn btn"
                    onClick={handleCopy}
                    style={{ background: color[0] && color[0] }}
                >
                    复制
                </Button>
                <Button
                    className="next_btn btn"
                    onClick={onClickNext}
                    style={{ background: color[1] && color[1] }}
                >
                    {btnText}
                </Button>
                <Button
                    className="share_btn btn"
                    open-type="share"
                    style={{ background: color[2] && color[2] }}
                >
                    告诉朋友
                </Button>
            </View>
        </View>
    );
};

export default memo(CardPage);
