import React from 'react';
import IpservicesBG from '../assets/Services/telcom/telcomBanner.jpg';

const TelcomBanner = () => {
  return (
    <div className="relative h-[650px] sm:h-[650px] md:h-[800px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IpservicesBG})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight uppercase drop-shadow-lg mb-4 md:mb-6">
            Global Edge Computing Services
          </h1>
          <p className="text-sm sm:text-base md:text-xl drop-shadow-md mb-3 md:mb-4">
            Global, automated cloud infrastructure from the broadest array of NVIDIA GPUs to virtual CPUs,
            bare metal, Kubernetes, storage, and networking solutions.
          </p>
          <p className="text-sm sm:text-base md:text-xl drop-shadow-md">
            Leading companies around the world are choosing Huscomintl to digitally transform their business and
            build generative AI experiences with confidence and speed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TelcomBanner;
