import React, { useState } from 'react';
import ApartmentCard from '../components/ApartmentCard';
import apartmentsData from '../data/apartmentsData';
import { 
  Filter, Grid, List, ChevronDown, Sparkles, Sliders, 
  MapPin, Bed, DollarSign, X, Search, Map 
} from 'lucide-react';

const ApartmentsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState(1000000); // Increased for luxury tier
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const locations = [
    { value: 'all', label: 'All Nigeria', tier: 'all' },
    { value: 'Lekki Phase 1, Lagos', label: 'Lekki Phase 1', tier: 'premium' },
    { value: 'Victoria Island, Lagos', label: 'Victoria Island', tier: 'executive' },
    { value: 'Ikoyi, Lagos', label: 'Old Ikoyi', tier: 'ultra-luxury' },
    { value: 'Banana Island, Lagos', label: 'Banana Island', tier: 'exclusive' },
    { value: 'Maitama, Abuja', label: 'Maitama District', tier: 'premium' },
  ];

  const filteredApartments = apartmentsData.filter(apartment => {
    const matchesLocation = selectedLocation === 'all' || apartment.location === selectedLocation;
    const matchesBedrooms = selectedBedrooms === 'all' || 
      (selectedBedrooms === '4+' ? apartment.bedrooms >= 4 : apartment.bedrooms === parseInt(selectedBedrooms));
    const matchesPrice = apartment.price <= priceRange;
    const matchesSearch = searchQuery === '' || 
      apartment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apartment.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLocation && matchesBedrooms && matchesPrice && matchesSearch;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumSignificantDigits: 3
    }).format(price) + "+";
  };

  return (
    <div className="min-h-screen bg-[#FCFBFA]">
      {/* Editorial Header */}
      <section className="relative pt-24 pb-16 px-6 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <nav className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.3em] uppercase text-amber-600 mb-6">
                <span>Residences</span>
                <span className="text-stone-300">/</span>
                <span className="text-stone-400 font-medium">The 2026 Collection</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-serif italic text-stone-900 leading-tight">
                Curated <br />Living Spaces
              </h1>
            </div>
            
            <div className="flex flex-col items-end">
              <p className="text-stone-500 font-light text-right max-w-xs mb-8">
                A hand-selected portfolio of properties that redefine the standard of luxury across West Africa.
              </p>
              
              {/* Refined Search Input */}
              <div className="w-full md:w-80 relative group">
                <input
                  type="text"
                  placeholder="Find your sanctuary..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 border-b border-stone-200 py-3 pl-0 pr-10 text-sm focus:outline-none focus:border-amber-500 transition-colors bg-transparent"
                />
                <Search className="absolute right-0 top-3 h-4 w-4 text-stone-400 group-focus-within:text-amber-600 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Filter Bar */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                className="flex items-center space-x-2 text-[11px] font-bold tracking-widest uppercase text-stone-900 group"
              >
                <Sliders className={`h-4 w-4 transition-transform ${isFilterExpanded ? 'rotate-90' : ''}`} />
                <span>Filter Collection</span>
              </button>
              
              {/* Quick Summary (Visible on Desktop) */}
              <div className="hidden lg:flex items-center space-x-4 text-xs text-stone-400">
                <span className="px-3 py-1 bg-stone-50 rounded-full border border-stone-100">
                  {filteredApartments.length} Properties Found
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
               <div className="flex bg-stone-100 p-1 rounded-sm">
                 <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-stone-400'}`}
                 >
                   <Grid size={14} />
                 </button>
                 <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 transition-all ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-stone-400'}`}
                 >
                   <List size={14} />
                 </button>
               </div>
               <button className="flex items-center space-x-2 text-[11px] font-bold tracking-widest uppercase text-stone-900">
                 <Map size={14} />
                 <span className="hidden sm:inline">Map View</span>
               </button>
            </div>
          </div>
        </div>

        {/* Expanded Drawer - Architectural Style */}
        {isFilterExpanded && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-stone-200 p-8 animate-in slide-in-from-top duration-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">Geography</h4>
                <div className="flex flex-col space-y-3">
                  {locations.map(loc => (
                    <button 
                      key={loc.value}
                      onClick={() => setSelectedLocation(loc.value)}
                      className={`text-sm text-left hover:text-amber-600 transition-colors ${selectedLocation === loc.value ? 'text-amber-600 font-medium' : 'text-stone-600 font-light'}`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">Investment Range</h4>
                <input
                  type="range"
                  min="200000"
                  max="2000000"
                  step="100000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full accent-amber-600 mb-4"
                />
                <div className="flex justify-between text-[10px] text-stone-400 uppercase tracking-widest font-bold">
                  <span>From 200k</span>
                  <span className="text-amber-600">Up to {formatPrice(priceRange)}</span>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">Composition</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['1', '2', '3', '4+'].map(num => (
                    <button 
                      key={num}
                      onClick={() => setSelectedBedrooms(num)}
                      className={`py-2 border text-[10px] font-bold tracking-widest uppercase transition-all ${selectedBedrooms === num ? 'bg-stone-900 text-white border-stone-900' : 'border-stone-100 hover:border-stone-300 text-stone-500'}`}
                    >
                      {num === '4+' ? '4+ Suites' : `${num} Suite${num === '1' ? '' : 's'}`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">Refine</h4>
                  <button 
                    onClick={() => {
                      setSelectedLocation('all');
                      setSelectedBedrooms('all');
                      setPriceRange(1000000);
                      setSearchQuery('');
                    }}
                    className="text-xs text-stone-400 hover:text-stone-900 underline underline-offset-4 font-light transition-colors"
                  >
                    Reset all parameters
                  </button>
                </div>
                <button 
                  onClick={() => setIsFilterExpanded(false)}
                  className="w-full bg-stone-900 text-white py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-amber-600 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Results Grid */}
        <div className={viewMode === 'grid' ? 
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" : 
          "flex flex-col space-y-12"}>
          {filteredApartments.map(apartment => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>

        {/* Empty State */}
        {filteredApartments.length === 0 && (
          <div className="text-center py-32 border border-dashed border-stone-200 rounded-sm">
            <h3 className="text-2xl font-serif italic text-stone-900 mb-4">No matching sanctuaries</h3>
            <p className="text-stone-500 font-light mb-8 max-w-xs mx-auto">
              Our portfolio is constantly evolving. Please contact our concierge for off-market opportunities.
            </p>
            <button onClick={() => setSelectedLocation('all')} className="text-[11px] font-bold tracking-widest uppercase text-amber-600 border-b border-amber-600 pb-1">
              View All Available
            </button>
          </div>
        )}

        {/* Subtle Pagination/Load More */}
        {filteredApartments.length > 0 && (
          <div className="mt-24 text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="h-px w-24 bg-stone-100"></div>
              <button className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 hover:text-stone-900 transition-colors">
                End of Collection
              </button>
              <div className="h-px w-24 bg-stone-100"></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ApartmentsPage;