import {combineReducers} from "redux";
import {tokenReducer} from "./tokenReducer";
import {animesReducer} from "./animesReducer";
import {animeReducer} from "./animeReducer";
import {commentsReducer} from "./commentReducer";

export const rootReducer = combineReducers({
    token: tokenReducer,
    animes: animesReducer,
    anime: animeReducer,
    comment: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;