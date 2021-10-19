import * as React from "react"
import {Content, Header} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import {Col, Row, Button} from "antd";

// const {Header, Content} = Layout;

interface MainTemplateProps {
    children?: React.ReactNode
}

const MainTemplate: React.FC<MainTemplateProps> = ({children}) => {
    return (
        <>
            <Header>
                <Row>
                    <Col span={18}>
                        <Title className="logo">Anime hub</Title>
                    </Col>
                    <Col span={3}>myroslavshymon@gmail.com</Col>
                    <Col span={3}>
                        <Button type="primary" className={"login-button"}>Login/Logout</Button>
                    </Col>
                </Row>
            </Header>
            <Content>{children}</Content>
        </>
    );
}

export default MainTemplate;