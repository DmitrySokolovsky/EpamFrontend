import { TOGGLE_FORM, MOVIE_DATA_INIT, GET_MOVIE_DATA } from "../actions";
import { DataServise } from "../../services/data-service";
import { MovieEntity } from "../../services/movie.entity.dto";
import { apiUrl } from "../../services/api.config"

let localSaver = new LocalSaver();
let dataService = new DataServise();

const movieLoad = store => next => action => {
    console.log("Тип события" + action.type);
    if(action.type===MOVIE_DATA_INIT){
        console.log("INIT!!!");     
        
        dataService.getData(apiUrl.movieUrl).then((result)=>{
            let arr = JSON.parse(result).results;
            let movies = arr.map((item)=>{
                return new MovieEntity(item);
            });
            let data = movies;
            var movieString = JSON.stringify(movies);
            localStorage.setItem("movies",movieString);
             store.dispatch({
                type: GET_MOVIE_DATA,
                payload: data
            });
        });      
    }
    console.log(store.getState())
    return next(action);
};

export default movieLoad;
