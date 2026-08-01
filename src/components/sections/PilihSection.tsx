
import { FeatureCard } from '../ui/FeatureCard';
import { useState, useEffect } from 'react';
import { ShieldCheck, Flame, PackageCheck, Award, Zap, Leaf } from 'lucide-react';
import bandengImg from '../../assets/images/bandeng-presto.png';
import ayamImg from '../../assets/images/Ayam.webp';
import pepesImg from '../../assets/images/pepes-bandeng.png';
import ayam1Img from '../../assets/images/Ayam-ungkep.png';
import bandeng2Img from '../../assets/images/bandeng 2.webp';
import bandeng3Img from '../../assets/images/bandeng-presto-5.png';
import storeImg from '../../assets/images/store.webp';
import { useLanguage } from '../../context/LanguageContext';

export const PilihSection = () => {
  const { t } = useLanguage();
  // Daftar gambar produk yang akan bergeser di tengah
  const productImages = [bandengImg, ayamImg, pepesImg, ayam1Img, bandeng2Img, bandeng3Img, storeImg,];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Timer auto-slide (pindah gambar tiap 3.5 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [productImages.length]);

  return (
    <section id="pilih-kami" className="py-20 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">

        {/* Header Judul & Deskripsi */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            {t.whyUs.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Grid 3 Kolom (Disamakan tingginya dengan items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* SISI KIRI: 3 FeatureCard */}
          <div className="flex flex-col justify-between space-y-4">
            <FeatureCard
              icon={<Flame className="w-8 h-8 text-black" />}
              title={t.whyUs.f1Title}
              subtitle={t.whyUs.f1Sub}
            />
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-black" />}
              title={t.whyUs.f2Title}
              subtitle={t.whyUs.f2Sub}
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-black" />}
              title={t.whyUs.f5Title}
              subtitle={t.whyUs.f5Sub}
            />
          </div>

          {/* SISI TENGAH: SLIDER GAMBAR PRODUK OTOMATIS (Tinggi seimbang 100% dengan 3 kartu) */}
          <div className="flex justify-center items-center h-full min-h-110">
            <div className="relative w-full max-w-sm h-full min-h-110 rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Produk ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover ${
                    img === storeImg ? 'object-left' : 'object-center'
                  } transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                  }`}
                />
              ))}

              {/* Indikator Titik-Titik di Bawah Gambar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-7" : "bg-white/60 w-2.5"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* SISI KANAN: 3 FeatureCard */}
          <div className="flex flex-col justify-between space-y-4">
            <FeatureCard
              icon={<PackageCheck className="w-8 h-8 text-black" />}
              title={t.whyUs.f4Title}
              subtitle={t.whyUs.f4Sub}
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-black" />}
              title={t.whyUs.f3Title}
              subtitle={t.whyUs.f3Sub}
            />
            <FeatureCard
              icon={<Leaf className="w-8 h-8 text-black" />}
              title={t.whyUs.f6Title}
              subtitle={t.whyUs.f6Sub}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
