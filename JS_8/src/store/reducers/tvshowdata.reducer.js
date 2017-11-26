import {
    TVSHOW_DATA_INIT,
    GET_TVSHOW_DATA,
    ADD_USER_TVSHOW,
    TVSHOW_ADDED_TO_LIB,
    TVSHOW_REMOVED_FROM_LIB
} from "../actions";

const initialState = {
    state: 'INITIAL',
    tvshows: []
}

export function initTvShowAppReducer(state = initialState, action){
    switch (action.type){
        
        case GET_TVSHOW_DATA:
            return {
                ...state,
                tvshows: action.payload
            }

        case ADD_USER_TVSHOW:
            return {
                ...state,
                tvshows: [...state.tvshows,action.payload]    
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
        
        default:
            return state;
    }
}