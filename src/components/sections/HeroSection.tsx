import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';

import bandengImg from '../../assets/images/ikan no bg.webp';
import boxImg from '../../assets/images/BOXnoBg.webp';
import pepesImg from '../../assets/images/pepess.webp';
import ayam1Img from '../../assets/images/ayamNoBg.webp';
import bandeng2Img from '../../assets/images/ikanBox.webp';
import bandeng3Img from '../../assets/images/ikannn.webp';
import orangbox from '../../assets/images/orangBox.webp';

export const HeroSection = () => {
    const { t } = useLanguage();
    const heroImages = [bandengImg, boxImg, bandeng2Img, bandeng3Img ,ayam1Img, pepesImg, orangbox];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Timer berganti foto otomatis tiap 3.5 detik
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3500);

        return () => clearInterval(timer);
    }, [heroImages.length]);

    return (
        <section
            id="beranda"
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-black pt-24 pb-16 overflow-hidden bg-[#F2F1EC]"
        >
            
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

                <svg
                    className="absolute top-0 left-0 w-full h-28 sm:h-52 lg:h-72 text-[#EBE5D6]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path d="M0,0 L1440,0 L1440,120 C1200,20 960,160 720,120 C480,20 240,40 0,160 Z" />
                </svg>

                {/* Wave 2: Melengkung Ke Atas (Dari Bawah Kiri ke Kanan) */}
                <svg
                    className="absolute bottom-0 left-0 w-full h-28 sm:h-52 lg:h-72 text-[#EBE5D6]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path d="M0,320 L1440,320 L1440,160 C1120,210 800,120 480,190 C300,230 150,180 0,160 Z" />
                </svg>

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6 text-left">
                        <h1 className="text-black text-4xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                            {t.hero.title1} <br />
                            <span className="text-black">{t.hero.title2}</span>
                        </h1>

                        <p className="text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl">
                            {t.hero.subtitle}
                        </p>
                    </div>

                    <div className="relative flex justify-center items-center py-6 group">
                 
                        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-40 bg-[#FFEFD7] shadow-inner transition-transform duration-700" />

                        <div className="relative z-10 w-full max-w-md sm:max-w-xl h-80 sm:h-110 flex items-center justify-center">
                            {heroImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Bandeng Presto Sanjaya ${index + 1}`}
                                    width={576}
                                    height={440}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    decoding={index === 0 ? "sync" : "async"}
                                    // @ts-expect-error fetchpriority is a valid HTML attribute
                                    fetchpriority={index === 0 ? "high" : "low"}
                                    className={`absolute inset-0 w-full h-full object-contain drop-shadow-xl transition-all duration-1000 ease-in-out ${
                                        index === currentIndex
                                            ? "opacity-100 scale-100 z-10"
                                            : "opacity-0 scale-95 z-0 pointer-events-none"
                                    }`}
                                />
                            ))}

                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {heroImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                            index === currentIndex ? "bg-[#E9C176] w-6" : "bg-black/20 w-2 hover:bg-black/40"
                                        }`}
                                        aria-label={`Pindah ke slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </FadeIn>
            </div>
        </section>
    );
};
