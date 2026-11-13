/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { MotionConfig, AnimatePresence, motion } from 'motion/react';
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
import { ReviewsPageSection } from './components/ReviewsPageSection';
import { MessageCircle } from 'lucide-react';

export type PageRoute = 'home' | 'about' | 'rooms' | 'amenities' | 'gallery' | 'reviews' | 'contact';

export const ROUTE_PATH_MAP: Record<string, PageRoute> = {
  '/': 'home',
  '/home': 'home',
  '/about': 'about',
  '/about-us': 'about',
  '/rooms': 'rooms',
  '/rooms-and-pricing': 'rooms',
  '/accommodation': 'rooms',
  '/amenities': 'amenities',
  '/facilities': 'amenities',
  '/gallery': 'gallery',
  '/photos': 'gallery',
  '/reviews': 'reviews',
  '/testimonials': 'reviews',
  '/contact': 'contact',
  '/contact-us': 'contact',
  '/admissions': 'contact',
};

export const PAGE_TO_PATH: Record<PageRoute, string> = {
  home: '/',
  about: '/about',
  rooms: '/rooms',
  amenities: '/amenities',
  gallery: '/gallery',
  reviews: '/reviews',
  contact: '/contact',
};

interface PageSeoData {
  title: string;
  description: string;
  keywords: string;
  path: string;
}

export const PAGE_SEO_MAP: Record<PageRoute, PageSeoData> = {
  home: {
    title: 'ISHANVI | Luxury Hostel & Accommodation near ISMS Sankalp Ambegaon Pune',
    description: 'Safe, secure, and well-managed hostel accommodation in Ambegaon Pune near ISMS Sankalp Business School. Featuring furnished single and sharing rooms, 24/7 security, high-speed Wi-Fi, 4 hygienic meals, and quiet study lounge.',
    keywords: 'Hostel in Ambegaon Pune, Hostel and Accommodation in Pune, Accommodation near ISMS Sankalp Business School, Hostel near Ambegaon Budruk, Student hostel Pune, Working professional hostel Katraj Pune',
    path: '/',
  },
  about: {
    title: 'About Us | ISHANVI Hostel & Accommodation Ambegaon Bk Pune',
    description: 'Learn about ISHANVI Hostel & Accommodation near ISMS Sankalp Business School, Ambegaon Bk, Pune. Discover our mission to provide scholars and professionals with a quiet, secure, and supportive living environment.',
    keywords: 'About ISHANVI Hostel, Hostel Ambegaon Pune background, student accommodation values, safe hostel near ISMS Sankalp, hostel facilities Pune',
    path: '/about',
  },
  rooms: {
    title: 'Rooms & Pricing Enquiry | Single & Sharing Rooms | ISHANVI Hostel Pune',
    description: 'Explore furnished Single, Double, and Executive Premium Rooms at ISHANVI Hostel in Ambegaon Bk Pune. Each room features orthopaedic mattresses, study desks, wooden wardrobes, attached bathrooms, and all-inclusive pricing.',
    keywords: 'Hostel rooms in Ambegaon Pune, Single room hostel Pune, Double sharing hostel near ISMS Sankalp, Premium AC room hostel, hostel room price Ambegaon',
    path: '/rooms',
  },
  amenities: {
    title: 'Hostel Amenities & Facilities | Wi-Fi, Food, Gym | ISHANVI Pune',
    description: 'Enjoy premium amenities at ISHANVI Hostel: 4 homestyle meals daily, silent study lounge, high-speed Wi-Fi, 24/7 CCTV security, solar water heating, power backup, and modern fitness center in Ambegaon Pune.',
    keywords: 'Hostel amenities Pune, hostel with mess food Ambegaon, study library hostel Pune, secure hostel CCTV Ambegaon Bk, gym hostel ISMS Sankalp',
    path: '/amenities',
  },
  gallery: {
    title: 'Photo Gallery | Verified Property & Rooms | ISHANVI Hostel Pune',
    description: 'Browse verified, authentic photographs of ISHANVI Hostel & Accommodation in Ambegaon Bk, Pune. High-resolution images of deluxe bedrooms, study lounge, dining hall, recreation areas, and building exterior.',
    keywords: 'Hostel photos Ambegaon Pune, room pictures ISHANVI hostel, hostel gallery Pune, student room photos ISMS Sankalp',
    path: '/gallery',
  },
  reviews: {
    title: 'Resident Reviews & Testimonials | ISHANVI Hostel Ambegaon Pune',
    description: 'Read authentic reviews and ratings from students and working professionals living at ISHANVI Hostel near ISMS Sankalp Business School in Ambegaon Bk, Pune. 4.9/5 resident satisfaction.',
    keywords: 'Hostel reviews Ambegaon Pune, ISHANVI hostel ratings, student feedback ISMS Sankalp hostel, safe hostel reviews Pune',
    path: '/reviews',
  },
  contact: {
    title: 'Contact & Admissions Desk | ISHANVI Hostel Ambegaon Bk Pune',
    description: 'Get in touch with ISHANVI Hostel & Accommodation. Located near ISMS Sankalp Business School, Ambegaon Bk, Pune. Call +91 77670 58988 for room bookings, price details, and campus tours.',
    keywords: 'Contact ISHANVI Hostel, Hostel phone number Ambegaon, hostel address near ISMS Sankalp, book hostel room Pune, admissions desk ISHANVI',
    path: '/contact',
  },
};

