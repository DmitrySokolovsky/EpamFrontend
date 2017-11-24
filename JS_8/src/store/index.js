import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';
import movieLoad from "./middleware/logger.middlevear.js";
import tvShowLoad from "./middleware/tvshowload.middlewear";
import movieRefresh from "./middleware/addmovie.middlewear";
import tvshowRefresh from "./middleware/addtvshow.middlewear";
import genresLoad from './middleware/genres.middlewear';
import addToMyLibMiddlewear from './middleware/my-lib.middlewear';

export const appStore = createStore(
    appReducers,
    applyMiddleware(
        movieLoad,
        tvShowLoad,
        movieRefresh,
        tvshowRefresh,
        genresLoad,
        addToMyLibMiddlewear
    )
);

export default appStore;