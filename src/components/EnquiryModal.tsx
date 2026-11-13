
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Send,
  Calendar,
  User,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { ROOMS_DATA, HOSTEL_INFO } from '../data/hostelData';
import { LUXURY_EASE } from '../lib/motion';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialRoom,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    room: initialRoom || 'Single Room',
    moveInDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [token, setToken] = useState('');

  useEffect(() => {
    if (initialRoom) {
      setFormData((prev) => ({
        ...prev,
        room: initialRoom,
      }));
    }
  }, [initialRoom]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSubmitted(false);
        setErrors({});
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');

    if (
      !formData.phone.trim() ||
      !/^\+?[0-9\s-]+$/.test(formData.phone.trim()) ||
      phoneDigits.length < 10 ||
      phoneDigits.length > 13
    ) {
      errs.phone = 'Enter a valid mobile number.';
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      errs.email = 'Valid email is required.';
    }

    if (!formData.moveInDate) {
      errs.moveInDate = 'Select tentative move-in date.';
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const generatedToken = `ISH-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    setToken(generatedToken);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);

    setFormData({
      name: '',
      phone: '',
      email: '',
      room: initialRoom || 'Single Room',
      moveInDate: '',
      notes: '',
    });

    setErrors({});
    setToken('');
    onClose();
  };

  const whatsappMessage = `Hello ISHANVI Hostel Admissions,

I am enquiring about room booking:

- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Room Preference: ${formData.room}
- Move-In Date: ${formData.moveInDate}
- Reference ID: ${token}`;

  const whatsappLink = `https://wa.me/917767058988?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Accommodation enquiry form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: LUXURY_EASE }}
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.32, ease: LUXURY_EASE }}
            className="bg-white rounded-3xl max-w-lg w-full border border-[#EFEAE1] shadow-2xl overflow-hidden relative max-h-[92dvh] flex flex-col min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#102A1C] text-white p-5 sm:p-6 relative shrink-0">
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DFB76C] mb-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Admissions & Enquiry</span>
              </div>

              <h3 className="heading-card text-xl sm:text-2xl font-bold !text-white pr-8">
                Enquire for {formData.room || 'Accommodation'}
              </h3>

              <p className="text-xs text-[#EAE3D2] mt-1">
                {HOSTEL_INFO.address}
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain flex-1 min-h-0">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: LUXURY_EASE }}
                    className="text-center py-4 space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#102A1C]/10 text-[#102A1C] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-[#102A1C]" />
                    </div>

                    <h4 className="heading-card text-xl text-[#102A1C]">
                      Enquiry Details Ready
                    </h4>

                    <p className="text-xs text-[#5B6676] max-w-xs mx-auto">
                      Thank you <strong>{formData.name}</strong>. Reference:{' '}
                      <span className="font-mono font-bold text-[#102A1C]">
                        {token}
                      </span>{' '}
                      for <strong>{formData.room}</strong>.
                    </p>

                    <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EFEAE1] space-y-2.5 text-left">
                      <p className="text-xs font-semibold text-[#102A1C] text-center">
                        Direct WhatsApp Connect:
                      </p>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Enquiry via WhatsApp</span>
                      </a>

                      <a
                        href={`tel:${HOSTEL_INFO.phonePrimary.replace(
                          /[^0-9+]/g,
                          ''
                        )}`}
                        className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white border border-[#EFEAE1] hover:border-[#102A1C] text-[#102A1C] text-xs font-semibold transition-all"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>
                          Call Reception ({HOSTEL_INFO.phonePrimary})
                        </span>
                      </a>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="px-6 py-2.5 min-h-[44px] text-xs font-semibold text-[#102A1C] bg-[#F4EFE6] hover:bg-[#EAE3D2] rounded-full transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                        Full Name *
                      </label>

                      <div className="relative">
                        <User className="w-4 h-4 text-[#4B5563] absolute left-3 top-3" />

                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          placeholder="Resident or Parent Name"
                          className={`w-full pl-9 pr-3 py-2.5 text-sm text-[#102A1C] placeholder:text-[#64748B] rounded-lg border focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-white ${
                            errors.name
                              ? 'border-red-400 bg-red-50'
                              : 'border-[#CBD5E1]'
                          }`}
                        />
                      </div>

                      {errors.name && (
                        <p className="text-[11px] text-red-600 font-medium mt-0.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                          Phone Number *
                        </label>

                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#4B5563] absolute left-3 top-3" />

                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 77670 58988"
                            className={`w-full pl-9 pr-3 py-2.5 text-sm text-[#102A1C] placeholder:text-[#64748B] rounded-lg border focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-white ${
                              errors.phone
                                ? 'border-red-400 bg-red-50'
                                : 'border-[#CBD5E1]'
                            }`}
                          />
                        </div>

                        {errors.phone && (
                          <p className="text-[11px] text-red-600 font-medium mt-0.5">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                          Email *
                        </label>

                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#4B5563] absolute left-3 top-3" />

                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="name@email.com"
                            className={`w-full pl-9 pr-3 py-2.5 text-sm text-[#102A1C] placeholder:text-[#64748B] rounded-lg border focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-[#FAF8F5] ${
                              errors.email
                                ? 'border-red-400 bg-red-50'
                                : 'border-[#EFEAE1]'
                            }`}
                          />
                        </div>

                        {errors.email && (
                          <p className="text-[11px] text-red-600 font-medium mt-0.5">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Room and Move-In Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                          Room Preference
                        </label>

                        <select
                          value={formData.room}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              room: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2.5 text-sm text-[#102A1C] rounded-lg border border-[#EFEAE1] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#102A1C]"
                        >
                          {ROOMS_DATA.map((r) => (
                            <option key={r.id} value={r.name}>
                              {r.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                          Move-In Date *
                        </label>

                        <div className="relative">
                          <Calendar className="w-4 h-4 text-[#5B6676] absolute left-3 top-3" />

                          <input
                            type="date"
                            value={formData.moveInDate}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                moveInDate: e.target.value,
                              })
                            }
                            className={`w-full pl-9 pr-3 py-2.5 text-sm text-[#102A1C] rounded-lg border focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-[#FAF8F5] ${
                              errors.moveInDate
                                ? 'border-red-400 bg-red-50'
                                : 'border-[#EFEAE1]'
                            }`}
                          />
                        </div>

                        {errors.moveInDate && (
                          <p className="text-[11px] text-red-600 font-medium mt-0.5">
                            {errors.moveInDate}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 pb-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn-primary w-full min-h-[46px]"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Enquiry Now</span>
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
