import {
    MYLIB_DATA_INIT,
    GET_MYLIB_DATA,
    MAKE_ITEMS_WATCHED
} from '../actions';

import { setLocalRemoveLast } from '../../services/local-saver.service';

const initMyLibMiddlewear = store => next => action => {
    if(action.type===MYLIB_DATA_INIT){
        let libstring = localStorage.getItem('mylib');
        if(libstring){
            let lib = JSON.parse(libstring);
            store.dispatch({
                type: GET_MYLIB_DATA,
                payload: lib
            });
        }        
    }

    if(action.type === MAKE_ITEMS_WATCHED){
        let libItemsString = localStorage.getItem('mylib');
        if(libItemsString){
            let libItems = JSON.parse(libItemsString);
            let watchedItems = libItems.map((item)=>{
                item.watched = true;
                return item;
            });

            setLocalRemoveLast(watchedItems, 'mylib');
        }
    }

    return next(action);
}

export default initMyLibMiddlewear;