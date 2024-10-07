import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Home/HomePage/Shared/Footer/Footer";
import NavbarHeader from "../Home/HomePage/Shared/Header/NavbarHeader";
import { useEffect, useState } from "react";

function Main() {
  const { pathname } = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (pathname.includes("/admin")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [pathname]);
  return (
    <div>
      {isAdmin ? "" : <NavbarHeader></NavbarHeader>}
      <Outlet></Outlet>
      {isAdmin ? "" : <Footer></Footer>}
    </div>
  );
}

export default Main;
