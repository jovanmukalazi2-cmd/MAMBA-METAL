import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { MyWorkSection } from './components/MyWorkSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { QuotationForm } from './components/QuotationForm';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<string>('Metal Gates');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOrderOrQuoteProduct = (productName: string) => {
    setSelectedQuoteProduct(productName);
    scrollToSection('quote');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071120] text-white">
      <Navbar onRequestQuote={() => scrollToSection('quote')} />

      <main className="flex-1">
        <HeroSection
          onContactClick={() => scrollToSection('contact')}
          onQuoteClick={() => scrollToSection('quote')}
        />

        <ServicesSection onSelectService={handleOrderOrQuoteProduct} />

        <ProductsSection onOrderProduct={handleOrderOrQuoteProduct} />

        <AboutSection onRequestQuote={() => scrollToSection('quote')} />

        <GallerySection />

        <MyWorkSection />

        <TestimonialsSection />

        <QuotationForm selectedProduct={selectedQuoteProduct} />

        <ContactLocationSection />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
