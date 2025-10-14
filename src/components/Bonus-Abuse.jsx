
import React from 'react';
import groupImg from '../assets/Services/IpServices/ipserviceAbout.jpg';

const bonusabuse = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Fake Accout Creation
            </span>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-center md:text-left text-gray-100">
              Bonus Abuse
            </h2>
            <div className="space-y-4 text-gray-100 mb-8 text-center md:text-left">
              <p>
                When fraudsters target promotional incentives, they steal more than rewards—they erode growth.
              </p>
              <p>
                Huscom International keeps your bonus ecosystem safe for legitimate customers while shielding it from bad actors that drain value.
              </p>
              
            </div>
            <div className="flex justify-center md:justify-start w-full">
              <a
                href="/aboutus"
                className="glare-hover inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 group relative overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Demo
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="glare"></span>
              </a>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={groupImg}
              alt="HUSCOMINTL team"
              className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default bonusabuse;

