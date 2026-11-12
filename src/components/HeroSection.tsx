import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  Bed,
  Wifi,
  Utensils,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface HeroSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onExploreRooms?: () => void;
}

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  hideTextOverlay?: boolean;
}

/**
 * EXACT ORIGINAL FOUR HERO SLIDES
 * - Slide 1 (Index 0): Student Living & Reception Sanctuary -> Displays text overlay
 * - Slide 2 (Index 1): Official ISHANVI Property Showcase Flyer -> NO text overlay (embedded text preserved)
 * - Slide 3 (Index 2): Furnished Twin Bedroom Sanctuary -> Displays same text overlay as Slide 1
 * - Slide 4 (Index 3): Guarded Residence & Campus Living -> Displays same text overlay as Slide 1
 */
const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    image: '/assets/images/hero_student_clean_hd.jpg',
    alt: 'ISHANVI Hostel reception and comfortable student living in Ambegaon Pune',
  },
  {
    id: 1,
    image: '/assets/images/hero_slide_flyer.jpg',
    alt: 'Official ISHANVI Hostel & Accommodation showcase with room photos, facilities, and contact details',
    hideTextOverlay: true, // Slide 2: Do NOT display any additional text overlay
  },
  {
    id: 2,
    image: '/assets/images/hero_slide_room_hd.jpg',
    alt: 'Furnished twin sharing student bedroom with wooden wardrobe at ISHANVI Hostel Ambegaon Pune',
  },
  {
    id: 3,
    image: '/assets/images/hero_facade_clean_hd.jpg',
    alt: 'Guarded residence building exterior with 24/7 security near ISMS Sankalp Pune',
  },
];

/**
 * UNIFIED TEXT CONTENT (SLIDES 1, 3, AND 4 USE THE EXACT SAME CONTENT & STYLING)
 */
