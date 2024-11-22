import React, { useEffect } from "react";
import { FaWallet, FaExchangeAlt, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Why = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation only happens once
    });
  }, []);

  return (
    <div className="py-12 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white">
      <div className="max-w-[85%] mx-auto">
        {/* Title Section */}
        <div
          className="text-center mb-12"
          data-aos="fade-down" // Animation for title
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Why You Should Choose Yustola Global
          </h2>
          <p
            className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up" // Animation for subtitle
          >
            Yustola Global has been a trusted name in the travel industry,
            consistently delivering exceptional travel solutions. With an
            experienced team and customer-focused services, we make your journey
            seamless and stress-free, tailored to your needs.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div
            className="flex flex-col items-start md:items-center bg-gray-700 p-6 rounded-lg shadow-lg space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in" // Animation for feature 1
          >
            <FaWallet className="text-4xl text-yellow-400" />
            <h3 className="text-lg font-semibold text-left md:text-center">
              Flexible Payment Options
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed text-left md:text-center">
              Enjoy flexible payment plans designed to make financing your trips
              convenient and stress-free.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="flex flex-col items-start md:items-center bg-gray-700 p-6 rounded-lg shadow-lg space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in" // Animation for feature 2
          >
            <FaExchangeAlt className="text-4xl text-yellow-400" />
            <h3 className="text-lg font-semibold text-left md:text-center">
              Transparent Service Fees
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed text-left md:text-center">
              All charges are upfront and transparent, ensuring no hidden costs
              or surprises for complete peace of mind.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="flex flex-col items-start md:items-center bg-gray-700 p-6 rounded-lg shadow-lg space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in" // Animation for feature 3
          >
            <FaCheckCircle className="text-4xl text-yellow-400" />
            <h3 className="text-lg font-semibold text-left md:text-center">
              Customer-Centric Approach
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed text-left md:text-center">
              Our dedicated team is committed to providing smooth, memorable,
              and hassle-free travel experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
