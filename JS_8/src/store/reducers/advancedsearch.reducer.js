import {
    TOGGLE_SEARCH,
    GENRE_SEARCH_CHANGE,
    ADULT_SEARCH_CHANGE,
    VOTE_SEARCH_CHANGE,
    TITLE_SEARCH_CHANGE,
    OVERVIEW_SEARCH_CHANGE,
    SAVE_SEARCH_CONFIG,
    REMOVE_GENRE_SEARCH_CHANGE,
} from '../actions';

const initialState = {
    state: 'INITIAL',
    isSearchOpen: true,
    genresSearch: [],
    adultSearch: '',
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
            console.log(state.genresSearch);
            return {
                ...state,
                genresSearch: [...state.genresSearch, action.payload]
            }

        case REMOVE_GENRE_SEARCH_CHANGE:
            let newValues = state.genresSearch.filter(v => v !== action.payload);
            return {
                ...state,
                genresSearch: [...newValues]
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
         console.log(state.overviewSearch);
            return {
                ...state,
                overviewSearch: action.payload
            }

        default :
            return state;        
    }
}