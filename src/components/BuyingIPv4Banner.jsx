import React from 'react';
import managingImg from '../assets/Services/BuyServices/BuyServices1.jpg';

const BuyingIPv4Banner = () => {
  return (
   <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${managingImg})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Buy IP Addresses
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Huscomintl specializes in providing top-notch services to help you buy IP addresses. Purchasing IP addresses can be complicated and time-consuming. We'll help you avoid all of the hassle.Our user-friendly online platform makes buying IPs simple and convenient. With Huscomintl as your trusted IPv4 broker, you can swiftly secure IP addresses through our online system at the best possible prices.
            </p>
            {/* CTA Buttons would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingIPv4Banner;