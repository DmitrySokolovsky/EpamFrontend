import {
    MOVIE_APPLY_SEARCH_CONFIG,
    GET_MOVIE_DATA,
    SHOW_APPLY_SEARCH_CONFIG,
    GET_TVSHOW_DATA,
    MOVIE_SAVE_SEARCH_CONFIG,
    SHOW_SAVE_SEARCH_CONFIG
} from '../actions';
import { contains, searcher } from '../../services/genresFilter.service';


const adSearchMiddlewear = store => next => action => {
    if(action.type===SHOW_APPLY_SEARCH_CONFIG) {        
        let adSearchConfig = store.getState().adShowSearch;
        let tvshows = store.getState().initTv.tvshows;
        let foundItems = searcher(tvshows, adSearchConfig, 'show');
        store.dispatch({
            type: GET_TVSHOW_DATA,
            payload: foundItems
        });
    }

    if(action.type===MOVIE_APPLY_SEARCH_CONFIG) {
        let adSearchMovieConfig = store.getState().adMovieSearch;        
        let movies = store.getState().init.movies;
        let foundItems = searcher(movies, adSearchMovieConfig, 'movie');
        store.dispatch({
            type: GET_MOVIE_DATA,
            payload: foundItems
        });
    }

    if(action.type===MOVIE_SAVE_SEARCH_CONFIG){
        let movieSearch = sessionStorage.getItem('movieSearchConfig');
        if(movieSearch){
            sessionStorage.removeItem('movieSearchConfig');
        }
        let movieSearchConfig = store.getState().adMovieSearch;
        let movieSearchConfigString = JSON.stringify(movieSearchConfig);
        sessionStorage.setItem('movieSearchConfig', movieSearchConfigString);
    }

    
    if(action.type===SHOW_SAVE_SEARCH_CONFIG){
        let showSearch = sessionStorage.getItem('showSearchConfig');
        if(showSearch){
            sessionStorage.removeItem('showSearchConfig');
        }
        let showSearchConfig = store.getState().adShowSearch;
        let showSearchConfigString = JSON.stringify(showSearchConfig);
        sessionStorage.setItem('showSearchConfig', showSearchConfigString);
    }

    return next(action);
};

export default adSearchMiddlewear;