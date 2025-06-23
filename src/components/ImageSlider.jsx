import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slider1 from '../assets/GIDS - Home/landing-slider1.png';
import slider2 from '../assets/GIDS - Home/landing-slider2.png';
import slider3 from '../assets/GIDS - Home/landing-slider3.png';
import slider4 from '../assets/GIDS - Home/landing-slider4.png';
import slider5 from '../assets/GIDS - Home/anding-slider5.png';
import slider6 from '../assets/GIDS - Home/landing-slider6.png';
import slider7 from '../assets/GIDS - Home/taimoorair.png';

const ImageSlider = () => {
  const sliderImages = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay: advance to next image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev === sliderImages.length - 1 ? 0 : prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? sliderImages.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => prev === sliderImages.length - 1 ? 0 : prev + 1);
  };

  return (
    <section id="image-slider" className="relative w-full">
      {/* Main image container - adjust height as needed */}
      <div className="w-full h-96 md:h-[500px] lg:h-[800px] relative overflow-hidden">
        <img 
          src={sliderImages[currentIndex]} 
          alt={`Slider ${currentIndex + 1}`} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Navigation controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4">
        <button 
          onClick={goToPrevious}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        {/* Image counter */}
        <span className="text-white bg-black/30 px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {sliderImages.length}
        </span>
        
        <button 
          onClick={goToNext}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;