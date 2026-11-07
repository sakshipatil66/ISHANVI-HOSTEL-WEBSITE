import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Maximize2, Users, Bath, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { ROOMS_DATA, RoomItem } from '../data/hostelData';

interface RoomComparisonSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const RoomComparisonSection: React.FC<RoomComparisonSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('single-room');

  const selectedRoom =
    ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  return (
    <section className="section-space bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Interactive Room Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-white rounded-full inline-flex border border-[#E2D9C8] shadow-sm">
            {ROOMS_DATA.map((room) => {
              const isSelected = selectedRoomId === room.id;
              return (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoomId(room.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#102A1C] text-[#DFB76C] shadow-md border border-[#DFB76C]/40'
                      : 'text-[#1F2937] hover:text-[#102A1C] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {room.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Room Interactive Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2D9C8] shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRoom.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Room Photo with Badge */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[#FAF8F5] aspect-[4/3] max-h-[440px] bg-[#FAF8F5] group">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#102A1C]/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold border border-[#DFB76C]/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
                    <span>{selectedRoom.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: In-Depth Specs */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="kicker-label mb-1">
                    <span>{selectedRoom.kicker}</span>
                  </div>
                  <h3 className="heading-section text-[#102A1C]">
                    {selectedRoom.name}
                  </h3>
                  <p className="text-lead mt-2">
                    {selectedRoom.description}
                  </p>
                </div>

                {/* Specs Matrix */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#EFEAE1] text-xs text-[#2C3530]">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#C5A059]" />
                    <div>
                      <p className="text-caption">Room Size</p>
                      <p className="font-semibold text-xs sm:text-sm text-[#102A1C]">{selectedRoom.dimensions}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C5A059]" />
                    <div>
                      <p className="text-caption">Occupancy</p>
                      <p className="font-semibold text-xs sm:text-sm text-[#102A1C]">{selectedRoom.occupancy}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-[#C5A059]" />
                    <div>
                      <p className="text-caption">Bathroom</p>
                      <p className="font-semibold text-xs sm:text-sm text-[#102A1C]">Attached Sanitized</p>
                    </div>
                  </div>
                </div>

                {/* In-Room Inclusions Checklist */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A1C]">
                    Included In-Room Furnishings & Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {selectedRoom.furnishings.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#2D3748]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenEnquiry(selectedRoom.name)}
                    className="btn-primary"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire for {selectedRoom.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+917767058988"
                    className="btn-secondary"
                  >
                    <span>Call Warden: +91 77670 58988</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
