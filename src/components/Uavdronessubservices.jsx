import React from 'react';
import BonusAbusesecurity from '../assets/Services/Uavdrone/BonusAbusesecurity.jpg';
import CredentialStuffing from '../assets/Services/Uavdrone/Credential-Stuffing.jpg';
import FakeAccount from '../assets/Services/Uavdrone/Fake-Account-Creation.jpg';

const Uavdronessubservices = () => {
  const services = [
    {
      id: 1,
      title: "Credential Stuffing",
      category: "Account Takeover",
      description: [
        "Those stolen credentials? Worthless against Arkose Labs defenses. We stop credential stuffing attacks before they start."
      ],
      image: CredentialStuffing
    },
    {
      id: 2,
      title: "Loyalty Point Theft",
      category: "Account Takeover",
      description: [
        "When fraudsters target loyalty programs, they steal more than points—they erode trust."
      ],
      image: FakeAccount
    },
    {
      id: 3,
      title: "Bonus Abuse",
      category: "Fake Account Creation",
      description: [
        "When fraudsters target promotional incentives, they steal more than rewards—they erode growth."
      ],
      image: BonusAbusesecurity
    }
  ];

  return (
    <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map(service => (
          <div
            key={service.id}
            className="group backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex flex-col h-full">
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-between p-6 md:p-8 flex-grow text-white">
                <div>
                  <span className="text-sm uppercase font-medium tracking-wide text-blue-400">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.description.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 mt-1 text-blue-500 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-base text-white/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="relative overflow-hidden inline-flex items-center px-6 py-3 mt-auto text-base font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg hover:from-blue-700 hover:to-blue-600"
                >
                  <span className="mr-2 z-10">Learn More</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Uavdronessubservices;
