import { 
    MOVIE_DATA_INIT, 
    GET_MOVIE_DATA
} from "../actions";

import { DataServise } from "../../services/data-service";
import { MovieEntity } from "../../services/movie.entity.dto";
import { apiUrl } from "../../services/api.config";
import {setLocal, setLocalRemoveLast} from '../../services/local-saver.service';

let dataService = new DataServise();

const movieLoad = store => next => action =>{
    if(action.type===MOVIE_DATA_INIT){ 
        let moviesLS = localStorage.getItem("movies");
        if(!moviesLS){
            dataService.getData(apiUrl.movieUrl).then((result)=>{       
                let arr = JSON.parse(result).results;
                console.log(arr);
                let movies = arr.map((item)=>{
                    return new MovieEntity(item);
                });
                let data = movies;            
                let customMoviesSTR = localStorage.getItem("userMovies");
            
                if(customMoviesSTR){
                    let customMovies = JSON.parse(customMoviesSTR);
                    data = movies.concat(customMovies);
                }

                let dataString = JSON.stringify(data);
                localStorage.setItem('movies',dataString);

                store.dispatch({
                    type: GET_MOVIE_DATA,
                    payload: data
                });
            });
        } else {
            let moviesLS = localStorage.getItem('movies');
            let movies = JSON.parse(moviesLS);
            store.dispatch({
                type: GET_MOVIE_DATA,
                payload: movies
            });
        }
    }
    return next(action);
}

export default movieLoad;