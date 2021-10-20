export interface IAnime {
    addedBy: null | string,
    country: string,
    genres: string,
    id: string,
    image: null | string | undefined,
    setting: string,
    theme: string,
    title: string
}

export interface AnimesState {
    animes: IAnime[];
    loading: boolean;
    error: null | string;
}

export enum AnimesActionTypes {
    FETCH_ANIMES = "FETCH_ANIMES",
    FETCH_ANIMES_SUCCESS = "FETCH_ANIMES_SUCCESS",
    FETCH_ANIMES_ERROR = "FETCH_ANIMES_ERROR",
}

export interface FetchAnimesAction {
    type: AnimesActionTypes.FETCH_ANIMES;
}

export interface FetchAnimesSuccessAction {
    type: AnimesActionTypes.FETCH_ANIMES_SUCCESS;
    payload: IAnime[];
}

export interface FetchAnimesErrorAction {
    type: AnimesActionTypes.FETCH_ANIMES_ERROR;
    payload: string;
}

export type AnimesActions =
    | FetchAnimesAction
    | FetchAnimesSuccessAction
    | FetchAnimesErrorAction;