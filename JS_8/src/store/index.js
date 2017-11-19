import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';
import movieLoad from "./middleware/logger.middlevear.js"

export const appStore = createStore(
    appReducers,
    applyMiddleware(
        movieLoad
    )
);

export default appStore;