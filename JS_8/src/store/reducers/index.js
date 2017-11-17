import { combineReducers } from 'redux';
import { movieReducer } from './movie.reducer.js';

export const appReducers = combineReducers({
    movie: movieReducer
});