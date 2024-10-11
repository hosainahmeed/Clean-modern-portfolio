import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function NavbarHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const chagedirecotry = location.pathname !== "/";

  const handleLinkClick = (path) => {
    setIsMenuOpen(false); 
    navigate(path);
  };

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
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${isActive ? activeLinkStyle : linkStyle}`
            }
            onClick={() => handleLinkClick("/")}
          >
            Login
          </NavLink>
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
            Skills & Services
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Contact button on the right */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="rounded-none bg-secondary text-primary hidden sm:flex"
            as={Link}
            color="primary"
            href="#contact"
            variant="flat"
            onClick={() => handleLinkClick("/contact")} // Close menu and navigate
          >
            Contact
          </Button>
        </NavbarItem>

        {/* Mobile menu toggle */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden"
        />
      </NavbarContent>

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
        <NavbarMenuItem>
          <Link
            to="#projects"
            smooth={true}
            offset={-70}
            duration={200}
            className={`${linkStyle} cursor-pointer`}
            onClick={() => setIsMenuOpen(false)}
          >
            My Projects
          </Link>
        </NavbarMenuItem>
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
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? activeLinkStyle : linkStyle}`
            }
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarHeader;
