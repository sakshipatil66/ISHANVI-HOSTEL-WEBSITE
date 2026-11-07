import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Heart,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Phone,
  Sparkles,
  Bed,
  Calendar,
  Maximize2,
  CheckCircle2,
} from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface HeroSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onExploreRooms?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onExploreRooms }) => {
  // 3 Sliding Windows:
  // 0 = 'Official Facilities Showcase' (Authentic Flyer Brochure)
  // 1 = 'Resident Life & Grand Lobby' (Reception, Verified Safety, H1 Headline)
  // 2 = 'Scholar Sanctuary & Study Rooms' (Peaceful Living, Study Desk, Homestyle Meals)
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState<boolean>(false);

  const SLIDE_DURATION = 5000; // 5 seconds continuous auto-slide as requested ("sliding windows slide every 5 sec")

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % 3);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    setProgress(0);
  }, []);

  const setSlide = (idx: number) => {
    setDirection(idx >= currentSlide ? 1 : -1);
    setCurrentSlide(idx);
    setProgress(0);
  };

  // Continuous 5-second auto-sliding timer with hover pause
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50;
    const stepIncrement = (intervalStep / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Sliding window transition variants with spring dynamics
  const windowSlideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0.3,
      scale: 0.985,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 32 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0.2,
      scale: 0.985,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 32 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      className="relative w-full bg-[#0E2016] text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="ISHANVI Hero Presentation"
    >
      {/* Ambient Forest Green & Golden Glow Lighting */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(223,183,108,0.2)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(16,42,28,0.45)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

      {/* Main Container - Calibrated width and padding matching reference screenshots */}
      <div className="max-w-[1380px] w-full mx-auto px-3 sm:px-6 lg:px-8 pt-2 sm:pt-3 pb-3">
        {/* Carousel Stage Container with Edge Navigation Arrows */}
        <div className="relative w-full max-w-[1240px] mx-auto">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Sliding Window"
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/55 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Sliding Window"
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/55 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 
            ========================================================================
            SLIDING WINDOWS STAGE CONTAINER
            Calibrated Height fitting comfortably within one desktop screen with navbar
            ========================================================================
          */}
          <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#DFB76C]/35 shadow-2xl bg-[#09170F] h-auto lg:h-[min(515px,calc(88vh-130px))] min-h-[380px] lg:min-h-[460px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {/* ===================================================================
                  WINDOW 01: OFFICIAL FACILITIES SHOWCASE (FLYER BROCHURE)
                  Flyer maintains 100% visibility, zero clipping at top or bottom
                  =================================================================== */}
              {currentSlide === 0 && (
                <motion.div
                  key="hero-window-1"
                  custom={direction}
                  variants={windowSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-full min-h-[380px] sm:min-h-[430px] lg:h-[min(515px,calc(88vh-130px))] lg:min-h-[460px] bg-[#FAF8F5] cursor-pointer overflow-hidden group flex items-center justify-center p-2 sm:p-3"
                  onClick={() => onOpenEnquiry('Official Showcase Flyer')}
                  title="Click to Enquire for ISHANVI Hostel Accommodation"
                >
                  {/* High-Resolution Authentic Flyer - 100% visible, zero cropping, matched height */}
                  <img
                    src="/assets/images/hero_slide_flyer.jpg"
                    alt="ISHANVI Hostel & Accommodation Official Facilities, Spacious Rooms, and Admissions Helpline"
                    className="w-full h-full max-h-full max-w-full object-contain object-center select-none rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-[1.008]"
                    fetchPriority="high"
                    loading="eager"
                  />

                  {/* Clean Zoom Brochure Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlyerModalOpen(true);
                    }}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-3 py-1.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-[#DFB76C] text-[11px] sm:text-xs font-bold border border-[#DFB76C]/40 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-all shadow-md cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#DFB76C]" />
                    <span>Zoom Brochure</span>
                  </button>
                </motion.div>
              )}

              {/* ===================================================================
                  WINDOW 02: RESIDENT LIFE & GRAND LOBBY
                  H1 Display headline, verified safety, dual CTAs, 3 trust badges
                  =================================================================== */}
              {currentSlide === 1 && (
                <motion.div
                  key="hero-window-2"
                  custom={direction}
                  variants={windowSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-full min-h-[380px] sm:min-h-[430px] lg:h-[min(515px,calc(88vh-130px))] lg:min-h-[460px] bg-[#FAF8F5] text-[#102A1C] px-5 py-4 sm:px-8 sm:py-6 flex items-center"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center w-full">
                    {/* Left Column: Typography, Storytelling & CTAs */}
                    <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
                      {/* Golden Kicker */}
                      <div className="inline-flex items-center gap-2">
                        <span className="w-6 sm:w-7 h-[2px] bg-[#C5A059]" />
                        <span className="text-[10px] sm:text-xs font-bold text-[#A88238] tracking-[0.18em] uppercase font-sans">
                          A SAFE PLACE FOR A BRIGHTER TOMORROW
                        </span>
                      </div>

                      {/* Main H1 Display Headline */}
                      <h1 className="font-serif text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] font-bold text-[#102A1C] leading-[1.12] tracking-tight">
                        Premium Hostel &amp;{' '}
                        <span className="text-[#8C6D2D] italic font-normal">
                          Accommodation
                        </span>
                      </h1>

                      {/* Subtitle / Core Triad */}
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#102A1C]">
                        <span>Comfortable Living</span>
                        <span className="text-[#C5A059]">|</span>
                        <span>Safe Environment</span>
                        <span className="text-[#C5A059]">|</span>
                        <span className="text-[#8C6D2D]">Brighter Future</span>
                      </div>

                      {/* Lead Description */}
                      <p className="text-xs sm:text-[13px] text-[#4A5568] leading-relaxed max-w-xl font-sans line-clamp-2 sm:line-clamp-none">
                        At Ishanvi Hostel &amp; Accommodation, we provide a peaceful, secure, and thoughtfully managed sanctuary for students and working professionals right near ISMS Sankalp Business School, Ambegaon Bk, Pune.
                      </p>

                      {/* CTA Action Buttons */}
                      <div className="pt-0.5 flex flex-wrap items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => onOpenEnquiry('Homepage Hero')}
                          className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#102A1C] text-white text-xs sm:text-sm font-bold shadow-lg hover:bg-[#1B3B2B] hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all cursor-pointer border border-[#DFB76C]/40 group"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#DFB76C]" />
                          <span>Enquire Now</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#DFB76C] transition-transform group-hover:translate-x-1" />
                        </button>

                        <a
                          href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C] hover:bg-[#FAF8F5] text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-98"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>Call: {HOSTEL_INFO.phonePrimary}</span>
                        </a>

                        {onExploreRooms && (
                          <button
                            onClick={onExploreRooms}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-[#102A1C] hover:text-[#8C6D2D] hover:bg-white/80 transition-all cursor-pointer"
                          >
                            <Bed className="w-3.5 h-3.5 text-[#C5A059]" />
                            <span>Explore Rooms &rarr;</span>
                          </button>
                        )}
                      </div>

                      {/* 3 Pillar Trust Badges matching reference screenshot */}
                      <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg border-t border-[#EFEAE1]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] shadow-2xs shrink-0">
                            <ShieldCheck className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="block text-[10px] sm:text-[11px] font-bold text-[#102A1C] leading-snug">
                              Safe &amp; Secure
                            </span>
                            <span className="block text-[8px] sm:text-[9px] text-[#5B6676] leading-tight">
                              Guards &amp; CCTV
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] shadow-2xs shrink-0">
                            <Heart className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="block text-[10px] sm:text-[11px] font-bold text-[#102A1C] leading-snug">
                              Homely Community
                            </span>
                            <span className="block text-[8px] sm:text-[9px] text-[#5B6676] leading-tight">
                              Supportive Scholars
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] shadow-2xs shrink-0">
                            <MapPin className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="block text-[10px] sm:text-[11px] font-bold text-[#102A1C] leading-snug">
                              Prime Location
                            </span>
                            <span className="block text-[8px] sm:text-[9px] text-[#5B6676] leading-tight">
                              ISMS Gate 100m
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Clean Hero Visual */}
                    <div className="lg:col-span-5 relative mt-1 lg:mt-0 flex items-center justify-center">
                      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/11] max-h-[240px] sm:max-h-[270px] lg:max-h-[300px] w-full bg-white group">
                        <img
                          src="/assets/images/hero_slide_resident_hd.jpg"
                          alt="Resident scholar in ISHANVI Hostel luxury reception lobby with 3D gold logo"
                          className="w-full h-full object-cover object-[72%_center] sm:object-center transition-transform duration-700 group-hover:scale-105"
                          fetchPriority="high"
                          loading="eager"
                        />
                        <div className="absolute top-2.5 right-2.5 bg-[#102A1C]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold border border-[#DFB76C]/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#DFB76C]" />
                          <span>Lobby &amp; Security Desk</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ===================================================================
                  WINDOW 03: SCHOLAR SANCTUARY & STUDY ROOMS
                  Distraction-free living, high-speed fiber Wi-Fi, homestyle dining
                  =================================================================== */}
              {currentSlide === 2 && (
                <motion.div
                  key="hero-window-3"
                  custom={direction}
                  variants={windowSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-full min-h-[380px] sm:min-h-[430px] lg:h-[min(515px,calc(88vh-130px))] lg:min-h-[460px] bg-[#FAF8F5] text-[#102A1C] px-5 py-4 sm:px-8 sm:py-6 flex items-center"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center w-full">
                    {/* Left Column: Room Specs, Benefits & Actions */}
                    <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
                      <div className="inline-flex items-center gap-2">
                        <span className="w-6 sm:w-7 h-[2px] bg-[#C5A059]" />
                        <span className="text-[10px] sm:text-xs font-bold text-[#A88238] tracking-[0.18em] uppercase font-sans">
                          CURATED FOR SCHOLARS &amp; CAREER SUCCESS
                        </span>
                      </div>

                      <h2 className="font-serif text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-bold text-[#102A1C] leading-[1.14] tracking-tight">
                        Spacious AC &amp; Non-AC Rooms with{' '}
                        <span className="text-[#8C6D2D] italic font-normal">
                          Dedicated Study Desks
                        </span>
                      </h2>

                      <p className="text-xs sm:text-[13px] text-[#4A5568] leading-relaxed max-w-xl font-sans">
                        Enjoy private or sharing accommodation with attached sanitized washrooms, high-speed fiber internet, and 4 fresh chef-prepared vegetarian meals served daily.
                      </p>

                      {/* 4 Feature Badges */}
                      <div className="grid grid-cols-2 gap-2 max-w-lg pt-1">
                        <div className="flex items-center gap-2 text-xs font-medium text-[#2D3748]">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                          <span>Ergonomic Desk &amp; Bookshelf</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-[#2D3748]">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                          <span>High-Speed Fiber Wi-Fi</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-[#2D3748]">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                          <span>4 Fresh Meals Daily</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-[#2D3748]">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                          <span>Attached Clean Bathroom</span>
                        </div>
                      </div>

                      {/* Action Triggers */}
                      <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => onOpenEnquiry('Single & Sharing Rooms')}
                          className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#102A1C] text-white text-xs sm:text-sm font-bold shadow-lg hover:bg-[#1B3B2B] hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all cursor-pointer border border-[#DFB76C]/40 group"
                        >
                          <Bed className="w-3.5 h-3.5 text-[#DFB76C]" />
                          <span>Check Room Tariffs</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#DFB76C] transition-transform group-hover:translate-x-1" />
                        </button>

                        <a
                          href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C] hover:bg-[#FAF8F5] text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-98"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>Call: {HOSTEL_INFO.phonePrimary}</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Room Showcase Photo */}
                    <div className="lg:col-span-5 relative mt-1 lg:mt-0 flex items-center justify-center">
                      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/11] max-h-[240px] sm:max-h-[270px] lg:max-h-[300px] w-full bg-white group">
                        <img
                          src="/assets/images/hero_slide_room_hd.jpg"
                          alt="Deluxe study room at ISHANVI Hostel with sunlight and comfort"
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          fetchPriority="high"
                          loading="eager"
                        />
                        <div className="absolute top-2.5 right-2.5 bg-[#102A1C]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold border border-[#DFB76C]/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#DFB76C]" />
                          <span>Peaceful Study Atmosphere</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Clean, Minimalist Slide Progress & Indicators (Direct, No Clunky Buttons) */}
        <div className="max-w-[1240px] mx-auto mt-2 sm:mt-2.5 flex items-center justify-center gap-3 py-1">
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx
                    ? 'w-7 bg-[#DFB76C] shadow-[0_0_8px_#DFB76C]'
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* 5-Second Continuous Progress Indicator Line */}
          <div className="w-16 sm:w-20 h-[2px] bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#DFB76C]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>

        {/* 
          ========================================================================
          FLOATING WHITE AMENITIES BAR (MATCHING SCREENSHOTS EXACTLY)
          Comfortable Rooms | High-Speed Wi-Fi | Hygienic Meals | 24/7 Security |
          Supportive Community | Prime Location | Book Tour
          Compact & elegant layout fitting directly on the initial desktop viewport
          ========================================================================
        */}
        <div className="max-w-[1240px] mx-auto mt-2 sm:mt-2.5 bg-white rounded-xl sm:rounded-full p-1.5 sm:p-2 shadow-2xl border border-[#DFB76C]/30 text-[#102A1C] flex flex-wrap items-center justify-between gap-2">
          <div className="flex-1 flex flex-wrap items-center justify-around sm:justify-start gap-2 sm:gap-5 lg:gap-6 px-2 sm:px-4 lg:px-6">
            <button
              onClick={() => onOpenEnquiry('Comfortable Rooms')}
              className="text-[11px] sm:text-xs md:text-sm font-semibold hover:text-[#C5A059] transition-colors cursor-pointer py-0.5"
            >
              Comfortable Rooms
            </button>
            <span className="text-gray-300 hidden sm:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('High-Speed Wi-Fi')}
              className="text-[11px] sm:text-xs md:text-sm font-semibold hover:text-[#C5A059] transition-colors cursor-pointer py-0.5"
            >
              High-Speed Wi-Fi
            </button>
            <span className="text-gray-300 hidden sm:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('Hygienic Meals')}
              className="text-[11px] sm:text-xs md:text-sm font-semibold hover:text-[#C5A059] transition-colors cursor-pointer py-0.5"
            >
              Hygienic Meals
            </button>
            <span className="text-gray-300 hidden sm:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('24/7 Security')}
              className="text-[11px] sm:text-xs md:text-sm font-semibold hover:text-[#C5A059] transition-colors cursor-pointer py-0.5"
            >
              24/7 Security
            </button>
            <span className="text-gray-300 hidden sm:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('Supportive Community')}
              className="text-[11px] sm:text-xs md:text-sm font-semibold hover:text-[#C5A059] transition-colors cursor-pointer py-0.5"
            >
              Supportive Community
            </button>
            <span className="text-gray-300 hidden sm:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('Prime Location')}
              className="text-[11px] sm:text-xs md:text-sm font-semibold hover:text-[#C5A059] transition-colors cursor-pointer py-0.5"
            >
              Prime Location
            </button>
          </div>

          {/* Green "Book Tour" Button matching screenshot */}
          <button
            onClick={() => onOpenEnquiry('Campus Tour Booking')}
            className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#102A1C] hover:bg-[#1B3B2B] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#DFB76C]/40 hover:scale-105 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Book Tour</span>
          </button>
        </div>
      </div>

      {/* FULL FLYER ZOOM MODAL */}
      {isFlyerModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsFlyerModalOpen(false)}
        >
          <div
            className="max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsFlyerModalOpen(false)}
              className="absolute -top-10 right-0 sm:top-2 sm:right-2 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close flyer"
            >
              ✕
            </button>

            <img
              src="/assets/images/hero_slide_flyer.jpg"
              alt="Official ISHANVI Brochure"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/20"
            />

            <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-white px-2">
              <div>
                <p className="font-serif text-lg font-bold text-[#DFB76C]">
                  Official ISHANVI Hostel &amp; Accommodation Property Brochure
                </p>
                <p className="text-white/80 text-xs">
                  Near ISMS Sankalp Business School · Ambegaon Bk, Pune · Call +91 77670 58988
                </p>
              </div>

              <button
                onClick={() => {
                  setIsFlyerModalOpen(false);
                  onOpenEnquiry('Property Brochure Modal');
                }}
                className="px-6 py-2.5 rounded-full bg-[#DFB76C] text-[#102A1C] text-xs font-bold hover:bg-[#EAC885] transition-all cursor-pointer shadow-lg"
              >
                Enquire For Admission
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
