
import './App.css'
import { LanguageProvider } from './context/LanguageContext';
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
    <LanguageProvider>
      <div className="min-h-screen text-black flex flex-col justify-between">
        <Navbar />

        <main className="grow">
          <HeroSection />
          <AboutSection/>
          <PilihSection />
          <ProductsSection />
          <LocationSection/>
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </LanguageProvider>
  );
}

export default App
