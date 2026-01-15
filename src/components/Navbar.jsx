import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Crown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Residences', path: '/apartments' },
    { name: 'Collections', path: '/collections' },
    { name: 'Concierge', path: '/concierge' },
    { name: 'Experiences', path: '/experiences' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Ultra-Minimal Top Bar */}
      

      {/* Main Navbar */}
      <nav 
        className={`fixed top-0 md:top-auto w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl py-4 shadow-2xl' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo: Serif focus */}
            <Link to="/" className="flex flex-col group">
              <span className="text-2xl md:text-3xl font-serif italic text-white tracking-tight leading-none">
                Mabel's
              </span>
              <span className="text-[8px] tracking-[0.5em] uppercase text-amber-500/80 font-medium">
                Sojorun
              </span>
            </Link>

            {/* Desktop Navigation: Spaced and light */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                    isActive(link.path) ? 'text-amber-500' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* High-End Action: Bordered button */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-[10px] tracking-[0.3em] uppercase text-white border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-medium">
                Book a Visit
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu: Full-screen overlay style */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-700 lg:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`} style={{ top: '0', zIndex: -1 }}>
          <div className="flex flex-col items-center justify-center h-screen space-y-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-serif italic text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-8 flex items-center space-x-3 text-amber-500 uppercase tracking-[0.3em] text-xs border border-amber-500/30 px-8 py-4">
              <Crown className="h-4 w-4" />
              <span>Membership</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;