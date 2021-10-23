import React, {FunctionComponent} from 'react';
import {Col, Divider, Image, Row} from "antd";
import Title from "antd/es/typography/Title";
import img from "../../assets/Anime_Girl.png"
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface OwnProps {
}

type Props = OwnProps;

const Data: FunctionComponent<Props> = (props) => {
    const {anime} = useTypedSelector((state => state.anime))

    return (
        <Row style={{width: "100%"}}>
            <Col span={24}>
                <Row justify={"center"}>
                    <Title>{anime?.title}</Title>
                </Row>
                <Row justify={"center"}>
                    <Image width={800} src={anime?.image || img}/>
                </Row>
                <Row>
                    <Divider style={{background: "rgba(0, 0, 0, 0.20)"}}/>
                </Row>
            </Col>
        </Row>
    );
};

export default Data;
