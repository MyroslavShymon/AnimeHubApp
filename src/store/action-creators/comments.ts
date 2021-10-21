import {Dispatch} from "redux";
import {CommentActionTypes, CommentsActions, IComment} from "../types/comments";
import axios from "axios";

export const fetchComments = (id: string, token: string) => {
    return async (dispatch: Dispatch<CommentsActions>) => {
        try {
            dispatch({type: CommentActionTypes.FETCH_COMMENTS});
            const response = await axios.get<IComment[]>(
                `https://anime--hub.herokuapp.com/api/v1/comments/${id}`, {
                    headers: {Authorization: "Bearer " + token}
                }
            );
            dispatch({
                type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
                payload: response.data,
            });
        } catch
            (error) {
            dispatch({
                type: CommentActionTypes.FETCH_COMMENTS_ERROR,
                payload: `Error: ${error}`,
            });
        }
    }
}
