import React, { useState } from 'react';
import { X, Scissors, Calendar, Clock, MapPin, CheckCircle, Sparkles, User, Phone, Mail } from 'lucide-react';
import { BespokeAppointment } from '../types';

interface BespokeBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BespokeBookingModal: React.FC<BespokeBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<BespokeAppointment>({
    serviceType: 'Bespoke Suit',
    experienceType: 'Flagship Boutique Salon',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: '11:30 AM',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '11:00 AM',
    '12:30 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#242321]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#D8CCB8] shadow-2xl z-10 my-auto overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#3A2B20] text-[#F5F1E8] flex items-center justify-between border-b border-[#B89A62]/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#B89A62] flex items-center justify-center rotate-45">
              <Scissors className="w-4 h-4 text-[#B89A62] -rotate-45" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal">
                Bespoke Atelier Appointment
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-[#D8CCB8]/80">
                Aura Wear • Private Master Consultation
              </p>
            </div>
          </div>

          <button
            id="bespoke-modal-close-btn"
            onClick={onClose}
            className="p-1.5 text-[#D8CCB8] hover:text-white transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center space-y-5 bg-[#F5F1E8]">
            <div className="w-16 h-16 rounded-full bg-[#3A2B20] text-[#B89A62] border border-[#B89A62] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#242321]">
              Consultation Reserved, {formData.fullName}
            </h4>

            <p className="text-sm text-[#5C5955] max-w-md mx-auto leading-relaxed">
              Our Head of Sartorial Styling will reach out via phone & WhatsApp within 2 hours to confirm your private swatch preparation.
            </p>

            {/* Appointment Summary Box */}
            <div className="p-5 bg-white border border-[#D8CCB8] max-w-md mx-auto text-left space-y-2 text-xs text-[#242321]">
              <div className="flex justify-between">
                <span className="text-[#5C5955]">Service:</span>
                <span className="font-semibold">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C5955]">Experience:</span>
                <span className="font-semibold">{formData.experienceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C5955]">Date & Time:</span>
                <span className="font-semibold">{formData.preferredDate} at {formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C5955]">Location:</span>
                <span className="font-semibold">Aura Wear Flagship Salon, New Delhi</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3.5 bg-[#3A2B20] text-[#F5F1E8] text-xs uppercase tracking-widest font-semibold hover:bg-[#242321] transition-colors cursor-pointer"
            >
              Return to Boutique
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Step 1: Service & Experience */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block">
                Step 1 of 3: Consultation Selection
              </span>

              <div className="grid grid-cols-2 gap-3">
                {[
                  'Bespoke Suit',
                  'Tailored Shirts',
                  'Ceremonial / Tuxedo',
                  'Wardrobe Consultation',
                ].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: st as any })}
                    className={`p-3.5 text-left border text-xs tracking-wider transition-all cursor-pointer ${
                      formData.serviceType === st
                        ? 'border-[#3A2B20] bg-[#3A2B20] text-[#F5F1E8] shadow-xs'
                        : 'border-[#D8CCB8] bg-[#F5F1E8] text-[#242321] hover:border-[#B89A62]'
                    }`}
                  >
                    <span className="font-serif text-sm font-medium block">{st}</span>
                    <span className="text-[10px] opacity-80 mt-0.5 block">60–90 min private session</span>
                  </button>
                ))}
              </div>

              {/* Experience Venue */}
              <div className="flex gap-3 pt-1">
                {[
                  { label: 'Flagship Boutique Salon', sub: 'In-store fitting suite & fabric vault' },
                  { label: 'Private Residence Concierge', sub: 'Master tailor visits your home/office' },
                ].map((exp) => (
                  <button
                    key={exp.label}
                    type="button"
                    onClick={() => setFormData({ ...formData, experienceType: exp.label as any })}
                    className={`flex-1 p-3 text-left border text-xs tracking-wider transition-all cursor-pointer ${
                      formData.experienceType === exp.label
                        ? 'border-[#B89A62] bg-[#F5F1E8] text-[#3A2B20] ring-1 ring-[#B89A62]'
                        : 'border-[#D8CCB8] bg-white text-[#5C5955]'
                    }`}
                  >
                    <span className="font-semibold block">{exp.label}</span>
                    <span className="text-[10px] text-[#5C5955] block mt-0.5">{exp.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Slot */}
            <div className="space-y-4 pt-2 border-t border-[#D8CCB8]/60">
              <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block">
                Step 2 of 3: Preferred Date & Time
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#242321] block mb-1.5 font-medium">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] focus:outline-none focus:border-[#B89A62]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#242321] block mb-1.5 font-medium">
                    Select Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] focus:outline-none focus:border-[#B89A62]"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="space-y-4 pt-2 border-t border-[#D8CCB8]/60">
              <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block">
                Step 3 of 3: Gentleman's Details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] placeholder-[#5C5955]/70 focus:outline-none focus:border-[#B89A62]"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp (+91)"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] placeholder-[#5C5955]/70 focus:outline-none focus:border-[#B89A62]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-3 py-2.5 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] placeholder-[#5C5955]/70 focus:outline-none focus:border-[#B89A62]"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Specific occasion details (wedding, black-tie, corporate) or preferred fabrics (optional)..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 bg-[#F5F1E8] border border-[#D8CCB8] text-xs text-[#242321] placeholder-[#5C5955]/70 focus:outline-none focus:border-[#B89A62]"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                id="bespoke-modal-submit-btn"
                type="submit"
                className="w-full py-4 bg-[#B89A62] hover:bg-[#A8884E] text-[#242321] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
              >
                <Scissors className="w-4 h-4 text-[#242321]" />
                <span>Confirm Bespoke Reservation</span>
              </button>
              <p className="text-[10px] text-center text-[#5C5955] mt-2">
                No upfront payment required for consultation. Fabric deposits are handled in-salon.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