/**
 * Determine the active page from the window location pathname or hash.
 */
function getPageFromLocation(): PageRoute {
  if (typeof window === 'undefined') return 'home';

  // 1. Direct pathname resolution
  const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (ROUTE_PATH_MAP[pathname]) {
    return ROUTE_PATH_MAP[pathname];
  }

  // 2. Hash fallback resolution (#about, #/about, #rooms, etc.)
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
  if (hash) {
    const hashPath = `/${hash}`;
    if (ROUTE_PATH_MAP[hashPath]) {
      return ROUTE_PATH_MAP[hashPath];
    }
  }

  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>(() => getPageFromLocation());
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);
  const [selectedRoomForEnquiry, setSelectedRoomForEnquiry] = useState<string | undefined>(undefined);

  // Cinematic intro plays ONLY once on initial entry of the browser session
  const [showLogoIntro, setShowLogoIntro] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined') {
        const seen = sessionStorage.getItem('ishanvi_intro_seen');
        return seen !== 'true';
      }
    } catch {
      // ignore
    }
    return false;
  });

  const handleLogoIntroComplete = useCallback(() => {
    setShowLogoIntro(false);
    try {
      sessionStorage.setItem('ishanvi_intro_seen', 'true');
    } catch {
      // ignore
    }
  }, []);

  // Dynamically update document title, meta description, keywords, canonical, and OG/Twitter tags per page
  useEffect(() => {
    const seo = PAGE_SEO_MAP[activePage] || PAGE_SEO_MAP.home;
    document.title = seo.title;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    setMetaTag('name', 'description', seo.description);
    setMetaTag('name', 'keywords', seo.keywords);
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);

    const canonicalUrl = `https://ishanvihostel.com${seo.path === '/' ? '' : seo.path}`;
    setMetaTag('property', 'og:url', canonicalUrl);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [activePage]);

  // Handle browser Back / Forward buttons and URL hash changes
  useEffect(() => {
    const syncRouteFromLocation = () => {
      const page = getPageFromLocation();
      setActivePage(page);
    };

    window.addEventListener('popstate', syncRouteFromLocation);
    window.addEventListener('hashchange', syncRouteFromLocation);

    return () => {
      window.removeEventListener('popstate', syncRouteFromLocation);
      window.removeEventListener('hashchange', syncRouteFromLocation);
    };
  }, []);

  // Multi-page navigation handler
  const handlePageChange = (target: string) => {
    const page: PageRoute =
      ROUTE_PATH_MAP[target] ||
      (target in PAGE_TO_PATH ? (target as PageRoute) : 'home');
    const path = PAGE_TO_PATH[page] || '/';

    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }

    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (roomName?: string) => {
    setSelectedRoomForEnquiry(roomName);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setSelectedRoomForEnquiry(undefined);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#222B25] font-sans selection:bg-[#102A1C] selection:text-[#DFB76C] overflow-x-hidden">
        {/* Cinematic Logo Intro Animation (Initial session entry only) */}
        {showLogoIntro && (
          <OpeningLogoIntro onComplete={handleLogoIntroComplete} />
        )}

        {/* Hairline Scroll Progress Bar */}
        <ScrollProgress />

        {/* Top Navigation Bar with Official ISHANVI Logo & Multi-page Links */}
        <Navbar
          activePage={activePage}
          setActivePage={handlePageChange}
          onOpenEnquiry={handleOpenEnquiry}
        />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* =========================================================================
                  PAGE 1: HOME
                  ========================================================================= */}
              {activePage === 'home' && (
          <>
            <HeroSection
              onOpenEnquiry={handleOpenEnquiry}
              onExploreRooms={() => handlePageChange('rooms')}
            />

            <AboutSection onLearnMore={() => handlePageChange('about')} />

            <RoomsSection
              onOpenEnquiry={handleOpenEnquiry}
              onViewAllRooms={() => handlePageChange('rooms')}
              isStandalonePage={false}
            />

            <AmenitiesSection isStandalonePage={false} />

            <GallerySection
              onViewAllGallery={() => handlePageChange('gallery')}
              isStandalonePage={false}
            />

            <TestimonialsSection />

            <BottomCtaSection onOpenEnquiry={handleOpenEnquiry} />
          </>
        )}

        {/* =========================================================================
            PAGE 2: ABOUT US (DEDICATED MULTI-PAGE VIEW)
            ========================================================================= */}
        {activePage === 'about' && (
          <div className="w-full">
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

        {/* =========================================================================
            PAGE 3: ROOMS & SPECIFICATIONS (DEDICATED MULTI-PAGE VIEW)
            ========================================================================= */}
        {activePage === 'rooms' && (
          <div className="w-full">
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

        {/* =========================================================================
            PAGE 4: AMENITIES & LIFESTYLE (DEDICATED MULTI-PAGE VIEW)
            ========================================================================= */}
        {activePage === 'amenities' && (
          <div className="w-full">
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

        {/* =========================================================================
            PAGE 5: PHOTO GALLERY (DEDICATED MULTI-PAGE VIEW)
            ========================================================================= */}
        {activePage === 'gallery' && (
          <div className="w-full">
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

        {/* =========================================================================
            PAGE 6: REVIEWS & TESTIMONIALS (DEDICATED MULTI-PAGE VIEW)
            ========================================================================= */}
        {activePage === 'reviews' && (
          <div className="w-full">
            <PageHeader
              kicker="RESIDENT VOICES & PARENT REVIEWS"
              title="What Our Residents & Parents Say"
              subtitle="Verified ratings and experiences from scholars at ISMS Sankalp Business School, engineering students, and parents living at ISHANVI Hostel."
              onOpenEnquiry={handleOpenEnquiry}
            />
            <ReviewsPageSection onOpenEnquiry={handleOpenEnquiry} />
            <BottomCtaSection onOpenEnquiry={handleOpenEnquiry} />
          </div>
        )}

              {/* =========================================================================
                  PAGE 7: CONTACT US & ADMISSIONS (DEDICATED MULTI-PAGE VIEW)
                  ========================================================================= */}
              {activePage === 'contact' && (
                <div className="w-full">
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
                  <BottomCtaSection onOpenEnquiry={handleOpenEnquiry} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Global Footer */}
        <Footer
          onNavClick={handlePageChange}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Floating WhatsApp Action Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
        >
          <motion.a
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            href={`https://wa.me/917767058988?text=${encodeURIComponent(
              'Hello ISHANVI Hostel, I would like to inquire about room availability.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-shadow hover:shadow-[0_10px_28px_rgba(37,211,102,0.45)]"
            title="Chat on WhatsApp (+91 77670 58988)"
          >
            <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          </motion.a>
        </motion.div>

        {/* Booking & Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={handleCloseEnquiry}
          initialRoom={selectedRoomForEnquiry}
        />
      </div>
    </MotionConfig>
  );
}
