

import React from 'react';
import { Briefcase, Link2, Users } from 'lucide-react';
import bgImg from '../assets/Services/IpServices/ipserviceSection.jpg';

const IpServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "IP Brokerage",
      description: "HUSCOMINTL helps customers to save time, effort, and resources in buying or selling IP addresses by handling the process from start to end.",
      icon: Briefcase,
    },
    {
      id: 2,
      title: "IP Leasing Solutions",
      description: "HUSCOMINTL is ready to help if you are facing a shortage of IP addresses or you need help with IP addresses management.",
      icon: Link2,
    },
    {
      id: 3,
      title: "Other Professional Services",
      description: "HUSCOMINTL has more than 20 specialists handling RIR membership and infrastructure.",
      icon: Users,
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bgImg}
          alt="IP Services background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 uppercase">
            Our Services Include
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            HUSCOMINTL offers a secure and transparent platform for anyone to{' '}
            <a href="/buy-ip-addresses" className="text-white hover:text-blue-300 font-medium transition-colors">buy</a>,{' '}
            <a href="/sell-ip-addresses" className="text-white hover:text-blue-300 font-medium transition-colors">sell</a>{' '}
            or{' '}
            <a href="/ip-leasing" className="text-white hover:text-blue-300 font-medium transition-colors">lease</a>{' '}
            IP addresses. With our user-friendly interface and process, you can enjoy a hassle-free experience and choose from various options to meet your business requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white/30 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-blue-800/90 group-hover:bg-blue-800/70 transition-all duration-300 shadow-lg">
                  {service.icon && React.createElement(service.icon, {
                    className: "w-10 h-10 text-blue-300 group-hover:text-white transition-colors duration-300"
                  })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-100 flex-grow">{service.description}</p>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center text-white hover:text-blue-300 font-medium transition-colors focus:outline-none"
                >
                  Learn more
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IpServicesSection;