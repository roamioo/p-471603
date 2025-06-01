
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={scrollToTop}
          aria-label="Elykid"
        >
          <img 
            src="/logo.svg" 
            alt="Elykid Logo" 
            className="h-7 sm:h-8" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={cn("nav-link", location.pathname === "/" && "text-pulse-500")}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={cn("nav-link", location.pathname === "/features" && "text-pulse-500")}
          >
            Features
          </Link>
          <Link 
            to="/how-to-use" 
            className={cn("nav-link", location.pathname === "/how-to-use" && "text-pulse-500")}
          >
            How to Use
          </Link>
          <Link 
            to="/pricing" 
            className={cn("nav-link", location.pathname === "/pricing" && "text-pulse-500")}
          >
            Pricing
          </Link>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <Link 
            to="/" 
            className={cn(
              "text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100",
              location.pathname === "/" && "text-pulse-500 bg-pulse-50"
            )}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={cn(
              "text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100",
              location.pathname === "/features" && "text-pulse-500 bg-pulse-50"
            )}
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link 
            to="/how-to-use" 
            className={cn(
              "text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100",
              location.pathname === "/how-to-use" && "text-pulse-500 bg-pulse-50"
            )}
            onClick={closeMenu}
          >
            How to Use
          </Link>
          <Link 
            to="/pricing" 
            className={cn(
              "text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100",
              location.pathname === "/pricing" && "text-pulse-500 bg-pulse-50"
            )}
            onClick={closeMenu}
          >
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
