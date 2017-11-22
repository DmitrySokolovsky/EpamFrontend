import {
    GET_GENRES_DATA,
    GENRES_DATA_INIT
} from '../actions';

const initialState = {
    state: 'INITIAL',
    genres: []
}

export function genresReducer(state = initialState, action){
    switch (action.type){
        case GET_GENRES_DATA:
            return {
                ...state,
                genres: action.payload
            }
        
        default:
            return state;
    }
}