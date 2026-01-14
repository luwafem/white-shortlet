import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ChevronDown, User, Phone, Crown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Residences', path: '/apartments' },
    { name: 'Collections', path: '/collections' },
    { name: 'Concierge', path: '/concierge' },
    { name: 'Experiences', path: '/experiences' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-gradient-to-r from-white via-amber-50 to-white border-b border-amber-100">
        <div className="luxury-container">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Phone className="h-3 w-3 text-amber-500" />
                <span>+234 800 888 9999</span>
              </div>
              <div className="text-xs text-gray-500">
                24/7 Concierge Service
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-xs text-gray-500 hover:text-amber-600 transition-colors">
                Private Viewings
              </button>
              <div className="h-4 w-px bg-amber-200" />
              <button className="text-xs text-gray-500 hover:text-amber-600 transition-colors">
                Investor Portal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="luxury-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
              onMouseEnter={() => setHoveredLink('logo')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full blur-md transition-opacity duration-300 ${
                  hoveredLink === 'logo' ? 'opacity-70' : 'opacity-0'
                }`} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light text-gray-900 tracking-tight">
                  NAÏA
                </span>
                <span className="text-xs text-amber-600 tracking-widest font-light uppercase">
                  Private Residences
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`relative px-6 py-3 text-sm font-light tracking-wider transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-amber-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full" />
                    )}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r from-amber-100/20 via-transparent to-amber-100/20 rounded-lg transition-all duration-300 ${
                        hoveredLink === link.name ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop Actions */}

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border border-amber-200 rounded-lg hover:border-amber-300 transition-colors"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-amber-500" />
                ) : (
                  <Menu className="h-6 w-6 text-amber-500" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-amber-100 shadow-lg">
              <div className="p-6">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`py-4 px-4 text-base font-light tracking-wide rounded-lg transition-all ${
                        isActive(link.path)
                          ? 'text-amber-600 bg-amber-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-amber-50/50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-amber-100 mt-2">
                    <button className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg hover:from-amber-200 hover:to-amber-300 transition-all border border-amber-200">
                      <Crown className="h-5 w-5 text-gray-900" />
                      <span className="text-gray-900 font-light tracking-wide">
                        Book Private Viewing
                      </span>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Ambient Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;