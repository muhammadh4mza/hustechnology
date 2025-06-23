import React, { useEffect, useRef } from 'react';
import arrowup from '../assets/arrowup.png';

const WhatSetsApart = () => {
  const containerRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (lightRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const y = e.clientY - containerRect.top;
        
        lightRef.current.style.left = `${x}px`;
        lightRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="what_Huscom International" 
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
      ref={containerRef}
    >
      {/* Dynamic Halogen Light Effect */}
      <div 
        ref={lightRef}
        className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-0 blur-[100px] pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0) 70%)'
        }}
      />
      
      {/* Animated Light Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-blue-400 rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2 text-center tracking-tight drop-shadow-sm">
          What sets
        </h2>
        <div className="flex items-center justify-center mb-8 group">
          <img 
            src={arrowup} 
            alt="Arrow pointing up" 
            className="h-10 w-10 md:h-14 md:w-14 mr-3 animate-bounce transition-transform group-hover:scale-110 select-none"
            draggable="false"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(59,130,246,0.15))' }}
          />
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm group-hover:text-blue-600 transition-colors">
            Huscom International Apart?
          </h2>
        </div>

        {/* Tank image and details section */}
        <div className="mt-1 relative flex flex-col items-center">
          <div className="text-center max-w-2xl mx-auto relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500 -z-10" />
            
            <p className="text-gray-700 text-lg leading-relaxed relative z-10">
              Huscom International is committed to enhancing its presence in local industrial and corporate sectors by offering advanced technological products for niche markets. The company focuses on promoting self-reliance through indigenous technology, leveraging state-of-the-art machinery, equipment, and highly skilled expertise available in its manufacturing units to fulfill the diverse needs of its customers.
            </p>
            <button className="mt-8 px-8 py-2 border-2 border-blue-600 text-blue-700 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 relative overflow-hidden glare-hover">
              <span className="relative z-10">Indigenous Technology</span>
              <span className="glare" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-2xl -z-10 animate-pulse" style={{top: '-6rem', left: '-6rem'}} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" style={{bottom: '-8rem', right: '-8rem'}} />

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhatSetsApart;