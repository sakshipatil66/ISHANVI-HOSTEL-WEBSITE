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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFEAE1] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          {/* Exact Brand Logo from Reference */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left cursor-pointer focus:outline-none group"
            title="ISHANVI Hostel & Accommodation - Home"
          >
            <img
              src={HOSTEL_INFO.logoUrl}
              alt="ISHANVI Hostel & Accommodation"
              className="h-9 sm:h-11 w-auto object-contain max-w-[180px] sm:max-w-[240px] mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>

          {/* Center Navigation Links matching reference */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-[#2C3530]">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#102A1C] font-semibold border-b-2 border-[#C5A059]'
                      : 'hover:text-[#102A1C]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Forest Green Pill Enquire Now Button */}
          <div className="hidden md:flex items-center gap-4">

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

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#102A1C] rounded-full sm:hidden"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#102A1C] hover:bg-[#F4EFE6] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#EFEAE1] px-6 py-5 space-y-3 shadow-md animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                activePage === link.id
                  ? 'text-[#102A1C] font-bold text-base'
                  : 'text-[#4A5568] hover:text-[#102A1C]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#EFEAE1] space-y-2">
            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-[#102A1C] bg-white border border-[#EFEAE1] rounded-full"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call: {HOSTEL_INFO.phonePrimary}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-[#102A1C] rounded-full shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
