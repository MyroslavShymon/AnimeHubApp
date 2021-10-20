import {AnimesActions, AnimesActionTypes, AnimesState} from "../types/animes";

const initialState: AnimesState = {
    animes: [],
    loading: false,
    error: null
}

export const animesReducer = (
    state = initialState,
    action: AnimesActions): AnimesState => {
    switch (action.type) {
        case AnimesActionTypes.FETCH_ANIMES:
            return {loading: true, error: null, animes: []};
        case AnimesActionTypes.FETCH_ANIMES_SUCCESS:
            return {loading: false, error: null, animes: action.payload};
        case AnimesActionTypes.FETCH_ANIMES_ERROR:
            return {loading: false, error: action.payload, animes: []};
        default:
            return state;
    }
}