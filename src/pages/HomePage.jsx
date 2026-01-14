import React from 'react';
import HeroSection from '../components/HeroSection';
import AmenitiesSection from '../components/AmenitiesSection';
import ApartmentCard from '../components/ApartmentCard';
import apartmentsData from '../data/apartmentsData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Crown, Shield, Clock, Globe, ChevronRight, Star, Users, Award, Trophy } from 'lucide-react';

const HomePage = () => {
  const featuredApartments = apartmentsData.slice(0, 3);
  const premiumApartments = apartmentsData.filter(apt => apt.price >= 200000);

  const stats = [
    { value: '500+', label: 'Exclusive Residences', icon: <Crown className="h-6 w-6" /> },
    { value: '4.9', label: 'Guest Rating', icon: <Star className="h-6 w-6 fill-current" /> },
    { value: '24/7', label: 'Concierge Service', icon: <Clock className="h-6 w-6" /> },
    { value: '50+', label: 'Global Partners', icon: <Globe className="h-6 w-6" /> },
  ];

  return (
    <div className="bg-white">
      <HeroSection />
      
      {/* Featured Residences */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-amber-100/30 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-amber-50/30 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/20 to-white" />
        </div>

        <div className="relative luxury-container">
          {/* Header */}
          <div className="text-center mb-16">
            
            <h2 className="luxury-heading text-5xl md:text-6xl mb-6 leading-tight">
              <span className="gold-accent">Curated</span> Collection
            </h2>
            
            <p className="luxury-subheading text-xl max-w-3xl mx-auto">
              Handpicked residences that define luxury living. Each property meticulously selected 
              for its exceptional quality, location, and unparalleled amenities.
            </p>
          </div>

          {/* Featured Apartments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredApartments.map(apartment => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link 
              to="/apartments" 
              className="group inline-flex items-center space-x-3 text-amber-600 hover:text-amber-500 transition-colors"
            >
              <span className="text-lg font-light tracking-wider">EXPLORE ALL RESIDENCES</span>
              <div className="relative">
                <div className="absolute inset-0 bg-amber-100/50 rounded-full blur group-hover:blur-md transition-all" />
                <div className="relative p-2 border border-amber-200 rounded-full group-hover:border-amber-300 transition-colors">
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="luxury-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="relative luxury-card text-center transition-all duration-500 group-hover:border-amber-300 group-hover:scale-[1.02] group-hover:shadow-gold">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  <div className="relative mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-amber-200/50 rounded-full blur-md" />
                      <div className="relative p-4 rounded-full border border-amber-200 bg-amber-50">
                        <div className="text-amber-500">
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-4xl font-light text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-light tracking-wider">{stat.label}</div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-300 rounded-tr-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Collection */}
      {premiumApartments.length > 0 && (
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-100/20 via-white to-white" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-amber-200/20 via-transparent to-transparent blur-3xl" />
          </div>

          <div className="relative luxury-container">
            <div className="text-center mb-16">
              
              <h2 className="luxury-heading text-5xl md:text-6xl mb-6 leading-tight">
                Beyond <span className="gold-gradient-text">Luxury</span>
              </h2>
              
              <p className="luxury-subheading text-xl max-w-3xl mx-auto">
                Our most exclusive residences for those who demand nothing but the absolute finest.
                Properties that redefine opulence and sophistication.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {premiumApartments.slice(0, 2).map(apartment => (
                <div key={apartment.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-amber-200/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                  <div className="relative luxury-card overflow-hidden transition-all duration-500 group-hover:border-amber-300">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-200 px-3 py-1.5 rounded-full">
                              <Crown className="h-3.5 w-3.5 text-amber-600" />
                              <span className="text-xs font-light text-amber-600 tracking-wider">SIGNATURE</span>
                            </div>
                            <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 px-3 py-1.5 rounded-full">
                              <Trophy className="h-3.5 w-3.5 text-amber-500" />
                              <span className="text-xs font-light text-amber-500 tracking-wider ml-1">AWARD-WINNING</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-light text-gray-900 mb-2">{apartment.name}</h3>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 text-amber-500/70 mr-2" />
                            <span className="font-light">{apartment.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="gold-gradient-text text-2xl font-light">
                            {formatPrice(apartment.price)}
                          </div>
                          <div className="text-sm text-gray-500 font-light">per night</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-gray-600 font-light line-clamp-2">{apartment.description}</p>
                      </div>
                      
                      <Link 
                        to={`/apartments/${apartment.id}`}
                        className="group/btn inline-flex items-center space-x-2 text-amber-600 hover:text-amber-500 transition-colors"
                      >
                        <span className="font-light tracking-wider">EXCLUSIVE VIEWING</span>
                        <ChevronRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <AmenitiesSection />
      
      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 via-amber-100/20 to-amber-50/30" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-5" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-amber-200/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative Elements */}
          <div className="flex justify-center mb-8">
          </div>
          
          <h2 className="luxury-heading text-5xl md:text-6xl mb-6 leading-tight">
            Experience <span className="gold-accent">Unrivaled</span> Luxury
          </h2>
          
          <p className="luxury-subheading text-xl mb-10 max-w-2xl mx-auto">
            Your journey to extraordinary living begins here. Let our concierge craft 
            your perfect experience in Nigeria's most exclusive residences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative overflow-hidden luxury-button px-8">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-300/20 to-amber-300/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative flex items-center justify-center space-x-3">
                <Crown className="h-5 w-5" />
                <span>BOOK PRIVATE VIEWING</span>
              </div>
            </button>
            
            <Link 
              to="/contact" 
              className="group relative px-8 py-4 border border-amber-200 text-amber-600 font-light tracking-wider rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all luxury-button-secondary"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/10 to-amber-100/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">CONTACT CONCIERGE</span>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-amber-100">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-amber-500" />
                <span className="font-light">Verified Properties</span>
              </div>
              <div className="w-px h-4 bg-amber-200" />
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-amber-500" />
                <span className="font-light">Dedicated Support</span>
              </div>
              <div className="w-px h-4 bg-amber-200" />
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-500" />
                <span className="font-light">24/7 Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function for price formatting
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
};

// Import MapPin for premium section
const MapPin = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default HomePage;