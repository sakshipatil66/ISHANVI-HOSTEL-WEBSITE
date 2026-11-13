import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Camera, ClipboardCheck, Clock, PhoneCall, FileCheck2 } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface HomeSafetySectionProps {
  onOpenEnquiry: (roomName?: string) => void;
}

const SECURITY_MEASURES = [
  {
    Icon: ShieldCheck,
    title: '24×7 Guarded Entry Gate',
    desc: 'Round-the-clock perimeter monitoring at the entrance ensures only verified residents and logged guests enter the premises.',
  },
  {
    Icon: Camera,
    title: 'CCTV Across Common Corridors',
    desc: 'Continuous camera coverage across entrances, hallways, and dining/reception areas strengthens floor safety day and night.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Biometric & Visitor Logging',
    desc: 'Every visitor checks in at the reception desk with entry records and access to a dedicated parent & guardian lounge.',
  },
  {
    Icon: Clock,
    title: 'Disciplined 10:00 PM Gate Policy',
    desc: 'Standard night gate timing promotes quiet rest; extensions for late lectures or lab hours are coordinated with prior warden notice.',
  },
];

const ADMISSION_KYC = [
  'Government Photo ID (Aadhaar Card or Passport)',
  'College ID Card or Employer Offer / Work ID',
  'Two recent passport-size photographs',
  'Verified emergency contact details of parents or guardians',
];

export const HomeSafetySection: React.FC<HomeSafetySectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="section-space bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute top-12 -left-24 w-80 h-80 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none animate-float-ambient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9 items-center">
          {/* Left: Verified Lobby Visual + KYC Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.65, ease: LUXURY_EASE }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] max-h-[245px] border-4 border-white shadow-lg bg-[#0E2016] group">
              <img
                src="/assets/images/amenity_security_lobby_1793879543609.jpg"
                alt="24/7 supervised security reception lobby at ISHANVI Hostel Pune"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15 pointer-events-none" />
              <div className="absolute bottom-3.5 left-4 right-4 text-white z-10 text-on-photo">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#DFB76C]">
                  Supervised Reception Desk
                </p>
                <p className="font-serif text-base sm:text-lg font-bold mt-0.5 leading-snug">
                  On-Duty Resident Warden &amp; Visitor Log
                </p>
              </div>
            </div>

            {/* Verified Onboarding KYC Card */}
            <div className="bg-[#FAF8F5] rounded-2xl p-4 sm:p-5 border border-[#EFEAE1] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102A1C]">
                <FileCheck2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Verified Resident Onboarding (KYC)</span>
              </div>
              <ul className="space-y-1.5">
                {ADMISSION_KYC.map((item) => (
                  <li key={item} className="text-xs sm:text-[13px] text-[#4A5568] flex items-start gap-2">
                    <span className="text-[#C5A059] font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Security Narrative & 4 Protocol Cards */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              className="space-y-2.5"
            >
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>SAFETY &amp; SECURITY</span>
              </div>
              <h2 className="heading-section text-[#102A1C]">
                Built for Resident Protection &amp; Family Reassurance
              </h2>
              <p className="text-lead">
                Whether parents live across Maharashtra or outside the state, ISHANVI maintains clear physical security, documented visitor checks, and approachable on-site supervision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {SECURITY_MEASURES.map(({ Icon, title, desc }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.48, delay: idx * 0.06, ease: LUXURY_EASE }}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EFEAE1] hover:border-[#DFB76C] hover:shadow-md transition-all space-y-2"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#102A1C]">
                    <Icon className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <h3 className="heading-card text-sm sm:text-base text-[#102A1C]">{title}</h3>
                  <p className="text-body-sm text-[#4A5568] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.16, ease: LUXURY_EASE }}
              className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#EFEAE1]"
            >
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#102A1C]">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>
                    Warden Desk:{' '}
                    <a
                      href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                      className="font-bold hover:text-[#8C6D2D] transition-colors"
                    >
                      {HOSTEL_INFO.phonePrimary}
                    </a>
                  </span>
                </div>
                <span className="text-[#5B6676] text-xs">
                  Visiting Lounge: <strong className="text-[#102A1C]">{HOSTEL_INFO.visitingHours}</strong>
                </span>
              </div>

              <button
                onClick={() => onOpenEnquiry('Safety & Parent Visit Enquiry')}
                className="text-xs font-bold text-[#8C6D2D] hover:text-[#102A1C] transition-colors cursor-pointer"
              >
                Schedule a Family Walkthrough →
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
