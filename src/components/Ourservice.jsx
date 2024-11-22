import React from "react";
import { FaPlane, FaHotel, FaPassport } from "react-icons/fa";

const Ourservice = () => {
  return (
    <div className="py-12 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-gray-600 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
          Discover a range of professional travel services tailored to meet your unique preferences.
          From hassle-free visa applications and seamless flight bookings to securing premium hotel
          accommodations, we ensure your travel experience is enjoyable, stress-free, and tailored
          just for you.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-[90%] md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
        {/* Visa Application */}
        <div className="space-y-3">
          <FaPassport className="text-4xl text-blue-500 mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Visa Application</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Get expert advice on visa applications, including student, tourist, and work visas.
            Our team ensures a smooth and stress-free application process while meeting all
            necessary requirements tailored to your travel goals.
          </p>
        </div>

        {/* Flight Booking */}
        <div className="space-y-3">
          <FaPlane className="text-4xl text-green-500 mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Flight Booking</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Book flights with ease through our expert assistance. We secure the best prices,
            offer flexible travel options, and ensure convenient flight schedules to make your
            journey seamless from start to finish.
          </p>
        </div>

        {/* Hotel Reservations */}
        <div className="space-y-3">
          <FaHotel className="text-4xl text-yellow-500 mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Hotel Reservations</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Reserve premium accommodations at top-rated hotels worldwide. Let us help you find
            the perfect place to stay, ensuring your trip is not just comfortable, but truly
            memorable and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
