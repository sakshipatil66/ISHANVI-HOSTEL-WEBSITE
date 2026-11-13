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
  Users,
  MapPin,
} from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';
import { LUXURY_EASE } from '../lib/motion';

interface HeroSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onExploreRooms?: () => void;
}

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  objectPosition?: string;
}

/**
 * EXACT ORIGINAL FOUR HERO SLIDES (PRESERVED IN ORIGINAL SEQUENCE)
 * - Slide 1 (Index 0): Student Living & Reception Sanctuary
 * - Slide 2 (Index 1): Official ISHANVI Property Showcase Full-Width Banner
 * - Slide 3 (Index 2): Furnished Twin Bedroom Sanctuary
 * - Slide 4 (Index 3): Guarded Residence & Campus Living
 */
const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    image: '/assets/images/hero_student_clean_hd.jpg',
    alt: 'ISHANVI Hostel reception and comfortable student living in Ambegaon Pune',
    objectPosition: 'object-center',
  },
  {
    id: 1,
    image: '/assets/images/hero_slide_flyer_clean.jpg',
    alt: 'Official ISHANVI Hostel & Accommodation showcase with room photos, facilities, and contact details',
    objectPosition: 'object-[65%_center] md:object-center',
  },
  {
    id: 2,
    image: '/assets/images/hero_slide_room_hd.jpg',
    alt: 'Furnished twin sharing student bedroom with wooden wardrobe at ISHANVI Hostel Ambegaon Pune',
    objectPosition: 'object-center',
  },
  {
    id: 3,
    image: '/assets/images/hero_facade_clean_hd.jpg',
    alt: 'Guarded residence building exterior with 24/7 security near ISMS Sankalp Pune',
    objectPosition: 'object-center',
  },
];

