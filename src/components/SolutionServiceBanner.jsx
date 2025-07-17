
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Removed AOS imports since animation is not required for Swiper slides
import uavBg from '../assets/Services/Uavdrone/UAVDroneBanner.jpg';


const slides = [
  {
    id: 1,
    image: uavBg,
    tip: '',
    title: `WORLD'S LEADING ANTI DRONE <br>PRODUCTS MANUFACTURER`,
    link: '',
  },
  {
    id: 2,
    image: 'https://qiniu.mfdemo.cn/fanshuang/2025/03/20/67db83cfbd6f4.jpg',
    tip: 'THOR M20',
    title: 'MULTI-MISSION DEFENDER',
    link: '',
  },
  {
    id: 3,
    image: 'https://qiniu.mfdemo.cn/fanshuang/2025/02/08/67a71e7dcc6d7.png',
    tip: 'ARGUS D10',
    title: `Handheld Drone Detector`,
    link: '',
  },
];

const SolutionServiceBanner = () => {


  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[800px] flex items-center">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="banner-item relative w-full min-h-[600px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-[800px] flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.tip || slide.title}
                className="w-full h-full object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <div
                className="banner-text relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-8"
                style={{ top: 0, left: 0, transform: 'none' }}
              >
                {slide.tip && (
                  <div className="tip text-base sm:text-lg md:text-xl font-medium mb-2 text-white drop-shadow">
                    {slide.tip}
                  </div>
                )}
                <div
                  className="title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow text-center"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                {slide.link && (
                  <a
                    href={slide.link}
                    className="banner-btn public-btn inline-block px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition duration-300 mt-2"
                  >
                    See More
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SolutionServiceBanner;