import React from 'react';
import { 
  ShieldCheck, 
  Server, 
  Wifi, 
  Siren,
  ArrowRight 
} from 'lucide-react';

const categories = [
  {
    name: "IP Services",
    description: "Comprehensive intellectual property protection and management solutions",
    icon: <ShieldCheck className="h-16 w-16 mx-auto text-white group-hover:text-white transition-colors duration-300" />,
    url: "/ip-services",
    accent: "from-white/40 to-white/40",
    bgColor: "bg-white-50"
  },
  {
    name: "DDoS Protection",
    description: "DDoS protection is a security measure designed to safeguard servers, websites, and networks",
    icon: <Server className="h-16 w-16 mx-auto text-white group-hover:text-white transition-colors duration-300" />,
    url: "#",
    accent: "from-white/40 to-white/40",
    bgColor: "bg-white-50"
  },
  {
    name: "Telecom & Communication Hardware",
    description: "Cutting-edge communication devices and infrastructure",
    icon: <Wifi className="h-16 w-16 mx-auto text-white group-hover:text-white transition-colors duration-300" />,
    url: "/telecom-communication-hardware",
    accent: "from-white/40 to-white/40",
    bgColor: "bg-white-50"
  },
  {
    name: "Security Solutions",
    description: "Advanced unmanned aerial vehicle solutions",
    icon: <Siren className="h-16 w-16 mx-auto text-white group-hover:text-white transition-colors duration-300" />,
    url: "security-solutions",
    accent: "from-white/40 to-white/40",
    bgColor: "bg-white-50"
  }
];

const ServiceCard = ({ category }) => {
  return (
    <a 
      href={category.url} 
      className={`block group relative h-full min-h-[340px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[400px] rounded-xl overflow-hidden transition-all duration-300 hover:z-10 hover:shadow-xl ${category.bgColor}`}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-90 transition-all duration-300 group-hover:opacity-95`}></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMEg0MFY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBINDBWNDBIMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-between p-4 sm:p-5 md:p-6 text-center z-10">
        {/* Icon with floating effect */}
        <div className="mt-6 mb-4 sm:mt-8 sm:mb-6 p-3 sm:p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/20 group-hover:shadow-md">
          {category.icon}
        </div>
        
        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center px-1 sm:px-2">
          <h2 className="text-3xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 transition-transform duration-300 group-hover:-translate-y-1">
            {category.name}
          </h2>
          <p className="text-white/80 text-xs sm:text-sm mb-4 sm:mb-6 transition-transform duration-300 group-hover:-translate-y-1">
            {category.description}
          </p>
        </div>
        
        {/* Button */}
        <div className="mb-4 sm:mb-6">
          <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm transition-all duration-300 group-hover:bg-white/20 group-hover:px-7">
            <span className="font-medium">Explore</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Edge glow effect */}
        <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300 pointer-events-none"></div>
      </div>
    </a>
  );
};

const Service = () => {
  return (
    <section id="services" className="py-10 sm:py-14 md:py-16 w-full relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 w-full relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-white ">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {categories.map((category, index) => (
            <ServiceCard key={index} category={category} />
          ))}
        </div>
        
        {/* CTA */}
        {/* <div className="mt-10 sm:mt-14 md:mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Service;