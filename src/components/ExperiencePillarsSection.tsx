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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="kicker-label justify-center mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>THE ISHANVI EXPERIENCE</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Designed for Scholars & Professionals: What Sets Us Apart
          </h2>
          <p className="text-lead mt-3">
            At ISHANVI, every detail—from noise damping and meal schedules to security—is intentionally curated so you can focus entirely on achieving your goals.
          </p>
        </motion.div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ISHANVI_EXPERIENCE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-7 border border-[#EFEAE1] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#C5A059]/50 group-hover:text-[#C5A059] transition-colors tabular-nums">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="heading-card text-[#102A1C]">
                  {pillar.title}
                </h3>

                <p className="text-body-sm">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#EFEAE1]/60">
                <span className="text-[11px] font-semibold text-[#C5A059] tracking-wider uppercase">
                  Verified Resident Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
