import { useState, useEffect } from "react"
import logoImg from '../../assets/images/BANDENG.png';
import { Menu, X } from "lucide-react";


export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const navLinks = [
        { name: 'Tentang Kami', href: '#tentang' },
        { name: 'Pilih Kami', href: '#pilih-kami' },
        { name: 'Katalog Menu', href: '#produk' },
        { name: 'Lokasi & Kontak', href: '#lokasi' },
    ];

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
        handleScroll(); // Jalankan sekali saat komponen di-mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* 1. HEADER (Transparan di Hero, memiliki background saat di-scroll) */}
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    scrolled
                        ? "bg-[#ecffdb]/90 backdrop-blur-md text-black shadow-lg"
                        : "bg-transparent text-black shadow-none"
                }`}
            >
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="#beranda" className="flex items-center gap-3 group">
                            <div className="w-32 h-24 overflow-hidden flex items-center justify-center text-amber-950 group-hover:scale-105 transition-transform">
                                <img src={logoImg} alt="Logo Bandeng Sanjaya" className="object-cover" />
                            </div>
                        </a>

                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex items-center gap-8">
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

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`p-2 rounded-lg focus:outline-none transition-colors ${
                                    scrolled ? "text-black" : "text-white"
                                }`}
                                aria-label="Toggle Menu"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Backdrop Layer */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar Drawer Panel */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-72 bg-[#ecffdb] z-60 md:hidden shadow-2xl transition-transform duration-300 ease-in-out p-6 flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header Sidebar Drawer */}
                <div className="flex items-center justify-between pb-4 border-b border-black">
                    <span className="font-bold text-black text-lg">Menu Navigation</span>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 rounded-lg text-black focus:outline-none"
                        aria-label="Close Menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
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