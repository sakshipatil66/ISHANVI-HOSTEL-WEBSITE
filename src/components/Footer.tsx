import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface FooterProps {
  onNavClick: (id: string) => void;
  onOpenEnquiry: (roomName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E2016] text-[#EFEAE1] pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-14 lg:pb-10 border-t border-[#1B3B2B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 pb-6 sm:pb-8 lg:pb-10 border-b border-[#1B3B2B]">
          {/* Column 1: Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.55, delay: 0.02, ease: LUXURY_EASE }}
            className="md:col-span-2 lg:col-span-5 space-y-2.5 sm:space-y-3 lg:space-y-4 min-w-0"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('home');
                }}
                className="bg-white/95 p-2 sm:p-2.5 lg:p-3 rounded-xl inline-block shadow-sm hover:opacity-95 transition-opacity"
              >
                <img
                  src={HOSTEL_INFO.logoUrl}
                  alt="ISHANVI Hostel & Accommodation"
                  className="h-9 sm:h-10 lg:h-12 w-auto object-contain"
                />
              </a>

              {/* Compact Quick-Connect Icons on Mobile/Tablet */}
              <div className="flex items-center gap-2 lg:hidden">
                <a
                  href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  aria-label="Call ISHANVI Hostel"
                  className="w-9 h-9 rounded-lg bg-[#142E20] border border-[#1B3B2B] hover:border-[#DFB76C]/60 flex items-center justify-center text-[#DFB76C] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/917767058988?text=${encodeURIComponent('Hello ISHANVI Hostel, I would like to enquire about accommodation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp ISHANVI Hostel"
                  className="w-9 h-9 rounded-lg bg-[#142E20] border border-[#1B3B2B] hover:border-[#DFB76C]/60 flex items-center justify-center text-[#DFB76C] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={HOSTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View ISHANVI Hostel on Google Maps"
                  className="w-9 h-9 rounded-lg bg-[#142E20] border border-[#1B3B2B] hover:border-[#DFB76C]/60 flex items-center justify-center text-[#DFB76C] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#CBD5E0] leading-relaxed max-w-md lg:max-w-sm">
              Safe, secure and well-managed accommodation for students &amp; working professionals in Ambegaon Bk, Pune.
            </p>

            <p className="text-[11px] sm:text-xs lg:text-sm text-[#DFB76C] font-semibold tracking-wide lg:tracking-wider leading-snug break-words">
              {HOSTEL_INFO.tagline}
            </p>
          </motion.div>

          {/* Column 2: Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.55, delay: 0.1, ease: LUXURY_EASE }}
            className="lg:col-span-3 space-y-2.5 lg:space-y-3 pt-4 border-t border-[#1B3B2B]/80 md:pt-0 md:border-t-0 min-w-0"
          >
            <h2 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 lg:grid-cols-1 lg:gap-0 lg:space-y-2 text-xs sm:text-sm text-[#CBD5E0]">
              {[
                { id: 'home', label: 'Home', path: '/' },
                { id: 'about', label: 'About Us', path: '/about' },
                { id: 'rooms', label: 'Rooms', path: '/rooms' },
                { id: 'amenities', label: 'Amenities', path: '/amenities' },
                { id: 'gallery', label: 'Gallery', path: '/gallery' },
                { id: 'reviews', label: 'Reviews', path: '/reviews' },
                { id: 'contact', label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.id} className="min-w-0">
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.id);
                    }}
                    className="hover:text-[#DFB76C] lg:hover:translate-x-1 transition-all cursor-pointer text-left inline-flex items-center py-1 lg:py-0.5 min-h-[32px] lg:min-h-0 truncate max-w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact & Visiting Hours */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.55, delay: 0.18, ease: LUXURY_EASE }}
            className="lg:col-span-4 space-y-2.5 lg:space-y-3 pt-4 border-t border-[#1B3B2B]/80 md:pt-0 md:border-t-0 min-w-0"
          >
            <h2 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Contact &amp; Address
            </h2>
            <div className="space-y-2 lg:space-y-2.5 text-xs sm:text-sm text-[#CBD5E0]">
              <p className="flex items-start gap-2.5 min-w-0">
                <MapPin className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                <a
                  href={HOSTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DFB76C] transition-colors min-w-0 break-words leading-relaxed"
                >
                  {HOSTEL_INFO.address}
                </a>
              </p>
              <p className="flex items-center gap-2.5 min-w-0">
                <Phone className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <a
                  href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#DFB76C] font-semibold text-white transition-colors whitespace-nowrap"
                >
                  {HOSTEL_INFO.phonePrimary}
                </a>
              </p>
              <p className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <a
                  href={`mailto:${HOSTEL_INFO.email}`}
                  className="hover:text-[#DFB76C] transition-colors min-w-0 break-all sm:break-normal"
                >
                  {HOSTEL_INFO.email}
                </a>
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <p className="text-xs text-[#A0AEC0] leading-relaxed">
                  Visiting Hours: {HOSTEL_INFO.visitingHours}
                </p>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="text-xs font-semibold text-[#DFB76C] hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Book a Visit
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.55, delay: 0.2, ease: LUXURY_EASE }}
          className="pt-4 sm:pt-5 lg:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#A0AEC0] text-center sm:text-left"
        >
          <p className="leading-relaxed break-words">
            © {new Date().getFullYear()} ISHANVI HOSTEL &amp; ACCOMMODATION. All Rights Reserved.
          </p>
          <motion.button
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToTop}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-lg bg-[#142E20] hover:bg-[#1B3B2B] text-white transition-colors cursor-pointer shrink-0"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};
