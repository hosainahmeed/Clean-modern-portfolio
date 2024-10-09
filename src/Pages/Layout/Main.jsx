import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Home/HomePage/Shared/Footer/Footer";
import NavbarHeader from "../Home/HomePage/Shared/Header/NavbarHeader";
import { useEffect, useState } from "react";
import Loader from "../Home/HomePage/Banner/Loader";

function Main() {
  const { pathname } = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  
  useEffect(() => {
    if (pathname.includes("/admin")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [pathname]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {isAdmin ? "" : <NavbarHeader></NavbarHeader>}
      <Outlet></Outlet>
      {isAdmin ? "" : <Footer></Footer>}
    </div>
  );
}

export default Main;
