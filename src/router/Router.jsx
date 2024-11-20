import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddService from "../pages/Add Service/AddService";
import PrivateRouter from "./PrivateRouter";
import AllServices from "../pages/all service/AllServices";
import ServiceDetails from "../pages/service details/ServiceDetails";
import ManageService from "../pages/manage Service/ManageService";
import UpdateService from "../pages/manage Service/update service/UpdateService";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allServices",
        element: <AllServices />,
      },
      {
        path: "/manageService",
        element: <ManageService />,
      },
      {
        path: "/updateService/:id",
        element: <UpdateService />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Services/${params.id}`),
      },
      {
        path: "/addService",
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
      {
        path: "/Services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Services/${params.id}`),
      },
    ],
  },
]);

export default Router;
