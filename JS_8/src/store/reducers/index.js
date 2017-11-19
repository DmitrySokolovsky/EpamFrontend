import { combineReducers } from 'redux';
import { formReducer } from "./form.reducer";
import {initMoviesAppReducer} from "./moviedata.reducer";
import { scrollReducer } from "./scroll.reducer";

export const appReducers = combineReducers({
    form: formReducer,
    init: initMoviesAppReducer,
    scroll: scrollReducer
});