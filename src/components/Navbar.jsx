import { useState, useEffect, useRef } from 'react';
import { Twitter, Linkedin, Youtube, Instagram, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo-2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
                ref={dropdownRef}
                onMouseEnter={() => setOpenDropdown('Solutions & Services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-blue-400 hover:bg-white/10 transition-all flex items-center group focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'Solutions & Services'}
                >
                  Solutions & Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === 'Solutions & Services' ? 'rotate-180 text-blue-400' : 'text-white/70 group-hover:text-blue-400'}`} />
                </button>
                {/* Dropdown menu */}
                <div
                  className={`absolute left-0 mt-2 w-64 origin-top-left rounded-lg bg-white shadow-xl ring-1 ring-black/5 focus:outline-none z-50 animate-fadeIn transition-all duration-200 ${openDropdown === 'Solutions & Services' ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
                  style={{ top: '100%' }}
                >
                  <div className="py-1">
                    {[
                      { href: "/ip-services", text: "IP services" },
                      { href: "#", text: "HR Outsourcing & Consultancy Services" },
                      { href: "#", text: "IT & Software Solutions, Products Development" },
                      { href: "#", text: "Stormwall Network" },
                      { href: "#", text: "Telecom & Communication Hardware" },
                      { href: "/uav-drone-technology-solution", text: "UAV / Drone Technology Solutions" }
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all border-b border-gray-100 last:border-0"
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

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
                className="relative px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all flex items-center"
              >
                Login
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
                  className={`p-2 text-white/80 rounded-full hover:text-white ${social.color} transition-all`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-white/10 focus:outline-none transition-all"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-gradient-to-b from-black to-gray-900/95 backdrop-blur-sm">
          <img 
            src="http://huscomintl.com/assets/img/logo-2.png" 
            className="h-14 mx-auto my-4" 
            alt="Mobile Logo"
          />

          {/* Mobile Dropdowns */}
          <div className="border-t border-white/10 pt-2">
            <a
              href="/"
              className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-blue-400 hover:bg-white/10 transition-all"
            >
              Home
            </a>

            {/* Mobile Solutions Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobileSolutions')}
                className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-white hover:text-blue-400 hover:bg-white/10 transition-all"
              >
                Solutions & Services
                <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === 'mobileSolutions' ? 'rotate-180 text-blue-400' : 'text-white/70'}`} />
              </button>
              {openDropdown === 'mobileSolutions' && (
                <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                  {[
                    { href: "#", text: "Managed Security & IT Services" },
                    { href: "#", text: "HR Outsourcing & Consultancy" },
                    { href: "#", text: "IT & Software Solutions" },
                    { href: "#", text: "Data Centers & Cloud Services" },
                    { href: "#", text: "Telecom Hardware" },
                    { href: "#", text: "Drone Technology Solutions" },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 rounded-lg text-base font-medium text-white/80 hover:text-blue-400 hover:bg-white/5 transition-all"
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {[
              { href: "#", text: "Products" },
              { href: "/aboutus", text: "About Us" },
              { href: "#", text: "Contact Us" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-blue-400 hover:bg-white/10 transition-all"
              >
                {item.text}
              </a>
            ))}

            <div className="pt-2 border-t border-white/10">
              <a
                href="https://huscomintl.com/webmail"
                className="block px-4 py-3 rounded-lg text-base font-medium text-center text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all"
              >
                Login
              </a>
            </div>

            <div className="flex justify-center space-x-6 pt-4">
              {[
                { icon: Twitter, href: "https://twitter.com/", color: "text-blue-400 hover:text-blue-300" },
                { icon: Linkedin, href: "https://linkedin.com/", color: "text-blue-500 hover:text-blue-400" },
                { icon: Youtube, href: "https://youtube.com/", color: "text-red-500 hover:text-red-400" },
                { icon: Instagram, href: "https://instagram.com/", color: "text-pink-500 hover:text-pink-400" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-colors`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>

            <p className="text-xs text-white/50 text-center mt-6 pb-2">
              © {new Date().getFullYear()} Huscom International. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;