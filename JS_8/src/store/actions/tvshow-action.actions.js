import {
    TVSHOW_DATA_INIT,
    ADD_USER_TVSHOW
} from "./tvshow-action.types";

export function initTvShowData() {
    return {
        type: TVSHOW_DATA_INIT
    }
}

export function addUserTvShow(payload) {
    return {
        type: ADD_USER_TVSHOW,
        payload
    }
}
