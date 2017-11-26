import {
    MYLIB_DATA_INIT,
    GET_MYLIB_DATA
} from '../actions';

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
    return next(action);
}

export default initMyLibMiddlewear;