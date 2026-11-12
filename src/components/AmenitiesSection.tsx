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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
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
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {AMENITIES_LIST.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center text-center justify-center space-y-3 group cursor-pointer p-2 rounded-2xl hover:bg-white/60 transition-colors"
            >
              <div className="w-15 h-15 rounded-2xl bg-white border border-[#EFEAE1] shadow-2xs flex items-center justify-center group-hover:scale-110 group-hover:bg-[#102A1C] group-hover:border-[#102A1C] group-hover:text-[#DFB76C] transition-all duration-300 group-hover:shadow-lg">
                {getAmenityIcon(item.iconName)}
              </div>
              <h3 className="heading-card !text-xs sm:!text-sm text-[#102A1C] leading-snug group-hover:text-[#8C6D2D] transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Visual Storytelling Showcase of Key Facilities (Dedicated Page Only) */}
        {isStandalonePage && (
          <div className="mt-14 pt-12 border-t border-[#EFEAE1]/80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-4 rounded-full bg-[#DFB76C]/30 flex items-center justify-center animate-ping">
                <span className="w-2 h-2 rounded-full bg-[#DFB76C]" />
              </span>
              <span className="text-xs font-bold text-[#A88238] uppercase tracking-[0.18em]">
                AUTHENTIC RESIDENCE FACILITIES
              </span>
            </div>
            <h3 className="heading-section text-[#102A1C] mt-1">
              Curated Spaces for Focus, Fitness &amp; Feasting
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group rounded-3xl overflow-hidden bg-white border border-[#EFEAE1] shadow-sm hover:shadow-2xl hover:border-[#DFB76C]/80 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-[#FAF8F5]">
                <img
                  src="/assets/images/amenity_dining_hall_1793879543322.jpg"
                  alt="Hygienic Dining Hall"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#102A1C]/90 backdrop-blur-md text-[#DFB76C] text-[10px] font-bold border border-[#DFB76C]/30 shadow-xs">
                  4 Chef Meals Daily
                </div>
              </div>
              <div className="p-5 space-y-1.5">
                <span className="text-[10px] font-bold text-[#A88238] uppercase tracking-wider block">
                  Hygienic Dining
                </span>
                <h4 className="font-serif text-base font-bold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors">Fresh Homestyle Meals</h4>
                <p className="text-xs text-[#5A655F] leading-relaxed">
                  Nutritious breakfast, lunch &amp; dinner prepared in sanitized kitchens with seasonal menus.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden bg-white border border-[#EFEAE1] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-[#FAF8F5]">
                <img
                  src="/assets/images/amenity_study_lounge_1793879542441.jpg"
                  alt="Silent Study Lounge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold text-[#A88238] uppercase tracking-wider block">
                  Study & Focus
                </span>
                <h4 className="font-serif text-base font-bold text-[#102A1C]">Silent Study Lounge</h4>
                <p className="text-xs text-[#5A655F] leading-relaxed">
                  Noise-damped zones with ergonomic seating, individual power sockets and high-speed Wi-Fi.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden bg-white border border-[#EFEAE1] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-[#FAF8F5]">
                <img
                  src="/assets/images/amenity_security_lobby_1793879543609.jpg"
                  alt="24x7 Security Lobby"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold text-[#A88238] uppercase tracking-wider block">
                  24×7 Safety
                </span>
                <h4 className="font-serif text-base font-bold text-[#102A1C]">Secure Reception Desk</h4>
                <p className="text-xs text-[#5A655F] leading-relaxed">
                  Biometric gated entry, 24/7 CCTV surveillance, and resident warden attendance registers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden bg-white border border-[#EFEAE1] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-[#FAF8F5]">
                <img
                  src="/assets/images/amenity_fitness_hd_1793946898388.jpg"
                  alt="Resident Fitness Hub"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold text-[#A88238] uppercase tracking-wider block">
                  Wellness Hub
                </span>
                <h4 className="font-serif text-base font-bold text-[#102A1C]">Fitness & Recreation</h4>
                <p className="text-xs text-[#5A655F] leading-relaxed">
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

