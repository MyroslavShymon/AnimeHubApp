export interface IComment {
    animeId?: string,
    createdAt?: string,
    id?: string,
    rating: number,
    text: string,
    username?: string
}

export interface CommentState {
    comments: IComment[];
    commentsLoading: boolean;
    commentLoading: boolean;
    commentsError: null | string;
    comment: IComment | null;
    saveCommentError: null | string,
}

export enum CommentActionTypes {
    FETCH_COMMENTS = "FETCH_COMMENTS",
    FETCH_COMMENT = "FETCH_COMMENT",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",
    FETCH_COMMENT_ERROR = "FETCH_COMMENT_ERROR",
    ADD_COMMENT = "ADD_COMMENT"
}

export interface FetchCommentsAction {
    type: CommentActionTypes.FETCH_COMMENTS
}

export interface FetchCommentsSuccessAction {
    type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: IComment[]
}

export interface FetchCommentsErrorAction {
    type: CommentActionTypes.FETCH_COMMENTS_ERROR
    payload: string
}

export interface FetchCommentErrorAction {
    type: CommentActionTypes.FETCH_COMMENT_ERROR,
    payload: string
}

export interface AddCommentAction {
    type: CommentActionTypes.ADD_COMMENT,
    payload: IComment
}

export interface FetchCommentAction {
    type: CommentActionTypes.FETCH_COMMENT
}

export type CommentsActions =
    FetchCommentsAction
    | FetchCommentsSuccessAction
    | FetchCommentsErrorAction
    | FetchCommentErrorAction
    | AddCommentAction
    | FetchCommentAction