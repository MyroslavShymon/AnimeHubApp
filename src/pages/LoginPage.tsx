import React, {FunctionComponent, useState} from 'react';
import {Content} from "antd/es/layout/layout";
import {Button, Col, Input, Row} from "antd";
import Title from "antd/es/typography/Title";
import {KeyOutlined, UserOutlined} from "@ant-design/icons";
import {useActions} from "../hooks/useAction";
import {RoutesConstants} from "../core/Routes/routes.constants";
import {useHistory} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const LoginPage: FunctionComponent<Props> = (props) => {
    const history = useHistory()
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const {auth} = useActions();
    const login = ()=>{
        auth(user);
        history.push(RoutesConstants.ANIMES)
    }
    return (
        <Content>
            <Row align={"top"} justify={"center"} style={{minHeight: "100vh"}}>
                <Col span={7} style={{marginTop: 270}}>
                    <Row justify={"center"}>
                        <Title>AnimeHub</Title>
                    </Row>
                    <Row justify={"center"}>
                        <Input
                            size="large"
                            placeholder="Username"
                            prefix={<UserOutlined/>}
                            value={user.username}
                            onChange={
                                (event) =>
                                    setUser(prevState =>
                                        ({...prevState, username: event.target.value})
                                    )
                            }
                        />
                    </Row>
                    <Row justify={"center"} style={{marginTop: 10}}>
                        <Input
                            size="large"
                            placeholder="Password"
                            type={"password"}
                            prefix={<KeyOutlined/>}
                            value={user.password}
                            onChange={
                                (event) =>
                                    setUser(prevState =>
                                        ({...prevState, password: event.target.value})
                                    )
                            }
                        />
                    </Row>
                    <Row justify={"center"} style={{marginTop: 10}}>
                        <Button type="primary" size={"large"} onClick={login}>Login</Button>
                    </Row>
                </Col>
            </Row>
        </Content>
    );
};

export default LoginPage;