/**
 * UNIFIED TEXT CONTENT (SLIDES 1, 3, AND 4 ON DESKTOP)
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

  // Initialize continuous 5-second automatic sliding on mount & pause when hidden
  useEffect(() => {
    startTimer();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      } else {
        startTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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
      className="hero-shell"
      aria-label="ISHANVI Luxury 4-Image Hero Slider"
    >
      {/* HERO SLIDER VIEWPORT CONTAINER */}
      <div className="hero-viewport">
        {/* Background Slide Images with Cross-fade & Subtle Ken Burns Zoom */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.75, ease: 'easeInOut' },
                scale: { duration: 5.5, ease: 'easeOut' },
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
              onClick={() => onOpenEnquiry('Hero Admission Enquiry')}
              title="Click to enquire about ISHANVI Hostel"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover ${slide.objectPosition || 'object-center'} select-none`}
                fetchPriority={slide.id === 0 ? 'high' : 'auto'}
                loading={slide.id === 0 ? 'eager' : 'lazy'}
              />

              {/* Strong Multi-Stop Gradient Scrim for 100% Contrast & Readability across Mobile and Desktop */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#05130B]/95 via-[#05130B]/80 md:via-[#05130B]/70 to-[#05130B]/45 md:to-[#05130B]/25" />
                <div className="absolute inset-x-0 bottom-0 h-28 md:h-36 bg-gradient-to-t from-[#040E08]/95 via-[#040E08]/45 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-16 md:h-20 bg-gradient-to-b from-black/50 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FOREGROUND CONTENT LAYER: Staggered Editorial Reveal */}
        <div className="flex relative z-20 w-full max-w-7xl mx-auto px-10 sm:px-14 md:px-16 pt-6 sm:pt-8 pb-11 sm:pb-12 my-auto pointer-events-none">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3.5 md:space-y-4 text-left pointer-events-auto">
            <div className="space-y-1.5 sm:space-y-2">
              {/* Gold Kicker */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: LUXURY_EASE }}
                className="flex items-center gap-2 sm:gap-2.5"
              >
                <span className="w-5 sm:w-7 h-[1.5px] bg-[#DFB76C] shadow-[0_0_8px_#DFB76C] shrink-0" />
                <span className="hero-kicker">
                  {HERO_TEXT_CONTENT.kicker}
                </span>
              </motion.div>

              {/* Dominant Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: LUXURY_EASE }}
                className="title-page text-white"
              >
                {HERO_TEXT_CONTENT.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB76C] via-[#FFF3D6] to-[#E8C680] italic font-normal">
                  {HERO_TEXT_CONTENT.titleAccent}
                </span>
              </motion.h1>

              {/* Descriptive Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25, ease: LUXURY_EASE }}
                className="hero-subtitle max-w-xl"
              >
                {HERO_TEXT_CONTENT.subtitle}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease: LUXURY_EASE }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1"
            >
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (onExploreRooms) onExploreRooms();
                  else onOpenEnquiry('Room Enquiry');
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#DFB76C] via-[#E8C680] to-[#DFB76C] text-[#051009] text-xs sm:text-sm font-bold shadow-[0_4px_20px_rgba(223,183,108,0.35)] hover:shadow-[0_8px_28px_rgba(223,183,108,0.45)] transition-shadow cursor-pointer min-h-[44px] group"
              >
                <span>{HERO_TEXT_CONTENT.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#051009] transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenEnquiry('Admission Enquiry')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-black/60 hover:bg-[#102A1C] text-white border border-[#DFB76C]/60 hover:border-[#DFB76C] text-xs sm:text-sm font-semibold backdrop-blur-md shadow-md transition-colors cursor-pointer min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                <span>{HERO_TEXT_CONTENT.secondaryCta}</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* SYNCHRONIZED SLIDE INDICATOR DOTS */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-lg pointer-events-auto">
          {HERO_SLIDES.map((s, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={s.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDotClick(idx);
                }}
                aria-label={`Switch to slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-5 sm:w-6 h-1.5 sm:h-2 rounded-full bg-[#DFB76C] shadow-[0_0_8px_#DFB76C]'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/60 hover:bg-white'
                }`}
              />
            );
          })}
        </div>

        {/* PREVIOUS & NEXT CHEVRON NAVIGATION ARROWS */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous Slide"
          className="absolute left-1.5 sm:left-3 md:left-5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-[#0B1E13]/65 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C]/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg hover:scale-110 active:scale-95 group"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next Slide"
          className="absolute right-1.5 sm:right-3 md:right-5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-[#0B1E13]/65 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C]/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg hover:scale-110 active:scale-95 group"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* BOTTOM FEATURE STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.4, ease: LUXURY_EASE }}
        className="relative z-20 w-full bg-[#FAF8F5] border-t border-[#DFB76C]/30 text-[#102A1C] py-2 sm:py-2.5 px-3 sm:px-6 lg:px-8 shadow-md shrink-0"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex-1 flex items-center justify-start gap-1.5 sm:gap-3 md:gap-4 text-xs sm:text-sm font-semibold text-[#102A1C] overflow-x-auto no-scrollbar scroll-smooth touch-pan-x py-0.5">
            {[
              { label: 'Comfortable Rooms', query: 'Comfortable Rooms', Icon: Bed },
              { label: 'High-Speed Wi-Fi', query: 'High-Speed Wi-Fi', Icon: Wifi },
              { label: '4 Hygienic Meals', query: 'Hygienic Meals', Icon: Utensils },
              { label: '24/7 Security', query: '24/7 Security', Icon: ShieldCheck },
              { label: 'Supportive Community', query: 'Supportive Community', Icon: Users },
              { label: 'Near ISMS Sankalp', query: 'Prime Location', Icon: MapPin },
            ].map(({ label, query, Icon }) => (
              <motion.button
                key={label}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenEnquiry(query)}
                className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white border border-[#EFEAE1] hover:border-[#DFB76C] hover:shadow-xs text-[#102A1C] text-[11px] sm:text-xs font-semibold whitespace-nowrap shrink-0 shadow-2xs transition-colors cursor-pointer"
              >
                <Icon className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{label}</span>
              </motion.button>
            ))}
          </div>

          {/* Quick Direct Phone Call Link */}
          <a
            href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
            className="text-xs font-bold text-[#102A1C] hover:text-[#8C6D2D] transition-colors flex items-center gap-1.5 shrink-0 whitespace-nowrap hidden sm:flex"
            title="Call Admissions Reception"
          >
            <span>Call Admissions:</span>
            <span className="font-mono text-[#8C6D2D]">{HOSTEL_INFO.phonePrimary}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

