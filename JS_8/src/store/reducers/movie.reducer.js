import { INIT_MOVIES } from './../actions';
import { LocalSaver } from "./../../services/local-saver.service";

const localService = new LocalSaver();

const initialState = {
    state: 'INITIAL',
    values: []
}

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_MOVIES:
            return {
                ...state,
                values: localService.getMoviesfromLocal()
            };

        default:
            return state;
    }
}