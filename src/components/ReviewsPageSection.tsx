import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Users,
  GraduationCap,
  Heart,
  MessageSquare,
  Plus,
  X,
  Send,
  Building,
} from 'lucide-react';
import { TESTIMONIALS_LIST, TestimonialItem } from '../data/hostelData';
import { LUXURY_EASE, VIEWPORT_CONFIG } from '../lib/motion';

interface ReviewsPageSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const ReviewsPageSection: React.FC<ReviewsPageSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'students' | 'parents' | 'professionals'>('all');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [reviewsList, setReviewsList] = useState<TestimonialItem[]>(TESTIMONIALS_LIST);

  // Form state
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState<'Student' | 'Parent' | 'Working Professional'>('Student');
  const [formInstitution, setFormInstitution] = useState('');
  const [formQuote, setFormQuote] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (!isSubmitModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSubmitModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isSubmitModalOpen]);

  const filterReviews = () => {
    if (selectedCategory === 'all') return reviewsList;
    if (selectedCategory === 'students') {
      return reviewsList.filter(
        (r) => r.role.toLowerCase().includes('student') || r.institution?.toLowerCase().includes('scholar')
      );
    }
    if (selectedCategory === 'parents') {
      return reviewsList.filter((r) => r.role.toLowerCase().includes('parent'));
    }
    if (selectedCategory === 'professionals') {
      return reviewsList.filter((r) => r.role.toLowerCase().includes('professional'));
    }
    return reviewsList;
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formQuote.trim()) return;

    const newReview: TestimonialItem = {
      id: `user-${Date.now()}`,
      author: formName.trim(),
      role: formRole,
      institution: formInstitution.trim() || `${formRole}, Ambegaon Bk`,
      quote: formQuote.trim(),
      rating: formRating,
      roomType: 'Verified Resident',
    };

    setReviewsList([newReview, ...reviewsList]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsSubmitModalOpen(false);
      setFormName('');
      setFormInstitution('');
      setFormQuote('');
      setFormRating(5);
    }, 1800);
  };

  const displayedReviews = filterReviews();

  return (
    <section className="section-space bg-[#FDFBF7] text-[#102A1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-9">
        <h2 className="sr-only">Verified Resident Ratings &amp; Reviews</h2>
        {/* Scorecard & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Main Rating Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
            className="lg:col-span-5 bg-gradient-to-br from-[#102A1C] to-[#1B3B2B] text-white p-5 sm:p-7 rounded-3xl border border-[#DFB76C]/30 shadow-xl flex flex-col justify-between text-center items-center"
          >
            <div className="w-full">
              <div className="flex items-center justify-center gap-2 text-[#DFB76C] text-xs font-bold uppercase tracking-widest mb-3">
                <ShieldCheck className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <span>VERIFIED RESIDENCY REVIEWS</span>
              </div>
              <div className="flex items-baseline justify-center gap-3">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-white tracking-tight">4.9</span>
                <span className="text-xl sm:text-2xl text-[#DFB76C] font-semibold">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#DFB76C] text-[#DFB76C]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed max-w-md mx-auto">
                Based on reviews from verified residents, parents, and scholars attending ISMS Sankalp Business School & Ambegaon institutions.
              </p>
            </div>

            <div className="w-full pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/15 flex flex-col items-center justify-center gap-3 text-center">
              <div className="text-center min-w-0">
                <p className="text-xs text-slate-300">Total Resident Trust</p>
                <p className="font-bold text-sm text-[#DFB76C]">100% Parent Endorsement</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsSubmitModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#DFB76C] hover:bg-[#EAC885] text-[#102A1C] text-xs font-bold transition-colors shadow-md cursor-pointer shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Write a Review</span>
              </motion.button>
            </div>
          </motion.div>

          {/* 4 Trust Metrics */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.05, ease: LUXURY_EASE }}
              whileHover={{ y: -3 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EFEAE1] shadow-2xs hover:shadow-md hover:border-[#DFB76C]/60 transition-all space-y-2 flex flex-col justify-between text-center items-center"
            >
              <div className="w-full">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#8C6D2D] border border-[#EFEAE1] flex items-center justify-center mb-2 mx-auto">
                  <ShieldCheck className="w-5 h-5 text-[#8C6D2D]" />
                </div>
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3 className="heading-card text-base text-[#102A1C]">Safety &amp; Security</h3>
                  <span className="font-mono text-xs font-bold text-[#8C6D2D] shrink-0">5.0 / 5.0</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#5B6676] leading-relaxed mt-1.5">
                  24/7 guarded gates, CCTV monitoring across corridors, biometric visitor registers, and caring resident wardens.
                </p>
              </div>
              <div className="w-full bg-[#F3EFE6] h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.9, delay: 0.15, ease: LUXURY_EASE }}
                  style={{ transformOrigin: 'left' }}
                  className="bg-[#8C6D2D] h-full w-[100%]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.12, ease: LUXURY_EASE }}
              whileHover={{ y: -3 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EFEAE1] shadow-2xs hover:shadow-md hover:border-[#DFB76C]/60 transition-all space-y-2 flex flex-col justify-between text-center items-center"
            >
              <div className="w-full">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#8C6D2D] border border-[#EFEAE1] flex items-center justify-center mb-2 mx-auto">
                  <Heart className="w-5 h-5 text-[#8C6D2D]" />
                </div>
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3 className="heading-card text-base text-[#102A1C]">Hygienic Homestyle Meals</h3>
                  <span className="font-mono text-xs font-bold text-[#8C6D2D] shrink-0">4.9 / 5.0</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#5B6676] leading-relaxed mt-1.5">
                  4 fresh vegetarian chef-prepared meals daily: breakfast with chai, wholesome lunch, evening snacks, and hot dinner.
                </p>
              </div>
              <div className="w-full bg-[#F3EFE6] h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.9, delay: 0.22, ease: LUXURY_EASE }}
                  style={{ transformOrigin: 'left' }}
                  className="bg-[#8C6D2D] h-full w-[98%]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.19, ease: LUXURY_EASE }}
              whileHover={{ y: -3 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EFEAE1] shadow-2xs hover:shadow-md hover:border-[#DFB76C]/60 transition-all space-y-2 flex flex-col justify-between text-center items-center"
            >
              <div className="w-full">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#8C6D2D] border border-[#EFEAE1] flex items-center justify-center mb-2 mx-auto">
                  <GraduationCap className="w-5 h-5 text-[#8C6D2D]" />
                </div>
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3 className="heading-card text-base text-[#102A1C]">Study Environment</h3>
                  <span className="font-mono text-xs font-bold text-[#8C6D2D] shrink-0">4.9 / 5.0</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#5B6676] leading-relaxed mt-1.5">
                  Enforced silent hours, dedicated quiet study library, high-speed fiber internet, and 100% power generator backup.
                </p>
              </div>
              <div className="w-full bg-[#F3EFE6] h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.9, delay: 0.29, ease: LUXURY_EASE }}
                  style={{ transformOrigin: 'left' }}
                  className="bg-[#8C6D2D] h-full w-[98%]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: 0.26, ease: LUXURY_EASE }}
              whileHover={{ y: -3 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EFEAE1] shadow-2xs hover:shadow-md hover:border-[#DFB76C]/60 transition-all space-y-2 flex flex-col justify-between text-center items-center"
            >
              <div className="w-full">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#8C6D2D] border border-[#EFEAE1] flex items-center justify-center mb-2 mx-auto">
                  <Building className="w-5 h-5 text-[#8C6D2D]" />
                </div>
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3 className="heading-card text-base text-[#102A1C]">Daily Housekeeping</h3>
                  <span className="font-mono text-xs font-bold text-[#8C6D2D] shrink-0">4.8 / 5.0</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#5B6676] leading-relaxed mt-1.5">
                  Spotless daily floor sweeping, mopping, sanitized washrooms, prompt electrical support, and on-site laundry.
                </p>
              </div>
              <div className="w-full bg-[#F3EFE6] h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.9, delay: 0.36, ease: LUXURY_EASE }}
                  style={{ transformOrigin: 'left' }}
                  className="bg-[#8C6D2D] h-full w-[96%]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-col items-center justify-center gap-3 pt-4 border-b border-[#EFEAE1] pb-5 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'students', label: 'Student Scholars' },
              { id: 'parents', label: 'Parents & Families' },
              { id: 'professionals', label: 'Working Professionals' },
            ].map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-[#DFB76C]'
                      : 'bg-white text-[#4A5568] hover:text-[#102A1C] hover:bg-[#FAF8F5] border border-[#EFEAE1]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeReviewTab"
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                      className="absolute inset-0 rounded-full bg-[#102A1C] shadow-md border border-[#DFB76C]/40"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>

          <span className="text-xs text-[#5B6676]">
            Showing <strong>{displayedReviews.length}</strong> verified reviews
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {displayedReviews.map((item, idx) => {
              const initials = item.author
                .split(' ')
                .map((n) => n[0])
                .join('');

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.42, delay: idx * 0.04, ease: LUXURY_EASE }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EFEAE1] shadow-xs hover:shadow-xl hover:border-[#DFB76C]/60 transition-all flex flex-col justify-between space-y-4 group text-center items-center"
                >
                  <div className="space-y-3 sm:space-y-4 w-full">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Quote className="w-7 h-7 text-[#DFB76C]/40 group-hover:text-[#DFB76C] transition-colors" />
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#DFB76C] text-[#DFB76C]" />
                        ))}
                      </div>
                    </div>

                    <p className="text-body text-[#4A5568] leading-relaxed italic text-center">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="w-full pt-4 sm:pt-5 border-t border-[#EFEAE1]/70 flex flex-col items-center justify-center gap-2.5 text-center">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#102A1C] text-[#DFB76C] font-serif font-bold text-sm flex items-center justify-center border-2 border-[#DFB76C]/40 shrink-0 shadow-xs mx-auto">
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="heading-card text-sm text-[#102A1C]">{item.author}</h3>
                      <p className="text-caption text-[#5B6676]">{item.institution || item.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#8C6D2D] bg-[#FAF8F5] border border-[#EFEAE1] px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-[#8C6D2D]" />
                      <span>Verified</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {isSubmitModalOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: LUXURY_EASE }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsSubmitModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: LUXURY_EASE }}
              className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 border border-[#EFEAE1] shadow-2xl relative max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#5B6676] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: LUXURY_EASE }}
                    className="text-center py-8 space-y-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#102A1C] text-[#DFB76C] flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="heading-card text-xl text-[#102A1C]">Thank You for Your Feedback!</h3>
                    <p className="text-xs sm:text-sm text-[#5B6676]">
                      Your review has been successfully submitted and verified.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleReviewSubmit}
                    className="space-y-4"
                  >
                <div className="space-y-1">
                  <div className="kicker-label">
                    <span className="w-4 h-[1.5px] bg-[#C5A059]" />
                    <span>SHARE YOUR EXPERIENCE</span>
                  </div>
                  <h3 className="heading-card text-xl text-[#102A1C]">Write a Resident Review</h3>
                  <p className="text-xs text-[#5B6676]">
                    Help future scholars and parents learn about living at ISHANVI.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A1C] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Aditi Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEAE1] text-sm text-[#102A1C] placeholder:text-[#64748B] focus:outline-none focus:border-[#102A1C] bg-[#FAF8F5]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#102A1C] mb-1">You Are A *</label>
                    <select
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#EFEAE1] text-sm text-[#102A1C] focus:outline-none focus:border-[#102A1C] bg-[#FAF8F5]"
                    >
                      <option value="Student">Student</option>
                      <option value="Parent">Parent</option>
                      <option value="Working Professional">Working Professional</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102A1C] mb-1">Star Rating</label>
                    <div className="flex items-center gap-1 py-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="cursor-pointer focus:outline-none p-0.5"
                          aria-label={`Rate ${star} stars`}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= formRating
                                ? 'fill-[#DFB76C] text-[#DFB76C]'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A1C] mb-1">College / Organization</label>
                  <input
                    type="text"
                    value={formInstitution}
                    onChange={(e) => setFormInstitution(e.target.value)}
                    placeholder="e.g. ISMS Sankalp Business School"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEAE1] text-sm text-[#102A1C] placeholder:text-[#64748B] focus:outline-none focus:border-[#102A1C] bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A1C] mb-1">Your Review & Feedback *</label>
                  <textarea
                    required
                    rows={4}
                    value={formQuote}
                    onChange={(e) => setFormQuote(e.target.value)}
                    placeholder="Describe your stay, food quality, safety, study environment, and staff friendliness..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEAE1] text-sm text-[#102A1C] placeholder:text-[#64748B] focus:outline-none focus:border-[#102A1C] bg-[#FAF8F5]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#102A1C] text-white text-xs font-bold hover:bg-[#1B3B2B] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#DFB76C]" />
                  <span>Submit Verified Review</span>
                </motion.button>
              </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
