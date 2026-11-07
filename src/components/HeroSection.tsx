import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Phone,
  Bed,
  Calendar,
  Maximize2,
  Wifi,
  Utensils,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface HeroSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onExploreRooms?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onExploreRooms }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState<boolean>(false);

  const SLIDE_DURATION = 5000; // Continuous 5-second auto-slide

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

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="relative w-full min-h-[78vh] sm:min-h-[82vh] lg:min-h-[88vh] flex flex-col justify-between bg-[#06120B] text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="ISHANVI Full-Width Hero Slider"
    >
      {/* 
        ========================================================================
        FULL-WIDTH EDGE-TO-EDGE CINEMATIC CAROUSEL
        Slide 0: The Original 1st Image (WhatsApp Banner) - 100% Full Width Edge-to-Edge
        Slide 1: Executive Lobby & Reception Lounge (High-Res Photo) - 100% Full Width
        Slide 2: Deluxe Furnished Living & Study Sanctuary (High-Res Photo) - 100% Full Width
        ========================================================================
      */}
      <div className="relative w-full flex-1 flex flex-col justify-center overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {currentSlide === 0 && (
            /* ================================================================
               SLIDE 0: ORIGINAL 1ST IMAGE (OFFICIAL BANNER) - 100% FULL WIDTH
               Spanning edge-to-edge across the entire screen width with zero boxed margins!
               ================================================================ */
            <motion.div
              key="hero-slide-0-original-banner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[84vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#07130D] via-[#FAF8F5] to-[#07130D] cursor-pointer"
              onClick={() => setIsFlyerModalOpen(true)}
              title="Click to Zoom Full Official Brochure"
            >
              {/* Full-Width Edge-to-Edge Original Banner Image */}
              <motion.img
                src="/assets/images/hero_slide_flyer.jpg"
                alt="ISHANVI Hostel & Accommodation Official Banner"
                initial={{ scale: 1 }}
                animate={{ scale: 1.03 }}
                transition={{ duration: 5.2, ease: 'easeOut' }}
                className="w-full h-full object-cover sm:object-contain object-center"
                fetchPriority="high"
                loading="eager"
              />

              {/* Top-Right Click to Zoom Pill */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black/95 backdrop-blur-md text-[#DFB76C] text-xs font-bold border border-[#DFB76C]/60 flex items-center gap-2 shadow-2xl transition-transform hover:scale-105 pointer-events-auto">
                <Maximize2 className="w-3.5 h-3.5 text-[#DFB76C]" />
                <span>Click to Zoom</span>
              </div>
            </motion.div>
          )}

          {currentSlide === 1 && (
            /* ================================================================
               SLIDE 1: EXECUTIVE LOBBY & RECEPTION LOUNGE - 100% FULL WIDTH
               ================================================================ */
            <motion.div
              key="hero-slide-1-lobby"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[84vh] flex items-end justify-start overflow-hidden"
            >
              <motion.img
                src="/assets/images/hero_slide_resident_hd.jpg"
                alt="ISHANVI Hostel Executive Lobby and Reception"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 5.2, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.03]"
                fetchPriority="high"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07130D] via-[#07130D]/45 to-transparent pointer-events-none" />

              <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#DFB76C]">
                  <span className="w-6 h-[1.5px] bg-[#DFB76C]" />
                  <span>RECEPTION &amp; RESIDENT LOUNGE</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-on-photo">
                  Safe, Secure &amp; Homely Atmosphere <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB76C] via-[#F6E6C2] to-[#DFB76C] italic font-normal">
                    for Focused Scholars
                  </span>
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl font-sans text-on-photo">
                  24/7 in-house warden, biometric security gates, CCTV surveillance, optical fiber Wi-Fi, and tranquil study ambience in Ambegaon Bk, Pune.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenEnquiry('Lobby Tour Booking')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#DFB76C] to-[#E8C680] text-[#102A1C] text-xs sm:text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#102A1C]" />
                    <span>Schedule Campus Tour</span>
                  </button>

                  <a
                    href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-[#DFB76C]/60 text-xs sm:text-sm font-semibold backdrop-blur-md transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#DFB76C]" />
                    <span>Call: {HOSTEL_INFO.phonePrimary}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 2 && (
            /* ================================================================
               SLIDE 2: DELUXE FURNISHED LIVING & STUDY SANCTUARY - 100% FULL WIDTH
               ================================================================ */
            <motion.div
              key="hero-slide-2-room"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[84vh] flex items-end justify-start overflow-hidden"
            >
              <motion.img
                src="/assets/images/hero_slide_room_hd.jpg"
                alt="ISHANVI Furnished Study Room"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 5.2, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.03]"
                fetchPriority="high"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07130D] via-[#07130D]/45 to-transparent pointer-events-none" />

              <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#DFB76C]">
                  <span className="w-6 h-[1.5px] bg-[#DFB76C]" />
                  <span>ACCOMMODATION &amp; SPECIFICATIONS</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-on-photo">
                  Spacious Furnished Rooms <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB76C] via-[#F6E6C2] to-[#DFB76C] italic font-normal">
                    with Dedicated Study Desks
                  </span>
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl font-sans text-on-photo">
                  Single and sharing configurations equipped with orthopaedic beds, solid wooden wardrobes, ergonomic study chairs, attached sanitized washrooms, and 4 hot hygienic meals.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      if (onExploreRooms) onExploreRooms();
                      else onOpenEnquiry('Room Plans');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#DFB76C] to-[#E8C680] text-[#102A1C] text-xs sm:text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Bed className="w-4 h-4 text-[#102A1C]" />
                    <span>Explore Room Tariffs</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiry('Room Availability')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-[#DFB76C]/60 text-xs sm:text-sm font-semibold backdrop-blur-md transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                    <span>Check Availability</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 
          ========================================================================
          EDGE MANUAL CHEVRONS (PREV & NEXT)
          ========================================================================
        */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#102A1C] text-white hover:text-[#DFB76C] border border-white/20 hover:border-[#DFB76C] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* 
        ========================================================================
        BOTTOM SLIDE CONTROLS & 5-SECOND PROGRESS BAR
        ========================================================================
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 pt-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-black/60 backdrop-blur-md p-2.5 sm:px-4 rounded-2xl border border-white/10 shadow-lg">
          {/* Slide Selector Indicators with Titles */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto max-w-full pb-0.5 sm:pb-0 scrollbar-none">
            {[
              { id: 0, title: 'Official Banner' },
              { id: 1, title: 'Executive Lobby' },
              { id: 2, title: 'Furnished Rooms' },
            ].map((slide) => {
              const isActive = currentSlide === slide.id;
              return (
                <button
                  key={slide.id}
                  onClick={() => setSlide(slide.id)}
                  className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#DFB76C] text-[#0A1C12] shadow-lg shadow-[#DFB76C]/30 scale-105'
                      : 'bg-black/40 hover:bg-black/60 text-white/70 hover:text-white border border-white/10'
                  }`}
                  aria-label={`Go to slide ${slide.id + 1}: ${slide.title}`}
                >
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#0A1C12]' : 'text-[#DFB76C]'}`}>
                    0{slide.id + 1}
                  </span>
                  <span>{slide.title}</span>
                </button>
              );
            })}
          </div>

          {/* Continuous 5-Second Linear Progress Bar & Timer */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#DFB76C] font-mono font-bold tracking-wider">
              0{currentSlide + 1} / 03
            </span>
            <div className="w-24 sm:w-32 h-1.5 bg-white/20 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#DFB76C] to-[#FFF3D6] shadow-[0_0_8px_#DFB76C]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <span className="text-[10px] text-white/60 font-sans">
              {isPaused ? 'Paused' : 'Auto 5s'}
            </span>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        DOCKED LUXURY QUICK AMENITIES RIBBON (SEAMLESS EDGE-TO-EDGE)
        Comfortable Rooms | High-Speed Wi-Fi | Hygienic Meals | 24/7 Security |
        100m to ISMS Sankalp | Schedule Campus Tour
        ========================================================================
      */}
      <div className="relative z-20 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#DFB76C]/40 text-[#102A1C] py-2.5 px-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
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
              <span>24/7 Guarded Security</span>
            </button>
            <span className="text-gray-300 hidden md:inline">•</span>

            <button
              onClick={() => onOpenEnquiry('Prime Location')}
              className="hover:text-[#C5A059] transition-colors cursor-pointer py-1 flex items-center gap-1.5 hidden md:flex"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>100m to ISMS Sankalp</span>
            </button>
          </div>

          {/* Book Tour Action Button */}
          <button
            onClick={() => onOpenEnquiry('Campus Tour Booking')}
            className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#102A1C] hover:bg-[#1B3B2B] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#DFB76C]/40 hover:scale-105 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Schedule Campus Tour</span>
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
