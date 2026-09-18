import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandIntroduction } from './components/BrandIntroduction';
import { FeaturedCollections } from './components/FeaturedCollections';
import { BespokeSection } from './components/BespokeSection';
import { ShopSection } from './components/ShopSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { EditorialSection } from './components/EditorialSection';
import { AboutSection } from './components/AboutSection';
import { StoreLocationSection } from './components/StoreLocationSection';
import { InstagramSection } from './components/InstagramSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { BespokeBookingModal } from './components/BespokeBookingModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';

import { PRODUCTS } from './data/products';
import { Product, ProductColor, CartItem } from './types';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Local state persisted in localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aura_wear_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'aura-signature-suit-40R-Charcoal Grey',
          product: PRODUCTS[0],
          selectedSize: '40R',
          selectedColor: PRODUCTS[0].colors[0],
          quantity: 1,
        }
      ];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aura_wear_wishlist');
      return saved ? JSON.parse(saved) : [PRODUCTS[1].id, PRODUCTS[4].id];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('aura_wear_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('aura_wear_wishlist', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  // Modal / Drawer visibility states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBespokeModalOpen, setIsBespokeModalOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart operations
  const handleAddToCart = (
    product: Product,
    size: string = product.sizes[0],
    color: ProductColor = product.colors[0],
    quantity: number = 1
  ) => {
    const itemId = `${product.id}-${size}-${color.name}`;
    setCartItems((prev) => {
      const existing = prev.find((it) => it.id === itemId);
      if (existing) {
        return prev.map((it) =>
          it.id === itemId ? { ...it, quantity: it.quantity + quantity } : it
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          product,
          selectedSize: size,
          selectedColor: color,
          quantity,
        },
      ];
    });
    showToast(`Added ${quantity}x "${product.name}" (${size}) to Shopping Bag`);
    setIsCartOpen(true);
  };

  const handleBuyNow = (
    product: Product,
    size: string = product.sizes[0],
    color: ProductColor = product.colors[0],
    quantity: number = 1
  ) => {
    handleAddToCart(product, size, color, quantity);
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((it) => (it.id === itemId ? { ...it, quantity: newQuantity } : it))
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((it) => it.id !== itemId));
    showToast('Item removed from Shopping Bag');
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to Wishlist`);
        return [...prev, product.id];
      }
    });
  };

  const handleMoveWishlistToCart = (product: Product) => {
    handleAddToCart(product, product.sizes[0], product.colors[0], 1);
    setWishlistIds((prev) => prev.filter((id) => id !== product.id));
  };

  // Navigation smoothly to element
  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    handleNavigateToSection('shop');
  };

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#242321] flex flex-col font-sans selection:bg-[#B89A62] selection:text-white relative">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-[#3A2B20] text-[#F5F1E8] p-4 border border-[#B89A62] shadow-2xl flex items-center gap-3 animate-fade-in">
          <div className="w-6 h-6 rounded-full bg-[#B89A62] text-[#242321] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <p className="text-xs font-medium tracking-wide">{toastMessage}</p>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        cartCount={cartItems.reduce((acc, it) => acc + it.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection
          onExploreClick={() => handleNavigateToSection('collections')}
          onBespokeClick={() => setIsBespokeModalOpen(true)}
        />

        {/* 3. Brand Introduction */}
        <BrandIntroduction />

        {/* 4. Featured Collections */}
        <FeaturedCollections onSelectCategory={handleSelectCategory} />

        {/* 5. Bespoke Tailoring Section */}
        <BespokeSection onOpenBookingModal={() => setIsBespokeModalOpen(true)} />

        {/* 6. Products / Shop Section */}
        <ShopSection
          products={products}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          onViewProductDetail={(p) => setSelectedProduct(p)}
        />

        {/* 8. Style Editorial Section ("The Aura Edit") */}
        <EditorialSection />

        {/* 9. About Us */}
        <AboutSection />

        {/* 10. Store Location Section */}
        <StoreLocationSection />

        {/* 11. Instagram / Social Section */}
        <InstagramSection />

        {/* 12. Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* 13. Footer */}
      <Footer
        onNavigateToSection={handleNavigateToSection}
        onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
      />

      {/* Modals and Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={handleToggleWishlist}
        onMoveToCart={handleMoveWishlistToCart}
        onViewProduct={(p) => setSelectedProduct(p)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <BespokeBookingModal
        isOpen={isBespokeModalOpen}
        onClose={() => setIsBespokeModalOpen(false)}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onViewFullDetail={(p) => setSelectedProduct(p)}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        allProducts={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={() => {
          setCartItems([]);
          showToast('Payment Authorized. Order Confirmed!');
        }}
      />
    </div>
  );
}
