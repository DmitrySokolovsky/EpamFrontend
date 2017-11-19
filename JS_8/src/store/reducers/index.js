import { combineReducers } from 'redux';
import { formReducer } from "./form.reducer";
import {initMoviesAppReducer} from "./moviedata.reducer";

export const appReducers = combineReducers({
    form: formReducer,
    init: initMoviesAppReducer
});