import React from 'react';
import { Quote, MessageSquare, Star } from 'lucide-react';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section 
      id="testimonials" 
      className="py-28 bg-[#080808] relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-2xl mb-14">
          <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-mono mb-4">
            05 / Endorsements & Peer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white tracking-tight">
            What Engineering Leaders Say
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Observations and reviews from engineering leaders, product executives, and architects I've collaborated with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between space-y-6 relative group shadow-xl"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-neutral-600 group-hover:text-neutral-300 transition-colors" />
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-serif italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-[#181818] border border-white/10 flex items-center justify-center text-white font-mono text-xs">
                  {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs font-serif italic text-white">{item.author}</h4>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
