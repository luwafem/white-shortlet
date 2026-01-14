import React from 'react';
import { Home, Phone, Mail, MapPin, Shield, Globe, Lock, Sparkles, ChevronRight, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-amber-100 bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
      </div>

      <div className="relative luxury-container py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-light text-gray-900 tracking-tight">NAÏA</span>
                  <span className="text-xs text-amber-600 tracking-widest font-light uppercase">Private Residences</span>
                </div>
              </div>
              
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Curating Nigeria's most exclusive luxury residences for the world's most discerning travelers.
              </p>
              
              {/* Trust Badges */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Shield className="h-4 w-4 text-amber-500" />
                  <span>Verified Properties</span>
                </div>
                <div className="h-4 w-px bg-amber-200" />
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Lock className="h-4 w-4 text-amber-500" />
                  <span>Secure Booking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-light tracking-widest text-amber-600 uppercase mb-6">EXPLORE</h3>
            <ul className="space-y-4">
              {['Home', 'Residences', 'Collections', 'Concierge', 'Experiences'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase()}`} 
                    className="group flex items-center text-gray-600 hover:text-amber-600 font-light transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Column */}
          <div>
            <h3 className="text-sm font-light tracking-widest text-amber-600 uppercase mb-6">LOCATIONS</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { city: 'Lagos', label: 'Premium' },
                { city: 'Abuja', label: 'Executive' },
                { city: 'Port Harcourt', label: 'Luxury' },
                { city: 'Calabar', label: 'Exclusive' },
                { city: 'Kano', label: 'Heritage' },
                { city: 'Enugu', label: 'Boutique' },
              ].map((location) => (
                <div key={location.city} className="group">
                  <div className="text-gray-900 font-light mb-1">{location.city}</div>
                  <div className="text-xs text-amber-500/70 font-light">{location.label}</div>
                  <div className="w-0 h-px bg-gradient-to-r from-amber-300 to-transparent group-hover:w-full transition-all duration-300 mt-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-light tracking-widest text-amber-600 uppercase mb-6">CONTACT</h3>
            <div className="space-y-5">
              <div className="group flex items-start space-x-3">
                <div className="relative mt-1">
                  <div className="absolute inset-0 bg-amber-100/50 rounded-full blur" />
                  <Phone className="relative h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-gray-900 font-light">+234 800 888 9999</div>
                  <div className="text-xs text-gray-500">24/7 Concierge</div>
                </div>
              </div>
              
              <div className="group flex items-start space-x-3">
                <div className="relative mt-1">
                  <div className="absolute inset-0 bg-amber-100/50 rounded-full blur" />
                  <Mail className="relative h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-gray-900 font-light">reservations@naïa.com</div>
                  <div className="text-xs text-gray-500">Exclusive Inquiries</div>
                </div>
              </div>
              
              <div className="group flex items-start space-x-3">
                <div className="relative mt-1">
                  <div className="absolute inset-0 bg-amber-100/50 rounded-full blur" />
                  <MapPin className="relative h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-gray-900 font-light">Victoria Island, Lagos</div>
                  <div className="text-xs text-gray-500">Headquarters</div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span className="text-sm text-gray-600 font-light">Exclusive Updates</span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white border border-amber-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-300 transition-colors"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-amber-100/50 to-amber-200/50 border border-amber-200 rounded text-xs text-amber-600 hover:border-amber-300 transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Legal Section */}
        <div className="border-t border-amber-100 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 font-light">Follow our journey</span>
              <div className="flex items-center space-x-3">
                {[
                  { icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
                  { icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
                  { icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
                  { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="group p-2 border border-amber-200 rounded-lg hover:border-amber-300 transition-colors"
                    aria-label={social.label}
                  >
                    <div className="text-gray-500 group-hover:text-amber-500 transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-amber-600 font-light transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-amber-600 font-light transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-amber-600 font-light transition-colors">
                Cookie Policy
              </a>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <span className="text-gray-500 font-light">EN</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-amber-100 text-center">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-gray-500 text-sm font-light">
                &copy; {currentYear} NAÏA Private Residences. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span>Luxury hospitality redefined</span>
                <div className="w-1 h-1 bg-amber-200 rounded-full" />
                <span>Member of The Leading Hotels of the World</span>
                <div className="w-1 h-1 bg-amber-200 rounded-full" />
                <span>Forbes Travel Guide Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </footer>
  );
};

export default Footer;