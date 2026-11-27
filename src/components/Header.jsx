import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Mail, 
  Heart, 
  ShoppingBag, 
  Home, 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown,
  Award,
  ArrowRight,
  Clock,
  Phone
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { products, categories } from '../data/products';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    cartCount, 
    wishlist, 
    setIsCartOpen, 
    setIsWishlistOpen, 
    setIsGoldRateModalOpen, 
    searchQuery,
    setSearchQuery,
    goldRates
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [isGoldRateDropdownOpen, setIsGoldRateDropdownOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const goldRateContainerRef = useRef(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchDropdownOpen(false);
      }
      if (goldRateContainerRef.current && !goldRateContainerRef.current.contains(event.target)) {
        setIsGoldRateDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsSearchDropdownOpen(false);
    setIsGoldRateDropdownOpen(false);
    setMobileSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchDropdownOpen(false);
      navigate(`/collections?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSelectProduct = (productId) => {
    setIsSearchDropdownOpen(false);
    navigate(`/product/${productId}`);
  };

  const handleSelectCategory = (categoryId) => {
    setIsSearchDropdownOpen(false);
    navigate(`/category/${categoryId}`);
  };

  const matchingProducts = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subcategory?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.metal.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : products.slice(0, 3);

  const trendingKeywords = ['Antique Haram', 'Temple Choker', '24K Gold Coin', 'Solitaire Ring', 'Silver Pooja Thali'];

  const navLinks = [
    { label: 'Gold', path: '/category/gold' },
    { label: 'Silver', path: '/category/silver' },
    { label: 'Diamond', path: '/category/diamond' },
    { label: 'Platinum', path: '/category/platinum' },
    { label: 'Coins', path: '/category/coins' },
    { label: 'Kids', path: '/category/kids' },
    { label: 'Men', path: '/category/men' },
    { label: 'Personalised Engraving', path: '/category/engraving' },
    { label: 'Gifts', path: '/category/gifts' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Top Header: Micro announcement bar with hallmark & showroom timings */}
      <div className="bg-[#5E1B27] text-[#FCEED8]/90 text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 border-b border-[#8C3444]/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium tracking-wide">
              100% BIS 916 Hallmarked &amp; HUID Verified • Pure Gold Assurance Since 1964
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#FCEED8]/85">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F3C64F]" /> Showrooms Open 10 AM - 9 PM
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#F3C64F]" /> Toll Free: 1800-425-1964
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Header: Maroon (#782A37) background as in Image 3, with centered logo */}
      <div className="bg-[#782A37] text-[#FCEED8] border-b border-[#8C3444]/60 px-4 sm:px-6 py-2.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left Section: Search box & Today's Gold Rate button (Image 4 reference) */}
          <div className="flex items-center gap-3 flex-1 max-w-sm lg:max-w-md">
            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#FCEED8] hover:text-[#F3C64F] rounded-lg transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Search Container with Smooth Dropdown anchored directly below */}
            <div ref={searchContainerRef} className="relative flex-1 hidden sm:block">
              <form 
                onSubmit={handleSearchSubmit} 
                className="relative flex items-center bg-[#5E1B27] border border-[#943C4D] rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-[#F3C64F] focus-within:border-[#F3C64F] transition shadow-inner h-9"
              >
                <input
                  type="text"
                  placeholder="Type to search.."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!isSearchDropdownOpen) setIsSearchDropdownOpen(true);
                  }}
                  onFocus={() => setIsSearchDropdownOpen(true)}
                  onClick={() => setIsSearchDropdownOpen(true)}
                  className="w-full bg-transparent text-[#FCEED8] placeholder-[#F5DCD0]/70 text-xs sm:text-sm pl-4 pr-2 py-1.5 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-[#F5DCD0] hover:text-white px-1 text-xs"
                    title="Clear"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-[#4A121D] hover:bg-[#3B0B15] text-[#FCEED8] px-3.5 h-full transition flex items-center justify-center cursor-pointer border-l border-[#943C4D]"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 text-[#F3C64F]" />
                </button>
              </form>

              {/* Smooth Dropdown Opening Directly Below the Search Bar */}
              <div
                className={`absolute left-0 top-full mt-2 w-[340px] sm:w-[420px] md:w-[460px] bg-[#FCEED8] rounded-2xl shadow-2xl border border-[#DFCAB4] z-50 overflow-hidden text-[#3d1f1f] transition-all duration-300 ease-out origin-top ${
                  isSearchDropdownOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none invisible'
                }`}
              >
                <div className="p-4 max-h-[70vh] overflow-y-auto space-y-3.5">
                  
                  {/* Department shortcuts */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#734b4b] mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Popular Departments
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {categories.slice(0, 6).map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleSelectCategory(cat.id)}
                          className="bg-white hover:bg-[#ebdcc9] text-[#38060B] border border-[#DFCAB4] px-2.5 py-0.5 rounded-full text-[11px] font-medium transition cursor-pointer"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Trending Keywords (if search is empty) */}
                  {!searchQuery.trim() && (
                    <div className="pt-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#734b4b] mb-1.5">
                        Trending Searches
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {trendingKeywords.map((kw) => (
                          <button
                            key={kw}
                            type="button"
                            onClick={() => {
                              setSearchQuery(kw);
                            }}
                            className="text-xs text-gray-700 bg-white hover:text-[#782A37] hover:bg-[#f0e4d2] px-2.5 py-1 rounded-lg border border-[#e2d5c2] transition"
                          >
                            {kw}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Live matching results */}
                  <div className="pt-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#734b4b] mb-2 flex justify-between">
                      <span>{searchQuery.trim() ? `Matching Creations (${matchingProducts.length})` : 'Curated Heirlooms'}</span>
                    </div>

                    {matchingProducts.length === 0 ? (
                      <div className="text-center py-4 text-xs text-gray-500">
                        No creations found for "{searchQuery}". Try "haram", "gold", "choker" or "coin".
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        {matchingProducts.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleSelectProduct(item.id)}
                            className="flex items-center gap-2.5 p-2 rounded-xl bg-white hover:bg-[#f5ecdf] border border-[#e8dccb] hover:border-[#782A37] cursor-pointer transition group"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-contain rounded-lg bg-[#FCEED8] p-1 border border-gray-100 group-hover:scale-105 transition"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-[#2a1717] truncate group-hover:text-[#782A37]">
                                {item.name}
                              </h4>
                              <div className="text-[10px] text-gray-500">{item.metal} • {item.grossWeight}g</div>
                              <div className="text-xs font-bold text-[#782A37] font-mono">
                                ₹{item.price.toLocaleString('en-IN')}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#782A37] group-hover:translate-x-0.5 transition" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>

                {/* Footer link to view all */}
                <div className="p-2.5 bg-[#ede1d1] border-t border-[#DFCAB4] flex justify-between items-center text-xs">
                  <span className="text-[11px] text-gray-600">Press Enter to explore all</span>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchDropdownOpen(false);
                      navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
                    }}
                    className="text-[#782A37] font-bold flex items-center gap-1 hover:underline text-xs cursor-pointer"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Today's Gold Rate with Smooth Dropdown opening directly below */}
            <div ref={goldRateContainerRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsGoldRateDropdownOpen(!isGoldRateDropdownOpen);
                  setIsSearchDropdownOpen(false);
                }}
                className="flex items-center gap-2 bg-[#FCEED8] hover:bg-[#faebd7] text-[#782A37] px-3.5 h-9 rounded-full text-xs font-semibold shadow-sm hover:shadow transition border border-[#D6B485] cursor-pointer whitespace-nowrap"
                title="Click to view live gold & silver rates"
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#782A37]" />
                <span>Today's Gold Rate</span>
                <span className="bg-[#782A37] text-[#F3C64F] text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                  ₹{goldRates.gold22k.perGram}/g
                </span>
              </button>

              {/* Smooth Dropdown Opening Directly Below Today's Gold Rate */}
              <div
                className={`absolute left-0 sm:left-auto sm:right-0 md:left-0 top-full mt-2 w-[310px] sm:w-[360px] bg-[#FCEED8] rounded-2xl shadow-2xl border border-[#DFCAB4] z-50 overflow-hidden text-[#3d1f1f] transition-all duration-300 ease-out origin-top ${
                  isGoldRateDropdownOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none invisible'
                }`}
              >
                {/* Header */}
                <div className="bg-[#782A37] text-[#FCEED8] px-4 py-2.5 flex items-center justify-between border-b border-[#8C3444]">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#F3C64F]" />
                    <div>
                      <div className="text-xs font-bold font-serif-luxury text-white">Daily Bullion Rates</div>
                      <div className="text-[10px] text-[#F3C64F]">{goldRates.lastUpdated}</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded-full font-mono flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> LIVE
                  </span>
                </div>

                {/* Content */}
                <div className="p-3.5 space-y-2.5">
                  {/* 22K & 24K Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2.5 rounded-xl border-2 border-[#D4AF37] shadow-xs text-center">
                      <span className="text-[9px] font-bold text-[#782A37] bg-[#ede1d1] px-1.5 py-0.2 rounded uppercase">
                        22K (916 BIS)
                      </span>
                      <div className="text-base font-extrabold text-[#222] font-mono mt-0.5">
                        ₹{goldRates.gold22k.perGram.toLocaleString('en-IN')}<span className="text-[10px] font-normal text-gray-500">/g</span>
                      </div>
                      <div className="text-[10px] text-gray-500">8g: ₹{goldRates.gold22k.per8Gram.toLocaleString('en-IN')}</div>
                      <div className="text-[10px] font-semibold text-emerald-700 mt-0.5">
                        +₹{goldRates.gold22k.change} Today
                      </div>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-[#DFCAB4] shadow-xs text-center">
                      <span className="text-[9px] font-bold text-gray-700 bg-gray-100 px-1.5 py-0.2 rounded uppercase">
                        24K (999 Pure)
                      </span>
                      <div className="text-base font-extrabold text-[#222] font-mono mt-0.5">
                        ₹{goldRates.gold24k.perGram.toLocaleString('en-IN')}<span className="text-[10px] font-normal text-gray-500">/g</span>
                      </div>
                      <div className="text-[10px] text-gray-500">8g: ₹{goldRates.gold24k.per8Gram.toLocaleString('en-IN')}</div>
                      <div className="text-[10px] font-semibold text-emerald-700 mt-0.5">
                        +₹{goldRates.gold24k.change} Today
                      </div>
                    </div>
                  </div>

                  {/* 18K and Silver Rows */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded-lg border border-[#e4d4bd] flex justify-between items-center">
                      <span className="text-gray-600 font-medium text-[11px]">18K (750):</span>
                      <span className="font-bold font-mono text-gray-900">₹{goldRates.gold18k.perGram}/g</span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-[#e4d4bd] flex justify-between items-center">
                      <span className="text-gray-600 font-medium text-[11px]">Silver (999):</span>
                      <span className="font-bold font-mono text-gray-900">₹{goldRates.silver999.perGram}/g</span>
                    </div>
                  </div>

                  {/* City rates snapshot */}
                  <div className="bg-white p-2.5 rounded-xl border border-[#e4d4bd] space-y-1">
                    <div className="text-[10px] font-bold text-[#782A37] uppercase tracking-wider flex items-center justify-between">
                      <span>Live City Rates (22K 1g)</span>
                      <span className="text-gray-400 font-normal">Direct Showroom</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-[11px]">
                      <div className="flex justify-between bg-[#FCEED8] p-1 rounded">
                        <span className="text-gray-600">Chennai</span>
                        <span className="font-bold font-mono text-[#782A37]">₹7380</span>
                      </div>
                      <div className="flex justify-between bg-[#FCEED8] p-1 rounded">
                        <span className="text-gray-600">Coimbatore</span>
                        <span className="font-bold font-mono text-[#782A37]">₹7380</span>
                      </div>
                      <div className="flex justify-between bg-[#FCEED8] p-1 rounded">
                        <span className="text-gray-600">Bengaluru</span>
                        <span className="font-bold font-mono text-[#782A37]">₹7375</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer link to full gold rate page */}
                <div className="p-2.5 bg-[#ede1d1] border-t border-[#DFCAB4] flex justify-between items-center text-xs">
                  <span className="text-[11px] text-gray-600">100% BIS 916 Assured</span>
                  <Link
                    to="/gold-rate"
                    onClick={() => setIsGoldRateDropdownOpen(false)}
                    className="text-[#782A37] font-bold flex items-center gap-1 hover:underline text-xs cursor-pointer"
                  >
                    <span>Full Calculator &amp; Charts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Center Section: Surya Hallmark Logo (Centered, Image 1 & 4 reference) */}
          <div className="flex-shrink-0 flex items-center justify-center text-center px-2">
            <Link to="/" className="inline-flex flex-col items-center">
              <img
                src="/logo.png"
                alt="Surya Hallmark Jewellers - Golden Relations, Trusted Since 1964"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
              />
            </Link>
          </div>

          {/* Right Section: Quick Links (Stores, Contact us) + Wishlist & Cart */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 flex-1 max-w-sm lg:max-w-md flex-nowrap">
            
            {/* Quick Links: Stores & Contact us (single line, no wrapping) */}
            <div className="hidden sm:flex items-center gap-3 sm:gap-4 text-xs font-medium text-[#FCEED8] whitespace-nowrap flex-shrink-0">
              <Link 
                to="/stores" 
                className="flex items-center gap-1.5 hover:text-[#F3C64F] transition py-1 whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5 text-[#F3C64F] flex-shrink-0" />
                <span className="whitespace-nowrap">Stores</span>
              </Link>
              <span className="text-[#943C4D]">|</span>

              <Link 
                to="/contact" 
                className="flex items-center gap-1.5 hover:text-[#F3C64F] transition py-1 whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-[#F3C64F] flex-shrink-0" />
                <span className="whitespace-nowrap">Contact us</span>
              </Link>
            </div>

            {/* Mobile search trigger */}
            <button
              type="button"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="sm:hidden p-2 text-[#FCEED8] hover:text-[#F3C64F]"
              aria-label="Search"
            >
              {mobileSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>

            {/* Wishlist Button */}
            <button
              type="button"
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-[#FCEED8] hover:text-[#F3C64F] transition rounded-full hover:bg-[#5E1B27]"
              title="View Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#F3C64F] text-[#782A37] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#5E1B27] hover:bg-[#38060B] text-[#FCEED8] px-3 py-1.5 rounded-full border border-[#943C4D] transition cursor-pointer shadow-inner"
              title="View Bag"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#F3C64F]" />
              <span className="hidden sm:inline text-xs font-semibold">Bag</span>
              {cartCount > 0 && (
                <span className="bg-[#F3C64F] text-[#782A37] font-bold text-[11px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile search bar if toggled */}
      {mobileSearchOpen && (
        <div className="sm:hidden bg-[#5E1B27] p-3 border-b border-[#8C3444] animate-fadeIn">
          <form onSubmit={handleSearchSubmit} className="flex items-center bg-[#4A121D] border border-[#943C4D] rounded-full overflow-hidden h-9 px-3">
            <input
              type="text"
              autoFocus
              placeholder="Search jewellery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-white text-xs placeholder-[#d8bebe] focus:outline-none"
            />
            <button type="submit" className="text-[#F3C64F] pl-2 cursor-pointer">
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Bottom Header Row: Centered Navigation Menu with Maroon Underline on Active Item */}
      <nav className="hidden lg:block bg-[#FCEED8] border-b border-[#DFCAB4] text-[#38060B] shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-center">
          <div className="flex items-center justify-center space-x-2 xl:space-x-5 h-full flex-nowrap">
            
            {/* Home Icon */}
            <Link
              to="/"
              className={`h-full px-3 flex items-center justify-center whitespace-nowrap border-b-2 transition-colors duration-150 ${
                location.pathname === '/' 
                  ? 'text-[#782A37] font-bold border-[#782A37]' 
                  : 'text-[#5c3737] border-transparent hover:text-[#782A37] hover:border-[#782A37]/30'
              }`}
              title="Home"
            >
              <Home className="w-4 h-4" />
            </Link>

            {/* Category Links: Centered with Maroon Active Underline */}
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`h-full px-3 flex items-center text-xs xl:text-sm font-semibold tracking-wide whitespace-nowrap border-b-2 transition-colors duration-150 ${
                    isActive 
                      ? 'text-[#782A37] font-bold border-[#782A37]' 
                      : 'text-[#4a2626] border-transparent hover:text-[#782A37] hover:border-[#782A37]/30'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCEED8] border-b border-[#d4be9f] text-[#3d1f1f] px-4 py-3 space-y-2 shadow-xl animate-fadeIn">
          {/* Quick Gold Rate on Mobile */}
          <div className="bg-[#782A37] text-[#FCEED8] p-3 rounded-lg flex items-center justify-between">
            <div>
              <div className="text-[11px] text-[#F3C64F] uppercase font-bold tracking-wider">Live Gold Rate Today</div>
              <div className="text-sm font-semibold">22K: ₹{goldRates.gold22k.perGram}/g | 24K: ₹{goldRates.gold24k.perGram}/g</div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/gold-rate');
              }}
              className="bg-[#F3C64F] text-[#782A37] text-xs font-bold px-2.5 py-1 rounded shadow cursor-pointer"
            >
              View More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 bg-[#FCEED8] rounded-lg text-xs font-bold text-[#782A37]"
            >
              <Home className="w-4 h-4" /> Home
            </Link>
            <Link
              to="/craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 bg-[#0e1d3b] text-white rounded-lg text-xs font-bold"
            >
              <Sparkles className="w-4 h-4 text-[#F3C64F]" /> Craftsmanship
            </Link>
          </div>

          <div className="border-t border-[#DFCAB4] pt-2 space-y-1">
            <div className="text-[11px] font-bold text-[#754d4d] uppercase tracking-wider px-2 pt-1">Collections</div>
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-semibold rounded transition ${
                    isActive 
                      ? 'text-[#782A37] bg-[#ebdccb] border-l-4 border-[#782A37] font-bold' 
                      : 'text-[#38060B] hover:bg-[#ede1d1]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-[#DFCAB4] pt-2 space-y-1 text-xs">
            <Link
              to="/stores"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-[#FCEED8] rounded font-medium"
            >
              <MapPin className="w-4 h-4 text-[#782A37]" /> Our Showrooms
            </Link>
            <Link
              to="/schemes"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-[#FCEED8] rounded font-medium"
            >
              <Calendar className="w-4 h-4 text-[#782A37]" /> Swarna Nidhi Savings Scheme
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-[#FCEED8] rounded font-medium"
            >
              <Mail className="w-4 h-4 text-[#782A37]" /> Contact &amp; Support
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
