import * as React from "react"
import {useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {routesAuth} from "./routes.auth";
import {routesDefault} from "./routes.default";
import {RoutesConstants} from "./routes.constants";

const AppRouter: React.FC = () => {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <Switch>
            {isAuth && routesAuth.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
            {routesDefault.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}

            <Redirect to={RoutesConstants.ANIMES} />
        </Switch>
    );
}

export default AppRouter;