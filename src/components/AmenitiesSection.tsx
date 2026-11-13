import React from 'react';
import { motion } from 'motion/react';
import {
  Wifi,
  Utensils,
  ShieldCheck,
  Shirt,
  Armchair,
  BookOpen,
  Dumbbell,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { AMENITIES_LIST } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface AmenitiesSectionProps {
  isStandalonePage?: boolean;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ isStandalonePage = false }) => {
  const getAmenityIcon = (name: string) => {
    switch (name) {
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#C5A059]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#C5A059]" />;
      case 'Shield':
        return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-[#C5A059]" />;
      case 'Sofa':
        return <Armchair className="w-6 h-6 text-[#C5A059]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#C5A059]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#C5A059]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="amenities" className={`${isStandalonePage ? 'section-space-lg' : 'section-space'} bg-[#FDFBF7]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Screenshot 074113 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="text-center max-w-2xl mx-auto mb-7 sm:mb-9"
        >
          <div className="kicker-label justify-center mb-2">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>AMENITIES</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Everything You Need <br className="hidden sm:block" />
            For A Hassle-Free Stay
          </h2>
          {isStandalonePage && (
            <p className="mt-3 text-lead max-w-xl mx-auto">
              Every utility has been curated so you never have to worry about erratic Wi-Fi, food hygiene, or safety.
            </p>
          )}
        </motion.div>

        {/* 8 Amenities in an elegant row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-5">
          {AMENITIES_LIST.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: LUXURY_EASE }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="flex flex-col items-center text-center justify-center space-y-2.5 sm:space-y-3 group cursor-pointer p-2.5 rounded-2xl hover:bg-white/70 transition-colors"
            >
              <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-2xl bg-white border border-[#EFEAE1] shadow-2xs flex items-center justify-center group-hover:scale-108 group-hover:-rotate-3 group-hover:bg-[#102A1C] group-hover:border-[#102A1C] group-hover:text-[#DFB76C] transition-all duration-300 group-hover:shadow-lg">
                {getAmenityIcon(item.iconName)}
              </div>
              <h3 className="heading-card text-xs sm:text-sm text-[#102A1C] leading-snug group-hover:text-[#8C6D2D] transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Visual Storytelling Showcase of Key Facilities (Dedicated Page Only) */}
        {isStandalonePage && (
          <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-[#EFEAE1]/80">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              className="text-center mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-xs font-bold text-[#856626] uppercase tracking-[0.18em]">
                  AUTHENTIC RESIDENCE FACILITIES
                </span>
              </div>
              <h2 className="heading-section text-[#102A1C] mt-1">
                Curated Spaces for Focus, Fitness &amp; Feasting
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.55, delay: 0.02, ease: LUXURY_EASE }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden bg-white border border-[#EFEAE1] shadow-sm hover:shadow-xl hover:border-[#DFB76C]/80 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-[#FAF8F5]">
                  <img
                    src="/assets/images/amenity_dining_hall_1793879543322.jpg"
                    alt="Hygienic Dining Hall at ISHANVI Hostel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#102A1C]/90 backdrop-blur-md text-[#DFB76C] text-[11px] font-bold border border-[#DFB76C]/30 shadow-xs">
                    4 Chef Meals Daily
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 text-center">
                  <span className="text-[11px] font-bold text-[#856626] uppercase tracking-wider block">
                    Hygienic Dining
                  </span>
                  <h3 className="heading-card text-base text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors">
                    Fresh Homestyle Meals
                  </h3>
                  <p className="text-body-sm text-[#5A655F]">
                    Nutritious breakfast, lunch &amp; dinner prepared in sanitized kitchens with seasonal menus.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.55, delay: 0.09, ease: LUXURY_EASE }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden bg-white border border-[#EFEAE1] shadow-sm hover:shadow-xl hover:border-[#DFB76C]/80 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-[#FAF8F5]">
                  <img
                    src="/assets/images/amenity_study_lounge_1793879542441.jpg"
                    alt="Silent Study Lounge at ISHANVI Hostel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 text-center">
                  <span className="text-[11px] font-bold text-[#856626] uppercase tracking-wider block">
                    Study &amp; Focus
                  </span>
                  <h3 className="heading-card text-base text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors">
                    Silent Study Lounge
                  </h3>
                  <p className="text-body-sm text-[#5A655F]">
                    Noise-damped zones with ergonomic seating, individual power sockets and high-speed Wi-Fi.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.55, delay: 0.16, ease: LUXURY_EASE }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden bg-white border border-[#EFEAE1] shadow-sm hover:shadow-xl hover:border-[#DFB76C]/80 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-[#FAF8F5]">
                  <img
                    src="/assets/images/amenity_security_lobby_1793879543609.jpg"
                    alt="24x7 Security Lobby at ISHANVI Hostel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 text-center">
                  <span className="text-[11px] font-bold text-[#856626] uppercase tracking-wider block">
                    24×7 Safety
                  </span>
                  <h3 className="heading-card text-base text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors">
                    Secure Reception Desk
                  </h3>
                  <p className="text-body-sm text-[#5A655F]">
                    Biometric gated entry, 24/7 CCTV surveillance, and resident warden attendance registers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.55, delay: 0.23, ease: LUXURY_EASE }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden bg-white border border-[#EFEAE1] shadow-sm hover:shadow-xl hover:border-[#DFB76C]/80 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-[#FAF8F5]">
                  <img
                    src="/assets/images/amenity_fitness_hd_1793946898388.jpg"
                    alt="Resident Fitness Hub at ISHANVI Hostel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 text-center">
                  <span className="text-[11px] font-bold text-[#856626] uppercase tracking-wider block">
                    Wellness Hub
                  </span>
                  <h3 className="heading-card text-base text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors">
                    Fitness &amp; Recreation
                  </h3>
                  <p className="text-body-sm text-[#5A655F]">
                    Cardio and strength stations alongside indoor recreation games to recharge between study hours.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

