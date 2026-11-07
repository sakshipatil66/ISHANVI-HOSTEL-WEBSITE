import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, MessageSquare, Phone, HelpCircle } from 'lucide-react';
import { FAQS_DATA, HOSTEL_INFO, FaqItem } from '../data/hostelData';

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
    <section id="faq" className="section-space bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="kicker-label justify-center mb-2">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>ADMISSIONS & RESIDENCE FAQ</span>
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
        <div className="space-y-3 mb-8">
          {/* Search Box */}
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-[#5B6676] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. curfew, Wi-Fi, meals, deposit)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#EFEAE1] text-xs text-[#102A1C] placeholder:text-[#A0AEC0] shadow-2xs focus:outline-none focus:border-[#102A1C] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#5B6676] hover:text-[#102A1C]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#102A1C] text-white shadow-2xs'
                    : 'bg-white text-[#4A5568] hover:text-[#102A1C] border border-[#EFEAE1]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Structured Questions Accordion */}
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-[#EFEAE1] space-y-2">
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
              className="btn-secondary !py-2 !px-4 text-xs mt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq: FaqItem, index: number) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-[#EFEAE1] overflow-hidden shadow-2xs hover:border-[#DFB76C]/70 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] text-[#8C6D2D] text-[11px] font-bold flex items-center justify-center shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-sm sm:text-base font-bold text-[#102A1C] truncate">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
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
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-3 sm:px-6 text-xs sm:text-sm text-[#4A5568] leading-relaxed border-t border-[#EFEAE1]/60 bg-[#FAF8F5]/40 space-y-3">
                          <p>{faq.answer}</p>
                          <div className="flex items-center justify-between pt-2 border-t border-[#EFEAE1]/40 text-[11px] text-[#5B6676]">
                            <span>Category: {faq.category || 'General Residence'}</span>
                            <button
                              onClick={() => onOpenEnquiry(faq.question)}
                              className="text-[#8C6D2D] font-semibold hover:underline"
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
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] text-center space-y-2">
          <h3 className="font-serif text-sm sm:text-base font-bold text-[#102A1C]">
            Still have an unanswered question about admissions?
          </h3>
          <p className="text-xs text-[#5B6676] max-w-md mx-auto">
            Our admissions warden is directly reachable by phone and WhatsApp to discuss room availability and booking.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="btn-primary !py-2 !px-4 text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFB76C]" />
              <span>Call: {HOSTEL_INFO.phonePrimary}</span>
            </a>
            <a
              href={`https://wa.me/917767058988?text=${encodeURIComponent('Hello ISHANVI, I have a query regarding hostel admissions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2 !px-4 text-xs text-[#25D366] hover:text-[#102A1C]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
