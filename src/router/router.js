import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/cart", element: <Cart></Cart>
            }
        ]
    }
])