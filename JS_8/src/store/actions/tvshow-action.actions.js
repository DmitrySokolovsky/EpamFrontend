import {
    TVSHOW_DATA_INIT,
    ADD_USER_TVSHOW,
    GET_SIMILAR_SHOWS,
    ADD_NEXT_SHOWS
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

export function getSimilarShows(payload){
    return {
        type: GET_SIMILAR_SHOWS,
        payload
    }    
}


export function getNextShows(payload){
    return {
        type: ADD_NEXT_SHOWS,
        payload
    }    
}