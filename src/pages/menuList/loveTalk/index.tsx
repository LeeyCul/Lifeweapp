import Taro, { useEffect, useState } from "@tarojs/taro";
import { View, Image, Button } from "@tarojs/components";
import { AtButton, AtIcon } from "taro-ui";
import { useSelector, useDispatch } from "@tarojs/redux";

import "./style.scss";

import { actions } from "../../../store/actions";
import api from "../../../service";

function LoveTalk() {
    const { content, index } = useSelector((state: any) => state.counter);
    const [imgUrl, setImgUrl] = useState<string>("");
    const dispatch = useDispatch();

    const getReqData = () => {
        api.getLoveTalk({}).then((res: any) => {
            const { newslist } = res;
            const data = newslist[0];
            dispatch(actions.setSayLove(data.content));
        });
    };
    const getImgUrl = () => {
        Taro.cloud.init();
        Taro.cloud.downloadFile({
            fileID: "cloud://img-4y0gt.696d-img-4y0gt-1302425121/kua.png",

            success: res => {
                setImgUrl(res.tempFilePath);
            },
            fail: err => {
                console.log(err);
            }
        });
    };

    useEffect(() => {
        getReqData();
        getImgUrl();
        return () => {
            // 离开页面重置部分数据数据
            dispatch(actions.resetData());
        };
    }, []);

    function prevClick() {
        if (index === 0) {
            Taro.showToast({
                title: "亲爱的主人，这已经最开始的数据了",
                icon: "none",
                duration: 1000
            });
        }
        dispatch(actions.setPrevIndex());
    }

    function nextText() {
        if (index >= content.length - 1) {
            getReqData();
            dispatch(actions.setNextIndex());
        } else {
            dispatch(actions.setNextIndex());
        }
    }

    function handleCopy() {
        Taro.setClipboardData({ data: content[index] });
    }
    Taro.showShareMenu({
        withShareTicket: true
    });
    return (
        <View className="saylove_conainer">
            <Image src={imgUrl} className="bgImg" />
            <View className="content">
                <AtIcon
                    value="chevron-left"
                    className="arrow_left"
                    onClick={prevClick}
                />
                <View className="text">{content[index]}</View>
                <AtIcon
                    value="chevron-right"
                    className="arrow_right"
                    onClick={nextText}
                />
            </View>
            <AtButton
                className="copy"
                circle
                type="primary"
                onClick={handleCopy}
            >
                复制
            </AtButton>
            <Button open-type="share" className="share" type="primary">
                分享
            </Button>
        </View>
    );
}

LoveTalk.config = {
    navigationBarTitleText: "土味情话"
};

export default LoveTalk;
