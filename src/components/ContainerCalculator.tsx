import React, { useState, useEffect } from 'react';
import { Calculator, Box, Check, ArrowRight } from 'lucide-react';

interface ContainerCalculatorProps {
  lang: 'en' | 'id';
}

export const ContainerCalculator: React.FC<ContainerCalculatorProps> = ({ lang }) => {
  const [calcProduct, setCalcProduct] = useState<'briquette' | 'coconut' | 'coffee' | 'spices' | 'tea' | 'agri' | 'fishery'>('briquette');
  const [calcContainer, setCalcContainer] = useState<'20ft' | '40ft'>('20ft');
  const [calcResults, setCalcResults] = useState<{
    cartons: number;
    totalWeightKg: number;
    totalWeightTons: number;
    spaceUsedPercent: number;
    recommendation: string;
  }>({
    cartons: 1800,
    totalWeightKg: 18000,
    totalWeightTons: 18.0,
    spaceUsedPercent: 100,
    recommendation: ''
  });

  useEffect(() => {
    let weightPerUnit = 10; // 10kg master carton (briquette)
    if (calcProduct === 'coffee') weightPerUnit = 60; // 60kg jute bag
    else if (calcProduct === 'spices') weightPerUnit = 25; // 25kg bag
    else if (calcProduct === 'coconut') weightPerUnit = 25; // 25kg bag / kraft
    else if (calcProduct === 'tea') weightPerUnit = 45; // 45kg multi-ply paper sack
    else if (calcProduct === 'agri') weightPerUnit = 25; // 25kg tapioca/produce bag
    else if (calcProduct === 'fishery') weightPerUnit = 10; // 10kg frozen master box

    const maxWeightLimitKg = calcContainer === '20ft' ? 18000 : 25500;
    const itemsCount = Math.floor(maxWeightLimitKg / weightPerUnit);
    const totalWeightKg = itemsCount * weightPerUnit;
    const totalWeightTons = parseFloat((totalWeightKg / 1000).toFixed(1));
    const spaceUsedPercent = Math.min(100, Math.round((totalWeightKg / maxWeightLimitKg) * 100));

    let rec = '';
    if (lang === 'en') {
      rec =
        calcContainer === '20ft'
          ? '20ft Standard FCL is ideal for initial sample shipments, trial orders, and standard weight road regulations from Tanjung Priok or Tanjung Perak.'
          : '40ft High Cube FCL optimizes ocean freight rates per metric ton for high-volume commercial replenishment.';
    } else {
      rec =
        calcContainer === '20ft'
          ? 'Kontainer 20ft Standar sangat ideal untuk pesanan uji coba awal dan pemenuhan batas beban jalan dari Tanjung Priok atau Tanjung Perak.'
          : 'Kontainer 40ft High Cube mengoptimalkan efisiensi biaya pengiriman laut per ton untuk volume ekspor rutin.';
    }

    setCalcResults({
      cartons: itemsCount,
      totalWeightKg,
      totalWeightTons,
      spaceUsedPercent,
      recommendation: rec
    });
  }, [calcProduct, calcContainer, lang]);

  return (
    <section id="calculator" className="py-24 bg-[#FAFAF8] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-amber-800">
                <Calculator className="w-3.5 h-3.5" />
                <span>04. {lang === 'en' ? 'LOGISTICS TOOL' : 'ESTIMATOR LOGISTIK'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {lang === 'en' ? 'Container Payload Estimator (FCL)' : 'Estimator Muatan Kontainer (FCL)'}
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {lang === 'en'
                  ? 'Estimate full container load (FCL) shipping weight capacities for sea freight planning and commercial import budgeting.'
                  : 'Hitung perkiraan kapasitas berat muatan kontainer penuh (FCL) untuk perencanaan logistik laut dan estimasi anggaran ekspor.'}
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? '1. Select Commodity Type' : '1. Pilih Jenis Komoditas'}
                  </label>
                  <select
                    value={calcProduct}
                    onChange={(e: any) => setCalcProduct(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 text-xs text-slate-900 p-3 rounded-xl focus:border-slate-800 focus:outline-none font-medium"
                  >
                    <option value="briquette">Arang Briket Batok Kelapa (10kg Master Carton)</option>
                    <option value="coconut">Produk Turunan Kelapa / Desiccated (25kg Bag)</option>
                    <option value="spices">Rempah-Rempah / Cengkeh / Pala (25kg Sack)</option>
                    <option value="coffee">Biji Kopi Hijau Indonesia (60kg Jute Bag)</option>
                    <option value="tea">Teh Hitam / Teh Hijau Curah (45kg Paper Sack)</option>
                    <option value="agri">Hasil Pertanian / Tapioka / Jagung (25kg Bag)</option>
                    <option value="fishery">Perikanan & Seafood Beku (10kg Master Box)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? '2. Container Specification' : '2. Spesifikasi Kontainer'}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcContainer('20ft')}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        calcContainer === '20ft'
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <span className="block font-bold">20ft Standard FCL</span>
                      <span className="text-[10px] opacity-80">Max payload ~18 MT</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalcContainer('40ft')}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        calcContainer === '40ft'
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <span className="block font-bold">40ft High Cube FCL</span>
                      <span className="text-[10px] opacity-80">Max payload ~25.5 MT</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Estimated Payload Result */}
            <div className="lg:col-span-6 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200/90 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-800 block mb-1">
                  {lang === 'en' ? 'Estimated Container Yield' : 'Hasil Estimasi Muatan'}
                </span>
                <h3 className="text-base font-bold text-slate-950 mb-4">
                  {calcContainer === '20ft' ? '20-Foot Standard Container' : '40-Foot High Cube Container'}
                </h3>

                <div className="space-y-3 bg-white p-5 rounded-xl border border-stone-200/80 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-slate-500">{lang === 'en' ? 'Estimated Total Units:' : 'Estimasi Jumlah Unit:'}</span>
                    <span className="text-slate-950 font-bold">~{calcResults.cartons} units / bags</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-slate-500">{lang === 'en' ? 'Total Net Weight:' : 'Total Berat Bersih:'}</span>
                    <span className="text-slate-950 font-bold">
                      {calcResults.totalWeightTons} Metric Tons ({calcResults.totalWeightKg.toLocaleString()} kg)
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span className="text-slate-500">{lang === 'en' ? 'Payload Utilization:' : 'Utilisasi Beban Kontainer:'}</span>
                    <span className="text-emerald-700 font-bold">{calcResults.spaceUsedPercent}%</span>
                  </div>

                  <p className="text-[11px] text-slate-600 pt-2 leading-relaxed">
                    {calcResults.recommendation}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {lang === 'en' ? 'Need a custom CIF / FOB freight rate?' : 'Butuh penawaran tarif ongkos kirim CIF / FOB?'}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900"
                >
                  <span>{lang === 'en' ? 'Request Port Quote' : 'Minta Penawaran Pelabuhan'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
