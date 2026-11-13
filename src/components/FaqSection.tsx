import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, MessageSquare, Phone, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS_DATA, HOSTEL_INFO, FaqItem } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface FaqSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'rooms', label: 'Rooms & Booking' },
    { id: 'food', label: 'Meals & Food' },
    { id: 'security', label: 'Security & Curfew' },
    { id: 'amenities', label: 'Amenities & Wi-Fi' },
    { id: 'admission', label: 'Admissions & KYC' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq: FaqItem) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        faq.category?.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-space bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none animate-float-ambient" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.55, ease: LUXURY_EASE }}
          className="text-center mb-6 sm:mb-7"
        >
          <div className="kicker-label justify-center mb-2">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>ADMISSIONS &amp; RESIDENCE FAQ</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Frequently Asked Questions
          </h2>
          <p className="text-lead mt-2 max-w-xl mx-auto">
            Everything students and parents need to know about tariffs, food hygiene, study hours, security, and room bookings in Ambegaon Bk, Pune.
          </p>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-3.5 mb-6">
          {/* Search Box */}
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-[#5B6676] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. curfew, Wi-Fi, meals, deposit)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-16 py-2.5 rounded-full bg-white border border-[#EFEAE1] text-sm text-[#102A1C] placeholder:text-[#64748B] shadow-2xs focus:outline-none focus:border-[#102A1C] focus:ring-2 focus:ring-[#DFB76C]/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#5B6676] hover:text-[#102A1C] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setOpenIndex(0);
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-[#DFB76C]'
                      : 'bg-white text-[#4A5568] hover:text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C]/60'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeFaqCategory"
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                      className="absolute inset-0 rounded-full bg-[#102A1C] shadow-md border border-[#DFB76C]/40"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Structured Questions Accordion */}
        {filteredFaqs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center bg-white rounded-2xl border border-[#EFEAE1] space-y-2 shadow-xs"
          >
            <HelpCircle className="w-8 h-8 text-[#C5A059] mx-auto" />
            <p className="text-sm font-semibold text-[#102A1C]">No matching questions found</p>
            <p className="text-xs text-[#5B6676]">
              Try searching with another keyword or contact our admissions warden directly.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn-secondary !py-2 !px-4 text-xs mt-2 cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq: FaqItem, index: number) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: LUXURY_EASE }}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-2xl border border-[#EFEAE1] overflow-hidden shadow-2xs hover:border-[#DFB76C]/70 hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="relative w-full p-4 sm:p-5 sm:px-12 text-center flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#FAF8F5]/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] text-[#8C6D2D] text-[11px] font-bold flex items-center justify-center shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-[#102A1C] leading-snug text-center">
                      {faq.question}
                    </span>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 sm:absolute sm:right-5 sm:top-1/2 sm:-translate-y-1/2 ${
                        isOpen ? 'bg-[#102A1C] text-white rotate-180' : 'bg-[#FAF8F5] text-[#102A1C]'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: LUXURY_EASE }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-3 sm:px-8 sm:pb-5 text-xs sm:text-sm text-[#4A5568] leading-relaxed border-t border-[#EFEAE1]/60 bg-[#FAF8F5]/40 space-y-3 text-center">
                          <p className="max-w-3xl mx-auto">{faq.answer}</p>
                          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-[#EFEAE1]/40 text-[11px] text-[#5B6676]">
                            <span className="flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#C5A059]" />
                              Category: {faq.category || 'General Residence'}
                            </span>
                            <button
                              onClick={() => onOpenEnquiry(faq.question)}
                              className="text-[#8C6D2D] font-semibold hover:underline cursor-pointer"
                            >
                              Need further clarity? Enquire →
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Direct Contact Assistance Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.55, delay: 0.08, ease: LUXURY_EASE }}
          className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] text-center space-y-2 shadow-xs"
        >
          <h3 className="heading-card text-sm sm:text-base text-[#102A1C]">
            Still have an unanswered question about admissions?
          </h3>
          <p className="text-xs text-[#5B6676] max-w-md mx-auto">
            Our admissions warden is directly reachable by phone and WhatsApp to discuss room availability and booking.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="btn-primary !py-2.5 !px-4 text-xs min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFB76C]" />
              <span>Call: {HOSTEL_INFO.phonePrimary}</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/917767058988?text=${encodeURIComponent('Hello ISHANVI, I have a query regarding hostel admissions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2.5 !px-4 text-xs !text-[#102A1C] hover:!border-[#16A34A] min-h-[44px]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
