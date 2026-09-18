import React, { useState } from 'react';
import { BookOpen, X, Clock, ArrowRight, Quote } from 'lucide-react';
import { EDITORIAL_STORIES } from '../data/editorials';
import { EditorialStory } from '../types';

export const EditorialSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<EditorialStory | null>(null);

  return (
    <section id="editorial" className="py-24 sm:py-32 bg-[#F5F1E8] border-b border-[#D8CCB8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B89A62]/30 text-[#B89A62] text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Sartorial Journalism</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#242321] font-normal tracking-tight mb-4">
            The Aura Edit
          </h2>

          <p className="text-sm sm:text-base text-[#5C5955] font-light leading-relaxed">
            Essays on master craftsmanship, architectural tailoring, and timeless masculine aesthetics.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_STORIES.map((story) => (
            <article
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group bg-white border border-[#D8CCB8] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-[#B89A62]"
            >
              <div>
                {/* Large Editorial Photography */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#242321]">
                  <img
                    src={story.image}
                    alt={story.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#F5F1E8]/90 backdrop-blur-xs px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#3A2B20] font-semibold border border-[#D8CCB8]">
                    {story.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-[11px] text-[#5C5955] mb-3">
                    <span>{story.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B89A62]" />
                      {story.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#242321] font-medium leading-snug mb-3 group-hover:text-[#B89A62] transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C5955] font-light leading-relaxed mb-6">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-[#F5F1E8] flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#3A2B20] font-semibold group-hover:text-[#B89A62] transition-colors flex items-center gap-1.5">
                  Read Story
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-[10px] uppercase text-[#B89A62] tracking-wider">Aura Journal</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reading Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#242321]/80 backdrop-blur-sm"
            onClick={() => setSelectedStory(null)}
          />

          <div className="relative w-full max-w-3xl bg-white border border-[#D8CCB8] shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto p-6 sm:p-10">
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-6 right-6 p-2 text-[#5C5955] hover:text-[#242321] transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B89A62]">
                {selectedStory.category} • {selectedStory.readTime}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#242321] font-normal leading-tight mt-2 mb-4">
                {selectedStory.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5C5955] italic font-serif">
                {selectedStory.subtitle}
              </p>
            </div>

            {/* Feature Image */}
            <div className="aspect-[16/9] w-full overflow-hidden mb-8 border border-[#D8CCB8]">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-[#242321] leading-relaxed font-light">
              {selectedStory.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {selectedStory.quote && (
                <div className="my-8 p-6 bg-[#F5F1E8] border-l-2 border-[#B89A62]">
                  <Quote className="w-6 h-6 text-[#B89A62] mb-2" />
                  <p className="font-serif italic text-lg sm:text-xl text-[#3A2B20] leading-snug">
                    "{selectedStory.quote}"
                  </p>
                  {selectedStory.quoteAuthor && (
                    <p className="text-xs uppercase tracking-widest text-[#5C5955] mt-2">
                      — {selectedStory.quoteAuthor}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="mt-10 pt-6 border-t border-[#D8CCB8] flex items-center justify-between">
              <span className="text-xs text-[#5C5955]">Published by Aura Wear Atelier Editorial</span>
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="px-6 py-2.5 bg-[#3A2B20] text-[#F5F1E8] text-xs uppercase tracking-widest font-semibold hover:bg-[#242321] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
