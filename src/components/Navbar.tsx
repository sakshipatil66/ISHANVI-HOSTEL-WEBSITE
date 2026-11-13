import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowRight, Menu, X, Phone } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';
import { LUXURY_EASE } from '../lib/motion';

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

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: LUXURY_EASE }}
      className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFEAE1] transition-shadow shadow-2xs"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4 h-16 sm:h-[70px] lg:h-[76px]">
          {/* Left Column: Brand Logo */}
          <div className="flex items-center justify-start xl:flex-1 min-w-0 shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="inline-flex items-center text-left cursor-pointer focus:outline-none group shrink-0 py-1"
              title="ISHANVI Hostel & Accommodation - Home"
            >
              <img
                src={HOSTEL_INFO.logoUrl}
                alt="ISHANVI Hostel & Accommodation"
                className="h-9 sm:h-10 lg:h-11 xl:h-12 w-auto object-contain max-w-[132px] xs:max-w-[155px] sm:max-w-[180px] lg:max-w-[185px] xl:max-w-[215px] mix-blend-multiply transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </a>
          </div>

          {/* Center Column: Desktop Navigation Menu */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 h-full shrink-0"
          >
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
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex items-center h-full px-2 xl:px-3 text-[13px] xl:text-[14px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#102A1C] font-bold'
                      : 'text-[#4A5568] hover:text-[#102A1C]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 xl:left-2.5 xl:right-2.5 h-[2.5px] bg-[#C5A059] rounded-full shadow-[0_0_6px_rgba(197,160,89,0.7)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Column (Desktop): Contact Phone + Enquire Button */}
          <div className="hidden lg:flex items-center justify-end xl:flex-1 gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="h-10 px-2.5 xl:px-3.5 rounded-full border border-[#EFEAE1] hover:border-[#C5A059] bg-white/80 hover:bg-white text-[#102A1C] text-xs xl:text-[13px] font-semibold transition-all inline-flex items-center justify-center gap-1.5 shadow-2xs whitespace-nowrap cursor-pointer shrink-0"
              title="Call Admissions Reception"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span className="tabular-nums">{HOSTEL_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="h-10 px-3.5 xl:px-5 rounded-full bg-[#102A1C] hover:bg-[#1B3B2B] text-white text-xs xl:text-[13px] font-bold shadow-sm hover:shadow-md transition-all inline-flex items-center justify-center gap-1.5 xl:gap-2 whitespace-nowrap shrink-0 cursor-pointer hover:-translate-y-0.5 active:scale-95 group"
            >
              <MessageSquare className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#DFB76C] shrink-0" />
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#DFB76C] transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Right Column (Tablet & Mobile): Perfectly Aligned Compact Cluster */}
          <div className="flex lg:hidden items-center justify-end gap-2 sm:gap-2.5 shrink-0">
            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-full text-xs font-semibold text-[#102A1C] bg-white border border-[#EFEAE1] hover:border-[#102A1C] transition-colors shrink-0 shadow-2xs"
              title="Call Reception"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span className="tabular-nums whitespace-nowrap">{HOSTEL_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="h-9 sm:h-10 px-3.5 sm:px-4 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[#102A1C] hover:bg-[#1B3B2B] active:scale-95 rounded-full transition-all shadow-xs shrink-0 cursor-pointer leading-none whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#DFB76C] shrink-0 hidden xs:inline-block" />
              <span>Enquire</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 sm:h-10 sm:w-10 inline-flex items-center justify-center text-[#102A1C] bg-white/80 hover:bg-[#F4EFE6] rounded-full border border-[#EFEAE1] transition-colors cursor-pointer shrink-0 active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close-icon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.16, ease: LUXURY_EASE }}
                    className="inline-flex"
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu-icon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.16, ease: LUXURY_EASE }}
                    className="inline-flex"
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile & Tablet Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: LUXURY_EASE }}
            className="lg:hidden bg-[#FDFBF7] border-b border-[#EFEAE1] overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4 space-y-1.5 max-h-[calc(100dvh-64px)] overflow-y-auto no-scrollbar">
              {navLinks.map((link, idx) => {
                const isActive = activePage === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.22, delay: idx * 0.03, ease: LUXURY_EASE }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full text-left py-3 px-3.5 rounded-xl text-sm font-semibold transition-colors min-h-[44px] flex items-center justify-between ${
                      isActive
                        ? 'text-[#102A1C] bg-[#FAF6ED] border border-[#DFB76C]/45 font-bold'
                        : 'text-[#4A5568] hover:text-[#102A1C] hover:bg-white/80'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#C5A059]" />}
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.18, ease: LUXURY_EASE }}
                className="pt-3 border-t border-[#EFEAE1] space-y-2.5"
              >
                <a
                  href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-[#102A1C] bg-white border border-[#EFEAE1] hover:border-[#C5A059] rounded-full shadow-2xs transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call: {HOSTEL_INFO.phonePrimary}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-white bg-[#102A1C] hover:bg-[#1B3B2B] active:scale-95 rounded-full shadow-md transition-all min-h-[44px] cursor-pointer group"
                >
                  <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                  <span>Enquire for Room</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
