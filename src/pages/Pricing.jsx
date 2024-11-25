import React from "react";
import { Helmet } from "react-helmet-async"; // For SEO
import HeroSection from "../components/HeroSection"; // Hero Section for consistency

const Pricing = () => {
  const packages = [
    {
      title: "Visit/Tourist Visas",
      price: "$$$",
      description: "Tailored for travelers exploring various destinations.",
      features: ["Canada", "USA", "UK", "Schengen"],
    },
    {
      title: "Student Visas",
      price: "$$$",
      description: "Designed for students pursuing education overseas.",
      features: ["Canada", "USA", "UK", "Schengen"],
    },
    {
      title: "Work Visas",
      price: "$$$",
      description: "Ideal for professionals seeking global opportunities.",
      features: ["Canada", "USA", "UK", "Schengen"],
    },
    {
      title: "Travel Booking",
      price: "$$$",
      description: "Comprehensive booking packages for your convenience.",
      features: ["Flight", "Hotel Reservations", "Logistics", "24/7 Support"],
    },
  ];

  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Pricing | Yustola Global</title>
        <meta
          name="description"
          content="Explore Yustola Global's affordable pricing packages for visas, travel bookings, and more."
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection title="Pricing" breadcrumb={["Home", "Pricing"]} />

      {/* Pricing Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-[85%] mx-auto">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Pricing Packages
          </h1>
          <p className="text-center text-gray-600 text-sm md:text-base mb-12">
            Discover affordable travel and visa packages tailored to meet your
            needs.
          </p>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {pkg.title}
                </h3>
                <p className="text-2xl font-semibold text-gray-900 mb-2">
                  {pkg.price}
                </p>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <ul className="text-sm text-gray-700 mb-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="border-b py-1">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-300">
                  Reach Out
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
