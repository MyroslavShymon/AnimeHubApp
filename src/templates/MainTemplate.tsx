import * as React from "react"
import {Content, Header} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import {Col, Row, Button} from "antd";
import {useHistory} from "react-router-dom";
import {RoutesConstants} from "../core/Routes/routes.constants";
import {useTypedSelector} from "../hooks/useTypedSelector";

// const {Header, Content} = Layout;

interface MainTemplateProps {
    children?: React.ReactNode
}

const MainTemplate: React.FC<MainTemplateProps> = ({children}) => {
    const history = useHistory();
    const {user} = useTypedSelector(
        (state) => state.token
    );
    return (
        <>
            <Header>
                <Row>
                    <Col span={18}>
                        <Title className="logo">AnimeHub</Title>
                    </Col>
                    <Col span={3}>Username: {user?.username}</Col>
                    <Col span={3}>
                        <Button type="primary" className={"login-button"} onClick={() => history.push(RoutesConstants.LOGIN)}>Login/Logout</Button>
                    </Col>
                </Row>
            </Header>
            <Content className="main-template">{children}</Content>
        </>
    );
}

export default MainTemplate;