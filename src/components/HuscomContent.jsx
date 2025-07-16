import React from 'react';
import { qualityIcon, pioneersIcon, serviceIcon, aiIcon } from '../assets/Services/icons';

const HuscomContent = () => {
  const features = [
    {
      title: "Quality Without Compromise",
      content:
        "We uphold international standards by adhering to rigorous quality frameworks. HUSCOM INTERNATIONAL earned CMMI Level 5 certification in 2006 and is SOC 2 Type I & II compliant—ensuring your data is secure and your projects meet the highest quality benchmarks.",
      icon: qualityIcon,
    },
    {
      title: "Innovation First, Always",
      content:
        "We revolutionized the asset finance and leasing sector with the first complete mobile-first digital transformation suite. HUSCOM also introduced the world’s first API-first marketplace for global finance and leasing industries.",
      icon: pioneersIcon,
    },
    {
      title: "Award-Winning Service",
      content:
        "Our dedication has earned us numerous awards for service excellence, setting benchmarks for reliability, scalability, and long-term partnerships.",
      icon: serviceIcon,
    },
    {
      title: "AI-Led Transformation",
      content:
        "Launched in 2019, our AI division has redefined how financial institutions operate—from predictive risk analysis to intelligent customer engagement. Our solutions now serve a wide range of industries beyond finance.",
      icon: aiIcon,
    },
  ];

  return (
    <div className="w-full text-white">

      {/* Expertise Intro */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Domain <span className="text-blue-400">Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Since our inception, we’ve been dedicated to delivering modern, mission-critical technology solutions for the financial services industry—particularly the global asset finance and leasing space.
            </p>
          </div>
        </div>
      </section>

      {/* Huscom Advantage */}
      <section className="py-24 bg-gray-800/40 border-t border-gray-700/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-blue-400">HUSCOM</span> Advantage
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Core strengths that define our approach to digital excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-blue-400/40 transition-shadow hover:shadow-lg hover:shadow-blue-400/10 shadow-xl"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 flex-shrink-0 bg-blue-600/10 rounded-xl flex items-center justify-center">
                    <img
                      src={feature.icon}
                      alt={`${feature.title} icon`}
                      className="w-9 h-9 object-contain opacity-90"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.content}</p>
                  </div>
                </div>
                <div className="mt-auto text-right">
                  <button className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-gray-900 to-gray-950">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-10 md:p-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-blue-400">transform</span> your business?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Unlock your potential with cutting-edge solutions from HUSCOM INTERNATIONAL. Let’s move your vision forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors w-full sm:w-auto">
                Contact Our Experts
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-lg transition-colors w-full sm:w-auto">
                View Partnerships Program
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HuscomContent;
