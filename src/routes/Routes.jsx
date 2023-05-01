import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layers/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayer from "../layers/NewsLayer";
import News from "../pages/News/News/News";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import LoginLayout from "../layers/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Privacy from "../pages/Shared/Header/Privacy/Privacy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/privacy-policy',
                element: <Privacy></Privacy>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }, 
            // {
            //     path: '/about',
            //     element: <About></About>
            // },
            // {
            //     path: '/career',
            //     element: <Career></Career>
            // }
        ]
    },
    {
        path: '/news',
        element: <NewsLayer></NewsLayer>,
        children: [
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;