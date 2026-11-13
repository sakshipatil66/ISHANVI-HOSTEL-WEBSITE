import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface GallerySectionProps {
  onViewAllGallery?: () => void;
  isStandalonePage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onViewAllGallery,
  isStandalonePage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Spaces' },
    { id: 'rooms', label: 'Authentic Rooms' },
    { id: 'study', label: 'Study & Library' },
    { id: 'amenities', label: 'Amenities & Dining' },
    { id: 'campus', label: 'Campus & Reception' },
  ];

  const displayPhotos = isStandalonePage
    ? selectedCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory)
    : GALLERY_PHOTOS.slice(0, 5);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % displayPhotos.length : null));
  }, [displayPhotos.length]);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + displayPhotos.length) % displayPhotos.length : null
    );
  }, [displayPhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextPhoto();
      else if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto]);

  const activePhoto =
    lightboxIndex !== null && displayPhotos[lightboxIndex]
      ? displayPhotos[lightboxIndex]
      : null;

  return (
    <section id="gallery" className={`${isStandalonePage ? 'section-space-lg bg-[#FDFBF7] text-[#102A1C]' : 'section-space bg-[#102A1C] text-white'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className={
            isStandalonePage
              ? 'text-center max-w-2xl mx-auto mb-6 sm:mb-8'
              : 'flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-7 gap-4'
          }
        >
          <div>
            <div className={`kicker-label ${isStandalonePage ? 'justify-center text-[#C5A059]' : 'text-[#DFB76C]'} mb-2`}>
              <span className={`w-5 h-[1.5px] ${isStandalonePage ? 'bg-[#C5A059]' : 'bg-[#DFB76C]'}`} />
              <span>GALLERY</span>
              {isStandalonePage && <span className="w-5 h-[1.5px] bg-[#C5A059]" />}
            </div>
            <h2 className={`heading-section ${isStandalonePage ? 'text-[#102A1C]' : 'text-white'}`}>
              A Glimpse Of Our Spaces
            </h2>
            {isStandalonePage && (
              <p className="text-lead mt-2 max-w-xl mx-auto">
                Explore real, verified photographs of ISHANVI property, sanitized rooms, quiet study library, and hygienic dining amenities in Ambegaon Bk, Pune.
              </p>
            )}
          </div>

          {onViewAllGallery && (
            <motion.button
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onViewAllGallery}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${isStandalonePage ? 'text-[#102A1C] hover:text-[#C5A059]' : 'text-[#DFB76C] hover:text-white'} transition-colors cursor-pointer group ${isStandalonePage ? 'mt-3' : 'self-start sm:self-auto'}`}
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          )}
        </motion.div>

        {/* Category Filters for Standalone Page */}
        {isStandalonePage && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8 pb-3 border-b border-[#E2D9C8]">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`relative px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-[#DFB76C]'
                      : 'bg-white text-[#1F2937] hover:text-[#102A1C] hover:bg-[#FAF8F5] border border-[#E2D9C8]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeGalleryTab"
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                      className="absolute inset-0 rounded-full bg-[#102A1C] shadow-md border border-[#DFB76C]/40"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Photos Grid: Clean photos with zero text overlay */}
        {isStandalonePage ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {displayPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.42, delay: index * 0.04, ease: LUXURY_EASE }}
                  whileHover={{ y: -5 }}
                  onClick={() => openLightbox(index)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#E2D9C8] hover:border-[#DFB76C] transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                    <img
                      src={photo.image}
                      alt={`${photo.title} - ${photo.caption}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="p-4 sm:p-5 bg-white flex-1 flex flex-col justify-between border-t border-[#EFEAE1] text-center">
                    <div>
                      <span className="text-[11px] font-bold text-[#856626] uppercase tracking-wider block mb-1">
                        {photo.category.toUpperCase()}
                      </span>
                      <h3 className="heading-card text-sm sm:text-base text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-body-sm text-[#5B6676] mt-1">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {displayPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: index * 0.06, ease: LUXURY_EASE }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/20 border border-white/15 hover:border-[#DFB76C] shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 ${
                  index === 4 ? 'col-span-2 sm:col-span-1' : ''
                }`}
                title={photo.title}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: LUXURY_EASE }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer z-50"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer z-50"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePhoto.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.28, ease: LUXURY_EASE }}
                className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center px-8 sm:px-14"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-w-full max-h-[68vh] rounded-lg object-contain shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center mt-4 text-white space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#DFB76C]">
                    {activePhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {activePhoto.caption}
                  </p>
                  <p className="text-[11px] text-slate-400 tabular-nums">
                    {lightboxIndex + 1} of {displayPhotos.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
