import Taro, { useEffect, useState, useShareAppMessage } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtRadio } from "taro-ui";

import "./style.scss";

import api from "../../../service";

const Weight = () => {
    const [imgUrl, setImgUrl] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [sex, setSex] = useState<number>(0);
    const [result, setResult] = useState<any>();

    const getImgUrl = () => {
        Taro.cloud.init();
        Taro.cloud.downloadFile({
            fileID:
                "cloud://img-4y0gt.696d-img-4y0gt-1302425121/tz.png",

            success: res => {
                setImgUrl(res.tempFilePath);
            },
            fail: err => {
                console.log(err);
            }
        });
    };
    useEffect(() => {
        // getReqData();
        getImgUrl();
    }, []);

    async function onSubmit() {
        let res: any = await api.getWeight({ height, weight, sex });
        const { newslist } = res;
        const data = newslist[0];
        setResult(data);
    }

    function handleChange(val, e) {
        if (e.target.id === "height") {
            setHeight(val);
        } else {
            setWeight(val);
        }
    }

    function handleRadio(value) {
        setSex(value);
    }
    useShareAppMessage(res => {
        if (res.from === "button") {
            // 来自页面内转发按钮
            console.log(res.target);
        }
        return {
            title: "自定义转发标题",
            path: "/page/user?id=123"
        };
    });
    return (
        <View className="weight_conainer">
            <Image src={imgUrl} className="bgImg" />
            <AtForm onSubmit={onSubmit}>
                <AtInput
                    name="height"
                    title="身高"
                    type="text"
                    placeholder="请输入身高，单位CM(厘米)"
                    value={height}
                    onChange={handleChange}
                />
                <AtInput
                    name="weight"
                    title="体重"
                    type="text"
                    placeholder="请输入体重，单位kg(千克)"
                    value={weight}
                    onChange={handleChange}
                />
                <AtRadio
                    options={[
                        { label: "我是Boy", value: 0 },
                        { label: "我是Girl", value: 1 }
                    ]}
                    value={sex}
                    onClick={handleRadio}
                />
                <AtButton formType="submit" type="primary">
                    开始检测
                </AtButton>
            </AtForm>
            {result && (
                <View className="baogao">
                    <View className="title">报告单</View>
                    <Text>
                        体重指数BMI:<Text className="result">{result.bmi}</Text>
                    </Text>
                    <Text>
                        正常BMI指数范围:
                        <Text className="result">{result.normbmi}</Text>
                    </Text>
                    <Text>
                        标准体重:
                        <Text className="result">{result.idealweight}</Text>
                    </Text>
                    <Text>
                        正常体重范围:
                        <Text className="result">{result.normweight}</Text>
                    </Text>
                    <Text>
                        健康风险:
                        <Text className="result">{result.healthy}</Text>
                    </Text>
                    <Text>
                        身材小贴士:<Text className="result">{result.tip}</Text>
                    </Text>
                </View>
            )}
        </View>
    );
};

Weight.config = {
    navigationBarTitleText: "BMI标准体重"
};

export default Weight;
