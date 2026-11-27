import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Check, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How do I verify the BIS 916 Hallmark and HUID of my jewellery?',
      a: 'Download the official government "BIS CARE" mobile application from the Google Play Store or Apple App Store. Tap on "Verify HUID", enter the 6-digit alphanumeric code laser-etched onto your jewellery piece (also printed on your Surya Hallmark tax invoice). The app will display the assaying center name, jeweler registration, and tested purity.'
    },
    {
      q: 'What is your policy for old gold jewellery exchange?',
      a: 'We offer a Zero Deduction Old Gold Exchange policy. Bring your old gold jewellery of any jeweler or brand. We melt the dirt/enamel or test it non-destructively using calibrated German XRF Karatmeters right in front of you and give you 100% current market rate value for the net gold weight.'
    },
    {
      q: 'Is online jewellery transit insured?',
      a: 'Yes, 100% of online orders are insured and transported through armored, tamper-evident courier partners (Sequel Logistics & BVC Logistics). Delivery requires OTP and government ID verification at your doorstep.'
    },
    {
      q: 'How does the Swarna Nidhi 11+1 month savings scheme work?',
      a: 'You pay a fixed monthly installment (from ₹1,000 to ₹50,000) for 11 consecutive months. Surya Hallmark contributes the entire 12th month installment. At maturity, you can redeem your accumulated value for jewellery with ZERO making charges on select bridal collections.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8b4747]">
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Golden Relations, Always at Your Service</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-luxury text-[#381c1c]">
          Contact Surya Hallmark
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          Have an inquiry regarding bespoke bridal orders, live gold rates, old gold valuation, or savings schemes? Our concierge is available 7 days a week.
        </p>
      </div>

      {/* Contact Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-2xl border border-[#d8c5aa] shadow-xs text-center space-y-3">
          <div className="w-12 h-12 bg-[#F9E2CC] text-[#4F0C12] rounded-2xl flex items-center justify-center mx-auto">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-sm text-[#381c1c]">Phone &amp; Toll-Free</h3>
          <p className="text-xs text-gray-600">
            Toll-Free: <strong>1800-425-1964</strong><br />
            Direct: +91 44 2434 8899
          </p>
          <div className="text-[11px] text-[#8b4747] font-semibold">10:00 AM - 9:00 PM (Daily)</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#d8c5aa] shadow-xs text-center space-y-3">
          <div className="w-12 h-12 bg-[#F9E2CC] text-[#1b7340] rounded-2xl flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-sm text-[#381c1c]">WhatsApp Concierge</h3>
          <p className="text-xs text-gray-600">
            Instant assistance for live video calls, bridal appointments &amp; designs.
          </p>
          <a
            href="https://wa.me/919840123456"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#1b7340] hover:bg-[#135930] text-white text-xs font-bold px-4 py-1.5 rounded-lg transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#d8c5aa] shadow-xs text-center space-y-3">
          <div className="w-12 h-12 bg-[#F9E2CC] text-[#4F0C12] rounded-2xl flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-sm text-[#381c1c]">Email Inquiries</h3>
          <p className="text-xs text-gray-600">
            care@suryahallmark.com<br />
            corporate@suryahallmark.com
          </p>
          <div className="text-[11px] text-[#8b4747] font-semibold">Response within 2 hours</div>
        </div>

      </div>

      {/* Main Grid: Form + FAQs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Inquiry Form */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#d8c5aa] shadow-xs space-y-5">
          <h2 className="text-lg font-bold font-serif-luxury text-[#381c1c]">
            Send an Inquiry to Our Head Office
          </h2>

          {submitted ? (
            <div className="bg-[#F9E2CC] p-6 rounded-2xl border border-emerald-300 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#4F0C12]">Message Sent Successfully!</h3>
              <p className="text-xs text-gray-600">
                Thank you for contacting Surya Hallmark Jewellers. Our customer relationship team will reach out to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#4F0C12] font-bold underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Krishnan"
                    className="w-full bg-[#F9E2CC] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98401 23456"
                    className="w-full bg-[#F9E2CC] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="ramesh@example.com"
                  className="w-full bg-[#F9E2CC] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Subject / Inquiry Type</label>
                <select className="w-full bg-[#F9E2CC] border border-[#d8c5aa] rounded-xl px-3 py-2 text-xs font-semibold">
                  <option>Bridal Custom Design Consultation</option>
                  <option>Old Gold Exchange &amp; Karatmeter Appraisal</option>
                  <option>Swarna Nidhi Savings Scheme Inquiry</option>
                  <option>Bullion 24K Coins Bulk Purchase</option>
                  <option>Order Delivery &amp; Tracking</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us about the jewellery design, budget, or milestone you are planning..."
                  className="w-full bg-[#F9E2CC] border border-[#d8c5aa] rounded-xl p-3 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4F0C12] hover:bg-[#3A070C] text-[#F9E2CC] py-3 rounded-xl font-bold uppercase tracking-wider transition shadow-md"
              >
                Submit Inquiry
              </button>
            </form>
          )}

        </div>

        {/* FAQs */}
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-lg font-bold font-serif-luxury text-[#381c1c] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#4F0C12]" /> Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#d8c5aa] p-4 text-xs space-y-2"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left font-bold text-gray-900 flex justify-between items-center gap-2"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#4F0C12] transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
