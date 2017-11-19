import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';
import movieLoad from "./middleware/logger.middlevear.js"
import movieRefresh from "./middleware/addmovie.middlewear"

export const appStore = createStore(
    appReducers,
    applyMiddleware(
        movieLoad,
        movieRefresh
    )
);

export default appStore;