import React from 'react';
import { ArrowRight, ShieldCheck, FileCheck, Anchor, Box, Clock, MessageSquare, Award } from 'lucide-react';
import globalTradeHeroImg from '../assets/images/global_trade_hero_1786500185373.jpg';

interface HeroProps {
  lang: 'en' | 'id';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="home" className="relative bg-[#FAFAF8] border-b border-stone-200/80 overflow-hidden py-16 lg:py-24">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct Buyer-Focused Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs text-amber-800 text-xs font-semibold tracking-wide w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{lang === 'en' ? 'Direct Indonesian Exporter & Sourcing Partner' : 'Eksportir & Mitra Sourcing Langsung Indonesia'}</span>
            </div>

            {/* Main Headline - Punchy & High Prestige */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              {lang === 'en' ? (
                <>
                  Direct Indonesian Commodities. <br />
                  <span className="font-serif-display font-normal italic text-amber-800">
                    Trusted Worldwide Supply.
                  </span>
                </>
              ) : (
                <>
                  Komoditas Unggulan Indonesia. <br />
                  <span className="font-serif-display font-normal italic text-amber-800">
                    Pasokan Ekspor Tepercaya.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle - Clear, No Fluff */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {lang === 'en'
                ? 'We supply international importers and commercial distributors with premium coconut charcoal briquettes, coconut derivatives, specialty coffee, spices, agricultural produce, frozen fisheries, fresh tropical fruits, genuine leather apparel, and bamboo crafts with verified factory pricing, strict QC, and complete export documentation.'
                : 'Kami memasok importir internasional dan distributor komersial dengan briket arang kelapa, produk turunan kelapa, kopi, rempah, hasil pertanian, perikanan laut beku, buah tropis segar, jaket kulit asli, dan kerajinan anyaman bambu dengan harga produsen terverifikasi, kontrol kualitas ketat, dan legalitas ekspor lengkap.'}
            </p>

            {/* 4 Clean Buyer Benefits */}
            <div className="grid grid-cols-2 gap-4 pt-3 pb-2 border-t border-stone-200/90 max-w-xl">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {lang === 'en' ? 'Direct Factory Sourcing' : 'Sumber Pabrik Langsung'}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {lang === 'en' ? 'Verified capacity & transparent pricing' : 'Kapasitas teruji & harga transparan'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Box className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {lang === 'en' ? 'Custom OEM & Private Label' : 'Kemasan OEM & Brand Kustom'}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {lang === 'en' ? 'Inner boxes, cartons & custom specs' : 'Inner box, karton & spesifikasi kustom'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Anchor className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {lang === 'en' ? 'FOB, CNF & CIF to Any Port' : 'Ketentuan FOB, CNF & CIF'}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {lang === 'en' ? 'Tanjung Priok / Perak to worldwide' : 'Dari Priok / Perak ke seluruh dunia'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FileCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {lang === 'en' ? '100% Legal Trade Documents' : 'Dokumentasi Ekspor Lengkap'}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {lang === 'en' ? 'COA, MSDS, Phytosanitary, COO, BL' : 'COA, MSDS, Fitosanitari, COO, BL'}
                  </span>
                </div>
              </div>
            </div>

            {/* High-Contrast Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a 
                href="#contact" 
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-sm flex items-center gap-2 active:scale-95"
              >
                <span>{lang === 'en' ? 'Request Official Price Quote' : 'Minta Penawaran Harga Resmi'}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              <a 
                href="#catalog" 
                className="bg-white hover:bg-stone-100 text-slate-800 border border-stone-300 font-semibold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all active:scale-95"
              >
                <span>{lang === 'en' ? 'View Export Catalog' : 'Lihat Katalog Ekspor'}</span>
              </a>
            </div>

            {/* Quick Sourcing Assurance */}
            <div className="flex items-center gap-6 text-[11px] text-slate-500 pt-1 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                {lang === 'en' ? 'Quote response within 24h' : 'Respon penawaran < 24 jam'}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                {lang === 'en' ? 'Pre-shipment lab inspection' : 'Inspeksi lab sebelum kirim'}
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white p-3.5 rounded-3xl border border-stone-200 shadow-md">
              <div className="h-80 sm:h-96 rounded-2xl overflow-hidden relative">
                <img 
                  src={globalTradeHeroImg} 
                  alt="Nusa Global Exports International Shipping and Sourcing" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-amber-600 text-white px-2.5 py-1 rounded">
                    GLOBAL CONTAINER SHIPMENTS
                  </span>
                  <p className="text-xs font-semibold mt-2 text-stone-100 leading-snug">
                    {lang === 'en' ? 'Seamless ocean freight coordination from Indonesian main ports to your destination.' : 'Pengiriman kontainer laut profesional dari pelabuhan utama Indonesia ke tujuan Anda.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mt-3 text-xs">
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                  <span className="text-[10px] text-stone-500 font-mono uppercase block">
                    {lang === 'en' ? 'Export Hub' : 'Pusat Ekspor'}
                  </span>
                  <span className="font-bold text-slate-900">Jakarta & Surabaya</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                  <span className="text-[10px] text-stone-500 font-mono uppercase block">
                    {lang === 'en' ? 'Freight Terms' : 'Ketentuan Pengiriman'}
                  </span>
                  <span className="font-bold text-slate-900">FOB • CNF • CIF (FCL)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
