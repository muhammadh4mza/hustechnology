import React, { useState } from 'react';
import {
  ShieldCheck,
  Bolt,
  FlaskConical,
  Plane,
  Sparkles,
  Building2,
  Anchor
} from 'lucide-react';

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  const solutions = [
    {
      id: 1,
      title: "Account Takeover",
      content: "Account takeovers occur when unauthorized individuals gain access to user accounts, often through stolen credentials or phishing attacks.",
      link: "",
      image: "https://qiniu.mfdemo.cn/fanshuang/2024/09/24/66f25da1925bd.jpg",
      icon: ShieldCheck
    },
    {
      id: 2,
      title: "API Security",
      content: "To protect your APIs from unauthorized access, it’s essential to verify user identity through token validation.",
      link: "",
      image: "https://qiniu.mfdemo.cn/fanshuang/2024/09/23/66f137dd33ad0.jpg",
      icon: Bolt
    },
    {
      id: 3,
      title: "Fake Account Creation",
      content: "Fake accounts can exploit premium-rate SMS verifications to generate massive fraudulent charges, leaving businesses to cover the costs.",
      link: "",
      image: "https://qiniu.mfdemo.cn/fanshuang/2024/09/23/66f13a4857d74.jpg",
      icon: FlaskConical
    },
    {
      id: 4,
      title: "MFA Compromise: Reverse-proxy Phishing",
      content: "Airspace security solutions that integrate seamlessly with existing aviation safety systems.",
      link: "",
      image: "https://qiniu.mfdemo.cn/fanshuang/2024/09/23/66f13a53b41ac.jpg",
      icon: Plane
    },
    {
      id: 5,
      title: "IRSF/SMS Toll Fraud",
      content: "Maritime drone defense systems for port security and coastal protection.",
      link: "",
      image: "https://qiniu.mfdemo.cn/fanshuang/2024/09/23/66f13a7ab2c06.jpg",
      icon: Anchor
    },
    {
      id: 6,
      title: "Inventory Hoarding",
      content: "Inventory hoarding by leveraging advanced, prescriptive bot detection and mitigation technology within a unified platform. ",
      link: "",
      image: "https://qiniu.mfdemo.cn/fanshuang/2024/09/23/66f13a6b9d7ad.jpg",
      icon: Sparkles
    }
    // ,
    // {
    //   id: 7,
    //   title: "Prison",
    //   content: "Perimeter security and contraband interdiction through aerial threat detection.",
    //   link: "",
    //   image: "https://qiniu.mfdemo.cn/fanshuang/2024/09/23/66f13a6034a50.jpg",
    //   icon: Building2
    // }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16  relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
            Security Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Cutting-edge anti-drone systems tailored for your specific security needs
          </p>
        </div>

        {/* Interactive content area */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left side - 3D tab selector */}
          <div className="lg:w-2/5">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-500 h-32 flex flex-col items-center justify-center 
                    ${activeTab === index 
                      ? 'border-blue-400 bg-gray-800 shadow-lg shadow-blue-500/20' 
                      : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800/80'
                    }`}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setHoveredTab(index)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <span className="text-3xl mb-2">
                    {solution.icon && React.createElement(solution.icon, { className: "w-8 h-8 text-blue-400" })}
                  </span>
                  <span className={`font-medium transition-all duration-300 
                    ${activeTab === index ? 'text-blue-300' : 'text-gray-300'}`}>
                    {solution.title}
                  </span>
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-blue-400 transition-all duration-300 
                    ${activeTab === index ? 'w-3/4' : 'w-0'}`}></div>
                  <div className={`absolute inset-0 rounded-xl border-2 border-blue-400 opacity-0 transition-all duration-300 
                    ${hoveredTab === index && hoveredTab !== activeTab ? 'opacity-30 scale-105' : 'scale-100'}`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Content display */}
          <div className="lg:w-3/5">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-gray-700/50">
              {/* Background image with parallax effect */}
              <div className="absolute inset-0 overflow-hidden">
                {solutions.map((solution, index) => (
                  <div 
                    key={solution.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      activeTab === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      backgroundImage: `url(${solution.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: hoveredTab === index ? 'scale(1.03)' : 'scale(1)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Content overlay */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">
                      {solutions[activeTab].icon && React.createElement(solutions[activeTab].icon, { className: "w-7 h-7 text-blue-400" })}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {solutions[activeTab].title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solutions[activeTab].content}
                  </p>
                  <a 
                    href={solutions[activeTab].link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore Solution
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2">
          {solutions.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTab === index ? 'bg-blue-400 w-6' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to solution ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;