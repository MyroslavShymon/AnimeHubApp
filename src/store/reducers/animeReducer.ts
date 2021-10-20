import {AnimeActions, AnimeActionTypes, AnimeState} from "../types/anime";

const initialState: AnimeState = {
    anime: null,
    loading: false,
    error:  null
}

export const animeReducer = (
    state = initialState,
        action: AnimeActions
):AnimeState =>{
switch(action.type) {
    case AnimeActionTypes.FETCH_ANIME:
        return {loading: true, error: null, anime: null};
    case AnimeActionTypes.FETCH_ANIME_SUCCESS:
        return {loading: false, error: null, anime: action.payload};
    case AnimeActionTypes.FETCH_ANIME_ERROR:
        return {loading: false, error: action.payload, anime: null};
    default:
        return state;
}
}