import React, { useState } from 'react';
import { ArrowUpRight, Phone, MapPin, Clock, Sparkles } from 'lucide-react';

import storePalace from '../assets/stores/store_palace.jpg';
import storeCollege from '../assets/stores/store_college.jpg';
import storeMarket from '../assets/stores/store_market.jpg';
import storeGunupur from '../assets/stores/store_gunupur.jpg';
import storeRayagada from '../assets/stores/store_rayagada.jpg';

const stores = [
  {
    id: 'palace-street',
    name: 'Palace Street',
    tagline: 'Flagship Heritage Showroom',
    city: 'Parlakhemundi',
    address: 'Palace Street, Parlakhemundi.',
    phone: '9178 889 899',
    formattedPhone: '+91 9178 889 899',
    timing: '10:00 AM – 9:00 PM (All 7 Days)',
    description:
      'Our iconic flagship showroom showcasing exclusive 22K BIS 916 antique bridal harams, royal temple jewellery, and certified 24K bullion with dedicated VIP bridal consultation lounges.',
    image: storePalace,
    mapQuery: 'Palace+Street+Parlakhemundi',
  },
  {
    id: 'college-road',
    name: 'College Road',
    tagline: 'Contemporary & Diamond Boutique',
    city: 'Parlakhemundi',
    address: 'College Road, Parlakhemundi.',
    phone: '97770 18555',
    formattedPhone: '+91 97770 18555',
    timing: '10:00 AM – 9:00 PM (All 7 Days)',
    description:
      'A sleek, modern fine jewellery boutique featuring lightweight everyday gold, IGI certified solitaires, platinum love bands, and custom name-engraved creations.',
    image: storeCollege,
    mapQuery: 'College+Road+Parlakhemundi',
  },
  {
    id: 'market-square',
    name: 'Market Square',
    tagline: 'Gold & Bullion Exchange Center',
    city: 'Parlakhemundi',
    address: 'Market Square, Beside Ambika Sweets, Parlakhemundi.',
    phone: '9692396696',
    formattedPhone: '+91 96923 96696',
    timing: '10:00 AM – 9:00 PM (All 7 Days)',
    description:
      'Conveniently located beside Ambika Sweets in Market Square. Features daily live gold rate counters, zero-deduction old gold exchange, and festive pooja silver articles.',
    image: storeMarket,
    mapQuery: 'Market+Square+Parlakhemundi',
  },
  {
    id: 'gunupur',
    name: 'Gunupur',
    tagline: 'Traditional & Festive Showroom',
    city: 'Gunupur',
    address: 'Opp. Kanyaka Parameswari Temple, Gunupur.',
    phone: '84805 68611',
    formattedPhone: '+91 84805 68611',
    timing: '10:00 AM – 9:00 PM (All 7 Days)',
    description:
      'Nestled opposite Kanyaka Parameswari Temple, offering handcrafted sacred temple ornaments, syndicate gemstone sets, gold coins, and Swarna Nidhi savings plans.',
    image: storeGunupur,
    mapQuery: 'Kanyaka+Parameswari+Temple+Gunupur',
  },
  {
    id: 'rayagada',
    name: 'Rayagada',
    tagline: 'Grand Destination Showroom',
    city: 'Rayagada',
    address: 'Opp. Hotel Jyoti Mahal, Rayagada.',
    phone: '9348 744 819',
    formattedPhone: '+91 9348 744 819',
    timing: '10:00 AM – 9:00 PM (All 7 Days)',
    description:
      'Our premier Rayagada destination showroom opposite Hotel Jyoti Mahal. Complete collection of antique bridal sets, uncut diamond polki, and 925 sterling silver gifts.',
    image: storeRayagada,
    mapQuery: 'Hotel+Jyoti+Mahal+Rayagada',
  },
];

