import React, { useState } from 'react';
import { ProductItem } from './types';
import { productsPortfolio } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CatalogSection } from './components/CatalogSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContainerCalculator } from './components/ContainerCalculator';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'en' | 'id'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);
  const [formProduct, setFormProduct] = useState('Coconut Shell Charcoal Briquettes');

  const businessEmail = 'sales@nusaglobalexport.com';
  const contactPerson = 'Restu Kirana';
  const contactCountry = 'Indonesia';
  const contactPhone = '+62 859-3192-7219';

  const getWhatsAppLink = (customMsg?: string) => {
    const phone = '6285931927219';
    const defaultMsg =
      lang === 'en'
        ? `Hello Nusa Global Exports! I visited your website and would like to request an export quote for ${formProduct}.`
        : `Halo Nusa Global Exports! Saya mengunjungi website Anda dan ingin meminta penawaran ekspor untuk ${formProduct}.`;
    const text = customMsg || defaultMsg;
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
  };

  const handleOpenQuoteForProduct = (p: ProductItem) => {
    setFormProduct(p.name);
    setDetailProduct(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Header Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection="home"
        businessEmail={businessEmail}
        contactPhone={contactPhone}
        getWhatsAppLink={getWhatsAppLink}
      />

      {/* 2. Hero Section */}
      <Hero lang={lang} />

      {/* 3. Corporate Overview */}
      <AboutSection
        lang={lang}
        contactPerson={contactPerson}
        contactCountry={contactCountry}
        contactPhone={contactPhone}
        businessEmail={businessEmail}
        getWhatsAppLink={getWhatsAppLink}
      />

      {/* 4. Products Portfolio Catalog */}
      <CatalogSection
        products={productsPortfolio}
        selectedGroupFilter={selectedGroupFilter}
        setSelectedGroupFilter={setSelectedGroupFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectProduct={(p) => setDetailProduct(p)}
        onOpenQuoteForProduct={handleOpenQuoteForProduct}
        lang={lang}
      />

      {/* 5. Why Choose Us */}
      <WhyChooseUs lang={lang} />

      {/* 6. Container Payload Calculator */}
      <ContainerCalculator lang={lang} />

      {/* 7. Inquiry & Quote Form */}
      <InquirySection
        products={productsPortfolio}
        formProduct={formProduct}
        setFormProduct={setFormProduct}
        lang={lang}
        businessEmail={businessEmail}
        contactPerson={contactPerson}
        contactPhone={contactPhone}
        getWhatsAppLink={getWhatsAppLink}
      />

      {/* 8. Corporate Footer */}
      <Footer
        businessEmail={businessEmail}
        contactPerson={contactPerson}
        contactCountry={contactCountry}
        contactPhone={contactPhone}
        lang={lang}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onOpenQuote={handleOpenQuoteForProduct}
        lang={lang}
      />

    </div>
  );
}
