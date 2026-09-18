import React from 'react';
import { Sparkles, Scissors, Clock, ShieldCheck, Gem } from 'lucide-react';

export const BrandIntroduction: React.FC = () => {
  const features = [
    {
      icon: Gem,
      title: 'Locally Sourced Fabrics',
      subtitle: 'Heritage & Provenance',
      description:
        'We select only the purest natural fibers — from ethically sheared Himalayan cashmere and handspun Indian silk to certified Super 140s Biella merino wool and Egyptian Giza cotton.',
      metric: '100% Natural Fibers',
    },
    {
      icon: Scissors,
      title: 'Master Tailoring',
      subtitle: '60+ Hours of Artistry',
      description:
        'Each bespoke garment is crafted with individual paper pattern drafting, a full floating horsehair canvas, hand-stitched Milanese buttonholes, and soft unpadded Neapolitan shoulders.',
      metric: 'Over 32 Measurements',
    },
    {
      icon: Clock,
      title: 'Crafted Since 2023',
      subtitle: 'Contemporary Luxury',
      description:
        'Founded to redefine modern Indian menswear, Aura Wear bridges timeless British and Italian sartorial traditions with contemporary silhouettes suited for modern lifestyle.',
      metric: 'Flagship Atelier',
    },
  ];

  return (
    <section id="about-intro" className="py-24 sm:py-32 bg-[#F5F1E8] border-b border-[#D8CCB8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading & Introduction Narrative */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#B89A62]/30 text-[#B89A62] text-[10px] uppercase tracking-[0.25em] font-semibold">
            <span>The Aura Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#242321] font-normal tracking-tight mb-6 leading-tight">
            Where Craftsmanship Meets Character
          </h2>

          <p className="text-base sm:text-lg text-[#5C5955] leading-relaxed font-light">
            Welcome to <strong className="font-semibold text-[#242321]">Aura Wear</strong>, where timeless style meets contemporary sophistication. Since 2023, we have been curating premium menswear designed to elevate your everyday presence — from bespoke suits and tailored shirts to refined accessories and effortless casual wear.
          </p>
        </div>

        {/* 3 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#FFFFFF] p-8 sm:p-10 border border-[#D8CCB8] hover:border-[#B89A62] transition-all duration-500 hover:shadow-xl hover:shadow-[#3A2B20]/5 flex flex-col justify-between"
              >
                {/* Subtle Gold Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-[#B89A62]/20 group-hover:bg-[#B89A62] transition-colors w-12 h-1 -top-2 -right-4" />
                </div>

                <div>
                  <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#F5F1E8] text-[#3A2B20] group-hover:bg-[#3A2B20] group-hover:text-[#B89A62] transition-colors duration-300 border border-[#D8CCB8]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B89A62] block mb-2">
                    {feature.subtitle}
                  </span>

                  <h3 className="text-2xl font-serif text-[#242321] font-medium mb-4 group-hover:text-[#3A2B20] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#5C5955] leading-relaxed font-light mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5F1E8] flex items-center justify-between text-xs">
                  <span className="font-serif italic text-[#3A2B20] font-medium text-sm">
                    {feature.metric}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-[#B89A62] font-semibold">
                    Aura Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
