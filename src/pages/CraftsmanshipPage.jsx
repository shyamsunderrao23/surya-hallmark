import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Search, 
  Gem, 
  Hammer,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CraftsmanshipPage() {
  const steps = [
    {
      step: '01',
      title: 'Precision Fire Assaying',
      desc: 'Before any gold alloy is shaped, samples undergo chemical cupellation and X-ray fluorescence (XRF) spectral testing to guarantee exact 91.6% (22 Karat) or 99.9% (24 Karat) elemental purity.'
    },
    {
      step: '02',
      title: 'Master Karigari Hand-Sculpting',
      desc: 'Hereditary goldsmiths sculpt divine temple nakshi motifs, floral filigree, and intricate kundan settings using age-old hand-chisels, preserving timeless Indian heritage.'
    },
    {
      step: '03',
      title: 'Government BIS Laser HUID Stamping',
      desc: 'Each finished ornament is sent to an authorized Bureau of Indian Standards Assaying & Hallmarking Centre (AHC) for unique 6-digit alphanumeric HUID laser etching.'
    },
    {
      step: '04',
      title: 'Lifetime Purity & Exchange Guarantee',
      desc: 'Every purchase is entered into the central BIS CARE registry. We guarantee unconditional 100% exchange value for pure gold content across all Surya Hallmark stores.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#6B2C2C] text-[#F3C64F] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
          <Award className="w-4 h-4" />
          <span>Surya Hallmark Craftsmanship &amp; Heritage</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-luxury text-[#381c1c] leading-tight">
          Golden Relations, Trusted Since 1964
        </h1>

        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          For over six decades, Surya Hallmark Jewellers has stood as the hallmark of uncompromising authenticity in South Indian fine jewellery. Our creations are not merely ornaments — they are sacred heirlooms designed to be cherished across generations.
        </p>
      </div>

      {/* Visual Heritage Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-[#d8c5aa] p-6 text-center space-y-3 shadow-xs">
          <div className="w-14 h-14 bg-[#FAF9F6] text-[#6B2C2C] rounded-2xl flex items-center justify-center mx-auto">
            <Hammer className="w-7 h-7" />
          </div>
          <h3 className="font-serif-luxury font-bold text-base text-[#381c1c]">Temple Nakshi Work</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            High-relief 3D depictions of Goddess Lakshmi, Mayura (peacocks), and sacred temple pillars handcrafted in antique matte 22K gold.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#d8c5aa] p-6 text-center space-y-3 shadow-xs">
          <div className="w-14 h-14 bg-[#FAF9F6] text-[#6B2C2C] rounded-2xl flex items-center justify-center mx-auto">
            <Gem className="w-7 h-7" />
          </div>
          <h3 className="font-serif-luxury font-bold text-base text-[#381c1c]">Uncut Polki &amp; Kundan</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Rare natural gemstones, syndicate uncut diamonds, and luminous South Sea pearls set with pure 24K gold foil bezels.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#d8c5aa] p-6 text-center space-y-3 shadow-xs">
          <div className="w-14 h-14 bg-[#FAF9F6] text-[#6B2C2C] rounded-2xl flex items-center justify-center mx-auto">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="font-serif-luxury font-bold text-base text-[#381c1c]">100% BIS 916 HUID</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Traceable alphanumeric identification on every single piece through the official Government of India BIS CARE application.
          </p>
        </div>
      </div>

      {/* 4-Step Hallmarking Process */}
      <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-[#d8c5aa] space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#381c1c]">
            The 4-Stage Hallmarking &amp; Quality Rigor
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            How we ensure every milligram of gold delivered to your hands conforms to international luxury standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div key={st.step} className="bg-white p-6 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-3">
              <span className="text-2xl font-black font-serif-luxury text-[#6B2C2C] font-mono">
                {st.step}
              </span>
              <h3 className="text-sm font-bold text-[#381c1c] font-serif-luxury">
                {st.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#6B2C2C] text-[#FAF9F6] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-4xl font-extrabold font-serif-luxury text-white">
          Experience the Hallmarked Difference in Person
        </h2>
        <p className="text-xs sm:text-sm text-[#ebd8d8] max-w-xl mx-auto">
          Visit any of our flagship showrooms in Chennai, Coimbatore, or Bengaluru to witness our computerized karatmeter gold testing and meet our bridal jewelry connoisseurs.
        </p>
        <div className="pt-2">
          <Link
            to="/stores"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#e0be4d] text-[#461919] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow uppercase tracking-wider"
          >
            <span>Book a VIP Showroom Visit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
