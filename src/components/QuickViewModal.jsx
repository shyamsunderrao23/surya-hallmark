import React, { useState } from 'react';
import { X, ShieldCheck, Heart, ShoppingBag, Eye, Star, Sparkles, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useShop();
  const [selectedSize, setSelectedSize] = useState('Standard');
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!quickViewProduct) return null;

  const item = quickViewProduct;
  const isWishlisted = isInWishlist(item.id);

  const handleAddToCart = () => {
    addToCart(item, 1, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#F8F1E7] rounded-2xl shadow-2xl border border-[#d8c5aa] overflow-hidden text-[#3d1f1f] flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3 right-3 z-10 p-1.5 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 bg-white flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#d8c5aa]">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-72 w-auto object-contain rounded-lg shadow-sm"
          />
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-[#6B2C2C] text-[#F3C64F] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                {item.category}
              </span>
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> BIS 916 HUID
              </span>
            </div>

            <h3 className="text-lg font-bold font-serif-luxury text-[#2b1717] leading-snug">
              {item.name}
            </h3>

            {/* Ratings */}
            <div className="flex items-center gap-1.5 text-xs text-amber-700">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-gray-800">5.0</span>
              <span className="text-gray-500">({item.reviewsCount || 42} verified reviews)</span>
            </div>

            {/* Price */}
            <div className="pt-1">
              <div className="text-2xl font-extrabold text-[#6B2C2C] font-mono">
                ₹{item.price.toLocaleString('en-IN')}
              </div>
              <div className="text-[11px] text-gray-500">
                Includes metal value, hallmark certification &amp; GST
              </div>
            </div>

            {/* Specs Mini Table */}
            <div className="bg-[#F8F1E7] p-3 rounded-xl border border-[#d8c5aa] text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Gross Weight:</span>
                <span className="font-semibold text-gray-900">{item.grossWeight} grams</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Net Metal Weight:</span>
                <span className="font-semibold text-gray-900">{item.netWeight} grams</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Purity Standard:</span>
                <span className="font-semibold text-[#6B2C2C]">{item.metal}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 space-y-2">
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#6B2C2C] hover:bg-[#521f1f] text-[#F8F1E7] py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 text-[#F3C64F]" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#F3C64F]" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(item.id)}
                className={`p-2.5 rounded-xl border border-[#d8c5aa] transition ${
                  isWishlisted ? 'bg-red-50 text-red-600 border-red-200' : 'bg-white text-gray-700 hover:text-red-600'
                }`}
                title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            <Link
              to={`/product/${item.id}`}
              onClick={() => setQuickViewProduct(null)}
              className="block text-center text-xs font-bold text-[#6B2C2C] hover:underline pt-1"
            >
              View Full Hallmark Specifications &amp; Price Breakup &rarr;
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
