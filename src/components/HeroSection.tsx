import React from 'react';
import { ArrowDown, Scissors, Sparkles, ChevronRight } from 'lucide-react';
import { heroSuitImage } from '../assets/images';

interface HeroSectionProps {
  onExploreClick: () => void;
  onBespokeClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onBespokeClick,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#242321]"
    >
      {/* Background Editorial Image with subtle zoom & luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSuitImage}
          alt="Aura Wear Bespoke Tailored Suit Editorial"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-[0.82] contrast-[1.05]"
        />
        {/* Luxury Vignette & Brand Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#242321]/90 via-[#242321]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242321] via-transparent to-[#242321]/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-2xl text-left">
          {/* Subtle Monogram Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#B89A62]/40 bg-[#3A2B20]/60 backdrop-blur-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62] animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#D8CCB8]">
              Aura Wear • Men's Boutique
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#F5F1E8] font-normal leading-[1.08] tracking-tight mb-6">
            Timeless Style. <br />
            <span className="italic font-light text-[#D8CCB8]">Tailored for You.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-[#D8CCB8] font-light leading-relaxed max-w-xl mb-10 tracking-wide">
            Discover refined menswear crafted with premium fabrics, expert tailoring, and an unmistakable Aura.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              id="hero-explore-collection-btn"
              type="button"
              onClick={onExploreClick}
              className="px-8 py-4 bg-[#B89A62] hover:bg-[#A8884E] text-[#242321] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-[#B89A62]/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Collection</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="hero-book-bespoke-btn"
              type="button"
              onClick={onBespokeClick}
              className="px-8 py-4 bg-transparent hover:bg-[#F5F1E8]/10 text-[#F5F1E8] border border-[#D8CCB8]/60 hover:border-[#F5F1E8] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
            >
              <Scissors className="w-4 h-4 text-[#B89A62]" />
              <span>Book a Bespoke Appointment</span>
            </button>
          </div>

          {/* Key Value Micro-Bar */}
          <div className="mt-14 pt-8 border-t border-[#D8CCB8]/20 grid grid-cols-3 gap-4 text-[#D8CCB8]">
            <div>
              <p className="font-serif text-lg text-[#F5F1E8]">Locally Sourced</p>
              <p className="text-[10px] tracking-wider uppercase text-[#D8CCB8]/80">Fine Indian & Italian Wools</p>
            </div>
            <div>
              <p className="font-serif text-lg text-[#F5F1E8]">Master Tailoring</p>
              <p className="text-[10px] tracking-wider uppercase text-[#D8CCB8]/80">Full Floating Canvas</p>
            </div>
            <div>
              <p className="font-serif text-lg text-[#F5F1E8]">Since 2023</p>
              <p className="text-[10px] tracking-wider uppercase text-[#D8CCB8]/80">Flagship Boutique</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 right-8 hidden md:flex items-center gap-3 text-white/50 text-[10px] uppercase tracking-[0.2em]">
        <span>Scroll to Discover</span>
        <div className="w-8 h-[1px] bg-[#B89A62]/60" />
        <ArrowDown className="w-3.5 h-3.5 text-[#B89A62] animate-bounce" />
      </div>
    </section>
  );
};
