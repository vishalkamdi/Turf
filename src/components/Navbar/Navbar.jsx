import React, { useState } from "react";
import { Link } from "react-router-dom"; // Using Link for proper routing in React

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-500 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="/" className="hover:text-green-200">
            Turf
          </a>
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="lg:hidden" onClick={toggleMobileMenu}>
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="hover:text-green-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-200">
            About
          </Link>
          <Link to="/booking" className="hover:text-green-200">
            Booking
          </Link>
          <Link to="/address" className="hover:text-green-200">
            Locations
          </Link>
          <Link to="/contact" className="hover:text-green-200">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-green-500 text-white py-4`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="hover:text-green-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-200">
            About
          </Link>
          <Link to="/booking" className="hover:text-green-200">
            Booking
          </Link>
          <Link to="/address" className="hover:text-green-200">
            Locations
          </Link>
          <Link to="/contact" className="hover:text-green-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
