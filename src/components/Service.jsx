import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Code2, 
  Server, 
  Wifi, 
  Plane, 
  // ArrowRight 
} from 'lucide-react';
// import Particles from '../assets/Services/particles.gif';

const categories = [
  {
    name: "Managed Security & IT Services ",
    icon: <ShieldCheck className="h-20 w-20 mx-auto text-white group-hover:text-white transition-colors duration-500" />,
    url: "#",
    accent: "from-white/40 to-gray-100/60"
  },
  {
    name: "HR Outsourcing & Consultancy Services",
    icon: <Users className="h-20 w-20 mx-auto text-white group-hover:text-white transition-colors duration-500" />,
    url: "#",
    accent: "from-white/40 to-gray-100/60"
  },
  {
    name: "IT & Software Solutions, Products Development",
    icon: <Code2 className="h-20 w-20 mx-auto text-white group-hover:text-white transition-colors duration-500" />,
    url: "#",
    accent: "from-white/40 to-gray-100/60"
  },
  {
    name: "Data Centers Infrastructure & Cloud Services",
    icon: <Server className="h-20 w-20 mx-auto text-white group-hover:text-white transition-colors duration-500" />,
    url: "#",
    accent: "from-white/40 to-gray-100/60"
  },
  {
    name: "Telecom & Communication Hardware",
    icon: <Wifi className="h-20 w-20 mx-auto text-white group-hover:text-white transition-colors duration-500" />,
    url: "#",
    accent: "from-white/40 to-gray-100/60"
  },
  {
    name: "UAV / Drone Technology Solutions",
    icon: <Plane className="h-16 w-16 text-white group-hover:text-white transition-colors" />,
    url: "#",
    accent: "from-white/40 to-gray-100/60"
  }
];

const Service = () => {
  return (
    <section id="companies" className="py-10 w-full flex items-center min-h-screen relative">
      {/* Particles background */}
      {/* <img 
        src={Particles} 
        alt="particles background" 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none" 
        style={{opacity: 0.25}}
      /> */}
      <div className="max-w-[1920px] mx-auto px-1 w-full relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-1 w-full">
          {categories.map((category, index) => (
            <a 
              href={category.url} 
              key={index} 
              className="block group relative h-[500px] rounded-2xl overflow-hidden transition-all duration-500 hover:z-10 hover:shadow-2xl glare-hover"
            >
              {/* Background with dynamic gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} transition-all duration-700 group-hover:opacity-95`}></div>
              
              {/* Floating grid pattern */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMEg0MFY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBINDBWNDBIMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
              </div>
              
              {/* Content container */}
              <div className="relative h-full flex flex-col items-center justify-between p-6 text-center z-10">
                {/* Animated icon with floating effect */}
                <div className="mt-12 mb-8 p-5 bg-white/10 rounded-full backdrop-blur-lg border border-white/20 transition-all duration-500 group-hover:-translate-y-3 group-hover:bg-white/20 group-hover:shadow-lg">
                  {category.icon}
                </div>
                
                {/* Text with floating effect */}
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-white px-4 transition-transform duration-500 group-hover:-translate-y-2">
                    {category.name.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h2>
                </div>
                
                {/* Animated button with ripple effect */}
                <div className="mb-8 relative overflow-hidden rounded-full glare-hover">
                  <button className="relative z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:w-16 group-hover:h-16 group-hover:bg-white/30">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-7 h-7 text-white group-hover:text-blue-600 transition-colors"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                    </svg>
                    <span className="glare" />
                  </button>
                </div>
                
                {/* Edge glow effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500 pointer-events-none"></div>
              </div>
              
              {/* Hover elevation effect */}
              <div className="absolute inset-0 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 1s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Service;