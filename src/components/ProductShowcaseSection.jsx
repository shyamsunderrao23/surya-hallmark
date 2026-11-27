import React, { useState, useMemo } from 'react';
import { Heart, ShoppingBag, Star, Sparkles, ShieldCheck, Check } from 'lucide-react';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';

export default function ProductShowcaseSection() {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [addedId, setAddedId] = useState(null);

  // Latest products curated across Gold, Silver, Platinum, Coins, and Diamonds (matching reference image)
  const latestProducts = useMemo(() => {
    const curatedIds = [
      'sh-103', // Diamond Solitaire Ring
      'sh-113', // Floral Emerald & Diamond Pendant
      'sh-114', // Aura Diamond Kada Bangle
      'sh-115', // Spiral Bloom 18K Yellow Gold Pendant
      'sh-102', // Padma Lakshmi 22K Temple Gold Choker
      'sh-117', // Meenakari 925 Sterling Silver Payal
      'sh-106', // Eternal Love 950 Platinum Couple Bands
      'sh-104', // Surya 24K 999 Pure Gold Bullion Coin
    ];
    return curatedIds
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean);
  }, []);

  // Featured Signature items for the bottom row (matching reference image)
  const featuredProducts = useMemo(() => {
    return products.filter((p) => p.isFeatured).slice(0, 4);
  }, []);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1600);
  };

  // 4 Lifestyle categories from reference image
  const lifestyleBanners = [
    {
      title: 'Flower Necklace',
      count: '4 Items',
      category: 'gold',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Rose Gold Ring',
      count: '5 Items',
      category: 'diamond',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Drops Earring',
      count: '3 Items',
      category: 'gold',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Butterfly Pendant',
      count: '2 Items',
      category: 'platinum',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const renderProductCard = (product) => {
    const isWishlisted = isInWishlist(product.id);
    const discountPercent = product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

    return (
      <div
        key={product.id}
        className="rounded-2xl p-1 flex flex-col justify-between relative transition-all duration-300 group hover:-translate-y-1"
      >
        {/* Product Image with Top-Corner Badge & Wishlist Overlays */}
        <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3.5 relative flex items-center justify-center shadow-xs group-hover:shadow-md transition-shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 rounded-2xl"
            loading="lazy"
          />

          {/* Floating Top-Left Badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 pointer-events-none">
            {product.badge ? (
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#5B131B] border border-[#5B131B]/20 shadow-xs">
                {product.badge}
              </span>
            ) : discountPercent ? (
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-rose-600 text-white shadow-xs font-semibold">
                {discountPercent}% OFF
              </span>
            ) : product.isBestseller ? (
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-500 text-white shadow-xs">
                BESTSELLER
              </span>
            ) : (
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#5B131B] border border-stone-200 shadow-xs">
                BIS 916
              </span>
            )}
          </div>

          {/* Floating Top-Right Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-stone-600 hover:text-[#5B131B] transition-all cursor-pointer shadow-sm hover:scale-110 active:scale-95"
          >
            <Heart
              size={16}
              className={isWishlisted ? 'fill-[#5B131B] text-[#5B131B]' : 'text-stone-600'}
            />
          </button>
        </div>

        {/* Content Details */}
        <div className="flex flex-col flex-1">
          {/* Subcategory / Metal Category */}
          <p className="text-[11px] font-semibold text-[#8C232C] uppercase tracking-wider mb-1">
            {product.category === 'diamond' ? 'Diamonds' : product.category} &bull; {product.subcategory || product.metal}
          </p>

          {/* Product Name */}
          <h3 className="font-serif font-bold text-sm sm:text-base text-[#2A1618] group-hover:text-[#5B131B] transition-colors line-clamp-2 leading-snug mb-2 min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-2.5">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={i < Math.floor(product.rating || 5) ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-stone-600 ml-1">
              {product.rating || 5.0}
            </span>
            {product.reviewsCount && (
              <span className="text-[11px] text-stone-400">({product.reviewsCount})</span>
            )}
          </div>

          {/* Price & Action Row */}
          <div className="mt-auto pt-2 border-t border-[#F0E6D8] flex items-center justify-between">
            <div>
              <div className="text-base sm:text-lg font-bold text-[#5B131B]">
                &#8377;{product.price.toLocaleString('en-IN')}
              </div>
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="text-xs text-stone-400 line-through">
                  &#8377;{product.originalPrice.toLocaleString('en-IN')}
                </div>
              )}
            </div>

            {/* Quick Add to Bag Button */}
            <button
              onClick={(e) => handleAddToCart(product, e)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs cursor-pointer ${
                addedId === product.id
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#5B131B] hover:bg-[#430D14] text-white active:scale-95'
              }`}
            >
              {addedId === product.id ? (
                <>
                  <Check size={14} /> Added
                </>
              ) : (
                <>
                  <ShoppingBag size={14} /> Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-12 px-3 sm:px-6 lg:px-10 max-w-[1720px] mx-auto">
      {/* ===================== SECTION 1: LATEST PRODUCTS ===================== */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3B0E14] mb-3">
          Latest Products
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our certified range of hallmarked Gold, Sterling Silver, Pure Platinum, Investment Bullion Coins, and Solitaire Diamonds.
        </p>
      </div>

      {/* Grid of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mb-14 w-full">
        {latestProducts.map(renderProductCard)}
      </div>

      {/* ===================== SECTION 2: 4-COLUMN LIFESTYLE BANNERS ===================== */}
      {/* Matching the 4 visual category cards in the reference image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mb-14 w-full">
        {lifestyleBanners.map((banner, index) => (
          <div
            key={index}
            className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#DFCAB4]"
          >
            {/* Background Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
            />
            {/* Soft dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Bottom Floating White Card (Exact layout from reference image) */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl shadow-md border border-stone-100 group-hover:bg-white transition-all">
              <h4 className="font-serif font-bold text-base text-[#2A1618] group-hover:text-[#5B131B] transition-colors">
                {banner.title}
              </h4>
              <p className="text-xs text-stone-500 font-medium">{banner.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===================== SECTION 3: FEATURED PRODUCTS ===================== */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3B0E14] mb-2">
          Featured Products
        </h2>
        <p className="text-stone-600 max-w-xl mx-auto text-xs sm:text-sm">
          Signature royal collections handpicked for timeless heritage, purity certifications, and everlasting sparkle.
        </p>
      </div>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mb-8 w-full">
        {featuredProducts.map(renderProductCard)}
      </div>

      {/* Trust & Purity Bar */}
      <div className="mt-10 p-5 rounded-2xl bg-[#5B131B]/5 border border-[#DFCAB4] flex flex-wrap items-center justify-around gap-4 text-center">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-[#5B131B]" />
          <span className="text-xs sm:text-sm font-bold text-[#3B0E14]">
            100% BIS 916 & HUID Verified
          </span>
        </div>
        <div className="w-px h-6 bg-[#DFCAB4] hidden md:block" />
        <div className="flex items-center gap-2">
          <Sparkles size={20} className="text-[#5B131B]" />
          <span className="text-xs sm:text-sm font-bold text-[#3B0E14]">
            IGI & GIA Certified Diamonds
          </span>
        </div>
        <div className="w-px h-6 bg-[#DFCAB4] hidden md:block" />
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-[#5B131B] text-base">Pt 950</span>
          <span className="text-xs sm:text-sm font-bold text-[#3B0E14]">
            Platinum Guild International (PGI)
          </span>
        </div>
        <div className="w-px h-6 bg-[#DFCAB4] hidden md:block" />
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-[#5B131B] text-base">24K 999</span>
          <span className="text-xs sm:text-sm font-bold text-[#3B0E14]">
            Tamper-Proof Bullion Cards
          </span>
        </div>
      </div>
    </section>
  );
}
