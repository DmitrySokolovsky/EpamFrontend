import {
    GENRES_DATA_INIT,
    GET_GENRES_DATA
} from "./genres-action.types";

export function initGenresData() {
    return {
        type: GENRES_DATA_INIT        
    }
}
