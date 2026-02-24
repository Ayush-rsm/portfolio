import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#internship" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300  select-none",
        isScrolled
          ? "py-3 bg-[#061826]/90 backdrop-blur-md shadow-md"
          : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <a
          className="text-xl font-bold flex items-center"
          href="#hero"
        >
          <span className="text-[#178582]">RSM</span>
          <span className="ml-1 text-[#C6A86B]">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-[#C6A86B]/80 hover:text-[#178582] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-[#C6A86B] z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Overlay Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-[#061826]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-[#C6A86B]/80 hover:text-[#178582] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <ThemeToggle />
          </div>
        </div>

      </div>
    </nav>
  );
};