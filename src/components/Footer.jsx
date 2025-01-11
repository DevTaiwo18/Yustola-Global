import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import Logo from './../assets/Full White.png';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Automatically gets the current year

    return (
        <footer className="bg-gray-900 text-white py-9">
            <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Left Column - Logo and Description */}
                <div className="flex flex-col items-start space-y-4">
                    <img src={Logo} alt="Yustola Global Logo" className="h-12 md:h-10" /> {/* Smaller logo */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        At Yustola Global, we provide top-tier travel services, specializing in visa support, flight booking, and hotel accommodations for clients worldwide.
                    </p>
                    <a
                        href="#"
                        className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-300 text-sm underline"
                    >
                        Learn More About Us
                    </a>
                </div>

                {/* Right Column - Contact Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">CONTACT US</h3>
                    <p className="text-gray-400 flex items-start text-sm leading-relaxed">
                        <GoLocation className="mr-2 mt-1 text-lg" />
                        No 24, Kajola Bustop, Besides Energy Filling Station, Ojoo Exp, Ibadan, Nigeria.
                    </p>
                    <p className="text-gray-400 flex items-center text-sm">
                        <FaPhoneAlt className="mr-2 text-lg" />
                        +234 816 958 7914 | +234 818 240 6451
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-6 border-t border-gray-700 pt-8 text-center text-gray-500 text-xs">
                © {currentYear} Yustola Global. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
