import {
     MOVIE_DATA_INIT,
     GET_MOVIE_DATA,
     ADD_USER_MOVIE,
     GET_MOVIE_DATA_SUCCESS
    } from "../actions"

const initialState = {
    state: 'INITIAL',
    movies: [],
    loaded: false
}

export function initMoviesAppReducer(state = initialState, action){
    switch (action.type){
        
        case GET_MOVIE_DATA:
            return {
                ...state,
                movies: action.payload
            }

        case ADD_USER_MOVIE:
            return {
                ...state,
                movies: [...state.movies,action.payload]    
            }
        case GET_MOVIE_DATA_SUCCESS:
            return {
                ...state,
                loaded: true
            }
        default:
            return state;
    }
}