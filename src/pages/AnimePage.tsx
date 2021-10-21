import React, {FunctionComponent, useEffect, useState} from 'react';
import MainTemplate from "../templates/MainTemplate";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";
import img from "../assets/Anime_Girl.png"
import {Col, Divider, Image, message, Row, Spin, Space, Input, Rate, Button} from "antd";
import Title from "antd/es/typography/Title";
import {IComment} from "../store/types/comments";

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
    const {token} = useTypedSelector((state) => state.token)
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
                },
                token
            )
    }

    useEffect(() => {
        fetchAnime(id);
        if (token)
            fetchComments(id, token);
    }, []);

    if (loading) return <Spin size={"large"}/>
    if (error) message.error(`Error: ${error}`)

    return (
        <MainTemplate>
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
            <Row style={{width: "100%", marginTop: 10}} gutter={[24, 24]}>
                <Col span={6}>1</Col>
                <Col span={12}>
                    <Input
                        value={comment.text}
                        onChange={(event) =>
                            setComment((prevState) =>
                                ({...prevState, text: event.target.value})
                            )
                        }
                        size="large" placeholder="Enter comment"
                    />
                </Col>
                <Col span={3}>
                    Rating:
                    <Rate
                        allowHalf
                        value={comment.rating}
                        onChange={(event) => setComment((prevState) => ({...prevState, rating: event.valueOf()}))}
                    />
                </Col>
                <Col span={3}>
                    <Button onClick={()=>postComment()}>Send</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {comments.map((comment) => <Row>{comment.text}</Row>)}
                </Col>
            </Row>
        </MainTemplate>
    );
};

export default AnimePage;
