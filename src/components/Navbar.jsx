import { useState, useEffect, useRef } from 'react';
import {
  Twitter, Linkedin, Youtube, Instagram, ChevronDown, Menu, X
} from 'lucide-react';
import logo from '../assets/logo-2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeDropdowns, setActiveDropdowns] = useState([]);
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    { href: '#', text: 'Partnership Program' },
    { href: '#', text: 'Products' },
    { href: '/aboutus', text: 'About Us' },
    { href: '/contact-us', text: 'Contact Us' }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/', label: 'Instagram' }
  ];

  const dropdownItems = [
    {
      title: 'IP Services',
      href: '/ip-services',
      subItems: [
        { href: '/ip-services/lease', text: 'Lease IPV4' },
        { href: '/ip-services/manage', text: 'Manage IPV4' },
        { href: '/ip-services/buy', text: 'Buy IPV4' },
        { href: '/ip-services/sell', text: 'Sell IPV4' }
      ]
    },
    { href: '/stormwallnetwork', text: 'Stormwall Network' },
    { href: '/telecom-communication-hardware', text: 'Telecom & Communication Hardware' },
    { href: '/uav-drone-technology-solution', text: 'UAV / Drone Technology Solutions' }
  ];

  const handleMouseEnterDropdown = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      setActiveDropdown(null);
    }, 300);
  };

  const handleMouseEnterSubmenu = (index) => {
    clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeaveSubmenu = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleMobileDropdownToggle = (index) => {
    setActiveDropdowns(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg py-2' : 'bg-black/90 backdrop-blur-sm py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className={`transition-all duration-300 hover:scale-105 ${scrolled ? 'h-14' : 'h-16'}`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <button
              className="flex items-center px-4 py-2 text-sm font-medium text-white hover:text-blue-400 hover:bg-white/10 rounded-lg transition-colors"
            >
              Solutions & Services
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180 text-blue-400' : 'text-white/70'}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-xl ring-1 ring-black/5 z-50">
                <div className="py-1">
                  {dropdownItems.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="relative group"
                      onMouseEnter={() => handleMouseEnterSubmenu(idx)}
                      onMouseLeave={handleMouseLeaveSubmenu}
                    >
                      <a
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3 text-sm ${
                          activeDropdown === idx
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        } border-b transition-colors`}
                      >
                        {item.text || item.title}
                        {item.subItems && (
                          <ChevronDown className="h-4 w-4 ml-auto text-gray-400 group-hover:text-blue-400" />
                        )}
                      </a>
                      {item.subItems && activeDropdown === idx && (
                        <div 
                          className="absolute left-full top-0 ml-1 w-56 rounded-lg bg-white shadow-xl ring-1 ring-black/5 z-50"
                          onMouseEnter={() => handleMouseEnterSubmenu(idx)}
                          onMouseLeave={handleMouseLeaveSubmenu}
                        >
                          <div className="py-1">
                            {item.subItems.map((sub, sIdx) => (
                              <a
                                key={sIdx}
                                href={sub.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b last:border-0 transition-colors"
                              >
                                {sub.text}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {menuLinks.map(({ href, text }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-blue-400 hover:bg-white/10 transition-colors"
            >
              {text}
            </a>
          ))}

          <div className="flex space-x-2 ml-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-white/80 rounded-full transition hover:bg-white/10 hover:text-blue-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-md transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-black px-4 pb-6 pt-2 space-y-2">
          {/* Solutions & Services - Expandable Section */}
          <div>
            <button
              onClick={() => handleMobileDropdownToggle('solutions')}
              className="w-full text-left flex justify-between items-center text-white font-semibold py-2 hover:text-blue-400"
            >
              <span>Solutions & Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  activeDropdowns.includes('solutions') ? 'rotate-180 text-blue-400' : ''
                }`}
              />
            </button>

            <div className={`${activeDropdowns.includes('solutions') ? 'block' : 'hidden'} pl-2 mt-2 space-y-2`}>
              {dropdownItems.map((item, idx) => {
                const isActive = activeDropdowns.includes(idx);
                const hasSubItems = item.subItems && item.subItems.length > 0;
                
                return (
                  <div key={idx} className="border-b border-white/10 last:border-0 pb-2 last:pb-0">
                    <div className="flex items-center justify-between">
                      <a
                        href={hasSubItems ? '#' : item.href}
                        className={`text-white py-2 hover:text-blue-400 ${
                          hasSubItems ? 'pointer-events-none' : ''
                        }`}
                        onClick={(e) => {
                          if (hasSubItems) {
                            e.preventDefault();
                          } else {
                            setIsOpen(false);
                          }
                        }}
                      >
                        {item.text || item.title}
                      </a>
                      {hasSubItems && (
                        <button
                          onClick={() => handleMobileDropdownToggle(idx)}
                          className="p-2 text-white/70 hover:text-blue-400"
                          aria-label={`Toggle ${item.title} dropdown`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isActive ? 'rotate-180 text-blue-400' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {hasSubItems && isActive && (
                      <div className="ml-4 space-y-2 mt-1">
                        {item.subItems.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.href}
                            className="block text-white/80 text-sm py-1.5 hover:text-blue-400 pl-2 border-l border-white/10"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Links */}
          <div className="pt-4 space-y-2 border-t border-white/10 mt-4">
            {menuLinks.map(({ href, text }) => (
              <a
                key={href}
                href={href}
                className="block text-white py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {text}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 pt-4 border-t border-white/10">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 hover:text-blue-400 transition-colors"
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