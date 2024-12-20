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
import BookedService from "../pages/booked service/BookedService ";
import ServiceToDo from "../pages/service to do/ServiceToDo";
import About from "../pages/about/About";


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
        path: "/about",
        element: <About ></About>,
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
        path: "/bookedService",
        element: <BookedService />,
      },
      {
        path: "/updateService/:id",
        element: (
          <PrivateRouter>
            <UpdateService />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://radiant-glow-server.vercel.app/Services/${params.id}`),
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
        path: "/serviceToDo",
        element: (
          <PrivateRouter>
           <ServiceToDo></ServiceToDo>
          </PrivateRouter>
        ),
      },
      {
        path: "/Services/:id",
        element: (
          <PrivateRouter>
            <ServiceDetails></ServiceDetails>
          </PrivateRouter>
        ),

        loader: ({ params }) =>
          fetch(`https://radiant-glow-server.vercel.app/Services/${params.id}`),
      },
    ],
  },
]);

export default Router;
