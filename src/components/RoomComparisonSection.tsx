import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Maximize2, Users, Bath, Sparkles, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { ROOMS_DATA, RoomItem } from '../data/hostelData';

interface RoomComparisonSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const RoomComparisonSection: React.FC<RoomComparisonSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('single-room');

  const selectedRoom =
    ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  return (
    <section className="section-space-lg bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative ambient aura */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="kicker-label justify-center mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>A CLOSER LOOK AT YOUR STAY</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Transparent Comfort: Every Specification Verified
          </h2>
          <p className="text-lead mt-3">
            Select a room category to examine its exact dimensions, furnishings, study amenities, and daylight orientation.
          </p>

          {/* Interactive Room Tabs with layoutId smooth transition */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8 p-1.5 bg-white rounded-2xl sm:rounded-full inline-flex border border-[#E2D9C8] shadow-sm relative max-w-full">
            {ROOMS_DATA.map((room) => {
              const isSelected = selectedRoomId === room.id;
              return (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoomId(room.id)}
                  className={`relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer z-10 ${
                    isSelected
                      ? 'text-[#DFB76C]'
                      : 'text-[#1F2937] hover:text-[#102A1C] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeRoomTabIndicator"
                      className="absolute inset-0 bg-[#102A1C] rounded-full border border-[#DFB76C]/40 shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {room.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Room Interactive Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E2D9C8] shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRoom.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full"
            >
              {/* Left Column: Room Photo with Badge - bounded so it never overflows */}
              <div className="w-full min-w-0">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#FAF8F5] aspect-[4/3] sm:aspect-[16/11] max-h-[380px] w-full bg-[#FAF8F5] group"
                >
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-[#102A1C]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold border border-[#DFB76C]/30 flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
                    <span>{selectedRoom.tagline}</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: In-Depth Specs */}
              <div className="w-full min-w-0 space-y-5">
                <div>
                  <div className="kicker-label mb-1">
                    <span>{selectedRoom.kicker}</span>
                  </div>
                  <h3 className="heading-card !text-2xl text-[#102A1C]">
                    {selectedRoom.name}
                  </h3>
                  <p className="text-lead mt-1.5">
                    {selectedRoom.description}
                  </p>
                </div>

                {/* Specs Matrix */}
                <div className="grid grid-cols-3 gap-3 py-3.5 border-y border-[#EFEAE1] text-xs text-[#2C3530]">
                  <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5]/60">
                    <Maximize2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <div>
                      <p className="text-caption">Room Size</p>
                      <p className="font-semibold text-xs sm:text-sm text-[#102A1C]">{selectedRoom.dimensions}</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5]/60">
                    <Users className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <div>
                      <p className="text-caption">Occupancy</p>
                      <p className="font-semibold text-xs sm:text-sm text-[#102A1C]">{selectedRoom.occupancy}</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF8F5]/60">
                    <Bath className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <div>
                      <p className="text-caption">Bathroom</p>
                      <p className="font-semibold text-xs sm:text-sm text-[#102A1C]">Attached Sanitized</p>
                    </div>
                  </motion.div>
                </div>

                {/* In-Room Inclusions Checklist */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A1C]">
                    Included In-Room Furnishings &amp; Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                    {selectedRoom.furnishings.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#2D3748]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenEnquiry(selectedRoom.name)}
                    className="btn-primary group cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                    <span>Enquire for {selectedRoom.name}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+917767058988"
                    className="btn-secondary"
                  >
                    <span>Call Warden: +91 77670 58988</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
