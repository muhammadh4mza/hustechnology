import React from 'react';
import { qualityIcon, pioneersIcon, serviceIcon, aiIcon } from '../assets/Services/icons';

const HuscomContent = () => {
  return (
    <div className="w-full">
      {/* Clients Section */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h5 className="text-5xl font-medium text-white">
              The world's leading brands are powered by HUSCOM INTERNATIONAL
            </h5>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="py-16 relative overflow-hidden">
        <img 
          src="http://HUSCOMINTERNATIONALtech.com/_nuxt/Main.nxragiK6.svg" 
          alt="Background" 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              Domain <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-white text-center">
              The company's core focus since its inception has been the provision of cutting-edge technology solutions for the financial services industry and specifically the global asset finance and leasing sector.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$500B+", label: "Assets managed globally" },
              { value: "200+", label: "Customers worldwide" },
              { value: "25+", label: "Years on NASDAQ: NTWK" },
              { value: "350+", label: "Successful implementations" }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-white/100 to-gray-100/60 rounded-xl p-6 shadow-lg border border-gray-100/60 hover:shadow-xl transition-all  text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h2>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why HUSCOM INTERNATIONAL Edge */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Committed to quality excellence",
                content: "To ensure its offerings are compliant to various international quality standards, HUSCOM INTERNATIONAL meticulously adheres to various quality stipulations issued by quality ensuring authorities. HUSCOM INTERNATIONAL received CMMI Level 5 Certification in 2006, the highest internationally recognized quality assurance standard for enhancing and evaluating an organization's software development processes. The company successfully achieved both SOC 2 Type 1 and SOC 2 Type 2 compliance, demonstrating the company's continued dedication to safeguarding the data of its clients and their customers.",
                icon: qualityIcon
              },
              { 
                title: "Pioneers in the industry",
                content: "We are proud to be the first to introduce a full suite of mobile-based digital transformation solutions for the global asset finance and leasing industry (formerly NFS Digital). HUSCOM INTERNATIONAL also pioneered the world's first marketplace of API-first products for the global credit, finance, and leasing industry (formerly Appex Now).",
                icon: pioneersIcon
              },
              { 
                title: "Ensured service levels",
                content: "We have received various awards and recognition for the quality of our solutions and services over the years.",
                icon: serviceIcon
              },
              { 
                title: "Harnessing the power of AI",
                content: "In 2019, HUSCOM INTERNATIONAL embarked on a groundbreaking journey, establishing its AI division with the vision to utilize the power of AI to revolutionize how institutions navigate the complexities of the modern market. Today, we stand proud as leaders in the realm of AI-powered innovation, reshaping the financial services landscape. From risk assessment to customer engagement, our AI solutions empower our partners to stay ahead in an ever-evolving industry. We now cater to a diverse range of other sectors as well.",
                icon: aiIcon
              }
            ].map((item, index) => (
              <li key={index} className="bg-gradient-to-br from-white/100 to-gray-100/60 rounded-xl p-6 shadow-lg border border-gray-100/60 hover:shadow-xl transition-all glare-hover">
                <span className="glare" />
                <div className="flex">
                  <div className="flex-1">
                    <h4 className="text-4xl text-blue-600 font-bold mb-4">{item.title}</h4>
                    <p className="text-gray-600 mb-4">{item.content}</p>
                  </div>
                  <div className="ml-4 w-28 h-28 flex-shrink-0 opacity-20">
                    <img src={item.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HuscomContent;