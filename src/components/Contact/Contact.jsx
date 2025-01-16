import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center py-12">
      <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap gap-12">
        {/* Left Side: Office Details */}
        <div className="bg-white shadow-md rounded-lg p-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-500 text-xl" />
              <p className="text-gray-700">
                123 Green Turf Lane, Sports City, State, 12345
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <p className="text-gray-700">+1 234 567 890</p>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-500 text-xl" />
              <p className="text-gray-700">info@turfbooking.com</p>
            </div>
          </div>
          {/* Social Media */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                className="text-green-500 text-2xl hover:text-green-700"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="text-green-500 text-2xl hover:text-green-700"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-green-500 text-2xl hover:text-green-700"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Get in Touch
          </h2>
          <form action="#" method="POST" className="space-y-6">
            {/* Name */}
            <div>
              <label
                className="block text-gray-800 font-semibold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label
                className="block text-gray-800 font-semibold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            {/* Message */}
            <div>
              <label
                className="block text-gray-800 font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
