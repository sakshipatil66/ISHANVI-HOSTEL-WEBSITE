import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Heart,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Phone,
} from 'lucide-react';
import { HOSTEL_INFO, FLOATING_FEATURES } from '../data/hostelData';

interface HeroSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onExploreRooms?: () => void;
}

interface SlideItem {
  id: number;
  image: string;
  alt: string;
  isFlyerGraphic: boolean;
  kicker?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 0,
    // SLIDE 1: Official ISHANVI flyer image expanded full width
    image: '/assets/images/hero_slide_flyer.jpg',
    alt: 'ISHANVI Hostel & Accommodation Official Facilities, Spacious Rooms and Helpline',
    isFlyerGraphic: true,
  },
  {
    id: 1,
    // SLIDE 2: Authentic student resident in reception lobby with 3D gold logo
    image: '/assets/images/hero_slide_resident_hd.jpg',
    alt: 'Student resident holding books in ISHANVI Hostel luxury reception lobby',
    isFlyerGraphic: false,
    kicker: 'A SAFE PLACE FOR A BRIGHTER TOMORROW',
    title: 'Safe Stay. Better Living.',
    titleHighlight: 'Brighter Tomorrow.',
    subtitle:
      'Safe, secure and well-managed student & working professional accommodation directly near ISMS Sankalp Business School, Ambegaon Bk, Pune.',
  },
];

