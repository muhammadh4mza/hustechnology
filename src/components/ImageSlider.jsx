import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import slider1 from '../assets/GIDS - Home/landing-slider1.png';
import slider2 from '../assets/GIDS - Home/landing-slider2.png';
import slider3 from '../assets/GIDS - Home/landing-slider3.png';
import slider4 from '../assets/GIDS - Home/landing-slider4.png';
import slider5 from '../assets/GIDS - Home/landing-slider5.png';
import slider6 from '../assets/GIDS - Home/landing-slider6.png';
import slider7 from '../assets/GIDS - Home/taimoorair.png';

const sliderImages = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7
];

const ImageSlider = () => {
  return (
    <section id="image-slider" className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={24}
        className="w-full h-72 md:h-96 lg:h-[500px]"
      >
        {sliderImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center justify-center h-full w-full bg-black rounded-xl overflow-hidden">
              <img
                src={img}
                alt={`Slider ${idx + 1}`}
                className="object-cover h-full w-full select-none"
                draggable="false"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;