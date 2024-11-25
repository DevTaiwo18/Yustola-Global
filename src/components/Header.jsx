// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import Logo from './../assets/Full Black.png';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Effect to close mobile menu when resizing to desktop view and prevent scrolling when menu is open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = ''; // Reset scroll when component unmounts
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <header className="bg-white font-sans border-b border-gray-200">
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white text-xs py-3 hidden lg:block">
        <div className="max-w-[85%] mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span>📞 08169587914 | 08169587914</span>
            <span>✉️ info@yustolaglobal.com</span>
            <span>📍 USA | Ibadan | Akure | Oshogbo</span>
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="max-w-[85%] mx-auto flex justify-between items-center py-4 relative">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={Logo} alt="Yustola Global Logo" className="h-10" />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 text-3xl focus:outline-none p-2 transition duration-300"
        >
          ☰
        </button>

        {/* Slide-in Mobile Navigation */}
        {isOpen && (
          <>
            {/* Background overlay with blur */}
            <div
              onClick={closeMenu}
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
            ></div>

            {/* Sidebar Menu */}
            <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between px-4 py-5 border-b">
                <Link to="/" onClick={closeMenu}>
                  <img src={Logo} alt="Yustola Global Logo" className="h-10" />
                </Link>
                <button
                  onClick={closeMenu}
                  className="text-gray-800 text-2xl focus:outline-none p-2"
                >
                  <AiOutlineClose />
                </button>
              </div>

              {/* Enhanced Mobile Menu Links */}
              <nav className="flex flex-col items-start p-6 space-y-6">
                <Link to="/" onClick={closeMenu} className="text-gray-900 hover:text-blue-700 text-lg font-semibold w-full">
                  Home
                </Link>
                <Link to="/about" onClick={closeMenu} className="text-gray-900 hover:text-blue-700 text-lg font-semibold w-full">
                  About
                </Link>
                <Link to="/services" onClick={closeMenu} className="text-gray-900 hover:text-blue-700 text-lg font-semibold w-full">
                  Services
                </Link>
                <Link to="/pricing" onClick={closeMenu} className="text-gray-900 hover:text-blue-700 text-lg font-semibold w-full">
                  Pricing
                </Link>
                <Link to="/team" onClick={closeMenu} className="text-gray-900 hover:text-blue-700 text-lg font-semibold w-full">
                  Our Team
                </Link>
                <Link to="/contact" onClick={closeMenu} className="text-gray-900 hover:text-blue-700 text-lg font-semibold w-full">
                  Contact Us
                </Link>
              </nav>
            </div>
          </>
        )}

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex lg:space-x-8 lg:items-center text-sm font-semibold">
          <Link to="/" className="text-gray-800 hover:text-blue-700 transition-colors duration-200">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-700 transition-colors duration-200">About</Link>
          <Link to="/services" className="text-gray-800 hover:text-blue-700 transition-colors duration-200">Services</Link>
          <Link to="/pricing" className="text-gray-800 hover:text-blue-700 transition-colors duration-200">Pricing</Link>
          <Link to="/team" className="text-gray-800 hover:text-blue-700 transition-colors duration-200">Our Team</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-700 transition-colors duration-200">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
