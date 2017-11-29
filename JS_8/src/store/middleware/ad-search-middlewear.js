import {
    APPLY_MOVIE_SEARCH_CONFIG,
    GET_MOVIE_DATA
} from '../actions';
import { contains } from '../../services/genresFilter.service';


const adSearchMiddlewear = store => next => action => {
    if(action.type===APPLY_MOVIE_SEARCH_CONFIG) {
        let adSearchConfig = store.getState().adSearch;
        let movies = store.getState().init.movies;
        let genresForSearch = adSearchConfig.genresSearch;
        let titleForSearch = adSearchConfig.titleSearch;
        let descriptionForSearch = adSearchConfig.overviewSearch;
        let adultForSearch = adSearchConfig.adultSearch;
        
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
        
        console.log(adSearchConfig);
    }
    return next(action);
};

export default adSearchMiddlewear;