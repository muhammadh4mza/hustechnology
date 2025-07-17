import { useState, useEffect } from 'react';
import {
  Twitter, Linkedin, Youtube, Instagram, ChevronDown, Menu, X
} from 'lucide-react';
import logo from '../assets/logo-2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownState, setDropdownState] = useState({ parent: null, child: null });

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const menuLinks = [
    { href: '/partnership-program', text: 'Partnership Program' },
    { href: '/products', text: 'Products' },
    { href: '/aboutus', text: 'About Us' },
    { href: '/contact', text: 'Contact Us' }
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/", label: 'Twitter' },
    { icon: Linkedin, href: "https://linkedin.com/", label: 'LinkedIn' },
    { icon: Youtube, href: "https://youtube.com/", label: 'YouTube' },
    { icon: Instagram, href: "https://instagram.com/", label: 'Instagram' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg py-2' : 'bg-black/90 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className={`transition-all duration-300 hover:scale-105 ${scrolled ? 'h-14' : 'h-16'}`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleParentEnter('Solutions')}
            onMouseLeave={handleParentLeave}
          >
            <button
              className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-blue-400 hover:bg-white/10 flex items-center group transition-all"
            >
              Solutions & Services
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${
                  dropdownState.parent === 'Solutions' ? 'rotate-180 text-blue-400' : 'text-white/70 group-hover:text-blue-400'
                }`}
              />
            </button>

            {dropdownState.parent === 'Solutions' && (
              <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-xl ring-1 ring-black/5 z-50">
                <div className="py-1">
                  {/* Nested Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => handleChildEnter('IP Services')}
                    onMouseLeave={handleChildLeave}
                  >
                    <a
                      href="/ip-services"
                      className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b"
                    >
                      IP Services
                      <ChevronDown
                        className={`ml-auto h-4 w-4 transition-transform ${
                          dropdownState.child === 'IP Services' ? 'rotate-180 text-blue-400' : 'text-gray-400'
                        }`}
                      />
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

                  {[
                    { href: "/stormwallnetwork", text: "Stormwall Network" },
                    { href: "/telecom-communication-hardware", text: "Telecom & Communication Hardware" },
                    { href: "/uav-drone-technology-solution", text: "UAV / Drone Technology Solutions" },
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

          {/* Static Links */}
          {menuLinks.map(({ href, text }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-blue-400 hover:bg-white/10 transition"
            >
              {text}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-2 ml-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-white/80 rounded-full transition hover:bg-white/10"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="p-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-md transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-6 pt-2 space-y-2">
          <a href="/ip-services" className="block text-white py-2">IP Services</a>
          <a href="/stormwallnetwork" className="block text-white py-2">Stormwall Network</a>
          <a href="/telecom-communication-hardware" className="block text-white py-2">Telecom Hardware</a>
          <a href="/uav-drone-technology-solution" className="block text-white py-2">Drone Tech Solutions</a>
          {menuLinks.map(({ href, text }) => (
            <a key={href} href={href} className="block text-white py-2">{text}</a>
          ))}
          <div className="flex space-x-4 mt-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 hover:text-blue-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
