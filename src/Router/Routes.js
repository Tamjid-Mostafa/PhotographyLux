import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/404/Error";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blog/Blogs";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyReviews from "../Pages/Review/MyReviews.js/MyReviews";
import AllServices from "../Pages/Services/AllServices";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://photographylux-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/all_services",
        element: <AllServices></AllServices>,
        loader: () => fetch(`https://photographylux-server.vercel.app/services`),
      },
      {
        path: "/my_reviews",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/add_services",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
    ],
  },
]);

export default router;
