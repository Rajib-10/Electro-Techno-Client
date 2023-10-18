import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../Root/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import LoadProduct from "../pages/LoadProduct/LoadProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import MyCart from "../pages/MyCart/MyCart";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/addProduct',
            element: <AddProduct />
        },
        {
            path: '/myCart',
            element: <MyCart />
        },
        {
            path: '/loadProduct',
            element: <LoadProduct />
        },
        {
            path: '/updateProduct',
            element: <UpdateProduct />
        }
    
    ]
    }
])
    

export default router;