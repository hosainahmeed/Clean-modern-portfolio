import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import AllProject from "../AllProject/AllProject";
import Contact from "../Contact/Contact";
import AboutSection from "../AboutPage/AboutSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allprojects",
        element: <AllProject></AllProject>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>,
      },
    ],
  },
]);

export default router;
