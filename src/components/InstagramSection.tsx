import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
      tag: 'The Charcoal Melange',
      likes: '1.4k',
    },
    {
      img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop',
      tag: 'Bespoke Atelier Benchwork',
      likes: '2.1k',
    },
    {
      img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop',
      tag: 'Giza 120s Twill Precision',
      likes: '980',
    },
    {
      img: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=600&auto=format&fit=crop',
      tag: 'Tuscan Saddle Leather',
      likes: '1.8k',
    },
    {
      img: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=600&auto=format&fit=crop',
      tag: 'Double-Pleated Gurkha Drape',
      likes: '1.2k',
    },
    {
      img: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?q=80&w=600&auto=format&fit=crop',
      tag: 'Seven-Fold Como Silk',
      likes: '2.4k',
    },
  ];

  return (
    <section id="social" className="py-20 bg-[#FFFFFF] border-b border-[#D8CCB8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-2 text-[#B89A62]">
            <Instagram className="w-4 h-4" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
              @aurawear
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#242321] font-normal tracking-tight mb-2">
            Follow the Aura
          </h2>

          <p className="text-xs sm:text-sm text-[#5C5955] font-light">
            A visual journal of daily fittings, bespoke client commissions, and textile journeys.
          </p>
        </div>

        {/* 6-Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#242321] border border-[#D8CCB8]/60 cursor-pointer block"
            >
              <img
                src={post.img}
                alt={post.tag}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 brightness-95"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#3A2B20]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white">
                <Instagram className="w-5 h-5 text-[#B89A62] mb-1.5 transform -translate-y-2 group-hover:translate-y-0 transition-transform" />
                <span className="text-[10px] uppercase tracking-wider font-medium line-clamp-2">
                  {post.tag}
                </span>
                <span className="text-[9px] text-[#D8CCB8] mt-1">♥ {post.likes}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-8">
          <a
            id="instagram-follow-cta-btn"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#3A2B20] hover:text-[#B89A62] transition-colors border-b border-[#3A2B20] hover:border-[#B89A62] pb-1"
          >
            <span>Join Our Sartorial Community on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
