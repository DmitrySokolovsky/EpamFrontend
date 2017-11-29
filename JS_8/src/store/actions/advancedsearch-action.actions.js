import {
    TOGGLE_SEARCH,
    GENRE_SEARCH_CHANGE,
    ADULT_SEARCH_CHANGE,
    VOTE_SEARCH_CHANGE,
    TITLE_SEARCH_CHANGE,
    OVERVIEW_SEARCH_CHANGE,
    SAVE_SEARCH_CONFIG
} from './advancedsearch-action.types';

export function toggleSearch() {
    return {
        type: TOGGLE_SEARCH
    }
}

export function changeGenre(payload) {
    return {
        type: GENRE_SEARCH_CHANGE,
        payload
    }
}

export function changeAdult(payload) {
    return {
        type: ADULT_SEARCH_CHANGE,
        payload
    }
}

export function changeVote(payload) {
    return {
        type: VOTE_SEARCH_CHANGE,
        payload
    }
}

export function changeTitle(payload) {
    return {
        type: TITLE_SEARCH_CHANGE,
        payload
    }
}

export function changeOverview(payload) {
    return {
        type: OVERVIEW_SEARCH_CHANGE,
        payload
    }
}

export function saveSearchConfig() {
    return {
        type: SAVE_SEARCH_CONFIG,
    }
}
