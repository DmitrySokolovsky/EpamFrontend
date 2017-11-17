import {DataServise} from "./data-service.js";
import {apiUrl} from "./api.config.js";

export class GenresService{
    constructor(){ 
        this.url = apiUrl.genreUrl;
    }

    saveGenresLocal(){
        let service = new DataServise();
        service.getData(this.url).then((response)=>{
            let genresArray = JSON.parse(response).genres;
            let genresString = JSON.stringify(genresArray);
            localStorage.setItem("genres",genresString);
        });
    }

    getGenresFromLocal(){
        let genresString = localStorage.getItem("genres");
        let genres = JSON.parse(genresString);
        return genres;
    }
}