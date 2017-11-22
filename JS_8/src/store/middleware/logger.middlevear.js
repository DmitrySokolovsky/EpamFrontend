import { 
    MOVIE_DATA_INIT, 
    GET_MOVIE_DATA, 
    GET_MOVIE_DATA_SUCCESS 
} from "../actions";

import { DataServise } from "../../services/data-service";
import { MovieEntity } from "../../services/movie.entity.dto";
import { apiUrl } from "../../services/api.config"

let dataService = new DataServise();

const movieLoad = store => next => action => {
    console.log("Тип события" + action.type);
    if(action.type===MOVIE_DATA_INIT){       
        dataService.getData(apiUrl.movieUrl).then((result)=>{
            let arr = JSON.parse(result).results;
            let movies = arr.map((item)=>{
                return new MovieEntity(item);
            });
            let data = movies;            
            let customMoviesSTR = localStorage.getItem("userMovies");
            
            if(customMoviesSTR){
                let customMovies = JSON.parse(customMoviesSTR);
                data = movies.concat(customMovies);
            }
            store.dispatch({
                type: GET_MOVIE_DATA_SUCCESS
            });
             store.dispatch({
                type: GET_MOVIE_DATA,
                payload: data
            });
            
        });      
    }
    return next(action);
};

export default movieLoad;
