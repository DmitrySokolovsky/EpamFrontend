import { INIT_MOVIES } from './../actions';
import { LocalService } from "./../../services/local-saver.service";

const localService = new LocalService();

const initialState = {
    state: 'INITIAL',
    values: []
}

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_MOVIES:
            return {
                ...state,
                values: localService.getMoviesfromLocal();
            };

        default:
            return state;
    }
}