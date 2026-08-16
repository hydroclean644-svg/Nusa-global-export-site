import React from 'react';
import { X, CheckCircle2, ArrowRight, Tag, ShieldCheck, Box, Anchor } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuote: (product: ProductItem) => void;
  lang: 'en' | 'id';
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuote,
  lang
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="bg-white border border-stone-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-700 hover:text-slate-950 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Category Badge */}
        <div className="flex items-center gap-2 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
          <Tag className="w-3.5 h-3.5" />
          <span>{product.category}</span>
        </div>

        {/* Product Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4 leading-tight">
          {product.name}
        </h2>

        {/* Main Image */}
        <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 relative bg-stone-100 border border-stone-200">
          <img
            src={product.mainImage}
            alt={product.seoKeyword}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded">
            Origin: {product.origin}
          </span>
        </div>

        {/* Full Description */}
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 bg-stone-50 p-4 rounded-xl border border-stone-200/70">
          {product.fullDesc}
        </p>

        {/* Varieties & Forms */}
        {product.varieties && product.varieties.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider mb-3 font-mono">
              {lang === 'en' ? 'Available Forms & Series' : 'Bentuk & Varian Tersedia'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.varieties.map((v, i) => (
                <div key={i} className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200/80 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Specifications Table */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider mb-3 font-mono">
            {lang === 'en' ? 'Technical Specifications & Quality Parameters' : 'Spesifikasi Teknis & Parameter Kualitas'}
          </h4>
          <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100 text-xs overflow-hidden">
            {product.specs.map((s, idx) => (
              <div key={idx} className="flex justify-between p-3">
                <span className="text-slate-500 font-medium">{s.label}:</span>
                <span className="text-slate-900 font-semibold text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider mb-2 font-mono">
            {lang === 'en' ? 'Commercial Buyer Applications' : 'Aplikasi Industri & Komersial'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app, i) => (
              <span key={i} className="bg-stone-100 text-slate-700 text-xs px-3 py-1 rounded-lg border border-stone-200">
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Packaging, MOQ & Terms */}
        <div className="mb-6 bg-stone-50 p-4 rounded-xl border border-stone-200/80 space-y-2 text-xs text-slate-700">
          <p><strong className="text-slate-950">{lang === 'en' ? 'Packaging:' : 'Kemasan:'}</strong> {product.packaging}</p>
          <p><strong className="text-slate-950">{lang === 'en' ? 'Minimum Order Quantity (MOQ):' : 'Kuantitas Minimum (MOQ):'}</strong> {product.moq}</p>
          <p><strong className="text-slate-950">{lang === 'en' ? 'Shipping Terms:' : 'Ketentuan Pengiriman:'}</strong> {product.exportAvailability}</p>
          <p><strong className="text-slate-950">{lang === 'en' ? 'Documentation:' : 'Dokumentasi:'}</strong> {product.documentation}</p>
        </div>

        {/* Price Note */}
        <div className="mb-6 text-center bg-amber-50 p-3 rounded-xl border border-amber-200/70 text-xs text-amber-900 font-medium">
          {lang === 'en'
            ? 'Price: Quotation provided based on destination port, current market price, and target volume (FOB / CNF / CIF).'
            : 'Harga: Penawaran resmi dihitung berdasarkan pelabuhan tujuan, harga pasar terkini, dan volume pesanan (FOB / CNF / CIF).'}
        </div>

        {/* Modal Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-1/2 bg-stone-100 hover:bg-stone-200 text-slate-700 font-semibold text-xs py-3 rounded-xl transition-colors"
          >
            {lang === 'en' ? 'Close Specifications' : 'Tutup Spesifikasi'}
          </button>
          <button
            onClick={() => onOpenQuote(product)}
            className="w-full sm:w-1/2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <span>{lang === 'en' ? 'Request Quote for this Product' : 'Minta Penawaran untuk Produk Ini'}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </div>
  );
};
