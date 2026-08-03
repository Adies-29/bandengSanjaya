
import { useState, useEffect } from 'react';
import { FeatureCard } from '../ui/FeatureCard';
import { ShieldCheck, Flame, PackageCheck, Award, Zap, Leaf } from 'lucide-react';
import bandengImg from '../../assets/images/bandeng-presto.webp';
import orangbox from '../../assets/images/orangBox.webp';
import storeImg from '../../assets/images/store.webp';
import ikan from '../../assets/images/screen1.webp';
import ikan2 from '../../assets/images/ikan Ai.webp';
import box from '../../assets/images/BOXnoBg.webp';
import ayam from '../../assets/images/ayam Ai.webp';
import ayam1 from '../../assets/images/screen2.webp';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';

export const PilihSection = () => {
  const { t } = useLanguage();
  const productImages = [bandengImg, orangbox, ikan, ikan2, box, ayam, ayam1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [productImages.length]);

  return (
    <section id="pilih-kami" className="py-20 text-black bg-[#F2F1EC] relative overflow-hidden">
      {/* Background Wave Accent (Dual Waves: Atas ke Bawah & Bawah ke Atas) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Wave 1: Melengkung Ke Bawah (Dari Atas) */}
        <svg
          className="absolute top-0 left-0 w-full h-28 sm:h-52 lg:h-72 text-[#EBE5D6]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1440,0 L1440,120 C1200,20 960,160 720,120 C480,20 240,40 0,160 Z" />
        </svg>
        {/* Wave 2: Melengkung Ke Atas (Dari Bawah) */}
        <svg
          className="absolute bottom-0 left-0 w-full h-28 sm:h-52 lg:h-72 text-[#EBE5D6]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,320 L1440,320 L1440,160 C1120,210 800,120 480,190 C300,230 150,180 0,160 Z" />
        </svg>
      </div>

      <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* Header Section */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          <div className="flex flex-col gap-6 justify-between lg:col-span-1">
            <FeatureCard
              icon={<Flame className="w-6 h-6" />}
              title={t.whyUs.f1Title}
              subtitle={t.whyUs.f1Sub}
              variant="cream"
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title={t.whyUs.f2Title}
              subtitle={t.whyUs.f2Sub}
              variant="green"
            />
          </div>

          <div className="relative min-h-120 sm:min-h-137.5 lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl border border-amber-200/50 group text-left">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Produk ${index + 1}`}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover ${img === storeImg ? 'object-left' : 'object-top'
                  } transition-all duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                  }`}
              />
            ))}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "bg-[#E9C176] w-6" : "bg-white/70 w-2.5"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-between lg:col-span-1">
            <FeatureCard
              icon={<PackageCheck className="w-6 h-6" />}
              title={t.whyUs.f4Title}
              subtitle={t.whyUs.f4Sub}
              variant="green"
            />
            <FeatureCard
              icon={<Award className="w-6 h-6" />}
              title={t.whyUs.f3Title}
              subtitle={t.whyUs.f3Sub}
              variant="cream"
            />
          </div>

        </div>

        {/* Baris Bawah Bento: Fitur 5 & Fitur 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title={t.whyUs.f5Title}
            subtitle={t.whyUs.f5Sub}
            variant="cream"
          />
          <FeatureCard
            icon={<Leaf className="w-6 h-6" />}
            title={t.whyUs.f6Title}
            subtitle={t.whyUs.f6Sub}
            variant="green"
          />
        </div>

      </FadeIn>
    </section>
  );
};
