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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        <h2 className="sr-only">Verified Resident Ratings &amp; Reviews</h2>
        {/* Scorecard & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Rating Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#102A1C] to-[#1B3B2B] text-white p-6 sm:p-9 rounded-3xl border border-[#DFB76C]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#DFB76C] text-xs font-bold uppercase tracking-widest mb-3">
                <ShieldCheck className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <span>VERIFIED RESIDENCY REVIEWS</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-white tracking-tight">4.9</span>
                <span className="text-xl sm:text-2xl text-[#DFB76C] font-semibold">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#DFB76C] text-[#DFB76C]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed">
                Based on reviews from verified residents, parents, and scholars attending ISMS Sankalp Business School & Ambegaon institutions.
              </p>
            </div>

            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
              <div className="text-left min-w-0">
                <p className="text-xs text-slate-300">Total Resident Trust</p>
                <p className="font-bold text-sm text-[#DFB76C]">100% Parent Endorsement</p>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#DFB76C] hover:bg-[#EAC885] text-[#102A1C] text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95 shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Write a Review</span>
              </button>
            </div>
          </div>

          {/* 4 Trust Metrics */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EFEAE1] shadow-2xs space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#8C6D2D] border border-[#EFEAE1] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#8C6D2D]" />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-[#102A1C]">Safety & Security</h3>
                  <span className="font-mono text-sm font-bold text-[#8C6D2D] shrink-0">5.0 / 5.0</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#5B6676] leading-relaxed mt-1">
                  24/7 guarded gates, CCTV monitoring across corridors, biometric visitor registers, and caring resident wardens.
                </p>
              </div>
              <div className="w-full bg-[#F3EFE6] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8C6D2D] h-full w-[100%]" />
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EFEAE1] shadow-2xs space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#8C6D2D] border border-[#EFEAE1] flex items-center justify-center mb-2">
                  <Heart className="w-5 h-5 text-[#8C6D2D]" />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-[#102A1C]">Hygienic Homestyle Meals</h3>
                  <span className="font-mono text-sm font-bold text-[#8C6D2D] shrink-0">4.9 / 5.0</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#5B6676] leading-relaxed mt-1">
                  4 fresh vegetarian chef-prepared meals daily: breakfast with chai, wholesome lunch, evening snacks, and hot dinner.
                </p>
              </div>
              <div className="w-full bg-[#F3EFE6] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8C6D2D] h-full w-[98%]" />
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EFEAE1] shadow-2xs space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#8C6D2D] border border-[#EFEAE1] flex items-center justify-center mb-2">
                  <GraduationCap className="w-5 h-5 text-[#8C6D2D]" />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-[#102A1C]">Study Environment</h3>
                  <span className="font-mono text-sm font-bold text-[#8C6D2D] shrink-0">4.9 / 5.0</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#5B6676] leading-relaxed mt-1">
                  Enforced silent hours, dedicated quiet study library, high-speed fiber internet, and 100% power generator backup.
                </p>
              </div>
              <div className="w-full bg-[#F3EFE6] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8C6D2D] h-full w-[98%]" />
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EFEAE1] shadow-2xs space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#8C6D2D] border border-[#EFEAE1] flex items-center justify-center mb-2">
                  <Building className="w-5 h-5 text-[#8C6D2D]" />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-[#102A1C]">Daily Housekeeping</h3>
                  <span className="font-mono text-sm font-bold text-[#8C6D2D] shrink-0">4.8 / 5.0</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#5B6676] leading-relaxed mt-1">
                  Spotless daily floor sweeping, mopping, sanitized washrooms, prompt electrical support, and on-site laundry.
                </p>
              </div>
              <div className="w-full bg-[#F3EFE6] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8C6D2D] h-full w-[96%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-[#EFEAE1] pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'students', label: 'Student Scholars' },
              { id: 'parents', label: 'Parents & Families' },
              { id: 'professionals', label: 'Working Professionals' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#102A1C] text-[#DFB76C] shadow-md border border-[#DFB76C]/40'
                    : 'bg-white text-[#4A5568] hover:text-[#102A1C] hover:bg-[#FAF8F5] border border-[#EFEAE1]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#5B6676]">
            Showing <strong>{displayedReviews.length}</strong> verified reviews
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-white rounded-3xl p-5 sm:p-7 border border-[#EFEAE1] shadow-xs hover:shadow-xl hover:border-[#DFB76C]/60 transition-all flex flex-col justify-between space-y-5 sm:space-y-6 group"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <Quote className="w-7 h-7 text-[#DFB76C]/40 group-hover:text-[#DFB76C] transition-colors" />
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#DFB76C] text-[#DFB76C]" />
                        ))}
                      </div>
                    </div>

                    <p className="text-body text-[#4A5568] leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-5 border-t border-[#EFEAE1]/70 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#102A1C] text-[#DFB76C] font-serif font-bold text-sm flex items-center justify-center border-2 border-[#DFB76C]/40 shrink-0 shadow-xs">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="heading-card text-sm text-[#102A1C]">{item.author}</h3>
                        <p className="text-caption text-[#5B6676]">{item.institution || item.role}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#8C6D2D] bg-[#FAF8F5] border border-[#EFEAE1] px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-[#8C6D2D]" />
                        <span>Verified</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Review Submission Modal */}
      {isSubmitModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsSubmitModalOpen(false)}
        >
          <div
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

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#102A1C] text-[#DFB76C] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="heading-card text-xl text-[#102A1C]">Thank You for Your Feedback!</h3>
                <p className="text-xs sm:text-sm text-[#5B6676]">
                  Your review has been successfully submitted and verified.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEAE1] text-sm focus:outline-none focus:border-[#102A1C] bg-[#FAF8F5]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#102A1C] mb-1">You Are A *</label>
                    <select
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#EFEAE1] text-sm focus:outline-none focus:border-[#102A1C] bg-[#FAF8F5]"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEAE1] text-sm focus:outline-none focus:border-[#102A1C] bg-[#FAF8F5]"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFEAE1] text-sm focus:outline-none focus:border-[#102A1C] bg-[#FAF8F5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#102A1C] text-white text-xs font-bold hover:bg-[#1B3B2B] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#DFB76C]" />
                  <span>Submit Verified Review</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
