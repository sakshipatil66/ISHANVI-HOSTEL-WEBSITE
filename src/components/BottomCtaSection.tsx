import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface BottomCtaSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  centered?: boolean;
}

export const BottomCtaSection: React.FC<BottomCtaSectionProps> = ({
  onOpenEnquiry,
  centered = false,
}) => {
  return (
    <section className="py-8 sm:py-12 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none animate-float-ambient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Exact Bottom Card from Reference Screenshot with Motion Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.65, ease: LUXURY_EASE }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FAF6ED] via-[#F4EFE6] to-[#EAE3D2] border border-[#EFEAE1] shadow-xl p-5 sm:p-8 lg:p-10"
        >
          {/* Subtle spinning gold accent in corner */}
          <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full border border-[#DFB76C]/30 animate-aura-slow pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full border border-[#DFB76C]/20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Heading, Subtitle, Enquire Button */}
            <div className={`lg:col-span-7 space-y-4 ${centered ? 'text-center' : ''}`}>
              <div className={`kicker-label ${centered ? 'justify-center' : ''}`}>
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>RESERVE YOUR SANCTUARY</span>
                {centered && <span className="w-5 h-[1.5px] bg-[#C5A059]" />}
              </div>

              <h2 className="heading-section text-[#102A1C]">
                Start Your Better <br />
                Tomorrow With ISHANVI
              </h2>

              <p className={`text-lead ${centered ? 'mx-auto' : ''}`}>
                {HOSTEL_INFO.tagline} — Secure, serene and well-managed student accommodation walking distance from ISMS Sankalp Business School, Ambegaon Bk, Pune.
              </p>

              {/* Verified Trust Badges */}
              <div className={`flex flex-wrap items-center gap-3 pt-1 text-xs text-[#102A1C] font-semibold ${centered ? 'justify-center' : ''}`}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E2D9C8] shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" /> 24x7 In-House Warden
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E2D9C8] shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" /> High-Speed Wi-Fi
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E2D9C8] shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" /> 4 Hot Meals Daily
                </span>
              </div>

              <div className={`pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 ${centered ? 'justify-center' : ''}`}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenEnquiry('Final CTA Booking')}
                  className="btn-primary group cursor-pointer w-full xs:w-auto"
                >
                  <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="btn-secondary w-full xs:w-auto"
                >
                  <Phone className="w-4 h-4 text-[#A88238]" />
                  <span>Call {HOSTEL_INFO.phonePrimary}</span>
                </motion.a>
              </div>
            </div>

            {/* Right Column: Room Photo with Floating Badge & Hover Lift */}
            <div className="lg:col-span-5 relative">
              {/* Floating Admissions Open Badge */}
              <div className="absolute top-2.5 left-2.5 sm:-top-3.5 sm:-left-4 z-20 animate-float-slow">
                <div className="bg-[#102A1C] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-lg border border-[#DFB76C]/40 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
                  <span>Admissions Open · New Term</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT_CONFIG}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.55, ease: LUXURY_EASE }}
                className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-white group cursor-pointer"
              >
                <img
                  src="/assets/ref/cta_room.jpg"
                  alt="Cozy room at ISHANVI"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Official Contact & Location Banner Strip matching Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, delay: 0.12, ease: LUXURY_EASE }}
          className={`mt-6 sm:mt-8 bg-[#102A1C] rounded-2xl p-5 sm:p-8 text-white flex flex-col md:flex-row gap-5 sm:gap-6 shadow-xl border border-[#DFB76C]/30 relative overflow-hidden ${
            centered
              ? 'items-center justify-center md:justify-around text-center'
              : 'items-start md:items-center justify-between'
          }`}
        >
          {/* Subtle pulse background aura */}
          <div className="absolute right-0 top-0 w-48 h-48 bg-[#DFB76C]/10 rounded-full blur-2xl pointer-events-none" />

          <div className={`flex items-center gap-4 relative z-10 ${centered ? 'flex-col sm:flex-row text-center sm:text-left md:flex-col md:text-center lg:flex-row lg:text-center' : ''}`}>
            <div className="w-12 h-12 rounded-full bg-[#DFB76C] text-[#102A1C] flex items-center justify-center shrink-0 shadow-md animate-pulse-glow">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#DFB76C] font-semibold uppercase tracking-wider">
                Call Now for Enquiry
              </p>
              <a
                href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                className="text-xl sm:text-2xl font-serif font-bold text-white hover:text-[#DFB76C] transition-colors"
              >
                {HOSTEL_INFO.phonePrimary}
              </a>
            </div>
          </div>

          <div className={`flex items-center gap-3 relative z-10 ${centered ? 'flex-col text-center' : 'text-left'}`}>
            <MapPin className="w-5 h-5 text-[#DFB76C] shrink-0" />
            <div className="text-xs text-slate-200">
              <p className="font-semibold text-white">Campus Location</p>
              <p>{HOSTEL_INFO.address}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

