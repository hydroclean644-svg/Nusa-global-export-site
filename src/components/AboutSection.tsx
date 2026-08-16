import React from 'react';
import { ShieldCheck, Truck, FileCheck, CheckCircle2, User, MapPin, Quote, Mail, MessageSquare } from 'lucide-react';
import restuKiranaImg from '../assets/images/restu_kirana_original.png';

interface AboutSectionProps {
  lang: 'en' | 'id';
  contactPerson: string;
  contactCountry: string;
  contactPhone: string;
  businessEmail: string;
  getWhatsAppLink: (msg?: string) => string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  contactPerson,
  contactCountry,
  contactPhone,
  businessEmail,
  getWhatsAppLink
}) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-amber-800 mb-3">
            <span>01. {lang === 'en' ? 'CORPORATE OVERVIEW & LEADERSHIP' : 'TENTANG PERUSAHAAN & PENGELOLA'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'en' ? 'About Nusa Global Exports' : 'Tentang Nusa Global Exports'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
            {lang === 'en'
              ? 'Nusa Global Exports is an Indonesia-based exporter and dedicated sourcing partner serving international importers, wholesale distributors, and commercial buyers with quality-verified Indonesian commodities.'
              : 'Nusa Global Exports adalah eksportir dan mitra pengadaan terpercaya berbasis di Indonesia yang melayani importir internasional, distributor grosir, dan pembeli komersial dengan komoditas Indonesia berkualitas teruji.'}
          </p>
        </div>

        {/* Top Grid: Founder & CEO Profile Card + Corporate Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left Column: Founder & CEO Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#FAFAF8] rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-sm">
              <div className="relative rounded-2xl overflow-hidden mb-5 bg-stone-100 border border-stone-200 shadow-inner">
                <img
                  src={restuKiranaImg}
                  alt="Restu Kirana - Founder & CEO of Nusa Global Exports"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold border border-white/20">
                  {lang === 'en' ? 'Founder & CEO' : 'Founder & CEO'}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Restu Kirana
                </h3>
                <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mt-0.5">
                  {lang === 'en' ? 'Founder & Chief Executive Officer' : 'Founder & Chief Executive Officer'}
                </p>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {lang === 'en'
                    ? 'Leading export operations, buyer relations, and direct factory quality assurance across Indonesia.'
                    : 'Memimpin operasional ekspor, relasi buyer internasional, dan jaminan mutu pabrik di seluruh Indonesia.'}
                </p>

                {/* Direct Action Links */}
                <div className="grid grid-cols-2 gap-2.5 pt-4 mt-4 border-t border-stone-200 text-xs">
                  <a
                    href={`mailto:${businessEmail}`}
                    className="flex items-center justify-center gap-1.5 bg-white hover:bg-stone-100 border border-stone-200 py-2.5 px-3 rounded-xl font-semibold text-slate-800 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-800" />
                    <span>Email Desk</span>
                  </a>
                  <a
                    href={getWhatsAppLink('Hello Restu Kirana (CEO Nusa Global Exports), I would like to discuss export sourcing.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-3 rounded-xl font-semibold transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="mt-3 text-center">
                  <a
                    href={getWhatsAppLink('Hello Restu Kirana, I would like to connect.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 px-3 py-1.5 rounded-lg transition-colors border border-emerald-200/60"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Direct: {contactPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership Statement & Core Sourcing Promise */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* CEO Quote Box */}
            <div className="bg-[#FAF8F5] border border-amber-200/70 rounded-2xl p-6 sm:p-7 relative">
              <Quote className="w-8 h-8 text-amber-800/30 absolute top-5 right-5" />
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic font-serif-display font-medium">
                {lang === 'en'
                  ? '"Our commitment is to make sourcing Indonesian commodities seamless, transparent, and completely dependable for global buyers. We strictly oversee product specifications, packaging standards, and container logistics so that what you receive at your port matches your exact purchase order."'
                  : '"Komitmen utama kami adalah menjadikan pengadaan komoditas dari Indonesia mudah, transparan, dan sepenuhnya dapat diandalkan bagi buyer global. Kami mengawasi langsung spesifikasi produk, standar kemasan, dan logistik kontainer agar barang yang tiba di pelabuhan Anda sesuai 100% dengan kontrak pengadaan."'}
              </p>
              <div className="mt-4 pt-3 border-t border-amber-200/50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Restu Kirana</span>
                  <span className="text-[11px] text-amber-900 font-mono">Founder & CEO • Nusa Global Exports</span>
                </div>
                <span className="text-xs text-stone-500 font-medium">{contactCountry}</span>
              </div>
            </div>

            {/* Sourcing Overview Paragraphs */}
            <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                {lang === 'en'
                  ? 'We work directly with vetted Indonesian processing mills, agricultural cooperatives, and specialized manufacturers to deliver commodities aligned with destination market regulations.'
                  : 'Kami bekerja sama langsung dengan pabrik pengolahan terverifikasi, koperasi petani, dan produsen tersertifikasi di Indonesia guna memenuhi standar regulasi pasar tujuan ekspor Anda.'}
              </p>
              <p>
                {lang === 'en'
                  ? 'From initial sample verification to FCL container stuffing and customs documentation (COA, Phytosanitary, MSDS, Certificate of Origin), our dedicated management desk ensures smooth end-to-end execution.'
                  : 'Mulai dari verifikasi sampel awal, pemuatan kontainer FCL, hingga kelengkapan dokumen ekspor resmi (COA lab, Fitosanitari, MSDS, COO), tim manajemen kami menjamin kelancaran seluruh proses pengiriman.'}
              </p>
            </div>

            {/* Metadata Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-amber-800 shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 font-mono uppercase block">
                    {lang === 'en' ? 'Company Leadership' : 'Kepemimpinan Perusahaan'}
                  </span>
                  <span className="text-xs font-bold text-slate-900">Restu Kirana (CEO)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-amber-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 font-mono uppercase block">
                    {lang === 'en' ? 'Headquarters & Port Dispatch' : 'Kantor & Pelabuhan Muat'}
                  </span>
                  <span className="text-xs font-bold text-slate-900">Indonesia (Priok / Perak)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Core Sourcing Pillars Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone-200">
          <div className="flex items-start gap-3.5 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">
                {lang === 'en' ? 'Direct Producer Oversight' : 'Pengawasan Produsen Langsung'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Direct factory relationships ensure stable production capacity, competitive pricing, and strict batch consistency.'
                  : 'Hubungan langsung dengan pabrik menjamin kapasitas produksi stabil, harga kompetitif, dan konsistensi mutu.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <Truck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">
                {lang === 'en' ? 'Containerization & QC' : 'Kontainerisasi & QC'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Moisture barrier protection, palletization, and pre-dispatch container stuffing inspections.'
                  : 'Proteksi kelembapan, standarisasi palet, dan inspeksi pengisian kontainer sebelum diberangkatkan.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <FileCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">
                {lang === 'en' ? '100% Export Legal Compliance' : 'Kepatuhan Legalitas Ekspor'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Complete laboratory COA, Phytosanitary certification, MSDS, and compliant Bills of Lading.'
                  : 'Sertifikat analisis lab resmi (COA), sertifikat fitosanitari, MSDS, dan Bill of Lading terverifikasi.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

