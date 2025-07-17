import React from "react";
import team1 from '../assets/Our Team/1.jpg';
import team2 from '../assets/Our Team/2.jpg';
import team3 from '../assets/Our Team/3.jpg';
import team4 from '../assets/Our Team/4.jpg';
import team5 from '../assets/Our Team/5.jpg';
import team6 from '../assets/Our Team/6.jpg';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Emma Davis",
      role: "CEO & Founder",
      image: team1,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      image: team2,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Lead Developer",
      image: team3,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "Alex Johnson",
      role: "UI/UX Designer",
      image: team4,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 5,
      name: "John Smith",
      role: "Project Manager",
      image: team5,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Olivia Brown",
      role: "QA Engineer",
      image: team6,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
  ];

  const handleSocialClick = (platform) => {
    // Implement actual social link handling
    console.log(`Clicked ${platform}`);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-50 mb-4">Our Team</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Meet the talented individuals who make our company thrive with their expertise and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative group">
                <img 
                  className="w-full h-80 object-cover"
                  src={member.image} 
                  alt={`${member.name}, ${member.role} at our company`}
                  loading="lazy"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleSocialClick('twitter')}
                      aria-label={`${member.name}'s Twitter`}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleSocialClick('linkedin')}
                      aria-label={`${member.name}'s LinkedIn`}
                      className="text-white hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleSocialClick('github')}
                      aria-label={`${member.name}'s GitHub`}
                      className="text-white hover:text-gray-800 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;