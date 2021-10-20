import axios from "axios";
import {Dispatch} from "redux";
import {AnimesActions, AnimesActionTypes, IAnime} from "../types/animes";

export const fetchAnimes = () => {
    return async (dispatch: Dispatch<AnimesActions>) => {
        try {
            dispatch({type: AnimesActionTypes.FETCH_ANIMES});
            const response = await axios.get<IAnime[]>(
                "https://anime--hub.herokuapp.com/api/v1/anime"
            );
            dispatch({
                type: AnimesActionTypes.FETCH_ANIMES_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: AnimesActionTypes.FETCH_ANIMES_ERROR,
                payload: `Error: ${error}`,
            });
        }
    };
};