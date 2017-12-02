import {
    TVSHOW_DATA_INIT,
    GET_TVSHOW_DATA,
    ADD_USER_TVSHOW,
    TVSHOW_ADDED_TO_LIB,
    TVSHOW_REMOVED_FROM_LIB,
    GET_SIMILAR_SHOW_DATA,
    ADD_NEXT_SHOW_DATA
} from "../actions";
import { searcher } from '../../services/genresFilter.service';


const initialState = {
    state: 'INITIAL',
    tvshows: [],
    similarShows: []
}

export function initTvShowAppReducer(state = initialState, action){
    switch (action.type){
        
        case GET_TVSHOW_DATA:
            let showConfigStr = sessionStorage.getItem('showSearchConfig');
            let data = action.payload;
            let config;
            if(showConfigStr){
                config = JSON.parse(showConfigStr);
                data = searcher(action.payload, config, 'show');
            }

            return {
                ...state,
                tvshows: data
            }

        case ADD_USER_TVSHOW:
            return {
                ...state,
                tvshows: [action.payload, ...state.tvshows]    
            }

        case TVSHOW_ADDED_TO_LIB:
            return {
                ...state,
                tvshows: state.tvshows.map(item => 
                (item.id === action.payload.id)?
                {...item, isInLibrary:true}:
                item)
            }

        case TVSHOW_REMOVED_FROM_LIB:
            return {
                ...state,
                tvshows: state.tvshows.map(item => 
                (item.id === action.payload.id)?
                {...item, isInLibrary:false}:
                item)
            }
        
        case GET_SIMILAR_SHOW_DATA:
            return {
                ...state,
                similarShows: action.payload
            }

        case ADD_NEXT_SHOW_DATA:
            return {
                ...state,
                tvshows: state.tvshows.concat(action.payload)    
            }

        default:
            return state;
    }
}