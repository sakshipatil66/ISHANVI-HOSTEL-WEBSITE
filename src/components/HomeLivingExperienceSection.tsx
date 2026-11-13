import React from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed, Sun, Zap, Sparkles } from 'lucide-react';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

const MEAL_TIMINGS = [
  { meal: 'Breakfast & Hot Chai', time: '7:30 AM – 9:30 AM' },
  { meal: 'Homestyle Lunch', time: '12:30 PM – 2:30 PM' },
  { meal: 'Evening High-Tea & Snacks', time: '5:00 PM – 6:30 PM' },
  { meal: 'Fresh Dinner', time: '8:00 PM – 10:00 PM' },
];

const LIVING_HIGHLIGHTS = [
  {
    Icon: Sparkles,
    title: 'Daily Housekeeping & Linen Care',
    desc: 'Corridors, rooms, and washrooms are cleaned daily with weekly fresh linen changes.',
  },
  {
    Icon: Zap,
    title: '100% Power Backup & Optical Fiber',
    desc: 'Uninterrupted electricity and high-speed Wi-Fi keep study lights and laptops running.',
  },
  {
    Icon: Sun,
    title: 'Quiet Floors & Rooftop Terrace',
    desc: 'Sound-conscious corridors for focused study alongside an open terrace to unwind.',
  },
];

const SPACE_PHOTOS = [
  {
    src: '/assets/images/community_terrace_hd_1793946912508.jpg',
    alt: 'Open rooftop community terrace at ISHANVI Hostel Pune',
    label: 'Rooftop Terrace',
    caption: 'Breezy open space to relax after evening hours',
  },
  {
    src: '/assets/images/hero_room_clean_hd.jpg',
    alt: 'Clean sunlit bedroom interior at ISHANVI Hostel',
    label: 'Spotless Upkeep',
    caption: 'Orthopaedic beds, natural daylight & daily cleaning',
  },
  {
    src: '/assets/images/amenity_dining_hall_1793879543322.jpg',
    alt: 'Sanitized pure-vegetarian dining hall at ISHANVI Hostel',
    label: 'Hygienic Dining Hall',
    caption: 'Sanitized kitchen serving 4 fresh homestyle meals daily',
  },
];

export const HomeLivingExperienceSection: React.FC = () => {
  return (
    <section className="section-space bg-[#F4EFE6]/65 border-y border-[#EFEAE1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="text-center max-w-2xl mx-auto mb-7 sm:mb-9 space-y-2"
        >
          <div className="kicker-label justify-center">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>LIVING EXPERIENCE &amp; DINING</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Thoughtful Daily Care, Cleanliness &amp; Meals
          </h2>
          <p className="text-lead">
            Every essential—from fresh vegetarian kitchen schedules to daily sanitation and backup power—is managed in-house.
          </p>
        </motion.div>

        {/* Balanced 3-Card Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-6">
          {SPACE_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: LUXURY_EASE }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl overflow-hidden aspect-[16/10] max-h-[210px] border-4 border-white shadow-md bg-[#0E2016] group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15 pointer-events-none" />
              <div className="absolute bottom-3.5 left-4 right-4 text-white z-10 text-on-photo">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#DFB76C]">
                  {photo.label}
                </p>
                <p className="font-serif text-sm sm:text-base font-bold mt-0.5 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Compact Equal Upkeep Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-6">
          {LIVING_HIGHLIGHTS.map(({ Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.48, delay: idx * 0.07, ease: LUXURY_EASE }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EFEAE1] hover:border-[#DFB76C]/80 hover:shadow-sm transition-all flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-[#8C6D2D] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="heading-card text-sm sm:text-base text-[#102A1C]">{title}</h3>
                <p className="text-body-sm text-[#4A5568] leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Pure-Veg Meal Schedule Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.55, delay: 0.08, ease: LUXURY_EASE }}
          className="bg-[#102A1C] text-white rounded-2xl p-4 sm:p-5 border border-[#DFB76C]/30 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[#DFB76C]/15 border border-[#DFB76C]/40 text-[#DFB76C] flex items-center justify-center shrink-0">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#DFB76C]">
                  Daily Pure-Veg Kitchen
                </p>
                <p className="font-serif text-base sm:text-lg font-bold text-white">
                  4 Fresh Meals Served Daily
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 flex-1">
              {MEAL_TIMINGS.map((item) => (
                <div
                  key={item.meal}
                  className="bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 space-y-0.5"
                >
                  <p className="text-xs font-semibold text-[#EAE3D2]">{item.meal}</p>
                  <p className="text-xs font-mono font-bold text-[#DFB76C] tabular-nums">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
