import React from 'react';
import HeroSection from '../components/HeroSection';
import AmenitiesSection from '../components/AmenitiesSection';
import ApartmentCard from '../components/ApartmentCard';
import apartmentsData from '../data/apartmentsData';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Shield, Clock, Globe, Star, Users } from 'lucide-react';

const HomePage = () => {
  const featuredApartments = apartmentsData.slice(0, 3);
  const premiumApartments = apartmentsData.filter(apt => apt.price >= 200000);

  const stats = [
    { value: '500+', label: 'Curated Residences', icon: <Crown strokeWidth={1} className="h-5 w-5" /> },
    { value: '4.9', label: 'Guest Rating', icon: <Star strokeWidth={1} className="h-5 w-5" /> },
    { value: '24/7', label: 'Personal Concierge', icon: <Clock strokeWidth={1} className="h-5 w-5" /> },
    { value: '50+', label: 'Global Destinations', icon: <Globe strokeWidth={1} className="h-5 w-5" /> },
  ];

  return (
    <div className="bg-white selection:bg-stone-200">
      <HeroSection />
      
      {/* 01. Featured Residences - The Gallery Grid */}
      <section className="relative py-32 overflow-hidden bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] tracking-[0.4em] uppercase text-amber-600 font-semibold mb-4 block">
                The 2026 Collection
              </span>
              <h2 className="text-5xl md:text-7xl font-serif italic text-stone-900 leading-[1.1]">
                Curated <span className="text-stone-400">Excellence</span>
              </h2>
            </div>
            <p className="max-w-sm text-stone-500 font-light leading-relaxed">
              A handpicked selection of residences defining the new standard of West African luxury living.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {featuredApartments.map(apartment => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>

          {/* Minimalist Navigation */}
          <div className="flex justify-center">
            <Link 
              to="/apartments" 
              className="group flex items-center space-x-6 text-stone-900"
            >
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase">View All Residences</span>
              <div className="w-12 h-[1px] bg-stone-300 group-hover:w-20 transition-all duration-500" />
              <ArrowRight className="h-4 w-4 text-amber-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 02. Stats Section - Ultra-Thin Dividers */}

      {/* 03. Premium Collection - Dark Editorial Style */}

      <AmenitiesSection />
      
      {/* 04. CTA Section - The Final Inquiry */}
      <section className="py-32 bg-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative">
          
          <h2 className="text-5xl md:text-7xl font-serif italic text-stone-900 mb-8">
            Experience <span className="text-stone-400">Unrivaled</span> Luxury
          </h2>
          
          <p className="text-stone-500 font-light text-lg mb-12 leading-relaxed">
            Your journey to extraordinary living begins with a conversation. 
            Allow our concierge to craft your perfect experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto px-12 py-5 bg-stone-900 text-white text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-amber-600 transition-all duration-500 shadow-xl">
              Book Private Viewing
            </button>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-12 py-5 border border-stone-200 text-stone-900 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-stone-50 transition-all duration-500"
            >
              Contact Concierge
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
};

export default HomePage;