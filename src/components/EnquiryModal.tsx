import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { ROOMS_DATA, HOSTEL_INFO } from '../data/hostelData';

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
      setFormData((prev) => ({ ...prev, room: initialRoom }));
    }
  }, [initialRoom]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Valid 10-digit mobile number required.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
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
    const generatedToken = `ISH-${Math.floor(1000 + Math.random() * 9000)}`;
    setToken(generatedToken);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      room: 'Single Room',
      moveInDate: '',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full border border-[#EFEAE1] shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#102A1C] text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DFB76C] mb-1">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Admissions & Enquiry</span>
          </div>
          <h3 className="heading-card text-xl sm:text-2xl font-bold !text-white">
            Enquire for {formData.room || 'Accommodation'}
          </h3>
          <p className="text-xs text-[#EAE3D2]/80 mt-1">
            {HOSTEL_INFO.address}
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#102A1C]/10 text-[#102A1C] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#102A1C]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#102A1C]">
                Enquiry Details Ready
              </h4>
              <p className="text-xs text-[#5B6676] max-w-xs mx-auto">
                Thank you <strong>{formData.name}</strong>. Reference: <span className="font-mono font-bold text-[#102A1C]">{token}</span> for <strong>{formData.room}</strong>.
              </p>
              
              <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EFEAE1] space-y-2.5 text-left">
                <p className="text-xs font-semibold text-[#102A1C] text-center">
                  Direct WhatsApp Connect:
                </p>
                <a
                  href={`https://wa.me/917767058988?text=${encodeURIComponent(
                    `Hello ISHANVI Hostel Admissions,\n\nI am enquiring about room booking:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Room Preference: ${formData.room}\n- Move-In Date: ${formData.moveInDate}\n- Reference ID: ${token}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </a>
                <a
                  href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white border border-[#EFEAE1] hover:border-[#102A1C] text-[#102A1C] text-xs font-semibold transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Reception ({HOSTEL_INFO.phonePrimary})</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 text-xs font-semibold text-[#102A1C] bg-[#F4EFE6] hover:bg-[#EAE3D2] rounded-full transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#4B5563] absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Resident or Parent Name"
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-white ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-[#CBD5E1]'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-[11px] text-red-500 mt-0.5">{errors.name}</p>}
              </div>

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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 77670 58988"
                      className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-white ${
                        errors.phone ? 'border-red-400 bg-red-50' : 'border-[#CBD5E1]'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-500 mt-0.5">{errors.phone}</p>}
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-[#FAF8F5] ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-[#EFEAE1]'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-500 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#102A1C] mb-1">
                    Room Preference
                  </label>
                  <select
                    value={formData.room}
                    onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#EFEAE1] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#102A1C]"
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
                      onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-[#102A1C] focus:outline-none bg-[#FAF8F5] ${
                        errors.moveInDate ? 'border-red-400 bg-red-50' : 'border-[#EFEAE1]'
                      }`}
                    />
                  </div>
                  {errors.moveInDate && (
                    <p className="text-[11px] text-red-500 mt-0.5">{errors.moveInDate}</p>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Enquiry Now</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
