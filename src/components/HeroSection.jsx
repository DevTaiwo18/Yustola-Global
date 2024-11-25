import React, { useEffect } from "react";
import planeImage from "../assets/plane.jpg"; // Importing the background image
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { HiChevronRight } from "react-icons/hi"; // Import a chevron icon for breadcrumb styling

const HeroSection = ({ title, breadcrumb }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] bg-gradient-to-r from-gray-600 to-gray-800 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={planeImage} // Using the imported image
          alt={`${title} Background`}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <div
          className="mt-4 flex items-center space-x-2 text-sm md:text-base text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {breadcrumb &&
            breadcrumb.map((crumb, index) => (
              <span key={index} className="flex items-center">
                {index > 0 && (
                  <HiChevronRight className="text-gray-400 mx-2" />
                )}
                <span
                  className={`hover:text-gray-200 ${
                    index === breadcrumb.length - 1
                      ? "font-semibold text-white"
                      : "text-gray-300"
                  }`}
                >
                  {crumb}
                </span>
              </span>
            ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-transparent to-gray-900 opacity-60"></div>
    </div>
  );
};

export default HeroSection;
