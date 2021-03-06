import {
     MOVIE_DATA_INIT,
     GET_MOVIE_DATA,
     ADD_USER_MOVIE,
     MOVIE_ADDED_TO_LIB,
     MOVIE_REMOVED_FROM_LIB,
     GET_SIMILAR_MOVIES_DATA,
     ADD_NEXT_MOVIE_DATA
} from "../actions";

import {
    searcher
} from '../../services/genresFilter.service';

const initialState = {
    state: 'INITIAL',
    movies: [],
    similarMovies: []
}

export function initMoviesAppReducer(state = initialState, action){
    

    switch (action.type){
        
        case GET_MOVIE_DATA:
            // checking for config in sessionStorage
            let movieConfigStr = sessionStorage.getItem('movieSearchConfig');
            let data = action.payload;
            let config;
            if(movieConfigStr){
                config = JSON.parse(movieConfigStr);
                data = searcher(action.payload, config, 'movie');
            }   

            return {
                ...state,
                movies: data
            }

            //action for adding user item through form
        case ADD_USER_MOVIE:
            return {
                ...state,
                movies: [action.payload, ...state.movies]    
            }

            //sets prop to see is the item in lib
        case MOVIE_ADDED_TO_LIB:
            return {
                ...state,
                movies: state.movies.map(item => 
                (item.id === action.payload.id)?
                {...item, isInLibrary:true}:
                item)
            }

        case MOVIE_REMOVED_FROM_LIB:
            return {
                ...state,
                movies: state.movies.map(item => 
                (item.id === action.payload.id)?
                {...item, isInLibrary:false}:
                item)
            }

        case GET_SIMILAR_MOVIES_DATA:
            return {
                ...state,
                similarMovies: action.payload
            }
            
        case ADD_NEXT_MOVIE_DATA:
            return {
                ...state,
                movies: state.movies.concat(action.payload)    
            }

        default:
            return state;
    }
}