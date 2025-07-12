
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
    <section className="relative w-full h-screen max-h-[800px]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="banner-item relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.tip || slide.title}
                className="max-image cover-image w-full h-full object-cover"
              />
              <div
                className="banner-text absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center text-white z-10"
              >
                {slide.tip && (
                  <div className="tip text-lg md:text-xl font-medium mb-2">
                    {slide.tip}
                  </div>
                )}
                <div
                  className="title text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                {slide.link && (
                  <a
                    href={slide.link}
                    className="banner-btn public-btn inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition duration-300"
                  >
                    See More
                  </a>
                )}
              </div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SolutionServiceBanner;