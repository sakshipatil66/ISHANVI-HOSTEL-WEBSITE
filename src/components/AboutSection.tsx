import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Sprout, ArrowRight, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="section-space bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative leaf / botanical subtle motifs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#102A1C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Room Image with Arched Framing and Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-tl-3xl rounded-tr-[5.5rem] rounded-bl-3xl rounded-br-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group bg-[#FAF8F5]">
              <img
                src="/assets/ref/about_room.jpg"
                alt="Comfortable living room at ISHANVI"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Pulsing ambient glow */}
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#C5A059]/25 rounded-full blur-3xl pointer-events-none animate-aura-slow -z-10" />
          </motion.div>

          {/* Right Content with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
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

            {/* 3 Pillars with gold outline icons & interactive hover animations */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <motion.div
                whileHover={{ y: -4 }}
                className="space-y-2 text-center sm:text-left p-2.5 rounded-2xl bg-white/70 border border-[#EFEAE1] hover:border-[#DFB76C] hover:shadow-md transition-all cursor-default"
              >
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0 shadow-2xs">
                  <Sprout className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-snug">
                  Comfortable Living
                </h3>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="space-y-2 text-center sm:text-left p-2.5 rounded-2xl bg-white/70 border border-[#EFEAE1] hover:border-[#DFB76C] hover:shadow-md transition-all cursor-default"
              >
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0 shadow-2xs">
                  <Heart className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-snug">
                  Safe & Supportive
                </h3>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="space-y-2 text-center sm:text-left p-2.5 rounded-2xl bg-white/70 border border-[#EFEAE1] hover:border-[#DFB76C] hover:shadow-md transition-all cursor-default"
              >
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0 shadow-2xs">
                  <Sparkles className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-snug">
                  Community Growth
                </h3>
              </motion.div>
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="btn-primary group"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

