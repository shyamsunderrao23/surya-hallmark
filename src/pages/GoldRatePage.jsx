import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Calculator, 
  MapPin, 
  Clock, 
  HelpCircle, 
  Award,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { cityGoldRates, weeklyTrend } from '../data/goldRates';

export default function GoldRatePage() {
  const { goldRates } = useShop();

  const [weight, setWeight] = useState(8);
  const [selectedKarat, setSelectedKarat] = useState('22');
  const [budget, setBudget] = useState(100000);

  const ratePerGram = selectedKarat === '24' ? goldRates.gold24k.perGram : goldRates.gold22k.perGram;
  const calculatedGoldVal = weight * ratePerGram;
  const estimatedMaking = Math.round(calculatedGoldVal * 0.10);
  const estimatedGst = Math.round((calculatedGoldVal + estimatedMaking) * 0.03);
  const calculatedTotal = calculatedGoldVal + estimatedMaking + estimatedGst;

  // Reverse budget to grams
  const gramsForBudget = (budget / (ratePerGram * 1.133)).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8b4747]">
          <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Daily Bullion &amp; Hallmarking Portal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-luxury text-[#381c1c]">
          Today's Gold &amp; Silver Rates
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          Official daily market rates for 22K (916 BIS Hallmark), 24K (999 Purity), and 999 Fine Silver. Last updated: <strong>{goldRates.lastUpdated}</strong>.
        </p>
      </div>

      {/* Main Bullion Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* 22K Gold */}
        <div className="bg-white p-5 rounded-2xl border-2 border-[#D4AF37] shadow-md relative overflow-hidden space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-[#6B2C2C] bg-[#ede3d4] px-2 py-0.5 rounded uppercase">
                Bridal Standard
              </span>
              <h3 className="text-base font-bold text-[#381c1c] mt-1 font-serif-luxury">22K Gold (916)</h3>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              +₹{goldRates.gold22k.change}
            </span>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-[#6B2C2C] font-mono">
              ₹{goldRates.gold22k.perGram.toLocaleString('en-IN')}
            </div>
            <div className="text-xs text-gray-500">per gram (1g)</div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-700 font-medium">
            <span>Sovereign (8g / 1 Pavan):</span>
            <span className="font-mono font-bold">₹{goldRates.gold22k.per8Gram.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* 24K Gold */}
        <div className="bg-white p-5 rounded-2xl border border-[#d8c5aa] shadow-sm space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded uppercase">
                Pure Bullion
              </span>
              <h3 className="text-base font-bold text-[#381c1c] mt-1 font-serif-luxury">24K Gold (999)</h3>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              +₹{goldRates.gold24k.change}
            </span>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-gray-900 font-mono">
              ₹{goldRates.gold24k.perGram.toLocaleString('en-IN')}
            </div>
            <div className="text-xs text-gray-500">per gram (1g)</div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-700 font-medium">
            <span>Sovereign (8g / 1 Pavan):</span>
            <span className="font-mono font-bold">₹{goldRates.gold24k.per8Gram.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* 18K Gold */}
        <div className="bg-white p-5 rounded-2xl border border-[#d8c5aa] shadow-sm space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded uppercase">
                Diamond Setting
              </span>
              <h3 className="text-base font-bold text-[#381c1c] mt-1 font-serif-luxury">18K Gold (750)</h3>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              +₹{goldRates.gold18k.change}
            </span>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-gray-900 font-mono">
              ₹{goldRates.gold18k.perGram.toLocaleString('en-IN')}
            </div>
            <div className="text-xs text-gray-500">per gram (1g)</div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-700 font-medium">
            <span>8 Grams:</span>
            <span className="font-mono font-bold">₹{goldRates.gold18k.per8Gram.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Silver */}
        <div className="bg-white p-5 rounded-2xl border border-[#d8c5aa] shadow-sm space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded uppercase">
                Fine Silver
              </span>
              <h3 className="text-base font-bold text-[#381c1c] mt-1 font-serif-luxury">Silver (999)</h3>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              +₹{goldRates.silver999.change}
            </span>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-gray-900 font-mono">
              ₹{goldRates.silver999.perGram.toLocaleString('en-IN')}
            </div>
            <div className="text-xs text-gray-500">per gram (1g)</div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-700 font-medium">
            <span>Per Kilogram (1 Kg):</span>
            <span className="font-mono font-bold">₹{goldRates.silver999.perKg.toLocaleString('en-IN')}</span>
          </div>
        </div>

      </div>

      {/* Dual Calculators: Weight Calculator + Budget to Grams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Calculator 1: By Weight */}
        <div className="bg-white p-6 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-5">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#6B2C2C]" />
            <h3 className="text-base font-bold font-serif-luxury text-[#381c1c]">
              Gold Weight to Price Calculator
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">Select Karat</label>
              <select
                value={selectedKarat}
                onChange={(e) => setSelectedKarat(e.target.value)}
                className="w-full bg-[#ede3d4] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs font-bold"
              >
                <option value="22">22K Gold (916 BIS Hallmark)</option>
                <option value="24">24K Pure Bullion (999)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">Weight in Grams</label>
              <input
                type="number"
                min="0.5"
                step="0.5"
                value={weight}
                onChange={(e) => setWeight(Math.max(0.1, Number(e.target.value)))}
                className="w-full bg-[#ede3d4] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs font-bold"
              />
            </div>
          </div>

          {/* Result Box */}
          <div className="bg-[#ede3d4] p-4 rounded-xl border border-[#d8c5aa] space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Pure Gold Cost ({weight}g × ₹{ratePerGram}):</span>
              <span className="font-mono font-semibold">₹{calculatedGoldVal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Making Charges (~10%):</span>
              <span className="font-mono font-semibold">₹{estimatedMaking.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (3%):</span>
              <span className="font-mono font-semibold">₹{estimatedGst.toLocaleString('en-IN')}</span>
            </div>
            <div className="border-t border-[#d8c5aa] pt-2 flex justify-between font-bold text-sm text-[#6B2C2C]">
              <span>Estimated Net Amount:</span>
              <span className="font-mono text-base">₹{calculatedTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Calculator 2: By Budget */}
        <div className="bg-white p-6 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-5">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#6B2C2C]" />
            <h3 className="text-base font-bold font-serif-luxury text-[#381c1c]">
              Budget to Gold Grams Estimator
            </h3>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-600 block mb-1">
              Enter Your Shopping Budget in ₹
            </label>
            <input
              type="number"
              min="5000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(Math.max(1000, Number(e.target.value)))}
              className="w-full bg-[#ede3d4] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs font-bold"
            />
          </div>

          <div className="bg-[#ede3d4] p-5 rounded-xl border border-[#d8c5aa] text-center space-y-2">
            <div className="text-xs text-gray-600">With a budget of ₹{budget.toLocaleString('en-IN')}, you can acquire approximately:</div>
            <div className="text-3xl font-extrabold text-[#6B2C2C] font-mono">
              {gramsForBudget} Grams
            </div>
            <div className="text-[11px] text-gray-500">
              of 22K 916 BIS Hallmarked Jewellery (factoring standard making charges + GST)
            </div>
          </div>
        </div>

      </div>

      {/* 7-Day Trend & City Rates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* City Comparison Table */}
        <div className="bg-white p-6 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-4">
          <h3 className="text-base font-bold font-serif-luxury text-[#381c1c] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#6B2C2C]" /> City-Wise 22K &amp; 24K Gold Rates Today
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-[#f0e3d2] text-gray-500 uppercase tracking-wider text-[10px]">
                  <th className="py-2">City</th>
                  <th className="py-2">22K (1g)</th>
                  <th className="py-2">24K (1g)</th>
                  <th className="py-2">Silver (1g)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cityGoldRates.map((c) => (
                  <tr key={c.city} className="hover:bg-[#faf6f0]">
                    <td className="py-2.5 font-bold text-gray-800">{c.city}</td>
                    <td className="py-2.5 font-mono text-[#6B2C2C] font-bold">₹{c.rate22k}</td>
                    <td className="py-2.5 font-mono text-gray-800">₹{c.rate24k}</td>
                    <td className="py-2.5 font-mono text-gray-600">₹{c.silver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 7-Day Trend Table */}
        <div className="bg-white p-6 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-4">
          <h3 className="text-base font-bold font-serif-luxury text-[#381c1c] flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#6B2C2C]" /> 7-Day Chennai Bullion Rate Trend
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-[#f0e3d2] text-gray-500 uppercase tracking-wider text-[10px]">
                  <th className="py-2">Day</th>
                  <th className="py-2">22K Gold (1g)</th>
                  <th className="py-2">24K Bullion (1g)</th>
                  <th className="py-2">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {weeklyTrend.map((w, idx) => (
                  <tr key={w.day} className="hover:bg-[#faf6f0]">
                    <td className="py-2.5 font-bold text-gray-800">{w.day}</td>
                    <td className="py-2.5 font-mono text-[#6B2C2C] font-bold">₹{w.rate22k}</td>
                    <td className="py-2.5 font-mono text-gray-800">₹{w.rate24k}</td>
                    <td className="py-2.5 text-emerald-700 font-semibold text-[11px]">
                      {idx === 0 ? 'Base' : `+₹${w.rate22k - weeklyTrend[idx - 1].rate22k}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
