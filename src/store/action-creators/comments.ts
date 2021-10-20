import {Dispatch} from "redux";
import {CommentActionTypes, CommentsActions, IComment} from "../types/comments";
import axios from "axios";

export const fetchComments = (id: string) => {
    return async (dispatch: Dispatch<CommentsActions>) => {
        try {
            dispatch({type: CommentActionTypes.FETCH_COMMENTS});
            const response = await axios.get<IComment[]>(
                `https://anime--hub.herokuapp.com/api/v1/comments/${id}`, {
                    headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjM0NzQzMTY3LCJhdXRob3JpdGllcyI6InVzZXIiLCJleHAiOjE2NzA3NDMxNjd9.8OU9uFd16ItLIV8DdYyxL6YxulkH0hh1NyzI8JKrwds"}
                }
            );
            dispatch({
                type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: CommentActionTypes.FETCH_COMMENTS_ERROR,
                payload: `Error: ${error}`,
            });
        }
    }
}
