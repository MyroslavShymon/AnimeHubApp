import React, {FunctionComponent, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import img from "../assets/Anime_Girl.png"
import {Col, Divider, Image, message, Row, Spin, Space, Input, Rate, Button, Comment} from "antd";
import Title from "antd/es/typography/Title";
import TextArea from "antd/es/input/TextArea";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IComment} from "../../store/types/comments";
import {useActions} from "../../hooks/useAction";
import MainTemplate from "../../templates/MainTemplate";
import Data from "./Data";
import Description from "./Description";
import AddComment from "./AddComment";
import Comments from "./Comments";

interface OwnProps {
}

type Props = OwnProps;

interface ParamTypes {
    id: string
}

const AnimePage: FunctionComponent<Props> = (props) => {
    const {id} = useParams<ParamTypes>()
    const {error, loading} = useTypedSelector((state => state.anime))
    const {token} = useTypedSelector((state) => state.token)
    const {fetchAnime, fetchComments} = useActions();

    useEffect(() => {
        fetchAnime(id);
        if (token)
            fetchComments(id, token);
    }, []);


    return (
        <MainTemplate>
            {loading && <Spin size={"large"}/>}
            {error && message.error(`Anime Error: ${error}`)}
            <Data/>
            <Description/>
            <AddComment/>
            <Comments/>
        </MainTemplate>
    );
};

export default AnimePage;

