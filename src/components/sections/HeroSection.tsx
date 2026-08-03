import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';

import bandengImg from '../../assets/images/ikan no bg.png';
import boxImg from '../../assets/images/BOXnoBg.png'
import pepesImg from '../../assets/images/pepess.png';
import ayam1Img from '../../assets/images/ayamNoBg.png';
import bandeng2Img from '../../assets/images/ikanBox.png';
import bandeng3Img from '../../assets/images/ikannn.png';

export const HeroSection = () => {
    const { t } = useLanguage();
    const heroImages = [bandengImg, boxImg, bandeng2Img, bandeng3Img ,ayam1Img, pepesImg,  ];
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
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-black pt-24 pb-16 overflow-hidden"
        >
            <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] z-0 pointer-events-none">
                <svg
                    className="w-full h-full text-white"
                    viewBox="0 0 800 900"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path d="M 0 0 L 680 0 Q 780 250 560 480 T 680 900 L 0 900 Z" />
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
                                    loading={index === 0 ? "eager" : "lazy"}
                                    decoding="async"
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
                                            index === currentIndex ? "bg-amber-700 w-6" : "bg-black/20 w-2 hover:bg-black/40"
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