const HERO_TEXT_CONTENT = {
  kicker: 'SAFE STAY · BETTER LIVING · BRIGHTER TOMORROW',
  title: 'A Comfortable Stay',
  titleAccent: 'For A Brighter Tomorrow',
  subtitle:
    'Safe, secure, and thoughtfully managed accommodation for students & working professionals. Prime location near ISMS Sankalp Business School, Ambegaon Bk, Pune.',
  primaryCta: 'Explore Rooms',
  secondaryCta: 'Enquire for Admission',
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnquiry,
  onExploreRooms,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Transitions to the next slide smoothly
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // Transitions to the previous slide smoothly
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Transitions to a specific slide by index
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Starts or resets the automatic 5-second interval timer (5000ms)
  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
  }, []);

  // Initialize continuous 5-second automatic sliding on mount
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  // Manual navigation handlers that immediately navigate and reset the 5-second countdown timer
  const handleNext = () => {
    nextSlide();
    startTimer();
  };

  const handlePrev = () => {
    prevSlide();
    startTimer();
  };

  const handleDotClick = (index: number) => {
    goToSlide(index);
    startTimer();
  };

  // Keyboard navigation support with timer reset
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
        startTimer();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
        startTimer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, startTimer]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full h-[540px] sm:h-[600px] md:h-[640px] lg:h-[calc(100dvh-76px)] lg:min-h-[580px] lg:max-h-[860px] flex flex-col justify-between bg-[#07170E] text-white overflow-hidden select-none"
      aria-label="ISHANVI Luxury 4-Image Hero Slider"
    >
      {/* 
        ========================================================================
        100% EDGE-TO-EDGE FULL-WIDTH HERO SLIDER BACKGROUND
        Smooth cross-fade across all 4 images with full desktop width
        ========================================================================
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.65,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center select-none"
              fetchPriority={slide.id === 0 ? 'high' : 'auto'}
              loading={slide.id === 0 ? 'eager' : 'lazy'}
            />

            {/* 
              Subtle gradient scrim applied ONLY on Slides 1, 3, and 4 (not Slide 2)
              Ensures high contrast and flawless typographic readability
            */}
            {!slide.hideTextOverlay && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-[#05130B]/90 via-[#05130B]/55 sm:via-[#05130B]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#040E08]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 
        ========================================================================
        FOREGROUND CONTENT LAYER:
        - Slide 1, Slide 3, Slide 4: Displays identical heading, subtitle, and CTA buttons
        - Slide 2: NO text overlay (pure authentic flyer display)
        ========================================================================
      */}
      {!slide.hideTextOverlay ? (
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-16 my-auto">
          <div className="max-w-2xl space-y-4 sm:space-y-5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-text-${currentSlide}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-3 sm:space-y-3.5"
              >
                {/* Gold Kicker */}
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-[1.5px] bg-[#DFB76C] shadow-[0_0_8px_#DFB76C]" />
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#DFB76C] uppercase font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    {HERO_TEXT_CONTENT.kicker}
                  </span>
                </div>

                {/* Dominant Headline */}
                <h1 className="title-page text-white leading-[1.15] tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] break-words">
                  {HERO_TEXT_CONTENT.title}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB76C] via-[#FFF3D6] to-[#E8C680] italic font-normal">
                    {HERO_TEXT_CONTENT.titleAccent}
                  </span>
                </h1>

                {/* Descriptive Subtitle */}
                <p className="text-lead !text-slate-100 font-medium leading-relaxed font-sans max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
                  {HERO_TEXT_CONTENT.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={() => {
                  if (onExploreRooms) onExploreRooms();
                  else onOpenEnquiry('Room Enquiry');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#DFB76C] via-[#E8C680] to-[#DFB76C] text-[#051009] text-xs sm:text-sm font-bold shadow-[0_4px_20px_rgba(223,183,108,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>{HERO_TEXT_CONTENT.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#051009]" />
              </button>

              <button
                onClick={() => onOpenEnquiry('Admission Enquiry')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/60 hover:bg-[#102A1C] text-white border border-[#DFB76C]/60 hover:border-[#DFB76C] text-xs sm:text-sm font-semibold backdrop-blur-md shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                <span>{HERO_TEXT_CONTENT.secondaryCta}</span>
              </button>
            </motion.div>
          </div>
        </div>
      ) : (
        /* Slide 2 (Flyer): Interactive clickable surface allowing direct enquiry */
        <div
          className="relative z-20 w-full flex-1 cursor-pointer flex items-end justify-center pb-16"
          onClick={() => onOpenEnquiry('Official Property Showcase')}
          title="Click to enquire about ISHANVI Hostel"
        />
      )}

      {/* 
        ========================================================================
        SYNCHRONIZED SLIDE INDICATOR DOTS (EXACTLY 4 DOTS)
        Positioned neatly above the bottom ribbon
        ========================================================================
      */}
      <div className="absolute bottom-13 sm:bottom-14 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15 shadow-xl">
        {HERO_SLIDES.map((s, idx) => {
          const isActive = currentSlide === idx;
          return (
            <button
              key={s.id}
              onClick={() => handleDotClick(idx)}
              aria-label={`Switch to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'w-7 h-2 rounded-full bg-[#DFB76C] shadow-[0_0_8px_#DFB76C]'
                  : 'w-2.5 h-2 rounded-full bg-white/60 hover:bg-white'
              }`}
            />
          );
        })}
      </div>

      {/* 
        ========================================================================
        PREVIOUS & NEXT CHEVRON NAVIGATION ARROWS
        ========================================================================
      */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B1E13]/65 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C]/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 group"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B1E13]/65 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C]/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 group"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* 
        ========================================================================
        AMENITIES RIBBON (SEAMLESS EDGE-TO-EDGE BOTTOM FOUNDATION)
        ========================================================================
      */}
      <div className="relative z-20 w-full bg-[#FAF8F5]/96 backdrop-blur-md border-t border-[#DFB76C]/30 text-[#102A1C] py-2 sm:py-2.5 px-4 shadow-xl shrink-0">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex-1 flex flex-wrap items-center justify-around sm:justify-start gap-2 sm:gap-6 text-xs sm:text-sm font-semibold text-[#102A1C]">
            <button
              onClick={() => onOpenEnquiry('Comfortable Rooms')}
              className="hover:text-[#C5A059] transition-colors cursor-pointer py-1 flex items-center gap-1.5"
            >
              <Bed className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Comfortable Rooms</span>
            </button>
            <span className="text-gray-300 hidden sm:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('High-Speed Wi-Fi')}
              className="hover:text-[#C5A059] transition-colors cursor-pointer py-1 flex items-center gap-1.5"
            >
              <Wifi className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>High-Speed Wi-Fi</span>
            </button>
            <span className="text-gray-300 hidden sm:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('Hygienic Meals')}
              className="hover:text-[#C5A059] transition-colors cursor-pointer py-1 flex items-center gap-1.5"
            >
              <Utensils className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>4 Hygienic Meals</span>
            </button>
            <span className="text-gray-300 hidden sm:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('24/7 Security')}
              className="hover:text-[#C5A059] transition-colors cursor-pointer py-1 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>24/7 Security</span>
            </button>
            <span className="text-gray-300 hidden md:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('Prime Location')}
              className="hover:text-[#C5A059] transition-colors cursor-pointer py-1 flex items-center gap-1.5 hidden md:flex"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Near ISMS Sankalp</span>
            </button>
          </div>

          {/* Quick Direct Phone Call Link */}
          <a
            href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
            className="text-xs font-bold text-[#102A1C] hover:text-[#8C6D2D] transition-colors flex items-center gap-1.5"
          >
            <span>Call Admissions:</span>
            <span className="font-mono text-[#8C6D2D]">{HOSTEL_INFO.phonePrimary}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
