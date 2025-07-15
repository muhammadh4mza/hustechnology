
import React from 'react';
import { motion } from 'framer-motion';
import leasing1 from '../assets/Services/LeaseServices/Hugepool.jpg';
import leasing2 from '../assets/Services/LeaseServices/OfferGlobal.jpg';
import leasing3 from '../assets/Services/LeaseServices/Offer48.jpg';
import leasing4 from '../assets/Services/LeaseServices/ProcessIps.jpg';
import leasing5 from '../assets/Services/LeaseServices/SubscriptionModel.jpg';
import leasing6 from '../assets/Services/LeaseServices/maintenancefee.jpg';

const LeaseBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Huge pool of IPv4 addresses",
      points: [
        "Huscomintl managed a large number of IPv4 addresses on hand",
        "Ready to use anytime"
      ],
      image: leasing1,
      alt: "IPv4 address pool"
    },
    {
      id: 2,
      title: "Offer Global geo-location of IPv4 addresses",
      points: [
        "IPv4 addresses from different countries",
        "Ready to serve the global network"
      ],
      image: leasing2,
      alt: "Global geo-location"
    },
    {
      id: 3,
      title: "Provide IPv4 addresses within 48 hours",
      points: [
        "Get IPv4 addresses and start using within 48 hours"
      ],
      image: leasing3,
      alt: "Fast delivery"
    },
    {
      id: 4,
      title: "Simple and quick process to get the IPs",
      points: [
        "3 simple steps: service contract, payment, letter of authorization"
      ],
      image: leasing4,
      alt: "Quick process"
    },
    {
      id: 5,
      title: "Flexible Subscription Model",
      points: [
        "Choose from different IP block sizes",
        "Flexible payment models"
      ],
      image: leasing5,
      alt: "Flexible subscription"
    },
    {
      id: 6,
      title: "No other management or maintenance fee",
      points: [
        "Clear cost, no extra fees during leasing period"
      ],
      image: leasing6,
      alt: "Transparent pricing"
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
            IP Leasing Service at Huscomintl
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-white/80">
            <p className="mb-4">
              Whether you want to increase the scalability of your business and network or streamline the IP acquisition process, 
              Huscomintl provides a simple and effective IP leasing solution. Discover how simple it is to lease IPv4 addresses using 
              our efficient and cost-effective process.
            </p>
            <p>
              With our dedicated support, our IP Leasing Service ensures that your network can adapt to changing demands. 
              Huscomintl prioritizes network scalability and provides comprehensive lease choices with expert assistance.
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

export default LeaseBenefits;