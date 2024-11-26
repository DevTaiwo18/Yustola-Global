import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"; // Helmet for SEO
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import HeroSection from "../components/HeroSection"; // HeroSection Component
import { HiChevronDown } from "react-icons/hi"; // Icon for accordion toggle

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  const faqs = [
    {
      question: "What services does Yustola Global provide?",
      answer:
        "We offer a wide range of travel services, including visa assistance, flight booking, hotel reservations, travel insurance, and more.",
    },
    {
      question: "How can I apply for a visa through Yustola Global?",
      answer:
        "Simply contact us with your travel details, and our team will guide you through the entire visa application process.",
    },
    {
      question: "Do you offer travel insurance?",
      answer:
        "Yes, we provide comprehensive travel insurance plans to ensure your safety and peace of mind during your travels.",
    },
    {
      question: "Can I book a complete travel package?",
      answer:
        "Absolutely! We offer tailored travel packages that include flights, accommodation, and other essential arrangements.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach us via phone, email, or visit our office during working hours. Our support team is available 24/7 to assist you.",
    },
  ];

  // State to manage open/close status of FAQ items
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>FAQs | Yustola Global</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Yustola Global's travel and visa services."
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection title="FAQs" breadcrumb={["Home", "FAQs"]} />

      {/* FAQ Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-[85%] mx-auto">
          <h1
            className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-6"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-center text-gray-600 text-sm md:text-base mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Have questions? We've got answers! Here are some of the most
            frequently asked questions about our services.
          </p>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-semibold text-sm md:text-base focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <HiChevronDown
                    className={`text-gray-600 transform ${
                      openIndex === index ? "rotate-180" : ""
                    } transition-transform duration-300`}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-600 text-sm md:text-base border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
