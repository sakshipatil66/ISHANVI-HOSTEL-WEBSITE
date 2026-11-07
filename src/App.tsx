/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EditorialInterlude } from './components/EditorialInterlude';
import { ExperiencePillarsSection } from './components/ExperiencePillarsSection';
import { RoomsSection } from './components/RoomsSection';
import { RoomComparisonSection } from './components/RoomComparisonSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { LifestyleStorySection } from './components/LifestyleStorySection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { BottomCtaSection } from './components/BottomCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { PageHeader } from './components/PageHeader';
import { OpeningLogoIntro } from './components/OpeningLogoIntro';
import { MessageCircle, Calendar } from 'lucide-react';
import { HOSTEL_INFO } from './data/hostelData';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);
  const [selectedRoomForEnquiry, setSelectedRoomForEnquiry] = useState<string | undefined>(undefined);
  const [showLogoIntro, setShowLogoIntro] = useState<boolean>(true);

  React.useEffect(() => {
    const titles: Record<string, string> = {
      home: 'ISHANVI | Luxury Hostel & Accommodation near ISMS Sankalp Ambegaon Pune',
      about: 'About Us | ISHANVI Hostel & Accommodation Ambegaon Bk Pune',
      rooms: 'Rooms & Pricing Enquiry | Single & Sharing Rooms | ISHANVI Hostel Pune',
      amenities: 'Hostel Amenities & Facilities | Wi-Fi, Food, Gym | ISHANVI Pune',
      gallery: 'Photo Gallery | Verified Property & Rooms | ISHANVI Hostel Pune',
      contact: 'Contact & Admissions Desk | ISHANVI Hostel Ambegaon Bk Pune',
    };
    if (titles[activePage]) {
      document.title = titles[activePage];
    }
  }, [activePage]);

  const handleOpenEnquiry = (roomName?: string) => {
    setSelectedRoomForEnquiry(roomName);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setSelectedRoomForEnquiry(undefined);
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#222B25] font-sans selection:bg-[#102A1C] selection:text-[#DFB76C] overflow-x-hidden">
      {/* Premium Opening Logo Intro Animation */}
      {showLogoIntro && (
        <OpeningLogoIntro onComplete={() => setShowLogoIntro(false)} />
      )}

      {/* Hairline Scroll Progress Bar */}
      <ScrollProgress />

      {/* Top Navigation Bar with Official ISHANVI Logo */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenEnquiry={handleOpenEnquiry}
        onReplayIntro={() => setShowLogoIntro(true)}
      />

      <main className="flex-1">
        {/* HOMEPAGE: Connected Storytelling with Premium 2-Slide Hero Carousel */}
        {activePage === 'home' && (
          <>
            {/* HERO SECTION: Dual-Slide Carousel with Both Uploaded Images */}
            <HeroSection
              onOpenEnquiry={handleOpenEnquiry}
              onExploreRooms={() => handlePageChange('rooms')}
            />

            {/* Welcome to ISHANVI Philosophy (Matching Screenshot 074022) */}
            <AboutSection onLearnMore={() => handlePageChange('about')} />

            {/* Editorial Interlude */}
            <EditorialInterlude />

            {/* Distinctive Pillars of Experience */}
            <ExperiencePillarsSection />

            {/* Rooms Designed For Your Comfort (Matching Screenshot 074113 Top) */}
            <RoomsSection
              onOpenEnquiry={handleOpenEnquiry}
              onViewAllRooms={() => handlePageChange('rooms')}
              isStandalonePage={false}
            />

            {/* Room Comparison Matrix */}
            <RoomComparisonSection onOpenEnquiry={handleOpenEnquiry} />

            {/* Amenities Everything You Need (Matching Screenshot 074113 Bottom) */}
            <AmenitiesSection isStandalonePage={false} />

            {/* Everyday Living Daily Rhythm Timeline */}
            <LifestyleStorySection />

            {/* Why Choose ISHANVI */}
            <WhyChooseSection onOpenEnquiry={() => handleOpenEnquiry('Campus Visit')} />

            {/* Immersive Gallery (Matching Screenshot 074059 Top) */}
            <GallerySection
              onViewAllGallery={() => handlePageChange('gallery')}
              isStandalonePage={false}
            />

            {/* Testimonials (Matching Screenshot 074059 Middle) */}
            <TestimonialsSection />

            {/* Location & Connectivity near ISMS Sankalp */}
            <LocationSection />

            {/* Bottom CTA Banner (Matching Screenshot 074059 Bottom) */}
            <BottomCtaSection onOpenEnquiry={handleOpenEnquiry} />

            {/* Lead Capture Admissions Desk */}
            <ContactSection initialRoom={selectedRoomForEnquiry} />
          </>
        )}

        {/* DEDICATED ROOMS PAGE WITH EXPANDED INFORMATION */}
        {activePage === 'rooms' && (
          <div className="space-y-6 sm:space-y-8">
            <PageHeader
              kicker="ACCOMMODATION & SPECIFICATIONS"
              title="Rooms Designed For Your Comfort"
              subtitle="Inspect verified room photographs, orthopaedic mattresses, ergonomic study desks, wooden wardrobes, and daily homestyle meals in Ambegaon Bk, Pune."
              onOpenEnquiry={handleOpenEnquiry}
            />
            <RoomsSection
              onOpenEnquiry={handleOpenEnquiry}
              isStandalonePage={true}
            />
            <RoomComparisonSection onOpenEnquiry={handleOpenEnquiry} />
            <BottomCtaSection onOpenEnquiry={handleOpenEnquiry} />
          </div>
        )}

        {/* DEDICATED ABOUT PAGE */}
        {activePage === 'about' && (
          <div className="space-y-12">
            <PageHeader
              kicker="OUR STORY & VALUES"
              title="About ISHANVI Residence"
              subtitle="Discover our philosophy of providing a peaceful sanctuary for scholars and professionals in Ambegaon Bk, Pune."
              onOpenEnquiry={handleOpenEnquiry}
            />
            <AboutSection onLearnMore={() => handlePageChange('contact')} />
            <EditorialInterlude />
            <ExperiencePillarsSection />
            <WhyChooseSection onOpenEnquiry={() => handleOpenEnquiry('Campus Visit')} />
            <BottomCtaSection onOpenEnquiry={handleOpenEnquiry} />
          </div>
        )}

        {/* DEDICATED AMENITIES PAGE */}
        {activePage === 'amenities' && (
          <div className="space-y-12">
            <PageHeader
              kicker="COMFORT IN EVERY DETAIL"
              title="Comprehensive Living Amenities"
              subtitle="Everything you need for focused learning, hygienic homestyle meals, power backup, and round-the-clock safety."
              onOpenEnquiry={handleOpenEnquiry}
            />
            <AmenitiesSection isStandalonePage={true} />
            <LifestyleStorySection />
            <BottomCtaSection onOpenEnquiry={handleOpenEnquiry} />
          </div>
        )}

        {/* DEDICATED GALLERY PAGE */}
        {activePage === 'gallery' && (
          <div className="space-y-12">
            <PageHeader
              kicker="IMMERSIVE SPACES"
              title="A Glimpse Of Our Spaces"
              subtitle="Tour verified photographs of our clean bedrooms, silent study library, hygienic dining hall, and guarded campus grounds."
              onOpenEnquiry={handleOpenEnquiry}
            />
            <GallerySection isStandalonePage={true} />
            <BottomCtaSection onOpenEnquiry={handleOpenEnquiry} />
          </div>
        )}

        {/* DEDICATED CONTACT PAGE */}
        {activePage === 'contact' && (
          <div className="space-y-12">
            <PageHeader
              kicker="REACH OUT DIRECTLY"
              title="Contact & Admissions Desk"
              subtitle="We welcome prospective residents and parents for room tours, pricing details, and admissions assistance near ISMS Sankalp."
              onOpenEnquiry={handleOpenEnquiry}
            />
            <ContactSection
              initialRoom={selectedRoomForEnquiry}
              isStandalonePage={true}
            />
            <LocationSection />
            <FaqSection onOpenEnquiry={handleOpenEnquiry} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handlePageChange}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Floating Quick Action Widgets */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <button
          onClick={() => handleOpenEnquiry()}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#102A1C] text-white text-xs font-semibold shadow-xl border border-[#DFB76C]/40 hover:bg-[#1B3B2B] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#DFB76C]" />
          <span>Book Tour</span>
        </button>

        <a
          href={`https://wa.me/917767058988?text=${encodeURIComponent('Hello ISHANVI Hostel, I would like to inquire about room availability.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform"
          title="Chat on WhatsApp (+91 77670 58988)"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        </a>
      </div>

      {/* Booking & Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        initialRoom={selectedRoomForEnquiry}
      />
    </div>
  );
}
