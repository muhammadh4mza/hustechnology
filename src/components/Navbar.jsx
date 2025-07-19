import { useState, useEffect, useRef } from 'react';
import {
  Twitter, Linkedin, Youtube, Instagram, ChevronDown, Menu, X
} from 'lucide-react';
import logo from '../assets/logo-2.png';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedItems, setExpandedItems] = useState([]);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setActiveDropdown(null);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && 
          !event.target.closest('.mobile-menu-button')) {
        setSidebarOpen(false);
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
    { href: '/', text: 'Home' }, // Home is now first
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleExpandedItem = (index) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
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
            {/* Home Link - Separate from other menu links */}
            <a
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:text-blue-400 hover:bg-white/10 transition-colors"
            >
              Home
            </a>

            {/* Solutions Dropdown */}
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

            {/* Other Menu Links (excluding Home) */}
            {menuLinks.slice(1).map(({ href, text }) => (
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleSidebar}
              className="mobile-menu-button p-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-md transition"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        ref={sidebarRef}
        className={`fixed inset-y-0 right-0 w-80 bg-black/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleSidebar}
              className="p-2 text-white hover:text-blue-400 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {/* Home Link - At the top of mobile menu */}
          <a
            href="/"
            className="text-white/90 hover:text-blue-400 py-3 px-2 rounded-lg transition-colors text-lg font-medium mb-4"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </a>

          {/* Solutions & Services Section */}
          <div className="mb-0">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-white text-lg font-semibold">Solutions & Services</h3>
              <button
                onClick={() => toggleExpandedItem('solutions')}
                className="p-2 text-white/70 hover:text-blue-400"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedItems.includes('solutions') ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            
            {expandedItems.includes('solutions') && (
              <ul className="space-y-2">
                {dropdownItems.map((item, idx) => (
                  <li key={idx}>
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        className="text-white/90 hover:text-blue-400 py-2 px-2 rounded-lg transition-colors flex-grow"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.text || item.title}
                      </a>
                      {item.subItems && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleExpandedItem(idx);
                          }}
                          className="p-2 text-white/70 hover:text-blue-400"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              expandedItems.includes(idx) ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {item.subItems && expandedItems.includes(idx) && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <a
                              href={sub.href}
                              className="block text-white/70 hover:text-blue-400 py-1.5 px-2 rounded-lg transition-colors text-sm"
                              onClick={() => setSidebarOpen(false)}
                            >
                              {sub.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Other Main Links (excluding Home) */}
          <div className="mb-6">
            <ul className="space-y-2">
              {menuLinks.slice(1).map(({ href, text }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block text-white/90 hover:text-blue-400 py-2 px-2 rounded-lg transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="mt-auto pt-6 border-t border-white/10">
            <h3 className="text-white text-lg font-semibold mb-4 px-2">Connect With Us</h3>
            <div className="flex space-x-4 px-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/80 hover:text-blue-400 transition-colors p-2"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Navbar;