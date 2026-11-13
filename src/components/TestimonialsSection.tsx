import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
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
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-[#EFEAE1] bg-white text-[#102A1C] hover:bg-[#102A1C] hover:text-[#DFB76C] hover:border-[#102A1C] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-[#EFEAE1] bg-white text-[#102A1C] hover:bg-[#102A1C] hover:text-[#DFB76C] hover:border-[#102A1C] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* 3 Review Cards with AnimatePresence & Micro-hover interactions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((t, idx) => {
              const initials = t.author
                .split(' ')
                .map((n) => n[0])
                .join('');

              return (
                <motion.div
                  key={`${t.id}-${startIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.38, delay: idx * 0.06, ease: LUXURY_EASE }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EFEAE1] shadow-xs hover:shadow-xl hover:border-[#DFB76C]/60 transition-all flex flex-col justify-between space-y-4 sm:space-y-5 group"
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-[#DFB76C]/40 group-hover:text-[#DFB76C] transition-colors" />
                    <p className="text-body text-[#4A5568] leading-relaxed italic md:min-h-[84px]">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-5 border-t border-[#EFEAE1]/60 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#102A1C] text-[#DFB76C] font-serif font-bold text-sm flex items-center justify-center border-2 border-[#DFB76C]/40 group-hover:bg-[#1B3B2B] shrink-0 transition-colors shadow-xs">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="heading-card text-sm text-[#102A1C]">{t.author}</h3>
                        <p className="text-caption text-[#5B6676]">{t.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 shrink-0">
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
