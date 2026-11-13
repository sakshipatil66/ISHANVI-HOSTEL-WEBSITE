import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Sprout, ArrowRight } from 'lucide-react';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const pillars = [
    { Icon: Sprout, title: 'Comfortable Living' },
    { Icon: Heart, title: 'Safe & Supportive' },
    { Icon: Sparkles, title: 'Community Growth' },
  ];

  return (
    <section id="about" className="section-space bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative subtle floating ambient gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float-ambient" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#102A1C]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Room Image with Arched Framing and Smooth Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.7, ease: LUXURY_EASE }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-tl-3xl rounded-tr-[5.5rem] rounded-bl-3xl rounded-br-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group bg-[#FAF8F5]">
              <img
                src="/assets/ref/about_room.jpg"
                alt="Comfortable living room at ISHANVI"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Ambient golden halo */}
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#C5A059]/20 rounded-full blur-3xl pointer-events-none animate-float-ambient -z-10" />
          </motion.div>

          {/* Right Content with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.65, delay: 0.08, ease: LUXURY_EASE }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="kicker-label">
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              <span>ABOUT ISHANVI</span>
            </div>

            <h2 className="heading-section text-[#102A1C]">
              More Than Just <br className="hidden sm:block" />
              A Stay – A Better Tomorrow
            </h2>

            <p className="text-lead">
              At Ishanvi Hostel & Accommodation, we provide a safe, comfortable and homely environment for students and working professionals. Our focus is on creating a supportive community where you can live, learn and grow with confidence.
            </p>

            {/* 3 Pillars with staggered entrance & smooth icon hover */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-4 pt-2">
              {pillars.map(({ Icon, title }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.48, delay: 0.14 + idx * 0.08, ease: LUXURY_EASE }}
                  whileHover={{ y: -4 }}
                  className="flex xs:flex-col items-center xs:items-center sm:items-start gap-3 xs:gap-2 text-left xs:text-center sm:text-left p-3 xs:p-2.5 sm:p-3 rounded-2xl bg-white/80 border border-[#EFEAE1] hover:border-[#DFB76C] hover:shadow-md transition-all cursor-default group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] shrink-0 shadow-2xs transition-colors duration-300">
                    <Icon className="w-5 h-5 stroke-[1.75] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="heading-card text-xs sm:text-sm text-[#102A1C] leading-snug">
                    {title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Action button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onLearnMore}
                className="btn-primary group"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

