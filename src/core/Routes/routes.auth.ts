import {IRoutes} from "./routes.interface";
import AnimesPage from "../../pages/AnimesPage";
import {RoutesConstants} from "./routes.constants";
import LoginPage from "../../pages/LoginPage";
import AnimePage from "../../pages/AnimePage/index";
// import AnimePage from "../../pages/AnimePage";

export const routesAuth:IRoutes[] = [
    {
        component:AnimesPage,
        path:RoutesConstants.ANIMES
    },
    {
        component:AnimePage,
        path:RoutesConstants.ANIME
    },
    {
        component:LoginPage,
        path:RoutesConstants.LOGIN
    }
]