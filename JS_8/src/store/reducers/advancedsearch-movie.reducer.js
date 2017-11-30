import {
    MOVIE_TOGGLE_SEARCH,
    MOVIE_GENRE_SEARCH_CHANGE,
    MOVIE_REMOVE_GENRE_SEARCH_CHANGE,
    MOVIE_ADULT_SEARCH_CHANGE,
    MOVIE_VOTE_SEARCH_CHANGE,
    MOVIE_TITLE_SEARCH_CHANGE,
    MOVIE_OVERVIEW_SEARCH_CHANGE,
    MOVIE_APPLY_SEARCH_CONFIG,
    MOVIE_SAVE_SEARCH_CONFIG
} from '../actions';

const initialState = {
    state: 'INITIAL',
    isMovieSearchOpen: false,
    genresMovieSearch: [],
    adultMovieSearch: '',
    voteMovieSearch: 0,
    titleMovieSearch: '',
    overviewMovieSearch: ''    
}

export function advancedSearchMovieReducer(state = initialState, action){
    switch (action.type){

        case MOVIE_TOGGLE_SEARCH: 
            return {
                ...state,
                isMovieSearchOpen: !state.isMovieSearchOpen
            };
        
        case MOVIE_GENRE_SEARCH_CHANGE:
            return {
                ...state,
                genresMovieSearch: [...state.genresMovieSearch, action.payload]
            }

        case MOVIE_REMOVE_GENRE_SEARCH_CHANGE:
            let newValues = state.genresMovieSearch.filter(v => v !== action.payload);
            return {
                ...state,
                genresMovieSearch: [...newValues]
            }

        case MOVIE_ADULT_SEARCH_CHANGE:
            return {
                ...state,
                adultMovieSearch: !state.adultMovieSearch
            }

        case MOVIE_VOTE_SEARCH_CHANGE:
            return {
                ...state,
                voteMovieSearch: action.payload
            }

        case MOVIE_TITLE_SEARCH_CHANGE:
            return {
                ...state,
                titleMovieSearch: action.payload
            }

         case MOVIE_OVERVIEW_SEARCH_CHANGE:
            return {
                ...state,
                overviewMovieSearch: action.payload
            }

        default :
            return state;        
    }
}