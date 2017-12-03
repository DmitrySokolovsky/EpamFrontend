import {
    SHOW_TOGGLE_SEARCH,
    SHOW_GENRE_SEARCH_CHANGE,
    SHOW_REMOVE_GENRE_SEARCH_CHANGE,
    SHOW_ADULT_SEARCH_CHANGE,
    SHOW_VOTE_SEARCH_CHANGE,
    SHOW_TITLE_SEARCH_CHANGE,
    SHOW_OVERVIEW_SEARCH_CHANGE,
    SHOW_APPLY_SEARCH_CONFIG,
    SHOW_SAVE_SEARCH_CONFIG
} from '../actions';

const initialState = {
    state: 'INITIAL',
    isShowSearchOpen: false,
    genresShowSearch: [],
    adultShowSearch: '',
    voteShowSearch: 0,
    titleShowSearch: '',
    overviewShowSearch: ''    
}

export function advancedSearchShowReducer(state = initialState, action){
    switch (action.type){

        case SHOW_TOGGLE_SEARCH: 
            return {
                ...state,
                isShowSearchOpen: !state.isShowSearchOpen
            };
        
            // different handlers for counctructing ad search config
   
        case SHOW_GENRE_SEARCH_CHANGE:
            return {
                ...state,
                genresShowSearch: [...state.genresShowSearch, action.payload]
            }

        case SHOW_REMOVE_GENRE_SEARCH_CHANGE:
            let newValues = state.genresShowSearch.filter(v => v !== action.payload);
            return {
                ...state,
                genresShowSearch: [...newValues]
            }

        case SHOW_ADULT_SEARCH_CHANGE:
            return {
                ...state,
                adultShowSearch: !state.adultShowSearch
            }

        case SHOW_VOTE_SEARCH_CHANGE:
            return {
                ...state,
                voteShowSearch: action.payload
            }

        case SHOW_TITLE_SEARCH_CHANGE:
            return {
                ...state,
                titleShowSearch: action.payload
            }

         case SHOW_OVERVIEW_SEARCH_CHANGE:
            return {
                ...state,
                overviewShowSearch: action.payload
            }

        default :
            return state;        
    }
}
