import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Truck, 
  RefreshCcw, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#461919] text-[#F8F1E7] border-t-4 border-[#D4AF37] mt-16">
      
      {/* 4 Pillars of Trust Bar */}
      <div className="bg-[#562020] border-b border-[#6f2c2c] py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6B2C2C] border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#F3C64F]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white font-serif-luxury">100% BIS Hallmarked</div>
              <div className="text-[11px] text-[#e0cfcf]">Certified 6-Digit HUID Laser Stamp</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6B2C2C] border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#F3C64F]">
              <RefreshCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white font-serif-luxury">Zero Deduction Exchange</div>
              <div className="text-[11px] text-[#e0cfcf]">Full Value for Old Gold Jewellery</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6B2C2C] border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#F3C64F]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white font-serif-luxury">Insured Free Shipping</div>
              <div className="text-[11px] text-[#e0cfcf]">Tamper-Proof Armored Courier</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6B2C2C] border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#F3C64F]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white font-serif-luxury">Trusted Since 1964</div>
              <div className="text-[11px] text-[#e0cfcf]">60+ Years of Golden Relations</div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info & Centered Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Surya Hallmark Jewellers"
                className="h-16 w-auto object-contain filter drop-shadow-md"
              />
            </Link>
            <p className="text-xs text-[#e4cece] leading-relaxed max-w-sm">
              Surya Hallmark Jewellers is a premier heritage jewelry house synonymous with purity, royal south Indian craftsmanship, and unconditional customer trust since 1964.
            </p>

            <div className="pt-2 text-xs text-[#F3C64F] font-semibold space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Flagship: 42 Usman Road, Panagal Park, T. Nagar, Chennai - 600017</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Toll-Free: 1800-425-1964 • +91 44 2434 8899</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Showroom Hours: 10:00 AM – 9:00 PM (All 7 Days)</span>
              </div>
            </div>
          </div>

          {/* Quick Departments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3C64F] font-serif-luxury">
              Jewellery Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#d8c2c2]">
              <li><Link to="/category/gold" className="hover:text-white transition">22K Antique Bridal Gold</Link></li>
              <li><Link to="/category/gold" className="hover:text-white transition">Temple Jewellery &amp; Harams</Link></li>
              <li><Link to="/category/diamond" className="hover:text-white transition">Solitaire Engagement Rings</Link></li>
              <li><Link to="/category/silver" className="hover:text-white transition">925 Sterling Silver Pooja Items</Link></li>
              <li><Link to="/category/coins" className="hover:text-white transition">24K 999 Pure Gold Bullion Coins</Link></li>
              <li><Link to="/category/platinum" className="hover:text-white transition">Platinum Love Bands</Link></li>
              <li><Link to="/category/men" className="hover:text-white transition">Men's Royal Gold Kadas</Link></li>
            </ul>
          </div>

          {/* Customer Support & Schemes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3C64F] font-serif-luxury">
              Customer Services
            </h4>
            <ul className="space-y-2 text-xs text-[#d8c2c2]">
              <li><Link to="/gold-rate" className="hover:text-white transition">Today's Daily Gold Rate</Link></li>
              <li><Link to="/schemes" className="hover:text-white transition">Swarna Nidhi Savings Scheme</Link></li>
              <li><Link to="/craftsmanship" className="hover:text-white transition">BIS 916 Hallmark &amp; HUID Guide</Link></li>
              <li><Link to="/stores" className="hover:text-white transition">Book In-Store VIP Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Old Gold Exchange Calculator</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Customer Care &amp; Support</Link></li>
            </ul>
          </div>

          {/* Newsletter / Club */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3C64F] font-serif-luxury">
              Gold Club Updates
            </h4>
            <p className="text-xs text-[#d8c2c2]">
              Subscribe for daily morning gold rate SMS/email alerts and exclusive wedding festive invitations.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Enter email or mobile..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#562222] border border-[#8a3e3e] text-xs px-3 py-2 rounded-lg text-white placeholder-[#b89595] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              />
              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#e0be4d] text-[#461919] text-xs font-bold py-2 rounded-lg transition uppercase tracking-wider"
              >
                Join Privilege Club
              </button>
            </form>

            {subscribed && (
              <div className="text-xs text-[#F3C64F] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Welcome to Surya Hallmark Privilege Club!
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright & certification stamps */}
        <div className="border-t border-[#682727] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#b89a9a] gap-4">
          <div>
            © {new Date().getFullYear()} Surya Hallmark Jewellers Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white font-serif-luxury">BIS Registration: HM/C-78092144</span>
            <span>•</span>
            <span className="text-white font-serif-luxury">CIN: U36911TN1964PTC004812</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
