import React from 'react';
import nusaGlobalLogoImg from '../assets/images/nusa_global_logo_official_1786501482224.jpg';

interface FooterProps {
  businessEmail: string;
  contactPerson: string;
  contactCountry: string;
  contactPhone: string;
  lang: 'en' | 'id';
}

export const Footer: React.FC<FooterProps> = ({
  businessEmail,
  contactPerson,
  contactCountry,
  contactPhone,
  lang
}) => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs py-14 px-6 lg:px-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex items-center gap-3.5">
          <img
            src={nusaGlobalLogoImg}
            alt="Nusa Global Exports Logo"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover border border-stone-700"
          />
          <div>
            <span className="text-sm font-extrabold text-white tracking-tight block">
              NUSA GLOBAL EXPORTS
            </span>
            <span className="text-[10px] text-amber-500 font-mono tracking-wider uppercase">
              {lang === 'en' ? 'Bringing Indonesia to the World' : 'Membawa Indonesia ke Dunia'}
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-400 font-medium">
          <a href="#home" className="hover:text-white transition-colors">{lang === 'en' ? 'Home' : 'Beranda'}</a>
          <a href="#about" className="hover:text-white transition-colors">{lang === 'en' ? 'About Us' : 'Tentang Kami'}</a>
          <a href="#catalog" className="hover:text-white transition-colors">{lang === 'en' ? 'Catalog' : 'Katalog'}</a>
          <a href="#why-us" className="hover:text-white transition-colors">{lang === 'en' ? 'Why Us' : 'Keunggulan'}</a>
          <a href="#calculator" className="hover:text-white transition-colors">{lang === 'en' ? 'FCL Estimator' : 'Estimator FCL'}</a>
          <a href="#contact" className="hover:text-white transition-colors">{lang === 'en' ? 'Contact' : 'Kontak'}</a>
        </div>

        {/* Copyright & Meta */}
        <div className="text-center md:text-right text-[11px] text-stone-500 space-y-1">
          <p>© 2026 Nusa Global Exports. All Rights Reserved.</p>
          <p>
            Export Desk: <a href={`mailto:${businessEmail}`} className="text-stone-300 underline">{businessEmail}</a> • WA: <span className="text-stone-300 font-mono">{contactPhone}</span>
          </p>
          <p className="text-[10px] text-stone-600">
            Founder & CEO: {contactPerson} ({contactCountry})
          </p>
        </div>

      </div>
    </footer>
  );
};
