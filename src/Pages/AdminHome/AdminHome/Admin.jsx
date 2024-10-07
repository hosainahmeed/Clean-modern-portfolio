import { Link, Routes, Route } from "react-router-dom";
import ManageProjects from "../../AdminHome/Dashboard/ManageProjects.jsx";
import ManageProfile from "../Dashboard/ManageProfile.jsx";
import Settings from "../Dashboard/Settings.jsx";
import ManageSkills from "../Dashboard/ManageSkills.jsx";
import ManageContent from "../Dashboard/ManageContent.jsx";

function Admin() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
          Open menu
        </label>
        
        {/* Routes for different admin pages */}
        <Routes>
          <Route path="manage-projects" element={<ManageProjects />} />
          {/* Add other routes */}
          <Route path="manage-skills" element={<ManageSkills />} />
          <Route path="manage-content" element={<ManageContent />} />
          <Route path="manage-profile" element={<ManageProfile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/" element={<h2>Welcome to Admin Dashboard</h2>} />
        </Routes>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <header className=" text-black p-4">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <nav>
              <ul className="">
                <li>
                  <Link to="/" className="hover:underline">
                    Portfolio Home
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/admin/manage-projects" className="hover:underline">
                    ManageProjects
                  </Link>
                </li>
                <li>
                  <Link to="/admin/manage-skills" className="hover:underline">
                    Manage Skills
                  </Link>
                </li>
                <li>
                  <Link to="/admin/manage-content" className="hover:underline">
                    Manage Content
                  </Link>
                </li>
                <li>
                  <Link to="/admin/manage-profile" className="hover:underline">
                    Manage Profile
                  </Link>
                </li>
                <li>
                  <Link to="/admin/settings" className="hover:underline">
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        <div className="divider"></div>
        </ul>
      </div>
    </div>
  )
}

export default Admin
