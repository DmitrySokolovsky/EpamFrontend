import {
    MYLIB_DATA_INIT,
    GET_MYLIB_DATA
} from '../actions';

const initMyLibMiddlewear = store => next => action => {
    if(action.type===MYLIB_DATA_INIT){
        
    }
    return next(action);
}

export default initMyLibMiddlewear;