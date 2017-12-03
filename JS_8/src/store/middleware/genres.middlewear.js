import {
    GENRES_DATA_INIT,
    GET_GENRES_DATA
} from '../actions';

import { DataServise } from '../../services/data-service';
import { apiUrl } from '../../services/api.config';

let dataService = new DataServise();

//getting genres data
const genresLoad = store => next => action => {
    if(action.type===GENRES_DATA_INIT){
        dataService.getData(apiUrl.genreUrl).then((result)=>{
            let genres = JSON.parse(result).genres;
            let data = genres;
            store.dispatch({
                type: GET_GENRES_DATA,
                payload: data
            });
        });
    }
    return next(action);
}

export default genresLoad;