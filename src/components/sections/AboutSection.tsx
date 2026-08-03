
import { useState, useEffect } from 'react';
import { STORE_CONFIG } from '../../data/config';
import rumahImg from '../../assets/images/rumahGradasi.png';
import storeImg from '../../assets/images/storeGradasi.png';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';

export const AboutSection = () => {
  const { language } = useLanguage();
  const images = [rumahImg, storeImg];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="tentang" className="py-16 text-black relative">
      
      <div className="w-full bg-[#FFEFD7] py-3.5 border-y border-amber-200/60 overflow-hidden mb-12 select-none shadow-xs">
        <div className="animate-marquee whitespace-nowrap font-bold text-sm sm:text-base uppercase tracking-widest text-[#003825]">
          <span>
            BANDENG PRESTO SANJAYA &nbsp;•&nbsp; OLEH-OLEH KHAS SEMARANG & DEMAK &nbsp;•&nbsp; DURI LUNAK & SIAP GORENG &nbsp;•&nbsp; 100% HALAL MUI &nbsp;•&nbsp;&nbsp;
          </span>
          <span>
            BANDENG PRESTO SANJAYA &nbsp;•&nbsp; OLEH-OLEH KHAS SEMARANG & DEMAK &nbsp;•&nbsp; DURI LUNAK & SIAP GORENG &nbsp;•&nbsp; 100% HALAL MUI &nbsp;•&nbsp;&nbsp;
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="space-y-6">
          
          
          <div className="text-left block lg:hidden">
            <h2 className="text-2xl font-bold text-black mb-1">
              {language === 'id' ? 'Tentang Kami' : 'About Us'} <span className="text-black">{STORE_CONFIG.name}</span>
            </h2>
            <span className="font-medium text-gray-600 block text-sm">
              {STORE_CONFIG.tagline}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            
            
            <div className="flex justify-start w-full">
              <div className="relative w-full h-100 sm:h-115 rounded-tl-[80px] sm:rounded-tl-[120px] rounded-bl-[60px] sm:rounded-bl-[80px] rounded-tr-2xl rounded-br-2xl overflow-hidden">
                {images.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`Slide ${index + 1}`} 
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`} 
                  />
                ))}

                <div className="absolute inset-y-0 right-0 w-2/5 bg-linear-to-r from-transparent via-white/60 to-white pointer-events-none z-10" />

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentIndex ? "bg-amber-700 w-6" : "bg-black/30 w-2 hover:bg-black/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-left space-y-6 flex flex-col justify-center">
              
              <div className="hidden lg:block">
                <h2 className="text-3xl font-bold text-black mb-1">
                  {language === 'id' ? 'Tentang Kami' : 'About Us'} <span className="text-black">{STORE_CONFIG.name}</span>
                </h2>
                <span className="font-medium text-gray-600 block text-base">
                  {STORE_CONFIG.tagline}
                </span>
              </div>

              {language === 'id' ? (
                <>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Berawal dari komitmen untuk menyajikan santapan lezat dan praktis bagi keluarga Indonesia,{' '}
                    <strong className="font-semibold text-black">{STORE_CONFIG.name}</strong> menghadirkan berbagai pilihan produk olahan berkualitas, mulai dari <strong className="text-black font-semibold">Bandeng Presto Duri Lunak</strong>, <strong className="text-black font-semibold">Otak-Otak Bandeng khas</strong>, hingga <strong className="text-black font-semibold">Ayam Ungkep Bumbu Rempah Melimpah</strong>.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Semua produk diolah dari bahan baku pilihan segar dengan bumbu rempah alami tanpa bahan pengawet sintetis serta <strong className="text-black font-semibold">tersertifikasi Halal MUI</strong>. Dikemas secara higienis menggunakan kemasan <em>vacuum</em> untuk menjaga kesegaran rasa bumbu yang meresap sempurna, siap digoreng atau dikukus kapan saja.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Originating from a commitment to serving delicious and practical dishes for Indonesian families,{' '}
                    <strong className="font-semibold text-black">{STORE_CONFIG.name}</strong> presents a wide selection of quality processed products, ranging from <strong className="text-black font-semibold">Soft-Bone Presto Milkfish</strong>, <strong className="text-black font-semibold">Signature Milkfish Otak-Otak</strong>, to <strong className="text-black font-semibold">Spicy Rich Seasoned Ungkep Chicken</strong>.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    All products are crafted from fresh selected ingredients with natural spices without synthetic preservatives and are <strong className="text-black font-semibold">MUI Halal Certified</strong>. Hygienically packaged using <em>vacuum</em> technology to lock in perfectly infused flavors, ready to fry or steam anytime.
                  </p>
                </>
              )}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};
