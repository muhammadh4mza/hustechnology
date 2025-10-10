import React from 'react';
import Navbar from '../components/Navbar';
import SolutionServiceBanner from '../components/SolutionServiceBanner';
import SolutionsSection from '../components/SolutionsSection';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';

const UAVDroneTechnologySolution = () => {
  return (
    <div className="relative bg-[#F5F5F5] min-h-screen overflow-hidden">
      {/* Background elements with lower z-index */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 z-0" />
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat" />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <SolutionServiceBanner />
        <SolutionsSection />
        <ProductsSection />

        <Footer />
      </div>
    </div>
  );
};

export default UAVDroneTechnologySolution;
