import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, HeartHandshake, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_ISHANVI } from '../data/hostelData';

interface WhyChooseSectionProps {
  onOpenEnquiry: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="section-space bg-[#F4EFE6]/60 border-y border-[#EFEAE1] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>WHY CHOOSE ISHANVI</span>
              </div>
              <h2 className="heading-section text-[#102A1C]">
                Where Every Detail is Built to Support Your Success.
              </h2>
              <p className="text-lead">
                Finding the right hostel can make or break your academic year. We eliminate mundane chores, chaotic dining, and safety anxieties so you can devote 100% of your energy to your studies and career.
              </p>
            </motion.div>

            {/* Parent Hotline Card with Hover Lift */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="p-5 rounded-2xl bg-white border border-[#EFEAE1] shadow-sm hover:shadow-md hover:border-[#DFB76C]/80 transition-all flex items-start gap-4 cursor-pointer relative overflow-hidden"
            >
              <div className="w-11 h-11 rounded-xl bg-[#102A1C] text-[#DFB76C] flex items-center justify-center shrink-0 shadow-md">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="heading-card text-base text-[#102A1C]">
                    Direct Parent Transparency
                  </h4>
                  <span className="text-[11px] font-bold text-[#8C6D2D] uppercase tracking-wider bg-[#FAF6ED] px-2 py-0.5 rounded-full border border-[#DFB76C]/30">
                    24/7 Verified
                  </span>
                </div>
                <p className="text-body-sm mt-0.5">
                  Parents receive direct 24x7 phone access to the resident warden and verified student attendance tracking.
                </p>
              </div>
            </motion.div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenEnquiry}
                className="btn-primary group cursor-pointer"
              >
                <span>Schedule a Free Campus Visit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: 6 Distinctive Benefits Grid with Stagger & Glow */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_ISHANVI.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EFEAE1] shadow-xs hover:shadow-xl hover:border-[#DFB76C] transition-all space-y-2.5 group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#FAF6ED] text-[#C5A059] flex items-center justify-center shrink-0 group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] transition-all duration-300 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h3 className="heading-card text-base text-[#102A1C] group-hover:text-[#102A1C] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-body-sm pl-9">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
