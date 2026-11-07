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
        <img
          src="/assets/images/hero_ishanvi_facade_1793879538556.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-45"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08170E] via-[#08170E]/80 to-[#08170E]/55" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 flex flex-col items-center text-center">
        {/* Animated Headline & Subhead */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl space-y-4 [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]"
        >
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DFB76C]/15 border border-[#DFB76C]/35 backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span className="text-[11px] sm:text-xs font-bold text-[#E8C47E] tracking-[0.12em] sm:tracking-[0.16em] uppercase font-sans">
              {kicker}
            </span>
          </div>

          {/* Page Display Title */}
          <h1 className="font-serif text-[1.75rem] sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            {title}
          </h1>

          {/* High-Contrast Clear Description */}
          <p className="text-sm sm:text-base text-white/95 leading-relaxed max-w-2xl mx-auto font-sans font-normal">
            {subtitle}
          </p>

          {/* Interactive CTAs */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            {onOpenEnquiry && (
              <button
                onClick={() => onOpenEnquiry(title)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DFB76C] hover:bg-[#EAC885] text-[#08170E] text-xs sm:text-sm font-bold shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#08170E]" />
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/35 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/25 backdrop-blur-md transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFB76C]" />
              <span>Call: {HOSTEL_INFO.phonePrimary}</span>
            </a>
          </div>
        </motion.div>

        {/* 4 Feature Badges at Bottom of Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-12 pt-6 border-t border-white/15 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-left"
        >
          <div className="flex items-center gap-2.5 bg-black/25 backdrop-blur-sm p-2.5 rounded-xl border border-white/10">
            <MapPin className="w-4 h-4 text-[#DFB76C] shrink-0" />
            <div>
              <p className="text-[11px] font-bold text-white leading-tight">100m to ISMS</p>
              <p className="text-[11px] text-white/85">Ambegaon Bk, Pune</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/25 backdrop-blur-sm p-2.5 rounded-xl border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#DFB76C] shrink-0" />
            <div>
              <p className="text-[11px] font-bold text-white leading-tight">24/7 Security</p>
              <p className="text-[11px] text-white/85">CCTV & Wardens</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/25 backdrop-blur-sm p-2.5 rounded-xl border border-white/10">
            <Utensils className="w-4 h-4 text-[#DFB76C] shrink-0" />
            <div>
              <p className="text-[11px] font-bold text-white leading-tight">4 Fresh Meals</p>
              <p className="text-[11px] text-white/85">Hygienic Dining</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/25 backdrop-blur-sm p-2.5 rounded-xl border border-white/10">
            <Zap className="w-4 h-4 text-[#DFB76C] shrink-0" />
            <div>
              <p className="text-[11px] font-bold text-white leading-tight">100% Backup</p>
              <p className="text-[11px] text-white/85">Power & High-Speed Wi-Fi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
