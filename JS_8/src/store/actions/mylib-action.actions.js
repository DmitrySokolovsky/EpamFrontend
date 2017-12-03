import { 
    MYLIB_DATA_INIT,
    MOVIE_ADD_TO_LIB,    
    TVSHOW_ADD_TO_LIB,
    MOVIE_REMOVE_FROM_LIB,
    TVSHOW_REMOVE_FROM_LIB,
    MAKE_ITEMS_WATCHED
} from './mylib-action.types';

export function initMyLibData() {
    return {
        type: MYLIB_DATA_INIT     
    }
}

export function makeItemsWatched() {
    return {
        type: MAKE_ITEMS_WATCHED
    }
}

export function addMovieToMyLib(payload){
    return {
        type: MOVIE_ADD_TO_LIB,
        payload
    }
}

export function addShowToMyLib(payload){
    return {
        type: TVSHOW_ADD_TO_LIB,
        payload
    }
}

export function removeMovieFromMyLib(payload){
    return {
        type: MOVIE_REMOVE_FROM_LIB,
        payload
    }
}

export function removeShowFromMyLib(payload){
    return {
        type: TVSHOW_REMOVE_FROM_LIB,
        payload
    }
}