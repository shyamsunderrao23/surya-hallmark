import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

export default function WishlistDrawer() {
  const { isWishlistOpen, setIsWishlistOpen, wishlist, toggleWishlist, addToCart } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDD0] shadow-2xl flex flex-col border-l border-[#d8c5aa]">
          
          {/* Header */}
          <div className="bg-[#6B2C2C] text-[#FFFDD0] p-4 flex items-center justify-between border-b border-[#823939]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#F3C64F] fill-[#F3C64F]" />
              <h3 className="font-serif-luxury font-bold text-base tracking-wide">
                Your Saved Wishlist ({wishlistProducts.length})
              </h3>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1 text-[#FFFDD0]/80 hover:text-white rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-[#FFFDD0] text-[#6B2C2C] rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 opacity-60" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Your wishlist is empty</p>
                <p className="text-xs text-gray-500">Save your favorite designs for weddings, gifts, or investment.</p>
                <Link
                  to="/collections"
                  onClick={() => setIsWishlistOpen(false)}
                  className="inline-block mt-2 bg-[#6B2C2C] hover:bg-[#521f1f] text-[#FFFDD0] text-xs font-bold px-5 py-2.5 rounded-lg shadow"
                >
                  Browse Designs
                </Link>
              </div>
            ) : (
              wishlistProducts.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-3 bg-white p-3 rounded-xl border border-[#d8c5aa] shadow-xs relative"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-lg border border-gray-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#331c1c] truncate">
                      {item.name}
                    </h4>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      {item.metal} • {item.grossWeight}g
                    </div>
                    <div className="text-xs font-bold text-[#6B2C2C] font-mono mt-1">
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          addToCart(item, 1);
                          toggleWishlist(item.id);
                        }}
                        className="flex-1 bg-[#6B2C2C] hover:bg-[#521f1f] text-[#FFFDD0] py-1 px-2.5 rounded text-[11px] font-semibold flex items-center justify-center gap-1.5 transition"
                      >
                        <ShoppingBag className="w-3 h-3 text-[#F3C64F]" />
                        <span>Move to Bag</span>
                      </button>
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-600 rounded border border-gray-200"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-4 bg-[#FFFDD0] border-t border-[#d8c5aa]">
              <button
                onClick={() => {
                  wishlistProducts.forEach((item) => addToCart(item, 1));
                  setIsWishlistOpen(false);
                }}
                className="w-full bg-[#6B2C2C] hover:bg-[#521f1f] text-[#FFFDD0] py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <span>Move All to Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
