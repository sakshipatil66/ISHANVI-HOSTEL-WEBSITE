import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
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
      'Walking distance to ISMS Sankalp Business School saves daily commute time',
      'Quiet study spaces and ergonomic room workstations support deep exam prep',
      'Supportive peer circle of management, engineering, and college scholars',
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
      'Private Single & Premium room options for calm, independent evenings',
      'On-site laundry access and daily housekeeping eliminate weekend chores',
      'Quick access to Ambegaon bus stops and Katraj Chowk transit routes',
    ],
    ctaLabel: 'Enquire for Professional Stay',
    ctaTarget: 'Working Professional Accommodation',
  },
];

export const HomeResidentProfilesSection: React.FC<HomeResidentProfilesSectionProps> = ({
  onOpenEnquiry,
}) => {
  return (
    <section className="section-space bg-[#102A1C] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[280px] bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none animate-float-ambient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3"
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
            Whether you are pursuing management and technical degrees or building an early career in Pune, every room and schedule adapts smoothly to your goals.
          </p>
        </motion.div>

        {/* Two Persona Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {RESIDENT_TRACKS.map((track, idx) => {
            const { Icon } = track;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: LUXURY_EASE }}
                whileHover={{ y: -4 }}
                className="bg-[#143322] rounded-3xl overflow-hidden border border-[#DFB76C]/25 hover:border-[#DFB76C]/60 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#0E2016]">
                    <img
                      src={track.image}
                      alt={track.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#143322] via-black/25 to-transparent" />
                    <div className="absolute bottom-4 left-5 sm:left-7 flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#102A1C]/90 border border-[#DFB76C]/40 text-[#DFB76C] flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#DFB76C]">
                        {track.kicker}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="heading-card !text-white sm:!text-2xl">
                        {track.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CBD5E0] mt-1.5 leading-relaxed">
                        {track.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-2 border-t border-white/10">
                      {track.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#E2E8F0] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onOpenEnquiry(track.ctaTarget)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#DFB76C] hover:bg-[#EAC885] text-[#102A1C] text-xs font-bold transition-colors cursor-pointer min-h-[44px] group/btn"
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
