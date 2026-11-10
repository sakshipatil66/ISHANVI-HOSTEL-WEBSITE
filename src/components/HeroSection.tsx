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
  Calendar,
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
    title: '',
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

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Continuous automatic sliding without any pause/play UI or progress bar line
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  // Keyboard arrow navigation
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
      className="relative w-full min-h-[86vh] sm:min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between bg-[#0B1E13] text-white overflow-hidden select-none"
      aria-label="ISHANVI Luxury Full Width Hero Slider"
      style={{ perspective: 1400 }}
    >
      {/* 
        ========================================================================
        100% EDGE-TO-EDGE FULL-WIDTH HERO SLIDER WITH 3D CINEMATIC TRANSITIONS
        Zero boxed margins, zero side gaps, zero empty borders.
        ========================================================================
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{
              opacity: 0,
              scale: 1.08,
              rotateY: direction > 0 ? 3 : -3,
              z: -70,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              z: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              rotateY: direction > 0 ? -3 : 3,
              z: -80,
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 w-full h-full origin-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {slide.hideTextOverlay ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-3 sm:p-6 lg:p-8 overflow-hidden bg-[#07170E]">
                {/* Ambient luxury backdrop glow from the flyer colors */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-35 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  aria-hidden="true"
                />

                {/* Golden ambient radial light behind the flyer */}
                <div className="absolute w-[85vw] max-w-[950px] h-[55vh] rounded-full bg-[radial-gradient(ellipse,rgba(223,183,108,0.22)_0%,transparent_70%)] pointer-events-none" />

                {/* Full-resolution, 100% visible, uncropped showcase flyer */}
                <motion.div
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full max-w-6xl max-h-[76vh] flex items-center justify-center my-auto"
                >
                  <img
                    src={slide.image}
                    alt="ISHANVI Hostel & Accommodation Official Property Showcase"
                    className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.65)] border border-[#DFB76C]/40 select-none cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                    fetchPriority="high"
                    loading="eager"
                    onClick={() => onOpenEnquiry('Official Property Showcase')}
                  />
                </motion.div>
              </div>
            ) : (
              <>
                {/* Full-bleed background photography with continuous slow Ken Burns zoom */}
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.055 }}
                  transition={{ duration: 5.4, ease: 'easeOut' }}
                  className="w-full h-full object-cover object-center select-none"
                  style={{
                    filter: 'contrast(1.04) brightness(1.03) saturate(1.04)',
                  }}
                  fetchPriority="high"
                  loading="eager"
                />

                {/* 
                  Luminous forest-green lateral ambient gradient:
                  Rendered on slides with text overlay for maximum readability.
                */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#06180E]/85 via-[#06180E]/45 sm:via-[#06180E]/20 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#040E08]/85 via-[#040E08]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 
        ========================================================================
        FOREGROUND CINEMATIC CONTENT LAYER
        Only rendered on slides with text overlay (slides 0, 2, 3).
        The second slide (slide 1) has NO extra website-added text overlay!
        ========================================================================
      */}
      {!slide.hideTextOverlay ? (
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-16 my-auto">
          <div className="max-w-2xl space-y-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                {/* Subtle Gold Kicker */}
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1.5px] bg-[#DFB76C] shadow-[0_0_8px_#DFB76C]" />
                  <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#DFB76C] uppercase font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    {slide.kicker}
                  </span>
                </div>

                {/* Dominant Headline with Balance and Contrast */}
                <h1 className="title-page text-white leading-[1.14] tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] break-words">
                  {slide.title}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB76C] via-[#FFF3D6] to-[#E8C680] italic font-normal">
                    {slide.titleAccent}
                  </span>
                </h1>

                {/* Refined Descriptive Subtitle */}
                <p className="text-lead !text-slate-100 font-medium leading-relaxed font-sans max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* 
              Visitor-Facing Action Buttons:
              - Primary: Explore Rooms (Navigates to full room details)
              - Secondary: Enquire for Admission (Opens admissions modal)
            */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary Action */}
              <button
                onClick={() => {
                  if (onExploreRooms) onExploreRooms();
                  else onOpenEnquiry('Room Enquiry');
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#DFB76C] via-[#E8C680] to-[#DFB76C] text-[#051009] text-xs sm:text-sm font-bold shadow-[0_6px_24px_rgba(223,183,108,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Explore Rooms</span>
                <ArrowRight className="w-4 h-4 text-[#051009]" />
              </button>

              {/* Secondary Action */}
              <button
                onClick={() => onOpenEnquiry(slide.label)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-black/60 hover:bg-[#102A1C] text-white border border-[#DFB76C]/60 hover:border-[#DFB76C] text-xs sm:text-sm font-semibold backdrop-blur-md shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Enquire for Admission</span>
              </button>
            </motion.div>
          </div>
        </div>
      ) : (
        /* On slide 1 (flyer showcase), render a subtle bottom action button */
        <div className="relative z-20 w-full flex-1 flex items-end justify-center pb-4 pt-2">
          <button
            onClick={() => onOpenEnquiry('Official Property Showcase')}
            className="btn-primary !bg-[#102A1C]/90 hover:!bg-[#1B3B2B] backdrop-blur-md !border !border-[#DFB76C]/60 shadow-2xl !py-2.5 !px-6 text-xs sm:text-sm font-semibold flex items-center gap-2 group cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <span>Enquire for Admissions &amp; Pricing</span>
            <ArrowRight className="w-4 h-4 text-[#DFB76C] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}

      {/* 
        ========================================================================
        EDGE CHEVRON NAVIGATION (LEFT & RIGHT)
        ========================================================================
      */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0B1E13]/60 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C]/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 group"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0B1E13]/60 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C]/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 group"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* 
        ========================================================================
        AMENITIES RIBBON (SEAMLESS EDGE-TO-EDGE FOUNDATION)
        ========================================================================
      */}
      <div className="relative z-20 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#DFB76C]/30 text-[#102A1C] py-2.5 px-4 shadow-xl">
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
