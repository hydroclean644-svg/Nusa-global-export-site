import React from 'react';
import { Search, Info, ArrowRight, Tag, PackageCheck, CheckCircle2 } from 'lucide-react';
import { ProductItem } from '../types';

interface CatalogSectionProps {
  products: ProductItem[];
  selectedGroupFilter: string;
  setSelectedGroupFilter: (group: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectProduct: (p: ProductItem) => void;
  onOpenQuoteForProduct: (p: ProductItem) => void;
  lang: 'en' | 'id';
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  selectedGroupFilter,
  setSelectedGroupFilter,
  searchQuery,
  setSearchQuery,
  onSelectProduct,
  onOpenQuoteForProduct,
  lang
}) => {
  const groups = [
    { id: 'all', labelEn: 'All Commodities', labelId: 'Semua Komoditas' },
    { id: 'Renewable & Charcoal', labelEn: 'Briquettes', labelId: 'Arang Briket' },
    { id: 'Coconut & Agri', labelEn: 'Coconut Derivatives', labelId: 'Turunan Kelapa' },
    { id: 'Spices, Coffee & Tea', labelEn: 'Spices, Coffee & Tea', labelId: 'Rempah, Kopi & Teh' },
    { id: 'Agriculture & Fishery', labelEn: 'Agri, Fishery & Fruits', labelId: 'Pertanian, Perikanan & Buah' },
    { id: 'Apparel & Handicrafts', labelEn: 'Leather & Bamboo Craft', labelId: 'Jaket Kulit & Anyaman Bambu' }
  ];

  const filteredProducts = products.filter((p) => {
    const matchesGroup = selectedGroupFilter === 'all' || p.groupFilter === selectedGroupFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.shortDesc.toLowerCase().includes(query) ||
      p.fullDesc.toLowerCase().includes(query) ||
      p.seoKeyword.toLowerCase().includes(query);

    return matchesGroup && matchesSearch;
  });

  return (
    <section id="catalog" className="py-24 bg-[#FAFAF8] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-amber-800 mb-3">
            <span>02. {lang === 'en' ? 'EXPORT PORTFOLIO' : 'KATALOG EKSPOR'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'en' ? 'Indonesian Export Product Catalog' : 'Katalog Produk Ekspor Indonesia'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
            {lang === 'en'
              ? 'Quality products sourced through our trusted network of Indonesian producers. All items are customizable according to buyer specifications and destination port requirements.'
              : 'Produk-produk berkualitas yang dipasok melalui jaringan produsen Indonesia terpercaya kami. Seluruh komoditas dapat disesuaikan dengan spesifikasi dan standar pelabuhan tujuan Anda.'}
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'en' ? 'Search commodities...' : 'Cari komoditas ekspor...'}
              className="w-full pl-10 pr-8 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold"
              >
                ×
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {groups.map((g) => {
              const isActive = selectedGroupFilter === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGroupFilter(g.id)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-stone-100 text-slate-600 hover:bg-stone-200/80 hover:text-slate-900'
                  }`}
                >
                  {lang === 'en' ? g.labelEn : g.labelId}
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Product Image */}
                <div className="h-56 overflow-hidden relative bg-stone-100">
                  <img
                    src={p.mainImage}
                    alt={p.seoKeyword}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md border border-stone-200">
                    {p.badge}
                  </span>
                </div>

                {/* Product Body */}
                <div className="p-6 flex flex-col gap-3">
                  <div>
                    <span className="text-[11px] font-medium text-amber-800 uppercase tracking-wide">
                      {p.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-950 mt-0.5 group-hover:text-amber-800 transition-colors">
                      {p.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {p.shortDesc}
                  </p>

                  {/* Options / Varieties snippet */}
                  {p.optionsText && (
                    <p className="text-[11px] text-slate-500 bg-stone-50 p-2.5 rounded-lg border border-stone-100 leading-normal">
                      {p.optionsText}
                    </p>
                  )}

                  {/* Origin & MOQ Specs */}
                  <div className="pt-3 border-t border-stone-100 text-xs space-y-1 text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === 'en' ? 'Origin:' : 'Asal:'}</span>
                      <span className="font-semibold text-slate-800">{p.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{lang === 'en' ? 'MOQ:' : 'MOQ:'}</span>
                      <span className="font-semibold text-slate-800">{p.moq}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-slate-400">{lang === 'en' ? 'Quotation:' : 'Penawaran:'}</span>
                      <span className="text-amber-800 font-bold text-[11px] bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                        {lang === 'en' ? 'Available upon request' : 'Tersedia sesuai permintaan'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onSelectProduct(p)}
                  className="w-full bg-stone-100 hover:bg-stone-200 text-slate-800 font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-slate-600" />
                  <span>{lang === 'en' ? 'View Specs' : 'Spesifikasi'}</span>
                </button>

                <button
                  onClick={() => onOpenQuoteForProduct(p)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{lang === 'en' ? 'Request Quote' : 'Minta Penawaran'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <p className="text-slate-500 text-sm">
              {lang === 'en' ? 'No products found matching your search.' : 'Tidak ada produk yang cocok dengan pencarian Anda.'}
            </p>
            <button
              onClick={() => {
                setSelectedGroupFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl"
            >
              {lang === 'en' ? 'Reset Filters' : 'Reset Filter'}
            </button>
          </div>
        )}

        {/* Custom OEM Packaging Notice */}
        <div className="mt-14 bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-800 shrink-0">
            <PackageCheck className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wide">
              {lang === 'en' ? 'Custom Export Packaging & Private Labeling' : 'Kustomisasi Kemasan Ekspor & Label Privat'}
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {lang === 'en'
                ? 'Packaging can be customized according to buyer requirements, including inner boxes, master cartons, bag sizes, private branding, and export preparation, subject to product and supplier availability.'
                : 'Kemasan dapat disesuaikan sepenuhnya dengan kebutuhan pembeli, termasuk inner box, master karton, ukuran karung, private branding, dan standar proteksi kontainer ekspor.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
