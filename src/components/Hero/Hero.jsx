import React from "react";
import Cricket from "../../assets/cric1.png";

const Hero = () => {
  return (
    <section className="bg-white-500 text-green h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 text-center lg:text-left ml-5 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Welcome to Cricket Arena</h1>
          <p className="text-lg mb-6">
            Experience the thrill of cricket like never before! Join us for
            amazing games and events.
          </p>
          {/* Book Button */}
          <a
            href="/booking"
            className="bg-green-500 justify-center items-center text-white-500 px-6 py-3 font-semibold rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Right Side: Cricket Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Cricket}
            alt="Cricket"
            className="max-w-full h-auto transition-transform duration-500 hover:scale-105 hover:rotate-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
