import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async"; // Helmet for SEO
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import HeroSection from "../components/HeroSection"; // Use your HeroSection component
import Why from "../components/Why"; // Render the "Why" section
import Ourservice from "../components/Ourservice"; // Render the "Ourservice" section

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Services | Yustola Global</title>
        <meta
          name="description"
          content="Learn how Yustola Global provides top-tier travel services with expertise, professionalism, and a customer-focused approach."
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection title="Our Services" breadcrumb={["Home", "Services"]} />

      {/* About Our Services Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-[85%] mx-auto text-gray-700 leading-relaxed">
          <h2
            className="text-xl md:text-2xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
          >
            About Our Services
          </h2>
          <p className="text-sm md:text-base mb-6" data-aos="fade-up">
            At Yustola Global, we pride ourselves on providing comprehensive
            travel services that cater to a variety of needs. Whether you are
            traveling for business, leisure, or education, we are committed to
            making your journey seamless and stress-free.
          </p>
          <p className="text-sm md:text-base mb-6" data-aos="fade-up">
            Our team of experts ensures every aspect of your travel is handled
            with precision and care, from visa applications and flight bookings
            to hotel reservations and travel insurance. We understand the
            importance of your time and trust, which is why we go above and
            beyond to deliver exceptional services tailored to your unique
            requirements.
          </p>
          <p className="text-sm md:text-base mb-6" data-aos="fade-up">
            At Yustola Global, our mission is simple: to provide personalized
            solutions and make travel accessible, enjoyable, and memorable for
            everyone. Discover the difference with our professional and
            customer-focused approach.
          </p>
        </div>
      </div>

      {/* Why Section */}
      <Why />

      {/* Our Service Section */}
      <Ourservice />
    </div>
  );
};

export default Services;
