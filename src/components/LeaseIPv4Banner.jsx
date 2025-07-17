import React from 'react';
import leasingImg from '../assets/Services/IpServices/leasing_img.jpg';

const LeaseIPv4Banner = () => {
  return (
   <div className="relative h-[500px] sm:h-[600px] md:h-[800px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${leasingImg})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Lease IPv4 Addresses within 48 hours
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Choose Huscomintl, the premier provider of IPv4 address leasing services, to improve the agility of your network. Experience the full power of continuous connectivity with our rapid and cost-effective solutions.
            </p>
            {/* CTA Buttons would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaseIPv4Banner;