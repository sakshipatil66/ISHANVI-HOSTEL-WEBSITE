import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Utensils, ShieldCheck, Zap } from 'lucide-react';
import { ISHANVI_EXPERIENCE_PILLARS } from '../data/hostelData';

export const ExperiencePillarsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#102A1C]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#102A1C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#102A1C]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#102A1C]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#102A1C]" />;
    }
  };

  return (
    <section className="section-space bg-[#F4EFE6]/70 border-y border-[#EFEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -7, scale: 1.01 }}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-[#EFEAE1] shadow-sm hover:shadow-2xl hover:border-[#DFB76C]/80 transition-all flex flex-col justify-between space-y-5 group cursor-default relative overflow-hidden"
            >
              {/* Subtle gold corner highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#DFB76C]/15 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] group-hover:bg-[#102A1C] group-hover:border-[#102A1C] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-110">
                    <span className="text-[#102A1C] group-hover:text-[#DFB76C] transition-colors">
                      {getIcon(pillar.icon)}
                    </span>
                  </div>
                  <span className="font-serif text-3xl font-bold text-[#C5A059]/40 group-hover:text-[#8C6D2D] transition-colors tabular-nums">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="heading-card text-[#102A1C] group-hover:text-[#142E20] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-body-sm leading-relaxed text-[#4A5568]">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFEAE1]/80 flex items-center justify-between relative z-10">
                <span className="text-[11px] font-bold text-[#8C6D2D] tracking-wider uppercase">
                  Verified Resident Standard
                </span>
                <span className="w-2 h-2 rounded-full bg-[#DFB76C] opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
