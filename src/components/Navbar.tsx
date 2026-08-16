import React from 'react';
import { Languages, Menu, X, ArrowUpRight } from 'lucide-react';
import nusaGlobalLogoImg from '../assets/images/nusa_global_logo_official_1786501482224.jpg';

interface NavbarProps {
  lang: 'en' | 'id';
  setLang: (l: 'en' | 'id') => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  businessEmail: string;
  contactPhone: string;
  getWhatsAppLink: () => string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  businessEmail,
  contactPhone,
  getWhatsAppLink
}) => {
  return (
    <>
      {/* Refined Top Status Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-mono text-[11px] tracking-wider uppercase text-stone-400">
            {lang === 'en' ? 'Indonesian Export & Sourcing Partner' : 'Mitra Ekspor & Sourcing Indonesia'}
          </span>
          <span className="hidden md:inline text-stone-600">|</span>
          <span className="hidden md:inline text-[11px] text-stone-300 font-medium">
            Tanjung Priok & Tanjung Perak Origin
          </span>
        </div>
        <div className="flex items-center gap-5 text-[11px]">
          <a 
            href={`mailto:${businessEmail}`} 
            className="text-stone-300 hover:text-amber-300 transition-colors"
          >
            {businessEmail}
          </a>
          <span className="text-stone-600">•</span>
          <a 
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 transition-colors font-mono"
          >
            <span>WA: {contactPhone}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="relative">
              <img 
                src={nusaGlobalLogoImg} 
                alt="Nusa Global Exports Logo" 
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-stone-200 shadow-sm group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base lg:text-lg font-extrabold tracking-tight text-slate-900 leading-tight">
                NUSA GLOBAL EXPORTS
              </span>
              <span className="text-[10px] font-semibold text-amber-700 tracking-[0.18em] uppercase">
                {lang === 'en' ? 'Bringing Indonesia to the World' : 'Membawa Indonesia ke Dunia'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wide uppercase text-slate-600">
            <a href="#home" className="hover:text-slate-950 transition-colors py-1 relative">
              {lang === 'en' ? 'Home' : 'Beranda'}
            </a>
            <a href="#about" className="hover:text-slate-950 transition-colors py-1">
              {lang === 'en' ? 'About Us' : 'Tentang Kami'}
            </a>
            <a href="#catalog" className="hover:text-slate-950 transition-colors py-1">
              {lang === 'en' ? 'Product Catalog' : 'Katalog Produk'}
            </a>
            <a href="#why-us" className="hover:text-slate-950 transition-colors py-1">
              {lang === 'en' ? 'Why Us' : 'Keunggulan'}
            </a>
            <a href="#calculator" className="hover:text-slate-950 transition-colors py-1">
              {lang === 'en' ? 'FCL Estimator' : 'Estimator FCL'}
            </a>
            <a href="#contact" className="hover:text-slate-950 transition-colors py-1">
              {lang === 'en' ? 'Contact' : 'Kontak'}
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 hover:border-stone-400 text-xs font-medium text-slate-700 hover:bg-stone-50 transition-colors"
              title="Change Language"
            >
              <Languages className="w-3.5 h-3.5 text-amber-700" />
              <span>{lang === 'en' ? 'EN' : 'ID'}</span>
            </button>

            {/* Request a Quote CTA */}
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm active:scale-95"
            >
              <span>{lang === 'en' ? 'Request a Quote' : 'Minta Penawaran'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </a>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 lg:hidden text-slate-700 hover:text-slate-950"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[115px] left-0 w-full bg-white border-b border-stone-200 z-40 px-6 py-6 flex flex-col gap-4 text-xs font-bold tracking-wider uppercase shadow-xl animate-fadeIn">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-700 py-2 border-b border-stone-100">
            {lang === 'en' ? 'Home' : 'Beranda'}
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-700 py-2 border-b border-stone-100">
            {lang === 'en' ? 'About Us' : 'Tentang Kami'}
          </a>
          <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-700 py-2 border-b border-stone-100">
            {lang === 'en' ? 'Product Catalog' : 'Katalog Produk'}
          </a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-700 py-2 border-b border-stone-100">
            {lang === 'en' ? 'Why Choose Us' : 'Keunggulan Kami'}
          </a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-700 py-2 border-b border-stone-100">
            {lang === 'en' ? 'Container Payload Estimator' : 'Estimator Muatan Kontainer'}
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-700 py-2 border-b border-stone-100">
            {lang === 'en' ? 'Contact & Inquiry' : 'Kontak & Permintaan'}
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex bg-slate-900 text-white p-3 rounded-xl justify-center items-center gap-2 font-bold text-center mt-2"
          >
            <span>{lang === 'en' ? 'Request a Formal Quote' : 'Minta Penawaran Resmi'}</span>
          </a>
        </div>
      )}
    </>
  );
};
