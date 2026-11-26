import React, { useState } from 'react';
import { X, Search, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { products, categories } from '../data/products';
import { useNavigate } from 'react-router-dom';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useShop();
  const navigate = useNavigate();

  if (!isSearchOpen) return null;

  const filtered = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products.slice(0, 4);

  const handleSelectProduct = (id) => {
    setIsSearchOpen(false);
    navigate(`/product/${id}`);
  };

  const handleSelectCategory = (catId) => {
    setIsSearchOpen(false);
    navigate(`/category/${catId}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FFFDD0] rounded-2xl shadow-2xl border border-[#d8c5aa] overflow-hidden text-[#3d1f1f]">
        
        {/* Search Input Bar */}
        <div className="bg-[#6B2C2C] p-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#F3C64F] flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search gold necklaces, diamond rings, silver pooja items, 24K coins..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-[#FFFDD0] placeholder-[#dcbaba] text-sm focus:outline-none"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-gray-300 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="bg-[#521f1f] text-[#FFFDD0] px-3 py-1 rounded-md text-xs font-semibold hover:bg-[#3d1616]"
          >
            Esc
          </button>
        </div>

        {/* Content */}
        <div className="p-5 max-h-[70vh] overflow-y-auto space-y-4">
          
          {/* Quick Categories */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#734b4b] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Popular Departments
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className="bg-white hover:bg-[#ede3d4] text-[#422222] border border-[#d8c5aa] px-3 py-1 rounded-full text-xs font-medium transition"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results List */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#734b4b] mb-2">
              {searchQuery.trim() ? `Found ${filtered.length} Results` : 'Recommended For You'}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-8 text-xs text-gray-500">
                No matching jewellery found for "{searchQuery}". Try searching for "necklace", "bangles", "coins" or "temple".
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectProduct(item.id)}
                    className="flex gap-3 bg-white p-2.5 rounded-xl border border-[#e4d4bd] hover:border-[#6B2C2C] shadow-xs cursor-pointer transition group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg border border-gray-100 group-hover:scale-105 transition"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#331c1c] truncate group-hover:text-[#6B2C2C]">
                        {item.name}
                      </h4>
                      <div className="text-[10px] text-gray-500">{item.metal}</div>
                      <div className="text-xs font-bold text-[#6B2C2C] font-mono mt-1">
                        ₹{item.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 bg-[#ede3d4] border-t border-[#d8c5aa] flex justify-between items-center text-xs">
          <span className="text-gray-600">All prices computed with live daily bullion rates</span>
          <button
            onClick={() => {
              setIsSearchOpen(false);
              navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
            }}
            className="text-[#6B2C2C] font-bold flex items-center gap-1 hover:underline"
          >
            <span>View All Search Results</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
