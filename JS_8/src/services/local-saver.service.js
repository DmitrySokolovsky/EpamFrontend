import {EntityMovieService} from "./movie-entity.service.js";
import {EntityTvService} from "./tv-entity.service.js";
 
export function setLocal(array,key){
        let string = JSON.stringify(array);
        localStorage.setItem(key,string);
    }
