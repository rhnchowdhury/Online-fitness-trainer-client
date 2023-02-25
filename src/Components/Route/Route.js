import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login/Login";
import Training from "../Pages/Trainings/Training";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/fitness',
                element: <Training></Training>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);
export default router;