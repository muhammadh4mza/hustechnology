import React, { useRef, useEffect } from 'react';
import IntroVideo from '../assets/header/Intro.mp4';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to autoplay the video when component mounts
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true; // Ensure muted for autoplay
          await videoRef.current.play();
        } catch (error) {
          console.log("Autoplay prevented:", error);
        }
      }
    };
    
    playVideo();
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video container */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          muted
          loop
          poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        >
          <source src={IntroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1000px] px-5">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg text-uppercase">
          WELCOME TO <span className="text-[#086ad7]">HUSCOM</span> INTERNATIONAL
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Your Trusted IT and Telecom Solutions Partner. In today’s fast-paced digital landscape, reliable communication and IT infrastructure are critical to your business's success. At HUSCOM International, we specialize in providing comprehensive IT and telecom services that help businesses stay connected, secure, and ahead of the competition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#086ad7] hover:bg-[#065b9a] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden glare-hover">
            Service We Provide
            <span className="glare" />
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden glare-hover">
            Learn More
            <span className="glare" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;