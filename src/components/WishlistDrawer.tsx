import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveWishlist: (product: Product) => void;
  onMoveToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveWishlist,
  onMoveToCart,
  onViewProduct,
}) => {
  if (!isOpen) return null;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#242321]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#D8CCB8] flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#D8CCB8] flex items-center justify-between bg-[#F5F1E8]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#B89A62] fill-current" />
              <h3 className="font-serif text-xl text-[#242321] font-medium">
                Saved Creations ({wishlistProducts.length})
              </h3>
            </div>
            <button
              id="wishlist-drawer-close-btn"
              onClick={onClose}
              className="p-1 text-[#5C5955] hover:text-[#242321] cursor-pointer"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F5F1E8] border border-[#D8CCB8] flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-[#B89A62]" />
                </div>
                <h4 className="font-serif text-xl text-[#242321]">No Saved Pieces</h4>
                <p className="text-xs text-[#5C5955] max-w-xs mx-auto">
                  Save your favorite bespoke suits, shirts, and artisanal accessories for future reference or consultation.
                </p>
              </div>
            ) : (
              wishlistProducts.map((p) => (
                <div
                  key={p.id}
                  className="p-4 bg-[#F5F1E8]/50 border border-[#D8CCB8] flex gap-4 items-center"
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    onClick={() => {
                      onClose();
                      onViewProduct(p);
                    }}
                    className="w-16 aspect-[3/4] object-cover cursor-pointer border border-[#D8CCB8]"
                  />

                  <div className="flex-1">
                    <h5
                      onClick={() => {
                        onClose();
                        onViewProduct(p);
                      }}
                      className="font-serif text-base text-[#242321] font-medium hover:text-[#B89A62] cursor-pointer line-clamp-1"
                    >
                      {p.name}
                    </h5>
                    <p className="text-xs font-semibold text-[#3A2B20] mt-0.5">
                      {formatINR(p.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => onMoveToCart(p)}
                        className="px-3 py-1.5 bg-[#3A2B20] hover:bg-[#242321] text-[#F5F1E8] text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3 text-[#B89A62]" />
                        Move to Bag
                      </button>

                      <button
                        onClick={() => onRemoveWishlist(p)}
                        className="text-[11px] text-[#5C5955] hover:text-red-600 transition-colors cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-[#D8CCB8] bg-[#F5F1E8]">
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#F5F1E8] border border-[#3A2B20] text-[#3A2B20] text-xs uppercase tracking-widest font-semibold hover:bg-[#3A2B20] hover:text-[#F5F1E8] transition-colors cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
