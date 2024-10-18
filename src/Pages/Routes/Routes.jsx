import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import AllProject from "../AllProject/AllProject";
import AboutSection from "../AboutPage/AboutSection";
import Admin from "../AdminHome/AdminHome/Admin";
import ManageProjects from "../AdminHome/Dashboard/ManageProjects";
import ManageSkills from "../AdminHome/Dashboard/ManageSkills";
import ManageContent from "../AdminHome/Dashboard/ManageContent";
import ManageProfile from "../AdminHome/Dashboard/ManageProfile";
import Settings from "../AdminHome/Dashboard/Settings";
import Login from "../AboutPage/Login";
import AdminSecure from "../AdminHome/AdminHome/AdminSecure";
import UpdateSkills from "../AdminHome/Dashboard/UpdateSkills";

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
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/updateskills",
        element: <UpdateSkills />,
      },
      {
        path: "admin",
        element: (
          <AdminSecure>
            <Admin />
          </AdminSecure>
        ),
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
