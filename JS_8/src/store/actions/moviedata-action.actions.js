import {
    MOVIE_DATA_INIT,
    ADD_USER_MOVIE
} from "./moviedata-action.types";

export function initMovieData() {
    return {
        type: MOVIE_DATA_INIT        
    }
}

export function addUserMovie(payload){
    return {
        type: ADD_USER_MOVIE,
        payload
    }
}
