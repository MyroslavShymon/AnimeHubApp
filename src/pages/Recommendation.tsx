import React, {FunctionComponent} from 'react';
import Title from "antd/es/typography/Title";

interface OwnProps {
}

type Props = OwnProps;

const Recommendation: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <Title>Recommendation</Title>
        </div>
    );
};

export default Recommendation;
