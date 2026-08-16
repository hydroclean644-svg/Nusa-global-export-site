import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, User, Anchor, ArrowUpRight } from 'lucide-react';
import { ProductItem } from '../types';

interface InquirySectionProps {
  products: ProductItem[];
  formProduct: string;
  setFormProduct: (prod: string) => void;
  lang: 'en' | 'id';
  businessEmail: string;
  contactPerson: string;
  contactPhone: string;
  getWhatsAppLink: (msg?: string) => string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  products,
  formProduct,
  setFormProduct,
  lang,
  businessEmail,
  contactPerson,
  contactPhone,
  getWhatsAppLink
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formCountry, setFormCountry] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [originPort, setOriginPort] = useState('Pelabuhan Tanjung Priok (Jakarta)');
  const [formQuantity, setFormQuantity] = useState('1x20ft FCL (~18 MT)');
  const [formSpec, setFormSpec] = useState('');
  const [formPackaging, setFormPackaging] = useState('');
  const [formPort, setFormPort] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [mailToUrl, setMailToUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    const ref = 'NGE-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);

    // Build structured email payload
    const subject = encodeURIComponent(`[INQUIRY ${ref}] ${formProduct} - ${formCompany || formName}`);
    const bodyContent = `Dear Nusa Global Exports (${contactPerson}),

I would like to submit an export inquiry with the following specifications:

--------------------------------------------------
INQUIRY REFERENCE: ${ref}
COMMODITY        : ${formProduct}
ORIGIN PORT (ID) : ${originPort}
ESTIMATED VOLUME : ${formQuantity}
DESTINATION PORT : ${formPort || 'FOB Terms / To be determined'}
SPECIFICATIONS   : ${formSpec || 'Standard Export Grade'}
PACKAGING REQ    : ${formPackaging || 'Standard Master Carton / OEM'}
--------------------------------------------------

BUYER DETAILS:
- Full Name      : ${formName}
- Company Name   : ${formCompany || '-'}
- Country        : ${formCountry || '-'}
- Business Email : ${formEmail}
- WhatsApp/Phone : ${formPhone || '-'}

ADDITIONAL NOTES:
${formMsg || 'Please provide your formal quotation and product catalog with CIF / FOB prices.'}

Looking forward to your swift response.

Best regards,
${formName}`;

    const generatedMailto = `mailto:${businessEmail}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
    setMailToUrl(generatedMailto);
    setFormSubmitted(true);

    // Trigger direct mail client opening
    try {
      window.location.href = generatedMailto;
    } catch {
      // fallback
    }
  };

  const getWaInquiryMessage = () => {
    return `Halo *Nusa Global Exports* (${contactPerson}),
Saya ingin meminta penawaran harga ekspor:

*Ref:* ${referenceId}
*Produk:* ${formProduct}
*Pelabuhan Muat:* ${originPort}
*Volume:* ${formQuantity}
*Pelabuhan Tujuan:* ${formPort || '-'}
*Spesifikasi:* ${formSpec || 'Standar Ekspor'}
*Nama/Perusahaan:* ${formName} (${formCompany || '-'}, ${formCountry || '-'})
*Email:* ${formEmail}`;
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-amber-800 mb-3">
            <span>05. {lang === 'en' ? 'B2B INQUIRY & DIRECT EMAIL' : 'PERMINTAAN PENAWARAN HARGA EKSPOR'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'en' ? 'Request a Formal Export Quotation' : 'Minta Penawaran Harga Ekspor Resmi'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
            {lang === 'en'
              ? 'Select your commodity, loading port (Tanjung Priok or Surabaya), required specifications, and submit directly to our official export desk email and WhatsApp.'
              : 'Pilih komoditas, pelabuhan muat (Tanjung Priok atau Tanjung Perak Surabaya), spesifikasi, dan kirimkan langsung ke email resmi export desk serta WhatsApp kami.'}
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-[#FAFAF8] rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-xs">
          {formSubmitted ? (
            <div className="text-center py-10 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-950">
                {lang === 'en' ? 'Inquiry Ready to Send via Email' : 'Permintaan Siap Terkirim ke Email'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                {lang === 'en'
                  ? `Data permintaan ekspor Anda telah diformat. Aplikasi email Anda akan terbuka untuk mengirimkan data ke ${businessEmail}. Anda juga dapat langsung mengonfirmasi via WhatsApp ke ${contactPerson}.`
                  : `Data penawaran Anda telah diformat. Program email Anda otomatis terbuka untuk mengirim ke ${businessEmail}. Anda juga dapat meneruskan detail penawaran ini ke WhatsApp ${contactPerson}.`}
              </p>
              
              <div className="bg-white p-4 rounded-xl border border-stone-200 font-mono text-xs text-slate-900 w-fit mx-auto shadow-xs">
                <span className="text-slate-500 font-medium">Reference ID:</span> <strong>{referenceId}</strong>
                <div className="text-[11px] text-slate-500 mt-1">To: <span className="text-amber-800 font-bold">{businessEmail}</span></div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={mailToUrl}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'en' ? 'Open / Resend Email Client' : 'Kirim / Buka Aplikasi Email'}</span>
                </a>

                <a
                  href={getWhatsAppLink(getWaInquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Send via WhatsApp (+62 859-3192-7219)' : 'Kirim via WhatsApp (+62 859-3192-7219)'}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-stone-500 hover:text-stone-800 text-xs font-medium underline"
                >
                  {lang === 'en' ? '← Edit or Submit Another Request' : '← Edit atau Buat Permintaan Lain'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'Full Name *' : 'Nama Lengkap *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Alexander Wright"
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'Business Email Address *' : 'Alamat Email Bisnis Anda *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. alex@globaltrade.com"
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Company & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'Company Name' : 'Nama Perusahaan'}
                  </label>
                  <input
                    type="text"
                    value={formCompany}
                    onChange={(e) => setFormCompany(e.target.value)}
                    placeholder="e.g. Apex Trading Corp"
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'Destination Country' : 'Negara Tujuan Ekspor'}
                  </label>
                  <input
                    type="text"
                    value={formCountry}
                    onChange={(e) => setFormCountry(e.target.value)}
                    placeholder="e.g. Germany / United Arab Emirates / Japan / USA"
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Product & Loading Port (Tanjung Priok vs Surabaya) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'Export Commodity / Product *' : 'Komoditas Ekspor yang Diminati *'}
                  </label>
                  <select
                    value={formProduct}
                    onChange={(e) => setFormProduct(e.target.value)}
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none font-semibold text-amber-950"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'Indonesian Loading Port (FOB Origin) *' : 'Pelabuhan Muat Asal Indonesia (FOB) *'}
                  </label>
                  <select
                    value={originPort}
                    onChange={(e) => setOriginPort(e.target.value)}
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none font-medium"
                  >
                    <option value="Pelabuhan Tanjung Priok (Jakarta)">Pelabuhan Tanjung Priok (Jakarta, Jawa Barat)</option>
                    <option value="Pelabuhan Tanjung Perak (Surabaya)">Pelabuhan Tanjung Perak (Surabaya, Jawa Timur)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Volume & Destination Port */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'Estimated Volume (FCL / Metric Tons / Pcs)' : 'Estimasi Volume (FCL / Ton / Pcs)'}
                  </label>
                  <input
                    type="text"
                    value={formQuantity}
                    onChange={(e) => setFormQuantity(e.target.value)}
                    placeholder="e.g. 1x20ft FCL (~18 MT) atau 100 pcs Jaket"
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'Destination Port (for CIF / CNF Quote)' : 'Pelabuhan Tujuan Bongkar (untuk CIF / CNF)'}
                  </label>
                  <input
                    type="text"
                    value={formPort}
                    onChange={(e) => setFormPort(e.target.value)}
                    placeholder="e.g. Port of Hamburg / Jebel Ali / Rotterdam / Los Angeles"
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 5: WhatsApp/Phone & Packaging */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'WhatsApp / Contact Number' : 'Nomor WhatsApp / Telepon Pembeli'}
                  </label>
                  <input
                    type="text"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. +49 152 1234567"
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                    {lang === 'en' ? 'Packaging / OEM Request' : 'Kebutuhan Kemasan / OEM'}
                  </label>
                  <input
                    type="text"
                    value={formPackaging}
                    onChange={(e) => setFormPackaging(e.target.value)}
                    placeholder="e.g. OEM Inner Box, Master Carton 10kg, Polybag..."
                    className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Specifications & Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                  {lang === 'en' ? 'Specific Requirements / Dimensions / Quality Grade' : 'Persyaratan Spesifikasi / Ukuran / Grade Kualitas'}
                </label>
                <input
                  type="text"
                  value={formSpec}
                  onChange={(e) => setFormSpec(e.target.value)}
                  placeholder="e.g. Cube 25mm, Ash <2.2%, Grade 1, Lambskin Leather Jacket..."
                  className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1.5 font-mono">
                  {lang === 'en' ? 'Additional Message & Inquiries' : 'Pesan Tambahan'}
                </label>
                <textarea
                  rows={3}
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'Tell us about your target delivery timeline, sample requests, or specific export terms...'
                      : 'Sebutkan jadwal pengiriman yang diharapkan, permintaan sampel, atau ketentuan khusus lainnya...'
                  }
                  className="w-full bg-white border border-stone-200 text-xs text-slate-900 p-3.5 rounded-xl focus:border-slate-800 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99]"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'en' ? 'Send Inquiry Directly to Official Export Email' : 'Kirim Penawaran Langsung ke Email Resmi Ekspor'}</span>
                </button>

                <div className="text-center text-[11px] text-stone-500">
                  <span>Export Desk Email: </span>
                  <a href={`mailto:${businessEmail}`} className="font-semibold text-slate-800 underline font-mono">
                    {businessEmail}
                  </a>
                  <span> • Official WhatsApp: </span>
                  <span className="font-semibold text-emerald-700 font-mono">{contactPhone}</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
