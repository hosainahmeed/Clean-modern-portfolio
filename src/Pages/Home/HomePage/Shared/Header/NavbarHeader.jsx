import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";

function NavbarHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar shouldHideOnScroll>
      {/* Logo on the left side */}
      <NavbarBrand>
        <p className="font-black text-3xl text-inherit">Hosain.</p>
      </NavbarBrand>

      {/* Links in the center for larger screens */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foregroun">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about-me">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">
            My Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#skills">
            Skills & Services
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Contact button on the right */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="rounded-none bg-black text-white hidden sm:flex"
            as={Link}
            color="primary"
            href="#contact"
            variant="flat"
          >
            Contact
          </Button>
        </NavbarItem>

        {/* Mobile menu toggle */}
        <NavbarMenuToggle
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Mobile dropdown menu */}
      <NavbarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <NavbarMenuItem>
          <Link href="#home">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#about-me">About Me</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#projects">My Projects</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#skills">Skills & Services</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#contact">
            <Button
              className="rounded-none bg-black text-white"
              color="primary"
              variant="flat"
            >
              Contact
            </Button>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarHeader;
