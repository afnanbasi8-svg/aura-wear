import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Truck, ShieldCheck, Ruler, Check, Star, ArrowRight, Share2 } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: ProductColor, quantity: number) => void;
  onBuyNow: (product: Product, size: string, color: ProductColor, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenSizeGuide: () => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onOpenSizeGuide,
  allProducts,
  onSelectProduct,
}) => {
  if (!isOpen || !product) return null;

  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '40R');
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'fabric' | 'care'>('details');

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.category === 'accessories'))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#242321]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-[#FFFFFF] border border-[#D8CCB8] shadow-2xl z-10 my-auto max-h-[92vh] flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#D8CCB8] flex items-center justify-between bg-[#F5F1E8]">
          <div className="flex items-center gap-2 text-xs tracking-widest text-[#5C5955] uppercase">
            <span>Aura Wear</span>
            <span>•</span>
            <span className="text-[#B89A62] font-semibold">{product.category}</span>
          </div>

          <button
            id="product-detail-close-btn"
            onClick={onClose}
            className="p-1.5 text-[#5C5955] hover:text-[#242321] transition-colors cursor-pointer"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] bg-[#F5F1E8] border border-[#D8CCB8] overflow-hidden">
                <img
                  src={product.images[selectedImageIdx] || product.images[0]}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />

                {/* Wishlist Button */}
                <button
                  id="detail-wishlist-toggle-btn"
                  onClick={() => onToggleWishlist(product)}
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg cursor-pointer ${
                    isWishlisted
                      ? 'bg-[#B89A62] text-white'
                      : 'bg-white/90 text-[#242321] hover:bg-white hover:text-[#B89A62]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      className={`relative w-20 aspect-[3/4] border overflow-hidden cursor-pointer transition-all ${
                        selectedImageIdx === idx
                          ? 'border-[#B89A62] ring-2 ring-[#B89A62]/30'
                          : 'border-[#D8CCB8] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Details & Purchase Form */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#B89A62] block mb-1">
                  Bespoke Craftsmanship
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl text-[#242321] font-normal leading-tight mb-2">
                  {product.name}
                </h1>

                <p className="text-xs sm:text-sm text-[#5C5955] font-light mb-4">
                  {product.subtitle}
                </p>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#D8CCB8]/60">
                  <span className="text-2xl sm:text-3xl font-serif text-[#3A2B20] font-medium">
                    {formatINR(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#5C5955] line-through">
                      {formatINR(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-[10px] text-[#5C5955] tracking-wider uppercase ml-auto">
                    Inclusive of all taxes
                  </span>
                </div>

                {/* Fabric Information Box */}
                <div className="p-4 bg-[#F5F1E8] border-l-2 border-[#B89A62] mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block mb-1">
                    Fabric & Mill Provenance
                  </span>
                  <p className="text-xs text-[#242321] leading-relaxed font-medium">
                    {product.fabric}
                  </p>
                </div>

                {/* Color Selection */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#242321] font-medium">
                      Color: <strong className="text-[#B89A62]">{selectedColor.name}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-7 h-7 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                          selectedColor.name === color.name
                            ? 'ring-2 ring-[#B89A62] ring-offset-2 scale-105'
                            : 'border-black/20 hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor.name === color.name && (
                          <Check className="w-3.5 h-3.5 text-white drop-shadow-md" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#242321] font-medium">
                      Select Size
                    </span>
                    <button
                      id="detail-open-size-guide-btn"
                      type="button"
                      onClick={onOpenSizeGuide}
                      className="text-xs text-[#B89A62] hover:text-[#3A2B20] underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-all cursor-pointer ${
                          selectedSize === sz
                            ? 'border-[#3A2B20] bg-[#3A2B20] text-[#F5F1E8]'
                            : 'border-[#D8CCB8] bg-white text-[#242321] hover:border-[#B89A62]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Action Buttons */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#D8CCB8] bg-[#F5F1E8] h-12 px-2">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 text-sm text-[#3A2B20] hover:text-[#B89A62] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-semibold text-[#242321]">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 text-sm text-[#3A2B20] hover:text-[#B89A62] cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Bag Button */}
                    <button
                      id="detail-add-to-bag-btn"
                      type="button"
                      onClick={() => onAddToCart(product, selectedSize, selectedColor, quantity)}
                      className="flex-1 h-12 bg-[#3A2B20] hover:bg-[#242321] text-[#F5F1E8] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#B89A62]" />
                      <span>Add to Bag</span>
                    </button>
                  </div>

                  {/* Buy Now Button */}
                  <button
                    id="detail-buy-now-btn"
                    type="button"
                    onClick={() => onBuyNow(product, selectedSize, selectedColor, quantity)}
                    className="w-full h-12 bg-[#B89A62] hover:bg-[#A8884E] text-[#242321] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Instant Checkout • Buy Now</span>
                  </button>
                </div>

                {/* Delivery & Boutique Perks */}
                <div className="mt-8 pt-6 border-t border-[#D8CCB8]/60 space-y-2.5 text-xs text-[#5C5955]">
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-[#B89A62] shrink-0" />
                    <span>Complimentary insured shipping across India (3–5 business days)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#B89A62] shrink-0" />
                    <span>Complimentary in-boutique fitting & sleeve/hem alterations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Technical Accordions */}
          <div className="mt-12 pt-8 border-t border-[#D8CCB8]">
            <div className="flex items-center gap-6 border-b border-[#D8CCB8] mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('details')}
                className={`pb-3 text-xs uppercase tracking-[0.16em] font-medium transition-colors border-b-2 cursor-pointer ${
                  activeTab === 'details'
                    ? 'border-[#B89A62] text-[#242321]'
                    : 'border-transparent text-[#5C5955] hover:text-[#242321]'
                }`}
              >
                Sartorial Details
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('fabric')}
                className={`pb-3 text-xs uppercase tracking-[0.16em] font-medium transition-colors border-b-2 cursor-pointer ${
                  activeTab === 'fabric'
                    ? 'border-[#B89A62] text-[#242321]'
                    : 'border-transparent text-[#5C5955] hover:text-[#242321]'
                }`}
              >
                Fabric Provenance
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('care')}
                className={`pb-3 text-xs uppercase tracking-[0.16em] font-medium transition-colors border-b-2 cursor-pointer ${
                  activeTab === 'care'
                    ? 'border-[#B89A62] text-[#242321]'
                    : 'border-transparent text-[#5C5955] hover:text-[#242321]'
                }`}
              >
                Garment Care
              </button>
            </div>

            {/* Tab Content */}
            <div className="text-xs sm:text-sm text-[#5C5955] leading-relaxed">
              {activeTab === 'details' && (
                <div className="space-y-4">
                  <p className="font-light">{product.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'fabric' && (
                <div className="space-y-3">
                  <p className="font-medium text-[#242321]">{product.fabric}</p>
                  <p className="font-light">
                    Sourced directly from historical family-owned mills in Biella, Como, and traditional Indian weaving clusters. Each batch undergoes strict density and tensile inspection before passing to our master cutting table.
                  </p>
                </div>
              )}

              {activeTab === 'care' && (
                <ul className="space-y-2">
                  {product.careInstructions.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3A2B20] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-14 pt-8 border-t border-[#D8CCB8]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl text-[#242321]">Complete The Ensemble</h3>
                <span className="text-[10px] tracking-widest uppercase text-[#B89A62]">
                  Stylist Recommendation
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectProduct(rel);
                      setSelectedImageIdx(0);
                    }}
                    className="group cursor-pointer border border-[#D8CCB8]/60 p-3 hover:border-[#B89A62] transition-colors bg-[#F5F1E8]/40"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-white mb-3">
                      <img
                        src={rel.images[0]}
                        alt={rel.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="font-serif text-base text-[#242321] group-hover:text-[#B89A62] transition-colors truncate">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-[#3A2B20] font-medium">{formatINR(rel.price)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
