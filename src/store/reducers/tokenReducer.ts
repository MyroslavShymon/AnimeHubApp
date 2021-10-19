import { TokenActions, TokenActionTypes, TokenState } from "../types/token";

const initialState: TokenState = {
    token: "",
    loading: false,
    error: null,
};

export const tokenReducer = (
    state = initialState,
    action: TokenActions
): TokenState => {
    switch (action.type) {
        case TokenActionTypes.FETCH_TOKEN:
            return { loading: true, error: null, token: "" };
        case TokenActionTypes.FETCH_TOKEN_SUCCESS:
            return { loading: false, error: null, token: action.payload };
        case TokenActionTypes.FETCH_TOKEN_ERROR:
            return { loading: false, error: action.payload, token: "" };

        default:
            return state;
    }
};