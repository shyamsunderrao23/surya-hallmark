import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Send, 
  Check 
} from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailOrPhone.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailOrPhone('');
      }, 4000);
    }
  };

  const showroomLocations = [
    {
      name: 'Palace Street Showroom',
      city: 'Parlakhemundi',
      address: 'Palace Street, Parlakhemundi.',
      phone: '9178 889 899',
      timing: '10 AM – 9 PM',
    },
    {
      name: 'College Road Showroom',
      city: 'Parlakhemundi',
      address: 'College Road, Parlakhemundi.',
      phone: '97770 18555',
      timing: '10 AM – 9 PM',
    },
    {
      name: 'Market Square Showroom',
      city: 'Parlakhemundi',
      address: 'Market Square, Beside Ambika Sweets, Parlakhemundi.',
      phone: '9692396696',
      timing: '10 AM – 9 PM',
    },
    {
      name: 'Gunupur Showroom',
      city: 'Gunupur',
      address: 'Opp. Kanyaka Parameswari Temple, Gunupur.',
      phone: '84805 68611',
      timing: '10 AM – 9 PM',
    },
    {
      name: 'Rayagada Showroom',
      city: 'Rayagada',
      address: 'Opp. Hotel Jyoti Mahal, Rayagada.',
      phone: '9348 744 819',
      timing: '10 AM – 9 PM',
    },
  ];

  return (
    <footer className="w-full bg-[#450C13] text-[#FCEED8] border-t-4 border-[#8A202D]">
      {/* ===================== TOP HIGHLIGHTS BAR ===================== */}
      <div className="border-b border-white/10 bg-[#35080E]/60 py-6 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1880px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#F3C64F] flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">100% BIS 916 &amp; HUID</h4>
              <p className="text-[11px] text-[#FCEED8]/70">Govt. Certified Pure Gold</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-6 h-6 text-[#F3C64F] flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">60+ Years Trust</h4>
              <p className="text-[11px] text-[#FCEED8]/70">Golden Relations Since 1964</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-[#F3C64F] flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">Open All 7 Days</h4>
              <p className="text-[11px] text-[#FCEED8]/70">10:00 AM – 9:00 PM</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone className="w-6 h-6 text-[#F3C64F] flex-shrink-0" />
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">Toll Free Support</h4>
              <p className="text-[11px] text-[#FCEED8]/70">1800-425-1964</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== MAIN FOOTER CONTENT ===================== */}
      <div className="max-w-[1880px] mx-auto py-14 px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Heritage (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Surya Hallmark Jewellers - Golden Relations Since 1964"
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#FCEED8]/80 leading-relaxed max-w-sm">
              Surya Hallmark Jewellers represents six decades of unswerving trust, authentic 100% BIS 916 hallmarked gold, computerized karatmeter purity testing, and handcrafted temple bridal heirlooms.
            </p>

            {/* Toll-Free & Direct Help */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-[#FCEED8]/90">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F3C64F] flex-shrink-0" />
                <span className="font-semibold">Toll Free:</span>
                <a href="tel:18004251964" className="hover:text-[#F3C64F] transition font-bold">
                  1800-425-1964
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F3C64F] flex-shrink-0" />
                <span className="font-semibold">Email:</span>
                <a href="mailto:contact@suryahallmark.com" className="hover:text-[#F3C64F] transition">
                  contact@suryahallmark.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F3C64F] block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919178889899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#5B131B] hover:bg-[#25D366] text-white flex items-center justify-center transition-all shadow-xs"
                  title="Chat on WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#5B131B] hover:bg-[#E1306C] text-white flex items-center justify-center transition-all shadow-xs"
                  title="Follow on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#5B131B] hover:bg-[#1877F2] text-white flex items-center justify-center transition-all shadow-xs"
                  title="Like on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#5B131B] hover:bg-[#FF0000] text-white flex items-center justify-center transition-all shadow-xs"
                  title="Subscribe on YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Showroom Locations (Multiple Addresses) (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <MapPin className="w-4 h-4 text-[#F3C64F]" />
              <h3 className="font-serif font-bold text-base sm:text-lg text-white tracking-wide">
                Our Showrooms &amp; Locations
              </h3>
            </div>

            <div className="space-y-4 pt-1">
              {showroomLocations.map((loc, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-xl bg-[#5B131B]/40 hover:bg-[#5B131B]/70 border border-white/5 hover:border-[#F3C64F]/30 transition-all text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white tracking-wide">
                      {loc.name}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F3C64F] px-1.5 py-0.5 rounded-sm bg-black/30">
                      {loc.city}
                    </span>
                  </div>

                  <p className="text-[#FCEED8]/80 text-[11px] mb-1.5 leading-snug">
                    {loc.address}
                  </p>

                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/10">
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1 text-[#F3C64F] font-bold hover:underline"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Cell: {loc.phone}</span>
                    </a>
                    <span className="text-white/60 text-[10px] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#F3C64F]" /> {loc.timing}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links & Services (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif font-bold text-base sm:text-lg text-white tracking-wide border-b border-white/10 pb-2">
              Collections
            </h3>
            <ul className="space-y-2 text-xs text-[#FCEED8]/80">
              <li>
                <Link to="/category/gold" className="hover:text-[#F3C64F] transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#F3C64F]" /> 22K Antique Gold
                </Link>
              </li>
              <li>
                <Link to="/category/diamond" className="hover:text-[#F3C64F] transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#F3C64F]" /> IGI Solitaires &amp; Rings
                </Link>
              </li>
              <li>
                <Link to="/category/silver" className="hover:text-[#F3C64F] transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#F3C64F]" /> 925 Sterling Silver
                </Link>
              </li>
              <li>
                <Link to="/category/platinum" className="hover:text-[#F3C64F] transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#F3C64F]" /> Pt 950 Platinum Bands
                </Link>
              </li>
              <li>
                <Link to="/category/coins" className="hover:text-[#F3C64F] transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#F3C64F]" /> 24K 999 Bullion Coins
                </Link>
              </li>
              <li>
                <Link to="/category/wedding" className="hover:text-[#F3C64F] transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#F3C64F]" /> Bridal Wedding Sets
                </Link>
              </li>
              <li>
                <Link to="/category/men" className="hover:text-[#F3C64F] transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#F3C64F]" /> Men's Royal Kada
                </Link>
              </li>
            </ul>

            <h4 className="font-serif font-bold text-sm text-white pt-2 border-t border-white/10">
              Customer Services
            </h4>
            <ul className="space-y-1.5 text-xs text-[#FCEED8]/80">
              <li>
                <span className="hover:text-[#F3C64F] cursor-pointer">Swarna Nidhi Scheme</span>
              </li>
              <li>
                <span className="hover:text-[#F3C64F] cursor-pointer">Live Gold Rates</span>
              </li>
              <li>
                <span className="hover:text-[#F3C64F] cursor-pointer">Zero Gold Deduction</span>
              </li>
              <li>
                <span className="hover:text-[#F3C64F] cursor-pointer">Lifetime Exchange</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Gold Rate Alerts & Newsletter (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif font-bold text-base sm:text-lg text-white tracking-wide border-b border-white/10 pb-2">
              Gold Rate Alerts
            </h3>
            <p className="text-xs text-[#FCEED8]/80 leading-relaxed">
              Subscribe to receive daily morning 22K &amp; 24K gold rate updates on your phone.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="text"
                placeholder="Mobile number / Email"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-black/30 border border-white/20 text-white placeholder:text-white/40 focus:outline-hidden focus:border-[#F3C64F]"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-lg bg-[#F3C64F] hover:bg-[#E5B53A] text-[#450C13] font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Subscribed
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Get Daily Rates
                  </>
                )}
              </button>
            </form>

            {/* Hallmark Trust Badge */}
            <div className="mt-5 p-3 rounded-xl bg-black/25 border border-white/10 text-center space-y-1">
              <ShieldCheck className="w-6 h-6 text-[#F3C64F] mx-auto" />
              <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                BIS Hallmarked
              </div>
              <p className="text-[10px] text-[#FCEED8]/70">
                100% 6-Digit HUID Laser Verified on Every Gold Ornament
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ===================== BOTTOM COPYRIGHT BAR ===================== */}
      <div className="border-t border-white/10 bg-[#2D060B] py-5 px-4 sm:px-8 text-center text-xs text-[#FCEED8]/70">
        <div className="max-w-[1880px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-white">Surya Hallmark Jewellers</strong>. All Rights Reserved.
          </p>
          <p className="text-[11px]">
            Serving Parlakhemundi, Gunupur, Rayagada &amp; across India since 1964.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer">Security Assurance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
