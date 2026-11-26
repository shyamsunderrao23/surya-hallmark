import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Star, 
  ShoppingBag,
  Clock,
  ChevronLeft,
  ChevronRight,
  Gem,
  Flame,
  Check
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { products, categories, reviews } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const { goldRates, setIsGoldRateModalOpen } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: 'Exquisite Gold Collection',
      image: '/banners/banner1.jpg',
      link: '/category/gold'
    },
    {
      id: 2,
      title: 'Silver Jewellery Collection',
      image: '/banners/banner2.jpg',
      link: '/category/silver'
    },
    {
      id: 3,
      title: 'Gold & Silver Jewellery Collection',
      image: '/banners/banner3.jpg',
      link: '/collections'
    }
  ];

  // Auto-advance banner every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <div className="space-y-10 sm:space-y-14">
      
      {/* Hero Banner Carousel with Custom Banners (1024x341 aspect) */}
      <section className="relative overflow-hidden bg-[#240808] w-full shadow-md">
        <div className="relative w-full aspect-[3/1] max-h-[500px] min-h-[170px] sm:min-h-[240px] md:min-h-[320px]">
          {heroSlides.map((slide, idx) => (
            <Link
              key={slide.id}
              to={slide.link}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out block ${
                currentSlide === idx ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </Link>
          ))}

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition shadow-lg border border-white/25 cursor-pointer"
            aria-label="Previous Banner"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition shadow-lg border border-white/25 cursor-pointer"
            aria-label="Next Banner"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === i ? 'w-6 sm:w-8 bg-[#F3C64F] shadow' : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to Slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Live Gold Rate Ribbon Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
        <div className="bg-[#FAF9F6] border-2 border-[#D4AF37] rounded-2xl shadow-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#6B2C2C] text-[#F3C64F] flex items-center justify-center flex-shrink-0 shadow">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#6B2C2C] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Today's Bullion Rate (Chennai &amp; TN)</span>
              </div>
              <div className="text-xs text-gray-600">Updated: {goldRates.lastUpdated}</div>
            </div>
          </div>

          {/* Quick Rates */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center divide-x divide-[#d8c5aa]">
            <div className="px-2 sm:px-4">
              <div className="text-[10px] sm:text-xs text-gray-600 font-semibold uppercase">22K Gold (916)</div>
              <div className="text-sm sm:text-lg font-bold text-[#6B2C2C] font-mono">
                ₹{goldRates.gold22k.perGram}/g
              </div>
            </div>

            <div className="px-2 sm:px-4">
              <div className="text-[10px] sm:text-xs text-gray-600 font-semibold uppercase">24K Bullion (999)</div>
              <div className="text-sm sm:text-lg font-bold text-[#6B2C2C] font-mono">
                ₹{goldRates.gold24k.perGram}/g
              </div>
            </div>

            <div className="px-2 sm:px-4">
              <div className="text-[10px] sm:text-xs text-gray-600 font-semibold uppercase">Silver (999)</div>
              <div className="text-sm sm:text-lg font-bold text-[#6B2C2C] font-mono">
                ₹{goldRates.silver999.perGram}/g
              </div>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={() => setIsGoldRateModalOpen(true)}
            className="bg-[#6B2C2C] hover:bg-[#521f1f] text-[#FAF9F6] text-xs font-bold px-4 py-2.5 rounded-xl shadow transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Rate Calculator &amp; History</span>
            <ChevronRight className="w-4 h-4 text-[#F3C64F]" />
          </button>

        </div>
      </section>

      {/* Shop by Department Grid (Image 4 reference: Gold, Silver, Diamond, Platinum, Coins, Kids, Men, Engraving, Gifts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-[#8b4747]">
            Handcrafted Legacies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#381c1c]">
            Explore by Department
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="group bg-white rounded-2xl border border-[#d8c5aa] hover:border-[#6B2C2C] p-3 text-center transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-between"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#faf6f0] mb-2.5">
                <img
                  src={cat.banner}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#381c1c] group-hover:text-[#6B2C2C] transition">
                {cat.name}
              </h3>
              <span className="text-[10px] text-gray-500 mt-0.5">
                {cat.count}+ Designs
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Masterpieces */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#8b4747]">
              Curated Heirlooms
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#381c1c]">
              Featured Masterpieces
            </h2>
          </div>
          <Link
            to="/collections"
            className="text-xs font-bold text-[#6B2C2C] hover:text-[#521f1f] flex items-center gap-1 group"
          >
            <span>View All Collections ({products.length})</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Swarna Nidhi Savings Scheme Spotlight Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#501F1F] via-[#6B2C2C] to-[#501F1F] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#D4AF37] relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3C64F] px-3 py-1 rounded-full text-xs font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Surya Swarna Nidhi Gold Savings Scheme</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-luxury leading-tight">
                Pay for 11 Months. Get the 12th Month Contribution from Surya Hallmark!
              </h2>

              <p className="text-xs sm:text-sm text-[#ecd6d6] leading-relaxed">
                Plan ahead for weddings, anniversaries, or gold asset accumulation. Invest starting from ₹1,000/month, lock prevailing gold rates, and redeem your jewellery with <strong>ZERO Making Charges</strong> at maturity.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <div className="text-base sm:text-xl font-bold text-[#F3C64F] font-mono">11 + 1</div>
                  <div className="text-[10px] text-gray-300">Month Bonus</div>
                </div>
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <div className="text-base sm:text-xl font-bold text-[#F3C64F] font-mono">0%</div>
                  <div className="text-[10px] text-gray-300">Wastage / Making</div>
                </div>
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <div className="text-base sm:text-xl font-bold text-[#F3C64F] font-mono">100%</div>
                  <div className="text-[10px] text-gray-300">BIS 916 Gold</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/schemes"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#e0be4d] text-[#461919] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition uppercase tracking-wider"
                >
                  <span>Calculate Your Returns &amp; Enroll</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4">
              <h3 className="text-sm font-bold font-serif-luxury text-[#F3C64F] uppercase tracking-wide">
                Interactive Scheme Snapshot
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-300">Monthly Deposit:</span>
                  <span className="font-bold font-mono">₹5,000 / month</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-300">Your 11 Month Payment:</span>
                  <span className="font-bold font-mono">₹55,000</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2 text-[#F3C64F]">
                  <span className="font-semibold">Surya Hallmark Bonus:</span>
                  <span className="font-bold font-mono">+₹5,000 FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-1 text-white">
                  <span>Maturity Shopping Value:</span>
                  <span className="font-mono text-[#F3C64F] text-base">₹60,000</span>
                </div>
              </div>

              <div className="bg-[#461919]/60 p-3 rounded-xl border border-[#D4AF37]/30 text-[11px] text-[#e0cfcf]">
                ✨ Plus zero making charges on select 22K gold &amp; diamond jewellery!
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bestsellers Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#8b4747] flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-600" /> Most Treasured
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#381c1c]">
              Customer Bestsellers
            </h2>
          </div>
          <Link
            to="/category/gold"
            className="text-xs font-bold text-[#6B2C2C] hover:text-[#521f1f] flex items-center gap-1 group"
          >
            <span>Explore All 22K Gold Designs</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* The Surya Hallmark 1964 Heritage & BIS Hallmark Story */}
      <section className="bg-[#FAF9F6] border-y border-[#d8c5aa] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#6B2C2C] text-[#F3C64F] px-3.5 py-1 rounded-full text-xs font-bold">
              <Award className="w-4 h-4" />
              <span>The Legacy of Surya Hallmark</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-[#381c1c] leading-tight">
              Golden Relations, Trusted Since 1964
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Founded in 1964, Surya Hallmark Jewellers was established with a singular mission: to bring absolute honesty, purity, and craftsmanship to Indian families. Long before government regulations made hallmarking mandatory, Surya pioneered self-certified gold purity testing.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-gray-700">
                  <strong>100% 6-Digit HUID Hallmarking:</strong> Every single gold article carries a unique alphanumeric code trackable on the Bureau of Indian Standards BIS CARE mobile application.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-gray-700">
                  <strong>Zero Deduction Old Gold Exchange:</strong> 100% exchange value for gold purity measured right in front of you with non-destructive German XRF Karatmeters.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-gray-700">
                  <strong>IGI &amp; GIA Certified Natural Diamonds:</strong> Unconditionally conflict-free natural diamonds with international grading certificates.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/craftsmanship"
                className="inline-flex items-center gap-2 bg-[#6B2C2C] hover:bg-[#521f1f] text-[#FAF9F6] text-xs font-bold px-6 py-3 rounded-xl shadow transition"
              >
                <span>Read Full Craftsmanship Journey</span>
                <ArrowRight className="w-4 h-4 text-[#F3C64F]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
              alt="Temple Gold Craft"
              className="rounded-2xl shadow-lg border border-[#d8c5aa] object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80"
              alt="Karigar Handcrafting"
              className="rounded-2xl shadow-lg border border-[#d8c5aa] object-cover h-64 w-full mt-6"
            />
          </div>

        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#8b4747]">
            Generations of Trust
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#381c1c]">
            Stories of Golden Relations
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-[#d8c5aa] shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#f0e3d2] flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#381c1c]">{rev.name}</div>
                  <div className="text-[11px] text-gray-500">{rev.city} • {rev.date}</div>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200">
                  Verified Patron
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
