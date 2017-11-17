import {LocalSaver} from "./local-saver.service.js";
import {GenresService} from "./genres.service.js";

export class MoviesLoader{
    constructor(){}

    viewMovies(){
        var localSaver = new LocalSaver();
        if(!localSaver.getMoviesfromLocal()){
            localSaver.saveMoviesLocal();            
        }
        return localSaver.getMoviesfromLocal();
    }
}