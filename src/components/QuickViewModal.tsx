import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Eye, ArrowRight, Ruler } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: ProductColor) => void;
  onViewFullDetail: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onViewFullDetail,
  isWishlisted,
  onToggleWishlist,
}) => {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#242321]/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-white border border-[#D8CCB8] shadow-2xl z-10 my-auto overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-white/80 hover:bg-white text-[#242321] transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-[#F5F1E8]">
            <img
              src={product.images[0]}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block">
                {product.category}
              </span>
              <h3 className="font-serif text-2xl text-[#242321] font-medium leading-tight mt-1 mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-[#5C5955] line-clamp-2 mb-3">{product.subtitle}</p>

              <div className="flex items-center gap-2 mb-4">
                <span className="font-serif text-2xl text-[#3A2B20] font-medium">
                  {formatINR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#5C5955] line-through">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Color */}
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-wider text-[#242321] block mb-1.5 font-medium">
                  Color: <strong className="text-[#B89A62]">{selectedColor.name}</strong>
                </span>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`w-6 h-6 rounded-full border transition-all ${
                        selectedColor.name === c.name ? 'ring-2 ring-[#B89A62] scale-105' : ''
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-wider text-[#242321] block mb-1.5 font-medium">
                  Select Size
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs uppercase font-medium border transition-colors ${
                        selectedSize === sz
                          ? 'border-[#3A2B20] bg-[#3A2B20] text-[#F5F1E8]'
                          : 'border-[#D8CCB8] hover:border-[#B89A62]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 border-t border-[#D8CCB8]">
              <button
                onClick={() => {
                  onAddToCart(product, selectedSize, selectedColor);
                  onClose();
                }}
                className="w-full py-3.5 bg-[#3A2B20] hover:bg-[#242321] text-[#F5F1E8] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#B89A62]" />
                Add to Bag
              </button>

              <button
                onClick={() => {
                  onClose();
                  onViewFullDetail(product);
                }}
                className="w-full py-2.5 bg-[#F5F1E8] hover:bg-[#D8CCB8]/50 text-[#3A2B20] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 border border-[#D8CCB8] transition-colors cursor-pointer"
              >
                <span>View Complete Sartorial Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
