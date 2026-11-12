import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Bed,
  Wifi,
  Utensils,
  ShieldCheck,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface HeroSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onExploreRooms?: () => void;
}

interface HeroSlide {
  id: number;
  kicker: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  image: string;
  label: string;
  tagline: string;
  hideTextOverlay?: boolean;
}

/**
 * EXACT ORIGINAL FOUR HERO SLIDES
 * Slide 0: Student Living & Reception Sanctuary
 * Slide 1: Official ISHANVI Property Showcase Flyer
 * Slide 2: Furnished Twin Bedroom Sanctuary
 * Slide 3: Guarded Residence & Peaceful Campus Environment
 */
const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    kicker: 'SAFE STAY · BETTER LIVING · BRIGHTER TOMORROW',
    title: 'A Comfortable Stay',
    titleAccent: 'For A Brighter Tomorrow',
    subtitle:
      'Safe, secure, and thoughtfully managed accommodation for students & working professionals. Prime location near ISMS Sankalp Business School, Ambegaon Bk, Pune.',
    image: '/assets/images/hero_student_clean_hd.jpg',
    label: 'Student Living',
    tagline: 'Comfortable Living · Safe Environment · Brighter Future',
  },
  {
    id: 1,
    kicker: '',
    title: 'Official Property Showcase',
    titleAccent: '',
    subtitle: '',
    image: '/assets/images/hero_slide_flyer.jpg',
    label: 'Property Showcase',
    tagline: 'Safe, Secure & Well-Managed Accommodation',
    hideTextOverlay: true,
  },
  {
    id: 2,
    kicker: 'FURNISHED SCHOLAR BEDROOMS',
    title: 'Spacious Twin Sanctuary',
    titleAccent: 'Tailored For Focus',
    subtitle:
      'Bright twin sharing and private bedrooms with solid wooden wardrobes, individual study desks with natural daylight, and spotless attached baths.',
    image: '/assets/images/hero_slide_room_hd.jpg',
    label: 'Twin Bedrooms',
    tagline: 'Spacious Rooms · Solid Wooden Wardrobes · Natural Daylight',
  },
  {
    id: 3,
    kicker: 'SECURITY & PEACE OF MIND',
    title: 'Guarded Residence',
    titleAccent: '& Inspiring Community',
    subtitle:
      'Continuous CCTV surveillance, biometric access gates, dedicated on-premise warden care, and a peaceful study atmosphere for your academic journey.',
    image: '/assets/images/hero_facade_clean_hd.jpg',
    label: 'Campus Living',
    tagline: '24/7 Guarded Security · Caring Warden · Verified Visitors',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onExploreRooms }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  // Automatic sliding transition every 4.5 seconds with pause-on-hover support
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Keyboard arrow navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full h-[540px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[730px] flex flex-col justify-between bg-[#07170E] text-white overflow-hidden select-none"
      aria-label="ISHANVI Luxury 4-Image Hero Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 
        ========================================================================
        100% EDGE-TO-EDGE FULL-WIDTH HERO SLIDER BACKGROUND
        Smooth cross-fade between all 4 images with zero side gaps
        ========================================================================
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.65,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 w-full h-full origin-center"
          >
            {slide.hideTextOverlay ? (
              /* 
                ================================================================
                SLIDE 1: THE OFFICIAL ISHANVI FLYER SHOWCASE
                Full-width ambient fill + uncropped high-resolution flyer graphic.
                Preserves all original logo, typography, phone numbers, and badges.
                ================================================================
              */
              <div
                className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#07170E] cursor-pointer"
                onClick={() => onOpenEnquiry('Official Property Showcase')}
              >
                {/* Ambient full-bleed glow from the flyer colors to seamlessly fill wide screens without dark bars */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-40 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                {/* Crisp high-resolution flyer graphic with proper aspect ratio and zero cropping */}
                <img
                  src={slide.image}
                  alt="ISHANVI Hostel & Accommodation Official Property Showcase"
                  className="relative z-10 w-full h-full object-contain object-center select-none p-1 sm:p-2"
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
            ) : (
              /* 
                ================================================================
                SLIDES 0, 2, 3: FULL-WIDTH PHOTOGRAPHY WITH GRADIENT SCRIMS
                - Slide 0: Student Living Reception
                - Slide 2: Furnished Twin Bedroom Sanctuary
                - Slide 3: Guarded Residence & Inspiring Community
                ================================================================
              */
              <>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center select-none"
                  fetchPriority="high"
                  loading="eager"
                />

                {/* Ambient gradient scrims for pristine typographic legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#05130B]/92 via-[#05130B]/60 sm:via-[#05130B]/35 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#040E08]/85 via-[#040E08]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 
        ========================================================================
        FOREGROUND CONTENT LAYER (Rendered for Slides 0, 2, 3 with text)
        ========================================================================
      */}
      {!slide.hideTextOverlay ? (
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-16 my-auto">
          <div className="max-w-2xl space-y-5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="space-y-3.5"
              >
                {/* Gold Kicker */}
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-[1.5px] bg-[#DFB76C] shadow-[0_0_8px_#DFB76C]" />
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#DFB76C] uppercase font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    {slide.kicker}
                  </span>
                </div>

                {/* Dominant Headline */}
                <h1 className="title-page text-white leading-[1.15] tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] break-words">
                  {slide.title}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB76C] via-[#FFF3D6] to-[#E8C680] italic font-normal">
                    {slide.titleAccent}
                  </span>
                </h1>

                {/* Descriptive Subtitle */}
                <p className="text-lead !text-slate-100 font-medium leading-relaxed font-sans max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
                  {slide.subtitle}
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
                <span>Explore Rooms</span>
                <ArrowRight className="w-4 h-4 text-[#051009]" />
              </button>

              <button
                onClick={() => onOpenEnquiry(slide.label)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/60 hover:bg-[#102A1C] text-white border border-[#DFB76C]/60 hover:border-[#DFB76C] text-xs sm:text-sm font-semibold backdrop-blur-md shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                <span>Enquire for Admission</span>
              </button>
            </motion.div>
          </div>
        </div>
      ) : (
        /* Slide 1 (Flyer): Interactive bottom trigger allowing quick enquiry */
        <div className="relative z-20 w-full flex-1 flex items-end justify-center pb-16 pt-2 pointer-events-none">
          <button
            onClick={() => onOpenEnquiry('Official Property Showcase')}
            className="btn-primary !bg-[#102A1C]/92 hover:!bg-[#1B3B2B] backdrop-blur-md !border !border-[#DFB76C]/60 shadow-2xl !py-2.5 !px-6 text-xs sm:text-sm font-semibold flex items-center gap-2 group cursor-pointer transition-all hover:scale-105 active:scale-95 pointer-events-auto"
          >
            <span>Enquire for Admissions &amp; Pricing</span>
            <ArrowRight className="w-4 h-4 text-[#DFB76C] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}

      {/* 
        ========================================================================
        SYNCHRONIZED SLIDE INDICATOR DOTS (EXACTLY 4 DOTS)
        Positioned neatly above the bottom ribbon
        ========================================================================
      */}
      <div className="absolute bottom-16 sm:bottom-18 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 shadow-lg">
        {HERO_SLIDES.map((s, idx) => {
          const isActive = currentSlide === idx;
          return (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Switch to slide ${idx + 1}: ${s.label}`}
              className={`transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'w-7 h-2 rounded-full bg-[#DFB76C] shadow-[0_0_8px_#DFB76C]'
                  : 'w-2.5 h-2 rounded-full bg-white/55 hover:bg-white'
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
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B1E13]/65 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C]/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 group"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B1E13]/65 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C]/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 group"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* 
        ========================================================================
        AMENITIES RIBBON (SEAMLESS EDGE-TO-EDGE BOTTOM FOUNDATION)
        ========================================================================
      */}
      <div className="relative z-20 w-full bg-[#FAF8F5]/96 backdrop-blur-md border-t border-[#DFB76C]/30 text-[#102A1C] py-2.5 px-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
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
