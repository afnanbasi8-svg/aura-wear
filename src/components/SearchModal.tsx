import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.fabric.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const quickTerms = ['Signature Suit', 'Egyptian Cotton', 'Gurkha Trousers', 'Silk Tie', 'Charcoal Blazer', 'Leather Belt'];

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-10 flex items-start justify-center pt-20">
      <div
        className="fixed inset-0 bg-[#242321]/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#D8CCB8] shadow-2xl z-10 overflow-hidden">
        {/* Search Header Input */}
        <div className="p-4 sm:p-6 border-b border-[#D8CCB8] bg-[#F5F1E8] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#B89A62] shrink-0" />
          <input
            id="search-input-field"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bespoke suits, fabrics, shirts, or accessories..."
            autoFocus
            className="flex-1 bg-transparent text-sm sm:text-base text-[#242321] placeholder-[#5C5955]/70 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#5C5955] hover:text-[#242321] p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#5C5955] hover:text-[#242321]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestions when empty */}
        {!query && (
          <div className="p-6 space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-[#B89A62] font-semibold block">
              Suggested Sartorial Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {quickTerms.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3.5 py-1.5 bg-[#F5F1E8] hover:bg-[#3A2B20] text-[#3A2B20] hover:text-[#F5F1E8] text-xs transition-colors border border-[#D8CCB8] cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-[#D8CCB8]/60">
            {filtered.length === 0 ? (
              <div className="py-12 text-center text-[#5C5955]">
                <p className="font-serif text-lg">No creations found for "{query}"</p>
                <p className="text-xs mt-1">Try searching for "Suits", "Wool", "Linen", or "Italian".</p>
              </div>
            ) : (
              filtered.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p);
                    onClose();
                  }}
                  className="py-3.5 flex items-center gap-4 hover:bg-[#F5F1E8]/50 p-2 cursor-pointer transition-colors"
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-14 aspect-[3/4] object-cover border border-[#D8CCB8] shrink-0"
                  />
                  <div className="flex-1">
                    <span className="text-[9px] uppercase tracking-widest text-[#B89A62] font-semibold">
                      {p.category}
                    </span>
                    <h5 className="font-serif text-base text-[#242321] font-medium leading-snug">
                      {p.name}
                    </h5>
                    <p className="text-xs text-[#5C5955] line-clamp-1">{p.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-sm font-medium text-[#3A2B20]">
                      {formatINR(p.price)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
