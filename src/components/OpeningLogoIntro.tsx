import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOSTEL_INFO } from '../data/hostelData';
import { Sparkles, X } from 'lucide-react';

interface OpeningLogoIntroProps {
  onComplete: () => void;
}

export const OpeningLogoIntro: React.FC<OpeningLogoIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fast and professional duration: 1.5 seconds visible, then smooth fade-out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        setIsVisible(false);
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
          key="logo-intro-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF8F5] cursor-pointer overflow-hidden select-none"
          aria-label="ISHANVI Opening Intro"
        >
          {/* Subtle Luxury Radial Gold Aura */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,183,108,0.18)_0%,rgba(250,248,245,0.85)_45%,#FAF8F5_100%)] pointer-events-none" />

          {/* Decorative Hairline Borders */}
          <div className="absolute top-6 left-6 right-6 bottom-6 border border-[#DFB76C]/25 rounded-2xl pointer-events-none hidden sm:block" />

          {/* Skip Button in Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDismiss();
            }}
            className="absolute top-6 right-6 z-10 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#102A1C] border border-[#DFB76C]/40 text-xs font-semibold backdrop-blur-md shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            aria-label="Skip Intro"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Main Logo Card with Elegant Motion */}
          <div className="relative z-10 max-w-2xl w-full px-6 flex flex-col items-center text-center">
            {/* Subtle Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A1C]/5 border border-[#DFB76C]/40 text-[11px] font-bold text-[#A88238] uppercase tracking-[0.18em] mb-6 font-sans"
            >
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>Welcome to ISHANVI</span>
            </motion.div>

            {/* Official ISHANVI Logo with Precision Scale & Fade-in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-2"
            >
              <img
                src={HOSTEL_INFO.logoUrl}
                alt="ISHANVI Hostel & Accommodation Official Logo"
                className="w-full max-w-[340px] sm:max-w-[480px] md:max-w-[540px] h-auto object-contain drop-shadow-md select-none"
                fetchPriority="high"
                loading="eager"
              />

              {/* Shimmer Light Reflection Sweep across Logo */}
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '150%', opacity: [0, 0.35, 0] }}
                transition={{ duration: 1.1, delay: 0.35, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-20deg] pointer-events-none"
              />
            </motion.div>

            {/* Decorative Gold Divider Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="w-48 sm:w-64 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent my-4"
            />

            {/* Subtitle / Philosophy Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="font-sans text-xs sm:text-sm font-semibold text-[#102A1C] tracking-[0.14em] uppercase"
            >
              Safe Stay &nbsp;·&nbsp; Better Living &nbsp;·&nbsp; Brighter Tomorrow
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[11px] text-[#5B6676] mt-2 font-sans"
            >
              Near ISMS Sankalp Business School · Ambegaon Bk, Pune
            </motion.p>
          </div>

          {/* Bottom Fast Progress Indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#EFEAE1]">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-[#DFB76C] via-[#C5A059] to-[#DFB76C]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
