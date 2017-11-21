import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';
import movieLoad from "./middleware/logger.middlevear.js";
import tvShowLoad from "./middleware/tvshowload.middlewear";
import movieRefresh from "./middleware/addmovie.middlewear";
import tvshowRefresh from "./middleware/addtvshow.middlewear";

export const appStore = createStore(
    appReducers,
    applyMiddleware(
        movieLoad,
        tvShowLoad,
        movieRefresh,
        tvshowRefresh
    )
);

export default appStore;