import {
    TOGGLE_SEARCH,
    GENRE_SEARCH_CHANGE,
    ADULT_SEARCH_CHANGE,
    VOTE_SEARCH_CHANGE,
    TITLE_SEARCH_CHANGE,
    OVERVIEW_SEARCH_CHANGE,
    SAVE_SEARCH_CONFIG
} from '../actions';

const initialState = {
    state: 'INITIAL',
    isSearchOpen: false,
    genresSearch: [],
    adultSearch: false,
    voteSearch: 0,
    titleSearch: '',
    overviewSearch: ''
}

export function advancedSearchReducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_SEARCH: 
            return {
                ...state,
                isSearchOpen: !state.isSearchOpen
            };
        
        case GENRE_SEARCH_CHANGE:
            return {
                ...state,
                genresSearch: [...genresSearch, action.payload]
            }

        case ADULT_SEARCH_CHANGE:
            return {
                ...state,
                adultSearch: !state.adultSearch
            }

        case VOTE_SEARCH_CHANGE:
            return {
                ...state,
                voteSearch: action.payload
            }

        case TITLE_SEARCH_CHANGE:
            return {
                ...state,
                titleSearch: action.payload
            }

         case OVERVIEW_SEARCH_CHANGE:
            return {
                ...state,
                overviewSearch: action.payload
            }
        
    }
}