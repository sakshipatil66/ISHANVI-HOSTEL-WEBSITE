import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Bed, Wifi, ShieldCheck, Users, Sparkles, MessageSquare } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface OfficialShowcaseHeroProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const OfficialShowcaseHero: React.FC<OfficialShowcaseHeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-4 sm:py-8 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#102A1C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker badge above the banner */}
        <div className="flex items-center justify-between mb-4">
          <div className="kicker-label">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>OFFICIAL PROPERTY SHOWCASE & BROCHURE</span>
          </div>
          <span className="text-[11px] font-semibold text-[#102A1C] bg-[#FAF8F5] border border-[#EFEAE1] px-3 py-1 rounded-full shadow-2xs">
            Near ISMS Sankalp Business School
          </span>
        </div>

        {/* Replica of the Gold & Forest Green Official Banner (WhatsApp Image 11.09.47 AM) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EC] to-[#F1E8D9] border-2 border-[#DFB76C]/50 shadow-2xl p-6 sm:p-10 lg:p-12">
          {/* Decorative Corner Golden Leaves / Botanical Flourish */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#DFB76C]/30 to-transparent rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-tl from-[#102A1C]/10 to-transparent rounded-full blur-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Official Logo, Headline, 4 Pillar Badges */}
            <div className="lg:col-span-6 space-y-6">
              {/* Official 3D Golden Sun Logo */}
              <div className="flex items-center gap-3">
                <img
                  src={HOSTEL_INFO.logoUrl}
                  alt="ISHANVI Hostel & Accommodation Official Emblem"
                  className="h-16 sm:h-20 w-auto object-contain drop-shadow-sm"
                />
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A1C] leading-[1.15] tracking-tight">
                  A Comfortable Stay <br />
                  <span className="text-[#8C6D2D] font-serif italic">For A Brighter Tomorrow</span>
                </h2>
                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-medium">
                  Safe, Secure and Well-Managed Accommodation for Students & Working Professionals.
                </p>
              </div>

              {/* 4 Golden Pill Feature Badges matching Flyer */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="flex flex-col items-center text-center p-2.5 rounded-2xl bg-white/80 border border-[#EFEAE1] shadow-2xs space-y-1.5 group hover:border-[#DFB76C] transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] transition-colors">
                    <Bed className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#102A1C] leading-tight">
                    Furnished Rooms
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-2.5 rounded-2xl bg-white/80 border border-[#EFEAE1] shadow-2xs space-y-1.5 group hover:border-[#DFB76C] transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] transition-colors">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#102A1C] leading-tight">
                    High Speed Wi-Fi
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-2.5 rounded-2xl bg-white/80 border border-[#EFEAE1] shadow-2xs space-y-1.5 group hover:border-[#DFB76C] transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#102A1C] leading-tight">
                    24×7 Security
                  </span>
                </div>

                <div className="flex flex-col items-center text-center p-2.5 rounded-2xl bg-white/80 border border-[#EFEAE1] shadow-2xs space-y-1.5 group hover:border-[#DFB76C] transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#DFB76C]/40 flex items-center justify-center text-[#8C6D2D] group-hover:bg-[#102A1C] group-hover:text-[#DFB76C] transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#102A1C] leading-tight">
                    Students & Pros
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="btn-primary"
                >
                  <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                  <span>Enquire For Admission</span>
                </button>

                <a
                  href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#102A1C] border border-[#DFB76C] font-semibold text-xs hover:bg-[#FAF8F5] shadow-2xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8C6D2D]" />
                  <span>Call: {HOSTEL_INFO.phonePrimary}</span>
                </a>
              </div>
            </div>

            {/* Right Column: 2 Arched Gold Framed Room Photos matching WhatsApp Flyer */}
            <div className="lg:col-span-6 relative">
              <div className="relative p-2 rounded-[2.5rem] bg-gradient-to-tr from-[#DFB76C] via-[#F4E1AC] to-[#DFB76C] shadow-2xl">
                <div className="bg-[#102A1C] rounded-[2.25rem] p-3 space-y-3">
                  {/* Top Arched Room: Single Room / Spacious */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border-2 border-[#DFB76C]/60 group">
                    <img
                      src="/assets/rooms/single_room_large.jpg"
                      alt="Spacious Room at ISHANVI"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Badge */}
                    <div className="absolute top-3 right-3 bg-[#102A1C]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#DFB76C] text-[#DFB76C] text-xs font-bold shadow-md">
                      Spacious Rooms
                    </div>
                  </div>

                  {/* Bottom Arched Room: Double / Sharing Room / Clean & Comfortable */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border-2 border-[#DFB76C]/60 group">
                    <img
                      src="/assets/rooms/double_room_large.jpg"
                      alt="Clean and comfortable stay at ISHANVI"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Badge */}
                    <div className="absolute bottom-3 right-3 bg-[#102A1C]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#DFB76C] text-[#DFB76C] text-xs font-bold shadow-md">
                      Clean & Comfortable Stay
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Dark Green Bar matching Flyer Bottom Strip */}
          <div className="mt-8 bg-[#102A1C] rounded-2xl p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4 border border-[#DFB76C]/40 shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#DFB76C] to-[#8C6D2D] text-[#102A1C] flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-[11px] text-[#DFB76C] font-bold uppercase tracking-wider">
                  Call Now for Enquiry
                </p>
                <a
                  href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="text-lg sm:text-xl font-serif font-bold text-white hover:text-[#DFB76C] transition-colors"
                >
                  {HOSTEL_INFO.phonePrimary}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#DFB76C]" />
              </div>
              <div className="text-xs text-slate-200">
                <p className="font-semibold text-white">Near ISMS Sankalp Business School</p>
                <p className="text-slate-300">Ambegaon Bk, Pune - 411066</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
