import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, HeartHandshake, Sparkles, Building, Clock, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_ISHANVI, HOSTEL_INFO } from '../data/hostelData';

interface WhyChooseSectionProps {
  onOpenEnquiry: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="section-space bg-[#F4EFE6]/60 border-y border-[#EFEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Parent Hotline Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#EFEAE1] shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#102A1C] text-[#DFB76C] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="heading-card text-base text-[#102A1C]">
                  Direct Parent Transparency
                </h4>
                <p className="text-body-sm mt-0.5">
                  Parents receive direct 24x7 phone access to the resident warden and verified student attendance tracking.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="btn-primary"
              >
                <span>Schedule a Free Campus Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 6 Distinctive Benefits Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_CHOOSE_ISHANVI.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EFEAE1] shadow-xs hover:shadow-lg transition-all space-y-2 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#F4EFE6] text-[#C5A059] flex items-center justify-center shrink-0 group-hover:bg-[#102A1C] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="heading-card text-base text-[#102A1C]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-body-sm pl-8">
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
