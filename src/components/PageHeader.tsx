import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  ShieldCheck,
  Utensils,
  Zap,
  Phone,
  MessageSquare,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';
import { LUXURY_EASE } from '../lib/motion';

interface PageHeaderProps {
  kicker: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  breadcrumb: string;
  imageSrc: string;
  imageAlt: string;
  onNavigateHome?: () => void;
  onOpenEnquiry?: (roomName?: string) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  titleAccent,
  subtitle,
  breadcrumb,
  imageSrc,
  imageAlt,
  onNavigateHome,
  onOpenEnquiry,
}) => {
  return (
    <section
      className="hero-shell"
      aria-label={`${breadcrumb} Hero Header`}
    >
      {/* HERO VIEWPORT CONTAINER — Unified Height Matching Home Hero Reference */}
      <div className="hero-viewport">
        {/* Background Photo with Ken Burns Settle & Strong Directional Contrast Scrim */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.img
            initial={{ scale: 1.05, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: LUXURY_EASE }}
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center select-none"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#05130B]/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040E08]/92 via-[#05130B]/55 to-[#040E08]/75" />
          </div>
        </div>

        {/* FOREGROUND EDITORIAL CONTENT LAYER — Center-Aligned Across All Subpages */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 my-auto">
          <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3 text-center">
            {/* Breadcrumb Trail */}
            <motion.nav
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.04, ease: LUXURY_EASE }}
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-1.5 text-xs font-medium text-slate-300"
            >
              <a
                href="/"
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
                className="hover:text-[#DFB76C] transition-colors"
              >
                Home
              </a>
              <ChevronRight className="w-3.5 h-3.5 text-[#DFB76C]/80 shrink-0" />
              <span className="text-[#DFB76C] font-semibold">{breadcrumb}</span>
            </motion.nav>

            <div className="space-y-2 sm:space-y-2.5">
              {/* Hairline Gold Kicker */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: LUXURY_EASE }}
                className="flex items-center justify-center gap-2 sm:gap-2.5"
              >
                <span className="w-5 sm:w-7 h-[1.5px] bg-[#DFB76C] shadow-[0_0_8px_#DFB76C] shrink-0" />
                <span className="hero-kicker">
                  {kicker}
                </span>
                <span className="w-5 sm:w-7 h-[1.5px] bg-[#DFB76C] shadow-[0_0_8px_#DFB76C] shrink-0" />
              </motion.div>

              {/* Unified H1 Display Title */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: LUXURY_EASE }}
                className="title-page text-white"
              >
                {title}
                {titleAccent && (
                  <>
                    {' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB76C] via-[#FFF3D6] to-[#E8C680] italic font-normal">
                      {titleAccent}
                    </span>
                  </>
                )}
              </motion.h1>

              {/* Unified Subtitle Typography */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25, ease: LUXURY_EASE }}
                className="hero-subtitle max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Unified Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease: LUXURY_EASE }}
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1"
            >
              {onOpenEnquiry && (
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenEnquiry(`${breadcrumb} Enquiry`)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#DFB76C] via-[#E8C680] to-[#DFB76C] text-[#051009] text-xs sm:text-sm font-bold shadow-[0_4px_20px_rgba(223,183,108,0.35)] hover:shadow-[0_8px_28px_rgba(223,183,108,0.45)] transition-shadow cursor-pointer min-h-[44px] group"
                >
                  <MessageSquare className="w-4 h-4 text-[#051009]" />
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#051009] transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
              )}

              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-black/60 hover:bg-[#102A1C] text-white border border-[#DFB76C]/60 hover:border-[#DFB76C] text-xs sm:text-sm font-semibold backdrop-blur-md shadow-md transition-colors cursor-pointer min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#DFB76C]" />
                <span>Call: {HOSTEL_INFO.phonePrimary}</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* UNIFIED BOTTOM CREAM STRIP matching Home Hero */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.36, ease: LUXURY_EASE }}
        className="relative z-20 w-full bg-[#FAF8F5] border-t border-[#DFB76C]/30 text-[#102A1C] py-2 sm:py-2.5 px-3 sm:px-6 lg:px-8 shadow-md shrink-0"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex-1 flex items-center justify-start md:justify-center lg:justify-start gap-1.5 sm:gap-3 md:gap-4 text-xs sm:text-sm font-semibold text-[#102A1C] overflow-x-auto no-scrollbar scroll-smooth touch-pan-x py-0.5">
            {[
              { Icon: MapPin, label: '100m to ISMS Sankalp' },
              { Icon: ShieldCheck, label: '24/7 Guarded Security' },
              { Icon: Utensils, label: '4 Fresh Daily Meals' },
              { Icon: Zap, label: '100% Power & Wi-Fi' },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white border border-[#EFEAE1] text-[#102A1C] text-[11px] sm:text-xs font-semibold whitespace-nowrap shrink-0 shadow-2xs"
              >
                <Icon className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a
            href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
            className="text-xs font-bold text-[#102A1C] hover:text-[#8C6D2D] transition-colors flex items-center gap-1.5 shrink-0 whitespace-nowrap hidden sm:flex"
            title="Call Admissions Reception"
          >
            <span>Call Admissions:</span>
            <span className="font-mono text-[#8C6D2D]">{HOSTEL_INFO.phonePrimary}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
