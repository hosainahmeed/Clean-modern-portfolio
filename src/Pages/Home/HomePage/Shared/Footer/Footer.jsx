import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Footer() {
  const topScrollHandle = () =>{
    window.scrollTo(0,0)
  }
  return (
    <div>
      <footer className="footer footer-center bg-secondary text-primary rounded p-10 mt-12 shadow-lg">
        <h1 className="text-3xl font-bold">LOGO</h1>
        <nav className="grid md:grid-flow-col gap-4 text-lg">
          <h1 onClick={topScrollHandle} className="cursor-pointer hover:text-accent transition">Go to top</h1>
          <Link to="projects" className="cursor-pointer hover:text-accent transition">My Projects</Link>
          <Link to="contact" className="hover:text-accent transition">Get in Touch</Link>
          <NavLink to='/about' className="hover:text-accent transition">About Me</NavLink>
        </nav>
        <div className="h-[2px] bg-white w-full my-4"></div>
        <aside>
          <p className="text-sm">
            Copyright <NavLink to="/admin" className="cursor-text">©</NavLink> {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="font-semibold">Hosain Ali</span>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
