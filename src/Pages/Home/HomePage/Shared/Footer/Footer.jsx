import { Link } from "react-router-dom";

function Footer() {
  //TODO :smooth scrolling use with react scroll
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <h1>LOGO</h1>
        <nav className="grid grid-flow-col gap-4">
          <Link>
            <a className="link link-hover">Go to top</a>
          </Link>
          <Link>
            <a className="link link-hover">My Projects</a>
          </Link>
          <Link>
            <a className="link link-hover">Get in Touch</a>
          </Link>
          <Link>
            <a className="link link-hover">About Me</a>
          </Link>
          <Link>
            <a className="link link-hover">Contact Us</a>
          </Link>
        </nav>
        <div className="h-[2px] bg-black w-full"></div>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by <h1>Hosain Ali</h1>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
