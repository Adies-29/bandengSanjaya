import { useState, useEffect, useRef } from "react"
import logoImg from '../../assets/images/BANDENG.webp';
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t.nav.about, href: '#tentang' },
        { name: t.nav.whyUs, href: '#pilih-kami' },
        { name: t.nav.catalog, href: '#produk' },
        { name: t.nav.location, href: '#lokasi' },
    ];

    // Klik di luar dropdown untuk menutup dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setLangDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Deteksi section mana yang sedang aktif saat di-scroll
            const scrollPosition = window.scrollY + 120;
            for (const link of navLinks) {
                const section = document.querySelector(link.href) as HTMLElement | null;
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(link.href);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [language]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    scrolled
                        ? "bg-[#FFEFD7]/90 backdrop-blur-md text-black shadow-lg"
                        : "bg-transparent text-black shadow-none"
                }`}
            >
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="#beranda" className="flex items-center gap-2 group">
                            <img src={logoImg} alt="Logo Bandeng Sanjaya" loading="eager" decoding="async" className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform" />
                        </a>

                        <div className="hidden md:flex items-center gap-8">
                            <nav className="flex items-center gap-8">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.href;
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setActiveSection(link.href)}
                                            className={`relative py-1 text-sm transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-amber-600 after:transition-all after:duration-300 ${
                                                isActive
                                                    ? "text-amber-800 font-bold after:w-full"
                                                    : "text-black font-medium hover:text-amber-800 after:w-0 hover:after:w-full"
                                            }`}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                })}
                            </nav>

                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                    className="flex items-center gap-2 border border-black/40 hover:border-black rounded-full px-3.5 py-1.5 text-xs font-bold text-black bg-white/80 hover:bg-white backdrop-blur-md transition-all shadow-xs cursor-pointer"
                                >
                                    <img
                                        src={language === 'id' ? "https://flagcdn.com/w40/id.png" : "https://flagcdn.com/w40/us.png"}
                                        alt={language}
                                        className="w-4 h-3 object-cover rounded-xs shadow-2xs shrink-0"
                                    />
                                    <span>{language.toUpperCase()}</span>
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {langDropdownOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-100 rounded-2xl shadow-xl p-1.5 z-50 text-left animate-in fade-in zoom-in-95 duration-150">
                                        <button
                                            onClick={() => {
                                                setLanguage('id');
                                                setLangDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl transition-all cursor-pointer ${
                                                language === 'id'
                                                    ? 'bg-sky-50 text-sky-600 font-extrabold'
                                                    : 'text-gray-700 hover:bg-gray-50 font-medium'
                                            }`}
                                        >
                                            <img src="https://flagcdn.com/w40/id.png" alt="Indonesia" className="w-4.5 h-3 object-cover rounded-xs shadow-2xs shrink-0" />
                                            <span>Indonesia</span>
                                        </button>

                                        <button
                                            onClick={() => {
                                                setLanguage('en');
                                                setLangDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl transition-all cursor-pointer ${
                                                language === 'en'
                                                    ? 'bg-sky-50 text-sky-600 font-extrabold'
                                                    : 'text-gray-700 hover:bg-gray-50 font-medium'
                                            }`}
                                        >
                                            <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-4.5 h-3 object-cover rounded-xs shadow-2xs shrink-0" />
                                            <span>English</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-2">
                            {/* Mobile Dropdown Language Switcher */}
                            <div className="relative">
                                <button
                                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                    className="flex items-center gap-1 border border-black/30 rounded-full px-2 py-1 text-[11px] font-bold text-black bg-white/90 shadow-2xs"
                                >
                                    <img
                                        src={language === 'id' ? "https://flagcdn.com/w40/id.png" : "https://flagcdn.com/w40/us.png"}
                                        alt={language}
                                        className="w-3.5 h-2.5 object-cover rounded-xs shrink-0"
                                    />
                                    <span>{language.toUpperCase()}</span>
                                    <ChevronDown className="w-3 h-3" />
                                </button>

                                {langDropdownOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-36 bg-white border border-gray-100 rounded-2xl shadow-xl p-1.5 z-50 text-left">
                                        <button
                                            onClick={() => {
                                                setLanguage('id');
                                                setLangDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-2 px-2.5 py-2 text-xs rounded-xl ${
                                                language === 'id' ? 'bg-sky-50 text-sky-600 font-bold' : 'text-gray-700'
                                            }`}
                                        >
                                            <img src="https://flagcdn.com/w40/id.png" alt="Indonesia" className="w-4 h-3 object-cover rounded-xs shrink-0" />
                                            <span>Indonesia</span>
                                        </button>
                                        <button
                                            onClick={() => {
                                                setLanguage('en');
                                                setLangDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-2 px-2.5 py-2 text-xs rounded-xl ${
                                                language === 'en' ? 'bg-sky-50 text-sky-600 font-bold' : 'text-gray-700'
                                            }`}
                                        >
                                            <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-4 h-3 object-cover rounded-xs shrink-0" />
                                            <span>English</span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`p-1.5 rounded-lg focus:outline-none transition-colors ${
                                    scrolled ? "text-black" : "text-black"
                                }`}
                                aria-label="Toggle Menu"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            <div
                className={`fixed top-0 right-0 bottom-0 w-72 bg-[#FFEFD7] z-60 md:hidden shadow-2xl transition-transform duration-300 ease-in-out p-6 flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between pb-4 border-b border-black/10">
                    <span className="font-bold text-black text-lg">Menu</span>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1 rounded-lg text-black focus:outline-none"
                        aria-label="Close Menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="mt-4 flex items-center justify-between bg-white/70 p-2 rounded-2xl border border-black/10">
                    <span className="text-xs font-bold text-gray-700 pl-2">Bahasa:</span>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setLanguage('id')}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                language === 'id' ? 'bg-emerald-700 text-white shadow-xs' : 'text-gray-700 hover:bg-gray-200/50'
                            }`}
                        >
                            <img src="https://flagcdn.com/w40/id.png" alt="ID" className="w-4 h-3 object-cover rounded-2xs" />
                            ID
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                language === 'en' ? 'bg-emerald-700 text-white shadow-xs' : 'text-gray-700 hover:bg-gray-200/50'
                            }`}
                        >
                            <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-4 h-3 object-cover rounded-2xs" />
                            EN
                        </button>
                    </div>
                </div>

                <nav className="mt-6 flex flex-col space-y-2">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setActiveSection(link.href);
                                    setMobileMenuOpen(false);
                                }}
                                className={`text-base py-2.5 px-3 rounded-xl transition-all ${
                                    isActive
                                        ? "bg-amber-600/15 text-amber-900 font-bold border-l-4 border-amber-600 pl-4"
                                        : "text-black font-medium hover:bg-black/5"
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </>
    );

};