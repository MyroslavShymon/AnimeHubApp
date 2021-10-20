import {CommentActionTypes, CommentsActions, CommentState} from "../types/comments";

const initialState: CommentState = {
    comment: null,
    saveCommentError: null,
    commentLoading: false,
    comments: [],
    commentsLoading: false,
    commentsError: null
}

export const commentsReducer = (
    state = initialState,
    action: CommentsActions
): CommentState => {
    switch (action.type) {
        case CommentActionTypes.ADD_COMMENT:
            return {...state, comment: action.payload, comments: [...state.comments, action.payload]}
        case CommentActionTypes.FETCH_COMMENTS:
            return {...state, commentsLoading: true}
        case CommentActionTypes.FETCH_COMMENTS_ERROR:
            return {...state, commentsLoading: false, commentsError: action.payload}
        case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
            return {...state, commentsLoading: false, comments: action.payload}
        case CommentActionTypes.FETCH_COMMENT_ERROR:
            return {...state, saveCommentError: action.payload}
        case CommentActionTypes.FETCH_COMMENT:
            return {...state, commentLoading: true}
        default:
            return state;
    }
}