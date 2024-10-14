import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
// import useAuth from "../../../../../../public/hooks/useAuth";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function NavbarHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const chagedirecotry = location.pathname !== "/";
  const homedirectory = location.pathname === "/";

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(scrollPosition);

  // const { user } = useAuth();

  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  // const handleLogout = () => {
  //   logOut()
  //     .then((result) => {
  //       console.log(result);
  //       navigate('/')
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const activeLinkStyle = "bg-secondary text-primary px-6 py-2";
  const linkStyle =
    "hover:bg-secondary hover:text-primary transition-all duration-300 p-2 rounded-md";

  return (
    <Navbar className="bg-primary text-secondary">
      {/* Logo on the left side */}
      <NavbarBrand>
        <p className="font-black text-3xl text-inherit">Hosain.</p>
      </NavbarBrand>
      {/* Links in the center for larger screens */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? activeLinkStyle : linkStyle}`
            }
            onClick={() => handleLinkClick("/")}
          >
            Home
          </NavLink>
          {/* {user ? (
            <button
              className={({ isActive }) =>
                `${isActive ? activeLinkStyle : linkStyle}`
              }
              onClick={handleLogout}
            >
              Log out
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${isActive ? activeLinkStyle : linkStyle}`
              }
              onClick={() => handleLinkClick("/")}
            >
              Login
            </NavLink>
          )} */}
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? activeLinkStyle : linkStyle}`
            }
            onClick={() => handleLinkClick("/about")}
          >
            About Me
          </NavLink>
        </NavbarItem>

        {chagedirecotry ? (
          <NavbarItem>
            <NavLink
              to="/allprojects"
              smooth={true}
              offset={-70}
              duration={500}
              className={`${linkStyle} cursor-pointer`}
              onClick={() => setIsMenuOpen(false)}
            >
              My Projects
            </NavLink>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              className={`${linkStyle} cursor-pointer`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </NavbarItem>
        )}
        <NavbarItem>
          <Link
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
            className={`${linkStyle} cursor-pointer`}
            onClick={() => setIsMenuOpen(false)}
          >
            {chagedirecotry ? "" : "Skills & Services"}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <a href="/path/to/your/resume.pdf" className="text-black" download>
            <FaDownload className="inline-flex text-xl"></FaDownload>
            Resume
          </a>
        </NavbarItem>
      </NavbarContent>

      {/* Contact button on the right */}
      {scrollPosition > 500 && homedirectory && (
        <NavbarContent justify="end">
          <NavbarItem>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                className={activeLinkStyle}
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </NavbarItem>

          {/* Mobile menu toggle */}
        </NavbarContent>
      )}

      {chagedirecotry && (
        <NavbarItem>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink
              className={activeLinkStyle}
              to="/"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </motion.div>
        </NavbarItem>
      )}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden"
      />

      {/* Mobile dropdown menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? activeLinkStyle : linkStyle}`
            }
            onClick={() => handleLinkClick("/")}
          >
            Home
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? activeLinkStyle : linkStyle}`
            }
            onClick={() => handleLinkClick("/about")}
          >
            About Me
          </NavLink>
        </NavbarMenuItem>
        {chagedirecotry ? (
          <NavbarItem>
            <NavLink
              to="/allprojects"
              smooth={true}
              offset={-70}
              duration={500}
              className={`${linkStyle} cursor-pointer`}
              onClick={() => setIsMenuOpen(false)}
            >
              My Projects
            </NavLink>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              className={`${linkStyle} cursor-pointer`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </NavbarItem>
        )}
        <NavbarMenuItem>
          <Link
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
            className={`${linkStyle} cursor-pointer`}
            onClick={() => setIsMenuOpen(false)}
          >
            Skills & Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavbarItem>
            <a href="/path/to/your/resume.pdf" className="text-black" download>
              <FaDownload className="inline-flex text-xl"></FaDownload>
              Resume
            </a>
          </NavbarItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarHeader;
