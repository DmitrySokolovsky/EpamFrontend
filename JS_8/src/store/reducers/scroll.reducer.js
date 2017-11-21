import { 
    TOGGLE_SCROLL,
    SCROLL_DOWN,
    SCROLL_UP
 } from "../actions"

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

        case SCROLL_DOWN:
            return {
                state,
                isScrollDown: true
            };

        case SCROLL_UP:
            return {
                state,
                isScrollDown: false
            };
        default:
            return {
                state
            }
    }
}