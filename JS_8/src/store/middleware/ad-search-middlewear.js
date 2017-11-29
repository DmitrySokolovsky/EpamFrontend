import {
    MOVIE_APPLY_SEARCH_CONFIG,
    GET_MOVIE_DATA,
    APPLY_SHOW_SEARCH_CONFIG,
    GET_TVSHOW_DATA,
    RESUME_DEFAULT_SEARCH_CONFIG
} from '../actions';
import { contains } from '../../services/genresFilter.service';


const adSearchMiddlewear = store => next => action => {
    if(action.type===APPLY_SHOW_SEARCH_CONFIG) {
        
        let adSearchConfig = store.getState().adSearch;
        let tvshows = store.getState().initTv.tvshows;
        let genresForSearch = adSearchConfig.genresMovieSearch;
        let titleForSearch = adSearchConfig.titleMovieSearch;
        let descriptionForSearch = adSearchConfig.overviewMovieSearch;
        let adultForSearch = adSearchConfig.adultMovieSearch;
        
        let searchedShows = tvshows.filter((item)=>{
            return contains(item.genre_ids, genresForSearch);
        })
        .filter((item) => {
            console.log(item);
            return item.name.indexOf(titleForSearch)!==-1;
        })
        .filter((item) => {
            console.log(item);
            return item.description.indexOf(descriptionForSearch)!==-1;
        })
        .filter((item) => {
            console.log(item);
            return item.adult == adultForSearch;
        });

        store.dispatch({
            type: GET_TVSHOW_DATA,
            payload: searchedShows
        });
        
        console.log(adSearchConfig);
    }


    if(action.type===MOVIE_APPLY_SEARCH_CONFIG) {
        
        let adSearchMovieConfig = store.getState().adMovieSearch;
        let movies = store.getState().init.movies;
        let genresForSearch = adSearchMovieConfig.genresMovieSearch;
        let titleForSearch = adSearchMovieConfig.titleMovieSearch;
        let descriptionForSearch = adSearchMovieConfig.overviewMovieSearch;
        let adultForSearch = adSearchMovieConfig.adultMovieSearch;
        
        let searchedMovies = movies.filter((item)=>{
            return contains(item.genre_ids, genresForSearch);
        })
        .filter((item) => {
            console.log(item);
            return item.name.indexOf(titleForSearch)!==-1;
        })
        .filter((item) => {
            console.log(item);
            return item.description.indexOf(descriptionForSearch)!==-1;
        })
        .filter((item) => {
            console.log(item);
            return item.adult == adultForSearch;
        });

        store.dispatch({
            type: GET_MOVIE_DATA,
            payload: searchedMovies
        });
        

        console.log(adSearchMovieConfig);
    }
    return next(action);
};

export default adSearchMiddlewear;