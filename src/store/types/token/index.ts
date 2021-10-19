export interface TokenState {
    token: "";
    loading: boolean;
    error: null | string;
}

export enum TokenActionTypes {
    FETCH_TOKEN = "FETCH_TOKEN",
    FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS",
    FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR",
}

export interface FetchTokenAction {
    type: TokenActionTypes.FETCH_TOKEN;
}
export interface FetchTokenSuccessAction {
    type: TokenActionTypes.FETCH_TOKEN_SUCCESS;
    payload: any;
}
export interface FetchTokenErrorAction {
    type: TokenActionTypes.FETCH_TOKEN_ERROR;
    payload: string;
}

export type TokenActions =
    | FetchTokenAction
    | FetchTokenSuccessAction
    | FetchTokenErrorAction;