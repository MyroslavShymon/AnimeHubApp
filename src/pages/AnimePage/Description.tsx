import React, {FunctionComponent, useEffect, useState} from 'react';
import {Col, Rate, Row} from "antd";
import Title from "antd/es/typography/Title";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface OwnProps {
}

type Props = OwnProps;

const Description: FunctionComponent<Props> = (props) => {
    const {anime} = useTypedSelector((state => state.anime))
    const [averageRate, setAverageRate] = useState<number>(1);
    const {comments} = useTypedSelector((state) => state.comment)

    useEffect(() => {
        setAverageRate(
            comments.reduce(
                (previousValue, currentValue) => previousValue + currentValue.rating, 0)
            / comments.length)
    }, [comments]);

    return (
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
                <Title level={4}>Rating:
                    {
                        isNaN(averageRate) ?
                            "Rating: No rate" :
                            <div>
                                <Rate allowHalf value={averageRate} disabled/>
                                {averageRate}
                            </div>
                    }
                </Title>
            </Col>
        </Row>
    );
};

export default Description;
