import {TokenActions, TokenActionTypes, TokenState} from "../types/token";

const initialState: TokenState = {
    token: "",
    loading: false,
    error: null,
    user: null
};

export const tokenReducer = (
    state = initialState,
    action: TokenActions
): TokenState => {
    switch (action.type) {
        case TokenActionTypes.FETCH_TOKEN:
            return {...state, loading: true, error: null, token: ""};
        case TokenActionTypes.FETCH_TOKEN_SUCCESS:
            return {...state, loading: false, error: null, token: action.payload};
        case TokenActionTypes.FETCH_TOKEN_ERROR:
            return {...state, loading: false, error: action.payload, token: ""};
        case TokenActionTypes.SET_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }
};