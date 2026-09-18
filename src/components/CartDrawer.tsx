import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Gift, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [giftWrap, setGiftWrap] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const giftWrapFee = giftWrap ? 500 : 0;
  const finalTotal = subtotal - discountAmount + giftWrapFee;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'AURA10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Sartorial Welcome discount applied');
    } else if (code === 'BESPOKE') {
      setDiscountPercent(15);
      setPromoSuccess('15% Atelier Privilege discount applied');
    } else {
      setPromoError('Invalid promotion code. Try AURA10 or BESPOKE');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#242321]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFFFF] border-l border-[#D8CCB8] flex flex-col justify-between shadow-2xl">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#D8CCB8] flex items-center justify-between bg-[#F5F1E8]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#3A2B20]" />
              <h3 className="font-serif text-xl text-[#242321] font-medium tracking-wide">
                Shopping Bag ({items.reduce((sum, it) => sum + it.quantity, 0)})
              </h3>
            </div>
            <button
              id="cart-drawer-close-btn"
              onClick={onClose}
              className="p-1 text-[#5C5955] hover:text-[#242321] cursor-pointer"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F5F1E8] border border-[#D8CCB8] flex items-center justify-center mx-auto text-[#5C5955]">
                  <ShoppingBag className="w-8 h-8 text-[#B89A62]" />
                </div>
                <h4 className="font-serif text-xl text-[#242321]">Your Bag is Empty</h4>
                <p className="text-xs text-[#5C5955] max-w-xs mx-auto">
                  Explore our curated collections of master-tailored suits, shirts, and leather accessories.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-[#F5F1E8]/40 border border-[#D8CCB8]/60 relative"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 aspect-[3/4] object-cover bg-white shrink-0 border border-[#D8CCB8]"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h5 className="font-serif text-base text-[#242321] font-medium leading-snug">
                          {item.product.name}
                        </h5>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#5C5955] hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#5C5955] space-y-0.5 mt-1">
                        <p>Size: <span className="font-medium text-[#242321]">{item.selectedSize}</span></p>
                        <p className="flex items-center gap-1.5">
                          Color:
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block border border-black/20"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          <span className="font-medium text-[#242321]">{item.selectedColor.name}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center border border-[#D8CCB8] bg-white text-xs">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-[#3A2B20] hover:text-[#B89A62]"
                        >
                          -
                        </button>
                        <span className="px-2 font-semibold text-[#242321]">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-[#3A2B20] hover:text-[#B89A62]"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif text-base text-[#3A2B20] font-medium">
                        {formatINR(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Gift Wrap Toggle */}
            {items.length > 0 && (
              <div className="p-4 bg-[#F5F1E8] border border-[#D8CCB8] space-y-3">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-[#B89A62]" />
                    <span className="text-xs font-medium text-[#242321]">
                      Aura Signature Gift Box & Ribbon (+₹500)
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={giftWrap}
                    onChange={(e) => setGiftWrap(e.target.checked)}
                    className="accent-[#3A2B20] cursor-pointer"
                  />
                </label>
                <p className="text-[10px] text-[#5C5955]">
                  Presented in our rigid espresso gift chest with embossed gold foil seal and handwritten calligraphed note card.
                </p>
              </div>
            )}

            {/* Promo Code Input */}
            {items.length > 0 && (
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Privilege code (try AURA10)"
                    className="flex-1 px-3 py-2 text-xs border border-[#D8CCB8] uppercase focus:outline-none focus:border-[#B89A62]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#3A2B20] text-[#F5F1E8] text-[11px] uppercase tracking-wider hover:bg-[#242321]"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-[11px] text-red-600">{promoError}</p>}
                {promoSuccess && <p className="text-[11px] text-emerald-700">{promoSuccess}</p>}
              </form>
            )}
          </div>

          {/* Drawer Footer / Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#D8CCB8] bg-[#F5F1E8] space-y-4">
              <div className="space-y-1.5 text-xs text-[#5C5955]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#242321]">{formatINR(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Sartorial Privilege Discount</span>
                    <span>-{formatINR(discountAmount)}</span>
                  </div>
                )}
                {giftWrap && (
                  <div className="flex justify-between">
                    <span>Signature Gift Box</span>
                    <span className="text-[#242321]">{formatINR(giftWrapFee)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Complimentary Shipping across India</span>
                  <span className="text-emerald-700 font-medium">Free</span>
                </div>
                <div className="pt-2 border-t border-[#D8CCB8] flex justify-between text-base font-serif text-[#242321]">
                  <span className="font-medium">Estimated Total</span>
                  <span className="font-semibold text-xl text-[#3A2B20]">
                    {formatINR(finalTotal)}
                  </span>
                </div>
              </div>

              <button
                id="cart-proceed-checkout-btn"
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-4 bg-[#B89A62] hover:bg-[#A8884E] text-[#242321] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#5C5955]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B89A62]" />
                  100% Authentic
                </span>
                <span>•</span>
                <span>Complimentary Fitting Included</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
