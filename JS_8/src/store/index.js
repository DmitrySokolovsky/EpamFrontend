import { createStore, applyMiddleware, compose } from 'redux';
import { appReducers } from './reducers';
import movieLoad from './middleware/moviesload.middlewear';
import tvShowLoad from "./middleware/tvshowload.middlewear";
import movieRefresh from "./middleware/addmovie.middlewear";
import tvshowRefresh from "./middleware/addtvshow.middlewear";
import genresLoad from './middleware/genres.middlewear';
import operationsWithMyLibMiddlewear from './middleware/my-lib.middlewear';
import initMyLibMiddlewear from './middleware/initMyLib.middlewear';
import adSearchMiddlewear from './middleware/ad-search-middlewear';

export const appStore = createStore(
    appReducers,
    applyMiddleware(
        movieLoad,
        tvShowLoad,
        movieRefresh,
        tvshowRefresh,
        genresLoad,
        initMyLibMiddlewear,
        operationsWithMyLibMiddlewear,
        adSearchMiddlewear
    )
);

export default appStore;