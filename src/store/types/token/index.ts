export interface IUser {
    username: string;
    password?: string;
}

export interface TokenState {
    user: IUser | null;
    token: string | null;
    loading: boolean;
    error: null | string;
}

export enum TokenActionTypes {
    FETCH_TOKEN = "FETCH_TOKEN",
    SET_USER = "SET_USER",
    FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS",
    FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR",
}

export interface SetUserAction {
    type: TokenActionTypes.SET_USER;
    payload: IUser | null
}

export interface FetchTokenAction {
    type: TokenActionTypes.FETCH_TOKEN;
}

export interface FetchTokenSuccessAction {
    type: TokenActionTypes.FETCH_TOKEN_SUCCESS;
    payload: string | null;
}

export interface FetchTokenErrorAction {
    type: TokenActionTypes.FETCH_TOKEN_ERROR;
    payload: string;
}

export type TokenActions =
    | FetchTokenAction
    | FetchTokenSuccessAction
    | FetchTokenErrorAction
    | SetUserAction;