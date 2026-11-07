import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOSTEL_INFO } from '../data/hostelData';
import { Sparkles, ArrowRight, ShieldCheck, X } from 'lucide-react';

interface OpeningLogoIntroProps {
  onComplete: () => void;
}

export const OpeningLogoIntro: React.FC<OpeningLogoIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2.6 seconds total cinematic duration, then smooth crossfade to hero
    const timer = setTimeout(() => {
      handleDismiss();
    }, 2600);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        onComplete();
      }}
    >
      {isVisible && (
        <motion.div
          key="cinematic-logo-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1A12] cursor-pointer overflow-hidden select-none px-4"
          aria-label="ISHANVI Opening Intro"
        >
          {/* Deep Forest-Green Ambient Gradient Background */}
          <div className="absolute inset-0 bg-radial-[at_center] from-[#163826] via-[#0E2419] to-[#07130D] pointer-events-none" />

          {/* Golden Center Spotlight Aura */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.15, 1], opacity: [0, 0.45, 0.35] }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(223,183,108,0.35)_0%,rgba(197,160,89,0.12)_45%,transparent_70%)] blur-2xl pointer-events-none"
          />

          {/* Floating Subtle Gold Stardust Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(16)].map((_, i) => (
              <motion.span
                key={i}
                initial={{
                  x: `${(i * 19) % 100}vw`,
                  y: `${((i * 23) % 80) + 10}vh`,
                  opacity: 0,
                  scale: 0.4,
                }}
                animate={{
                  y: [null, `${((i * 23) % 80) - 15}vh`],
                  opacity: [0, 0.7, 0],
                  scale: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.5 + (i % 3) * 0.4,
                  repeat: Infinity,
                  delay: (i * 0.15) % 1.2,
                  ease: 'easeInOut',
                }}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#DFB76C] shadow-[0_0_8px_#DFB76C]"
              />
            ))}
          </div>

          {/* Luxury Corner Brackets & Hairline Outer Frame */}
          <div className="absolute inset-4 sm:inset-8 border border-[#DFB76C]/25 rounded-3xl pointer-events-none hidden sm:block">
            {/* Top Left Bracket */}
            <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-[#DFB76C] rounded-tl-3xl" />
            {/* Top Right Bracket */}
            <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-[#DFB76C] rounded-tr-3xl" />
            {/* Bottom Left Bracket */}
            <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-[#DFB76C] rounded-bl-3xl" />
            {/* Bottom Right Bracket */}
            <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-[#DFB76C] rounded-br-3xl" />
          </div>

          {/* Skip Button in Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDismiss();
            }}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 z-20 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#DFB76C] border border-[#DFB76C]/40 text-xs font-semibold backdrop-blur-md shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
            aria-label="Skip Intro"
          >
            <span>Enter Residence</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Main Animated Presentation Card */}
          <div className="relative z-10 max-w-2xl w-full px-4 sm:px-8 flex flex-col items-center text-center">
            {/* Top Luxury Pill */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFB76C]/10 border border-[#DFB76C]/40 text-xs font-bold text-[#DFB76C] uppercase tracking-[0.22em] mb-6 shadow-lg backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFB76C] animate-pulse" />
              <span>Welcome to ISHANVI</span>
            </motion.div>

            {/* Official ISHANVI Logo Container with Soft Glow & Scale Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(223,183,108,0.25)] border border-[#DFB76C]/50 w-full max-w-md sm:max-w-lg flex items-center justify-center overflow-hidden"
            >
              {/* Authentic ISHANVI Logo */}
              <img
                src={HOSTEL_INFO.logoUrl}
                alt="ISHANVI Hostel & Accommodation Official Logo"
                className="w-full max-w-[340px] sm:max-w-[440px] h-auto object-contain select-none"
                fetchPriority="high"
                loading="eager"
              />

              {/* Shimmer Light Reflection Sweep Across Logo */}
              <motion.div
                initial={{ x: '-120%', opacity: 0 }}
                animate={{ x: '220%', opacity: [0, 0.6, 0] }}
                transition={{ duration: 1.4, delay: 0.45, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-22deg] pointer-events-none"
              />
            </motion.div>

            {/* Expanding Gold Divider Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="w-48 sm:w-72 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent my-5"
            />

            {/* Philosophy Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="font-serif text-sm sm:text-base font-medium text-[#FAF8F5] tracking-[0.16em] uppercase"
            >
              Safe Stay &nbsp;·&nbsp; Better Living &nbsp;·&nbsp; Brighter Tomorrow
            </motion.p>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xs text-[#DFB76C]/85 mt-2 font-sans tracking-wider"
            >
              Near ISMS Sankalp Business School · Ambegaon Bk, Pune
            </motion.p>
          </div>

          {/* Bottom Precision Loading Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.6, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-[#DFB76C] via-[#F4E3B8] to-[#DFB76C] shadow-[0_0_12px_#DFB76C]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
