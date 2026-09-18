import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COLLECTIONS, CollectionItem } from '../data/collections';

interface FeaturedCollectionsProps {
  onSelectCategory: (category: string) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="collections" className="py-24 sm:py-32 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D8CCB8]">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#B89A62] block mb-2">
              Wardrobe Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#242321] font-normal tracking-tight">
              Curated For Every Occasion
            </h2>
          </div>
          <p className="text-sm text-[#5C5955] max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Four foundational pillars crafted to carry the modern gentleman seamlessly from high-stakes boardrooms to leisurely weekend sojourns.
          </p>
        </div>

        {/* 4-Card Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((col: CollectionItem) => (
            <div
              key={col.id}
              onClick={() => onSelectCategory(col.categoryFilter)}
              className="group relative flex flex-col bg-white border border-[#D8CCB8] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-[#B89A62]"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#242321]">
                <img
                  src={col.image}
                  alt={col.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242321]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Subtitle Badge */}
                <div className="absolute top-4 left-4 bg-[#F5F1E8]/90 backdrop-blur-xs px-3 py-1 text-[10px] uppercase tracking-widest text-[#3A2B20] font-medium border border-[#D8CCB8]">
                  {col.subtitle}
                </div>

                {/* Explore Icon Badge */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#FFFFFF] text-[#242321] flex items-center justify-center shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#B89A62]" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3 className="font-serif text-2xl text-[#242321] font-medium mb-2 group-hover:text-[#B89A62] transition-colors">
                    {col.name}
                  </h3>
                  <p className="text-xs text-[#5C5955] leading-relaxed font-light mb-5">
                    {col.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F5F1E8] flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wider text-[#3A2B20] uppercase group-hover:text-[#B89A62] transition-colors flex items-center gap-1">
                    Explore Collection
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] text-[#5C5955] tracking-wider uppercase">
                    {col.itemCount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
