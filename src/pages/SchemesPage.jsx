import React, { useState } from 'react';
import { 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Gift, 
  Clock,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SchemesPage() {
  const [monthlyAmount, setMonthlyAmount] = useState(5000);
  const [enrolled, setEnrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pan: '',
    branch: 'T. Nagar, Chennai'
  });

  const totalPaidByCustomer = monthlyAmount * 11;
  const companyBonus = monthlyAmount; // 1 Month free from Surya Hallmark
  const totalMaturityBenefit = totalPaidByCustomer + companyBonus;
  const approximateGoldGrams = (totalMaturityBenefit / 7380).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnrolled(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#3A070C] via-[#4F0C12] to-[#3A070C] text-[#F9E2CC] rounded-3xl p-6 sm:p-12 border-2 border-[#D4AF37] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3C64F] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Surya Hallmark Swarna Nidhi Savings Scheme</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-luxury leading-tight text-white">
            Plan Tomorrow's Gold with 1 Month Contribution on Us
          </h1>

          <p className="text-xs sm:text-sm text-[#ecd8d8] leading-relaxed">
            Turn small monthly savings into heirloom bridal gold or 24K pure bullion. Pay for 11 consecutive months, and Surya Hallmark Jewellers pays the 12th month installment for you. Plus, redeem with <strong>ZERO Making Charges &amp; Wastage</strong> on selected bridal collections!
          </p>
        </div>
      </div>

      {/* Interactive Calculator Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Calculator Control */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 className="text-lg font-bold font-serif-luxury text-[#381c1c] flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#4F0C12]" /> Monthly Installment Calculator
            </h2>
            <span className="text-xs font-bold text-[#4F0C12] bg-[#F9E2CC] px-2.5 py-1 rounded-full">
              11 + 1 Month Plan
            </span>
          </div>

          {/* Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Choose Monthly Amount
              </span>
              <span className="text-2xl font-extrabold text-[#4F0C12] font-mono">
                ₹{monthlyAmount.toLocaleString('en-IN')} <span className="text-xs font-normal text-gray-500">/ month</span>
              </span>
            </div>

            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(Number(e.target.value))}
              className="w-full accent-[#4F0C12] cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-gray-400 font-mono">
              <span>₹1,000</span>
              <span>₹10,000</span>
              <span>₹25,000</span>
              <span>₹50,000</span>
            </div>

            {/* Quick Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[2000, 5000, 10000, 20000, 50000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setMonthlyAmount(amt)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                    monthlyAmount === amt
                      ? 'bg-[#4F0C12] text-white border-[#4F0C12]'
                      : 'bg-[#F9E2CC] text-[#38060B] border-[#d8c5aa] hover:bg-[#e2d5c2]'
                  }`}
                >
                  ₹{amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* Scheme Breakdown Breakdown */}
          <div className="bg-[#F9E2CC] p-5 rounded-2xl border border-[#d8c5aa] space-y-3 text-xs">
            <div className="flex justify-between py-1 border-b border-[#d8c5aa]">
              <span className="text-gray-700">You pay for 11 months:</span>
              <span className="font-mono font-bold text-gray-900">
                11 × ₹{monthlyAmount.toLocaleString('en-IN')} = ₹{totalPaidByCustomer.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-[#d8c5aa] text-emerald-800 font-semibold">
              <span className="flex items-center gap-1">
                <Gift className="w-3.5 h-3.5" /> 12th Month Bonus from Surya Hallmark:
              </span>
              <span className="font-mono font-bold">+₹{companyBonus.toLocaleString('en-IN')} FREE</span>
            </div>

            <div className="flex justify-between py-1 text-sm font-bold text-[#4F0C12]">
              <span>Total Jewellery Shopping Value at Maturity:</span>
              <span className="font-mono text-lg">₹{totalMaturityBenefit.toLocaleString('en-IN')}</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#d8c5aa] flex items-center justify-between">
              <span className="text-gray-600">Approximate Gold You Can Take Home:</span>
              <span className="text-base font-extrabold text-[#4F0C12] font-mono">
                ~{approximateGoldGrams} Grams*
              </span>
            </div>
            <div className="text-[10px] text-gray-500">
              *Calculated at current 22K rate of ₹7,380/g with zero making charge benefit on selected bridal items.
            </div>
          </div>

        </div>

        {/* Enrollment Form */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-5">
          <h2 className="text-lg font-bold font-serif-luxury text-[#381c1c]">
            Online Scheme Enrollment
          </h2>

          {enrolled ? (
            <div className="bg-[#F9E2CC] p-6 rounded-2xl border border-emerald-300 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#4F0C12] font-serif-luxury">
                Enrollment Application Received!
              </h3>
              <p className="text-xs text-gray-700">
                Congratulations {formData.name || 'Patron'}! Your Swarna Nidhi account for ₹{monthlyAmount.toLocaleString('en-IN')}/month is provisioned. Our relationship manager from {formData.branch} will contact you with your Passbook number and payment link.
              </p>
              <button
                onClick={() => setEnrolled(false)}
                className="text-xs text-[#4F0C12] font-bold underline"
              >
                Enroll another account
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-gray-700 block mb-1">Full Legal Name (as per Aadhaar)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meenakshi Sundaram"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F9E2CC] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#4F0C12]"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Mobile Number (for SMS &amp; Passbook)</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98400 12345"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full bg-[#F9E2CC] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-[#4F0C12]"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Preferred Showroom Branch</label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full bg-[#F9E2CC] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs font-semibold"
                >
                  <option>T. Nagar, Chennai (Flagship)</option>
                  <option>Mylapore, Chennai</option>
                  <option>Cross Cut Road, Coimbatore</option>
                  <option>Jayanagar, Bengaluru</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#4F0C12] hover:bg-[#3A070C] text-[#F9E2CC] py-3 rounded-xl font-bold uppercase tracking-wider shadow-md transition"
                >
                  Enroll Now &amp; Claim 1 Month Bonus
                </button>
              </div>

              <div className="text-[10px] text-gray-500 text-center">
                🔒 Registered under RBI Fair Practice code &amp; BIS Hallmarking guidelines.
              </div>
            </form>
          )}

        </div>

      </div>

    </div>
  );
}
