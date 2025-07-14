import React from 'react';
import leasingImg from '../assets/Services/IpServices/leasing_img.jpg';
import managementImg from '../assets/Services/IpServices/management_img.jpg';
import buyImg from '../assets/Services/IpServices/buy_img.jpg';
import sellingImg from '../assets/Services/IpServices/selling_img.jpg';

const IpListServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "IP Leasing Service",
      category: "IP Solutions",
      description: [
        "On-demand IP addresses",
        "Riskless IP resources",
        "Get IP addresses within 24 hours",
        "From /24 to multiple /16s"
      ],
      image: leasingImg,
      cta: "Load Now",
      link: "https://larus.net/ipv4/new"
    },
    {
      id: 2,
      title: "IP Management Service",
      category: "IP Solutions",
      description: [
        "Generate profit in zero effort",
        "1000+ partners globally",
        "Ongoing support",
        "Multilingual team support"
      ],
      image: managementImg,
      cta: "Load Now",
      link: "https://larus.net/ipv4/new"
    },
    {
      id: 3,
      title: "Buying IP Addresses",
      category: "IP Brokerage",
      description: [
        "Abundant Resources",
        "Worry-Free Transaction",
        "Ongoing Support 24/7"
      ],
      image: buyImg,
      cta: "Load Now",
      link: "https://larus.net/ipv4/new"
    },
    {
      id: 4,
      title: "Selling IP Addresses",
      category: "IP Brokerage",
      description: [
        "Monetize your IPs",
        "Save time and costs in maintaining IP",
        "Hassle-free and fast process"
      ],
      image: sellingImg,
      cta: "Load Now",
      link: "https://larus.net/ipv4/new"
    }
  ];

  return (
    <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="group backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl shadow-lg overflow-hidden transition-all hover:shadow-2xl duration-500"
          >
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:p-8 flex-grow text-white">
                <div>
                  <span className="text-sm uppercase font-medium tracking-wide text-blue-400">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {service.description.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 mt-1 text-blue-500 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base text-white/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden inline-flex items-center px-6 py-3 mt-auto text-base font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 group/button"
                >
                  {/* Glare effect */}
                  <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
                    <span className="block w-1/3 h-full bg-white/40 blur-lg opacity-0 group-hover/button:opacity-80 group-hover/button:translate-x-full transition-all duration-700 ease-out rounded-lg" style={{transform: 'skewX(-20deg)'}}></span>
                  </span>
                  <span className="mr-2 tracking-wide z-10">{service.cta}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1 z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IpListServicesSection;
