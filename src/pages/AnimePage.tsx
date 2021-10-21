import React, {FunctionComponent, useEffect, useState} from 'react';
import MainTemplate from "../templates/MainTemplate";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";
import img from "../assets/Anime_Girl.png"
import {Col, Divider, Image, message, Row, Spin, Space, Input, Rate, Button, Comment} from "antd";
import Title from "antd/es/typography/Title";
import {IComment} from "../store/types/comments";
import TextArea from "antd/es/input/TextArea";

interface OwnProps {
}

type Props = OwnProps;

interface ParamTypes {
    id: string
}

const AnimePage: FunctionComponent<Props> = (props) => {
    const {id} = useParams<ParamTypes>()
    const [comment, setComment] = useState<IComment>({
        rating: 2.5,
        text: ""
    });
    const {error, loading, anime} = useTypedSelector(
        (state) => state.anime
    );
    const {token, user} = useTypedSelector((state) => state.token)
    const {comments, commentsLoading, commentsError, saveCommentError} = useTypedSelector((state) => state.comment)
    console.log("comments", comments);

    const {fetchAnime, fetchComments, addComment} = useActions();

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

    useEffect(() => {
        fetchAnime(id);
        if (token)
            fetchComments(id, token);
    }, []);


    return (
        <MainTemplate>
            {loading && <Spin size={"large"}/>}
            {error && message.error(`Error: ${error}`)}
            <Row style={{width: "100%"}}>
                <Col span={24}>
                    <Row justify={"center"}>
                        <Image width={800} src={anime?.image || img}/>
                    </Row>
                    <Row justify={"center"}>
                        <Title>{anime?.title}</Title>
                    </Row>
                    <Row>
                        <Divider style={{background: "rgba(0, 0, 0, 0.20)"}}/>
                    </Row>
                </Col>
            </Row>
            <Row style={{width: "100%"}}>
                <Col span={4}>
                    <Title level={4}>Genre: {anime?.genres}</Title>
                </Col>
                <Col span={4}>
                    <Title level={4}>Added by: {anime?.addedBy}</Title>
                </Col>
                <Col span={4}>
                    <Title level={4}>Country: {anime?.country}</Title>
                </Col>
                <Col span={4}>
                    <Title level={4}>Theme: {anime?.theme}</Title>
                </Col>
                <Col span={4}>
                    <Title level={4}>Setting: {anime?.setting}</Title>
                </Col>
                <Col span={4}>
                    <Title level={4}>Rating: 5</Title>
                </Col>
            </Row>
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
            <Row style={{width: "100%"}} align={"middle"} justify={"center"}>
                <Col span={12}>

                    {comments.map((comment) => <Row>
                        <Comment
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
        </MainTemplate>
    );
};

export default AnimePage;
