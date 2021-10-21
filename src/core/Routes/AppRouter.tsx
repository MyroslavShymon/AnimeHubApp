import React, {useEffect} from "react"
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {routesAuth} from "./routes.auth";
import {routesDefault} from "./routes.default";
import {RoutesConstants} from "./routes.constants";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {message, Spin} from "antd";
import {useActions} from "../../hooks/useAction";

const AppRouter: React.FC = () => {
    const {error, loading, user} = useTypedSelector(
        (state) => state.token
    );
    const {getTokens, getUser} = useActions();

    useEffect(() => {
        getTokens()
        getUser()
    }, []);

    if (loading) return <Spin size={"large"}/>
    if (error) message.error(`Error: ${error}`)
    return (
        <Switch>
            {user && routesAuth.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
            {routesDefault.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}

            <Redirect to={RoutesConstants.ANIMES}/>
        </Switch>
    );
}

export default AppRouter;