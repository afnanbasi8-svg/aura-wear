import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="py-20 bg-[#F5F1E8] border-b border-[#D8CCB8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B89A62]/40 bg-white text-[#B89A62] text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Private Dispatch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#242321] font-normal tracking-tight mb-4">
          Stay in the Know
        </h2>

        <p className="text-sm sm:text-base text-[#5C5955] font-light max-w-xl mx-auto mb-8 leading-relaxed">
          Receive new collection previews, styling inspiration, and exclusive offers from Aura Wear.
        </p>

        {subscribed ? (
          <div className="p-6 bg-white border border-[#B89A62] max-w-md mx-auto shadow-md">
            <div className="w-10 h-10 rounded-full bg-[#B89A62] text-white flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl text-[#242321] mb-1">Welcome to the Inner Circle</h4>
            <p className="text-xs text-[#5C5955]">
              You will receive private collection previews and invitations to trunk shows directly to your inbox.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch justify-center max-w-md mx-auto gap-2"
          >
            <input
              id="newsletter-email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3.5 bg-white border border-[#D8CCB8] text-xs text-[#242321] placeholder-[#5C5955]/70 focus:outline-none focus:border-[#B89A62] transition-colors"
            />
            <button
              id="newsletter-subscribe-btn"
              type="submit"
              className="px-8 py-3.5 bg-[#3A2B20] hover:bg-[#242321] text-[#F5F1E8] text-xs uppercase tracking-[0.2em] font-semibold transition-colors cursor-pointer border border-[#3A2B20]"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#5C5955]/70 mt-4 tracking-wide">
          We honor your privacy. Unsubscribe anytime with one click.
        </p>
      </div>
    </section>
  );
};
