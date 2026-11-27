import React, { useMemo } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';

export default function ProductShowcaseSection() {
  // Latest products curated across Gold, Silver, Platinum, Coins, and Diamonds
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

  // Featured Signature items for the bottom row
  const featuredProducts = useMemo(() => {
    return products.filter((p) => p.isFeatured).slice(0, 4);
  }, []);

  // 4 Lifestyle categories from reference image
  const lifestyleBanners = [
    {
      title: 'Flower Necklace',
      count: '4 Items',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Rose Gold Ring',
      count: '5 Items',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Drops Earring',
      count: '3 Items',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Butterfly Pendant',
      count: '2 Items',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Render product card: ONLY the Image and the Name
  const renderProductCard = (product) => {
    return (
      <div
        key={product.id}
        className="flex flex-col relative transition-all duration-300 group cursor-pointer"
      >
        {/* Product Image */}
        <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 relative flex items-center justify-center shadow-xs group-hover:shadow-xl transition-all duration-500">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* Product Name Only */}
        <div className="text-center pt-1 px-1">
          <h3 className="font-serif font-bold text-sm sm:text-base md:text-lg text-[#2A1618] group-hover:text-[#5B131B] transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>
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

      {/* Grid of Products (Only Image and Name) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 mb-16 w-full">
        {latestProducts.map(renderProductCard)}
      </div>

      {/* ===================== SECTION 2: 4-COLUMN LIFESTYLE BANNERS ===================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mb-16 w-full">
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

            {/* Bottom Floating Card */}
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

      {/* Featured Products Grid (Only Image and Name) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 mb-10 w-full">
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
