import React, { useRef, useEffect } from 'react';
import IntroVideo from '../assets/header/Intro.mp4';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
        } catch (error) {
          console.log("Autoplay prevented:", error);
        }
      }
    };
    
    playVideo();
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video container */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src={IntroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
          Hi TO <span className="text-[#086ad7]">HUSCOM</span> INTERNATIONAL
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 px-2 sm:px-0 drop-shadow-md">
          Your Trusted IT, Telecom, Security and Anti-Drone Products Partner. In today's fast-paced digital landscape, reliable communication and IT infrastructure are critical to your business's success.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#services"
            className="px-6 py-2 sm:px-8 sm:py-3 bg-[#086ad7] hover:bg-[#065b9a] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden glare-hover text-center text-sm sm:text-base"
          >
            Service We Provide
            <span className="glare" />
          </a>
          <a
            href="/aboutus"
            className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden glare-hover text-center text-sm sm:text-base"
          >
            Learn More
            <span className="glare" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
