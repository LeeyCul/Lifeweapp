import http from "../utils/http";

const getPraise = param => http("/caihongpi/index", param, "GET", true);
const getLoveTalk = param => http("/saylove/index", param, "GET", true);
const getJoke = param => http("/joke/index", param, "GET", true);
const getPoisonChicken = param => http("/dujitang/index", param, "GET", true);
const getGoodMorning = param => http("/zaoan/index", param, "GET", true);
const getGoogNight = param => http("/wanan/index", param, "GET", true);
const getGodreply = param => http("/godreply/index", param, "GET", true);
const getStory = param => http("/story/index", param, "GET", true);
const getXingZuo = param => http("/xingzuo/index", param, "GET", true);
const getLife = param => http("/qiaomen/index", param, "GET", true);
const getWeight = param => http("/bmi/index", param, "GET", true);

export default {
    getPraise,
    getLoveTalk,
    getJoke,
    getPoisonChicken,
    getGoodMorning,
    getGoogNight,
    getGodreply,
    getStory,
    getXingZuo,
    getLife,
    getWeight
};
