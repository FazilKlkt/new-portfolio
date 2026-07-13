import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";
import type { NavItemData } from "../hooks/usePortfolio";

type HeaderProps = {
  brandName: string;
  navItems: NavItemData[];
};

export default function Header({ brandName, navItems }: HeaderProps) {
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
            <span className="ml-2 text-xl font-semibold">{brandName}</span>
          </div>

          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavItem key={item.href} href={item.href}>
                {item.label}
              </NavItem>
            ))}
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
            {navItems.map((item) => (
              <MobileNavItem key={item.href} href={item.href} onClick={toggleMobileMenu}>
                {item.label}
              </MobileNavItem>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