export default function OurStoresSection() {
  // First store active by default, expands on hover as in reference Image 1
  const [activeStore, setActiveStore] = useState(0);

  return (
    <section className="w-full py-12 sm:py-20 bg-[#FCEED8] overflow-hidden">
      <div className="w-full px-3 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#5B131B]/10 text-[#5B131B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-[#5B131B]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#5B131B]" />
            <span>Showrooms &amp; Locations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury font-bold text-[#3D141A] tracking-tight">
            Visit Our Showrooms
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#734b4b] font-medium">
            Explore 60+ years of trust and South Indian royal jewellery across 5 flagship locations.
          </p>
        </div>

        {/* Interactive Expanding Cards (Reference Image 1: First Active by Default, Expands on Hover) */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 w-full h-auto lg:h-[480px] xl:h-[520px] items-stretch">
          {stores.map((store, index) => {
            const isActive = activeStore === index;

            return (
              <div
                key={store.id}
                onMouseEnter={() => setActiveStore(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-lg ${
                  isActive
                    ? 'lg:flex-[2.8] xl:flex-[3] min-h-[380px] lg:min-h-0'
                    : 'lg:flex-1 min-h-[160px] lg:min-h-0'
                }`}
              >
                {/* Background Image */}
                <img
                  src={store.image}
                  alt={store.name}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />

                {/* Dark Vignette Overlay for Crisp White Typography */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? 'bg-gradient-to-t from-black/90 via-black/55 to-black/30'
                      : 'bg-gradient-to-t from-black/80 via-black/45 to-black/25'
                  }`}
                />

                {/* Card Content */}
                <div className="relative z-10 w-full h-full p-6 sm:p-7 flex flex-col justify-between text-white">
                  
                  {/* Top Area: Store Name & Tagline */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F3C64F] bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/10">
                      {store.city}
                    </span>
                    <h3 className="mt-2 text-xl sm:text-2xl xl:text-3xl font-serif-luxury font-bold text-white tracking-wide">
                      {store.name}
                    </h3>

                    {/* Active Expanded Details */}
                    {isActive ? (
                      <div className="mt-3 space-y-2.5 animate-fadeIn">
                        <p className="text-xs sm:text-sm text-[#FCEED8]/90 font-medium">
                          {store.tagline}
                        </p>
                        <p className="hidden sm:block text-xs text-white/80 leading-relaxed max-w-md">
                          {store.description}
                        </p>
                      </div>
                    ) : (
                      <p className="mt-1 text-xs text-[#FCEED8]/80 font-medium truncate max-w-[140px] sm:max-w-none">
                        {store.tagline}
                      </p>
                    )}
                  </div>

                  {/* Bottom Area: Address, Call, and Circular Action Button */}
                  <div className="flex items-end justify-between gap-3 pt-4 border-t border-white/15">
                    
                    {/* Left: Contact Info (shown with full details on active) */}
                    <div className="space-y-1.5 min-w-0">
                      {isActive ? (
                        <>
                          <div className="flex items-center gap-2 text-xs text-white/90">
                            <MapPin className="w-3.5 h-3.5 text-[#F3C64F] flex-shrink-0" />
                            <span className="font-semibold truncate">{store.address}</span>
                          </div>

                          <div className="flex items-center gap-3 text-xs flex-wrap">
                            <a
                              href={`tel:${store.phone.replace(/\s+/g, '')}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 text-white font-bold hover:text-[#F3C64F] transition"
                            >
                              <Phone className="w-3.5 h-3.5 text-[#F3C64F]" />
                              <span>Cell: {store.phone}</span>
                            </a>
                            <span className="hidden sm:inline text-white/40">•</span>
                            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-white/70">
                              <Clock className="w-3 h-3 text-[#F3C64F]" /> {store.timing}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="space-y-0.5">
                          <div className="text-[11px] text-white/80 flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#F3C64F]" />
                            <span className="font-mono">{store.phone}</span>
                          </div>
                          <div className="text-[11px] text-white/60 truncate max-w-[120px] sm:max-w-[160px]">
                            {store.address}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Round Action Button (matching Image 1 arrow circle) */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${store.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title={`Get directions to ${store.name}`}
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#5B131B] text-white shadow-lg shadow-black/40 hover:bg-[#782A37] hover:scale-110'
                          : 'bg-black/50 text-white/80 hover:bg-[#5B131B] hover:text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
