import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Home/HomePage/Shared/Footer/Footer";
import NavbarHeader from "../Home/HomePage/Shared/Header/NavbarHeader";
import { useEffect, useState } from "react";
import Loader from "../Home/HomePage/Banner/Loader";

function Main() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const visualHeaderFooter =
    location.pathname === "/login" || location.pathname === "/admin";
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {visualHeaderFooter ? (
        <Outlet></Outlet>
      ) : (
        <>
          <NavbarHeader></NavbarHeader>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default Main;
