import { combineReducers } from "redux";
import {tokenReducer} from "./tokenReducer";

export const rootReducer = combineReducers({
    token: tokenReducer,
    // animes: animesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;