import { AnyAction } from "redux";

import {
    RESET_DATA,
    SAYLOVELIST_SET,
    CURRENTINDEX_SET,
    PREVINDEX,
    JOKE_LIST
} from "./constants";

interface Istore {
    content: string[];
    index: number;
    jokeList: Array<JokeList.List>;
}

const INITIAL_STATE: Istore = {
    content: ["冬深雪冷炉火温酒，而你一笑又见春风"],
    index: 1,
    jokeList: []
};

export default {
    counter(state = INITIAL_STATE, action: AnyAction) {
        const { type, payload } = action;
        switch (type) {
            case RESET_DATA: {
                return {
                    ...state,
                    content: ["冬深雪冷炉火温酒，而你一笑又见春风"],
                    index: 1,
                    jokeList: []
                };
            }
            case SAYLOVELIST_SET: {
                const isExist: boolean =
                    state && state.content.includes(payload);
                return {
                    ...state,
                    content: isExist
                        ? [...state.content]
                        : [...state.content, payload]
                };
            }
            case CURRENTINDEX_SET: {
                return {
                    ...state,
                    index: payload
                };
            }
            case PREVINDEX: {
                return {
                    ...state,
                    index: payload
                };
            }
            case JOKE_LIST: {
                return {
                    ...state,
                    jokeList: [...state.jokeList, ...payload]
                };
            }
            default:
                return state;
        }
    }
};
