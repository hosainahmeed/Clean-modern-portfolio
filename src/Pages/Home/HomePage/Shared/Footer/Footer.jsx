
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
        </nav>

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer> 
    </div>
  );
}

export default Footer;
