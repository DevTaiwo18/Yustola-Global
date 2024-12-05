import React, { useEffect } from "react";
import { FaPlane, FaHotel, FaPassport, FaCar, FaUmbrellaBeach, FaShieldAlt } from "react-icons/fa"; // Added new icons
import AOS from "aos";
import "aos/dist/aos.css";

const Ourservice = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation only happens once
    });
  }, []);

  return (
    <div className="py-12 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-8 px-4">
        <h2
          className="text-3xl font-bold text-gray-800"
          data-aos="fade-down" // Adding animation to the title
        >
          Our Services
        </h2>
        <p
          className="mt-4 text-gray-600 max-w-lg mx-auto leading-relaxed text-sm md:text-base"
          data-aos="fade-up" // Adding animation to the description
        >
          Discover a range of professional travel services tailored to meet your unique preferences.
          From hassle-free visa applications and seamless flight bookings to securing premium hotel
          accommodations, we ensure your travel experience is enjoyable, stress-free, and tailored
          just for you.
        </p>
      </div>

      {/* Services Grid */}
      <div
        className="max-w-[90%] md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10 text-center"
        data-aos="fade-up" // Adding animation to the grid
      >
        {/* Visa Application */}
        <div
          className="space-y-3 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          data-aos="zoom-in"
        >
          <FaPassport className="text-4xl text-blue-500 mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Visa Application</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Get expert advice on visa applications, including student, tourist, and work visas.
            Our team ensures a smooth and stress-free application process while meeting all
            necessary requirements tailored to your travel goals.
          </p>
        </div>

        {/* Flight Booking */}
        <div
          className="space-y-3 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          data-aos="zoom-in"
        >
          <FaPlane className="text-4xl text-green-500 mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Flight Booking</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Book flights with ease through our expert assistance. We secure the best prices,
            offer flexible travel options, and ensure convenient flight schedules to make your
            journey seamless from start to finish.
          </p>
        </div>

        {/* Hotel Reservations */}
        <div
          className="space-y-3 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          data-aos="zoom-in"
        >
          <FaHotel className="text-4xl text-yellow-500 mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Hotel Reservations</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Reserve premium accommodations at top-rated hotels worldwide. Let us help you find
            the perfect place to stay, ensuring your trip is not just comfortable, but truly
            memorable and enjoyable.
          </p>
        </div>

        {/* Airport Transfers */}
        <div
          className="space-y-3 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          data-aos="zoom-in"
        >
          <FaCar className="text-4xl text-purple-500 mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Airport Transfers</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Experience hassle-free transportation with our reliable airport transfer services,
            ensuring your journey starts and ends on the right note.
          </p>
        </div>

        {/* Vacation Packages */}
        <div
          className="space-y-3 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          data-aos="zoom-in"
        >
          <FaUmbrellaBeach className="text-4xl text-orange-500 mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Vacation Packages</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Enjoy carefully curated vacation packages that offer the perfect mix of relaxation,
            adventure, and exploration at your dream destinations.
          </p>
        </div>

        {/* Travel Insurance */}
        <div
          className="space-y-3 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          data-aos="zoom-in"
        >
          <FaShieldAlt className="text-4xl text-red-500 mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Travel Insurance</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Travel worry-free with our comprehensive travel insurance plans, protecting you against
            unforeseen circumstances and ensuring peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
