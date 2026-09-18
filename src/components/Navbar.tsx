import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, Phone, Compass, Scissors, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenBespokeModal: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenBespokeModal,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Collections', id: 'collections' },
    { name: 'Bespoke', id: 'bespoke' },
    { name: 'Shop', id: 'shop' },
    { name: 'The Edit', id: 'editorial' },
    { name: 'About Us', id: 'about' },
    { name: 'Visit Store', id: 'location' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateToSection(id);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5F1E8]/95 backdrop-blur-md shadow-xs border-b border-[#D8CCB8]/70 py-3.5'
            : 'bg-gradient-to-b from-[#242321]/70 via-[#242321]/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile Menu Toggle & Brand Logo */}
            <div className="flex items-center gap-4">
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden p-1.5 transition-colors ${
                  isScrolled ? 'text-[#242321] hover:text-[#B89A62]' : 'text-white hover:text-[#B89A62]'
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <button
                id="navbar-brand-logo-btn"
                onClick={() => handleLinkClick('hero')}
                className="text-left group cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 border border-[#B89A62] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <span className="font-serif font-bold text-xs -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-[#B89A62]">
                      AW
                    </span>
                  </div>
                  <div>
                    <span
                      className={`font-serif tracking-[0.22em] text-xl sm:text-2xl font-bold uppercase transition-colors ${
                        isScrolled ? 'text-[#242321]' : 'text-white'
                      }`}
                    >
                      Aura Wear
                    </span>
                    <span
                      className={`block font-sans text-[9px] tracking-[0.25em] uppercase transition-colors ${
                        isScrolled ? 'text-[#5C5955]' : 'text-[#D8CCB8]'
                      }`}
                    >
                      Men's Boutique • Est. 2023
                    </span>
                  </div>
                </div>
              </button>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  id={`nav-link-${link.id}`}
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-xs tracking-[0.16em] uppercase font-medium transition-colors py-1 cursor-pointer focus:outline-none group ${
                    isScrolled
                      ? 'text-[#242321] hover:text-[#B89A62]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89A62] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Right: Actions (Search, Bespoke CTA, Wishlist, Shopping Bag) */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              <button
                id="nav-search-trigger-btn"
                type="button"
                onClick={onOpenSearch}
                className={`p-2 transition-colors relative cursor-pointer focus:outline-none ${
                  isScrolled ? 'text-[#242321] hover:text-[#B89A62]' : 'text-white hover:text-[#B89A62]'
                }`}
                title="Search boutique collection"
                aria-label="Search boutique collection"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                id="nav-wishlist-trigger-btn"
                type="button"
                onClick={onOpenWishlist}
                className={`p-2 transition-colors relative cursor-pointer focus:outline-none ${
                  isScrolled ? 'text-[#242321] hover:text-[#B89A62]' : 'text-white hover:text-[#B89A62]'
                }`}
                title="View wishlist"
                aria-label="View wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#B89A62] text-white text-[10px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                id="nav-cart-trigger-btn"
                type="button"
                onClick={onOpenCart}
                className={`p-2 transition-colors relative cursor-pointer focus:outline-none ${
                  isScrolled ? 'text-[#242321] hover:text-[#B89A62]' : 'text-white hover:text-[#B89A62]'
                }`}
                title="View shopping bag"
                aria-label="View shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#3A2B20] border border-[#B89A62] text-white text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                id="nav-bespoke-cta-btn"
                type="button"
                onClick={onOpenBespokeModal}
                className={`hidden md:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold px-4 py-2 border transition-all duration-300 cursor-pointer ${
                  isScrolled
                    ? 'border-[#3A2B20] text-[#3A2B20] hover:bg-[#3A2B20] hover:text-[#F5F1E8]'
                    : 'border-[#B89A62] bg-[#B89A62]/20 text-[#F5F1E8] hover:bg-[#B89A62] hover:text-white backdrop-blur-xs'
                }`}
              >
                <Scissors className="w-3.5 h-3.5 text-[#B89A62]" />
                <span>Bespoke Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-[#F5F1E8] text-[#242321] h-full shadow-2xl flex flex-col justify-between p-6 z-10 border-r border-[#D8CCB8]">
            <div>
              <div className="flex items-center justify-between border-b border-[#D8CCB8] pb-4 mb-6">
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wider text-[#3A2B20]">AURA WEAR</h3>
                  <p className="text-[10px] tracking-widest text-[#5C5955] uppercase">Men's Boutique</p>
                </div>
                <button
                  id="mobile-menu-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#5C5955] hover:text-[#242321]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="block w-full text-left font-serif text-lg tracking-wide hover:text-[#B89A62] transition-colors py-1.5 border-b border-[#D8CCB8]/30"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#D8CCB8] space-y-3">
              <button
                id="mobile-menu-bespoke-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBespokeModal();
                }}
                className="w-full py-3 bg-[#3A2B20] text-[#F5F1E8] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#242321] transition-colors"
              >
                <Scissors className="w-4 h-4 text-[#B89A62]" />
                Book Bespoke Appointment
              </button>

              <a
                href="https://wa.me/919820045678?text=Hello%20Aura%20Wear,%20I%20would%20like%20to%20inquire%20about%20your%20collection"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 border border-[#D8CCB8] text-[#3A2B20] text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:border-[#B89A62] hover:text-[#B89A62] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89A62]" />
                WhatsApp Concierge
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
