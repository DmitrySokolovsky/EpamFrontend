import { TVSHOW_DATA_INIT, GET_TVSHOW_DATA } from "../actions";
import { DataServise } from "../../services/data-service";
import { TvShowEntity } from "../../services/tvshow.entity.dto";
import { apiUrl } from "../../services/api.config";

let dataService = new DataServise();

const tvShowLoad = store => next => action => {
    if(action.type===TVSHOW_DATA_INIT){       
        dataService.getData(apiUrl.showUrl).then((result)=>{
            let arr = JSON.parse(result).results;
            let shows = arr.map((item)=>{
                return new TvShowEntity(item);
            });
            let data = shows;            
            let customShowsSTR = localStorage.getItem("userTvShow");
            
            if(customShowsSTR){
                let customShows = JSON.parse(customShowsSTR);
                data = customShows.concat(shows);
            }
             store.dispatch({
                type: GET_TVSHOW_DATA,
                payload: data
            });
        });      
    }
    return next(action);
};

export default tvShowLoad;