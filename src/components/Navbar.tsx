import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Menu, X, Phone } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenEnquiry: (roomName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenEnquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'rooms', label: 'Rooms', path: '/rooms' },
    { id: 'amenities', label: 'Amenities', path: '/amenities' },
    { id: 'gallery', label: 'Gallery', path: '/gallery' },
    { id: 'reviews', label: 'Reviews', path: '/reviews' },
    { id: 'contact', label: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFEAE1] transition-all shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-[68px] sm:h-[72px] lg:h-[76px]">
          {/* Brand Logo with Precise Vertical Alignment */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2 text-left cursor-pointer focus:outline-none group shrink-0 py-1"
            title="ISHANVI Hostel & Accommodation - Home"
          >
            <img
              src={HOSTEL_INFO.logoUrl}
              alt="ISHANVI Hostel & Accommodation"
              className="h-10 sm:h-11 lg:h-12 w-auto object-contain max-w-[160px] sm:max-w-[190px] lg:max-w-[210px] xl:max-w-[230px] mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* 
            Desktop Navigation Menu:
            Centered on desktop with balanced responsive spacing to prevent wrapping.
          */}
          <nav className="hidden lg:flex items-center gap-1.5 lg:gap-2 xl:gap-5 2xl:gap-7 h-full">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <a
                  key={link.id}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`relative flex items-center h-full px-2 xl:px-2.5 py-1 text-[13px] xl:text-[14px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#102A1C] font-bold'
                      : 'text-[#4A5568] hover:text-[#102A1C]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-1 right-1 h-[2.5px] bg-[#C5A059] rounded-full shadow-[0_0_6px_#C5A059]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action: Phone Helpline + Enquire Button */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 2xl:gap-4 shrink-0">
            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 xl:gap-2 text-xs xl:text-sm font-semibold text-[#102A1C] hover:text-[#C5A059] transition-colors py-2 px-2.5 xl:px-3 rounded-full hover:bg-[#FAF6ED] border border-transparent hover:border-[#EFEAE1]"
              title="Call Admissions Reception"
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#C5A059] shrink-0" />
              <span className="tabular-nums whitespace-nowrap">{HOSTEL_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="btn-primary !py-2 !px-4 xl:!py-2.5 xl:!px-5 text-xs xl:text-sm shadow-md hover:shadow-lg shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#DFB76C] shrink-0" />
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Tablet & Mobile Actions: Visible on < 1024px */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3 shrink-0">
            {/* Tablet-only quick phone link */}
            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#102A1C] bg-[#FAF8F5] border border-[#EFEAE1] hover:border-[#102A1C] transition-colors shrink-0"
              title="Call Reception"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span className="tabular-nums whitespace-nowrap">{HOSTEL_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-bold text-white bg-[#102A1C] hover:bg-[#1B3B2B] active:scale-95 rounded-full transition-all shadow-xs shrink-0 cursor-pointer"
            >
              <span>Enquire</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#102A1C] hover:bg-[#F4EFE6] rounded-xl transition-colors cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#EFEAE1] px-4 py-4 space-y-1.5 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <a
                key={link.id}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`w-full text-left py-3 px-3.5 rounded-xl text-sm font-semibold transition-colors min-h-[44px] flex items-center justify-between ${
                  isActive
                    ? 'text-[#102A1C] bg-[#FAF6ED] border-l-4 border-[#C5A059] font-bold'
                    : 'text-[#4A5568] hover:text-[#102A1C] hover:bg-white/70'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#C5A059]" />}
              </a>
            );
          })}

          <div className="pt-3 border-t border-[#EFEAE1] space-y-2.5">
            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-[#102A1C] bg-white border border-[#EFEAE1] hover:border-[#102A1C] rounded-full shadow-2xs transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call: {HOSTEL_INFO.phonePrimary}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-white bg-[#102A1C] hover:bg-[#1B3B2B] active:scale-98 rounded-full shadow-md transition-all min-h-[44px] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
              <span>Enquire for Room</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
