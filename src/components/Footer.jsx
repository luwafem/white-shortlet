import React from 'react';
import { 
  Phone, Mail, MapPin, Shield, Globe, Lock, 
  Instagram, Facebook, Twitter, Linkedin, ArrowUpRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-stone-900 text-stone-400 pt-24 pb-12 overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="mb-10">
              <span className="text-3xl font-serif italic text-white tracking-tighter block mb-2">Mabel's</span>
              <span className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold">Sojourn</span>
            </div>
            <p className="text-lg font-light leading-relaxed text-stone-300 max-w-md mb-10">
              Defining the new standard of hospitality across West Africa’s most prestigious postcodes.
            </p>
            
            {/* Trust Badges: Minimalist */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest">
                <Shield strokeWidth={1} className="h-4 w-4 text-amber-600" />
                <span>Verified Portfolios</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest">
                <Lock strokeWidth={1} className="h-4 w-4 text-amber-600" />
                <span>Encrypted Booking</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-8">
            <h3 className="text-white text-sm font-bold tracking-[0.3em] uppercase mb-8">The Insider List</h3>
            <p className="text-sm font-light mb-8">Join our private circle for early access to new residence launches and curated cultural experiences.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-stone-700 py-4 focus:outline-none focus:border-amber-600 transition-colors text-white font-light placeholder:text-stone-600"
              />
              <button className="absolute right-0 bottom-4 text-amber-500 group-hover:translate-x-2 transition-transform duration-500">
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Navigation & Locations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20 border-t border-stone-800">
          <div>
            <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">Discovery</h4>
            <ul className="space-y-4 text-sm font-light">
              {['The Collection', 'Signature Suites', 'Private Concierge', 'Corporate Stays'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">Destinations</h4>
            <ul className="space-y-4 text-sm font-light">
              {['Victoria Island, LA', 'Maitama, ABJ', 'Old GRA, PH', 'Enugu Golf Course'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-light">
              {['Our Story', 'Partnerships', 'Careers', 'Press Room'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">Reach Us</h4>
            <div className="space-y-6 text-sm font-light">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <Phone className="h-4 w-4 text-stone-600 group-hover:text-amber-500 transition-colors" />
                <span className="group-hover:text-white transition-colors">+234 800 Sojourn LUX</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <Mail className="h-4 w-4 text-stone-600 group-hover:text-amber-500 transition-colors" />
                <span className="group-hover:text-white transition-colors">concierge@naia.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Social */}
        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em]">
            <span className="text-stone-600">© {currentYear} Mabel's Sojourn Group</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>

          {/* Social Icons - Clean Circle Style */}
          <div className="flex items-center space-x-4">
            {[<Instagram />, <Facebook />, <Twitter />, <Linkedin />].map((icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:border-amber-600 hover:text-white transition-all duration-500">
                {React.cloneElement(icon, { size: 16, strokeWidth: 1.5 })}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.2em]">
             <Globe className="h-3 w-3 text-amber-600" />
             <span className="text-white font-bold">Nigeria</span>
             <span className="text-stone-600">English (Intl)</span>
          </div>
        </div>

        {/* Global Prestige Indicators */}
        <div className="mt-16 flex justify-center space-x-12 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white border-x px-6 border-stone-700">Leading Hotels of the World</span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white border-r px-6 border-stone-700">Forbes 5 Star 2024</span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white border-r px-6 border-stone-700">Virtuoso Preferred</span>
        </div>
      </div>
    </footer >
  );
};

export default Footer;