import React, { useState } from 'react';
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
  PhoneCall,
  Clock
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    cartCount, 
    wishlist, 
    setIsCartOpen, 
    setIsWishlistOpen, 
    setIsGoldRateModalOpen, 
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    goldRates
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      setIsSearchOpen(true);
    }
  };

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
      {/* Top micro announcement bar */}
      <div className="bg-[#521f1f] text-[#FFFDD0]/90 text-[11px] sm:text-xs py-1.5 px-4 border-b border-[#7d3535]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium tracking-wide">
              100% BIS 916 Hallmarked &amp; HUID Verified • Pure Gold Assurance Since 1964
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#FFFDD0]/80">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F3C64F]" /> Showrooms Open 10 AM - 9 PM
            </span>
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#F3C64F]" /> Toll Free: 1800-425-1964
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Header: Maroon (#6B2C2C) background as in Image 3, with centered logo */}
      <div className="bg-[#6B2C2C] text-[#FFFDD0] border-b border-[#823939]/60 px-4 sm:px-6 py-2.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left Section: Search box & Today's Gold Rate button (Image 4 reference) */}
          <div className="flex items-center gap-3 flex-1 max-w-sm lg:max-w-md">
            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#FFFDD0] hover:text-[#F3C64F] rounded-lg transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Search Input Box with rounded border radius */}
            <form 
              onSubmit={handleSearchSubmit} 
              className="relative flex-1 hidden sm:flex items-center bg-[#562222] border border-[#8f4444] rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-[#F3C64F] focus-within:border-[#F3C64F] transition shadow-inner h-9"
            >
              <input
                type="text"
                placeholder="Type to search.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                className="w-full bg-transparent text-[#FFFDD0] placeholder-[#e8cece]/70 text-xs sm:text-sm pl-4 pr-2 py-1.5 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#3d1616] hover:bg-[#2e1010] text-[#FFFDD0] px-3.5 h-full transition flex items-center justify-center cursor-pointer border-l border-[#8f4444]"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-[#F3C64F]" />
              </button>
            </form>

            {/* Today's Gold Rate Button */}
            <button
              type="button"
              onClick={() => setIsGoldRateModalOpen(true)}
              className="flex items-center gap-2 bg-[#FFFDD0] hover:bg-[#faebd7] text-[#6B2C2C] px-3.5 h-9 rounded-full text-xs font-semibold shadow-sm hover:shadow transition border border-[#d8b888] cursor-pointer whitespace-nowrap"
              title="Click to view full live gold & silver rates"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#6B2C2C]" />
              <span>Today's Gold Rate</span>
              <span className="bg-[#6B2C2C] text-[#F3C64F] text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                ₹{goldRates.gold22k.perGram}/g
              </span>
            </button>
          </div>

          {/* Center Section: Surya Hallmark Logo (Centered, Image 1 & 4 reference) */}
          <div className="flex-shrink-0 flex items-center justify-center text-center px-2">
            <Link to="/" className="group inline-flex flex-col items-center">
              <img
                src="/logo.png"
                alt="Surya Hallmark Jewellers - Golden Relations, Trusted Since 1964"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] group-hover:scale-102 transition duration-200"
              />
            </Link>
          </div>

          {/* Right Section: Quick Links (Stores, Contact us) + Wishlist & Cart */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 flex-1 max-w-sm lg:max-w-md flex-nowrap">
            
            {/* Quick Links: Stores & Contact us (single line, no wrapping) */}
            <div className="hidden sm:flex items-center gap-3 sm:gap-4 text-xs font-medium text-[#FFFDD0] whitespace-nowrap flex-shrink-0">
              <Link 
                to="/stores" 
                className="flex items-center gap-1.5 hover:text-[#F3C64F] transition py-1 whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5 text-[#F3C64F] flex-shrink-0" />
                <span className="whitespace-nowrap">Stores</span>
              </Link>
              <span className="text-[#8f4444]">|</span>

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
              onClick={() => setIsSearchOpen(true)}
              className="sm:hidden p-2 text-[#FFFDD0] hover:text-[#F3C64F]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              type="button"
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-[#FFFDD0] hover:text-[#F3C64F] transition rounded-full hover:bg-[#562222]"
              title="View Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#F3C64F] text-[#6B2C2C] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#541f1f] hover:bg-[#461919] text-[#FFFDD0] px-3 py-1.5 rounded-full border border-[#8a4242] transition cursor-pointer shadow-inner"
              title="View Bag"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#F3C64F]" />
              <span className="hidden sm:inline text-xs font-semibold">Bag</span>
              {cartCount > 0 && (
                <span className="bg-[#F3C64F] text-[#6B2C2C] font-bold text-[11px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Header Row (Navigation Bar from Image 4): Light Cream / Soft Amber (#FFFDD0 / #FFFDD0) */}
      <nav className="hidden lg:block bg-[#FFFDD0] border-b border-[#d8c5aa] text-[#422222] shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-1 xl:space-x-4 py-2">
            
            {/* Home Icon */}
            <Link
              to="/"
              className={`p-2 rounded-md hover:text-[#6B2C2C] hover:bg-[#FFFDD0] transition ${
                location.pathname === '/' ? 'text-[#6B2C2C] font-bold bg-[#FFFDD0]' : 'text-[#5c3737]'
              }`}
              title="Home"
            >
              <Home className="w-4 h-4" />
            </Link>

            {/* Category Links matching Image 4 */}
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-xs xl:text-sm font-semibold tracking-wide px-3 py-1.5 rounded transition ${
                    isActive 
                      ? 'text-[#6B2C2C] bg-[#FFFDD0] border-b-2 border-[#6B2C2C]' 
                      : 'text-[#4a2626] hover:text-[#6B2C2C] hover:bg-[#e8d8c2]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Highlighted Badge button: Craftsmanship (Image 4 reference) */}
          <div className="py-1.5">
            <Link
              to="/craftsmanship"
              className="inline-flex items-center gap-1.5 bg-[#0e1d3b] hover:bg-[#152a55] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm hover:shadow transition border border-[#233f75]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F3C64F]" />
              <span>Craftsmanship</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDD0] border-b border-[#d4be9f] text-[#3d1f1f] px-4 py-3 space-y-2 shadow-xl animate-fadeIn">
          {/* Quick Gold Rate on Mobile */}
          <div className="bg-[#6B2C2C] text-[#FFFDD0] p-3 rounded-lg flex items-center justify-between">
            <div>
              <div className="text-[11px] text-[#F3C64F] uppercase font-bold tracking-wider">Live Gold Rate Today</div>
              <div className="text-sm font-semibold">22K: ₹{goldRates.gold22k.perGram}/g | 24K: ₹{goldRates.gold24k.perGram}/g</div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsGoldRateModalOpen(true);
              }}
              className="bg-[#F3C64F] text-[#6B2C2C] text-xs font-bold px-2.5 py-1 rounded shadow"
            >
              View More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 bg-[#FFFDD0] rounded-lg text-xs font-bold text-[#6B2C2C]"
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

          <div className="border-t border-[#d8c5aa] pt-2 space-y-1">
            <div className="text-[11px] font-bold text-[#754d4d] uppercase tracking-wider px-2 pt-1">Collections</div>
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-[#422222] hover:bg-[#FFFDD0] rounded transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-[#d8c5aa] pt-2 space-y-1 text-xs">
            <Link
              to="/stores"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-[#FFFDD0] rounded font-medium"
            >
              <MapPin className="w-4 h-4 text-[#6B2C2C]" /> Our Showrooms
            </Link>
            <Link
              to="/schemes"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-[#FFFDD0] rounded font-medium"
            >
              <Calendar className="w-4 h-4 text-[#6B2C2C]" /> Swarna Nidhi Savings Scheme
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-[#FFFDD0] rounded font-medium"
            >
              <Mail className="w-4 h-4 text-[#6B2C2C]" /> Contact &amp; Support
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
