import React, { useState } from 'react';
import { X, TrendingUp, ShieldCheck, Calculator, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { cityGoldRates, weeklyTrend } from '../data/goldRates';

export default function GoldRateModal() {
  const { isGoldRateModalOpen, setIsGoldRateModalOpen, goldRates } = useShop();
  const [calcGrams, setCalcGrams] = useState(8);
  const [calcPurity, setCalcPurity] = useState('22k');

  if (!isGoldRateModalOpen) return null;

  const currentRate = calcPurity === '24k' ? goldRates.gold24k.perGram : goldRates.gold22k.perGram;
  const rawGoldValue = calcGrams * currentRate;
  const estimatedMaking = Math.round(rawGoldValue * 0.10); // 10% making charges estimate
  const estimatedGST = Math.round((rawGoldValue + estimatedMaking) * 0.03); // 3% GST
  const estimatedTotal = rawGoldValue + estimatedMaking + estimatedGST;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#F8F1E7] rounded-2xl shadow-2xl border border-[#d8c5aa] overflow-hidden text-[#3d1f1f] max-h-[90vh] flex flex-col">
        
        {/* Header in Maroon (#6B2C2C) */}
        <div className="bg-[#6B2C2C] text-[#F8F1E7] p-4 sm:p-5 flex items-center justify-between border-b border-[#823939]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#541f1f] rounded-lg border border-[#823939]">
              <TrendingUp className="w-5 h-5 text-[#F3C64F]" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif-luxury tracking-wide">
                Today's Live Bullion Rates
              </h3>
              <p className="text-xs text-[#F3C64F]">
                Updated: {goldRates.lastUpdated} • Certified Daily Market Rates
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsGoldRateModalOpen(false)}
            className="p-1.5 rounded-full hover:bg-[#541f1f] text-[#F8F1E7]/80 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Main Rates Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* 22K Gold */}
            <div className="bg-white p-3.5 rounded-xl border-2 border-[#D4AF37] shadow-sm text-center relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-[#D4AF37] text-[#6B2C2C] text-[9px] font-bold px-1.5 py-0.5 rounded-bl">
                MOST POPULAR
              </span>
              <div className="text-xs font-bold text-[#6B2C2C] uppercase">22K Gold (916)</div>
              <div className="text-xl font-extrabold text-[#222] mt-1 font-mono">
                ₹{goldRates.gold22k.perGram.toLocaleString('en-IN')}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">per gram</div>
              <div className="text-[11px] font-semibold text-emerald-700 mt-1 flex items-center justify-center gap-1">
                <TrendingUp className="w-3 h-3" /> +₹{goldRates.gold22k.change}
              </div>
            </div>

            {/* 24K Gold */}
            <div className="bg-white p-3.5 rounded-xl border border-[#d8c5aa] shadow-sm text-center">
              <div className="text-xs font-bold text-[#6B2C2C] uppercase">24K Gold (999)</div>
              <div className="text-xl font-extrabold text-[#222] mt-1 font-mono">
                ₹{goldRates.gold24k.perGram.toLocaleString('en-IN')}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">per gram</div>
              <div className="text-[11px] font-semibold text-emerald-700 mt-1 flex items-center justify-center gap-1">
                <TrendingUp className="w-3 h-3" /> +₹{goldRates.gold24k.change}
              </div>
            </div>

            {/* 18K Gold */}
            <div className="bg-white p-3.5 rounded-xl border border-[#d8c5aa] shadow-sm text-center">
              <div className="text-xs font-bold text-[#6B2C2C] uppercase">18K Gold (750)</div>
              <div className="text-xl font-extrabold text-[#222] mt-1 font-mono">
                ₹{goldRates.gold18k.perGram.toLocaleString('en-IN')}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">per gram</div>
              <div className="text-[11px] font-semibold text-emerald-700 mt-1 flex items-center justify-center gap-1">
                <TrendingUp className="w-3 h-3" /> +₹{goldRates.gold18k.change}
              </div>
            </div>

            {/* Silver */}
            <div className="bg-white p-3.5 rounded-xl border border-[#d8c5aa] shadow-sm text-center">
              <div className="text-xs font-bold text-[#6B2C2C] uppercase">Silver (999)</div>
              <div className="text-xl font-extrabold text-[#222] mt-1 font-mono">
                ₹{goldRates.silver999.perGram.toLocaleString('en-IN')}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">per gram</div>
              <div className="text-[11px] font-semibold text-emerald-700 mt-1 flex items-center justify-center gap-1">
                <TrendingUp className="w-3 h-3" /> +₹{goldRates.silver999.change}
              </div>
            </div>
          </div>

          {/* Quick Value Estimator */}
          <div className="bg-[#F8F1E7] p-4 rounded-xl border border-[#d8c5aa]">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-4 h-4 text-[#6B2C2C]" />
              <h4 className="text-sm font-bold text-[#422222]">Instant Jewellery Cost Estimator</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-[#5c3737] block mb-1">Purity</label>
                <select
                  value={calcPurity}
                  onChange={(e) => setCalcPurity(e.target.value)}
                  className="w-full bg-white border border-[#c4ae91] rounded-lg px-2.5 py-1.5 text-xs font-medium focus:ring-1 focus:ring-[#6B2C2C]"
                >
                  <option value="22k">22K Gold (916 BIS)</option>
                  <option value="24k">24K Bullion (999)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#5c3737] block mb-1">Weight in Grams</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={calcGrams}
                    onChange={(e) => setCalcGrams(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-white border border-[#c4ae91] rounded-lg px-2.5 py-1.5 text-xs font-medium focus:ring-1 focus:ring-[#6B2C2C]"
                  />
                  <span className="text-xs font-semibold text-[#5c3737]">g</span>
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-[#c4ae91] flex flex-col justify-center">
                <div className="text-[10px] text-gray-500 uppercase font-semibold">Estimated Net Price</div>
                <div className="text-base font-bold text-[#6B2C2C] font-mono">
                  ₹{estimatedTotal.toLocaleString('en-IN')}*
                </div>
                <div className="text-[9px] text-gray-500">(Includes ~10% making + 3% GST)</div>
              </div>
            </div>
          </div>

          {/* City Comparison Table */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B2C2C] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Major City Gold Rates (22K 1g)
              </h4>
              <span className="text-[11px] text-gray-500">Live Showroom Rates</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {cityGoldRates.map((c) => (
                <div key={c.city} className="bg-white p-2 rounded-lg border border-[#F8F1E7] flex justify-between items-center text-xs">
                  <span className="font-semibold text-gray-700">{c.city}</span>
                  <span className="font-bold text-[#6B2C2C] font-mono">₹{c.rate22k}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Banner */}
          <div className="p-3 bg-[#e8dbca] rounded-xl flex items-center gap-3 border border-[#cfbaa1]">
            <ShieldCheck className="w-6 h-6 text-[#6B2C2C] flex-shrink-0" />
            <p className="text-xs text-[#4a2626] leading-relaxed">
              <strong>Zero Deductions on Old Gold Exchange:</strong> Bring your old gold jewellery of any jeweler and exchange with computerized karatmeter precision at all Surya Hallmark branches.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F1E7] border-t border-[#d8c5aa] flex items-center justify-between">
          <Link
            to="/gold-rate"
            onClick={() => setIsGoldRateModalOpen(false)}
            className="text-xs font-bold text-[#6B2C2C] hover:underline flex items-center gap-1"
          >
            <span>View 30-Day Historical Charts &amp; Tax Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setIsGoldRateModalOpen(false)}
            className="bg-[#6B2C2C] text-[#F8F1E7] hover:bg-[#521f1f] px-4 py-1.5 rounded-lg text-xs font-semibold shadow transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
