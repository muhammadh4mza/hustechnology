import React from "react";
import "../index.css";

// Import your logo images (replace with your actual image paths)
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.png";
import logo10 from "../assets/logos/logo10.png";
import logo11 from "../assets/logos/logo11.png";
import logo12 from "../assets/logos/logo12.png";

const ClientSlider = () => {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12
  ];

  return (
    <div className="py-12 transition-all ">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-50 uppercase">
          The world's leading brands are powered by Huscom International Technologies
        </h2>
        </div>

              <div className="max-w-screen-4xl mx-auto px-4">
        <div className="relative w-full overflow-hidden h-32">
          <div className="flex absolute items-center animate-client-slide ">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-4 bg-gradient-to-br from-white/100 to-gray-100/60 shadow-lg border border-gray-100/60 transition-all rounded-3xl ">
                <img 
                  src={logo} 
                  alt={`Client logo ${index % logos.length}`}
                  className="h-28 w-60 object-contain max-w-none "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;