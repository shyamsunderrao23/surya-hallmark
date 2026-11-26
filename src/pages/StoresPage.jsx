import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Calendar, Check, Navigation } from 'lucide-react';
import { storesList } from '../data/products';

export default function StoresPage() {
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '11:00 AM',
    store: 'store-1',
    purpose: 'Bridal Jewellery Consultation'
  });

  const handleBooking = (e) => {
    e.preventDefault();
    setAppointmentBooked(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8b4747]">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Surya Hallmark Flagship Showrooms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-luxury text-[#381c1c]">
          Experience Our Showrooms
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          Walk into an ambience of regal South Indian grandeur with private bridal suites, computerized karatmeter testing counters, and diamond lounges.
        </p>
      </div>

      {/* Showrooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {storesList.map((st) => (
          <div
            key={st.id}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-4 hover:border-[#6B2C2C] transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-[#6B2C2C] bg-[#FFFDD0] px-2 py-0.5 rounded uppercase">
                  Flagship Store
                </span>
                <h3 className="text-base font-bold font-serif-luxury text-[#2b1717] mt-1">
                  {st.name}
                </h3>
              </div>
            </div>

            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6B2C2C] flex-shrink-0 mt-0.5" />
                <span>{st.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#6B2C2C] flex-shrink-0" />
                <span className="font-semibold text-gray-800">{st.phone}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#6B2C2C] flex-shrink-0" />
                <span>{st.timings}</span>
              </div>

              <div className="flex items-center gap-2.5 text-emerald-800 font-semibold">
                <Navigation className="w-4 h-4 flex-shrink-0" />
                <span>{st.floors}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setForm({ ...form, store: st.id });
                  window.scrollTo({ top: 900, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#6B2C2C] hover:underline flex items-center gap-1"
              >
                Book VIP Lounge Appointment &rarr;
              </button>

              <a
                href={st.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#FFFDD0] text-[#4a2626] hover:bg-[#e0d0be] px-3 py-1.5 rounded-lg text-xs font-semibold"
              >
                Get Directions
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* VIP Booking Form */}
      <div className="bg-[#FFFDD0] rounded-3xl p-6 sm:p-10 border border-[#d8c5aa]">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold font-serif-luxury text-[#381c1c]">
              Book an In-Store VIP Consultation
            </h2>
            <p className="text-xs text-gray-600">
              Enjoy private viewing with a dedicated bridal jewellery stylist, complimentary refreshments, and priority karatmeter gold appraisal.
            </p>
          </div>

          {appointmentBooked ? (
            <div className="bg-white p-6 rounded-2xl border border-emerald-300 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#6B2C2C]">Appointment Confirmed!</h3>
              <p className="text-xs text-gray-600">
                We look forward to welcoming you, {form.name || 'Patron'}. Our relationship manager will call you at {form.phone} to confirm your bespoke arrangements.
              </p>
              <button
                onClick={() => setAppointmentBooked(false)}
                className="text-xs text-[#6B2C2C] font-bold underline"
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-bold text-gray-700 block mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Sundaresan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-[#c4ae91] rounded-xl px-3 py-2 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Mobile Contact Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98401 23456"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white border border-[#c4ae91] rounded-xl px-3 py-2 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Select Showroom</label>
                <select
                  value={form.store}
                  onChange={(e) => setForm({ ...form, store: e.target.value })}
                  className="w-full bg-white border border-[#c4ae91] rounded-xl px-3 py-2 text-xs font-semibold"
                >
                  {storesList.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-white border border-[#c4ae91] rounded-xl px-3 py-2 text-xs"
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#6B2C2C] hover:bg-[#521f1f] text-[#FFFDD0] py-3 rounded-xl font-bold uppercase tracking-wider transition shadow-md"
                >
                  Confirm VIP Showroom Appointment
                </button>
              </div>
            </form>
          )}

        </div>
      </div>

    </div>
  );
}
