import React, { useState } from 'react';
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/hostelData';

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
  const closeLightbox = () => setLightboxIndex(null);

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayPhotos.length) % displayPhotos.length);
    }
  };

  return (
    <section id="gallery" className={`${isStandalonePage ? 'section-space-lg bg-[#FDFBF7] text-[#102A1C]' : 'section-space bg-[#102A1C] text-white'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className={`kicker-label ${isStandalonePage ? 'text-[#C5A059]' : 'text-[#DFB76C]'} mb-2`}>
              <span className={`w-5 h-[1.5px] ${isStandalonePage ? 'bg-[#C5A059]' : 'bg-[#DFB76C]'}`} />
              <span>GALLERY</span>
            </div>
            <h2 className={`heading-section ${isStandalonePage ? 'text-[#102A1C]' : 'text-white'}`}>
              A Glimpse Of Our Spaces
            </h2>
            {isStandalonePage && (
              <p className="text-lead mt-2 max-w-xl">
                Explore real, verified photographs of ISHANVI property, sanitized rooms, quiet study library, and hygienic dining amenities in Ambegaon Bk, Pune.
              </p>
            )}
          </div>

          {onViewAllGallery && (
            <button
              onClick={onViewAllGallery}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${isStandalonePage ? 'text-[#102A1C] hover:text-[#C5A059]' : 'text-[#DFB76C] hover:text-white'} transition-colors cursor-pointer group self-start sm:self-auto`}
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* Category Filters for Standalone Page */}
        {isStandalonePage && (
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E2D9C8]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#102A1C] text-[#DFB76C] shadow-md border border-[#DFB76C]/40'
                    : 'bg-white text-[#1F2937] hover:text-[#102A1C] hover:bg-[#FAF8F5] border border-[#E2D9C8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Photos Grid: Clean photos with zero text overlay to match Ma'am's reference screenshot */}
        {isStandalonePage ? (
          /* Standalone Page: Clean cards with image on top and descriptive text cleanly below */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#E2D9C8] hover:border-[#DFB76C] transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* 100% Clean Image Container with Zero Text Overlay */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#DFB76C]" />
                  </div>
                </div>

                {/* Clean Descriptive Content Area BELOW the Photo */}
                <div className="p-4 sm:p-5 bg-white flex-1 flex flex-col justify-between border-t border-[#EFEAE1]">
                  <div>
                    <span className="text-[10px] font-bold text-[#A88238] uppercase tracking-wider block mb-1">
                      {photo.category.toUpperCase()}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-[#102A1C] group-hover:text-[#8C6D2D] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#5B6676] mt-1 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Homepage: 5 clean, un-overlayed rounded photo cards matching Screenshot exactly */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {displayPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/20 border border-white/15 hover:border-[#DFB76C] shadow-lg cursor-pointer transition-all duration-300"
                title={photo.title}
              >
                {/* Clean Photo - Zero Text Overlay on Image */}
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle zoom button indicator on hover */}
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#DFB76C]" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_PHOTOS[lightboxIndex].image}
              alt={GALLERY_PHOTOS[lightboxIndex].title}
              className="max-w-full max-h-[70vh] rounded-lg object-contain shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="text-center mt-4 text-white space-y-1">
              <h3 className="font-serif text-xl font-bold text-[#DFB76C]">
                {GALLERY_PHOTOS[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {GALLERY_PHOTOS[lightboxIndex].caption}
              </p>
              <p className="text-[11px] text-slate-400 tabular-nums">
                {lightboxIndex + 1} of {GALLERY_PHOTOS.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
