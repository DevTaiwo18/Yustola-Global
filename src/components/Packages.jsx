import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import Slick styles
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme
import { FaPlane } from "react-icons/fa";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });

    // Fetch packages from the backend
    const fetchPackages = async () => {
      try {
        const response = await axios.get(
          "https://yustol-global-backend.onrender.com/api/packages"
        );
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading packages...</p>
      </div>
    );
  }

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[85%] mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Travel Packages</h1>

      {packages.length > 3 ? (
        <Slider {...sliderSettings}>
          {packages.map((travelPackage, index) => (
            <div
              key={index}
              className="p-3"
              data-aos="zoom-in"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={travelPackage.image}
                  alt={travelPackage.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {travelPackage.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Type: {travelPackage.type}
                  </p>
                  <p className="text-lg text-red-500 font-semibold mt-4">
                    Pay Now: ₦{Number(travelPackage.price).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Subject to availability
                  </p>
                  <button
                    onClick={() =>
                      console.log(`Deleting package ${travelPackage._id}`)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6`}
          data-aos="fade-up"
        >
          {packages.map((travelPackage, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              data-aos="zoom-in"
            >
              <img
                src={travelPackage.image}
                alt={travelPackage.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {travelPackage.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  Type: {travelPackage.type}
                </p>
                <p className="text-lg text-red-500 font-semibold mt-4">
                  Pay Now: ₦{Number(travelPackage.price).toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Subject to availability
                </p>
                <button
                  onClick={() =>
                    console.log(`Deleting package ${travelPackage._id}`)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Packages;