const AUTOPLAY_DURATION = 5000; // 5 seconds per slide continuous

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onExploreRooms }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const totalSlides = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  // Continuous auto-sliding ticker (slides continuously every 5 seconds)
  useEffect(() => {
    const intervalStep = 50;
    const stepIncrement = (intervalStep / AUTOPLAY_DURATION) * 100;

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
  }, [nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeSlide = SLIDES[currentSlide];

  return (
    <div className="w-full">
      {/* 
        ========================================================================
        PREMIUM FULL-WIDTH HERO SLIDER — PERFECT UNBLOCKED PROPORTIONS
        - Height calibrated to prevent vertical clipping on laptop and desktop screens
        - Full ambient spread across 100% width (no blank side boxes)
        - Flyer 100% visible: top sun logo and bottom phone bar are completely clear
        - The 6 amenity buttons are docked neatly inside the hero
        - Continuous 5-second automatic sliding
        ========================================================================
      */}
      <section
        className="relative w-full overflow-hidden select-none flex flex-col bg-[#08170E]"
        aria-label="Full-Width Hero Slider"
      >
        {/* SLIDE VISUAL CANVAS */}
        <div
          className={`relative w-full overflow-hidden flex items-center justify-center transition-[height] duration-500 ${
            activeSlide.isFlyerGraphic
              ? 'h-[52vw] min-h-[220px] sm:h-[400px] md:h-[440px] lg:h-[500px]'
              : 'h-[600px] sm:h-[440px] md:h-[460px] lg:h-[500px]'
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
            >
              {/* 
                SLIDE 1: Official ISHANVI Flyer in Full Uncropped Clarity
                - Ambient spread extends 100% edge-to-edge with matching cream (left) and green (right)
                - Foreground flyer is 100% visible with zero cropping
              */}
              {activeSlide.isFlyerGraphic ? (
                <div
                  onClick={() => onOpenEnquiry('Official Facilities & Rooms')}
                  className="relative z-10 w-full h-full flex items-center justify-center cursor-pointer overflow-hidden group"
                  title="Click to Enquire for ISHANVI Hostel Accommodation"
                  style={{
                    background:
                      'linear-gradient(90deg, #FAF7F2 0%, #FAF7F2 42%, #0E291B 65%, #08180E 100%)',
                  }}
                >
                  {/* Full-Bleed Ambient Spread Layer across 100% width */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                    <img
                      src={activeSlide.image}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover object-center filter blur-2xl scale-110 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/80 via-[#FAF7F2]/25 via-42% to-[#08180E]/80 pointer-events-none" />
                  </div>

                  {/* Crisp Sharp 100% Uncropped Foreground Flyer with breathing room */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-0 sm:p-2">
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      className="max-h-full max-w-full w-auto h-auto object-contain object-center drop-shadow-2xl select-none transition-transform duration-700 group-hover:scale-[1.006] [image-rendering:auto]"
                      fetchPriority="high"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      loading="eager"
                    />
                  </div>
                </div>
              ) : (
                /* SLIDE 2: Full-Bleed Photograph of Resident in Luxury Lobby */
                <div className="relative z-10 w-full h-full">
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    className="w-full h-full object-cover object-[78%_center] sm:object-[70%_center] lg:object-right select-none"
                    fetchPriority="high"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  {/* Directional Dark Gradient for High-Contrast Typography */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07170E] via-[#07170E]/88 to-[#07170E]/45 sm:bg-gradient-to-r sm:from-[#07170E]/95 sm:via-[#07170E]/70 sm:to-transparent pointer-events-none" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* SUBTLE PREVIOUS & NEXT ARROWS AT SCREEN MARGINS */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-1.5 sm:left-4 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/45 hover:bg-[#DFB76C] text-white hover:text-[#07170E] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-xl active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-1.5 sm:right-4 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/45 hover:bg-[#DFB76C] text-white hover:text-[#07170E] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-xl active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 
            SLIDE 2 EDITORIAL CONTENT OVERLAY:
            Only rendered on Slide 2. Positioned on the left.
          */}
          {currentSlide === 1 && (
            <div className="absolute inset-0 z-20 w-full max-w-7xl mx-auto px-12 sm:px-16 lg:px-20 pb-6 pt-5 sm:py-7 flex flex-col justify-end sm:justify-center pointer-events-none">
              <div className="max-w-xl lg:max-w-2xl space-y-3 pointer-events-auto [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
                {/* Kicker */}
                <div className="flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#DFB76C]" />
                  <span className="text-[#E8C47E] text-xs font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase font-sans">
                    {activeSlide.kicker}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="font-serif text-[1.75rem] sm:text-3xl lg:text-[40px] font-bold text-white leading-[1.16] tracking-tight">
                  {activeSlide.title} <br className="hidden sm:inline" />
                  <span className="text-[#DFB76C] italic font-normal">
                    {activeSlide.titleHighlight}
                  </span>
                </h1>

                {/* Subhead */}
                <p className="text-white text-sm sm:text-[15px] leading-relaxed max-w-lg font-sans">
                  {activeSlide.subtitle}
                </p>

                {/* CTAs */}
                <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => onOpenEnquiry('Resident Life')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-[#DFB76C] text-[#07170E] text-[13px] sm:text-sm font-bold shadow-lg hover:bg-[#EAC885] active:scale-98 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#07170E]" />
                    <span>Enquire for Room</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-full bg-black/35 hover:bg-white/20 text-white text-[13px] sm:text-sm font-semibold border border-white/25 backdrop-blur-md shadow-md transition-all active:scale-98"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#DFB76C]" />
                    <span>Call: {HOSTEL_INFO.phonePrimary}</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-4 max-w-md border-t border-white/25">
                  <div className="flex flex-col space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#DFB76C]" />
                      <span className="text-white text-[13px] font-semibold font-serif">Safe & Secure</span>
                    </div>
                    <span className="text-white/85 text-[11px] leading-tight">24/7 Guard & CCTV</span>
                  </div>

                  <div className="flex flex-col space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-[#DFB76C]" />
                      <span className="text-white text-[13px] font-semibold font-serif">Homely</span>
                    </div>
                    <span className="text-white/85 text-[11px] leading-tight">Supportive Scholars</span>
                  </div>

                  <div className="flex flex-col space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#DFB76C]" />
                      <span className="text-white text-[13px] font-semibold font-serif">Prime Location</span>
                    </div>
                    <span className="text-white/85 text-[11px] leading-tight">Near ISMS Sankalp</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 
          ========================================================================
          INTEGRATED BOTTOM DOCK (INSIDE HERO SECTION, BELOW THE VISUAL CANVAS)
          - Contains the 6 feature buttons in a clean white card.
          - Never overlaps or covers the flyer's phone number and address bar!
          - Contains the continuous auto-slide controls and 5s progress line.
          ========================================================================
        */}
        <div className="relative z-30 w-full bg-[#06140B] border-t border-white/10 px-3 sm:px-6 lg:px-8 pt-2.5 pb-2 space-y-2">
          {/* The 6 Feature Buttons in an Elegant Floating White Card */}
          <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-2.5 shadow-md border border-white/50">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/80">
              {FLOATING_FEATURES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onOpenEnquiry(item.title)}
                  className={`flex items-center justify-center text-center p-1.5 min-h-[36px] group cursor-pointer hover:text-[#C5A059] transition-all ${
                    idx > 0 ? 'sm:pl-3' : ''
                  }`}
                >
                  <span className="text-xs font-bold text-[#102A1C] group-hover:text-[#A88238] transition-colors leading-tight">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Slider Control Strip */}
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            {/* Slide Pill Selectors */}
            <div className="flex flex-wrap items-center gap-2">
              {SLIDES.map((slide, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`relative px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#102A1C] text-[#DFB76C] border border-[#DFB76C]/60 shadow-sm'
                        : 'bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-[#DFB76C]' : 'bg-white/40'
                      }`}
                    />
                    <span className="font-sans font-semibold">
                      0{idx + 1} · {idx === 0 ? 'Official Facilities Showcase' : 'Resident Life & Lobby'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Continuous Auto-Slide Active Beacon & Step Counter */}
            <div className="flex items-center gap-3">
              <span className="text-white/75 text-[11px] font-mono hidden sm:inline">
                Slide <strong className="text-[#DFB76C]">0{currentSlide + 1}</strong> of 0{totalSlides}
              </span>

              <div className="hidden sm:flex text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-sans font-medium">Continuous Auto-Slide (5s)</span>
              </div>
            </div>
          </div>

          {/* 5-SECOND PROGRESS LINE AT THE BOTTOM EDGE OF THE HERO */}
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#DFB76C] via-[#EAC885] to-[#DFB76C]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
