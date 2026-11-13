import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface HomeResidentProfilesSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
}

const RESIDENT_TRACKS = [
  {
    id: 'students',
    kicker: 'FOR STUDENTS & ASPIRANTS',
    title: 'Focused Academic Living',
    subtitle: 'Ideal for scholars at ISMS Sankalp Business School, Sinhgad Campus, and nearby Pune colleges.',
    Icon: GraduationCap,
    image: '/assets/images/hero_student_clean_hd.jpg',
    imageAlt: 'Students studying and thriving at ISHANVI Hostel Pune',
    points: [
      '1-minute walk to ISMS Sankalp Business School gates',
      'Quiet study spaces and ergonomic room workstations',
      'Supportive circle of MBA, engineering & college peers',
    ],
    ctaLabel: 'Enquire for Student Stay',
    ctaTarget: 'Student Accommodation Enquiry',
  },
  {
    id: 'professionals',
    kicker: 'FOR WORKING PROFESSIONALS',
    title: 'Zero-Chore Workweek Retreat',
    subtitle: 'Designed for young professionals seeking quiet rest, reliable connectivity, and clean meals in Pune.',
    Icon: Briefcase,
    image: '/assets/images/room_premium_auth.jpg',
    imageAlt: 'Spacious furnished room for working professionals at ISHANVI',
    points: [
      'Private Single & Premium room options for calm evenings',
      'On-site laundry access and daily housekeeping care',
      'Quick access to Ambegaon stops & Katraj transit routes',
    ],
    ctaLabel: 'Enquire for Professional Stay',
    ctaTarget: 'Working Professional Accommodation',
  },
  {
    id: 'families',
    kicker: 'PARENT-TRUSTED CAMPUS STAY',
    title: 'Peace of Mind for Families',
    subtitle: 'Structured safety, transparent warden support, and daily nutrition for outstation residents.',
    Icon: ShieldCheck,
    image: '/assets/images/amenity_security_lobby_1793879543609.jpg',
    imageAlt: '24/7 guarded reception and family visiting lounge at ISHANVI Hostel',
    points: [
      '24×7 guarded gates, CCTV coverage & visitor logging',
      '4 fresh homestyle pure-vegetarian meals cooked daily',
      'Direct warden helpline & dedicated parent visiting lounge',
    ],
    ctaLabel: 'Schedule Family Visit',
    ctaTarget: 'Parent & Family Visit Enquiry',
  },
];

export const HomeResidentProfilesSection: React.FC<HomeResidentProfilesSectionProps> = ({
  onOpenEnquiry,
}) => {
  return (
    <section className="section-space bg-[#102A1C] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[220px] bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none animate-float-ambient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="text-center max-w-3xl mx-auto mb-7 sm:mb-9 space-y-2"
        >
          <div className="kicker-label justify-center text-[#DFB76C]">
            <span className="w-5 h-[1.5px] bg-[#DFB76C]" />
            <span>TAILORED TO YOUR ROUTINE</span>
            <span className="w-5 h-[1.5px] bg-[#DFB76C]" />
          </div>
          <h2 className="heading-section text-white">
            Ideal for Students &amp; Working Professionals
          </h2>
          <p className="text-lead text-[#CBD5E0]">
            Whether you are pursuing management and technical degrees, building your career in Pune, or seeking parent-trusted outstation stay, every routine is supported smoothly.
          </p>
        </motion.div>

        {/* Responsive 3-Card Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {RESIDENT_TRACKS.map((track, idx) => {
            const { Icon } = track;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: LUXURY_EASE }}
                whileHover={{ y: -4 }}
                className={`bg-[#143322] rounded-3xl overflow-hidden border border-[#DFB76C]/25 hover:border-[#DFB76C]/60 shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] max-h-[195px] w-full overflow-hidden bg-[#0E2016]">
                    <img
                      src={track.image}
                      alt={track.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2316] via-[#0D2316]/60 to-black/25 pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5 z-10">
                      <div className="w-9 h-9 rounded-xl bg-[#0D2316]/90 border border-[#DFB76C]/50 text-[#DFB76C] flex items-center justify-center shadow-md shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#DFB76C] text-on-photo leading-snug">
                        {track.kicker}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <div>
                      <h3 className="heading-card !text-white">
                        {track.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#CBD5E0] mt-1.5 leading-relaxed">
                        {track.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2.5 border-t border-white/10">
                      {track.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs sm:text-[13px] text-[#E2E8F0] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onOpenEnquiry(track.ctaTarget)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#DFB76C] hover:bg-[#EAC885] text-[#102A1C] text-xs font-bold transition-colors cursor-pointer min-h-[44px] group/btn"
                  >
                    <span>{track.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

