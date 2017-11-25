import {
     MOVIE_DATA_INIT,
     GET_MOVIE_DATA,
     ADD_USER_MOVIE,
     MOVIE_ADDED_TO_LIB
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

        case MOVIE_ADDED_TO_LIB:
            return {
                ...state,
                movies: state.movies.map(item => 
                (item.id === action.payload.id)?
                {...item, isInLibrary:true}:
                item)
            }

        default:
            return state;
    }
}