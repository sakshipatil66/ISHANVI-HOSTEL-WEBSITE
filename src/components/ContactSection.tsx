import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { HOSTEL_INFO, ROOMS_DATA } from '../data/hostelData';

interface ContactSectionProps {
  initialRoom?: string;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialRoom,
  isStandalonePage = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    residentType: 'Student',
    preferredRoom: initialRoom || 'Single Room',
    moveInDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [token, setToken] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const ref = `ISH-${Math.floor(1000 + Math.random() * 9000)}`;
    setToken(ref);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      residentType: 'Student',
      preferredRoom: 'Single Room',
      moveInDate: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className={`${isStandalonePage ? 'section-space-lg' : 'section-space'} bg-[#FDFBF7] relative overflow-hidden`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="kicker-label justify-center mb-2">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>CONTACT US</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Get In Touch With Ishanvi
          </h2>
          <p className="mt-3 text-lead max-w-xl mx-auto">
            We are here to answer questions, share room pricing, and schedule your campus tour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Left: Contact Info matching official banner */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#EFEAE1] shadow-md space-y-6">
              <h3 className="heading-card !text-xl sm:!text-2xl text-[#102A1C]">
                Campus & Enquiry Desk
              </h3>

              <div className="space-y-4 pt-1">
                <motion.a
                  whileHover={{ x: 4 }}
                  href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] hover:border-[#102A1C] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#102A1C] text-[#DFB76C] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#4B5563]">Call Now for Enquiry</p>
                    <p className="text-sm font-bold text-[#102A1C]">
                      {HOSTEL_INFO.phonePrimary}
                    </p>
                  </div>
                </motion.a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9C8]">
                  <div className="w-10 h-10 rounded-full bg-[#102A1C] text-[#DFB76C] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#4B5563]">Hostel Location</p>
                    <p className="text-xs sm:text-[13px] font-bold text-[#102A1C] leading-snug">
                      {HOSTEL_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9C8]">
                  <div className="w-10 h-10 rounded-full bg-[#102A1C] text-[#DFB76C] flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#4B5563]">Visiting Hours</p>
                    <p className="text-xs sm:text-[13px] font-bold text-[#102A1C]">
                      {HOSTEL_INFO.visitingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/917767058988?text=${encodeURIComponent('Hello ISHANVI Hostel, I would like to inquire about room availability.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Us on WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#EFEAE1] shadow-lg">
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-[#102A1C]/10 text-[#102A1C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#102A1C]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#102A1C]">
                    Enquiry Details Ready
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6676] max-w-sm mx-auto">
                    Thank you <strong>{formData.name}</strong>. Reference ID: <span className="font-mono font-bold text-[#102A1C]">{token}</span> for <strong>{formData.preferredRoom}</strong>.
                  </p>
                  
                  {/* Real WhatsApp Fallback & Direct Connect */}
                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EFEAE1] max-w-md mx-auto space-y-3 text-left">
                    <p className="text-xs font-semibold text-[#102A1C] text-center">
                      Connect directly with ISHANVI Admissions on WhatsApp:
                    </p>
                    <a
                      href={`https://wa.me/917767058988?text=${encodeURIComponent(
                        `Hello ISHANVI Hostel Admissions,\n\nI am enquiring about accommodation:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Category: ${formData.residentType}\n- Preferred Room: ${formData.preferredRoom}\n- Reference ID: ${token}\n- Note: ${formData.message || 'Please share tariff & availability'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp (+91 77670 58988)</span>
                    </a>
                    <a
                      href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white border border-[#EFEAE1] hover:border-[#102A1C] text-[#102A1C] text-xs font-semibold transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Or Call Admissions Directly ({HOSTEL_INFO.phonePrimary})</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2 text-xs font-semibold text-[#102A1C] bg-[#F4EFE6] rounded-full hover:bg-[#EAE3D2] transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="heading-card text-lg sm:text-xl text-[#102A1C] pb-2 border-b border-[#EFEAE1]">
                    Online Room Enquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#102A1C] focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-[#FAF8F5] ${
                          errors.name ? 'border-red-400 bg-red-50' : 'border-[#EFEAE1]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-0.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 77670 58988"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#102A1C] focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-[#FAF8F5] ${
                          errors.phone ? 'border-red-400 bg-red-50' : 'border-[#EFEAE1]'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#102A1C] focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-[#FAF8F5] ${
                          errors.email ? 'border-red-400 bg-red-50' : 'border-[#EFEAE1]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-0.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                        Room Preference
                      </label>
                      <select
                        value={formData.preferredRoom}
                        onChange={(e) => setFormData({ ...formData, preferredRoom: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#EFEAE1] text-sm text-[#102A1C] focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-[#FAF8F5]"
                      >
                        <option value="Single Room">Single Room (Privacy & Peace)</option>
                        <option value="Double / Sharing Room">Double / Sharing Room</option>
                        <option value="Premium Room">Premium Room (Extra Comfort)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                      Message / Special Query
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about move-in date, food timings, or fee structure..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EFEAE1] text-sm text-[#102A1C] focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-[#FAF8F5]"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-primary w-full cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
