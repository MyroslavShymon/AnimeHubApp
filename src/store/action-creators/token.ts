import axios from "axios";
import jwt_decode, {JwtPayload} from "jwt-decode";
import {Dispatch} from "redux";
import {IUser, TokenActions, TokenActionTypes} from "../types/token";

export const auth = (user: IUser) => {
    return async (dispatch: Dispatch<TokenActions>) => {
        try {
            dispatch({type: TokenActionTypes.FETCH_TOKEN});
            const token: string | null = localStorage.getItem("token")
            if (token) {
                dispatch({
                    type: TokenActionTypes.FETCH_TOKEN_SUCCESS,
                    payload: String(localStorage.getItem("token")),
                });
                const result = jwt_decode<JwtPayload>(token);
                dispatch({
                    type: TokenActionTypes.SET_USER,
                    payload: {username: String(result.sub)}
                })
            } else {
                const response = await axios.post<string>(
                    `https://anime--hub.herokuapp.com/api/v1/auth`,
                    {username: user.username, password: user.password},
                );
                dispatch({
                    type: TokenActionTypes.FETCH_TOKEN_SUCCESS,
                    payload: response.data,
                });
                const result = jwt_decode<JwtPayload>(response.data);
                dispatch({
                    type: TokenActionTypes.SET_USER,
                    payload: {username: String(result.sub)}
                })
                localStorage.setItem("token", response.data);
            }
        } catch (error) {
            dispatch({
                type: TokenActionTypes.FETCH_TOKEN_ERROR,
                payload: `Error: ${error}`,
            });
        }
    }
}

export const getTokens = (): TokenActions => {
    const token = localStorage.getItem("token");
    return {type: TokenActionTypes.FETCH_TOKEN_SUCCESS, payload: token};
}

export const getUser = (): TokenActions => {
    const token = localStorage.getItem("token");
    if (token) {
        const result = jwt_decode<JwtPayload>(token);
        return {type: TokenActionTypes.SET_USER, payload: {username: String(result.sub)}};
    }
    return {type: TokenActionTypes.SET_USER, payload: null};
}