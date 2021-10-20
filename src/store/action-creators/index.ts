import * as AnimesActionCreators from "./animes";
import * as AnimeActionCreators from "./anime";
import * as CommentActionCreators from "./comment";
import * as CommentsActionCreators from "./comments";
import * as TokenActionCreators from "./token";

export default {
    ...AnimesActionCreators,
    ...AnimeActionCreators,
    ...CommentActionCreators,
    ...CommentsActionCreators,
    ...TokenActionCreators
};