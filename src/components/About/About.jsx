import React from "react";
import Turf1 from "../../assets/turf1.jpg";
import Turf2 from "../../assets/turf2.jpg";
import Turf3 from "../../assets/turf3.jpg";
import Turf4 from "../../assets/turf4.jpg";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Section */}
      <section className="bg-white-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to Turf Arena! We provide top-notch facilities for cricket,
            football, and other sports enthusiasts. Whether you're a pro or just
            love the game, our turfs are designed to give you the best playing
            experience.
          </p>
        </div>
      </section>

      {/* Bottom Section - Scrolling Images */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Our Turf Facilities
          </h2>
          <div className="flex overflow-x-auto space-x-4">
            {/* Images with hover animations */}
            <img
              src={Turf1}
              alt="Turf 1"
              className="h-48 w-72 object-cover rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 "
            />
            <img
              src={Turf2}
              alt="Turf 2"
              className="h-48 w-72 object-cover rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 "
            />
            <img
              src={Turf3}
              alt="Turf 3"
              className="h-48 w-72 object-cover rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 "
            />
            <img
              src={Turf4}
              alt="Turf 4"
              className="h-48 w-72 object-cover rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 "
            />
            <img
              src={Turf4}
              alt="Turf 4"
              className="h-48 w-72 object-cover rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
