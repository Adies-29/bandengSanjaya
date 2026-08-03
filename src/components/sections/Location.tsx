
import React, { useState } from 'react';
import { MapPin, Phone,  Lock, MessageCircle } from 'lucide-react';
import { STORE_CONFIG } from '../../data/config';
import { whatsappLink } from '../../utils/format';
import { Input, Textarea } from '../ui/Input';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';

export const LocationSection = () => {
  const { t } = useLanguage();
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const isFormLocked = !accessKey || accessKey.trim() === '';

  const embedMapUrl = `https://maps.google.com/maps?q=Bandeng+Presto+Sanjaya,+Jl.+Pucang+Sari+III+No.30,+Demak&hl=id&z=16&output=embed`;


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  // Handle kirim pesan via Web3Forms API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Memakai Access Key dari environment variable (.env)
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Pesan Anda berhasil terkirim! Kami akan segera menghubungi Anda.'
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Gagal mengirim pesan. Silakan coba lagi.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Terjadi kesalahan jaringan. Silakan coba lagi.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lokasi" className="py-20 text-black bg-[#F2F1EC] relative overflow-hidden">
      {/* Background Wave Accent (Atas Menghadap Bawah, Bawah Menghadap Atas) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Wave Atas (Menghadap ke Bawah) */}
        <svg
          className="absolute -top-1 left-0 w-full h-40 sm:h-60 text-[#E5E0D2] opacity-70 rotate-180"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,182,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>

        {/* Wave Bawah (Menghadap ke Atas) */}
        <svg
          className="absolute -bottom-1 left-0 w-full h-40 sm:h-60 text-[#E5E0D2] opacity-70"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,182,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
    
        <div className="space-y-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.location.title}
          </h2>


          <div className="w-full h-80 sm:h-112.5 rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white relative">
            <iframe
              title="Google Maps Lokasi Bandeng Sanjaya"
              src={embedMapUrl}
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
          
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              {t.location.contactInfo}
            </h3>

            <div className="space-y-5">
              <h4 className="font-bold text-gray-900 text-lg">
                {t.location.storeTitle}
              </h4>

              <div className="flex items-start gap-3.5 text-gray-700">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base leading-relaxed">
                  {STORE_CONFIG.address}
                </span>
              </div>

              <div className="flex items-center gap-3.5 text-gray-700">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm sm:text-base font-semibold">
                  +{STORE_CONFIG.whatsappNumber}
                </span>
              </div>

              {/* Instagram
              <div className="flex items-center gap-3.5 text-gray-700">
                <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-sm sm:text-base font-medium">
                  {STORE_CONFIG.socialMedia.instagram}
                </span>
              </div> */}
            </div>

            
            <div className="pt-2">
              <a
                href={STORE_CONFIG.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-800 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                <span>{t.location.directions}</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 text-left relative overflow-hidden">
            
            {isFormLocked && (
              <div className="absolute inset-0 bg-white/85 backdrop-blur-[3px] z-20 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-14 h-14 bg-amber-100 border border-amber-200 text-amber-800 rounded-full flex items-center justify-center shadow-md">
                  <Lock className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-gray-900">
                    Form Pesan Belum Aktif
                  </h4>
                  <p className="text-gray-600 text-sm max-w-sm leading-relaxed mx-auto">
                    Fitur kirim email sedang dalam pemeliharaan konfigurasi Access Key. Silakan hubungi kami langsung melalui WhatsApp.
                  </p>
                </div>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all duration-300 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            )}

            <div className={isFormLocked ? "opacity-30 pointer-events-none select-none" : ""}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.location.sendMessage}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Alert Status Pengiriman */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl text-sm font-semibold border ${
                      submitStatus.type === 'success'
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                        : 'bg-rose-50 text-rose-900 border-rose-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Input Nama */}
                  <Input
                    type="text"
                    name="name"
                    required
                    placeholder={t.location.formName}
                  />

                  {/* Input No HP */}
                  <Input
                    type="text"
                    name="phone"
                    required
                    placeholder={t.location.formPhone}
                  />
                </div>

                {/* Input Subjek */}
                <Input
                  type="text"
                  name="subject"
                  placeholder={t.location.formSubject}
                />

                {/* Input Pesan */}
                <Textarea
                  name="message"
                  rows={4}
                  required
                  placeholder={t.location.formMessage}
                />

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-[#1e1e1e] hover:bg-black disabled:bg-gray-400 text-white font-semibold px-8 py-3.5 rounded-xl uppercase tracking-wider text-xs transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    <span>{isSubmitting ? t.location.formSending : t.location.formSubmit}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </FadeIn>
    </section>
  );
};
