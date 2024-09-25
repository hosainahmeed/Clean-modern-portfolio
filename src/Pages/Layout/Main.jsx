import { Outlet } from "react-router-dom";
import Footer from "../Home/HomePage/Shared/Footer/Footer";
import NavbarHeader from "../Home/HomePage/Shared/Header/NavbarHeader";

function Main() {
  return (
    <div>
      <NavbarHeader></NavbarHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Main;
