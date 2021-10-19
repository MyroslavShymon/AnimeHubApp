import React, {FunctionComponent} from 'react';
import MainTemplate from "../templates/MainTemplate";

interface OwnProps {
}

type Props = OwnProps;

const AnimePage: FunctionComponent<Props> = (props) => {

    return (
        <MainTemplate>
            <div>AnimePage</div>
        </MainTemplate>
    );
};

export default AnimePage;
