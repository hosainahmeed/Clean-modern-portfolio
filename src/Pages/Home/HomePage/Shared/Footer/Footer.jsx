import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Footer() {
  const topScrollHandle = () =>{
    window.scrollTo(0,0)
  }
  return (
    <div>
      <footer className="footer footer-center  bg-primary text-secondary rounded p-10 mt-12">
        <h1>LOGO</h1>
        <nav className="grid md:grid-flow-col gap-4">
          <h1 onClick={topScrollHandle}>Go to top</h1>
          <Link to="projects" className="cursor-pointer">My Projects</Link>
          <Link to="contact">Get in Touch</Link>
          <NavLink to='/about'>About Me</NavLink>
        </nav>
        <div className="h-[2px] bg-black w-full"></div>
        <aside>
          <p>
            Copyright <NavLink to="/admin" className="cursor-text">©</NavLink> {new Date().getFullYear()} - All right reserved by{" "}
            <h1>Hosain Ali</h1>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
