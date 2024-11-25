import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import HeroSection from "../components/HeroSection";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact Us | Yustola Global</title>
        <meta
          name="description"
          content="Contact Yustola Global for all your travel needs. Reach out to us via phone, email, or visit our office for assistance."
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection title="Contact Us" breadcrumb={["Home", "Contact Us"]} />

      {/* Contact Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div
            data-aos="fade-right"
            className="space-y-6 text-gray-700 text-xs md:text-sm leading-relaxed"
          >
            {/* Introduction */}
            <p className="text-sm md:text-base font-medium text-gray-800">
              Have questions or need help? Contact us via phone, email, or visit our office for personalized assistance.
            </p>

            {/* Phone */}
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1">Phone:</h3>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-gray-600" />
                <span>08169587914</span>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1">Address:</h3>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-600" />
                <span>
                  No 24, Kajola Bustop, Besides Energy Filling Station, Ojoo Exp, Ibadan, Nigeria.
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1">Email:</h3>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-600" />
                <span>yustolaglobal@gmail.com</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1">Working Hours:</h3>
              <div className="flex items-center space-x-3">
                <FaClock className="text-gray-600" />
                <span>8am - 5pm</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-left"
            className="bg-white p-8 rounded-lg"
          >
            <h3 className="text-lg md:text-xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h3>
            <form className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs md:text-sm font-semibold mb-1 text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm font-semibold mb-1 text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-semibold mb-1 text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-[85%] mx-auto">
          <h3 className="text-lg md:text-xl font-bold mb-6 text-gray-800 text-center">
            Find Us On The Map
          </h3>
          <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-up">
            <iframe
              title="Yustola Global Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.4921359604753!2d3.8955813142874594!3d7.4010002154310275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d1e870b53a5%3A0x44d11f8a648d4e9a!2sOjoo%2C%20Ibadan%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1690110975145!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
