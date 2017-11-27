import { combineReducers } from 'redux';
import { formReducer } from "./form.reducer";
import {initMoviesAppReducer} from "./moviedata.reducer";
import {initTvShowAppReducer} from "./tvshowdata.reducer";
import {genresReducer} from './genres.reducer';
import {addToMyLibReducer} from './mylib.reducer';
import {advancedSearchReducer} from './advancedsearch.reducer'

export const appReducers = combineReducers({
    form: formReducer,
    init: initMoviesAppReducer,
    initTv: initTvShowAppReducer,
    genres: genresReducer,
    addToLib: addToMyLibReducer,
    adSearch: advancedSearchReducer
});