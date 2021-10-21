import axios from "axios";
import {Dispatch} from "redux";
import {CommentActionTypes, CommentsActions, IComment} from "../types/comments";

export const addComment = (comment: IComment, token: string) => {
    return async (dispatch: Dispatch<CommentsActions>) => {
        try {
            dispatch({type: CommentActionTypes.FETCH_COMMENT});
            await axios.post<IComment[]>(
                `https://anime--hub.herokuapp.com/api/v1/comments/`,
                comment,
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
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
