import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { HOSTEL_INFO, ROOMS_DATA } from '../data/hostelData';

interface FooterProps {
  onNavClick: (id: string) => void;
  onOpenEnquiry: (roomName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E2016] text-[#EFEAE1] pt-14 pb-10 border-t border-[#1B3B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#1B3B2B]">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('home');
              }}
              className="bg-white/95 p-3 rounded-xl inline-block shadow-sm hover:opacity-95 transition-opacity"
            >
              <img
                src={HOSTEL_INFO.logoUrl}
                alt="ISHANVI Hostel & Accommodation"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#CBD5E0] leading-relaxed max-w-sm">
              Safe, secure and well-managed accommodation for students & working professionals in Ambegaon Bk, Pune.
            </p>

            <p className="text-xs sm:text-sm text-[#DFB76C] font-semibold tracking-wider">
              {HOSTEL_INFO.tagline}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E0]">
              {[
                { id: 'home', label: 'Home', path: '/' },
                { id: 'about', label: 'About Us', path: '/about' },
                { id: 'rooms', label: 'Rooms', path: '/rooms' },
                { id: 'amenities', label: 'Amenities', path: '/amenities' },
                { id: 'gallery', label: 'Gallery', path: '/gallery' },
                { id: 'reviews', label: 'Reviews', path: '/reviews' },
                { id: 'contact', label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.id);
                    }}
                    className="hover:text-[#DFB76C] transition-colors cursor-pointer text-left block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Visiting Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Contact & Address
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E0]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                <span>{HOSTEL_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <a
                  href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#DFB76C] font-semibold text-white transition-colors"
                >
                  {HOSTEL_INFO.phonePrimary}
                </a>
              </p>
              <p className="text-xs text-[#A0AEC0] pt-1">
                Visiting Hours: {HOSTEL_INFO.visitingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0AEC0] text-center sm:text-left">
          <p>© {new Date().getFullYear()} ISHANVI HOSTEL & ACCOMMODATION. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-[#142E20] hover:bg-[#1B3B2B] text-white transition-colors cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
