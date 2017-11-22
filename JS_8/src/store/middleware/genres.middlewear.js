import {
    GENRES_DATA_INIT,
    GET_GENRES_DATA
} from '../actions';

import { DataServise } from '../../services/data-service';
import { apiUrl } from '../../services/api.config';

let dataService = new DataServise();

const genresLoad = store => next => action => {
    if(action.type===GENRES_DATA_INIT){
        dataService.getData(apiUrl.genreUrl).then((result)=>{
            console.log(result)
        });
    }
    return next(action);
}

export default genresLoad;