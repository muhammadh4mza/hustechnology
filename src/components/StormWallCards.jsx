import React from 'react';
import { ArrowRight, Globe, Network, Server } from 'lucide-react';

const HuscomintlServices = [
  {
    icon: <Globe size={56} className="text-blue-600 bg-white rounded-full p-2" />, // Web
    title: <>Huscomintl <br /><span className="text-blue-600 font-bold">for Web</span></>,
    description: "Powerful solution to make sure your business-crucial web applications are always accessible during even the most severe DDoS attacks.",
    worksFor: ["Retail", "E-commerce", "Government", "Media", "Banking", "Entertainment, etc"],
    link: "/contact-us",
    linkLabel: "Huscomintl for Web"
  },
  {
    icon: <Network size={56} className="text-blue-600 bg-white rounded-full p-2" />, // Networks
    title: <>Huscomintl <br /><span className="text-blue-600 font-bold">for Networks</span></>,
    description: "Best-in-class network protection to ensure stable operation of your network and secure your business from unforeseen disruptions.",
    worksFor: [
      "ISPs", "Telecom", "Data Centers", "Hosting and Cloud Service Providers", "Large companies with internal networks"
    ],
    link: "/contact-us",
    linkLabel: "Huscomintl for Networks"
  },
  {
    icon: <Server size={56} className="text-blue-600 bg-white rounded-full p-2" />, // Servers
    title: <>Huscomintl <br /><span className="text-blue-600 font-bold">for Servers</span></>,
    description: "Keep your TCP/UDP services operational and safe from the most modern and complex DDoS attacks.",
    worksFor: ["Gaming", "IP telephony, etc"],
    link: "/contact-us",
    linkLabel: "Huscomintl for Servers"
  }
];

const HuscomintlCards = () => (
  <div className="w-full flex flex-col items-center py-12">
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
      {HuscomintlServices.map((service, idx) => (
        <div
          key={idx}
          className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 flex-1 min-w-[320px] max-w-lg mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            {service.icon}
            <div className="text-2xl font-bold text-white leading-tight" style={{ fontFamily: 'Gilroyf, sans-serif' }}>
              {service.title}
            </div>
          </div>
          <div className="text-base text-white/90 mb-6" style={{ lineHeight: '1.6' }}>
            {service.description}
          </div>
          <div className="font-semibold text-white mb-2" style={{ fontFamily: 'Gilroy, sans-serif' }}>Works for:</div>
          <ul className="mb-6 space-y-2">
            {service.worksFor.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-400" />
                <span className="text-base text-white">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={service.link}
            aria-label={service.linkLabel}
            className="mt-auto flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Learn more
            <ArrowRight size={24} className="w-6 h-6" />
          </a>
        </div>
      ))}
    </div>
    <button
      className="mt-14 px-8 py-4 bg-blue-800 hover:bg-blue-600 text-white font-bold rounded-lg text-lg shadow-lg transition"
      onClick={() => window.open('/contact-us', '_blank')}
      style={{ margin: '56px auto 0 auto' }}
    >
      Activate Protection
    </button>
  </div>
);

export default HuscomintlCards;