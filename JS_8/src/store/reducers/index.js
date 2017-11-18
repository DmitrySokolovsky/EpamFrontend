import { combineReducers } from 'redux';
import { formReducer } from "./form.reducer";

export const appReducers = combineReducers({
    form: formReducer
});