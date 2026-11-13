import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Building, Train, BookOpen, Stethoscope, ShoppingBag, ExternalLink, Sparkles } from 'lucide-react';
import { HOSTEL_INFO, NEARBY_CONNECTIVITY } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

export const LocationSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'transit':
        return <Train className="w-4 h-4 text-[#102A1C] group-hover:text-[#DFB76C] transition-colors" />;
      case 'education':
        return <Building className="w-4 h-4 text-[#102A1C] group-hover:text-[#DFB76C] transition-colors" />;
      case 'study':
        return <BookOpen className="w-4 h-4 text-[#102A1C] group-hover:text-[#DFB76C] transition-colors" />;
      case 'health':
        return <Stethoscope className="w-4 h-4 text-[#102A1C] group-hover:text-[#DFB76C] transition-colors" />;
      case 'convenience':
        return <ShoppingBag className="w-4 h-4 text-[#102A1C] group-hover:text-[#DFB76C] transition-colors" />;
      default:
        return <MapPin className="w-4 h-4 text-[#102A1C] group-hover:text-[#DFB76C] transition-colors" />;
    }
  };

  return (
    <section className="section-space bg-[#F4EFE6]/70 border-y border-[#EFEAE1] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none animate-float-ambient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="text-center max-w-3xl mx-auto mb-7 sm:mb-9"
        >
          <div className="kicker-label justify-center mb-2">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>STRATEGIC NEIGHBORHOOD</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Prime Campus Location: Ambegaon Bk, Pune
          </h2>
          <p className="text-lead mt-2">
            Conveniently positioned right near ISMS Sankalp Business School with immediate access to public transit, grocery markets, libraries, and healthcare clinics.
          </p>
        </motion.div>

        {/* 2-Column Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Proximity Metrics in Compact 2-Column Subgrid */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3 text-center">
              <h3 className="heading-card text-[#102A1C] mb-1 flex flex-col items-center justify-center gap-0.5 text-center">
                <span>Nearby Colleges &amp; Transit Nodes</span>
                <span className="text-xs font-semibold text-[#8C6D2D] shrink-0">Walk &amp; Auto Times</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {NEARBY_CONNECTIVITY.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{ duration: 0.45, delay: idx * 0.06, ease: LUXURY_EASE }}
                    whileHover={{ y: -2, borderColor: '#102A1C' }}
                    className="p-3.5 rounded-2xl bg-white border border-[#EFEAE1] shadow-xs flex flex-col items-center text-center justify-between gap-2 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center shrink-0 group-hover:bg-[#102A1C] group-hover:text-white transition-colors">
                      {getIcon(item.type)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors leading-snug">{item.name}</h4>
                      <p className="text-[11px] text-[#5B6676] flex items-center justify-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-[#C5A059] shrink-0" />
                        <span>{item.time}</span>
                      </p>
                    </div>

                    <span className="text-[11px] font-bold text-[#102A1C] bg-[#FAF8F5] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] px-2.5 py-0.5 rounded-full border border-[#EFEAE1] whitespace-nowrap tabular-nums transition-colors shrink-0">
                      {item.distance}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.25, ease: LUXURY_EASE }}
              whileHover={{ y: -2 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EFEAE1] text-xs text-[#5A655F] flex flex-col items-center text-center gap-1.5 shadow-2xs"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 ring-4 ring-emerald-500/20 shrink-0" />
              <div>
                <strong className="text-[#102A1C]">Safe Walking Corridor:</strong> Well-lit streets, regular auto-rickshaw stands, and peaceful residential student neighborhood.
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Location Showcase & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#EFEAE1] shadow-lg flex-1 flex flex-col justify-between space-y-4 text-center">
              <div>
                <div className="flex flex-col items-center justify-center gap-1.5 mb-3">
                  <div className="flex items-center justify-center gap-2 min-w-0">
                    <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
                    <h3 className="heading-card text-[#102A1C]">Campus Address</h3>
                  </div>
                  <span className="text-[11px] font-semibold text-[#102A1C] bg-[#DFB76C]/30 px-3 py-0.5 rounded-full border border-[#DFB76C]/40 flex items-center gap-1 shrink-0">
                    <Sparkles className="w-3 h-3 text-[#102A1C]" />
                    <span>Near ISMS Sankalp (100m)</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5A655F] leading-relaxed mb-3.5 text-center max-w-md mx-auto">
                  {HOSTEL_INFO.address}
                </p>

                {/* Compact Banner Photo with Strong Contrast Scrim */}
                <div className="relative rounded-2xl overflow-hidden aspect-[21/9] max-h-[175px] bg-[#0E2016] border border-[#EFEAE1] mb-3.5 group shadow-sm">
                  <img
                    src={HOSTEL_INFO.bannerUrl}
                    alt="ISHANVI Hostel Banner"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs text-center z-10 text-on-photo">
                    <p className="font-serif font-bold text-sm text-[#DFB76C]">Ambegaon Bk, Pune</p>
                    <p className="text-[11px] text-white/95">Visiting Hours: {HOSTEL_INFO.visitingHours}</p>
                  </div>
                </div>

                {/* Compact Interactive Google Map Embed */}
                <div className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[220px] border border-[#EFEAE1] mb-3.5 shadow-inner">
                  <iframe
                    title="ISHANVI Hostel Location near ISMS Sankalp Ambegaon Pune"
                    src="https://maps.google.com/maps?q=ISMS+Sankalp+Business+School+Ambegaon+Bk+Pune+411066&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A655F] text-center">
                  <div className="flex flex-col items-center justify-center gap-0.5 p-2 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1]">
                    <span className="text-[#5B6676] text-[11px]">Standard Gate Hours</span>
                    <span className="font-semibold text-[#102A1C]">{HOSTEL_INFO.gateCurfew}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0.5 p-2 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1]">
                    <span className="text-[#5B6676] text-[11px]">Admissions Helpline</span>
                    <span className="font-semibold text-[#102A1C]">{HOSTEL_INFO.phonePrimary}</span>
                  </div>
                </div>
              </div>

              <div>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={HOSTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#102A1C] hover:bg-[#1B3B2B] text-white text-xs font-semibold shadow-md transition-all cursor-pointer min-h-[44px]"
                >
                  <Navigation className="w-4 h-4 text-[#DFB76C]" />
                  <span>Open Direct Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
