import { 
    MOVIE_ADD_TO_LIB,
    MYLIB_DATA_INIT,
    TVSHOW_ADD_TO_LIB
} from './mylib-action.types';

export function initMyLibData() {
    return {
        type: MYLIB_DATA_INIT        
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