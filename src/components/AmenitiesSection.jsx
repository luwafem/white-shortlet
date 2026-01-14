import React from 'react';
import { 
  Wifi, Car, Shield, Tv, Wind, Utensils, Dumbbell, Droplets, 
  Sparkles, Key, Wine, ChefHat, Coffee, Headphones, Briefcase,
  Waves, Sun, Zap, CheckCircle
} from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    { 
      icon: <Wifi />, 
      name: 'Fiber Optic WiFi', 
      description: 'Ultra-high-speed internet with dedicated bandwidth',
      exclusive: true 
    },
    { 
      icon: <Shield />, 
      name: '24/7 Security', 
      description: 'Armed personnel & AI surveillance systems',
      premium: true 
    },
    { 
      icon: <ChefHat />, 
      name: 'Private Chef', 
      description: 'On-demand culinary service with curated menus',
      exclusive: true 
    },
    { 
      icon: <Wine />, 
      name: 'Wine Cellar', 
      description: 'Temperature-controlled selection of fine wines',
      premium: true 
    },
    { 
      icon: <Droplets />, 
      name: 'Infinity Pool', 
      description: 'Heated pool with panoramic city views',
      exclusive: true 
    },
    { 
      icon: <Dumbbell />, 
      name: 'Spa & Wellness', 
      description: 'Fully-equipped gym and spa treatment rooms',
      premium: true 
    },
    { 
      icon: <Headphones />, 
      name: 'Theater Room', 
      description: 'Dolby Atmos cinema with luxury seating',
      exclusive: true 
    },
    { 
      icon: <Key />, 
      name: 'Valet Service', 
      description: 'Professional valet and concierge services',
      premium: true 
    },
    { 
      icon: <Utensils />, 
      name: 'Gourmet Kitchen', 
      description: 'Miele appliances and professional-grade equipment',
      premium: true 
    },
    { 
      icon: <Briefcase />, 
      name: 'Business Center', 
      description: 'Private office space with video conferencing',
      premium: true 
    },
    { 
      icon: <Car />, 
      name: 'Chauffeur Service', 
      description: 'Mercedes-Benz fleet with professional drivers',
      exclusive: true 
    },
    { 
      icon: <Coffee />, 
      name: 'Coffee Concierge', 
      description: 'Artisanal coffee bar with certified baristas',
      premium: true 
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-100/30 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-amber-50/30 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/20 to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            <span className="text-amber-600">Unrivaled</span> Amenities
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Experience world-class facilities and services curated for the most discerning guests. 
            Every detail meticulously designed for your comfort and convenience.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                amenity.exclusive 
                  ? 'from-amber-200/30 via-amber-100/20 to-transparent' 
                  : 'from-amber-100/20 via-transparent to-transparent'
              } opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative luxury-card p-6 transition-all duration-500 group-hover:border-amber-300 group-hover:scale-[1.02] group-hover:shadow-gold">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 ${
                      amenity.exclusive 
                        ? 'bg-gradient-to-r from-amber-100/50 to-amber-200/50' 
                        : 'bg-amber-100/30'
                    } rounded-xl blur-md`} />
                    <div className={`relative p-4 rounded-xl border ${
                      amenity.exclusive 
                        ? 'border-amber-300 bg-gradient-to-r from-amber-100/30 to-amber-200/30' 
                        : 'border-amber-200 bg-amber-100/20'
                    }`}>
                      {React.cloneElement(amenity.icon, { 
                        size: 28, 
                        className: amenity.exclusive ? 'text-amber-600' : 'text-amber-500/80'
                      })}
                    </div>
                  </div>
                  
                  {/* Exclusive Badge */}
                  {amenity.exclusive && (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-200 px-3 py-1.5 rounded-full shadow-sm">
                      <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                      <span className="text-xs font-light text-amber-600 tracking-wider">EXCLUSIVE</span>
                    </div>
                  )}
                  {amenity.premium && !amenity.exclusive && (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-3.5 w-3.5 text-amber-500" />
                      <span className="text-xs font-light text-amber-500 tracking-wider">PREMIUM</span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-light mb-3 ${
                  amenity.exclusive ? 'text-amber-600' : 'text-gray-900'
                } group-hover:text-amber-600 transition-colors`}>
                  {amenity.name}
                </h3>
                
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
                  {amenity.description}
                </p>
                
                {/* Hover Indicator */}
                <div className="flex items-center text-amber-500/70 text-xs font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>INCLUDED</span>
                  <div className="w-4 h-px bg-amber-300/50 ml-2 flex-1" />
                  <Zap className="h-3 w-3" />
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden ${
                amenity.exclusive ? 'opacity-100' : 'opacity-30'
              }`}>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-300 rounded-tr-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-sm font-light">All amenities included</span>
              </div>
              <div className="w-4 h-px bg-amber-200" />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <span className="text-sm font-light">Premium upgrades available</span>
              </div>
              <div className="w-4 h-px bg-amber-200" />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full" />
                <span className="text-sm font-light">Exclusive services</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm font-light max-w-2xl mx-auto">
              Our commitment to excellence extends to every amenity. 
              Experience unparalleled luxury with our curated selection of world-class facilities and services.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 right-0 bottom-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
      </div>
    </section>
  );
};

export default AmenitiesSection;