import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  MapPin,
  ShieldCheck,
  Utensils,
  Zap,
  Phone,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';
import { LUXURY_EASE } from '../lib/motion';

interface PageHeaderProps {
  kicker: string;
  title: string;
  subtitle: string;
  onOpenEnquiry?: (roomName?: string) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  subtitle,
  onOpenEnquiry,
}) => {
  return (
    <div className="relative w-full bg-[#08170E] text-white overflow-hidden select-none border-b border-white/10">
      {/* Cinematic Ambient Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.img
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
          src="/assets/images/hero_ishanvi_facade_1793879538556.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          decoding="async"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08170E] via-[#08170E]/80 to-[#08170E]/55" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DFB76C]/12 rounded-full blur-3xl pointer-events-none animate-float-ambient" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] flex flex-col items-center justify-center text-center">
        {/* Animated Headline & Subhead */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="max-w-3xl space-y-3 [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]"
        >
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DFB76C]/15 border border-[#DFB76C]/35 backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span className="text-[11px] sm:text-xs font-bold text-[#E8C47E] tracking-[0.12em] sm:tracking-[0.16em] uppercase font-sans">
              {kicker}
            </span>
          </div>

          {/* Page Display Title - Harmonized with site heading scale */}
          <h1 className="title-page text-white drop-shadow-md">
            {title}
          </h1>

          {/* High-Contrast Clear Description */}
          <p className="text-lead text-white/95 max-w-2xl mx-auto font-sans font-normal">
            {subtitle}
          </p>

          {/* Interactive CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {onOpenEnquiry && (
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenEnquiry(title)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#DFB76C] hover:bg-[#EAC885] text-[#08170E] text-xs sm:text-sm font-bold shadow-lg transition-colors cursor-pointer min-h-[42px] group"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#08170E]" />
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
            )}

            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-black/35 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/25 hover:border-[#DFB76C]/60 backdrop-blur-md transition-colors min-h-[42px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFB76C]" />
              <span>Call: {HOSTEL_INFO.phonePrimary}</span>
            </motion.a>
          </div>
        </motion.div>

        {/* 4 Feature Badges at Bottom of Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: LUXURY_EASE }}
          className="mt-7 sm:mt-9 pt-5 border-t border-white/15 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-left"
        >
          {[
            { Icon: MapPin, title: '100m to ISMS', sub: 'Ambegaon Bk, Pune' },
            { Icon: ShieldCheck, title: '24/7 Security', sub: 'CCTV & Wardens' },
            { Icon: Utensils, title: '4 Fresh Meals', sub: 'Hygienic Dining' },
            { Icon: Zap, title: '100% Backup', sub: 'Power & Wi-Fi Uptime' },
          ].map(({ Icon, title: itemTitle, sub }) => (
            <motion.div
              key={itemTitle}
              whileHover={{ y: -2, borderColor: 'rgba(223,183,108,0.45)' }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2.5 bg-black/30 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/10 transition-colors"
            >
              <Icon className="w-4 h-4 text-[#DFB76C] shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-white leading-tight truncate">{itemTitle}</p>
                <p className="text-[10px] sm:text-[11px] text-white/80 truncate">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
