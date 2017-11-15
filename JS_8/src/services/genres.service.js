import {DataServise} from "./data-service.js";

export class GenresService{
    constructor(){ 
        this.url = "https://api.themoviedb.org/3/genre/movie/list?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US"
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