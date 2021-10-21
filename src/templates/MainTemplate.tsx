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
    const {user, token} = useTypedSelector(
        (state) => state.token
    );

    const authHandler = () => {
        if(token)
            localStorage.removeItem("token")
        history.push(RoutesConstants.LOGIN)
    }

    return (
        <>
            <Header>
                <Row>
                    <Col span={18}>
                        <Title className="logo" onClick={()=>history.push(RoutesConstants.ANIMES)}>AnimeHub</Title>
                    </Col>
                    <Col span={3}>Username: {user?.username}</Col>
                    <Col span={3}>
                        <Button type="primary" className={"login-button"} onClick={authHandler}>Login/Logout</Button>
                    </Col>
                </Row>
            </Header>
            <Content style={{minHeight: "100vh"}} className="main-template">{children}</Content>
        </>
    );
}

export default MainTemplate;