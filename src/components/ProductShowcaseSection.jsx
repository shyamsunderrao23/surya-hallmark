import React, { useMemo } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import middleBanner from '../assets/middle-banner.png';

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

  // Render product card: ONLY the Image and the Name (Bigger image size)
  const renderProductCard = (product) => {
    return (
      <div
        key={product.id}
        className="flex flex-col relative transition-all duration-300 group cursor-pointer"
      >
        {/* Product Image - Increased Size */}
        <div className="w-full aspect-[4/4.8] rounded-2xl overflow-hidden mb-3.5 relative flex items-center justify-center shadow-sm group-hover:shadow-2xl transition-all duration-500">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* Product Name Only */}
        <div className="text-center pt-1 px-2">
          <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-[#2A1618] group-hover:text-[#5B131B] transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* ===================== SECTION 1: LATEST PRODUCTS ===================== */}
      <section className="w-full pt-12 pb-8 px-4 sm:px-8 lg:px-12 max-w-[1880px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3B0E14] mb-3">
            Latest Products
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our certified range of hallmarked Gold, Sterling Silver, Pure Platinum, Investment Bullion Coins, and Solitaire Diamonds.
          </p>
        </div>

        {/* Grid of Products (Larger Image Size and Spacious Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-10 w-full">
          {latestProducts.map(renderProductCard)}
        </div>
      </section>

      {/* ===================== MIDDLE BANNER (Full-Width Edge-to-Edge) ===================== */}
      <section className="w-full overflow-hidden shadow-xs my-8 sm:my-14">
        <img
          src={middleBanner}
          alt="Surya Hallmark Jewellers Middle Banner"
          className="w-full h-auto object-cover object-center block"
        />
      </section>

      {/* ===================== SECTION 2: FEATURED PRODUCTS ===================== */}
      <section className="w-full pb-14 px-4 sm:px-8 lg:px-12 max-w-[1880px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#3B0E14] mb-2">
            Featured Products
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto text-xs sm:text-sm">
            Signature royal collections handpicked for timeless heritage, purity certifications, and everlasting sparkle.
          </p>
        </div>

        {/* Featured Products Grid (Larger Image Size) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-10 mb-12 w-full">
          {featuredProducts.map(renderProductCard)}
        </div>

        {/* Trust & Purity Bar */}
        <div className="mt-8 p-5 rounded-2xl bg-[#5B131B]/5 border border-[#DFCAB4] flex flex-wrap items-center justify-around gap-4 text-center">
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
    </div>
  );
}
