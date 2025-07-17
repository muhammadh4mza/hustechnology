import React from 'react';
import leasingImg from '../assets/Services/SellSeller/SellSeller1.jpg';

const SellIPv4Banner = () => {
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
              Sell IP Addresses
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Do you want to sell your IP addresses hassle-free? Huscomintl simplifies the process of selling IP addresses. Our online platform for buying and selling IPs connects sellers with potential buyers, ensuring that all transactions are completed quickly.
            </p>
            {/* CTA Buttons would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellIPv4Banner;