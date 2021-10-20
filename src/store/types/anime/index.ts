import {IAnime} from "../animes";

export interface AnimeState {
    anime: null | IAnime,
    loading: boolean,
    error: null | string
}

export enum AnimeActionTypes {
    FETCH_ANIME = "FETCH_ANIME",
    FETCH_ANIME_SUCCESS = "FETCH_ANIME_SUCCESS",
    FETCH_ANIME_ERROR = "FETCH_ANIME_ERROR",
}

export interface FetchAnimeAction {
    type: AnimeActionTypes.FETCH_ANIME
}

export interface FetchAnimeSuccessAction {
    type: AnimeActionTypes.FETCH_ANIME_SUCCESS;
    payload: IAnime
}

export interface FetchAnimeErrorAction {
    type: AnimeActionTypes.FETCH_ANIME_ERROR;
    payload: string;
}

export type AnimeActions =
    | FetchAnimeAction
    | FetchAnimeErrorAction
    | FetchAnimeSuccessAction