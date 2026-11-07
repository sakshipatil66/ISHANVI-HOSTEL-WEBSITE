import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, BookOpen, Coffee, Moon, CheckCircle2, ArrowRight } from 'lucide-react';
import { DAILY_LIFESTYLE_TIMELINE } from '../data/hostelData';

export const LifestyleStorySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sun className="w-5 h-5 text-[#C5A059]" />;
      case 1:
        return <BookOpen className="w-5 h-5 text-[#C5A059]" />;
      case 2:
        return <Coffee className="w-5 h-5 text-[#C5A059]" />;
      case 3:
        return <Moon className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Sun className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  const currentItem = DAILY_LIFESTYLE_TIMELINE[activeStep];

  return (
    <section className="section-space bg-[#FDFBF7]">
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
            <span>EVERYDAY LIVING AT ISHANVI</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            A Day in the Life: Balanced Rhythm for Ambitious Minds
          </h2>
          <p className="text-lead mt-3">
            Experience how our curated daily routine keeps you nourished, productive, and well-rested from morning to night.
          </p>
        </motion.div>

        {/* Interactive Story Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Timeline Steps */}
          <div className="lg:col-span-5 space-y-3">
            {DAILY_LIFESTYLE_TIMELINE.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? 'bg-white border-[#102A1C] shadow-lg ring-1 ring-[#102A1C]/15 scale-[1.01]'
                      : 'bg-[#FAF8F5] border-[#EFEAE1] hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-[#102A1C] text-[#DFB76C]' : 'bg-[#F4EFE6] text-[#4A5568]'
                    }`}
                  >
                    {getStepIcon(idx)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#A88238] uppercase tracking-wider tabular-nums">
                        {step.time}
                      </span>
                      <span className="text-[11px] font-bold text-[#102A1C] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E2D9C8]">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="heading-card text-[#102A1C] mt-1">
                      {step.title}
                    </h3>
                    <p className="text-body-sm text-[#4B5563] mt-0.5 line-clamp-1">{step.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Stage of the Moment */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2D9C8] shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.time}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#FAF8F5]">
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#102A1C]/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1 rounded-full border border-[#DFB76C]/30">
                      {currentItem.time} · {currentItem.tag}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="heading-card text-[#102A1C] text-xl sm:text-2xl">
                      {currentItem.title}
                    </h3>
                    <p className="text-body-sm font-bold text-[#A88238]">{currentItem.subtitle}</p>
                    <p className="text-lead text-[#2D3748] pt-1 font-normal">
                      {currentItem.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFEAE1] flex items-center justify-between text-xs text-[#4A5568]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A88238]" />
                      <span className="font-medium text-[#2D3748]">Zero mundane distractions—all domestic chores managed</span>
                    </div>
                    <span className="font-bold text-[#102A1C] tabular-nums">
                      0{activeStep + 1} / 0{DAILY_LIFESTYLE_TIMELINE.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
