import { ADD_USER_TVSHOW, CLOSE_FORM } from "../actions";
import {setLocal, setLocalRemoveLast} from '../../services/local-saver.service';


const tvshowRefresh = store => next => action => {
    if(action.type===ADD_USER_TVSHOW){
        var localTvShowStr = localStorage.getItem("tvshows");
        let localTvShowArray = JSON.parse(localTvShowStr);
        let item = action.payload;
        item.type = 'tvshow';
        item.isInLibrary = false;
        localTvShowArray.unshift(item);
        setLocalRemoveLast(localTvShowArray, 'tvshows');
        store.dispatch({
            type: CLOSE_FORM
        });     
    }
    return next(action);
};

export default tvshowRefresh;