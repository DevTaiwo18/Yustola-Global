// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import Herosection from './../assets/29cca-slider-5.jpg';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Yustola Global</title>
        <meta name="description" content="Welcome to Yustola Global - Your trusted travel and tour partner." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-[80vh] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Herosection}
            alt="Travel Background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[85%] text-left px-4 md:px-24">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl text-white font-medium">
              Welcome to
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-red-500">
              Yustola Global
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 mt-4">
            Your trusted travel and tour partner for all destinations.
            <br />
            Experience seamless travel solutions tailored for you.
          </p>
          <Link to="/contact">
            <button className="mt-6 px-5 py-2 bg-red-500 text-white rounded-full text-lg font-medium shadow-lg hover:bg-red-600 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-transparent to-blue-900 opacity-60"></div>
      </div>
    </div>
  );
};

export default Home;
