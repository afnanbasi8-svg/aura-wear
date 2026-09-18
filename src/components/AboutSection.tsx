import React from 'react';
import { Scissors, Compass, ShieldCheck, Sparkles, Feather } from 'lucide-react';
import { bespokeTailorImage, heroSuitImage, boutiqueInteriorImage } from '../assets/images';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#D8CCB8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B89A62]/30 text-[#B89A62] text-[10px] uppercase tracking-[0.25em] font-semibold">
              <Feather className="w-3.5 h-3.5" />
              <span>Brand Heritage & Atelier</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#242321] font-normal tracking-tight leading-tight">
              Made for Men Who Notice the Details
            </h2>

            <p className="text-sm sm:text-base text-[#5C5955] leading-relaxed font-light">
              Founded in 2023, <strong className="font-semibold text-[#242321]">Aura Wear</strong> was created with an uncompromising mandate: to revive the revered artistry of master tailoring while catering to the dynamic, cosmopolitan Indian gentleman.
            </p>

            <p className="text-sm sm:text-base text-[#5C5955] leading-relaxed font-light">
              We reject transient fads in favor of enduring proportion. Every lapel notch, curved breast pocket, horn button shank, and floating horsehair interlining is chosen with architectural deliberation. In an era of hurried fashion, we believe true luxury takes time.
            </p>

            {/* 3 Value Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#D8CCB8]">
              <div>
                <p className="font-serif text-2xl text-[#3A2B20] font-medium">32+</p>
                <p className="text-xs uppercase tracking-wider text-[#B89A62] font-semibold">Body Checkpoints</p>
                <p className="text-[11px] text-[#5C5955] mt-1">Individual pattern drafting for each gentleman.</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#3A2B20] font-medium">800+</p>
                <p className="text-xs uppercase tracking-wider text-[#B89A62] font-semibold">Bespoke Cloths</p>
                <p className="text-[11px] text-[#5C5955] mt-1">Imported Italian wools and fine Indian handlooms.</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#3A2B20] font-medium">60 hrs</p>
                <p className="text-xs uppercase tracking-wider text-[#B89A62] font-semibold">Artisanal Benchwork</p>
                <p className="text-[11px] text-[#5C5955] mt-1">Bench-tailored by master craftsmen.</p>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-4 bg-[#F5F1E8] border border-[#D8CCB8] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#B89A62] flex items-center justify-center font-serif italic text-lg text-[#3A2B20] shrink-0">
                  AW
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-[#242321]">
                    "Dress not to seek attention, but to leave an indelible impression."
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-[#5C5955]">
                    The Aura Wear Code of Sartorial Poise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden border border-[#D8CCB8] bg-[#242321]">
                  <img
                    src={bespokeTailorImage}
                    alt="Master Tailoring at Aura Wear"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-[#F5F1E8] border border-[#D8CCB8]">
                  <p className="text-[10px] uppercase tracking-widest text-[#B89A62] font-bold">Provenance</p>
                  <p className="font-serif text-lg text-[#242321] mt-1">Master Atelier Bench</p>
                  <p className="text-xs text-[#5C5955] mt-1">Hand-basted canvas testing on anatomical mannequins.</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 bg-[#3A2B20] text-[#F5F1E8] border border-[#B89A62]/30">
                  <p className="text-[10px] uppercase tracking-widest text-[#B89A62] font-bold">Philosophy</p>
                  <p className="font-serif text-lg mt-1">Locally Sourced</p>
                  <p className="text-xs text-[#D8CCB8] mt-1">Organic Himalayan wools & certified mulberry silks.</p>
                </div>
                <div className="aspect-[4/5] overflow-hidden border border-[#D8CCB8] bg-[#242321]">
                  <img
                    src={heroSuitImage}
                    alt="Aura Wear Bespoke Silhouette"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Central Monogram Seal */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#F5F1E8] border-2 border-[#B89A62] rounded-full flex items-center justify-center shadow-2xl z-20">
              <Scissors className="w-6 h-6 text-[#3A2B20]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
