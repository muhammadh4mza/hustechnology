import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to get started with Huscomintl?",
      answer: "You must create an account in Huscomintl, and we will give you $10 as a gift, but you need to pay $10 to complete our account security verification, and these fees will be deposited in your account."
    },
    {
      question: "How is it different from other providers?",
      answer: "Huscomintl offers attractive pricing, diverse performance tiers, flexible billing, easy scalability, outstanding network capabilities, and an enhanced customer experience through its growing API ecosystem."
    },
    {
      question: "What operating systems are supported?",
      answer: "We support multiple operating systems to meet different user preferences. Debian10, 11, 12, for WindHuscomintl users, we provide WindHuscomintl2012, 2016, 2019, Ubuntu18.04, 20.04, 22.04, CentOS7.3, 7.5, 7.6, 7.9, 8."
    },
    {
      question: "What types of computing products are offered?",
      answer: "Huscomintl offers a range of computing-based products. ECS is an entry-level option best suited for smaller companies. BMS is ideal for medium to large companies that require on-demand computing solutions."
    },
    {
      question: "What is cloud server ECS?",
      answer: "ECS (Elastic Compute Service) is an IaaS (Infrastructure as a Service) level cloud computing service provided by Huscomintl with excellent performance, stability, reliability, and elastic expansion."
    },
    {
      question: "How do I get billed and how do I get a refund?",
      answer: "We charge by the hour, so you have the flexibility to control your costs. When you want to terminate the service, we will return the resources and refund the appropriate amount according to the unsubscription rules."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b h-[800px] from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Halogen (glow) effect background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500 opacity-30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-purple-500 opacity-30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[40%] w-[350px] h-[350px] bg-pink-500 opacity-30 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-cyan-400 opacity-20 rounded-full blur-[80px] animate-blob animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-400 bg-blue-900 bg-opacity-50 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Questions & Answers
          </h2>
          <p className="text-lg text-gray-300">
            Don't find your answer here? Just send us a message for any query.
          </p>
        </div>

        {/* FAQ Grid - Fixed accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-700 ${
                activeIndex === index ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <button
                className="w-full p-6 text-left focus:outline-none hover:bg-gray-700 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;