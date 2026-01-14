import React, { useState, useEffect } from 'react';
import { Search, Star, Sparkles, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80',
    'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Images with Elegant Overlay */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImage === index ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt="Luxury Interior"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/10" />
          </div>
        ))}
      </div>

      {/* Subtle Golden Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-50/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-amber-50/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Premium Badge */}

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
              <span className="text-gray-900">Find Your</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400">
                Perfect Escape
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Discover Nigeria's most exquisite luxury residences, 
              curated for unparalleled comfort and sophistication.
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="max-w-3xl mx-auto mb-24">
            <div className="bg-white rounded-2xl shadow-xl border border-amber-50 p-1">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 p-1 bg-gradient-to-r from-amber-50/30 via-white to-amber-50/30 rounded-2xl">
                {/* Location */}
                <div className="lg:col-span-2">
                  <div className="group relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <MapPin className="h-5 w-5 text-amber-500/80 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter destination"
                      className="w-full bg-white/90 border border-amber-100 rounded-xl pl-12 pr-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-100 transition-all font-light"
                    />
                  </div>
                </div>
                
                {/* Check-in */}
                <div>
                  <div className="group relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Calendar className="h-5 w-5 text-amber-500/80 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <input
                      type="date"
                      className="w-full bg-white/90 border border-amber-100 rounded-xl pl-12 pr-4 py-4 text-gray-900 focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-100 transition-all font-light"
                    />
                  </div>
                </div>
                
                {/* Guests */}
                <div>
                  <div className="group relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Users className="h-5 w-5 text-amber-500/80 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <select className="w-full bg-white/90 border border-amber-100 rounded-xl pl-12 pr-10 py-4 text-gray-900 focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-100 transition-all font-light appearance-none">
                      <option value="" className="text-gray-400">Guests</option>
                      <option value="1" className="text-gray-700">1 Guest</option>
                      <option value="2" className="text-gray-700">2 Guests</option>
                      <option value="4" className="text-gray-700">4 Guests</option>
                      <option value="6+" className="text-gray-700">6+ Guests</option>
                    </select>
                  </div>
                </div>
                
                {/* Search Button */}
                <div>
                  <button className="group w-full h-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center space-x-3 py-4 px-6">
                    <Search className="h-5 w-5 text-white" />
                    <span className="text-white font-medium tracking-wide">Search</span>
                    <ArrowRight className="h-5 w-5 text-white transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Quick Filters */}
            </div>
          </div>


          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce flex flex-col items-center">
              <span className="text-xs text-gray-500 font-light mb-2 tracking-wider">EXPLORE</span>
              <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/95 to-transparent" />
    </div>
  );
};

export default HeroSection;