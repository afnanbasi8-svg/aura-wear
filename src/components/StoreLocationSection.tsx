import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageSquare, Compass, Navigation, Check } from 'lucide-react';
import { boutiqueInteriorImage } from '../assets/images';

export const StoreLocationSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919820045678');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#F5F1E8] border-b border-[#D8CCB8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B89A62]/30 text-[#B89A62] text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Private Boutiques & Salons</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#242321] font-normal tracking-tight mb-4">
            Visit Aura Wear
          </h2>

          <p className="text-sm sm:text-base text-[#5C5955] font-light leading-relaxed">
            Step into our sanctuary of master tailoring. Experience private fitting suites, tactile fabric archives, and espresso service with our master tailors.
          </p>
        </div>

        {/* 2-Column Store Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Store Visual */}
          <div className="lg:col-span-7">
            <div className="relative border border-[#D8CCB8] p-3 bg-white shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#242321]">
                <img
                  src={boutiqueInteriorImage}
                  alt="Aura Wear Flagship Boutique Interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#F5F1E8]/90 backdrop-blur-xs px-3 py-1.5 border border-[#D8CCB8] text-[10px] uppercase tracking-widest text-[#3A2B20] font-semibold">
                  Flagship Boutique • Salon & Atelier
                </div>
              </div>
            </div>
          </div>

          {/* Right: Location Details & Direct Contact Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 border border-[#D8CCB8] shadow-md space-y-6">
              {/* Boutique 1 (Flagship) */}
              <div>
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#F5F1E8] border border-[#D8CCB8] flex items-center justify-center text-[#3A2B20] shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-[#B89A62]" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#B89A62]">
                      Flagship Salon
                    </span>
                    <h4 className="font-serif text-xl text-[#242321] font-medium mt-0.5">
                      Aura Wear – New Delhi
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C5955] font-light leading-relaxed mt-1">
                      Plot 14, Defence Colony Main Flyover Market, New Delhi, 110024
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-4 border-t border-[#F5F1E8]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#F5F1E8] border border-[#D8CCB8] flex items-center justify-center text-[#3A2B20] shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-[#B89A62]" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#B89A62]">
                      Salon Hours
                    </span>
                    <p className="text-xs sm:text-sm text-[#242321] font-medium mt-0.5">
                      Monday – Saturday: 10:30 AM – 8:30 PM
                    </p>
                    <p className="text-xs text-[#5C5955] font-light">
                      Sunday: 11:00 AM – 7:00 PM (By Appointment Preferred)
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-4 border-t border-[#F5F1E8]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#F5F1E8] border border-[#D8CCB8] flex items-center justify-center text-[#3A2B20] shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-[#B89A62]" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#B89A62]">
                      Concierge Direct
                    </span>
                    <div className="flex items-center gap-3 mt-0.5">
                      <a
                        href="tel:+919820045678"
                        className="text-sm font-medium text-[#242321] hover:text-[#B89A62] transition-colors"
                      >
                        +91 98200 45678
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="text-[10px] uppercase tracking-wider text-[#B89A62] hover:text-[#3A2B20] cursor-pointer flex items-center gap-1"
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          'Copy'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Google Maps */}
              <div className="pt-4 border-t border-[#D8CCB8] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="store-whatsapp-btn"
                  href="https://wa.me/919820045678?text=Hello%20Aura%20Wear,%20I%20would%20like%20to%20visit%20your%20boutique%20or%20inquire%20about%20a%20suit"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>

                <a
                  id="store-google-maps-btn"
                  href="https://maps.google.com/?q=Defence+Colony+New+Delhi+Aura+Wear"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 bg-[#3A2B20] hover:bg-[#242321] text-[#F5F1E8] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#B89A62]" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
