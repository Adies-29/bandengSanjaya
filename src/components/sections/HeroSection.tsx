import { Leaf, ShieldCheck, Zap } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';

export const HeroSection = () => {
    const { t } = useLanguage();

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
                        <h1 className="text-black text-4xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight">
                            {t.hero.title1} <br />
                            <span className="text-black">{t.hero.title2}</span>
                        </h1>

                        <p className="text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl">
                            {t.hero.subtitle}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 pt-2 max-w-xl">
                            <FeatureCard
                                icon={<Leaf className="w-8 h-8 text-black" />}
                                title={t.hero.feature1Title}
                                subtitle={t.hero.feature1Sub}
                            />
                            <FeatureCard
                                icon={<ShieldCheck className="w-8 h-8 text-black" />}
                                title={t.hero.feature2Title}
                                subtitle={t.hero.feature2Sub}
                            />
                            <FeatureCard
                                icon={<Zap className="w-8 h-8 text-black" />}
                                title={t.hero.feature3Title}
                                subtitle={t.hero.feature3Sub}
                            />
                        </div>
                    </div>

                </FadeIn>
            </div>
        </section>
    );
};
