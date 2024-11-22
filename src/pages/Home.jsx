// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import Herosection from './../assets/29cca-slider-5.jpg';
import { FaBriefcase, FaGraduationCap, FaPlane } from 'react-icons/fa';
import Ourservice from '../components/Ourservice';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Yustola Global</title>
        <meta name="description" content="Welcome to Yustola Global - Your trusted travel and tour partner." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white flex items-center justify-center md:justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Herosection}
            alt="Travel Background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[85%] text-left md:text-left px-1 md:px-24">
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

      {/* Visa Types Section */}
      <div className="py-10 bg-gray-800 text-gray-300">
        <div className="max-w-[85%] px-2 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">

          {/* Work Visas */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-2xl sm:text-3xl text-blue-400" />
              <h3 className="text-sm font-bold text-white">Work Visas</h3>
            </div>
            <p className="text-xs font-semibold leading-relaxed">
              Unlock career opportunities abroad with a work visa, your gateway to building a professional life in a new country.
            </p>
          </div>

          {/* Student Visas */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaGraduationCap className="text-2xl sm:text-3xl text-green-400" />
              <h3 className="text-sm font-bold text-white">Student Visas</h3>
            </div>
            <p className="text-xs font-semibold leading-relaxed">
              Pursue your dreams of studying overseas. A student visa grants you access to world-class education and global opportunities.
            </p>
          </div>

          {/* Visit/Tourist Visas */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaPlane className="text-2xl text-yellow-400" />
              <h3 className="text-sm font-bold text-white">Visit/Tourist Visas</h3>
            </div>
            <p className="text-xs font-semibold leading-relaxed">
              Explore new destinations and cultures with ease. A tourist visa opens the door to unforgettable adventures.
            </p>
          </div>
        </div>
      </div>

      {/* Our service */}
      <Ourservice />
  
    </div>
  );
};

export default Home;
