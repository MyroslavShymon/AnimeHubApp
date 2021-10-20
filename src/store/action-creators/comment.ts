import axios from "axios";
import {Dispatch} from "redux";
import {CommentActionTypes, CommentsActions, IComment} from "../types/comments";

export const addComment = (comment: IComment) => {
    return async (dispatch: Dispatch<CommentsActions>) => {
        try {
            dispatch({type: CommentActionTypes.FETCH_COMMENT});
            const response = await axios.post<any>(
                `https://anime--hub.herokuapp.com/api/v1/comments/`,
                comment
            );
            dispatch({
                type: CommentActionTypes.ADD_COMMENT,
                payload: comment,
            });
        } catch (error) {
            dispatch({
                type: CommentActionTypes.FETCH_COMMENT_ERROR,
                payload: `Error: ${error}`,
            });
        }
    }
}
