import React from 'react';
import { Scissors, Sparkles, CheckCircle2, Ruler, UserCheck, CalendarCheck, Compass } from 'lucide-react';
import { bespokeTailorImage } from '../assets/images';

interface BespokeSectionProps {
  onOpenBookingModal: () => void;
}

export const BespokeSection: React.FC<BespokeSectionProps> = ({
  onOpenBookingModal,
}) => {
  const bespokeSteps = [
    {
      num: '01',
      title: 'Personal Consultation',
      desc: 'An intimate 1-on-1 dialogue with our master stylist to understand your lifestyle, posture, and sartorial aspirations.',
      icon: UserCheck,
    },
    {
      num: '02',
      title: 'Fabric Selection',
      desc: 'Curated access to 800+ cloths from celebrated mills including Loro Piana, Zegna, Holland & Sherry, and Indian handlooms.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Precision Measurements',
      desc: 'Over 32 anatomical laser-accurate checkpoints charting chest slope, arm drop, shoulder balance, and natural carriage.',
      icon: Ruler,
    },
    {
      num: '04',
      title: 'Individual Styling',
      desc: 'Tailor every nuance: lapel width, ticket pocket, horn buttons, silk jacquard lining, and discreet embroidered monogram.',
      icon: Scissors,
    },
    {
      num: '05',
      title: 'Final Fitting',
      desc: 'A dedicated basted fitting session where millimeters are finessed until the suit hangs with sovereign, effortless grace.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="bespoke" className="py-24 sm:py-32 bg-[#3A2B20] text-[#F5F1E8] relative overflow-hidden">
      {/* Ambient luxury glow in corner */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#B89A62]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#242321] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B89A62]/50 bg-[#2A1E16]/50 text-[#B89A62] text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
            <Scissors className="w-3.5 h-3.5" />
            <span>The Aura Atelier</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight mb-6">
            Your Fit. Your Fabric. <br />
            <span className="italic text-[#B89A62]">Your Signature.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#D8CCB8] font-light leading-relaxed max-w-2xl mx-auto">
            Bespoke tailoring is not merely a service; it is an enduring relationship between master tailor and gentleman. Experience the time-honored five-stage journey.
          </p>
        </div>

        {/* 2-Column Showcase: Editorial Visual Left, Interactive Steps Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Master Tailor Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#B89A62]/40 p-3 bg-[#2A1E16]/60">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#242321]">
                <img
                  src={bespokeTailorImage}
                  alt="Aura Wear Master Tailor Crafting a Bespoke Suit"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E16] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Atelier Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#F5F1E8] text-[#242321] p-5 shadow-2xl border border-[#D8CCB8] max-w-xs">
                <p className="text-[9px] uppercase tracking-widest text-[#B89A62] font-semibold mb-1">
                  Master Tailor Guarantee
                </p>
                <p className="font-serif text-lg font-medium leading-snug">
                  Full floating horsehair canvas. 60 hours of bench handwork.
                </p>
              </div>
            </div>
          </div>

          {/* Right: The 5 Bespoke Journey Steps */}
          <div className="lg:col-span-7 space-y-6">
            {bespokeSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group p-6 bg-[#2A1E16]/70 border border-[#D8CCB8]/20 hover:border-[#B89A62] transition-all duration-300 flex items-start gap-5 hover:bg-[#2A1E16]"
                >
                  <div className="shrink-0">
                    <span className="font-serif text-2xl sm:text-3xl text-[#B89A62] font-light">
                      {step.num}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h4 className="font-serif text-xl sm:text-2xl text-[#F5F1E8] font-medium group-hover:text-[#B89A62] transition-colors">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#D8CCB8]/80 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* CTA Button */}
            <div className="pt-6">
              <button
                id="bespoke-section-cta-btn"
                type="button"
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto px-10 py-4 bg-[#B89A62] hover:bg-[#A8884E] text-[#242321] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl hover:shadow-[#B89A62]/30 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Scissors className="w-4 h-4 text-[#242321]" />
                <span>Book Your Bespoke Experience</span>
              </button>
              <p className="text-[11px] text-[#D8CCB8]/60 mt-3 tracking-wide">
                Available at our New Delhi and Bengaluru Flagship Boutiques, or via Private Residence Concierge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
