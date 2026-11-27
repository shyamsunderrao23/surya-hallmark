import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { 
  Filter, 
  SlidersHorizontal, 
  Sparkles, 
  Check, 
  X, 
  ChevronDown, 
  ArrowUpDown,
  ShieldCheck,
  Search
} from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CatalogPage() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryId || 'all');
  const [selectedMetal, setSelectedMetal] = useState('all');
  const [maxPrice, setMaxPrice] = useState(500000);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state if categoryId from route changes
  React.useEffect(() => {
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
  }, [categoryId]);

  const currentCategoryInfo = categories.find((c) => c.id === selectedCategory);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Metal match
      if (selectedMetal !== 'all' && !item.metal.toLowerCase().includes(selectedMetal.toLowerCase())) {
        return false;
      }
      // Max price
      if (item.price > maxPrice) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesSubcategory = item.subcategory?.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCategory && !matchesSubcategory && !matchesDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'weight') return a.grossWeight - b.grossWeight;
      if (sortBy === 'rating') return (b.rating || 5) - (a.rating || 5);
      return 0; // featured/default
    });
  }, [selectedCategory, selectedMetal, maxPrice, searchQuery, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedMetal('all');
    setMaxPrice(500000);
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      
      {/* Category Hero / Title Banner */}
      <div className="bg-[#F9E2CC] border border-[#d8c5aa] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8b4747]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Surya Hallmark Curated Catalog</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-serif-luxury text-[#381c1c]">
            {currentCategoryInfo ? currentCategoryInfo.name : searchQuery ? `Search: "${searchQuery}"` : 'All Jewellery Collections'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            {currentCategoryInfo ? currentCategoryInfo.description : 'Explore 100% BIS 916 hallmarked pure gold, diamond solitaires, sterling silver, and bullion coins.'}
          </p>
        </div>
      </div>

      {/* Main Grid & Filters */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Desktop Filter Sidebar */}
        <aside className="hidden lg:block w-64 space-y-6 flex-shrink-0">
          <div className="bg-white p-5 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#f0e3d2]">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#381c1c] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#4F0C12]" /> Filters
              </h3>
              {(selectedCategory !== 'all' || selectedMetal !== 'all' || maxPrice < 500000 || searchQuery) && (
                <button
                  onClick={clearAllFilters}
                  className="text-[11px] text-[#4F0C12] font-semibold hover:underline"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Department */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                Department
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    selectedCategory === 'all'
                      ? 'bg-[#4F0C12] text-white font-bold'
                      : 'text-gray-700 hover:bg-[#F9E2CC]'
                  }`}
                >
                  All Categories ({products.length})
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition flex justify-between items-center ${
                      selectedCategory === cat.id
                        ? 'bg-[#4F0C12] text-white font-bold'
                        : 'text-gray-700 hover:bg-[#F9E2CC]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-75">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Metal / Purity Filter */}
            <div className="space-y-2 pt-2 border-t border-[#f0e3d2]">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                Metal Purity
              </label>
              <div className="space-y-1">
                {[
                  { label: 'All Metals', val: 'all' },
                  { label: '22K Gold (916 BIS)', val: '22k' },
                  { label: '24K Pure Gold (999)', val: '24k' },
                  { label: '18K Diamond Gold', val: '18k' },
                  { label: '92.5 Sterling Silver', val: 'silver' },
                  { label: '950 Pure Platinum', val: 'platinum' }
                ].map((m) => (
                  <button
                    key={m.val}
                    onClick={() => setSelectedMetal(m.val)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center justify-between ${
                      selectedMetal === m.val
                        ? 'bg-[#F9E2CC] text-[#4F0C12] font-bold border border-[#d8c5aa]'
                        : 'text-gray-600 hover:bg-[#F9E2CC]'
                    }`}
                  >
                    <span>{m.label}</span>
                    {selectedMetal === m.val && <Check className="w-3.5 h-3.5 text-[#4F0C12]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-2 pt-2 border-t border-[#f0e3d2]">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-gray-800 uppercase tracking-wide">Budget Range</span>
                <span className="font-bold text-[#4F0C12] font-mono">
                  Up to ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#4F0C12] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>₹10,000</span>
                <span>₹5,00,000+</span>
              </div>
            </div>

            {/* Hallmark Assurance Callout */}
            <div className="bg-[#F9E2CC] p-3 rounded-xl border border-[#d8c5aa] text-[11px] text-[#4a2424] space-y-1">
              <div className="font-bold flex items-center gap-1 text-[#4F0C12]">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% BIS Hallmarked
              </div>
              <p>Every purchase carries official HUID certificate &amp; zero exchange deduction guarantee.</p>
            </div>

          </div>
        </aside>

        {/* Products Column */}
        <main className="flex-1 space-y-6">
          
          {/* Top Control Bar: Total count & Sort Dropdown */}
          <div className="bg-white p-3.5 rounded-2xl border border-[#d8c5aa] shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-gray-700">
              Showing <strong className="text-[#4F0C12]">{filteredProducts.length}</strong> creations
              {searchQuery && <span> for "<strong>{searchQuery}</strong>"</span>}
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Trigger Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-1.5 bg-[#F9E2CC] text-[#4F0C12] px-3 py-1.5 rounded-lg text-xs font-semibold"
              >
                <Filter className="w-3.5 h-3.5" /> Filters
              </button>

              {/* Sort by */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-500 hidden sm:inline">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#F9E2CC] border border-[#d8c5aa] text-[#3d1f1f] text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-[#4F0C12]"
                >
                  <option value="featured">Featured Heirlooms</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="weight">Gold Weight</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Chips */}
          {(selectedCategory !== 'all' || selectedMetal !== 'all' || maxPrice < 500000 || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-gray-500">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-white border border-[#d8c5aa] px-2.5 py-1 rounded-full text-xs font-medium text-[#4F0C12]">
                  Dept: {categories.find(c => c.id === selectedCategory)?.name}
                  <button onClick={() => setSelectedCategory('all')}><X className="w-3 h-3" /></button>
                </span>
              )}
              {selectedMetal !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-white border border-[#d8c5aa] px-2.5 py-1 rounded-full text-xs font-medium text-[#4F0C12]">
                  Metal: {selectedMetal.toUpperCase()}
                  <button onClick={() => setSelectedMetal('all')}><X className="w-3 h-3" /></button>
                </span>
              )}
              {maxPrice < 500000 && (
                <span className="inline-flex items-center gap-1 bg-white border border-[#d8c5aa] px-2.5 py-1 rounded-full text-xs font-medium text-[#4F0C12]">
                  &le; ₹{maxPrice.toLocaleString('en-IN')}
                  <button onClick={() => setMaxPrice(500000)}><X className="w-3 h-3" /></button>
                </span>
              )}
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#d8c5aa] p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#F9E2CC] text-[#4F0C12] rounded-full flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 opacity-60" />
              </div>
              <h3 className="text-base font-bold text-gray-800">No matching jewellery items</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try widening your price filter or selecting "All Categories" to view our complete bridal and bullion range.
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-[#4F0C12] text-[#F9E2CC] text-xs font-bold px-5 py-2.5 rounded-xl shadow"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </main>

      </div>

      {/* Mobile Filter Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-black/60 backdrop-blur-xs">
          <div className="w-4/5 max-w-xs bg-[#F9E2CC] h-full p-5 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#d8c5aa] pb-3">
                <h3 className="font-bold text-sm text-[#381c1c]">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)}><X className="w-5 h-5" /></button>
              </div>

              {/* Department */}
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase text-gray-500">Department</div>
                <button
                  onClick={() => { setSelectedCategory('all'); setMobileFilterOpen(false); }}
                  className="w-full text-left py-1 text-xs"
                >
                  All Categories
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setSelectedCategory(c.id); setMobileFilterOpen(false); }}
                    className="w-full text-left py-1 text-xs"
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full bg-[#4F0C12] text-white py-2.5 rounded-xl text-xs font-bold"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
