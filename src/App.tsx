
import './App.css'
import { FloatingWhatsapp } from './components/layout/FloatingWhatsapp';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PilihSection } from './components/sections/PilihSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { AboutSection } from './components/sections/AboutSection';
import { LocationSection } from './components/sections/Location';

function App() {

  return (
    <div className="min-h-screen text-black flex flex-col justify-between">
      <Navbar />

      <main className="grow">
        {/* Banner Utama */}
        <HeroSection />
        {/* Section Tentang Kami */}
        <AboutSection/>

        <PilihSection />
        {/* Katalog Produk Menu */}
        <ProductsSection />

        <LocationSection/>
      </main>

      {/* Footer Website */}
      <Footer />

      {/* 3. Tombol WA Melayang di Kanan Bawah */}
      <FloatingWhatsapp />
    </div>
  );
}

export default App
