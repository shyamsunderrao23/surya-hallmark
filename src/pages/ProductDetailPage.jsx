import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Heart, 
  ShoppingBag, 
  Truck, 
  RefreshCcw, 
  Award, 
  Star, 
  MessageSquare, 
  Share2, 
  Check, 
  MapPin, 
  Sparkles,
  Info
} from 'lucide-react';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, goldRates } = useShop();

  const product = products.find((p) => p.id === productId) || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Standard Size (2-6)');
  const [quantity, setQuantity] = useState(1);
  const [addedAlert, setAddedAlert] = useState(false);

  const isWishlisted = isInWishlist(product.id);
  const images = product.images || [product.image];

  // Price calculations based on live 22k rate
  const liveRate = product.metal.includes('24K') ? goldRates.gold24k.perGram : goldRates.gold22k.perGram;
  const rawGoldCost = Math.round((product.netWeight || product.grossWeight) * liveRate);
  const makingChargesEstimate = Math.round(rawGoldCost * 0.10);
  const gstEstimate = Math.round((rawGoldCost + makingChargesEstimate) * 0.03);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setAddedAlert(true);
    setTimeout(() => setAddedAlert(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize);
    navigate('/collections');
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Surya Hallmark Jewellers, I am interested in purchasing "${product.name}" (Code: ${product.id}, Price: ₹${product.price.toLocaleString('en-IN')}). Please provide showroom availability.`
    );
    window.open(`https://wa.me/919840123456?text=${text}`, '_blank');
  };

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-500">
        <Link to="/" className="hover:text-[#6B2C2C]">Home</Link>
        <span>/</span>
        <Link to={`/category/${product.category}`} className="hover:text-[#6B2C2C] capitalize">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[#3d1f1f] font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="aspect-square bg-white rounded-3xl border border-[#d8c5aa] p-8 flex items-center justify-center relative overflow-hidden shadow-sm">
            <img
              src={images[selectedImage] || product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
            
            {/* BIS Hallmark Floating Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs border border-emerald-300 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>100% BIS 916 HUID Stamp</span>
            </div>

            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-4 right-4 p-2.5 rounded-full shadow-md transition ${
                isWishlisted ? 'bg-red-50 text-red-600' : 'bg-white text-gray-600 hover:text-red-600'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex items-center gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden bg-white border-2 p-1 transition ${
                    selectedImage === i ? 'border-[#6B2C2C] shadow-md' : 'border-[#d8c5aa] opacity-75'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Specs & Buying Actions */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-[#6B2C2C] text-[#F3C64F] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                {product.subcategory || product.category}
              </span>
              <span className="text-xs text-gray-500 font-mono">SKU: {product.id}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold font-serif-luxury text-[#2b1717] leading-tight">
              {product.name}
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-2 text-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-gray-900">{product.rating || 5.0}</span>
              <span className="text-gray-500">({product.reviewsCount || 34} verified buyers)</span>
            </div>
          </div>

          {/* Price Tag */}
          <div className="bg-[#F8F1E7] p-4 rounded-2xl border border-[#d8c5aa] space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-[#6B2C2C] font-mono">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through font-mono">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Save ₹{((product.originalPrice || product.price) - product.price).toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-[11px] text-gray-600">
              Price inclusive of pure gold value, making charges, and statutory 3% GST. Insured shipping included.
            </p>
          </div>

          {/* Transparent Price Breakup Accordion */}
          <div className="bg-white p-4 rounded-2xl border border-[#d8c5aa] space-y-2 text-xs">
            <div className="font-bold text-xs uppercase tracking-wider text-[#381c1c] flex items-center justify-between">
              <span>Transparent Price Breakup</span>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">
                Live Rate: ₹{liveRate}/g
              </span>
            </div>

            <div className="space-y-1.5 pt-1 text-gray-600">
              <div className="flex justify-between">
                <span>Gold Component ({product.netWeight || product.grossWeight}g @ ₹{liveRate}/g):</span>
                <span className="font-mono text-gray-900">₹{rawGoldCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Making Charges ({product.makingCharge || '10%'}):</span>
                <span className="font-mono text-gray-900">₹{makingChargesEstimate.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>3% GST (CGST + SGST):</span>
                <span className="font-mono text-gray-900">₹{gstEstimate.toLocaleString('en-IN')}</span>
              </div>
              <div className="border-t border-gray-200 pt-1.5 flex justify-between font-bold text-[#6B2C2C]">
                <span>Total Net Value:</span>
                <span className="font-mono text-sm">₹{product.price.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Size / Variant Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">
              Select Size / Measurement
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Standard (2-4 / 16")', 'Medium (2-6 / 18")', 'Broad (2-8 / 20")'].map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border transition ${
                    selectedSize === s
                      ? 'bg-[#6B2C2C] text-white border-[#6B2C2C]'
                      : 'bg-white text-gray-700 border-[#d8c5aa] hover:bg-[#F8F1E7]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#6B2C2C] hover:bg-[#521f1f] text-[#F8F1E7] py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#6B2C2C]/20 transition cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#F3C64F]" />
                <span>{addedAlert ? 'Added to Bag!' : 'Add to Bag'}</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#D4AF37] hover:bg-[#e0be4d] text-[#461919] py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
              >
                <span>Buy Now</span>
              </button>
            </div>

            {/* WhatsApp Inquiry Button */}
            <button
              onClick={handleWhatsAppEnquiry}
              className="w-full bg-[#1b7340] hover:bg-[#145a31] text-white py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire with Showroom Concierge on WhatsApp</span>
            </button>
          </div>

          {/* Guarantees Strip */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#d8c5aa] text-center text-xs text-gray-700">
            <div className="p-2 bg-white rounded-xl border border-[#d8c5aa]">
              <ShieldCheck className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
              <div className="font-bold text-[11px]">BIS 916 HUID</div>
              <div className="text-[10px] text-gray-500">Government Verified</div>
            </div>

            <div className="p-2 bg-white rounded-xl border border-[#d8c5aa]">
              <RefreshCcw className="w-5 h-5 text-amber-700 mx-auto mb-1" />
              <div className="font-bold text-[11px]">Zero Deduction</div>
              <div className="text-[10px] text-gray-500">Old Gold Exchange</div>
            </div>

            <div className="p-2 bg-white rounded-xl border border-[#d8c5aa]">
              <Truck className="w-5 h-5 text-blue-700 mx-auto mb-1" />
              <div className="font-bold text-[11px]">Insured Delivery</div>
              <div className="text-[10px] text-gray-500">Free Armored Transit</div>
            </div>
          </div>

        </div>

      </div>

      {/* Detailed Specifications Table */}
      <div className="bg-white rounded-2xl border border-[#d8c5aa] p-6 sm:p-8 space-y-4 shadow-xs">
        <h3 className="text-lg font-bold font-serif-luxury text-[#381c1c]">
          Technical &amp; Purity Specifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <div className="flex justify-between border-b border-gray-100 py-1.5">
              <span className="text-gray-500">Product Code:</span>
              <span className="font-mono font-semibold">{product.id}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1.5">
              <span className="text-gray-500">Metal Purity:</span>
              <span className="font-semibold text-[#6B2C2C]">{product.metal}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1.5">
              <span className="text-gray-500">Gross Weight:</span>
              <span className="font-semibold">{product.grossWeight} Grams</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1.5">
              <span className="text-gray-500">Net Metal Weight:</span>
              <span className="font-semibold">{product.netWeight} Grams</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between border-b border-gray-100 py-1.5">
              <span className="text-gray-500">Hallmark Certification:</span>
              <span className="font-semibold text-emerald-800">100% BIS 916 with Laser HUID</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1.5">
              <span className="text-gray-500">Occasion:</span>
              <span className="font-semibold">{product.occasion || 'Bridal & Festivals'}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1.5">
              <span className="text-gray-500">Making Charges:</span>
              <span className="font-semibold">{product.makingCharge || '10%'}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1.5">
              <span className="text-gray-500">Buyback &amp; Exchange:</span>
              <span className="font-semibold text-emerald-800">100% Lifetime Exchange at Current Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-serif-luxury text-[#381c1c]">
              Complementary Heirloom Creations
            </h3>
            <Link to={`/category/${product.category}`} className="text-xs font-bold text-[#6B2C2C] hover:underline">
              View All {product.category} &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
