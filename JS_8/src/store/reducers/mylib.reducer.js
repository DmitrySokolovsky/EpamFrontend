import {
    MYLIB_DATA_INIT,
    MOVIE_ADD_TO_LIB,
    GET_MYLIB_DATA,
    TVSHOW_ADD_TO_LIB,
    MOVIE_REMOVE_FROM_LIB,
    TVSHOW_REMOVE_FROM_LIB
} from '../actions';

const initialState = {
    state: 'INITIAL',
    myLibItems: []
}

export function addToMyLibReducer(state = initialState, action){
    switch(action.type){

        case GET_MYLIB_DATA:
            return {
                ...state                
            }

        case MOVIE_ADD_TO_LIB:
            return{
                ...state,
                myLibItems: [...state.myLibItems, action.payload]
            }

        case TVSHOW_ADD_TO_LIB:
            return{
                ...state,
                myLibItems: [...state.myLibItems, action.payload]
            }

        case MOVIE_REMOVE_FROM_LIB:
            let newMovies = state.myLibItems.filter(v => v !== action.payload);
            return{
                ...state,
                myLibItems: [...newMovies]
            }

        default:
            return state;
    }
}