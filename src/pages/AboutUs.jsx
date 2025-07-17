import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import AboutUsOne from '../components/AboutUsOne'; 
import Footer from '../components/Footer';
import HuscomContent from '../components/HuscomContent';
import OurTeam from '../components/OurTeam';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Background elements with lower z-index */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800 z-0 pointer-events-none" aria-hidden="true" />
      <div className="fixed inset-0 opacity-5 z-0 pointer-events-none" aria-hidden="true">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat" />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Banner />
        <AboutUsOne />
        <HuscomContent />
        <OurTeam />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;