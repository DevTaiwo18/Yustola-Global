import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animates only once
    });
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      {/* Title Section */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div
          className="bg-white shadow-md rounded-lg p-6 space-y-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          data-aos="zoom-in"
        >
          <FaQuoteLeft className="text-3xl md:text-4xl text-red-500" />
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            "Yustola Global exceeded my expectations. Their professionalism and
            attention to detail made obtaining my UK visa seamless and
            stress-free. Highly recommend their services!"
          </p>
          <h4 className="text-sm md:text-lg font-semibold text-gray-800">
            - Tolu A.
          </h4>
        </div>

        {/* Testimonial 2 */}
        <div
          className="bg-white shadow-md rounded-lg p-6 space-y-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          data-aos="zoom-in"
        >
          <FaQuoteLeft className="text-3xl md:text-4xl text-red-500" />
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            "I was amazed by the ease of booking my flight and hotel through
            Yustola Global. They went above and beyond to ensure my comfort and
            convenience. Truly exceptional service!"
          </p>
          <h4 className="text-sm md:text-lg font-semibold text-gray-800">
            - Grace K.
          </h4>
        </div>

        {/* Testimonial 3 */}
        <div
          className="bg-white shadow-md rounded-lg p-6 space-y-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          data-aos="zoom-in"
        >
          <FaQuoteLeft className="text-3xl md:text-4xl text-red-500" />
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            "Thanks to Yustola Global, I had the most stress-free travel
            experience ever. Their expertise and dedication are unmatched. I
            can’t wait to book my next trip with them!"
          </p>
          <h4 className="text-sm md:text-lg font-semibold text-gray-800">
            - John D.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
