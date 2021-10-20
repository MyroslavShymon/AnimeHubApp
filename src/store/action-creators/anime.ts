import axios from "axios";
import {Dispatch} from "redux";
import {AnimeActions, AnimeActionTypes,} from "../types/anime";
import {IAnime} from "../types/animes";

export const fetchAnime = (id: string) => {
    return async (dispatch: Dispatch<AnimeActions>) => {
        try {
            dispatch({type: AnimeActionTypes.FETCH_ANIME});
            const response = await axios.get<IAnime>(
                `https://anime--hub.herokuapp.com/api/v1/anime/${id}`
            );
            dispatch({
                type: AnimeActionTypes.FETCH_ANIME_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: AnimeActionTypes.FETCH_ANIME_ERROR,
                payload: `Error: ${error}`,
            });
        }
    };
};