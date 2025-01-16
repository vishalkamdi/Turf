// src/components/Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Side: Logo and About */}
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold">Turf Arena</h2>
            <p className="text-sm">
              Your go-to destination for sports and events. Book your turf now!
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="mb-4 lg:mb-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/home"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-gray-300 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Booking
                </a>
              </li>
              <li>
                <a
                  href="/address"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-xl hover:text-gray-300 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="text-xl hover:text-gray-300 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-xl hover:text-gray-300 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} Turf Arena. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
