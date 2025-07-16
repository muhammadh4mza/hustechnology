
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  "https://content2.stormwall.network/swssn-en/main-slider/Client portal-0.png",
  "https://content2.stormwall.network/swssn-en/main-slider/Client portal-1.png",
  "https://content2.stormwall.network/swssn-en/main-slider/Client portal-2.png",
  "https://content2.stormwall.network/swssn-en/main-slider/Client portal-3.png",
  "https://content2.stormwall.network/swssn-en/main-slider/Client portal-4.png",
  "https://content2.stormwall.network/swssn-en/main-slider/Client portal-5.png",
];

const features = [
  "Real-time analytics at your fingertips",
  "Customizable filtering rules",
  "Attack history for future reference",
  "Antibot functionality",
  "Requests, traffic data, and response codes analytics",
  "Automated attack notifications",
  "Detailed PDF reports",
  "Sub-accounts and role management",
];


const ClientPortalSection = () => {
  return (
    <section className="relative z-10 py-20 bg-gray-950 overflow-hidden px-6 md:px-10 lg:px-16">
      {/* Halogen Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Best-in-class <br />
            <span className="text-blue-700">Client Portal</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Explore our user-friendly and feature-rich Client Portal — a centralized hub designed to manage and monitor your anti-DDoS defenses with ease.
          </p>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <div className="w-3 h-3 mt-2 mr-4 rounded-full bg-blue-500 shrink-0" />
                <span className="text-white text-base leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Carousel with Swiper */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full max-w-[520px] mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="overflow-hidden rounded-xl shadow-xl border border-white/10 backdrop-blur-md bg-white/5"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Client portal ${idx + 1}`}
                    className="w-full h-auto object-contain transition-all duration-500 ease-in-out"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Swiper navigation buttons styled as before */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 sm:px-4 pointer-events-none">
              <button
                className="swiper-button-prev bg-white/90 hover:bg-white text-gray-800 rounded-full w-12 h-12 flex justify-center items-center shadow-lg transition-all pointer-events-auto"
                aria-label="Previous"
              >
                <img
                  src="https://content2.stormwall.network/swssn-en/previous.svg"
                  alt="Previous"
                  className="w-5 h-5"
                />
              </button>
              <button
                className="swiper-button-next bg-white/90 hover:bg-white text-gray-800 rounded-full w-12 h-12 flex justify-center items-center shadow-lg rotate-180 transition-all pointer-events-auto"
                aria-label="Next"
              >
                <img
                  src="https://content2.stormwall.network/swssn-en/previous.svg"
                  alt="Next"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalSection;
