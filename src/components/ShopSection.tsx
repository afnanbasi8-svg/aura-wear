import React, { useState } from 'react';
import { Eye, ShoppingBag, Heart, Check, Sparkles, Filter, SlidersHorizontal } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ShopSectionProps {
  products: Product[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: ProductColor) => void;
  onQuickView: (product: Product) => void;
  onViewProductDetail: (product: Product) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onViewProductDetail,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'newest'>('featured');
  const [selectedColorMap, setSelectedColorMap] = useState<{ [productId: string]: ProductColor }>({});

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'suits', label: 'Suits' },
    { id: 'shirts', label: 'Shirts' },
    { id: 'trousers', label: 'Trousers' },
    { id: 'blazers', label: 'Blazers' },
    { id: 'accessories', label: 'Accessories' },
  ];

  // Filter products
  const filtered = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  // Sort products
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
  });

  // Format currency helper
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="shop" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#D8CCB8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Philosophy */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#B89A62] block mb-2">
            The Ready-To-Wear & Bespoke Boutique
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#242321] font-normal tracking-tight mb-4">
            Aura Wear Collection
          </h2>
          <p className="text-sm text-[#5C5955] font-light leading-relaxed">
            Every garment is tailored from natural luxury fibers, finished with artisanal hand-stitching, and offered with complimentary fitting services.
          </p>
        </div>

        {/* Category Tabs & Sorting Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-[#D8CCB8]/60">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                id={`shop-category-btn-${cat.id}`}
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#3A2B20] text-[#F5F1E8] shadow-xs'
                    : 'bg-[#F5F1E8] text-[#5C5955] hover:text-[#242321] hover:bg-[#D8CCB8]/40 border border-[#D8CCB8]/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown & Product Count */}
          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#5C5955] font-serif italic text-sm">
              Showing {sorted.length} creations
            </span>
            <div className="relative flex items-center gap-2 border border-[#D8CCB8] px-3 py-1.5 bg-[#F5F1E8]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#B89A62]" />
              <select
                id="shop-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-[#242321] tracking-wider uppercase focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {sorted.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            const activeColor = selectedColorMap[product.id] || product.colors[0];

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white border border-[#D8CCB8]/70 hover:border-[#B89A62] transition-all duration-500 hover:shadow-xl relative"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F1E8]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    onClick={() => onViewProductDetail(product)}
                    className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10 pointer-events-none">
                    {product.isBestseller && (
                      <span className="px-2.5 py-0.5 bg-[#3A2B20] text-[#F5F1E8] text-[9px] uppercase tracking-widest font-semibold border border-[#B89A62]">
                        Signature
                      </span>
                    )}
                    {product.isNew && (
                      <span className="px-2.5 py-0.5 bg-[#B89A62] text-[#242321] text-[9px] uppercase tracking-widest font-semibold">
                        New Release
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    id={`wishlist-btn-${product.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 z-10 cursor-pointer shadow-md ${
                      isWishlisted
                        ? 'bg-[#B89A62] text-white'
                        : 'bg-white/90 text-[#242321] hover:bg-white hover:text-[#B89A62]'
                    }`}
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                    aria-label="Toggle wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>

                  {/* Quick View Button (overlay on hover) */}
                  <div className="absolute inset-x-3 bottom-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 z-10">
                    <button
                      id={`quick-view-btn-${product.id}`}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="flex-1 py-2.5 bg-white/95 hover:bg-[#3A2B20] text-[#242321] hover:text-[#F5F1E8] text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 backdrop-blur-xs transition-colors shadow-md border border-[#D8CCB8]"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    {/* Color Swatches */}
                    <div className="flex items-center gap-1.5 mb-3">
                      {product.colors.map((color) => (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() =>
                            setSelectedColorMap((prev) => ({
                              ...prev,
                              [product.id]: color,
                            }))
                          }
                          className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                            activeColor.name === color.name
                              ? 'ring-2 ring-[#B89A62] ring-offset-1 scale-110'
                              : 'border-black/20 hover:scale-105'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                      <span className="text-[10px] text-[#5C5955] tracking-wider ml-1">
                        {activeColor.name}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => onViewProductDetail(product)}
                      className="font-serif text-xl text-[#242321] font-medium leading-snug hover:text-[#B89A62] transition-colors cursor-pointer mb-1 line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs text-[#5C5955] font-light line-clamp-1 mb-3">
                      {product.subtitle}
                    </p>

                    {/* Price in INR */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-base font-medium text-[#3A2B20]">
                        {formatINR(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#5C5955]/70 line-through">
                          {formatINR(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Bag Button */}
                  <button
                    id={`add-to-bag-btn-${product.id}`}
                    type="button"
                    onClick={() => onAddToCart(product, product.sizes[0], activeColor)}
                    className="w-full py-2.5 bg-[#F5F1E8] hover:bg-[#3A2B20] text-[#3A2B20] hover:text-[#F5F1E8] text-[10px] uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 border border-[#D8CCB8] hover:border-[#3A2B20] transition-colors duration-300 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Bag
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
