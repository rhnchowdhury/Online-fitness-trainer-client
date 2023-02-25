import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blogs/Blog";
import FitnessDetails from "../Pages/Fitness/FitnessDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login/Login";
import SignUp from "../Pages/Register/SignUp/SignUp";
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
            },
            {
                path: '/fitness/:id',
                element: <FitnessDetails></FitnessDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/fitness/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);
export default router;