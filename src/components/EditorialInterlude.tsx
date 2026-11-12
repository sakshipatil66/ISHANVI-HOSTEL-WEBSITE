import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Shield, Utensils, Zap } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

export const EditorialInterlude: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#102A1C] text-white overflow-hidden">
      {/* Background with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_ishanvi_facade_1793879538556.jpg"
          alt="ISHANVI Residence Atmosphere"
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2016] via-[#102A1C]/80 to-[#0E2016]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="kicker-label text-[#DFB76C]">
            <Sparkles className="w-4 h-4 text-[#DFB76C]" />
            <span>THE SANCTUARY PROMISE</span>
            <Sparkles className="w-4 h-4 text-[#DFB76C]" />
          </div>

          <h2 className="heading-section !text-[#FAF8F5] max-w-3xl mx-auto">
            "A thoughtful home where ambitious students rest deeply, eat wholesomely, and focus without interruption."
          </h2>

          <p className="text-lead !text-[#E2E8F0] max-w-2xl mx-auto">
            Strategically located in Ambegaon Bk, Pune, ISHANVI eliminates the stress of daily chores and long commutes so tomorrow's leaders can thrive.
          </p>
        </motion.div>

        {/* 4 Animated Verified Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-white/15"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.03 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DFB76C]/60 hover:bg-white/10 transition-all cursor-default space-y-1 shadow-lg"
          >
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#DFB76C] tabular-nums">100m</p>
            <p className="text-xs sm:text-[13px] text-[#E2E8F0] font-medium">To ISMS Sankalp Gates</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.03 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DFB76C]/60 hover:bg-white/10 transition-all cursor-default space-y-1 shadow-lg"
          >
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#DFB76C] tabular-nums">4 Meals</p>
            <p className="text-xs sm:text-[13px] text-[#E2E8F0] font-medium">Cooked Fresh Daily</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.03 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DFB76C]/60 hover:bg-white/10 transition-all cursor-default space-y-1 shadow-lg"
          >
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#DFB76C] tabular-nums">24×7</p>
            <p className="text-xs sm:text-[13px] text-[#E2E8F0] font-medium">Guarded Security &amp; CCTV</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.03 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DFB76C]/60 hover:bg-white/10 transition-all cursor-default space-y-1 shadow-lg"
          >
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#DFB76C] tabular-nums">100%</p>
            <p className="text-xs sm:text-[13px] text-[#E2E8F0] font-medium">Power &amp; Wi-Fi Uptime</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
