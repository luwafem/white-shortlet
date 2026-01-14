import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Users, Star, MapPin, ChevronRight, Sparkles, Crown, Eye, Zap, Home } from 'lucide-react';

const ApartmentCard = ({ apartment }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getTierStyle = (price) => {
    if (price >= 200000) return {
      gradient: 'from-amber-100 to-amber-200',
      border: 'border-amber-300',
      text: 'text-amber-800',
      bg: 'bg-gradient-to-r from-amber-50 to-amber-100',
      badge: 'bg-gradient-to-r from-amber-100 to-amber-200 border-amber-300',
      priceBg: 'from-amber-100 to-amber-200',
      priceText: 'text-gray-900',
      priceSubtext: 'text-amber-800'
    };
    if (price >= 100000) return {
      gradient: 'from-amber-50 to-amber-100',
      border: 'border-amber-200',
      text: 'text-amber-700',
      bg: 'bg-gradient-to-r from-amber-50/80 to-amber-100/80',
      badge: 'bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200',
      priceBg: 'from-amber-50 to-amber-100',
      priceText: 'text-gray-900',
      priceSubtext: 'text-amber-700'
    };
    return {
      gradient: 'from-white to-amber-50',
      border: 'border-amber-100',
      text: 'text-amber-600',
      bg: 'bg-gradient-to-r from-white to-amber-50/80',
      badge: 'bg-gradient-to-r from-white to-amber-50 border-amber-100',
      priceBg: 'from-white to-amber-50',
      priceText: 'text-gray-900',
      priceSubtext: 'text-amber-600'
    };
  };

  const tierStyle = getTierStyle(apartment.price);

  return (
    <div 
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tierStyle.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700`} />
      
      {/* Card Container */}
      <div className={`relative bg-white border ${tierStyle.border} rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-amber-100/30 group-hover:scale-[1.02]`}>
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="relative h-72 overflow-hidden">
            <img 
              src={apartment.images[0]} 
              alt={apartment.name}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
            
            {/* Premium Ribbon */}
            {apartment.price >= 200000 && (
              <div className="absolute -top-2 -right-8 rotate-45 bg-gradient-to-r from-amber-100 to-amber-200 border-b border-amber-300 shadow-md w-32 py-1.5">
                <div className="flex items-center justify-center space-x-1">
                  <Crown className="h-3 w-3 text-amber-800" />
                  <span className="text-xs font-semibold text-amber-800 tracking-wider">SIGNATURE</span>
                </div>
              </div>
            )}
            
            {/* Price Tag */}
            <div className="absolute top-4 right-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl blur-md opacity-60" />
                <div className="relative bg-gradient-to-r from-amber-100 to-amber-200 text-gray-900 px-5 py-3 rounded-xl border border-amber-300 shadow-sm">
                  <div className="text-lg font-bold text-gray-900">{formatPrice(apartment.price)}</div>
                  <div className="text-xs font-medium text-amber-800">per night</div>
                </div>
              </div>
            </div>

            {/* Top Left Badges */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-amber-100 shadow-sm">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="text-sm font-semibold text-gray-900">{apartment.rating}</span>
                <span className="text-xs text-gray-600">({apartment.reviews})</span>
              </div>
              
              {apartment.reviews > 100 && (
                <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-amber-100 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                  <span className="text-xs font-semibold text-amber-700 tracking-wide">TOP RATED</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Image Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/30 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-100 transition-colors duration-300">
              {apartment.name}
            </h3>
            
            <div className="flex items-center text-amber-100">
              <MapPin className="h-4 w-4 text-amber-100 mr-2" />
              <span className="text-sm font-medium text-white">{apartment.location}</span>
            </div>
          </div>
        </div>
        
        {/* Details Section */}
        <div className="p-6">
          {/* Description */}
          <p className="text-gray-700 mb-6 line-clamp-2 text-sm leading-relaxed">
            {apartment.description}
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: <Bed className="h-5 w-5" />, label: 'Bedrooms', value: apartment.bedrooms },
              { icon: <Bath className="h-5 w-5" />, label: 'Bathrooms', value: apartment.bathrooms },
              { icon: <Users className="h-5 w-5" />, label: 'Guests', value: apartment.guests },
            ].map((stat, index) => (
              <div key={index} className="group/stat relative">
                <div className={`absolute inset-0 ${tierStyle.bg} rounded-lg opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300`} />
                <div className="relative flex flex-col items-center p-3 rounded-lg border border-amber-50 bg-white">
                  <div className="text-amber-600 mb-1">{stat.icon}</div>
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quick Amenities Preview */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="h-4 w-4 text-amber-600" />
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Premium Features</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {apartment.amenities.slice(0, 3).map((amenity, index) => (
                <span 
                  key={index}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border ${tierStyle.border} ${tierStyle.bg} text-gray-800`}
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Link 
              to={`/apartments/${apartment.id}`}
              className="group/btn relative flex-1"
            >
              <div className={`absolute inset-0 ${tierStyle.bg} rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`} />
              <div className="relative flex items-center justify-center space-x-2 py-3.5 border border-amber-200 rounded-xl group-hover/btn:border-amber-300 transition-all duration-300">
                <Eye className="h-4 w-4 text-amber-600 group-hover/btn:text-amber-700 transition-colors" />
                <span className="text-sm font-semibold text-gray-900 tracking-wide">EXPLORE</span>
                <ChevronRight className="h-4 w-4 text-amber-600 group-hover/btn:text-amber-700 transform group-hover/btn:translate-x-1 transition-all" />
              </div>
            </Link>
            
            <button className="group/btn relative flex-1">
              <div className={`absolute inset-0 ${tierStyle.bg} rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`} />
              <div className="relative flex items-center justify-center space-x-2 py-3.5 border border-amber-200 rounded-xl group-hover/btn:border-amber-300 transition-all duration-300">
                <Home className="h-4 w-4 text-amber-600 group-hover/btn:text-amber-700 transition-colors" />
                <span className="text-sm font-semibold text-gray-900 tracking-wide">BOOK NOW</span>
              </div>
            </button>
          </div>
          
          {/* Hover Reveal - Additional Info */}
          <div className={`mt-4 pt-4 border-t border-amber-50 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                <span className="text-xs font-medium text-gray-600">
                  {apartment.amenities.length}+ Premium Amenities
                </span>
              </div>
              <span className={`text-xs font-semibold ${tierStyle.text}`}>
                ✓ Instant Confirmation
              </span>
            </div>
          </div>
        </div>
        
        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${tierStyle.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-300 rounded-tr-2xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-6 h-6 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-300 rounded-bl-2xl" />
        </div>
      </div>
      
      {/* Floating Premium Indicator */}
      {apartment.price >= 300000 && (
        <div className="absolute -top-2 left-4 z-10">
          <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300 px-3 py-1 rounded-full shadow-sm">
            <Crown className="h-3 w-3 text-amber-800" />
            <span className="text-xs font-bold text-amber-800 tracking-wider">ULTRA LUXURY</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApartmentCard;