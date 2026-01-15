import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Users, Star, MapPin, ArrowUpRight } from 'lucide-react';

const ApartmentCard = ({ apartment }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="group relative bg-white border border-stone-100 overflow-hidden transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <Link 
            to={`/apartments/${apartment.id}`}
            
          >
      {/* Image Container */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={apartment.images[0]} 
          alt={apartment.name}
          className={`w-full h-full object-cover transition-transform duration-[1500ms] ease-out ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        
        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Top Badges: Ultra Minimal */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
          <div className="flex flex-col gap-2">
            {apartment.price >= 200000 && (
              <span className="backdrop-blur-md bg-white/10 border border-white/20 text-white text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 font-medium">
                Signature Collection
              </span>
            )}
            <div className="flex items-center space-x-2 bg-white/90 px-2 py-1 self-start shadow-sm">
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
              <span className="text-[10px] font-bold text-stone-800">{apartment.rating}</span>
            </div>
          </div>
        </div>

        {/* Price: Clean & Integrated */}
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 mb-1">Nightly Rate</p>
          <p className="text-xl font-light tracking-tight">
            {formatPrice(apartment.price)}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-serif italic text-stone-800 mb-1">
              {apartment.name}
            </h3>
            <div className="flex items-center text-stone-400">
              <MapPin className="h-3 w-3 mr-1.5" />
              <span className="text-[11px] uppercase tracking-widest">{apartment.location}</span>
            </div>
          </div>
          
          <Link 
            to={`/apartments/${apartment.id}`}
            className="p-3 border border-stone-100 rounded-full group-hover:bg-stone-900 group-hover:text-white transition-all duration-500"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="text-stone-500 text-sm font-light leading-relaxed mb-8 line-clamp-2">
          {apartment.description}
        </p>

        {/* Stats: Minimalist Line Style */}
        <div className="flex items-center justify-between py-6 border-y border-stone-50">
          <div className="flex flex-col items-center flex-1">
            <span className="text-stone-800 text-sm font-medium">{apartment.bedrooms}</span>
            <span className="text-[9px] uppercase tracking-tighter text-stone-400">Bedrooms</span>
          </div>
          <div className="w-[1px] h-4 bg-stone-100" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-stone-800 text-sm font-medium">{apartment.bathrooms}</span>
            <span className="text-[9px] uppercase tracking-tighter text-stone-400">Baths</span>
          </div>
          <div className="w-[1px] h-4 bg-stone-100" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-stone-800 text-sm font-medium">{apartment.guests}</span>
            <span className="text-[9px] uppercase tracking-tighter text-stone-400">Guests</span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex -space-x-1">
             {apartment.amenities.slice(0, 3).map((_, i) => (
               <div key={i} className="w-2 h-2 rounded-full bg-amber-500/20 border border-amber-500/40" />
             ))}
             <span className="ml-3 text-[10px] text-stone-400 uppercase tracking-widest underline decoration-stone-200 underline-offset-4">
               + View Amenities
             </span>
          </div>
          
          <button className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-800 hover:text-amber-600 transition-colors">
            Reserve Now
          </button>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ApartmentCard;