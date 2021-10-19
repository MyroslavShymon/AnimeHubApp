import {IRoutes} from "./routes.interface";
import AnimesPage from "../../pages/AnimesPage";
import {RoutesConstants} from "./routes.constants";
import LoginPage from "../../pages/LoginPage";

export const routesAuth:IRoutes[] = [
    {
        component:AnimesPage,
        path:RoutesConstants.ANIMES
    },
    {
        component:AnimesPage,
        path:RoutesConstants.ANIME
    },
    {
        component:LoginPage,
        path:RoutesConstants.LOGIN
    }
]