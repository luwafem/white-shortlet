import React from 'react';
import { 
  Wifi, Shield, ChefHat, Wine, Droplets, Dumbbell, 
  Headphones, Key, Utensils, Briefcase, Car, Coffee, 
  ArrowRight, Sparkles
} from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    { icon: <Wifi />, name: 'Fiber Optic WiFi', description: 'Dedicated bandwidth for seamless global connectivity.', exclusive: true },
    { icon: <Shield />, name: 'Elite Security', description: '24/7 armed personnel and biometric surveillance.', premium: true },
    { icon: <ChefHat />, name: 'Private Chef', description: 'Bespoke culinary journeys prepared in-residence.', exclusive: true },
    { icon: <Wine />, name: 'Vintage Cellar', description: 'A curated selection of the world\'s finest labels.', premium: true },
    { icon: <Droplets />, name: 'Infinity Pool', description: 'Climate-controlled water with panoramic city skylines.', exclusive: true },
    { icon: <Dumbbell />, name: 'Wellness Center', description: 'State-of-the-art equipment and private spa suites.', premium: true },
    { icon: <Headphones />, name: 'Private Cinema', description: 'Dolby Atmos acoustics with plush velvet seating.', exclusive: true },
    { icon: <Key />, name: 'Personal Valet', description: 'White-glove concierge and parking services.', premium: true },
    { icon: <Utensils />, name: 'Miele Kitchen', description: 'Professional-grade appliances for the modern gourmet.', premium: true },
    { icon: <Briefcase />, name: 'Executive Hub', description: 'Quiet suites designed for high-stakes productivity.', premium: true },
    { icon: <Car />, name: 'Chauffeur Fleet', description: 'Premium Mercedes-Benz Maybach airport transfers.', exclusive: true },
    { icon: <Coffee />, name: 'Roastery Bar', description: 'Artisanal coffee prepared by certified baristas.', premium: true },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        
        {/* Header: Editorial Style */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 border-b border-stone-100 pb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.5em] uppercase text-amber-600 font-bold mb-4 block">
              Guest Facilities
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-stone-900 leading-tight">
              Unrivaled <span className="text-stone-400">Living</span>
            </h2>
          </div>
          <p className="max-w-xs text-stone-500 font-light text-sm leading-relaxed mt-6 md:mt-0">
            A meticulous ecosystem of services designed to anticipate your every need.
          </p>
        </div>

        {/* Amenities Grid: Minimalist Border-only style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-stone-50">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="group p-10 border-r border-b border-stone-50 hover:bg-stone-50/50 transition-all duration-500"
            >
              <div className="mb-8 flex justify-between items-start">
                <div className="text-stone-800 group-hover:text-amber-600 transition-colors duration-500">
                  {React.cloneElement(amenity.icon, { strokeWidth: 1, size: 32 })}
                </div>
                {amenity.exclusive && (
                  <Sparkles className="h-3 w-3 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              
              <h3 className="text-sm font-bold tracking-widest uppercase text-stone-900 mb-3">
                {amenity.name}
              </h3>
              <p className="text-stone-500 text-xs font-light leading-relaxed mb-6">
                {amenity.description}
              </p>

              <div className="flex items-center space-x-2 text-[10px] tracking-widest text-stone-300 group-hover:text-amber-600 transition-colors">
                <span className="uppercase font-semibold">Details</span>
                <ArrowRight className="h-3 w-3 transform -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Legend */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-stone-100">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium">Standard Inclusion</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-900" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium">On-Demand Service</span>
            </div>
          </div>
          
          <button className="flex items-center space-x-4 group">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-stone-900 group-hover:text-amber-600 transition-colors">
              Download Full Brochure
            </span>
            <div className="w-8 h-[1px] bg-stone-200 group-hover:w-12 group-hover:bg-amber-600 transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;