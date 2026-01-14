import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Bed, Bath, Users, Star, MapPin, ChevronLeft, Calendar, 
  Share2, Heart, Crown, Sparkles, Shield, CheckCircle, 
  ArrowRight, Maximize2, Clock, User, Phone, Mail, 
  Wifi, Car, Tv, Wind, Dumbbell, Droplets, Utensils,
  ChevronDown, ChevronUp, Zap, Key, Globe, Coffee,
  Briefcase, Wine, Headphones, ChefHat
} from 'lucide-react';
import apartmentsData from '../data/apartmentsData';

const ApartmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [isBookingExpanded, setIsBookingExpanded] = useState(false);

  const apartment = apartmentsData.find(apt => apt.id === parseInt(id));

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Residence Not Found</h2>
          <button 
            onClick={() => navigate('/apartments')}
            className="luxury-button px-8"
          >
            Back to Residences
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getTierColor = (price) => {
    if (price >= 200000) return 'from-amber-200 to-amber-300';
    if (price >= 100000) return 'from-amber-100 to-amber-200';
    return 'from-amber-50 to-amber-100';
  };

  const totalNights = checkInDate && checkOutDate ? 
    Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) : 1;
  const totalPrice = apartment.price * totalNights;

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Back Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center text-gray-500 hover:text-amber-600 transition-colors"
          >
            <div className="relative mr-2">
              <div className="absolute inset-0 bg-amber-100/50 rounded-full blur group-hover:blur-md transition-all" />
              <ChevronLeft className="relative h-5 w-5" />
            </div>
            <span className="text-sm font-light tracking-wide">BACK TO RESIDENCES</span>
            <ArrowRight className="h-4 w-4 ml-2 transform -rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative rounded-2xl overflow-hidden border border-amber-200">
                <img 
                  src={apartment.images[selectedImage]} 
                  alt={apartment.name}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
                
                {/* Image Navigation */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200">
                    {apartment.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          selectedImage === index 
                            ? 'bg-amber-400 w-4' 
                            : 'bg-amber-200 hover:bg-amber-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex space-x-3 mt-4 overflow-x-auto pb-2">
                {apartment.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 relative overflow-hidden rounded-xl border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-amber-400 scale-105' 
                        : 'border-amber-100 hover:border-amber-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`View ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                    {selectedImage === index && (
                      <div className="absolute inset-0 bg-amber-400/20" />
                    )}
                  </button>
                ))}
                <button className="flex-shrink-0 flex items-center justify-center w-20 h-20 border-2 border-dashed border-amber-200 rounded-xl hover:border-amber-300 transition-colors">
                  <Maximize2 className="h-5 w-5 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Residence Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    {apartment.price >= 200000 && (
                      <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-200 px-3 py-1.5 rounded-full">
                        <Crown className="h-3.5 w-3.5 text-amber-600" />
                        <span className="text-xs font-light text-amber-600 tracking-wider">PREMIUM</span>
                      </div>
                    )}
                    {apartment.rating >= 4.8 && (
                      <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 px-3 py-1.5 rounded-full">
                        <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                        <span className="text-xs font-light text-amber-500 tracking-wider">EXCELLENT</span>
                      </div>
                    )}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
                    {apartment.name}
                  </h1>
                  
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="h-5 w-5 text-amber-500/70 mr-2" />
                    <span className="font-light">{apartment.location}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-3xl font-light bg-gradient-to-r ${getTierColor(apartment.price)} text-transparent bg-clip-text`}>
                    {formatPrice(apartment.price)}
                  </div>
                  <div className="text-sm text-gray-500 font-light">per night</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: <Bed className="h-5 w-5" />, label: 'Bedrooms', value: apartment.bedrooms },
                  { icon: <Bath className="h-5 w-5" />, label: 'Bathrooms', value: apartment.bathrooms },
                  { icon: <Users className="h-5 w-5" />, label: 'Guests', value: apartment.guests },
                  { 
                    icon: <Star className="h-5 w-5 fill-amber-400 text-amber-400" />, 
                    label: 'Rating', 
                    value: `${apartment.rating} (${apartment.reviews})`
                  },
                ].map((stat, index) => (
                  <div key={index} className="luxury-card p-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-amber-500">{stat.icon}</div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500 font-light">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="luxury-card p-8 mb-8">
              <h2 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
                <span className="mr-3">About This Residence</span>
                <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent" />
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                {apartment.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="luxury-card p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-light text-gray-900 flex items-center">
                  <span className="mr-3">Amenities & Features</span>
                  <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent" />
                </h2>
                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="flex items-center text-sm text-amber-600 hover:text-amber-500 transition-colors"
                >
                  {showAllAmenities ? 'Show Less' : 'View All'}
                  {showAllAmenities ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(showAllAmenities ? apartment.amenities : apartment.amenities.slice(0, 6)).map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-amber-50/50 border border-amber-100 hover:border-amber-300 transition-colors">
                    <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-600 font-light">{amenity}</span>
                  </div>
                ))}
              </div>
              
              {!showAllAmenities && apartment.amenities.length > 6 && (
                <div className="mt-6 text-center">
                  <div className="text-gray-500 text-sm font-light">
                    +{apartment.amenities.length - 6} additional amenities
                  </div>
                </div>
              )}
            </div>

            {/* Special Features */}
            <div className="luxury-card p-8 mb-8">
              <h2 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
                <span className="mr-3">Exclusive Features</span>
                <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {apartment.features.map((feature, index) => (
                  <div key={index} className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 via-amber-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center space-x-3 p-4 rounded-xl border border-amber-100 group-hover:border-amber-300 transition-colors">
                      <Zap className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <span className="text-gray-600 font-light">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Host Information */}
            <div className="luxury-card p-8">
              <h2 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
                <span className="mr-3">Hosted By</span>
                <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent" />
              </h2>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full blur-md" />
                  <img 
                    src={apartment.hostImage} 
                    alt={apartment.host}
                    className="relative w-20 h-20 rounded-full border-2 border-amber-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-2">{apartment.host}</h3>
                  <p className="text-gray-500 font-light mb-4">Premium Host • 24/7 Concierge Service</p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-500 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-light">Contact Host</span>
                    </button>
                    <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-500 transition-colors">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-light">Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className={`sticky transition-all duration-500 ${isBookingExpanded ? 'top-4' : 'top-24'}`}>
              {/* Booking Card */}
              <div className="luxury-card p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className={`text-3xl font-light bg-gradient-to-r ${getTierColor(apartment.price)} text-transparent bg-clip-text`}>
                      {formatPrice(apartment.price)}
                    </div>
                    <div className="text-sm text-gray-500 font-light">per night</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 border border-amber-200 rounded-lg hover:border-amber-300 transition-colors">
                      <Share2 className="h-5 w-5 text-gray-500 hover:text-amber-500 transition-colors" />
                    </button>
                    <button className="p-2 border border-amber-200 rounded-lg hover:border-amber-300 transition-colors">
                      <Heart className="h-5 w-5 text-gray-500 hover:text-amber-500 transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="group">
                      <label className="block text-xs text-gray-500 mb-2 font-light tracking-wider">
                        CHECK-IN
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-amber-500/70" />
                        <input
                          type="date"
                          value={checkInDate}
                          onChange={(e) => setCheckInDate(e.target.value)}
                          className="w-full bg-white border border-amber-200 rounded-lg pl-10 p-3 text-gray-900 focus:outline-none focus:border-amber-300 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-xs text-gray-500 mb-2 font-light tracking-wider">
                        CHECK-OUT
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-amber-500/70" />
                        <input
                          type="date"
                          value={checkOutDate}
                          onChange={(e) => setCheckOutDate(e.target.value)}
                          className="w-full bg-white border border-amber-200 rounded-lg pl-10 p-3 text-gray-900 focus:outline-none focus:border-amber-300 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs text-gray-500 mb-2 font-light tracking-wider">
                      GUESTS
                    </label>
                    <div className="relative">
                      <select
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full bg-white border border-amber-200 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-amber-300 transition-colors appearance-none pr-10"
                      >
                        {[...Array(apartment.guests).keys()].map(num => (
                          <option key={num + 1} value={num + 1} className="bg-white">
                            {num + 1} guest{num + 1 > 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500/70 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                {checkInDate && checkOutDate && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-light text-gray-600 tracking-wider">PRICE BREAKDOWN</h3>
                      <div className="text-xs text-gray-500">
                        {totalNights} night{totalNights > 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-600">
                        <span>{formatPrice(apartment.price)} × {totalNights}</span>
                        <span>{formatPrice(totalPrice)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Concierge Service Fee</span>
                        <span>{formatPrice(totalPrice * 0.1)}</span>
                      </div>
                      <div className="border-t border-amber-100 pt-2">
                        <div className="flex justify-between text-gray-900 font-light">
                          <span>Total</span>
                          <span>{formatPrice(totalPrice * 1.1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reserve Button */}
                <button className="group relative w-full overflow-hidden mb-4 luxury-button">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-400/20 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="relative flex items-center justify-center space-x-3 py-4">
                    <Crown className="h-5 w-5" />
                    <span className="font-light tracking-wider">RESERVE NOW</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <p className="text-center text-gray-500 text-xs font-light mb-4">
                  Secure reservation • No charges until check-in
                </p>

                {/* Contact Host Button */}
                <button className="w-full py-3 border border-amber-300 text-amber-600 font-light tracking-wider rounded-lg hover:border-amber-400 hover:bg-amber-50 transition-all luxury-button-secondary">
                  CONTACT CONCIERGE
                </button>
              </div>

              {/* Safety Information */}
              <div className="mt-6 luxury-card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-5 w-5 text-amber-500" />
                  <h3 className="text-lg font-light text-gray-900">Safety & Cleanliness</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Enhanced cleaning protocol by certified professionals',
                    'Contactless check-in available',
                    '24/7 security monitoring',
                    'Health & safety certified property'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability Widget */}
              <div className="mt-6 luxury-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-amber-500" />
                    <span className="text-gray-900 font-light">Availability</span>
                  </div>
                  <div className="text-xs text-amber-600 font-light">HIGH DEMAND</div>
                </div>
                <div className="text-sm text-gray-600 font-light space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <span>Limited availability for selected dates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>Book now to secure your stay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;