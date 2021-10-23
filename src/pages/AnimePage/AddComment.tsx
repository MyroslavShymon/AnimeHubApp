import React, {FunctionComponent, useState} from 'react';
import {Button, Col, Rate, Row} from "antd";
import TextArea from "antd/es/input/TextArea";
import {IComment} from "../../store/types/comments";
import {useActions} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

interface ParamTypes {
    id: string
}

const AddComment: FunctionComponent<Props> = (props) => {
    const {id} = useParams<ParamTypes>()
    const [comment, setComment] = useState<IComment>({
        rating: 2.5,
        text: ""
    });
    const {token, user} = useTypedSelector((state) => state.token)

    const {addComment} = useActions();

    const postComment = () => {
        console.log(token)
        if (token)
            addComment(
                {
                    ...comment,
                    animeId: id,
                    createdAt: Date.now().toString(),
                    username: user?.username
                },
                token
            )
    }

    return (
        <Row style={{width: "100%", marginTop: 10}}>
            <Col span={6}></Col>
            <Col span={12}>
                <TextArea
                    value={comment.text}
                    onChange={(event) =>
                        setComment((prevState) =>
                            ({...prevState, text: event.target.value})
                        )
                    }
                    size="large" placeholder="Enter comment"
                />
                <Row>
                    <Col span={2}>
                        <Button onClick={() => postComment()}>Send</Button>
                    </Col>
                    <Col span={5}>
                        Rating: &nbsp;
                        <Rate
                            allowHalf
                            value={comment.rating}
                            onChange={(event) => setComment((prevState) => ({
                                ...prevState,
                                rating: event.valueOf()
                            }))}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default AddComment;
