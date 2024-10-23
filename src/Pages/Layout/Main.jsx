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
    location.pathname.toLowerCase() === "/login" ||
    location.pathname.toLowerCase().includes("/admin");

  const hideFooter = location.pathname.toLowerCase() === "/about";
  if (isLoading) {
    return <Loader />;
  }

  if (hideFooter) {
    return (
      <>
        <NavbarHeader></NavbarHeader>
        <Outlet></Outlet>
      </>
    );
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
