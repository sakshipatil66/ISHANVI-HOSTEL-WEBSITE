import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, HeartHandshake, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_ISHANVI } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface WhyChooseSectionProps {
  onOpenEnquiry: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="section-space bg-[#F4EFE6]/60 border-y border-[#EFEAE1] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#DFB76C]/12 rounded-full blur-3xl pointer-events-none animate-float-ambient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7 sm:space-y-9">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="text-center max-w-3xl mx-auto space-y-2.5"
        >
          <div className="kicker-label justify-center">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>WHY CHOOSE ISHANVI</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Where Every Detail is Built to Support Your Success.
          </h2>
          <p className="text-lead mx-auto">
            Finding the right hostel can make or break your academic year. We eliminate mundane chores, chaotic dining, and safety anxieties so you can devote 100% of your energy to your studies and career.
          </p>
        </motion.div>

        {/* 6 Benefits in Balanced 3-Column Grid (3 desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {WHY_CHOOSE_ISHANVI.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.48, delay: idx * 0.05, ease: LUXURY_EASE }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-5 border border-[#EFEAE1] shadow-xs hover:shadow-xl hover:border-[#DFB76C] transition-all duration-300 space-y-2.5 group cursor-default text-center flex flex-col items-center"
            >
              <div className="w-9 h-9 rounded-full bg-[#FAF6ED] text-[#C5A059] flex items-center justify-center shrink-0 group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] transition-all duration-300 shadow-2xs group-hover:scale-110">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="heading-card text-sm sm:text-base text-[#102A1C] transition-colors">
                {item.title}
              </h3>
              <p className="text-body-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compact Parent Transparency & Visit Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.55, delay: 0.1, ease: LUXURY_EASE }}
          className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EFEAE1] shadow-sm hover:border-[#DFB76C]/80 transition-all flex flex-col md:flex-row items-center justify-between gap-4 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#102A1C] text-[#DFB76C] flex items-center justify-center shrink-0 shadow-sm">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="min-w-0 space-y-0.5 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h3 className="heading-card text-sm sm:text-base text-[#102A1C]">
                  Direct Parent Transparency
                </h3>
                <span className="text-[11px] font-bold text-[#8C6D2D] uppercase tracking-wider bg-[#FAF6ED] px-2 py-0.5 rounded-full border border-[#DFB76C]/30 whitespace-nowrap">
                  24/7 Verified
                </span>
              </div>
              <p className="text-body-sm">
                Parents receive direct 24x7 phone access to the resident warden and verified student attendance tracking.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenEnquiry}
            className="btn-primary group cursor-pointer shrink-0 min-h-[44px]"
          >
            <span>Schedule a Free Campus Visit</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
