import { useState, useEffect } from 'react';
import { Twitter, Linkedin, Youtube, Instagram, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo-2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownState, setDropdownState] = useState({ parent: null, child: null });

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optional: delay closing to prevent flicker
  let closeTimeout;

  const handleParentEnter = (name) => {
    clearTimeout(closeTimeout);
    setDropdownState({ parent: name, child: null });
  };

  const handleParentLeave = () => {
    closeTimeout = setTimeout(() => {
      setDropdownState({ parent: null, child: null });
    }, 200);
  };

  const handleChildEnter = (name) => {
    clearTimeout(closeTimeout);
    setDropdownState(prev => ({ ...prev, child: name }));
  };

  const handleChildLeave = () => {
    closeTimeout = setTimeout(() => {
      setDropdownState(prev => ({ ...prev, child: null }));
    }, 200);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg py-2' : 'bg-black/90 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className={`transition-all duration-300 hover:scale-105 ${scrolled ? 'h-14' : 'h-16'}`}
                alt="Huscom Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex space-x-1">
              {/* Solutions & Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleParentEnter('Solutions')}
                onMouseLeave={handleParentLeave}
              >
                <button
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-blue-400 hover:bg-white/10 flex items-center group transition-all"
                >
                  Solutions & Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownState.parent === 'Solutions' ? 'rotate-180 text-blue-400' : 'text-white/70 group-hover:text-blue-400'}`} />
                </button>

                {dropdownState.parent === 'Solutions' && (
                  <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-xl ring-1 ring-black/5 z-50 transition-all duration-200">
                    <div className="py-1">
                      {/* IP Services Nested Dropdown */}
                      <div
                        className="relative"
                        onMouseEnter={() => handleChildEnter('IP Services')}
                        onMouseLeave={handleChildLeave}
                      >
                        <a
                          href="/ip-services"
                          className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b"
                          style={{ textDecoration: 'none' }}
                        >
                          IP Services
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${dropdownState.child === 'IP Services' ? 'rotate-180 text-blue-400' : 'text-gray-400'}`} />
                        </a>

                        {dropdownState.child === 'IP Services' && (
                          <div className="absolute left-full top-0 ml-1 w-56 rounded-lg bg-white shadow-xl ring-1 ring-black/5 z-50">
                            <div className="py-1">
                              {[
                                { href: "/ip-services/lease", text: "Lease IPV4" },
                                { href: "/ip-services/manage", text: "Manage IPV4" },
                                { href: "/ip-services/buy", text: "Buy IPV4" },
                                { href: "/ip-services/sell", text: "Sell IPV4" }
                              ].map((item, idx) => (
                                <a
                                  key={idx}
                                  href={item.href}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b last:border-0"
                                >
                                  {item.text}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Other Dropdown Items */}
                      {[
                        // { href: "#", text: "HR Outsourcing & Consultancy Services" },
                        // { href: "#", text: "IT & Software Solutions, Products Development" },
                        { href: "#", text: "Stormwall Network" },
                        { href: "#", text: "Telecom & Communication Hardware" },
                        { href: "/uav-drone-technology-solution", text: "UAV / Drone Technology Solutions" }
                      ].map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b last:border-0"
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Static Links */}
              {[
                { href: "#", text: "Partnership Program" },
                { href: "#", text: "Products" },
                { href: "/aboutus", text: "About Us" },
                { href: "", text: "Contact Us" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-blue-400 hover:bg-white/10 transition-all"
                >
                  {item.text}
                </a>
              ))}
            </div>

            {/* Login Button */}
            <div className="relative group ml-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <a
                href="http://huscomintl.com/webmail"
                className="relative px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all flex items-center overflow-hidden"
              >
                {/* Glare effect */}
                <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
                  <span className="block w-1/3 h-full bg-white/40 blur-lg opacity-0 group-hover:opacity-80 group-hover:translate-x-full transition-all duration-700 ease-out rounded-lg" style={{transform: 'skewX(-20deg)'}}></span>
                </span>
                <span className="relative z-10">Login</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="ml-4 flex space-x-2">
              {[
                { icon: Twitter, href: "https://twitter.com/", color: "hover:bg-blue-400/20 hover:text-blue-400" },
                { icon: Linkedin, href: "https://linkedin.com/", color: "hover:bg-blue-600/20 hover:text-blue-600" },
                { icon: Youtube, href: "https://youtube.com/", color: "hover:bg-red-500/20 hover:text-red-500" },
                { icon: Instagram, href: "https://instagram.com/", color: "hover:bg-pink-500/20 hover:text-pink-500" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 text-white/80 rounded-full transition-all ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-white/10 focus:outline-none transition-all"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
