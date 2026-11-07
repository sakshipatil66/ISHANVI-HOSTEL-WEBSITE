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
  Sparkles,
  Bed,
  Wifi,
  Utensils,
  Shield,
  Users,
  Star,
  CheckCircle2,
  Calendar,
  Maximize2,
} from 'lucide-react';
import { HOSTEL_INFO, FLOATING_FEATURES } from '../data/hostelData';

interface HeroSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onExploreRooms?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onExploreRooms }) => {
  // Mode: 'editorial' (the flagship 2-column aesthetic matching Screenshot 074022) or 'showcase' (the 2560x1280 official property banner)
  const [activeTab, setActiveTab] = useState<'editorial' | 'showcase'>('editorial');
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isBannerModalOpen, setIsBannerModalOpen] = useState<boolean>(false);

  const AUTOPLAY_DURATION = 7000; // 7 seconds per slide

  const toggleTab = useCallback(() => {
    setActiveTab((prev) => (prev === 'editorial' ? 'showcase' : 'editorial'));
    setProgress(0);
  }, []);

  // Subtle auto-rotation between editorial overview and official showcase flyer
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50;
    const stepIncrement = (intervalStep / AUTOPLAY_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          toggleTab();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [toggleTab, isPaused]);

  return (
    <div
      className="relative w-full bg-[#FAF8F5] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 
        ========================================================================
        ORGANIC LUXURY BOTANICAL LEAF ACCENTS & GOLDEN SUNLIGHT AURA
        Directly recreating the lush, serene aesthetic from reference Screenshot 074022
        ========================================================================
      */}
      {/* Top-Right Golden Sunbeam Glow */}
      <div className="absolute -top-24 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(223,183,108,0.22)_0%,rgba(250,248,245,0)_70%)] pointer-events-none -z-10" />

      {/* Bottom-Left Forest Green Ambient Aura */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(16,42,28,0.08)_0%,rgba(250,248,245,0)_70%)] pointer-events-none -z-10" />

      {/* Left Delicate Botanical Leaf Flourish (SVG) */}
      <div className="absolute top-12 -left-16 w-48 h-80 pointer-events-none opacity-20 hidden lg:block select-none -z-10">
        <svg viewBox="0 0 200 350" fill="none" className="w-full h-full text-[#102A1C]">
          <path
            d="M20 300C40 220 80 180 160 140C90 140 40 180 20 300Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M30 260C70 200 120 170 190 120C130 110 70 160 30 260Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M50 180C90 130 140 100 195 50C140 55 90 95 50 180Z"
            fill="currentColor"
          />
          <path
            d="M20 340C25 240 70 150 180 30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Right Corner Delicate Botanical Leaf Flourish (SVG) */}
      <div className="absolute top-4 -right-12 w-44 h-72 pointer-events-none opacity-20 hidden lg:block select-none -z-10">
        <svg viewBox="0 0 200 350" fill="none" className="w-full h-full text-[#C5A059]">
          <path
            d="M180 300C160 220 120 180 40 140C110 140 160 180 180 300Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M170 260C130 200 80 170 10 120C70 110 130 160 170 260Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M150 180C110 130 60 100 5 50C60 55 110 95 150 180Z"
            fill="currentColor"
          />
          <path
            d="M180 340C175 240 130 150 20 30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8">
        {/* 
          ========================================================================
          TOP INTERACTIVE SWITCHER PILL & LIVE ANNOUNCEMENT
          Lets users effortlessly toggle between the Flagship Editorial Story
          and the Official Verified Room Banner Showcase
          ========================================================================
        */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          {/* View Mode Switcher Pills */}
          <div className="inline-flex p-1 rounded-full bg-white/90 backdrop-blur-md border border-[#EFEAE1] shadow-xs">
            <button
              onClick={() => {
                setActiveTab('editorial');
                setProgress(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'editorial'
                  ? 'bg-[#102A1C] text-[#DFB76C] shadow-md border border-[#DFB76C]/40'
                  : 'text-[#4A5568] hover:text-[#102A1C]'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  activeTab === 'editorial' ? 'bg-[#DFB76C] animate-pulse' : 'bg-gray-300'
                }`}
              />
              <span>Residence Lifestyle &amp; Overview</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('showcase');
                setProgress(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'showcase'
                  ? 'bg-[#102A1C] text-[#DFB76C] shadow-md border border-[#DFB76C]/40'
                  : 'text-[#4A5568] hover:text-[#102A1C]'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  activeTab === 'showcase' ? 'bg-[#DFB76C] animate-pulse' : 'bg-gray-300'
                }`}
              />
              <span>Verified Room Showcase &amp; Flyer</span>
            </button>
          </div>

          {/* Admissions Live Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#EFEAE1] shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-[#102A1C]">
              Admissions Open 2026–27
            </span>
            <span className="text-[11px] text-[#A88238] font-semibold hidden sm:inline">
              · 1-Min Walk to ISMS Sankalp
            </span>
          </div>
        </div>

        {/* 
          ========================================================================
          HERO STAGE: ANCHORED BY THE TWO CORE VISUAL EXPERIENCES
          ========================================================================
        */}
        <AnimatePresence mode="wait">
          {/* ===================================================================
              VIEW 1: FLAGSHIP EDITORIAL HERO (MATCHING SCREENSHOT 074022)
              - Left: Inspiring typography, subtitle, primary/secondary buttons,
                      social proof, and 3 pillar badges
              - Right: Resident in luxury reception lobby with 3D gold logo,
                       plus floating verified room badge & 24/7 security badge
              =================================================================== */}
          {activeTab === 'editorial' && (
            <motion.div
              key="hero-editorial"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Typography, Storytelling & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                {/* Golden Kicker */}
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-8 h-[2px] bg-[#C5A059]" />
                  <span className="text-xs sm:text-[13px] font-bold text-[#A88238] tracking-[0.2em] uppercase font-sans">
                    A SAFE PLACE FOR A BRIGHTER TOMORROW
                  </span>
                </div>

                {/* Main H1 Display Headline */}
                <h1 className="font-serif text-[2.5rem] sm:text-5xl lg:text-[54px] font-bold text-[#102A1C] leading-[1.12] tracking-tight">
                  Premium Hostel &amp; <br />
                  <span className="text-[#8C6D2D] italic font-normal">
                    Accommodation
                  </span>
                </h1>

                {/* Subtitle / Core Triad */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base font-semibold text-[#102A1C]">
                  <span>Comfortable Living</span>
                  <span className="text-[#C5A059]">|</span>
                  <span>Safe Environment</span>
                  <span className="text-[#C5A059]">|</span>
                  <span className="text-[#8C6D2D]">Brighter Future</span>
                </div>

                {/* Lead Description */}
                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed max-w-xl font-sans">
                  At Ishanvi Hostel &amp; Accommodation, we provide a peaceful, secure, and thoughtfully managed sanctuary for students and working professionals right near ISMS Sankalp Business School, Ambegaon Bk, Pune.
                </p>

                {/* CTA Action Buttons */}
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenEnquiry('Homepage Hero')}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#102A1C] text-white text-xs sm:text-sm font-bold shadow-xl hover:bg-[#1B3B2B] hover:shadow-2xl hover:scale-[1.02] active:scale-98 transition-all cursor-pointer border border-[#DFB76C]/40 group"
                  >
                    <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 text-[#DFB76C] transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C] hover:bg-[#FAF8F5] text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-98"
                  >
                    <Phone className="w-4 h-4 text-[#C5A059]" />
                    <span>Call: {HOSTEL_INFO.phonePrimary}</span>
                  </a>

                  {onExploreRooms && (
                    <button
                      onClick={onExploreRooms}
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-bold text-[#102A1C] hover:text-[#8C6D2D] hover:bg-white/80 transition-all cursor-pointer"
                    >
                      <Bed className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Explore Rooms &rarr;</span>
                    </button>
                  )}
                </div>

                {/* Scholar Social Proof & Verification Bar */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <div className="flex items-center -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                      alt="Resident Scholar"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                      alt="Resident Scholar"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                      alt="Resident Scholar"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <div className="w-8 h-8 rounded-full bg-[#102A1C] text-[#DFB76C] text-[10px] font-bold flex items-center justify-center border-2 border-white">
                      +100
                    </div>
                  </div>

                  <div className="text-xs text-[#3E4A42]">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#DFB76C] text-[#DFB76C]" />
                      ))}
                      <span className="font-bold text-[#102A1C] ml-1">4.9 / 5.0</span>
                    </div>
                    <span className="text-[11px] text-[#5B6676]">
                      Trusted by scholars &amp; parents across Maharashtra
                    </span>
                  </div>
                </div>

                {/* 3 Pillar Trust Badges (Matching Screenshot 074022) */}
                <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg border-t border-[#EFEAE1]">
                  <div className="flex flex-col space-y-1">
                    <div className="w-8 h-8 rounded-full bg-white border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] shadow-2xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#102A1C] leading-snug">
                      Safe &amp; Secure
                    </span>
                    <span className="text-[11px] text-[#5B6676] leading-tight">
                      24/7 Guards &amp; CCTV
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <div className="w-8 h-8 rounded-full bg-white border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] shadow-2xs">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#102A1C] leading-snug">
                      Homely Community
                    </span>
                    <span className="text-[11px] text-[#5B6676] leading-tight">
                      Supportive Scholars
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <div className="w-8 h-8 rounded-full bg-white border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] shadow-2xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#102A1C] leading-snug">
                      Prime Location
                    </span>
                    <span className="text-[11px] text-[#5B6676] leading-tight">
                      ISMS Sankalp Gate
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual with Arched Border, 3D Gold Logo & Floating Cards */}
              <div className="lg:col-span-5 relative">
                {/* Main Image Framing with Luxury Gold Accents */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[5/4] bg-white group">
                  <img
                    src="/assets/images/hero_slide_resident_hd.jpg"
                    alt="Resident scholar in ISHANVI Hostel luxury reception lobby with 3D gold logo"
                    className="w-full h-full object-cover object-[75%_center] transition-transform duration-700 group-hover:scale-105"
                    fetchPriority="high"
                    loading="eager"
                  />

                  {/* Gradient shadow overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Location Label Inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EFEAE1] shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <div>
                        <span className="block text-xs font-bold text-[#102A1C]">
                          ISHANVI Residence &amp; Lobby
                        </span>
                        <span className="block text-[10px] text-[#5B6676]">
                          Near ISMS Sankalp · Ambegaon Bk
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab('showcase')}
                      className="px-2.5 py-1 rounded-full bg-[#102A1C] text-[#DFB76C] text-[10px] font-bold hover:bg-[#1B3B2B] transition-colors cursor-pointer"
                    >
                      View Rooms &rarr;
                    </button>
                  </div>
                </div>

                {/* Floating Micro-Card 1 (Top Left Overlapping): Authentic Furnished Room Preview */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  onClick={() => onOpenEnquiry('Single Room')}
                  className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-[#DFB76C]/50 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
                >
                  <img
                    src="/assets/images/room_single_auth.jpg"
                    alt="Authentic Room at ISHANVI"
                    className="w-11 h-11 rounded-xl object-cover border border-[#DFB76C]/40 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-bold text-[#102A1C]">
                        Furnished Rooms
                      </span>
                    </div>
                    <span className="text-[10px] text-[#5B6676]">
                      Orthopaedic Bed &amp; Wardrobe
                    </span>
                  </div>
                </motion.div>

                {/* Floating Micro-Card 2 (Bottom Right Overlapping): 24/7 Security Assurance */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-5 z-20 bg-[#102A1C] text-white rounded-2xl px-4 py-2.5 shadow-xl border border-[#DFB76C]/40 flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-[#DFB76C] text-[#102A1C] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#DFB76C]">24/7 Guarded Safety</p>
                    <p className="text-[10px] text-white/80">Warden &amp; CCTV Protected</p>
                  </div>
                </motion.div>

                {/* Background Ambient Radial Glow */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#DFB76C]/25 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
          )}

          {/* ===================================================================
              VIEW 2: FULL-WIDTH OFFICIAL SHOWCASE BANNER (2560x1280 NATURAL 2:1)
              - Displays the authentic property flyer with high-definition rooms,
                furniture, ceiling fans, wardrobes, and helpline
              =================================================================== */}
          {activeTab === 'showcase' && (
            <motion.div
              key="hero-showcase"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#DFB76C]/60 shadow-2xl bg-white group"
            >
              <div
                onClick={() => onOpenEnquiry('Verified Property Flyer')}
                className="relative w-full aspect-[2/1] min-h-[260px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px] xl:min-h-[580px] bg-[#FAF8F5] cursor-pointer overflow-hidden flex items-center justify-center"
                title="Click anywhere to enquire about ISHANVI rooms and admissions"
              >
                {/* 2560x1280 Full-Width Authentic Flyer Banner with contrast optimization */}
                <img
                  src="/assets/images/hero_slide_flyer.jpg"
                  alt="ISHANVI Hostel & Accommodation Official Facilities, Spacious Rooms and Helpline"
                  className="w-full h-full object-contain md:object-cover select-none transition-transform duration-700 group-hover:scale-[1.01]"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.02) brightness(1.01) saturate(1.03)',
                  }}
                  fetchPriority="high"
                  loading="eager"
                />

                {/* Floating Action Badge on Top Right */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-6 flex items-center gap-2">
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#102A1C]/90 text-[#DFB76C] text-xs font-bold border border-[#DFB76C]/40 backdrop-blur-md shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
                    <span>Verified Ambegaon Campus</span>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsBannerModalOpen(true);
                    }}
                    className="p-2 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white text-[#102A1C] text-xs font-bold shadow-md border border-[#EFEAE1] flex items-center gap-1.5 transition-all cursor-pointer"
                    title="Zoom Full Flyer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#8C6D2D]" />
                    <span className="hidden sm:inline">Inspect High-Res</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenEnquiry('Property Showcase Booking');
                    }}
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#102A1C] text-[#DFB76C] hover:bg-[#1B3B2B] text-xs font-bold shadow-xl border border-[#DFB76C]/50 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Book Tour</span>
                  </button>
                </div>

                {/* Bottom Overlay Hint */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/65 text-white text-[11px] backdrop-blur-md border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Click anywhere on banner to enquire directly for admissions</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 
          ========================================================================
          HERO CAROUSEL PROGRESS LINE & MANUAL PREV / NEXT ARROWS
          ========================================================================
        */}
        <div className="mt-4 flex items-center justify-between gap-4">
          {/* Subtle Progress Bar */}
          <div className="flex-1 max-w-xs h-[3px] bg-[#EFEAE1] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C5A059] via-[#DFB76C] to-[#C5A059]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Quick Manual Toggle Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTab}
              aria-label="Previous Hero View"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#102A1C] text-[#102A1C] hover:text-[#DFB76C] border border-[#EFEAE1] hover:border-[#102A1C] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono font-bold text-[#5B6676]">
              {activeTab === 'editorial' ? '01 / 02' : '02 / 02'}
            </span>
            <button
              onClick={toggleTab}
              aria-label="Next Hero View"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#102A1C] text-[#102A1C] hover:text-[#DFB76C] border border-[#EFEAE1] hover:border-[#102A1C] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 
          ========================================================================
          FLOATING 6-FEATURE AMENITY DOCK (MATCHING SCREENSHOT 074022 BOTTOM BAR)
          Elevated glassmorphic card resting on warm cream with gold-accented icons
          ========================================================================
        */}
        <div className="mt-6 sm:mt-8 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-[#EFEAE1]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {/* 1. Comfortable Rooms */}
            <button
              onClick={() => onOpenEnquiry('Comfortable Rooms')}
              className="flex flex-col items-center text-center p-2 rounded-2xl hover:bg-[#FAF8F5] transition-all group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] group-hover:scale-110 transition-all shadow-2xs mb-2">
                <Bed className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors leading-tight">
                Comfortable Rooms
              </h3>
              <p className="text-[11px] text-[#5B6676] mt-0.5">
                Single &amp; Sharing
              </p>
            </button>

            {/* 2. High-Speed Wi-Fi */}
            <button
              onClick={() => onOpenEnquiry('High-Speed Wi-Fi')}
              className="flex flex-col items-center text-center p-2 rounded-2xl hover:bg-[#FAF8F5] transition-all group cursor-pointer pt-3 sm:pt-2 sm:pl-3"
            >
              <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] group-hover:scale-110 transition-all shadow-2xs mb-2">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors leading-tight">
                High-Speed Wi-Fi
              </h3>
              <p className="text-[11px] text-[#5B6676] mt-0.5">
                Optical Fiber Internet
              </p>
            </button>

            {/* 3. Hygienic Meals */}
            <button
              onClick={() => onOpenEnquiry('Hygienic Meals')}
              className="flex flex-col items-center text-center p-2 rounded-2xl hover:bg-[#FAF8F5] transition-all group cursor-pointer pt-3 sm:pt-2 sm:pl-3"
            >
              <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] group-hover:scale-110 transition-all shadow-2xs mb-2">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors leading-tight">
                Hygienic Meals
              </h3>
              <p className="text-[11px] text-[#5B6676] mt-0.5">
                4 Homestyle Daily
              </p>
            </button>

            {/* 4. 24/7 Security */}
            <button
              onClick={() => onOpenEnquiry('24/7 Security')}
              className="flex flex-col items-center text-center p-2 rounded-2xl hover:bg-[#FAF8F5] transition-all group cursor-pointer pt-3 sm:pt-2 sm:pl-3"
            >
              <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] group-hover:scale-110 transition-all shadow-2xs mb-2">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors leading-tight">
                24/7 Security
              </h3>
              <p className="text-[11px] text-[#5B6676] mt-0.5">
                Guards, CCTV &amp; Warden
              </p>
            </button>

            {/* 5. Supportive Community */}
            <button
              onClick={() => onOpenEnquiry('Supportive Community')}
              className="flex flex-col items-center text-center p-2 rounded-2xl hover:bg-[#FAF8F5] transition-all group cursor-pointer pt-3 sm:pt-2 sm:pl-3"
            >
              <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] group-hover:scale-110 transition-all shadow-2xs mb-2">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors leading-tight">
                Supportive Community
              </h3>
              <p className="text-[11px] text-[#5B6676] mt-0.5">
                Scholars &amp; Pros
              </p>
            </button>

            {/* 6. Prime Location */}
            <button
              onClick={() => onOpenEnquiry('Prime Location')}
              className="flex flex-col items-center text-center p-2 rounded-2xl hover:bg-[#FAF8F5] transition-all group cursor-pointer pt-3 sm:pt-2 sm:pl-3"
            >
              <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] group-hover:scale-110 transition-all shadow-2xs mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors leading-tight">
                Prime Location
              </h3>
              <p className="text-[11px] text-[#5B6676] mt-0.5">
                Near ISMS Sankalp
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* FULL FLYER ZOOM MODAL */}
      {isBannerModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsBannerModalOpen(false)}
        >
          <div
            className="max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsBannerModalOpen(false)}
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
                  setIsBannerModalOpen(false);
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
    </div>
  );
};
