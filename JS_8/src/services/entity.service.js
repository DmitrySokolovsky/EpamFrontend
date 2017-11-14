import {MovieEntity} from "./movie.entity.dto.js";
import {DataServise} from "./data-service.js";

export class EntityMovieService {
    constructor() {
        this.dataServise = new DataServise();
        this.url = "https://api.themoviedb.org/3/discover/movie?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2";
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