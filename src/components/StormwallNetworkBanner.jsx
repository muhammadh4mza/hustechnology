import React from 'react';
import Stormwallnetwork from '../assets/Services/stormwallnetwork/stormwallnetworkbanner.jpg';

const StormwallNetworkBanner = () => {
  return (
    <div className="relative h-96 md:h-[800px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${Stormwallnetwork})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white flex justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-center uppercase">
              When It Comes to DDoS
              <br />
              We’ve Got You Covered
            </h1>
            <p className="text-lg md:text-xl mb-6 text-center">
              Reliable solutions to safeguard websites, networks, servers, and IT infrastructures of
              any size and complexity from modern DDoS and hacker attacks
            </p>
            {/* CTA Buttons would go here */}
            <div className="flex justify-center">
              <button
                className="glare-hover relative px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full shadow-lg transition duration-300 capitalize tracking-wider overflow-hidden"
                type="button"
              >
                <span className="relative z-10">Activate Protection</span>
                <span className="glare"></span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StormwallNetworkBanner;