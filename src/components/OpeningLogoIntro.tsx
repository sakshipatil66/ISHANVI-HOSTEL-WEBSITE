import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOSTEL_INFO } from '../data/hostelData';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface OpeningLogoIntroProps {
  onComplete: () => void;
}

export const OpeningLogoIntro: React.FC<OpeningLogoIntroProps> = ({ onComplete }) => {
  // Phase: 'intro' (logo & tagline presentation) -> 'revealing' (expanding circular mask opening)
  const [phase, setPhase] = useState<'intro' | 'revealing'>('intro');
  const [progress, setProgress] = useState<number>(0);

  const triggerReveal = useCallback(() => {
    if (phase === 'revealing') return;
    setPhase('revealing');
    // Allow dramatic circular mask to expand fully across viewport before unmounting
    setTimeout(() => {
      onComplete();
    }, 950);
  }, [phase, onComplete]);

  useEffect(() => {
    // 2.4 seconds presentation with smooth progress bar
    const duration = 2400;
    const interval = 20;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          triggerReveal();
          return 100;
        }
        return prev + step;
      });
    }, interval);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        clearInterval(timer);
        triggerReveal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerReveal]);

  const isRevealing = phase === 'revealing';

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden select-none"
      onClick={triggerReveal}
      aria-label="ISHANVI Opening Intro with Expanding Circular Reveal"
    >
      {/* SVG Definitions for the Iris Hole Mask */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <mask id="ishanvi-iris-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
            {/* White base = fully visible */}
            <rect x="0" y="0" width="1" height="1" fill="white" />
            {/* Black expanding circle = cuts a transparent hole in center revealing website */}
            <circle
              cx="0.5"
              cy="0.5"
              r={isRevealing ? 0.95 : 0}
              fill="black"
              style={{
                transition: isRevealing ? 'r 0.9s cubic-bezier(0.77, 0, 0.175, 1)' : 'none',
              }}
            />
          </mask>
        </defs>
      </svg>

      {/* 
        ====================================================================
        DARK OVERLAY WITH EXPANDING CIRCULAR IRIS MASK
        Reveals the website underneath as the circle expands from center
        ====================================================================
      */}
      <div
        className="absolute inset-0 bg-[#07130D] transition-opacity duration-300"
        style={{
          mask: 'url(#ishanvi-iris-mask)',
          WebkitMask: 'url(#ishanvi-iris-mask)',
        }}
      >
        {/* Luxury Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06110B] via-[#0D2418] to-[#06110B]" />
        
        {/* Ambient Golden Radial Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(223,183,108,0.25)_0%,rgba(197,160,89,0.08)_45%,transparent_70%)] blur-3xl pointer-events-none animate-aura-slow" />
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(27,59,43,0.4)_0%,transparent_70%)] blur-2xl pointer-events-none" />

        {/* Delicate Golden Grid Watermark Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#DFB76C_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.07] pointer-events-none" />

        {/* Floating Subtle Gold Stardust Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.span
              key={i}
              initial={{
                x: `${(i * 17 + 5) % 100}vw`,
                y: `${((i * 29) % 80) + 10}vh`,
                opacity: 0,
                scale: 0.4,
              }}
              animate={{
                y: [null, `${((i * 29) % 80) - 20}vh`],
                opacity: [0, 0.8, 0],
                scale: [0.4, 1.2, 0.4],
              }}
              transition={{
                duration: 2.8 + (i % 4) * 0.4,
                repeat: Infinity,
                delay: (i * 0.12) % 1.5,
                ease: 'easeInOut',
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#DFB76C] shadow-[0_0_10px_#DFB76C]"
            />
          ))}
        </div>

        {/* 
          ====================================================================
          CENTER LOGO PRESENTATION
          Cinematic reveal, subtle glow, and scale animation
          ====================================================================
        */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{
              opacity: isRevealing ? 0 : 1,
              scale: isRevealing ? 1.08 : 1,
              y: isRevealing ? -10 : 0,
            }}
            transition={{
              duration: isRevealing ? 0.4 : 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-50 max-w-xl w-full flex flex-col items-center text-center"
          >
            {/* Top Luxury Pill */}
            <motion.div
              initial={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFB76C]/10 border border-[#DFB76C]/45 text-[11px] sm:text-xs font-bold text-[#DFB76C] uppercase tracking-[0.24em] mb-5 shadow-lg backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFB76C] animate-pulse" />
              <span>Welcome to ISHANVI Residence</span>
            </motion.div>

            {/* Official ISHANVI Logo with Elegant Reveal, Subtle Glow, and Scale Animation */}
            <div className="relative group">
              {/* Outer Golden Halo Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#DFB76C]/40 via-[#F3E3B8]/20 to-[#DFB76C]/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Logo Presentation Frame */}
              <div className="relative p-4 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_50px_rgba(223,183,108,0.35)] border-2 border-[#DFB76C]/70 w-full max-w-md sm:max-w-lg flex items-center justify-center overflow-hidden">
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
                  initial={{ x: '-150%', opacity: 0 }}
                  animate={{ x: '250%', opacity: [0, 0.85, 0] }}
                  transition={{ duration: 1.4, delay: 0.35, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-44 bg-gradient-to-r from-transparent via-white/90 to-transparent skew-x-[-22deg] pointer-events-none"
                />
              </div>
            </div>

            {/* Expanding Gold Hairline Accent */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="w-56 sm:w-80 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent my-5"
            />

            {/* Philosophy Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-serif text-sm sm:text-base font-semibold text-[#FAF8F5] tracking-[0.2em] uppercase"
            >
              Safe Stay &nbsp;·&nbsp; Better Living &nbsp;·&nbsp; Brighter Tomorrow
            </motion.p>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-xs text-[#DFB76C]/90 mt-2 font-sans tracking-widest uppercase"
            >
              Near ISMS Sankalp Business School · Ambegaon Bk, Pune
            </motion.p>
          </motion.div>
        </div>

        {/* Top Right "Skip Intro" Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            triggerReveal();
          }}
          className="absolute top-5 right-5 z-50 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-[#102A1C] border border-[#DFB76C]/40 hover:border-[#DFB76C] text-[#DFB76C] text-xs font-semibold backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 shadow-lg hover:scale-105 active:scale-95"
        >
          <span>Enter Website</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Bottom Precision Loading Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-50">
          <div
            className="h-full bg-gradient-to-r from-[#DFB76C] via-[#FFF3D6] to-[#DFB76C] shadow-[0_0_14px_#DFB76C] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 
        ====================================================================
        DRAMATIC EXPANDING CIRCULAR APERTURE RING (IRIS OPENING)
        Golden glowing ring that explodes outward from center as the hole opens
        ====================================================================
      */}
      {isRevealing && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 6.2, opacity: [1, 0.9, 0] }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full border-4 border-[#DFB76C] shadow-[0_0_60px_#DFB76C,inset_0_0_40px_#DFB76C] pointer-events-none z-[105]"
        />
      )}
    </div>
  );
};

