import Taro, {
    useEffect,
    usePullDownRefresh,
    useReachBottom,
    useState
} from "@tarojs/taro";
import { View } from "@tarojs/components";
import { useSelector, useDispatch } from "@tarojs/redux";
import { AtActivityIndicator } from "taro-ui";

import "./style.scss";

import api from "../../../service";
import { actions } from "../../../store/actions";
import ListView from "./component/listView";

function Joke() {
    const [showActivity, setShowActivity] = useState(false);
    const { jokeList } = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    async function getData(num: number = 5) {
        let res: any = await api.getJoke({ num });
        const { newslist } = res;
        setShowActivity(false);

        let newJokeList = [...jokeList, ...newslist];
        let obj = {};

        let result = newJokeList.reduce((cur, next) => {
            obj[next.title] ? "" : (obj[next.title] = true && cur.push(next));
            return cur;
        }, []);
        dispatch(actions.setJokeList(result));
    }

    useEffect(() => {
        getData();
        return () => {
            // 离开页面重置部分数据数据
            dispatch(actions.resetData());
        };
    }, []);

    usePullDownRefresh(() => {
        Taro.stopPullDownRefresh();
    });

    useReachBottom(() => {
        setShowActivity(true);
        getData(3);
    });
    Taro.showShareMenu({
        withShareTicket: true
    });
    return (
        <View className="joke_conainer">
            {jokeList.length &&
                jokeList.map((item, index) => {
                    return (
                        <ListView
                            key={index + ""}
                            title={item.title}
                            content={item.content}
                        />
                    );
                })}
            {showActivity && (
                <View
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px"
                    }}
                >
                    <AtActivityIndicator></AtActivityIndicator>
                </View>
            )}
        </View>
    );
}

Joke.config = {
    navigationBarTitleText: "雷人笑话",
    enablePullDownRefresh: true,
    onReachBottomDistance: 50,
    backgroundTextStyle: "dark"
};

export default Joke;
