import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, ShieldCheck, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="group bg-white rounded-2xl border border-[#d8c5aa] hover:border-[#4F0C12] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
      
      {/* Top badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.isBestseller && (
          <span className="bg-[#4F0C12] text-[#F3C64F] text-[10px] font-bold px-2 py-0.5 rounded shadow uppercase tracking-wider">
            Bestseller
          </span>
        )}
        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[9px] font-semibold px-1.5 py-0.5 rounded shadow-xs flex items-center gap-1">
          <ShieldCheck className="w-2.5 h-2.5" /> BIS 916
        </span>
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-xs transition shadow-sm ${
          isWishlisted
            ? 'bg-red-50 text-red-600'
            : 'bg-white/80 text-gray-600 hover:text-red-600 hover:bg-white'
        }`}
        title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
      >
        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
      </button>

      {/* Product Image with Quick View Hover */}
      <div className="relative aspect-square overflow-hidden bg-[#F9E2CC] p-4 flex items-center justify-center">
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-106 transition duration-500"
            loading="lazy"
          />
        </Link>

        {/* Hover Quick View Pill */}
        <button
          onClick={() => setQuickViewProduct(product)}
          className="absolute bottom-3 inset-x-4 bg-white/95 hover:bg-[#4F0C12] text-[#38060B] hover:text-white text-xs font-semibold py-2 px-3 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Information */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="text-[11px] font-semibold text-[#8b4747] uppercase tracking-wider">
            {product.metal}
          </div>
          <Link
            to={`/product/${product.id}`}
            className="block text-sm font-bold text-[#2a1717] hover:text-[#4F0C12] line-clamp-2 leading-snug transition"
          >
            {product.name}
          </Link>
          <div className="text-xs text-gray-500 mt-1 flex items-center justify-between">
            <span>Wt: <strong>{product.grossWeight}g</strong></span>
            {product.rating && (
              <span className="flex items-center gap-1 text-amber-700 font-semibold text-[11px]">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                {product.rating}
              </span>
            )}
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-2 border-t border-[#f0e3d2] flex items-center justify-between gap-2">
          <div>
            <div className="text-base font-extrabold text-[#4F0C12] font-mono leading-none">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
            {product.originalPrice && (
              <div className="text-[10px] text-gray-400 line-through mt-0.5 font-mono">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </div>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="bg-[#4F0C12] hover:bg-[#3A070C] text-[#F9E2CC] p-2.5 rounded-xl shadow-sm hover:shadow transition flex items-center justify-center cursor-pointer"
            title="Add to Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4 text-[#F3C64F]" />
          </button>
        </div>

      </div>

    </div>
  );
}
