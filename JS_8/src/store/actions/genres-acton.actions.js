import {
    GENRES_DATA_INIT,
    GET_GENRES_DATA
} from "./genres-action.types";

// diapatchig action for genre data request
export function initGenresData() {
    return {
        type: GENRES_DATA_INIT        
    }
}
