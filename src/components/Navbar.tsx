import React, { useState } from 'react';
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
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFEAE1] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          {/* Exact Brand Logo from Reference */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2 text-left cursor-pointer focus:outline-none group"
            title="ISHANVI Hostel & Accommodation - Home"
          >
            <img
              src={HOSTEL_INFO.logoUrl}
              alt="ISHANVI Hostel & Accommodation"
              className="h-9 sm:h-11 w-auto object-contain max-w-[180px] sm:max-w-[240px] mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Center Navigation Links matching reference */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-[#2C3530]">
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
                  className={`transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#102A1C] font-semibold border-b-2 border-[#C5A059]'
                      : 'hover:text-[#102A1C]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Forest Green Pill Enquire Now Button */}
          <div className="hidden md:flex items-center gap-3 xl:gap-4">
            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#102A1C] hover:text-[#C5A059] transition-colors"
              title="Call Reception"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{HOSTEL_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="btn-primary !py-2.5 !px-5 text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#102A1C] hover:bg-[#1B3B2B] active:scale-95 rounded-full transition-all"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#102A1C] hover:bg-[#F4EFE6] rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#EFEAE1] px-4 py-4 space-y-1.5 shadow-xl animate-in slide-in-from-top-2">
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
                className={`block w-full text-left py-3 px-3.5 rounded-xl text-sm font-semibold transition-colors min-h-[44px] flex items-center ${
                  isActive
                    ? 'text-[#102A1C] bg-[#FAF6ED] border-l-4 border-[#C5A059]'
                    : 'text-[#4A5568] hover:text-[#102A1C] hover:bg-white/70'
                }`}
              >
                {link.label}
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
