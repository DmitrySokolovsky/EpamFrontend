import {
    MOVIE_TOGGLE_SEARCH,
    MOVIE_GENRE_SEARCH_CHANGE,
    MOVIE_REMOVE_GENRE_SEARCH_CHANGE,
    MOVIE_ADULT_SEARCH_CHANGE,
    MOVIE_VOTE_SEARCH_CHANGE,
    MOVIE_TITLE_SEARCH_CHANGE,
    MOVIE_OVERVIEW_SEARCH_CHANGE,
    MOVIE_APPLY_SEARCH_CONFIG,
    MOVIE_SAVE_SEARCH_CONFIG,

    SHOW_TOGGLE_SEARCH,
    SHOW_GENRE_SEARCH_CHANGE,
    SHOW_REMOVE_GENRE_SEARCH_CHANGE,
    SHOW_ADULT_SEARCH_CHANGE,
    SHOW_VOTE_SEARCH_CHANGE,
    SHOW_TITLE_SEARCH_CHANGE,
    SHOW_OVERVIEW_SEARCH_CHANGE,
    SHOW_APPLY_SEARCH_CONFIG,
    SHOW_SAVE_SEARCH_CONFIG
} from './advancedsearch-action.types';

//I've created two different views for Movies and Tv
// So logic for features will be different 
export function toggleMovieSearch() {
    return {
        type: MOVIE_TOGGLE_SEARCH
    }
}

export function toggleShowSearch() {
    return {
        type: SHOW_TOGGLE_SEARCH
    }
}

export function applyMovieSearchConfig(){
    return {
        type: MOVIE_APPLY_SEARCH_CONFIG
    }
}

export function applyShowSearchConfig(){
    return {
        type: SHOW_APPLY_SEARCH_CONFIG
    }
}

export function changeMovieGenre(payload) {
    return {
        type: MOVIE_GENRE_SEARCH_CHANGE,
        payload
    }
}

export function changeShowGenre(payload) {
    return {
        type: SHOW_GENRE_SEARCH_CHANGE,
        payload
    }
}

export function removeMovieGenre(payload){
    return {
        type: MOVIE_REMOVE_GENRE_SEARCH_CHANGE,
        payload
    }
}

export function removeShowGenre(payload){
    return {
        type: SHOW_REMOVE_GENRE_SEARCH_CHANGE,
        payload
    }
}

export function changeMovieAdult(payload) {
    return {
        type: MOVIE_ADULT_SEARCH_CHANGE,
        payload
    }
}

export function changeShowAdult(payload) {
    return {
        type: SHOW_ADULT_SEARCH_CHANGE,
        payload
    }
}

export function changeMovieVote(payload) {
    return {
        type: MOVIE_VOTE_SEARCH_CHANGE,
        payload
    }
}

export function changeShowVote(payload) {
    return {
        type: SHOW_VOTE_SEARCH_CHANGE,
        payload
    }
}

export function changeMovieTitle(payload) {
    return {
        type: MOVIE_TITLE_SEARCH_CHANGE,
        payload
    }
}

export function changeShowTitle(payload) {
    return {
        type: SHOW_TITLE_SEARCH_CHANGE,
        payload
    }
}

export function changeMovieOverview(payload) {
    return {
        type: MOVIE_OVERVIEW_SEARCH_CHANGE,
        payload
    }
}

export function changeShowOverview(payload) {
    return {
        type: SHOW_OVERVIEW_SEARCH_CHANGE,
        payload
    }
}

export function saveMovieSearchConfig() {
    return {
        type: MOVIE_SAVE_SEARCH_CONFIG,
    }
}

export function saveShowSearchConfig() {
    return {
        type: SHOW_SAVE_SEARCH_CONFIG,
    }
}
