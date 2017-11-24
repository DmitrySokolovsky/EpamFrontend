import {
    MYLIB_DATA_INIT,
    ADD_TO_LIB,
    GET_MYLIB_DATA
} from '../actions';

const initialState = {
    state: 'INITIAL',
    myLibItems: []
}

export function addToMyLibReducer(state = initialState, action){
    switch(action.type){

        case GET_MYLIB_DATA:
            return {
                ...state,
                tvshows: action.payload
            }

        case ADD_TO_LIB:
            return{
                ...state,
                myLibItems: [...state.myLibItems, action.payload]
            }

        default:
            return state;
    }
}