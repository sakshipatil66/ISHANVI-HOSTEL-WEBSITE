import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, BookOpen, Coffee, Moon, CheckCircle2, Sparkles } from 'lucide-react';
import { DAILY_LIFESTYLE_TIMELINE } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

export const LifestyleStorySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sun className="w-5 h-5 text-[#DFB76C]" />;
      case 1:
        return <BookOpen className="w-5 h-5 text-[#DFB76C]" />;
      case 2:
        return <Coffee className="w-5 h-5 text-[#DFB76C]" />;
      case 3:
        return <Moon className="w-5 h-5 text-[#DFB76C]" />;
      default:
        return <Sun className="w-5 h-5 text-[#DFB76C]" />;
    }
  };

  const currentItem = DAILY_LIFESTYLE_TIMELINE[activeStep];

  return (
    <section className="section-space bg-[#FDFBF7] relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none animate-float-ambient" />

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column: Interactive Timeline Steps */}
          <div className="lg:col-span-5 space-y-3">
            {DAILY_LIFESTYLE_TIMELINE.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.45, delay: idx * 0.07, ease: LUXURY_EASE }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 sm:gap-4 relative overflow-hidden ${
                    isActive
                      ? 'bg-white border-[#102A1C] shadow-lg ring-1 ring-[#102A1C]/15 sm:scale-[1.01]'
                      : 'bg-[#FAF8F5] border-[#EFEAE1] hover:bg-white hover:border-[#DFB76C]/60'
                  }`}
                >
                  {/* Active Indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTimelineBar"
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#102A1C]"
                    />
                  )}

                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-[#102A1C] text-[#DFB76C] shadow-md' : 'bg-[#F4EFE6] text-[#4A5568]'
                    }`}
                  >
                    {getStepIcon(idx)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#DFB76C] ring-4 ring-[#DFB76C]/20 shrink-0" />
                        )}
                        <span className="text-xs font-bold text-[#A88238] uppercase tracking-wider tabular-nums">
                          {step.time}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#102A1C] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E2D9C8] whitespace-nowrap">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="heading-card text-sm sm:text-base text-[#102A1C] mt-1">
                      {step.title}
                    </h3>
                    <p className="text-body-sm text-[#4B5563] mt-0.5 line-clamp-2">{step.subtitle}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Visual Stage of the Moment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#E2D9C8] shadow-2xl overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.time}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.38, ease: LUXURY_EASE }}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#FAF8F5] group">
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#102A1C]/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border border-[#DFB76C]/30 flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-[#DFB76C] shrink-0" />
                      <span>{currentItem.time} · {currentItem.tag}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="heading-card text-[#102A1C] text-lg sm:text-2xl">
                      {currentItem.title}
                    </h3>
                    <p className="text-body-sm font-bold text-[#A88238]">{currentItem.subtitle}</p>
                    <p className="text-lead text-[#2D3748] pt-1 font-normal">
                      {currentItem.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFEAE1] flex flex-wrap items-center justify-between gap-2 text-xs text-[#4A5568]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A88238] shrink-0" />
                      <span className="font-medium text-[#2D3748]">Zero mundane distractions—all domestic chores managed</span>
                    </div>
                    <span className="font-bold text-[#102A1C] tabular-nums bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#EFEAE1] shrink-0">
                      0{activeStep + 1} / 0{DAILY_LIFESTYLE_TIMELINE.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
