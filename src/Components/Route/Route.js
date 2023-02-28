import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTraining from "../Pages/AddTrainings/AddTraining";
import Blog from "../Pages/Blogs/Blog";
import FitnessDetails from "../Pages/Fitness/FitnessDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login/Login";
import SignUp from "../Pages/Register/SignUp/SignUp";
import MyReview from "../Pages/Reviews/MyReviews/MyReview";
import Training from "../Pages/Trainings/Training";
import Update from "../Updates/Update";
import PrivateRoute from "./PrivateRoute";

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
                loader: ({ params }) => fetch(`https://online-gym-server.vercel.app/fitness/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/add',
                element: <PrivateRoute><AddTraining></AddTraining></PrivateRoute>
            },
            {
                path: '/update',
                element: <Update></Update>
            }
        ]
    }
]);
export default router;