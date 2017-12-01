import {
    MOVIE_DATA_INIT,
    ADD_USER_MOVIE,
    GET_SIMILAR_MOVIES
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

export function getSimilarMovies(payload){
    return {
        type: GET_SIMILAR_MOVIES,
        payload
    }    
}
