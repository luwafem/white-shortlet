import React, { useState } from 'react';
import ApartmentCard from '../components/ApartmentCard';
import apartmentsData from '../data/apartmentsData';
import { Filter, Grid, List, ChevronDown, Sparkles, Sliders, MapPin, Bed, DollarSign, X, Search } from 'lucide-react';

const ApartmentsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState(500000);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const locations = [
    { value: 'all', label: 'All Locations', tier: 'all' },
    { value: 'Lekki Phase 1, Lagos', label: 'Lekki Phase 1', tier: 'premium' },
    { value: 'Victoria Island, Lagos', label: 'Victoria Island', tier: 'executive' },
    { value: 'Ikeja GRA, Lagos', label: 'Ikeja GRA', tier: 'luxury' },
    { value: 'Banana Island, Lagos', label: 'Banana Island', tier: 'exclusive' },
    { value: 'Abuja Central', label: 'Abuja Central', tier: 'premium' },
    { value: 'Port Harcourt', label: 'Port Harcourt', tier: 'executive' },
  ];

  const bedrooms = [
    { value: 'all', label: 'All Bedrooms' },
    { value: '1', label: '1 Bedroom' },
    { value: '2', label: '2 Bedrooms' },
    { value: '3', label: '3 Bedrooms' },
    { value: '4+', label: '4+ Bedrooms' },
  ];

  const amenities = [
    'Swimming Pool',
    'Gym',
    'Spa',
    'Concierge',
    'Private Chef',
    'Wine Cellar',
    'Cinema Room',
    'Smart Home',
  ];

  const filteredApartments = apartmentsData.filter(apartment => {
    const matchesLocation = selectedLocation === 'all' || apartment.location === selectedLocation;
    const matchesBedrooms = selectedBedrooms === 'all' || 
      (selectedBedrooms === '4+' ? apartment.bedrooms >= 4 : apartment.bedrooms === parseInt(selectedBedrooms));
    const matchesPrice = apartment.price <= priceRange;
    const matchesSearch = searchQuery === '' || 
      apartment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apartment.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAmenities = selectedAmenities.length === 0 || 
      selectedAmenities.every(amenity => apartment.amenities.includes(amenity));
    
    return matchesLocation && matchesBedrooms && matchesPrice && matchesSearch && matchesAmenities;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    setSelectedLocation('all');
    setSelectedBedrooms('all');
    setPriceRange(500000);
    setSelectedAmenities([]);
    setSearchQuery('');
  };

  const getTierColor = (tier) => {
    switch(tier) {
      case 'exclusive': return 'from-amber-200 to-amber-300';
      case 'premium': return 'from-amber-100 to-amber-200';
      case 'luxury': return 'from-amber-50 to-amber-100';
      case 'executive': return 'from-amber-50 to-amber-100';
      default: return 'from-gray-100 to-gray-200';
    }
  };

  const getTierTextColor = (tier) => {
    switch(tier) {
      case 'exclusive': return 'text-amber-600';
      case 'premium': return 'text-amber-500';
      case 'luxury': return 'text-amber-500';
      case 'executive': return 'text-amber-500';
      default: return 'text-gray-600';
    }
  };

  const getTierBgColor = (tier) => {
    switch(tier) {
      case 'exclusive': return 'bg-gradient-to-r from-amber-100 to-amber-200';
      case 'premium': return 'bg-gradient-to-r from-amber-50 to-amber-100';
      case 'luxury': return 'bg-gradient-to-r from-amber-50 to-amber-100';
      case 'executive': return 'bg-gradient-to-r from-amber-50 to-amber-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-white" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-100/30 via-transparent to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="text-amber-600 text-sm font-light tracking-widest uppercase">
                Curated Collection
              </span>
              <Sparkles className="h-5 w-5 text-amber-500" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300">Residences</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Discover Nigeria's most prestigious luxury residences, curated for the most discerning guests.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-transparent rounded-2xl blur-xl" />
              <div className="relative bg-white/90 backdrop-blur-sm border border-amber-200 rounded-2xl p-1 shadow-luxury">
                <div className="flex items-center p-2">
                  <Search className="h-5 w-5 text-amber-500/70 ml-3 mr-3" />
                  <input
                    type="text"
                    placeholder="Search residences, locations, or features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none text-gray-900 placeholder-gray-400 focus:outline-none text-lg font-light"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="p-2 hover:bg-amber-50/50 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-400" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filters Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFilterExpanded(!isFilterExpanded)}
              className="flex items-center space-x-2 px-4 py-2 border border-amber-200 rounded-lg hover:border-amber-300 transition-colors luxury-button-secondary"
            >
              <Sliders className="h-5 w-5 text-amber-500" />
              <span className="text-gray-900 font-light">Filters</span>
              <ChevronDown className={`h-4 w-4 text-amber-500 transition-transform ${isFilterExpanded ? 'rotate-180' : ''}`} />
            </button>
            
            {selectedLocation !== 'all' || selectedBedrooms !== 'all' || selectedAmenities.length > 0 || priceRange < 500000 ? (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 px-4 py-2 border border-amber-200 rounded-lg hover:border-amber-300 transition-colors text-gray-500 hover:text-amber-600 luxury-button-secondary"
              >
                <X className="h-4 w-4" />
                <span className="text-sm font-light">Clear All</span>
              </button>
            ) : null}
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm font-light">View:</span>
            <div className="flex border border-amber-200 rounded-lg p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all ${viewMode === 'grid' ? 'bg-amber-100/50 border border-amber-300' : 'hover:bg-amber-50'}`}
              >
                <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-amber-600' : 'text-gray-400'}`} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-all ${viewMode === 'list' ? 'bg-amber-100/50 border border-amber-300' : 'hover:bg-amber-50'}`}
              >
                <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-amber-600' : 'text-gray-400'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Filters */}
        {isFilterExpanded && (
          <div className="mb-8">
            <div className="luxury-card p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Location Filter */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="h-5 w-5 text-amber-500" />
                    <label className="text-sm font-light text-gray-600 tracking-wider">LOCATION</label>
                  </div>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <button
                        key={location.value}
                        onClick={() => setSelectedLocation(location.value)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                          selectedLocation === location.value
                            ? `border-amber-300 ${getTierBgColor(location.tier)}/20`
                            : 'border-amber-100 hover:border-amber-200 hover:bg-amber-50'
                        }`}
                      >
                        <span className={`font-light ${
                          selectedLocation === location.value ? getTierTextColor(location.tier) : 'text-gray-600'
                        }`}>
                          {location.label}
                        </span>
                        {location.tier !== 'all' && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            selectedLocation === location.value
                              ? `${getTierBgColor(location.tier)} text-amber-600`
                              : 'bg-amber-50 text-gray-500'
                          }`}>
                            {location.tier}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bedrooms Filter */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Bed className="h-5 w-5 text-amber-500" />
                    <label className="text-sm font-light text-gray-600 tracking-wider">BEDROOMS</label>
                  </div>
                  <div className="space-y-2">
                    {bedrooms.map((bedroom) => (
                      <button
                        key={bedroom.value}
                        onClick={() => setSelectedBedrooms(bedroom.value)}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          selectedBedrooms === bedroom.value
                            ? 'border-amber-300 bg-amber-100/30 text-amber-600'
                            : 'border-amber-100 hover:border-amber-200 hover:bg-amber-50 text-gray-600'
                        }`}
                      >
                        <span className="font-light">{bedroom.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <DollarSign className="h-5 w-5 text-amber-500" />
                    <label className="text-sm font-light text-gray-600 tracking-wider">
                      MAX PRICE: {formatPrice(priceRange)}
                    </label>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="50000"
                      max="500000"
                      step="50000"
                      value={priceRange}
                      onChange={(e) => setPriceRange(parseInt(e.target.value))}
                      className="w-full h-1 bg-amber-100 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-amber-400 [&::-webkit-slider-thumb]:to-amber-500 [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 font-light">
                      <span>{formatPrice(50000)}</span>
                      <span>{formatPrice(500000)}</span>
                    </div>
                  </div>
                </div>

                {/* Amenities Filter */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                    <label className="text-sm font-light text-gray-600 tracking-wider">AMENITIES</label>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {amenities.map((amenity) => (
                      <button
                        key={amenity}
                        onClick={() => toggleAmenity(amenity)}
                        className={`flex items-center justify-center p-2 rounded-lg border text-xs transition-all ${
                          selectedAmenities.includes(amenity)
                            ? 'border-amber-300 bg-amber-100/30 text-amber-600'
                            : 'border-amber-100 hover:border-amber-200 hover:bg-amber-50 text-gray-600'
                        }`}
                      >
                        {amenity}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Active Filters */}
              {(selectedLocation !== 'all' || selectedBedrooms !== 'all' || selectedAmenities.length > 0 || priceRange < 500000) && (
                <div className="mt-6 pt-6 border-t border-amber-100">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm text-gray-500 font-light">Active filters:</span>
                    {selectedLocation !== 'all' && (
                      <div className="flex items-center space-x-1 px-3 py-1.5 bg-amber-100/30 border border-amber-200 rounded-full">
                        <MapPin className="h-3 w-3 text-amber-500" />
                        <span className="text-xs text-amber-600 font-light">{locations.find(l => l.value === selectedLocation)?.label}</span>
                      </div>
                    )}
                    {selectedBedrooms !== 'all' && (
                      <div className="flex items-center space-x-1 px-3 py-1.5 bg-amber-100/30 border border-amber-200 rounded-full">
                        <Bed className="h-3 w-3 text-amber-500" />
                        <span className="text-xs text-amber-600 font-light">{bedrooms.find(b => b.value === selectedBedrooms)?.label}</span>
                      </div>
                    )}
                    {selectedAmenities.map(amenity => (
                      <div key={amenity} className="flex items-center space-x-1 px-3 py-1.5 bg-amber-100/30 border border-amber-200 rounded-full">
                        <Sparkles className="h-3 w-3 text-amber-500" />
                        <span className="text-xs text-amber-600 font-light">{amenity}</span>
                      </div>
                    ))}
                    {priceRange < 500000 && (
                      <div className="flex items-center space-x-1 px-3 py-1.5 bg-amber-100/30 border border-amber-200 rounded-full">
                        <DollarSign className="h-3 w-3 text-amber-500" />
                        <span className="text-xs text-amber-600 font-light">Up to {formatPrice(priceRange)}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Results Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">
                {filteredApartments.length} {filteredApartments.length === 1 ? 'Residence' : 'Residences'} Found
              </h2>
              <p className="text-gray-500 font-light">
                Showing premium residences matching your criteria
              </p>
            </div>
            <div className="text-sm text-gray-500 font-light">
              Sort by: <span className="text-amber-600 ml-2">Recommended</span>
            </div>
          </div>
        </div>

        {/* Apartments Grid/List */}
        <div className={viewMode === 'grid' ? 
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : 
          "space-y-6"}>
          {filteredApartments.map(apartment => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>

        {/* No Results */}
        {filteredApartments.length === 0 && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-transparent rounded-full blur-2xl" />
                <div className="relative p-6 border border-amber-200 rounded-2xl bg-white/90 backdrop-blur-sm">
                  <Sparkles className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-gray-900 mb-3">No residences found</h3>
                  <p className="text-gray-600 font-light mb-6">
                    Try adjusting your filters or search criteria to find available residences.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="luxury-button px-6"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
              <p className="text-gray-500 text-sm font-light">
                Contact our concierge for personalized recommendations
              </p>
            </div>
          </div>
        )}

        {/* Load More */}
        {filteredApartments.length > 0 && (
          <div className="mt-12 text-center">
            <button className="group relative px-8 py-3 border border-amber-200 rounded-xl hover:border-amber-300 transition-colors luxury-button-secondary">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/10 to-amber-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative text-gray-900 font-light tracking-wider">Load More Residences</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApartmentsPage;