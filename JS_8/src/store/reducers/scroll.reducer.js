import { TOGGLE_SCROLL } from "../actions"

const initialState = {
    state: 'INITIAL',
    isScrollDown: true
}

export function scrollReducer (state = initialState, action){
    switch (action.type){
        case TOGGLE_SCROLL:
            return {
                state,
                isScrollDown: !state.isScrollDown
            };
        default:
            return {
                state
            }
    }
}