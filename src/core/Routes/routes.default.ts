import {IRoutes} from "./routes.interface";
import {RoutesConstants} from "./routes.constants";
import AnimesPage from "../../pages/AnimesPage";
import LoginPage from "../../pages/LoginPage";

export const routesDefault: IRoutes[] = [
    {
        component: AnimesPage,
        path: RoutesConstants.ANIMES
    },
    {
        component: LoginPage,
        path: RoutesConstants.LOGIN
    }
]