import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Bed, Bath, Users, Star, MapPin, ChevronLeft, Calendar, 
  Share2, Heart, Crown, Sparkles, Shield, CheckCircle, 
  ArrowRight, Maximize2, Clock, Phone, Mail, 
  ChevronDown, ChevronUp, Zap, Globe, Compass
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

  const apartment = apartmentsData.find(apt => apt.id === parseInt(id));

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="text-4xl font-serif italic text-stone-900 mb-6">Residence Not Found</h2>
          <button onClick={() => navigate('/apartments')} className="tracking-widest text-xs font-bold border-b-2 border-amber-600 pb-2">
            RETURN TO COLLECTION
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

  const totalNights = checkInDate && checkOutDate ? 
    Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) : 1;
  const totalPrice = apartment.price * totalNights;

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Editorial Header Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="group flex items-center space-x-2">
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500">The Collection</span>
          </button>
          <div className="flex items-center space-x-6">
            <button className="text-stone-400 hover:text-stone-900 transition-colors"><Share2 size={18} strokeWidth={1.5} /></button>
            <button className="text-stone-400 hover:text-amber-600 transition-colors"><Heart size={18} strokeWidth={1.5} /></button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: CONTENT & GALLERY */}
          <div className="lg:col-span-8">
            {/* Main Hero Gallery */}
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-stone-100 mb-8 group">
              <img 
                src={apartment.images[selectedImage]} 
                alt={apartment.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <div className="bg-stone-900/90 backdrop-blur text-white text-[10px] font-bold tracking-[0.3em] px-4 py-2 uppercase">
                   Exclusive Estate
                </div>
              </div>
            </div>

            {/* Thumbnail Strip: Architecture-style layout */}
            <div className="flex space-x-4 mb-16 overflow-x-auto pb-4 scrollbar-hide">
              {apartment.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(idx)}
                  className={`relative flex-shrink-0 w-32 aspect-square transition-all duration-500 ${selectedImage === idx ? 'opacity-100 ring-1 ring-amber-600 ring-offset-4' : 'opacity-40 hover:opacity-70'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="view" />
                </button>
              ))}
            </div>

            {/* Title & Description */}
            <header className="mb-16">
              <div className="flex items-center space-x-2 text-amber-600 mb-4">
                <Star size={14} fill="currentColor" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Rating {apartment.rating} / 5.0</span>
              </div>
              <h1 className="text-6xl font-serif italic text-stone-900 mb-6 leading-tight">
                {apartment.name}
              </h1>
              <div className="flex items-center text-stone-500 space-x-4 text-sm font-light">
                <MapPin size={16} className="text-amber-600" />
                <span>{apartment.location}</span>
                <span className="text-stone-300">|</span>
                <span className="uppercase tracking-widest text-[10px] font-bold">Ref: NAIA-00{id}</span>
              </div>
            </header>

            {/* Space Architecture Specs */}
            <div className="grid grid-cols-3 gap-8 py-10 border-y border-stone-100 mb-16">
              {[
                { icon: <Bed size={20}/>, label: 'Suites', value: apartment.bedrooms },
                { icon: <Bath size={20}/>, label: 'Bathrooms', value: apartment.bathrooms },
                { icon: <Users size={20}/>, label: 'Capacity', value: `${apartment.guests} Guests` }
              ].map((spec, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-stone-400 mb-2">{spec.icon}</div>
                  <div className="text-xl font-serif text-stone-900">{spec.value}</div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-widest">{spec.label}</div>
                </div>
              ))}
            </div>

            <section className="mb-16">
              <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-600 mb-8">The Narrative</h3>
              <p className="text-xl font-light leading-relaxed text-stone-700 font-serif italic">
                {apartment.description}
              </p>
            </section>

            {/* Curated Amenities */}
            <section className="mb-16">
              <div className="flex justify-between items-end mb-10 border-b border-stone-100 pb-4">
                <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase text-stone-900">Curated Provisions</h3>
                <button 
                   onClick={() => setShowAllAmenities(!showAllAmenities)}
                   className="text-[10px] font-bold tracking-widest text-stone-400 hover:text-amber-600 transition-colors uppercase"
                >
                  {showAllAmenities ? 'Collapse' : 'View All Provisions'}
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">
                {(showAllAmenities ? apartment.amenities : apartment.amenities.slice(0, 6)).map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 group">
                    <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                      <CheckCircle size={14} className="text-stone-300 group-hover:text-amber-600" />
                    </div>
                    <span className="text-sm font-light text-stone-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT: RESERVATION CONCIERGE */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="bg-white border border-stone-100 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <div className="mb-8 pb-8 border-b border-stone-50">
                   <span className="text-sm text-stone-400 font-light">Starting from</span>
                   <div className="text-4xl font-serif text-stone-900 mt-1">{formatPrice(apartment.price)}</div>
                   <div className="text-[10px] tracking-widest text-stone-400 uppercase mt-2">inclusive of all taxes</div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="grid grid-cols-2 border border-stone-100">
                    <div className="p-4 border-r border-stone-100">
                      <label className="block text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-1">Check In</label>
                      <input type="date" className="w-full text-xs focus:outline-none bg-transparent" />
                    </div>
                    <div className="p-4">
                      <label className="block text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-1">Check Out</label>
                      <input type="date" className="w-full text-xs focus:outline-none bg-transparent" />
                    </div>
                  </div>
                  
                  <div className="p-4 border border-stone-100">
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-1">Guests</label>
                    <select className="w-full text-xs focus:outline-none bg-transparent appearance-none">
                       <option>1 Adult, No Children</option>
                       <option>2 Adults</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-stone-900 text-white py-5 text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-amber-600 transition-colors duration-500 mb-6">
                  Check Availability
                </button>

                <div className="text-center">
                  <a href="tel:+234" className="text-[10px] font-bold tracking-widest text-stone-400 hover:text-stone-900 uppercase transition-colors">
                    Inquire via Concierge
                  </a>
                </div>
              </div>

              {/* Security Policy Badge */}
              <div className="mt-8 flex items-start space-x-4 p-4 bg-stone-50/50 rounded-sm">
                <Shield size={18} className="text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-900 mb-1">Naia Assurance</h4>
                  <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                    24/7 Diplomatic-grade security and full reservation flexibility included.
                  </p>
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