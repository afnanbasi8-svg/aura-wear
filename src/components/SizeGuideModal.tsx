import React, { useState } from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  const [activeCategory, setActiveCategory] = useState<'suits' | 'shirts' | 'trousers'>('suits');

  if (!isOpen) return null;

  const suitSizes = [
    { size: '38R', chest: unit === 'inches' ? '38"' : '96.5 cm', shoulder: unit === 'inches' ? '17.75"' : '45 cm', sleeve: unit === 'inches' ? '25.0"' : '63.5 cm', waist: unit === 'inches' ? '32"' : '81 cm' },
    { size: '40R', chest: unit === 'inches' ? '40"' : '101.5 cm', shoulder: unit === 'inches' ? '18.25"' : '46.5 cm', sleeve: unit === 'inches' ? '25.5"' : '64.5 cm', waist: unit === 'inches' ? '34"' : '86 cm' },
    { size: '42R', chest: unit === 'inches' ? '42"' : '106.5 cm', shoulder: unit === 'inches' ? '18.75"' : '47.5 cm', sleeve: unit === 'inches' ? '26.0"' : '66 cm', waist: unit === 'inches' ? '36"' : '91.5 cm' },
    { size: '44R', chest: unit === 'inches' ? '44"' : '111.5 cm', shoulder: unit === 'inches' ? '19.25"' : '49 cm', sleeve: unit === 'inches' ? '26.5"' : '67 cm', waist: unit === 'inches' ? '38"' : '96.5 cm' },
    { size: '46R', chest: unit === 'inches' ? '46"' : '117 cm', shoulder: unit === 'inches' ? '19.75"' : '50 cm', sleeve: unit === 'inches' ? '27.0"' : '68.5 cm', waist: unit === 'inches' ? '40"' : '101.5 cm' },
  ];

  const shirtSizes = [
    { size: '38 (15")', chest: unit === 'inches' ? '41"' : '104 cm', collar: unit === 'inches' ? '15.0"' : '38 cm', sleeve: unit === 'inches' ? '33.5"' : '85 cm', waist: unit === 'inches' ? '37"' : '94 cm' },
    { size: '39 (15.5")', chest: unit === 'inches' ? '43"' : '109 cm', collar: unit === 'inches' ? '15.5"' : '39.5 cm', sleeve: unit === 'inches' ? '34.0"' : '86.5 cm', waist: unit === 'inches' ? '39"' : '99 cm' },
    { size: '40 (16")', chest: unit === 'inches' ? '45"' : '114 cm', collar: unit === 'inches' ? '16.0"' : '40.5 cm', sleeve: unit === 'inches' ? '34.5"' : '87.5 cm', waist: unit === 'inches' ? '41"' : '104 cm' },
    { size: '42 (16.5")', chest: unit === 'inches' ? '47"' : '119 cm', collar: unit === 'inches' ? '16.5"' : '42 cm', sleeve: unit === 'inches' ? '35.0"' : '89 cm', waist: unit === 'inches' ? '43"' : '109 cm' },
    { size: '44 (17.5")', chest: unit === 'inches' ? '50"' : '127 cm', collar: unit === 'inches' ? '17.5"' : '44.5 cm', sleeve: unit === 'inches' ? '36.0"' : '91.5 cm', waist: unit === 'inches' ? '46"' : '117 cm' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#242321]/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#D8CCB8] shadow-2xl z-10 my-auto p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#D8CCB8] mb-6">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#B89A62]" />
            <h3 className="font-serif text-2xl text-[#242321] font-medium">
              Sartorial Size & Fit Matrix
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#5C5955] hover:text-[#242321]"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls: Categories & Units */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            {(['suits', 'shirts'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider font-semibold border transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#3A2B20] text-[#F5F1E8] border-[#3A2B20]'
                    : 'bg-[#F5F1E8] text-[#5C5955] border-[#D8CCB8]'
                }`}
              >
                {cat === 'suits' ? 'Suits & Blazers' : 'Dress Shirts'}
              </button>
            ))}
          </div>

          <div className="flex items-center border border-[#D8CCB8] bg-[#F5F1E8] p-0.5 text-xs">
            <button
              onClick={() => setUnit('inches')}
              className={`px-3 py-1 font-medium transition-colors ${
                unit === 'inches' ? 'bg-[#3A2B20] text-[#F5F1E8]' : 'text-[#5C5955]'
              }`}
            >
              Inches
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 font-medium transition-colors ${
                unit === 'cm' ? 'bg-[#3A2B20] text-[#F5F1E8]' : 'text-[#5C5955]'
              }`}
            >
              CM
            </button>
          </div>
        </div>

        {/* Measurement Table */}
        <div className="overflow-x-auto border border-[#D8CCB8] mb-6">
          <table className="w-full text-left text-xs text-[#242321]">
            <thead className="bg-[#F5F1E8] border-b border-[#D8CCB8] text-[10px] uppercase tracking-widest text-[#5C5955]">
              <tr>
                <th className="p-3">Size</th>
                <th className="p-3">{activeCategory === 'suits' ? 'Chest' : 'Collar'}</th>
                <th className="p-3">{activeCategory === 'suits' ? 'Shoulder' : 'Chest'}</th>
                <th className="p-3">Sleeve</th>
                <th className="p-3">Waist</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D8CCB8]/40">
              {(activeCategory === 'suits' ? suitSizes : shirtSizes).map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F5F1E8]/40">
                  <td className="p-3 font-semibold text-[#3A2B20]">{row.size}</td>
                  <td className="p-3">{(row as any).chest || (row as any).collar}</td>
                  <td className="p-3">{(row as any).shoulder || (row as any).chest}</td>
                  <td className="p-3">{row.sleeve}</td>
                  <td className="p-3">{row.waist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Complimentary Tailor Advice */}
        <div className="p-4 bg-[#F5F1E8] border-l-2 border-[#B89A62] text-xs text-[#5C5955] space-y-1">
          <p className="font-semibold text-[#242321]">Complimentary In-Store Tailoring Included:</p>
          <p>
            Between sizes? Choose the larger size. Our atelier provides complimentary sleeve length, waist suppression, and trouser cuff adjustments for all ready-to-wear garments.
          </p>
        </div>
      </div>
    </div>
  );
};
