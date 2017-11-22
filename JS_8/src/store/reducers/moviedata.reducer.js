import {
     MOVIE_DATA_INIT,
     GET_MOVIE_DATA,
     ADD_USER_MOVIE
    } from "../actions"

const initialState = {
    state: 'INITIAL',
    movies: []
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

        default:
            return state;
    }
}