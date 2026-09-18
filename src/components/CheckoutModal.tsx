import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, Truck, CreditCard, Smartphone } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [placedOrderId, setPlacedOrderId] = useState<string | null>(null);

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNum = 'AW-' + Math.floor(100000 + Math.random() * 900000);
    setPlacedOrderId(orderNum);
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#242321]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-white border border-[#D8CCB8] shadow-2xl z-10 my-auto max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-[#F5F1E8] border-b border-[#D8CCB8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#B89A62]" />
            <h3 className="font-serif text-xl text-[#242321] font-medium">
              Aura Wear • Concierge Checkout
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#5C5955] hover:text-[#242321]"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {placedOrderId ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#F5F1E8] border-2 border-[#B89A62] text-[#B89A62] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B89A62] block">
                Order Confirmed
              </span>

              <h4 className="font-serif text-3xl text-[#242321]">
                Thank You for Your Patronage
              </h4>

              <p className="text-sm text-[#5C5955] max-w-md mx-auto leading-relaxed">
                Order <strong className="text-[#242321] font-semibold">#{placedOrderId}</strong> has been received by our atelier. Your garments are being steamed, hand-packed in breathable cedar garment carriers, and prepared for dispatch.
              </p>

              <div className="p-5 bg-[#F5F1E8] border border-[#D8CCB8] max-w-md mx-auto text-left text-xs space-y-2 text-[#242321]">
                <div className="flex justify-between">
                  <span className="text-[#5C5955]">Total Paid:</span>
                  <span className="font-semibold text-[#3A2B20]">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C5955]">Expected Delivery:</span>
                  <span className="font-semibold">3–4 Business Days via Bluedart Apex</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C5955]">Fitting Care:</span>
                  <span className="font-semibold">Complimentary at any Aura Salon</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#3A2B20] text-[#F5F1E8] text-xs uppercase tracking-widest font-semibold hover:bg-[#242321] transition-colors cursor-pointer"
              >
                Continue to Boutique
              </button>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Shipping Details */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block mb-3">
                  1. Delivery Details
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Recipient Full Name"
                    required
                    defaultValue="Vikramaditya Singhania"
                    className="px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] focus:outline-none focus:border-[#B89A62]"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number (+91)"
                    required
                    defaultValue="+91 98110 23456"
                    className="px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] focus:outline-none focus:border-[#B89A62]"
                  />
                  <input
                    type="text"
                    placeholder="Street Address / Suite"
                    required
                    defaultValue="Penthouse 4B, Golf Links"
                    className="sm:col-span-2 px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] focus:outline-none focus:border-[#B89A62]"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    required
                    defaultValue="New Delhi"
                    className="px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] focus:outline-none focus:border-[#B89A62]"
                  />
                  <input
                    type="text"
                    placeholder="PIN Code"
                    required
                    defaultValue="110003"
                    className="px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] focus:outline-none focus:border-[#B89A62]"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="pt-4 border-t border-[#D8CCB8]/60">
                <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block mb-3">
                  2. Select Luxury Payment
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'upi', label: 'Instant UPI', icon: Smartphone, desc: 'GPay / PhonePe / QR' },
                    { id: 'card', label: 'Credit / Debit', icon: CreditCard, desc: 'Amex / Visa / Master' },
                    { id: 'cod', label: 'Concierge COD', icon: Truck, desc: 'Pay upon delivery' },
                  ].map((p) => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPaymentMethod(p.id as any)}
                        className={`p-3 text-left border transition-all cursor-pointer ${
                          paymentMethod === p.id
                            ? 'border-[#3A2B20] bg-[#F5F1E8] ring-1 ring-[#3A2B20]'
                            : 'border-[#D8CCB8] bg-white text-[#5C5955]'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-[#B89A62] mb-1" />
                        <span className="text-xs font-semibold text-[#242321] block">{p.label}</span>
                        <span className="text-[10px] text-[#5C5955] block">{p.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="pt-4 border-t border-[#D8CCB8]/60">
                <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block mb-2">
                  Order Summary ({items.length} items)
                </span>
                <div className="max-h-36 overflow-y-auto space-y-2">
                  {items.map((it) => (
                    <div key={it.id} className="flex justify-between items-center text-xs text-[#5C5955] py-1 border-b border-[#F5F1E8]">
                      <span>{it.quantity}x {it.product.name} ({it.selectedSize})</span>
                      <span className="font-medium text-[#242321]">{formatINR(it.product.price * it.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex justify-between text-base font-serif text-[#242321]">
                  <span>Total Payable</span>
                  <span className="text-xl font-semibold text-[#3A2B20]">{formatINR(subtotal)}</span>
                </div>
              </div>

              {/* Submit */}
              <button
                id="checkout-confirm-pay-btn"
                type="submit"
                className="w-full py-4 bg-[#B89A62] hover:bg-[#A8884E] text-[#242321] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#242321]" />
                <span>Authorize Payment ({formatINR(subtotal)})</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
