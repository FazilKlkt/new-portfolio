import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Github className="h-8 w-8 text-gray-900" />
            <span className="ml-2 text-xl font-semibold">Fazil</span>
          </div>

          <nav className="hidden md:flex space-x-4">
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>

          <button
            className="md:hidden text-gray-500 hover:text-gray-900 transition-colors"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-2 space-y-1">
            <MobileNavItem href="#projects" onClick={toggleMobileMenu}>
              Projects
            </MobileNavItem>
            <MobileNavItem href="#experience" onClick={toggleMobileMenu}>
              Experience
            </MobileNavItem>
            <MobileNavItem href="#skills" onClick={toggleMobileMenu}>
              Skills
            </MobileNavItem>
            <MobileNavItem href="#contact" onClick={toggleMobileMenu}>
              Contact
            </MobileNavItem>
          </div>
        )}
      </div>
    </header>
  );
}
