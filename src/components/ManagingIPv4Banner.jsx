import React from 'react';
import managingImg from '../assets/Services/ManagingServices/managingImg.jpg';

const ManagingIPv4Banner = () => {
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
              IP Management Service
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Managing your excess IPv4 addresses can help reduce management costs and generate extra revenue.
            </p>
            {/* CTA Buttons would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagingIPv4Banner;