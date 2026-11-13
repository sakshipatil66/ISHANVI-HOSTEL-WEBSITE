import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Building, Train, BookOpen, Stethoscope, ShoppingBag, ExternalLink, Sparkles } from 'lucide-react';
import { HOSTEL_INFO, NEARBY_CONNECTIVITY } from '../data/hostelData';

export const LocationSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'transit':
        return <Train className="w-4 h-4 text-[#102A1C]" />;
      case 'education':
        return <Building className="w-4 h-4 text-[#102A1C]" />;
      case 'study':
        return <BookOpen className="w-4 h-4 text-[#102A1C]" />;
      case 'health':
        return <Stethoscope className="w-4 h-4 text-[#102A1C]" />;
      case 'convenience':
        return <ShoppingBag className="w-4 h-4 text-[#102A1C]" />;
      default:
        return <MapPin className="w-4 h-4 text-[#102A1C]" />;
    }
  };

  return (
    <section className="section-space bg-[#F4EFE6]/70 border-y border-[#EFEAE1] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="kicker-label justify-center mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>STRATEGIC NEIGHBORHOOD</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Prime Campus Location: Ambegaon Bk, Pune
          </h2>
          <p className="text-lead mt-3">
            Conveniently positioned right near ISMS Sankalp Business School with immediate access to public transit, grocery markets, libraries, and healthcare clinics.
          </p>
        </motion.div>

        {/* 2-Column Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Proximity Metrics with Hover Slide */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="heading-card text-[#102A1C] mb-2 flex flex-wrap items-center justify-between gap-2">
                <span>Nearby Colleges & Transit Nodes</span>
                <span className="text-xs font-semibold text-[#8C6D2D] shrink-0">Walk & Auto Times</span>
              </h3>

              {NEARBY_CONNECTIVITY.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ x: 6, borderColor: '#102A1C' }}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#EFEAE1] shadow-xs flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center shrink-0 group-hover:bg-[#102A1C] group-hover:text-white transition-colors">
                      {getIcon(item.type)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors">{item.name}</h4>
                      <p className="text-xs text-[#5B6676] flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-[#C5A059] shrink-0" />
                        <span>{item.time}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#102A1C] bg-[#FAF8F5] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] px-3 py-1.5 rounded-full border border-[#EFEAE1] whitespace-nowrap tabular-nums transition-colors shrink-0">
                    {item.distance}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ y: -2 }}
              className="p-4 rounded-2xl bg-white border border-[#EFEAE1] text-xs text-[#5A655F] flex items-center gap-3 shadow-2xs"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <div>
                <strong className="text-[#102A1C]">Safe Walking Corridor:</strong> Well-lit streets, regular auto-rickshaw stands, and peaceful residential student neighborhood.
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Location Showcase & Contact */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EFEAE1] shadow-lg flex-1 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
                    <h3 className="heading-card text-[#102A1C]">Campus Address</h3>
                  </div>
                  <span className="text-[11px] font-semibold text-[#102A1C] bg-[#DFB76C]/30 px-3 py-1 rounded-full border border-[#DFB76C]/40 flex items-center gap-1 shrink-0">
                    <Sparkles className="w-3 h-3 text-[#102A1C]" />
                    <span>Near ISMS Sankalp (100m)</span>
                  </span>
                </div>

                <p className="text-sm text-[#5A655F] leading-relaxed mb-5">
                  {HOSTEL_INFO.address}
                </p>

                {/* Banner Photo with Hover Zoom */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#FAF8F5] border border-[#EFEAE1] mb-5 group shadow-sm">
                  <img
                    src={HOSTEL_INFO.bannerUrl}
                    alt="ISHANVI Hostel Banner"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 text-white text-xs">
                    <p className="font-serif font-bold text-sm text-[#DFB76C]">Ambegaon Bk, Pune</p>
                    <p className="text-[11px] text-slate-200">Visiting Hours: {HOSTEL_INFO.visitingHours}</p>
                  </div>
                </div>

                {/* Interactive Google Map Embed */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-[#EFEAE1] mb-5 shadow-inner">
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

                <div className="space-y-2 text-xs text-[#5A655F]">
                  <div className="flex flex-wrap justify-between gap-2 py-1.5 border-b border-[#EFEAE1]">
                    <span className="text-[#5B6676]">Standard Gate Hours:</span>
                    <span className="font-semibold text-[#102A1C]">{HOSTEL_INFO.gateCurfew}</span>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2 py-1.5 border-b border-[#EFEAE1]">
                    <span className="text-[#5B6676]">Admissions Helpline:</span>
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
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#102A1C] hover:bg-[#1B3B2B] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#DFB76C]" />
                  <span>Open Direct Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
