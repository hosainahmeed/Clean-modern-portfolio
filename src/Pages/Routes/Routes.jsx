import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import AllProject from "../AllProject/AllProject";
import Contact from "../Contact/Contact";
import AboutSection from "../AboutPage/AboutSection";
import Admin from "../AdminHome/AdminHome/Admin";
import ManageProjects from "../AdminHome/Dashboard/ManageProjects";
import ManageSkills from "../AdminHome/Dashboard/ManageSkills";
import ManageContent from "../AdminHome/Dashboard/ManageContent";
import ManageProfile from "../AdminHome/Dashboard/ManageProfile";
import Settings from "../AdminHome/Dashboard/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allprojects",
        element: <AllProject />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          { index: true, element: <Home /> },
          { path: "manage-projects", element: <ManageProjects /> },
          { path: "manage-skills", element: <ManageSkills /> },
          { path: "manage-content", element: <ManageContent /> },
          { path: "manage-profile", element: <ManageProfile /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

export default router;
