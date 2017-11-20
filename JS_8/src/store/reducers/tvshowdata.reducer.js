import {
    TVSHOW_DATA_INIT,
    GET_TVSHOW_DATA,
    ADD_USER_TVSHOW
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
        
        default:
            return state;
    }
}