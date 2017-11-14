import {TvShowEntity} from "./tvshow.entity.dto.js";
import {DataServise} from "./data-service.js";

export class EntityTvService {
    constructor() {
        this.dataServise = new DataServise();
        this.url = 'https://api.themoviedb.org/3/tv/popular?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&language=en-US&page=1';
    }

    getTvEntities() {
        return this.dataServise.getData(this.url).then(result => {
            let arr = JSON.parse(result).results;
            let shows = arr.map((item)=>{
                return new TvShowEntity(item);
            });
            return shows;
        });
    }
}