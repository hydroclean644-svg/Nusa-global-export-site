import React from 'react';

interface WhyChooseUsProps {
  lang: 'en' | 'id';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const items = [
    {
      num: '01',
      titleEn: 'Direct Indonesian Producer Network',
      titleId: 'Jaringan Produsen Langsung di Indonesia',
      descEn: 'Direct access to vetted Indonesian cooperatives, processing mills, and certified manufacturers across Java, Sumatra, Sulawesi, and Bali.',
      descId: 'Akses langsung ke pabrik pengolahan terverifikasi dan koperasi komoditas di Jawa, Sumatra, Sulawesi, dan Bali.'
    },
    {
      num: '02',
      titleEn: 'Specification Matching & Quality Control',
      titleId: 'Penyesuaian Spesifikasi & Kontrol Kualitas',
      descEn: 'Products prepared strictly according to buyer target dimensions, moisture content, grades, and quality parameters with pre-shipment inspection.',
      descId: 'Produk disiapkan sesuai spesifikasi dimensi, kadar air, grade, dan parameter mutu pembeli dengan inspeksi pra-pengiriman.'
    },
    {
      num: '03',
      titleEn: 'Custom OEM Export Packaging',
      titleId: 'Kemasan Ekspor & OEM Kustom',
      descEn: 'Tailored private labeling, branded inner boxes, master cartons, and heavy-duty container packaging to protect products throughout transit.',
      descId: 'Layanan private label, inner box bermerek, master karton, dan standar proteksi kontainer laut untuk menjaga keutuhan komoditas.'
    },
    {
      num: '04',
      titleEn: 'Complete Trade & Customs Documentation',
      titleId: 'Dokumentasi Ekspor & Legalitas Lengkap',
      descEn: 'Full support for COA (Certificate of Analysis), MSDS, Phytosanitary, Certificate of Origin (COO), and compliant international Bills of Lading.',
      descId: 'Penyediaan lengkap COA laboratorium, MSDS, sertifikat fitosanitari, COO (Surat Keterangan Asal), dan Bill of Lading ekspor.'
    },
    {
      num: '05',
      titleEn: 'Reliable Container Logistics Management',
      titleId: 'Manajemen Logistik & Kontainer Terpercaya',
      descEn: 'Professional coordination of 20ft & 40ft High Cube container loadings with FOB, CNF, or CIF freight quotes to your destination port.',
      descId: 'Pengaturan pemuatan kontainer 20ft & 40ft HC dengan penawaran tarif pengiriman FOB, CNF, atau CIF ke pelabuhan tujuan Anda.'
    },
    {
      num: '06',
      titleEn: 'Dedicated B2B Communication Desk',
      titleId: 'Layanan Komunikasi B2B Responsif',
      descEn: 'Direct communication with dedicated export management, prompt quotations, and transparent updates from inquiry to port arrival.',
      descId: 'Komunikasi langsung dengan pengelola ekspor yang responsif, penawaran harga cepat, dan laporan transparan hingga pelabuhan.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-amber-800 mb-3">
            <span>03. {lang === 'en' ? 'VALUE PROPOSITION' : 'KEUNGGULAN KAMI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'en' ? 'Why Choose Nusa Global Exports' : 'Mengapa Memilih Nusa Global Exports'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
            {lang === 'en'
              ? 'We bridge the gap between global commercial buyers and authentic Indonesian supplier networks with reliability, speed, and strict quality alignment.'
              : 'Kami menghubungkan pembeli komersial internasional dengan jaringan pemasok Indonesia secara transparan, profesional, dan berorientasi jangka panjang.'}
          </p>
        </div>

        {/* 6 Clean Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-50 rounded-2xl p-7 border border-stone-200/80 hover:border-stone-400/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-amber-800 bg-white border border-stone-200 px-2.5 py-1 rounded-md inline-block mb-4">
                  {item.num}
                </span>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {lang === 'en' ? item.titleEn : item.titleId}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'en' ? item.descEn : item.descId}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
