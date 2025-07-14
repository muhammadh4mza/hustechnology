import React from 'react';
import IpservicesBG from '../assets/Services/IpServices/Ipservicebanner.jpg';

const Banner = () => {
  return (
    <div className="relative h-96 md:h-[800px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${IpservicesBG})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white flex justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-center uppercase">
              Leading Provider of Fast, Reliable, and Expert IP Solutions
            </h1>
            <p className="text-lg md:text-xl mb-6 text-center">
              Huscomintl, a trusted global IP solutions provider, specializes in meeting your most critical networking needs. Whether you're buying, selling, or leasing IP addresses, we deliver on-demand solutions—fast. Get IP addresses provisioned within 24 hours and keep your infrastructure running seamlessly.
            </p>
            {/* CTA Buttons would go here */}
            <div className="flex justify-center">
              <button
                className="glare-hover relative px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full shadow-lg transition duration-300 capitalize tracking-wider overflow-hidden"
                type="button"
              >
                <span className="relative z-10">Get IP Addresses Now</span>
                <span className="glare"></span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;