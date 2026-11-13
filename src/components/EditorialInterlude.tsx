import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

export const EditorialInterlude: React.FC = () => {
  const metrics = [
    { value: '100m', label: 'To ISMS Sankalp Gates' },
    { value: '4 Meals', label: 'Cooked Fresh Daily' },
    { value: '24×7', label: 'Guarded Security & CCTV' },
    { value: '100%', label: 'Power & Wi-Fi Uptime' },
  ];

  return (
    <section className="relative py-9 sm:py-12 lg:py-14 bg-[#102A1C] text-white overflow-hidden">
      {/* Background with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05, opacity: 0.2 }}
          whileInView={{ scale: 1, opacity: 0.35 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
          src="/assets/images/hero_ishanvi_facade_1793879538556.jpg"
          alt="ISHANVI Residence Atmosphere"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2016]/95 via-[#102A1C]/85 to-[#0E2016]/92" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none animate-float-ambient" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.65, ease: LUXURY_EASE }}
          className="space-y-3"
        >
          <div className="kicker-label justify-center text-[#DFB76C] text-on-photo">
            <Sparkles className="w-4 h-4 text-[#DFB76C] shrink-0" />
            <span>THE SANCTUARY PROMISE</span>
            <Sparkles className="w-4 h-4 text-[#DFB76C] shrink-0" />
          </div>

          <h2 className="heading-section text-[#FAF8F5] max-w-3xl mx-auto text-on-photo">
            "A thoughtful home where ambitious students rest deeply, eat wholesomely, and focus without interruption."
          </h2>

          <p className="text-lead text-[#E2E8F0] max-w-2xl mx-auto text-on-photo">
            Strategically located in Ambegaon Bk, Pune, ISHANVI eliminates the stress of daily chores and long commutes so tomorrow's leaders can thrive.
          </p>
        </motion.div>

        {/* 4 Staggered Verified Metrics */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 border-t border-white/15">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: LUXURY_EASE }}
              whileHover={{ y: -4 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#0D2116]/75 backdrop-blur-xs border border-white/15 hover:border-[#DFB76C]/60 transition-colors cursor-default space-y-1 shadow-lg"
            >
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#DFB76C] tabular-nums">
                {metric.value}
              </p>
              <p className="text-xs sm:text-[13px] text-[#E2E8F0] font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
