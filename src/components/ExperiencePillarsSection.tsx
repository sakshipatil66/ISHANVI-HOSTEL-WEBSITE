import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Utensils, ShieldCheck, Zap } from 'lucide-react';
import { ISHANVI_EXPERIENCE_PILLARS } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

export const ExperiencePillarsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <section className="section-space bg-[#F4EFE6]/70 border-y border-[#EFEAE1] relative overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none animate-float-ambient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="kicker-label justify-center mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>THE ISHANVI EXPERIENCE</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Designed for Scholars &amp; Professionals: What Sets Us Apart
          </h2>
          <p className="text-lead mt-3">
            At ISHANVI, every detail—from noise damping and meal schedules to security—is intentionally curated so you can focus entirely on achieving your goals.
          </p>
        </motion.div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {ISHANVI_EXPERIENCE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.52, delay: idx * 0.08, ease: LUXURY_EASE }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-[#EFEAE1] shadow-sm hover:shadow-2xl hover:border-[#DFB76C]/80 transition-all duration-300 flex flex-col justify-between space-y-5 group cursor-default relative overflow-hidden"
            >
              {/* Subtle gold corner highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#DFB76C]/15 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4 relative z-10 text-center">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-serif text-2xl font-bold text-[#C5A059]/60 group-hover:text-[#8C6D2D] transition-colors tabular-nums">
                    {pillar.number}
                  </span>
                  <div className="w-13 h-13 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] group-hover:bg-[#102A1C] group-hover:border-[#102A1C] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105">
                    <span className="text-[#102A1C] group-hover:text-[#DFB76C] transition-colors">
                      {getIcon(pillar.icon)}
                    </span>
                  </div>
                </div>

                <h3 className="heading-card text-[#102A1C] group-hover:text-[#142E20] transition-colors text-center">
                  {pillar.title}
                </h3>

                <p className="text-body-sm leading-relaxed text-[#4A5568] text-center">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFEAE1]/80 flex items-center justify-center gap-2 relative z-10 text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFB76C] opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-[11px] font-bold text-[#8C6D2D] tracking-wider uppercase">
                  Verified Resident Standard
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFB76C] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
