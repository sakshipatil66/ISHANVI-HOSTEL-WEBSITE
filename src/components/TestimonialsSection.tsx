import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/hostelData';

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevReview = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS_LIST.length - 1));
  };

  const nextReview = () => {
    setStartIndex((prev) => (prev < TESTIMONIALS_LIST.length - 1 ? prev + 1 : 0));
  };

  const visibleReviews = [
    TESTIMONIALS_LIST[startIndex % TESTIMONIALS_LIST.length],
    TESTIMONIALS_LIST[(startIndex + 1) % TESTIMONIALS_LIST.length],
    TESTIMONIALS_LIST[(startIndex + 2) % TESTIMONIALS_LIST.length],
  ];

  return (
    <section id="testimonials" className="section-space bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="kicker-label mb-2">
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              <span>TESTIMONIALS & RESIDENT VOICES</span>
            </div>
            <h2 className="heading-section text-[#102A1C]">
              What Our Residents Say
            </h2>
            <p className="text-lead mt-1">
              Honest experiences shared by students of ISMS Sankalp & working professionals living at ISHANVI.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-[#EFEAE1] bg-white text-[#102A1C] hover:bg-[#102A1C] hover:text-[#DFB76C] hover:border-[#102A1C] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-[#EFEAE1] bg-white text-[#102A1C] hover:bg-[#102A1C] hover:text-[#DFB76C] hover:border-[#102A1C] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards with AnimatePresence & Micro-hover interactions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {visibleReviews.map((t, idx) => {
              const avatarUrl =
                t.author === 'Riya S.'
                  ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
                  : t.author === 'Aakiv K.'
                  ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
                  : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80';

              return (
                <motion.div
                  key={`${t.id}-${startIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EFEAE1] shadow-xs hover:shadow-xl hover:border-[#DFB76C]/60 transition-all flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-3">
                    <Quote className="w-7 h-7 text-[#DFB76C]/40 group-hover:text-[#DFB76C] transition-colors" />
                    <p className="text-body text-[#4A5568] leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFEAE1]/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={avatarUrl}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#EFEAE1] group-hover:border-[#DFB76C] shrink-0 transition-colors"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="heading-card text-sm text-[#102A1C]">{t.author}</h4>
                        <p className="text-caption text-[#5B6676]">{t.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#DFB76C] text-[#DFB76C]" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
