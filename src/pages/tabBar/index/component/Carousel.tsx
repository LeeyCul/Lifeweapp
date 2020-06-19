import Taro, { useState, useEffect } from "@tarojs/taro";
import { Swiper, SwiperItem, View, Image } from "@tarojs/components";

import "./carousel.scss";

function Carousel() {
    const [urlData, setUrlData] = useState<any[]>([]);

    useEffect(() => {
        Taro.cloud.init();
        Taro.cloud.getTempFileURL({
            fileList: [
                "cloud://img-4y0gt.696d-img-4y0gt-1302425121/b1.png",
                "cloud://img-4y0gt.696d-img-4y0gt-1302425121/b2.png",
                "cloud://img-4y0gt.696d-img-4y0gt-1302425121/b3.png",
                "cloud://img-4y0gt.696d-img-4y0gt-1302425121/b4.png"
            ],
            success: res => {
                setUrlData(res.fileList);
            },
            fail: err => {
                console.log(err);
            }
        });
    }, []);
    return (
        <View className="carousel_conainer">
            <Swiper
                className="carousel_hight"
                indicatorColor="#999"
                indicatorActiveColor="#333"
                vertical={false}
                circular
                indicatorDots
                autoplay
            >
                {urlData.length &&
                    urlData.map((item, index) => {
                        return (
                            <SwiperItem key={index}>
                                <View>
                                    <Image
                                        className="carousel_hight"
                                        src={item.tempFileURL}
                                    />
                                </View>
                            </SwiperItem>
                        );
                    })}
            </Swiper>
        </View>
    );
}

export default Carousel;
