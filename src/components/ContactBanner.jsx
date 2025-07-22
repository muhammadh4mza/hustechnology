import React from 'react';
import aboutHeader from '../assets/header/aboutheader.jpg';

const ContactBanner = () => {
  return (
    <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${aboutHeader})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Ready to, Transform Your Business?
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Let's discuss how HUSCOM INTERNATIONAL can help you achieve your digital goals.
            </p>
            {/* CTA Buttons would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;