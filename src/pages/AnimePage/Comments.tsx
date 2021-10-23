import React, {FunctionComponent} from 'react';
import {Col, Comment, message, Rate, Row, Spin} from "antd";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface OwnProps {
}

type Props = OwnProps;

const Comments: FunctionComponent<Props> = () => {

    const {comments, saveCommentError} = useTypedSelector((state) => state.comment)

    console.log("render")
    return (
        <Row style={{width: "100%"}} align={"middle"} justify={"center"}>
            <Col span={12}>

                {/*{commentsLoading && <Spin size={"large"}/>}*/}
                {/*{commentsError && message.error(`Save comment Error: ${saveCommentError}`)}*/}
                {saveCommentError && message.error(`Save comment Error: ${saveCommentError}`)}

                {comments.map((comment) => <Row>
                    <Comment
                        key={comment.id}
                        author={comment.username}
                        datetime={comment.createdAt}
                        content={""}>
                        <div>
                            <div>{comment.text}</div>
                            <Rate value={comment.rating} allowHalf disabled/>
                        </div>
                    </Comment>
                </Row>)}
            </Col>
        </Row>
    );
};

export default Comments;
