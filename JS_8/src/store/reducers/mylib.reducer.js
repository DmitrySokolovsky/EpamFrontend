import {
    MYLIB_DATA_INIT,
    GET_MYLIB_DATA,
    MOVIE_ADD_TO_LIB,
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
                ...state,
                myLibItems: action.payload              
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
            var newMovies = state.myLibItems.filter(v => v.id !== action.payload.id);
            let currentLibraryString = JSON.stringify(newMovies);
            localStorage.removeItem('mylib');
            localStorage.setItem('mylib', currentLibraryString);
            return{
                ...state,
                myLibItems: newMovies
            }

        case TVSHOW_REMOVE_FROM_LIB:
            var newMovies = state.myLibItems.filter(v => v.id !== action.payload.id);
            var currentLibraryString = JSON.stringify(newMovies);
            localStorage.removeItem('mylib');
            localStorage.setItem('mylib', currentLibraryString);
            return{
                ...state,
                myLibItems: newMovies
            }

        default:
            return state;
    }
}