import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async"; // Helmet for SEO
import HeroSection from "../components/HeroSection"; // Import updated HeroSection
import AOS from "aos";
import "aos/dist/aos.css";
import Why from "../components/Why";
import Ourservice from "../components/Ourservice";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>About Us | Yustola Global</title>
        <meta
          name="description"
          content="Learn about Yustola Global - our mission, vision, and the exceptional travel services we provide for clients worldwide."
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection title="About Us" breadcrumb={["Home", "About Us"]} />

      {/* About Us Content */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-[85%] mx-auto text-gray-700 leading-relaxed space-y-12">
          {/* Who We Are */}
          <div
            data-aos="fade-up"
            className="space-y-4"
          >
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Who We Are
            </h2>
            <p className="text-sm md:text-base">
              Yustola Global is a full-service travel agency committed to providing seamless, stress-free travel solutions. Our mission is to offer personalized services to ensure our clients enjoy unforgettable experiences. With a focus on excellence, professionalism, and customer satisfaction, we’ve become a trusted name in the travel industry.
            </p>
          </div>

          {/* Our Mission and Vision */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="space-y-4"
          >
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Our Mission and Vision
            </h2>
            <p className="text-sm md:text-base">
              Our mission is to simplify travel by offering exceptional visa support, flight booking, and hotel reservations. We envision a world where travel is accessible, enjoyable, and enriching for everyone.
            </p>
          </div>

          {/* Why Choose Us */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="space-y-4"
          >
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Why Choose Us
            </h2>
            <p className="text-sm md:text-base">
              At Yustola Global, we prioritize your needs and preferences. Whether you’re traveling for business, leisure, or education, our dedicated team is here to guide you every step of the way. From expert advice to tailor-made solutions, we deliver top-tier services to make your journey memorable.
            </p>
          </div>
        </div>
      </div>

      <Why />

      <Ourservice />
    </div>
  );
};

export default AboutUs;
