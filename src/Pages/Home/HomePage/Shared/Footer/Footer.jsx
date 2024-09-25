import { Link } from "react-scroll";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center  bg-base-200 text-base-content rounded p-10">
        <h1>LOGO</h1>
        <nav className="grid md:grid-flow-col gap-4">
          <Link to="hero">Go to top</Link>
          <Link to="projects" className="cursor-pointer">My Projects</Link>
          <Link to="contact">Get in Touch</Link>
          <Link>About Me</Link>
        </nav>
        <div className="h-[2px] bg-black w-full"></div>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <h1>Hosain Ali</h1>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
