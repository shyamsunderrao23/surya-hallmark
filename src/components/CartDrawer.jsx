import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ShieldCheck, ArrowRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartSubtotal, 
    gstAmount, 
    cartTotal,
    clearCart
  } = useShop();

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'SURYA1964' || coupon.trim().toUpperCase() === 'BRIDAL2026') {
      setDiscount(Math.round(cartSubtotal * 0.05)); // 5% discount
      setCouponApplied(true);
    } else {
      alert('Invalid Promo Code. Try using SURYA1964 for 5% off!');
    }
  };

  const finalPayable = Math.max(0, cartTotal - discount);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF9F6] shadow-2xl flex flex-col border-l border-[#d8c5aa]">
          
          {/* Header in Maroon (#6B2C2C) */}
          <div className="bg-[#6B2C2C] text-[#FAF9F6] p-4 flex items-center justify-between border-b border-[#823939]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#F3C64F]" />
              <h3 className="font-serif-luxury font-bold text-base tracking-wide">
                Your Shopping Bag ({cart.length})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-[#FAF9F6]/80 hover:text-white rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Insured Delivery Banner */}
          <div className="bg-[#FAF9F6] px-4 py-2 border-b border-[#d8c5aa] flex items-center gap-2 text-xs text-[#522929]">
            <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span>100% Insured Transit by Sequel Logistics with Doorstep ID Verification</span>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {orderPlaced ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold font-serif-luxury text-[#6B2C2C]">
                  Order Placed Successfully!
                </h4>
                <p className="text-xs text-gray-600 max-w-xs mx-auto">
                  Thank you for placing your trust in Surya Hallmark Jewellers since 1964. Your certified hallmark package is being prepared with tamper-proof security seals.
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#FAF9F6] text-xs font-mono text-left max-w-xs mx-auto space-y-1">
                  <div>Order ID: <span className="font-bold text-[#6B2C2C]">SH-2026-98124</span></div>
                  <div>Insured Value: <span className="font-bold">₹{finalPayable.toLocaleString('en-IN')}</span></div>
                  <div>Estimated Delivery: <span className="font-bold text-emerald-700">Within 48 Hours</span></div>
                </div>
                <button
                  onClick={() => {
                    setOrderPlaced(false);
                    setIsCartOpen(false);
                  }}
                  className="bg-[#6B2C2C] text-[#FAF9F6] px-6 py-2 rounded-lg text-xs font-semibold hover:bg-[#521f1f]"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-[#FAF9F6] text-[#6B2C2C] rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Your bag is currently empty</p>
                <p className="text-xs text-gray-500">Discover our heirloom gold, diamond, and silver creations.</p>
                <Link
                  to="/collections"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block mt-2 bg-[#6B2C2C] hover:bg-[#521f1f] text-[#FAF9F6] text-xs font-bold px-5 py-2.5 rounded-lg shadow"
                >
                  Explore Collections
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item, index) => (
                  <div 
                    key={`${item.id}-${index}`}
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
                      <div className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded inline-block mt-1">
                        {item.hallmark || 'BIS 916 Hallmarked'}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs font-bold text-[#6B2C2C] font-mono">
                          ₹{item.price.toLocaleString('en-IN')}
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center border border-[#d8c5aa] rounded-md overflow-hidden bg-[#FAF9F6]">
                          <button
                            onClick={() => updateQuantity(index, -1)}
                            className="px-2 py-0.5 hover:bg-[#e8dbca] text-xs font-bold"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(index, 1)}
                            className="px-2 py-0.5 hover:bg-[#e8dbca] text-xs font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-gray-400 hover:text-red-600 p-1 self-start"
                      title="Remove Item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                {/* Promo Code Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
                  <input
                    type="text"
                    placeholder="Enter code (e.g. SURYA1964)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-1 bg-white border border-[#c4ae91] rounded-lg px-3 py-1.5 text-xs focus:ring-1 focus:ring-[#6B2C2C]"
                  />
                  <button
                    type="submit"
                    className="bg-[#6B2C2C] text-[#FAF9F6] text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#521f1f] transition"
                  >
                    Apply
                  </button>
                </form>

                {couponApplied && (
                  <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Coupon 'SURYA1964' applied (-₹{discount.toLocaleString('en-IN')})
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Billing Details */}
          {!orderPlaced && cart.length > 0 && (
            <div className="p-4 bg-[#FAF9F6] border-t border-[#d8c5aa] space-y-3">
              <div className="space-y-1.5 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Gross Jewellery Subtotal</span>
                  <span className="font-mono font-medium">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Promotional Discount (5%)</span>
                    <span className="font-mono">-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Insured Shipping &amp; Transit Insurance</span>
                  <span className="text-emerald-700 font-bold uppercase text-[10px]">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Statutory GST (3% Gold/Jewellery)</span>
                  <span className="font-mono">₹{gstAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t border-[#cfbaa1] pt-2 flex justify-between text-sm font-bold text-[#6B2C2C]">
                  <span>Total Payable Amount</span>
                  <span className="font-mono text-base">₹{finalPayable.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-[#6B2C2C] hover:bg-[#521f1f] text-[#FAF9F6] py-3 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#6B2C2C]/25 transition cursor-pointer"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
