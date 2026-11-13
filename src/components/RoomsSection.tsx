import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bed,
  Users,
  Crown,
  ArrowRight,
  MessageSquare,
  Check,
  Sparkles,
  Maximize2,
  X,
  Phone,
} from 'lucide-react';
import { ROOMS_DATA, RoomItem } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface RoomsSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onViewAllRooms?: () => void;
  isStandalonePage?: boolean;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onOpenEnquiry,
  onViewAllRooms,
  isStandalonePage = false,
}) => {
  const [inspectingRoom, setInspectingRoom] = useState<RoomItem | null>(null);

  useEffect(() => {
    if (!inspectingRoom) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspectingRoom(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectingRoom]);

  const getRoomIcon = (type: string) => {
    switch (type) {
      case 'bed':
        return <Bed className="w-5 h-5 text-[#C5A059]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#C5A059]" />;
      case 'crown':
        return <Crown className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Bed className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  // Fine-tuned individual object positioning to keep beds, wardrobes, and windows in optimal view
  const getRoomObjectPosition = (id: string) => {
    switch (id) {
      case 'single-room':
        return 'object-center';
      case 'sharing-room':
        return 'object-[center_38%]';
      case 'premium-room':
        return 'object-[center_42%]';
      default:
        return 'object-center';
    }
  };

  // DEDICATED ROOMS PAGE WITH EXPANDED SPECS & FULL-VISIBILITY PHOTOGRAPHS
  if (isStandalonePage) {
    return (
      <section className="section-space-lg bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 lg:space-y-16">
          {/* Room 1: Single Room (Image on Left, Rich Specs on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center bg-white p-4 sm:p-7 lg:p-10 rounded-3xl border border-[#EFEAE1] shadow-md hover:shadow-xl hover:border-[#DFB76C]/60 transition-all duration-300 w-full overflow-hidden"
          >
            <div className="lg:col-span-5 w-full min-w-0 space-y-3">
              {/* Spacious Proportionate Image Container - Zero Cut-off & Zero Horizontal Overlap */}
              <div
                onClick={() => setInspectingRoom(ROOMS_DATA[0])}
                className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#EFEAE1] aspect-[4/3] sm:aspect-[16/11] max-h-[380px] w-full bg-[#FAF8F5] group cursor-pointer"
              >
                <img
                  src={ROOMS_DATA[0].image}
                  alt="Furnished Single Room with private study desk and wooden wardrobe at ISHANVI Hostel Ambegaon Bk Pune"
                  className={`w-full h-full object-cover ${getRoomObjectPosition(ROOMS_DATA[0].id)} transition-transform duration-500 group-hover:scale-105`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#5B6676] px-1">
                <span>Natural Daylight &amp; Private Study Desk</span>
                <span className="font-semibold text-[#102A1C]">Private Lock &amp; Wardrobe</span>
              </div>
            </div>

            <div className="lg:col-span-7 w-full min-w-0 space-y-5">
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>{ROOMS_DATA[0].kicker}</span>
              </div>
              <div>
                <h2 className="heading-section text-[#102A1C]">
                  {ROOMS_DATA[0].name}
                </h2>
                <p className="text-lead text-[#4A5568] mt-2">
                  {ROOMS_DATA[0].description}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[11px] text-[#5B6676] uppercase font-bold">Area</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[0].dimensions}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[11px] text-[#5B6676] uppercase font-bold">Occupancy</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[0].occupancy}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[11px] text-[#5B6676] uppercase font-bold">Bathroom</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">Attached / Private</p>
                </div>
              </div>

              {/* Room Furnishings List */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-[#102A1C] uppercase tracking-wider">Room Furnishings & Features:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROOMS_DATA[0].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A5568]">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#EFEAE1] flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs italic text-[#5B6676]">
                  {ROOMS_DATA[0].priceNote}
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenEnquiry(ROOMS_DATA[0].name)}
                    className="btn-primary !py-2.5 !px-5 text-xs text-center justify-center min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/917767058988?text=${encodeURIComponent(`Hello ISHANVI, I would like to inquire about Single Room pricing and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#FAF8F5] text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C] text-xs font-semibold transition-colors flex items-center justify-center min-h-[44px]"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Room 2: Double / Sharing Room (Specs on Left, Image on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center bg-white p-4 sm:p-7 lg:p-10 rounded-3xl border border-[#EFEAE1] shadow-md hover:shadow-xl hover:border-[#DFB76C]/60 transition-all duration-300 w-full overflow-hidden"
          >
            <div className="lg:col-span-7 w-full min-w-0 order-2 lg:order-1 space-y-5">
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>{ROOMS_DATA[1].kicker}</span>
              </div>
              <div>
                <h2 className="heading-section text-[#102A1C]">
                  {ROOMS_DATA[1].name}
                </h2>
                <p className="text-lead text-[#4A5568] mt-2">
                  {ROOMS_DATA[1].description}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[11px] text-[#5B6676] uppercase font-bold">Area</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[1].dimensions}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[11px] text-[#5B6676] uppercase font-bold">Occupancy</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[1].occupancy}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[11px] text-[#5B6676] uppercase font-bold">Bathroom</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">Attached Bath</p>
                </div>
              </div>

              {/* Room Furnishings List */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-[#102A1C] uppercase tracking-wider">Room Furnishings &amp; Features:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROOMS_DATA[1].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A5568]">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#EFEAE1] flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs italic text-[#5B6676]">
                  {ROOMS_DATA[1].priceNote}
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenEnquiry(ROOMS_DATA[1].name)}
                    className="btn-primary !py-2.5 !px-5 text-xs text-center justify-center min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/917767058988?text=${encodeURIComponent(`Hello ISHANVI, I would like to inquire about Double / Sharing Room pricing and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#FAF8F5] text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C] text-xs font-semibold transition-colors flex items-center justify-center min-h-[44px]"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 w-full min-w-0 order-1 lg:order-2 space-y-3">
              {/* Spacious Proportionate Image Container - Complete Twin Bed View */}
              <div
                onClick={() => setInspectingRoom(ROOMS_DATA[1])}
                className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#EFEAE1] aspect-[4/3] sm:aspect-[16/11] max-h-[380px] w-full bg-[#FAF8F5] group cursor-pointer"
              >
                <img
                  src={ROOMS_DATA[1].image}
                  alt="Furnished Double Sharing Twin Room layout at ISHANVI Hostel Ambegaon Bk Pune"
                  className={`w-full h-full object-cover ${getRoomObjectPosition(ROOMS_DATA[1].id)} transition-transform duration-500 group-hover:scale-105`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#5B6676] px-1">
                <span>Both Beds, Headboards &amp; Wardrobes Fully Visible</span>
                <span className="font-semibold text-[#102A1C]">Separate Wooden Units</span>
              </div>
            </div>
          </motion.div>

          {/* Room 3: Premium Room (Image on Left, Specs on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center bg-white p-4 sm:p-7 lg:p-10 rounded-3xl border border-[#EFEAE1] shadow-md hover:shadow-xl hover:border-[#DFB76C]/60 transition-all duration-300 w-full overflow-hidden"
          >
            <div className="lg:col-span-5 w-full min-w-0 space-y-3">
              {/* Spacious Proportionate Image Container - Complete Premium Room Perspective */}
              <div
                onClick={() => setInspectingRoom(ROOMS_DATA[2])}
                className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#EFEAE1] aspect-[4/3] sm:aspect-[16/11] max-h-[380px] w-full bg-[#FAF8F5] group cursor-pointer"
              >
                <img
                  src={ROOMS_DATA[2].image}
                  alt="Executive Premium Room Suite with attached bath, ergonomic study desk, and wooden wardrobe at ISHANVI Hostel Ambegaon Bk Pune"
                  className={`w-full h-full object-cover ${getRoomObjectPosition(ROOMS_DATA[2].id)} transition-transform duration-500 group-hover:scale-105`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#5B6676] px-1">
                <span className="font-semibold text-[#102A1C]">Extra Space &amp; Ventilation</span>
              </div>
            </div>

            <div className="lg:col-span-7 w-full min-w-0 space-y-5">
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>{ROOMS_DATA[2].kicker}</span>
              </div>
              <div>
                <h2 className="heading-section text-[#102A1C]">
                  {ROOMS_DATA[2].name}
                </h2>
                <p className="text-lead text-[#4A5568] mt-2">
                  {ROOMS_DATA[2].description}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[11px] text-[#5B6676] uppercase font-bold">Area</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[2].dimensions}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[11px] text-[#5B6676] uppercase font-bold">Occupancy</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[2].occupancy}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[11px] text-[#5B6676] uppercase font-bold">Bathroom</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">Luxury Bath</p>
                </div>
              </div>

              {/* Room Furnishings List */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-[#102A1C] uppercase tracking-wider">Room Furnishings & Features:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROOMS_DATA[2].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A5568]">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#EFEAE1] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <p className="text-xs italic text-[#5B6676]">
                  {ROOMS_DATA[2].priceNote}
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenEnquiry(ROOMS_DATA[2].name)}
                    className="btn-primary !py-2.5 !px-5 text-xs justify-center min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/917767058988?text=${encodeURIComponent(`Hello ISHANVI, I would like to inquire about Premium Room pricing and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#FAF8F5] text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C] text-xs font-semibold transition-colors flex items-center justify-center min-h-[44px]"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Informational Section: What is Included with Every Room */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
            className="rounded-3xl bg-[#FAF8F5] border border-[#EFEAE1] p-5 sm:p-10 lg:p-14 space-y-8 sm:space-y-10"
          >
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="kicker-label justify-center mb-1">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>TRANSPARENT AMENITIES</span>
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              </div>
              <h2 className="heading-section text-[#102A1C]">What's Included In Every Room Stay</h2>
              <p className="text-lead text-sm sm:text-base text-[#5B6676]">
                All our rooms come with an all-inclusive package so scholars and parents face zero hidden expenses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  emoji: '🍽️',
                  title: '4 Homestyle Meals',
                  desc: 'Breakfast with tea, wholesome lunch, evening snacks & high-tea, and hot balanced dinner prepared fresh daily.',
                },
                {
                  emoji: '⚡',
                  title: 'Power & Wi-Fi Backup',
                  desc: 'High-speed optical fiber internet across all rooms, supported by 100% generator power backup for study lamps and fans.',
                },
                {
                  emoji: '🧹',
                  title: 'Daily Housekeeping',
                  desc: 'Regular room sweeping, mopping, trash clearance, and washroom sanitation handled diligently by professional staff.',
                },
                {
                  emoji: '🛡️',
                  title: '24/7 Security & Warden',
                  desc: 'Round-the-clock security guards at gates, continuous CCTV monitoring in corridors, and on-premise caring wardens.',
                },
              ].map((inc, idx) => (
                <motion.div
                  key={inc.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.48, delay: idx * 0.08, ease: LUXURY_EASE }}
                  whileHover={{ y: -4 }}
                  className="p-5 bg-white rounded-2xl border border-[#EFEAE1] hover:border-[#DFB76C]/80 hover:shadow-md transition-all duration-300 shadow-2xs space-y-2"
                >
                  <div className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center font-bold text-sm">
                    {inc.emoji}
                  </div>
                  <h3 className="heading-card text-sm sm:text-base text-[#102A1C]">{inc.title}</h3>
                  <p className="text-xs text-[#5B6676] leading-relaxed">{inc.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FULL IMAGE INSPECTION LIGHTBOX MODAL */}
        <AnimatePresence>
          {inspectingRoom && (
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
              onClick={() => setInspectingRoom(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 10 }}
                transition={{ duration: 0.28, ease: LUXURY_EASE }}
                className="max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setInspectingRoom(null)}
                  aria-label="Close image inspection"
                  className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-white/25 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black max-h-[75vh] flex items-center justify-center">
                  <img
                    src={inspectingRoom.image}
                    alt={inspectingRoom.name}
                    className="max-w-full max-h-[75vh] object-contain rounded-2xl select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-white px-2 text-center sm:text-left">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#DFB76C]">
                      {inspectingRoom.name} — Authentic High-Resolution Photography
                    </h3>
                    <p className="text-white/75 text-xs font-sans">
                      {inspectingRoom.dimensions} · {inspectingRoom.tagline} · Ambegaon Bk, Pune
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      const name = inspectingRoom.name;
                      setInspectingRoom(null);
                      onOpenEnquiry(name);
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#DFB76C] text-[#0E2016] text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 min-h-[42px] shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire for this Room</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }

  // HOMEPAGE 3-CARD LAYOUT (MATCHING SCREENSHOT WITH FIXED PROPORTIONS & ZERO CUT-OFF)
  return (
    <section id="rooms" className="section-space bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4"
        >
          <div>
            <div className="kicker-label mb-2">
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              <span>OUR ROOMS</span>
            </div>
            <h2 className="heading-section text-[#102A1C]">
              Rooms Designed <br className="hidden sm:block" />
              For Your Comfort
            </h2>
          </div>

          {onViewAllRooms && (
            <button
              onClick={onViewAllRooms}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102A1C] hover:text-[#C5A059] transition-colors cursor-pointer group self-start sm:self-auto"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          )}
        </motion.div>

        {/* 3 Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ROOMS_DATA.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.55, delay: idx * 0.09, ease: LUXURY_EASE }}
              whileHover={{ y: -6 }}
              onClick={() => onOpenEnquiry(room.name)}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-[#DFB76C]/80 transition-all duration-300 border border-[#EFEAE1] group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5]">
                <img
                  src={room.image}
                  alt={`${room.name} fully furnished accommodation with bed, study desk and wooden wardrobe at ISHANVI Hostel Ambegaon Pune`}
                  className={`w-full h-full object-cover ${getRoomObjectPosition(room.id)} transition-transform duration-700 ease-out group-hover:scale-105`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Card Footer Bar */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white border-t border-[#EFEAE1]/60">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center shrink-0 group-hover:bg-[#102A1C] group-hover:text-white transition-colors duration-300">
                    {getRoomIcon(room.iconType)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="heading-card text-[#102A1C] group-hover:text-[#1B3B2B] transition-colors truncate">
                      {room.name}
                    </h3>
                    <p className="text-caption mt-0.5 truncate">{room.tagline}</p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#102A1C] transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULL IMAGE INSPECTION LIGHTBOX MODAL */}
      <AnimatePresence>
        {inspectingRoom && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setInspectingRoom(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.28, ease: LUXURY_EASE }}
              className="max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setInspectingRoom(null)}
                aria-label="Close image inspection"
                className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-white/25 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black max-h-[75vh] flex items-center justify-center">
                <img
                  src={inspectingRoom.image}
                  alt={inspectingRoom.name}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-white px-2 text-center sm:text-left">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#DFB76C]">
                    {inspectingRoom.name} — Authentic High-Resolution Photography
                  </h3>
                  <p className="text-white/75 text-xs font-sans">
                    {inspectingRoom.dimensions} · {inspectingRoom.tagline} · Ambegaon Bk, Pune
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    const name = inspectingRoom.name;
                    setInspectingRoom(null);
                    onOpenEnquiry(name);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#DFB76C] text-[#0E2016] text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 min-h-[42px] shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire for this Room</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
