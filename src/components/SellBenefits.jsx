
import React from 'react';
import { motion } from 'framer-motion';
import leasing1 from '../assets/Services/SellSeller/SellSeller2.jpg';
import leasing2 from '../assets/Services/SellSeller/SellSeller3.jpg';
import leasing3 from '../assets/Services/SellSeller/SellSeller4.jpg';


const SellBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "IPv4 prices never stop increasing",
      points: [
        "The shortage of IPv4 addresses causes their prices to increase each year. You can generate significant revenue by selling them."
      ],
      image: leasing1,
      alt: "IPv4 address pool"
    },
    {
      id: 2,
      title: "Save time and costs in maintaining IP addresses",
      points: [
        "We understand handling IP requires lots of time and cost. Huscomintl will help to sell your IP and generate revenue."
      ],
      image: leasing2,
      alt: "Global geo-location"
    },
    {
      id: 3,
      title: "Hassle-free and fast process",
      points: [
        "Huscomintl offers IP brokerage services to help you sell unused IP addresses and handle the process from start to finish."
      ],
      image: leasing3,
      alt: "Fast delivery"
    }
  ];

  return (
    <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-16 overflow-hidden">
      {/* Unique halogen effect background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-400 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-72 h-72 bg-gradient-to-tr from-pink-400 via-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border-8 border-cyan-400/30 rounded-full blur-xl opacity-20 animate-spin-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Benefits of Selling IP Addresses
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-white/80">
            <p className="mb-4">
              Huscomintl offers a unique opportunity for businesses to generate lucrative revenue by selling IP addresses. Turn your unused assets into valuable resources, boost your financial performance and promote sustainable expansion.

            </p>
            <p>
              Our platform provides numerous benefits to businesses. If you're looking for the most reliable ways to sell IP addresses, Huscomintl has you covered.

            </p>
          </div>
        </motion.div>

        {/* Benefits Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl shadow-lg overflow-hidden transition-all hover:shadow-2xl duration-500 flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:p-8 flex-grow text-white">
                <div>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-white">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {benefit.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 mt-1 text-cyan-300 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base text-white/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellBenefits;