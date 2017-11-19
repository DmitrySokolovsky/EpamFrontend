import {
    MOVIE_DATA_INIT,
    MOVIE_DATA_REQUEST,
    MOVIE_DATA_REQUEST_SUCCESS,
    MOVIE_DATA_REQUEST_ERROR
} from "./moviedata-action.types";

export function initMovieData() {
    return {
        type: MOVIE_DATA_INIT        
    }
}

