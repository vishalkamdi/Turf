import React, { useState } from "react";
import AddressImg from "../../assets/location.jpg";

const initialAddresses = [
  {
    id: 1,
    imageUrl: AddressImg,
    address: "123 Turf Avenue, City, State",
  },
  {
    id: 2,
    imageUrl: AddressImg,
    address: "456 Sport Lane, Town, State",
  },
  {
    id: 3,
    imageUrl: AddressImg,
    address: "789 Game Street, City, State",
  },
  {
    id: 4,
    imageUrl: AddressImg,
    address: "789 Game Street, City, State",
  },
  {
    id: 5,
    imageUrl: AddressImg,
    address: "789 Game Street, City, State",
  },
  // Add more entries as needed
];

const AddressPage = () => {
  const [addresses, setAddresses] = useState(initialAddresses);

  return (
    <div className="bg-gray-100 py-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-500">
          Our Turf Locations
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Choose a location and book your turf for an exciting game!
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="bg-white shadow-lg rounded-lg w-80 mb-8 transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={address.imageUrl}
                alt="Turf Image"
                className="w-full h-48 object-cover rounded-t-lg transition-all duration-300 transform hover:scale-110"
              />
              <div className="p-4">
                <p className="text-lg font-semibold">{address.address}</p>
                <a
                  href="/booking"
                  className="bg-green-500 text-white  px-6 py-3 mt-4 inline-block rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
