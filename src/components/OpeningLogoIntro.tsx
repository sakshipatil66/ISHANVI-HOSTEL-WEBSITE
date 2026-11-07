import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { HOSTEL_INFO } from '../data/hostelData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface OpeningLogoIntroProps {
  onComplete: () => void;
}

export const OpeningLogoIntro: React.FC<OpeningLogoIntroProps> = ({ onComplete }) => {
  // Phase: 'intro' (logo & tagline presentation) -> 'sliding_open' (dual window panels slide open to sides)
  const [phase, setPhase] = useState<'intro' | 'sliding_open'>('intro');

  useEffect(() => {
    // 2.2 seconds total intro presentation, then directly slide windows open
    const timer = setTimeout(() => {
      triggerWindowOpen();
    }, 2200);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        triggerWindowOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [phase]);

  const triggerWindowOpen = () => {
    if (phase === 'sliding_open') return;
    setPhase('sliding_open');
    // Allow the window panels to slide completely open (850ms) before completing and unmounting
    setTimeout(() => {
      onComplete();
    }, 850);
  };

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden select-none pointer-events-auto"
      onClick={triggerWindowOpen}
      aria-label="ISHANVI Opening Intro with Sliding Windows"
    >
      {/* 
        ====================================================================
        DUAL ARCHITECTURAL SLIDING WINDOW PANELS
        Left window slides left (-100%), right window slides right (+100%),
        unveiling the live website behind them!
        ====================================================================
      */}

      {/* LEFT SLIDING WINDOW PANEL */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: phase === 'sliding_open' ? '-100%' : '0%' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#0B1A12] border-r-2 border-[#DFB76C] z-30 shadow-[10px_0_40px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Background gradient on left panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130D] via-[#0E2419] to-[#143322]" />

        {/* Architectural Window Mullion Lines */}
        <div className="absolute inset-4 sm:inset-8 border border-[#DFB76C]/25 rounded-l-3xl pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#DFB76C]/60 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#DFB76C]/60 to-transparent" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#DFB76C]/15" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#DFB76C]/15" />
        </div>

        {/* Left Window Golden Handle / Sash Fitting */}
        <div className="absolute top-1/2 right-2 sm:right-3.5 -translate-y-1/2 w-3 sm:w-4 h-24 sm:h-32 rounded-l-full bg-gradient-to-l from-[#DFB76C] via-[#C5A059] to-[#8C6D2D] shadow-[-4px_0_12px_rgba(223,183,108,0.4)] flex items-center justify-center">
          <div className="w-1 h-12 bg-[#102A1C]/50 rounded-full" />
        </div>
      </motion.div>

      {/* RIGHT SLIDING WINDOW PANEL */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: phase === 'sliding_open' ? '100%' : '0%' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#0B1A12] border-l-2 border-[#DFB76C] z-30 shadow-[-10px_0_40px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Background gradient on right panel */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#07130D] via-[#0E2419] to-[#143322]" />

        {/* Architectural Window Mullion Lines */}
        <div className="absolute inset-4 sm:inset-8 border border-[#DFB76C]/25 rounded-r-3xl pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DFB76C]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DFB76C]/60 to-transparent" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#DFB76C]/15" />
          <div className="absolute top-0 bottom-0 right-1/2 w-[1px] bg-[#DFB76C]/15" />
        </div>

        {/* Right Window Golden Handle / Sash Fitting */}
        <div className="absolute top-1/2 left-2 sm:left-3.5 -translate-y-1/2 w-3 sm:w-4 h-24 sm:h-32 rounded-r-full bg-gradient-to-r from-[#DFB76C] via-[#C5A059] to-[#8C6D2D] shadow-[4px_0_12px_rgba(223,183,108,0.4)] flex items-center justify-center">
          <div className="w-1 h-12 bg-[#102A1C]/50 rounded-full" />
        </div>
      </motion.div>

      {/* 
        ====================================================================
        CENTER LOGO PRESENTATION & FLOATING STARDUST
        Fades out gracefully as the windows slide apart
        ====================================================================
      */}
      <motion.div
        animate={{
          opacity: phase === 'sliding_open' ? 0 : 1,
          scale: phase === 'sliding_open' ? 1.08 : 1,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none px-4"
      >
        {/* Golden Center Spotlight Aura */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.15, 1], opacity: [0, 0.5, 0.4] }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(223,183,108,0.4)_0%,rgba(197,160,89,0.15)_45%,transparent_70%)] blur-2xl pointer-events-none"
        />

        {/* Floating Subtle Gold Stardust Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(18)].map((_, i) => (
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
                opacity: [0, 0.75, 0],
                scale: [0.4, 1.1, 0.4],
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

        {/* Main Animated Presentation Card */}
        <div className="relative z-50 max-w-2xl w-full px-4 sm:px-8 flex flex-col items-center text-center">
          {/* Top Luxury Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFB76C]/10 border border-[#DFB76C]/40 text-xs font-bold text-[#DFB76C] uppercase tracking-[0.22em] mb-5 shadow-lg backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C] animate-pulse" />
            <span>Welcome to ISHANVI</span>
          </motion.div>

          {/* Official ISHANVI Logo Container with Soft Glow & Scale Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(223,183,108,0.3)] border border-[#DFB76C]/60 w-full max-w-md sm:max-w-lg flex items-center justify-center overflow-hidden"
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
              animate={{ x: '220%', opacity: [0, 0.7, 0] }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-white/85 to-transparent skew-x-[-22deg] pointer-events-none"
            />
          </motion.div>

          {/* Expanding Gold Divider Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="w-48 sm:w-72 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent my-4"
          />

          {/* Philosophy Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-serif text-sm sm:text-base font-medium text-[#FAF8F5] tracking-[0.16em] uppercase"
          >
            Safe Stay &nbsp;·&nbsp; Better Living &nbsp;·&nbsp; Brighter Tomorrow
          </motion.p>

          {/* Sub-label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs text-[#DFB76C]/90 mt-1.5 font-sans tracking-wider"
          >
            Near ISMS Sankalp Business School · Ambegaon Bk, Pune
          </motion.p>
        </div>

        {/* Bottom Precision Loading Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-50">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-[#DFB76C] via-[#F4E3B8] to-[#DFB76C] shadow-[0_0_12px_#DFB76C]"
          />
        </div>
      </motion.div>
    </div>
  );
};
