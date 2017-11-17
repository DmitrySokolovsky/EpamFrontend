import {MovieEntity} from "./movie.entity.dto.js";
import {DataServise} from "./data-service.js";
import {apiUrl} from "./api.config.js";

export class EntityMovieService {
    constructor() {
        this.dataServise = new DataServise();
        this.url = apiUrl.movieUrl;
    }

    getMovieEntities() {
        return this.dataServise.getData(this.url).then(result => {
            let arr = JSON.parse(result).results;
            let movies = arr.map((item)=>{
                return new MovieEntity(item);
            });
            return movies;
        });
    }
}