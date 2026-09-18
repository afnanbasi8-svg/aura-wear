import React from 'react';
import { Instagram, Facebook, MessageSquare, ArrowUp, Scissors, Heart, Phone } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenBespokeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToSection,
  onOpenBespokeModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#242321] text-[#F5F1E8] pt-20 pb-12 border-t border-[#3A2B20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3A2B20]">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#B89A62] flex items-center justify-center rotate-45">
                <span className="font-serif font-bold text-xs -rotate-45 text-[#B89A62]">AW</span>
              </div>
              <div>
                <span className="font-serif tracking-[0.25em] text-2xl font-bold uppercase block text-[#F5F1E8]">
                  Aura Wear
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#B89A62]">
                  Men's Boutique • Est. 2023
                </span>
              </div>
            </div>

            <p className="font-serif italic text-lg text-[#D8CCB8] max-w-sm">
              "Timeless Style. Contemporary Sophistication."
            </p>

            <p className="text-xs text-[#D8CCB8]/70 leading-relaxed max-w-sm font-light">
              Master tailoring salon and premium men’s boutique. Curating bespoke two-piece and three-piece suits, Italian Giza cotton dress shirts, and hand-finished accessories for discerning gentlemen.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#D8CCB8]/20 hover:border-[#B89A62] hover:text-[#B89A62] flex items-center justify-center transition-colors text-[#D8CCB8]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#D8CCB8]/20 hover:border-[#B89A62] hover:text-[#B89A62] flex items-center justify-center transition-colors text-[#D8CCB8]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-whatsapp"
                href="https://wa.me/919820045678"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#D8CCB8]/20 hover:border-[#B89A62] hover:text-[#B89A62] flex items-center justify-center transition-colors text-[#D8CCB8]"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B89A62]">
              Sartorial Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CCB8]/80">
              <li>
                <button
                  onClick={() => onNavigateToSection('shop')}
                  className="hover:text-[#B89A62] transition-colors cursor-pointer"
                >
                  Shop Ready-to-Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('collections')}
                  className="hover:text-[#B89A62] transition-colors cursor-pointer"
                >
                  Curated Collections
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBespokeModal}
                  className="hover:text-[#B89A62] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Scissors className="w-3 h-3 text-[#B89A62]" />
                  Bespoke Tailoring Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('editorial')}
                  className="hover:text-[#B89A62] transition-colors cursor-pointer"
                >
                  The Aura Edit Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('about')}
                  className="hover:text-[#B89A62] transition-colors cursor-pointer"
                >
                  About Our Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('location')}
                  className="hover:text-[#B89A62] transition-colors cursor-pointer"
                >
                  Flagship Salons & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care & Policies Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B89A62]">
              Client Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CCB8]/80">
              <li>
                <span className="hover:text-[#B89A62] transition-colors cursor-pointer">
                  Complimentary Shipping & Delivery
                </span>
              </li>
              <li>
                <span className="hover:text-[#B89A62] transition-colors cursor-pointer">
                  In-Store Alterations & Fitting Care
                </span>
              </li>
              <li>
                <span className="hover:text-[#B89A62] transition-colors cursor-pointer">
                  14-Day Luxury Exchange Policy
                </span>
              </li>
              <li>
                <span className="hover:text-[#B89A62] transition-colors cursor-pointer">
                  Privacy Policy & Client Discretion
                </span>
              </li>
              <li>
                <span className="hover:text-[#B89A62] transition-colors cursor-pointer">
                  Terms & Conditions
                </span>
              </li>
            </ul>

            <div className="pt-2 text-xs text-[#D8CCB8]/60">
              <p>Direct Concierge Desk: <span className="text-[#F5F1E8] font-medium">+91 98200 45678</span></p>
              <p className="mt-1">Mon–Sat: 10:30 AM – 8:30 PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8CCB8]/60">
          <p>© {new Date().getFullYear()} Aura Wear – Men's Boutique. All rights reserved. Crafted with master tailoring traditions.</p>
          
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B89A62] hover:text-white transition-colors cursor-pointer"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
