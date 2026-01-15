import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=3000&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=3000&q=80',
    'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=3000&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden">
      {/* Background with Heavy Premium Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              currentImage === index ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt="Luxury Interior"
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ${
                currentImage === index ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
        {/* The Scrim: Critical for readability. Darkens the image enough for white text to pop. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Subtle gold accent line */}
          <div className="w-12 h-[1px] bg-amber-500/50 mb-8" />

          <h1 className="max-w-5xl mb-6">
            <span className="block text-4xl md:text-7xl font-serif italic text-white leading-tight">
              Exceptional Spaces
            </span>
            <span className="block text-3xl md:text-6xl font-light tracking-[0.15em] uppercase text-amber-50/90 mt-2">
              Privately Curated
            </span>
          </h1>

          <p className="max-w-xl text-stone-300 font-light text-lg md:text-xl leading-relaxed mb-12">
            Discover Nigeria's most prestigious residences, 
            designed for those who command excellence.
          </p>

          {/* Minimalist Search Console - "Floating Glass" style */}
          <div className="w-full max-w-5xl">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-2 rounded-xl md:rounded-full shadow-2xl">
              <div className="flex flex-col md:flex-row items-center">
                
                {/* Search Item: Location */}
                <div className="flex-1 flex items-center px-8 py-4 w-full group">
                  <MapPin className="h-5 w-5 text-amber-500/70 mr-4" />
                  <div className="text-left flex-1">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1">Location</label>
                    <input 
                      type="text" 
                      placeholder="Lagos, Abuja..." 
                      className="bg-transparent outline-none text-white font-light placeholder-stone-600 w-full text-sm"
                    />
                  </div>
                </div>

                <div className="hidden md:block h-10 w-[1px] bg-white/10" />

                {/* Search Item: Dates */}
                <div className="flex-1 flex items-center px-8 py-4 w-full">
                  <Calendar className="h-5 w-5 text-amber-500/70 mr-4" />
                  <div className="text-left flex-1">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1">Check In</label>
                    <input 
                      type="text" 
                      placeholder="Add dates" 
                      className="bg-transparent outline-none text-white font-light placeholder-stone-600 w-full text-sm"
                    />
                  </div>
                </div>

                <div className="hidden md:block h-10 w-[1px] bg-white/10" />

                {/* Search Item: Guests */}
                <div className="flex-1 flex items-center px-8 py-4 w-full">
                  <Users className="h-5 w-5 text-amber-500/70 mr-4" />
                  <div className="text-left flex-1">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1">Guests</label>
                    <select className="bg-transparent outline-none text-white font-light w-full appearance-none text-sm cursor-pointer">
                      <option className="bg-stone-900">02 Guests</option>
                      <option className="bg-stone-900">04 Guests</option>
                      <option className="bg-stone-900">06+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* The "High-End" Action Button */}
                <button className="bg-white hover:bg-amber-500 text-black hover:text-white px-12 py-5 rounded-lg md:rounded-full transition-all duration-500 group w-full md:w-auto mt-2 md:mt-0 shadow-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-xs tracking-[0.2em] uppercase font-bold">Inquire</span>
                    <Search className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </div>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative side text (Luxury Branding) */}
      <div className="hidden lg:block absolute left-10 top-1/2 -rotate-90 origin-left">
        <span className="text-[10px] tracking-[0.5em] uppercase text-white/30 whitespace-nowrap">
          Estate — Residences — Hospitality
        </span>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
         <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;