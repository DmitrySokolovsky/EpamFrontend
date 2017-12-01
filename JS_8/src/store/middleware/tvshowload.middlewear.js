import { 
    TVSHOW_DATA_INIT, 
    GET_TVSHOW_DATA,
    GET_SIMILAR_SHOW_DATA,
    GET_SIMILAR_SHOWS
} from "../actions";

import { DataServise } from "../../services/data-service";
import { TvShowEntity } from "../../services/tvshow.entity.dto";
import { apiUrl } from "../../services/api.config";

let dataService = new DataServise();

const tvShowLoad = store => next => action => {
    if(action.type===TVSHOW_DATA_INIT){ 
        console.log(action.type);
      
        let tvshowsLS = localStorage.getItem("tvshows");
        if(!tvshowsLS){
            dataService.getData(apiUrl.showUrl).then((result)=>{       
                let arr = JSON.parse(result).results;
                let tvshows = arr.map((item)=>{
                    return new TvShowEntity(item);
                });
                let data = tvshows;            
                let customShowsSTR = localStorage.getItem("tvshows");
            
                if(customShowsSTR){
                    let customShows = JSON.parse(customShowsSTR);
                    data = tvshows.concat(customShows);
                }

                let dataString = JSON.stringify(data);
                localStorage.setItem('tvshows',dataString);

                store.dispatch({
                    type: GET_TVSHOW_DATA,
                    payload: data
                });
            });
        } else {
            let tvshowsLS = localStorage.getItem('tvshows');
            let shows = JSON.parse(tvshowsLS);

            store.dispatch({
                type: GET_TVSHOW_DATA,
                payload: shows
            });
        }
    }   
    
    if(action.type === GET_SIMILAR_SHOWS){
        dataService.getSimilarShowData(action.payload).then(result=>{
            let resultArr = JSON.parse(result).results;
            let similarShows = resultArr.map((item)=>{
                return new TvShowEntity(item);
            });
            store.dispatch({
                type: GET_SIMILAR_SHOW_DATA,
                payload: similarShows
            })
        });
    }
    
    return next(action);
};

export default tvShowLoad;