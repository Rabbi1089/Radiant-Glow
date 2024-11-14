
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [{
            path: "/",
            element : <Home />
        },
    {
        path : "/SignUp",
        element : <SignUp></SignUp>
    },
    {
        path : "/login",
        element : <Login></Login>
    },

    ]},
])

export default Router;