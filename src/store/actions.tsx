import { Dispatch } from "redux";

import {
    RESET_DATA,
    SAYLOVELIST_SET,
    CURRENTINDEX_SET,
    PREVINDEX,
    JOKE_LIST
} from "./constants";

export const actions = {
    resetData() {
        return {
            type: RESET_DATA
        };
    },
    setSayLove(content: string) {
        return {
            type: SAYLOVELIST_SET,
            payload: content
        };
    },

    setNextIndex() {
        return (dispatch: Dispatch, getState: any) => {
            const { counter } = getState();
            const { content, index } = counter;
            const isNext: boolean = index + 1 <= content.length - 1;
            dispatch({
                type: CURRENTINDEX_SET,
                payload: isNext ? index + 1 : content.length
            });
        };
    },

    setPrevIndex() {
        return (dispatch: Dispatch, getState: any) => {
            const { counter } = getState();
            const { index } = counter;
            const isPrev: boolean = index - 1 >= 1;
            dispatch({
                type: PREVINDEX,
                payload: isPrev ? index - 1 : 0
            });
        };
    },

    setJokeList(list: Array<JokeList.List>) {
        return {
            type: JOKE_LIST,
            payload: list
        };
    }
};
