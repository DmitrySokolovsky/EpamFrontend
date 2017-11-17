import {TvShowEntity} from "./tvshow.entity.dto.js";
import {DataServise} from "./data-service.js";
import {apiUrl} from "./api.config.js";

export class EntityTvService {
    constructor() {
        this.dataServise = new DataServise();
        this.url = apiUrl.showUrl;
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