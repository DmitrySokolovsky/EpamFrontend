import { 
    ADD_TO_LIB,
    MYLIB_DATA_INIT
} from './mylib-action.types';

export function initMyLibData() {
    return {
        type: MYLIB_DATA_INIT        
    }
}

export function addToMyLib(payload){
    return {
        type: ADD_TO_LIB,
        payload
    }
}