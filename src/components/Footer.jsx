import footerBg from '../assets/header/Footer.webp';
import { Linkedin } from 'lucide-react';
import logo from '../assets/logo-2.png';

const Footer = () => {
  return (
    <footer 
      id="footer" 
      className="bg-gray-900 text-gray-300 pt-12 pb-8 relative" 
      style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gray-900/80 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Product Range */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white border-b border-blue-600 pb-2 inline-block">
              Product Range
            </h2>
            <ul className="space-y-2">
              {[
                { href: "/#", text: "Managed Security & IT Services" },
                { href: "/#", text: "HR Outsourcing & Consultancy Services" },
                { href: "/#", text: "IT & Software Solutions, Products Development" },
                { href: "/#", text: "Data Centers Infrastructure & Cloud Services" },
                { href: "/#", text: "Telecom & Communication Hardware" },
                { href: "/#", text: "UAV / Drone Technology Solutions" },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white border-b border-blue-600 pb-2 inline-block">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/#" 
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Our Team
                </a>
                
              </li>
              <li>
                <a 
                  href="/#" 
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                
              </li>
            </ul>
          </div>

          {/* Huscom International Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white border-b border-blue-600 pb-2 inline-block">
              Huscom International Info
            </h2>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/aboutus" 
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Stay in the Loop */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white border-b border-blue-600 pb-2 inline-block">
              Stay in the Loop
            </h2>
            <div className="darkfooter">
              <ul className="flex space-x-4">
                <li>
                  <a 
                    href="https://www.linkedin.com/company/Huscom International/?originalSubdomain=pk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-full transition-colors duration-200 inline-flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="Huscom International Logo" 
            className="h-16"
          />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-lg font-medium text-white mb-2">
            Huscom International (Pvt) Ltd
          </p>
          <p className="text-sm text-gray-400">
            All Rights Reserved © Copyright {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;