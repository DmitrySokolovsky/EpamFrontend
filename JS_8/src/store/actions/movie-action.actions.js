import { INIT_MOVIES } from './movie-action.types';

export function initMovies(payload) {
    return {
        type: INIT_MOVIES,
        payload
    }
}