import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Building, 
  User, 
  Phone, 
  MapPin, 
  DollarSign, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';
import { campusAreas } from '../data/kosData';

export default function MitraRegistrationModal({ 
  isOpen, 
  onClose, 
  defaultPlan = 'veripro',
  onSuccess
}) {
  const [formData, setFormData] = useState({
    ownerName: '',
    phoneWa: '',
    kosName: '',
    area: 'gegerkalong',
    address: '',
    kosType: 'Putri',
    roomCount: '10',
    priceEstimate: '850000',
    selectedPlan: defaultPlan
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) {
      onSuccess(`Pendaftaran kos "${formData.kosName}" berhasil diajukan! Tim surveyor akan menghubungi nomor ${formData.phoneWa}.`);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in">
      
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Pendaftaran Mitra & Pengajuan Verifikasi Kos
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Area Kampus UPI Bandung (Gegerkalong, Isola, Setiabudi, Sukasari, Ledeng)
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Success Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-slate-900">
                Pengajuan Audit Berhasil Dikirim!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Terima kasih, Bapak/Ibu <strong className="text-slate-800">{formData.ownerName}</strong>. 
                Pendaftaran untuk kos <strong className="text-slate-800">{formData.kosName}</strong> telah masuk ke antrean inspeksi lapangan.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto">
              <div className="font-bold text-slate-700 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-500" />
                Langkah Verifikasi Selanjutnya:
              </div>
              <p className="text-slate-600">
                1. Surveyor VeriKos wilayah UPI akan menghubungi WhatsApp <strong>{formData.phoneWa}</strong> dalam 1x24 jam untuk menjadwalkan kunjungan fisik.
              </p>
              <p className="text-slate-600">
                2. Siapkan KTP asli & bukti kepemilikan/pengelolaan properti.
              </p>
              <p className="text-slate-600">
                3. Setelah lolos audit, lencana <strong>Centang Biru Amanah</strong> langsung aktif di platform.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="py-3 px-6 rounded-2xl font-bold text-sm bg-brand-500 text-white hover:bg-brand-600 shadow-md"
            >
              Selesai & Tutup
            </button>
          </div>
        ) : (
          /* Registration Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            
            {/* Step 1: Info Pemilik */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                1. Identitas Pemilik / Pengelola Kos
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap Sesuai KTP *</label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="Cth: Ibu Hj. Siti Maryam"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nomor WhatsApp Aktif *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneWa}
                    onChange={(e) => setFormData({ ...formData, phoneWa: e.target.value })}
                    placeholder="Cth: 082288206271"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Info Kos */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                2. Spesifikasi Rumah Kos di Sekitar UPI
              </label>
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Kos *</label>
                    <input
                      type="text"
                      required
                      value={formData.kosName}
                      onChange={(e) => setFormData({ ...formData, kosName: e.target.value })}
                      placeholder="Cth: Kost Muslimah Berkah Gegerkalong"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Tipe Kos *</label>
                    <select
                      value={formData.kosType}
                      onChange={(e) => setFormData({ ...formData, kosType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    >
                      <option value="Putri">Khusus Putri</option>
                      <option value="Putra">Khusus Putra</option>
                      <option value="Campur">Campur</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Sub-Area Sekitar Kampus UPI *</label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    >
                      {campusAreas.filter(a => a.id !== 'all').map(area => (
                        <option key={area.id} value={area.id}>{area.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Total Jumlah Kamar *</label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.roomCount}
                      onChange={(e) => setFormData({ ...formData, roomCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Lengkap & Patokan Dekat UPI *</label>
                  <textarea
                    required
                    rows="2"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Cth: Jl. Gegerkalong Girang No. 12 (Masuk gang samping masjid Al-Furqan, 300m dari FPMIPA)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Step 3: Pilihan Paket */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                3. Pilihan Paket Langganan Mitra
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'basic', name: 'Basic (Gratis)', price: 'Rp 0', tag: 'Tanpa Centang Biru' },
                  { id: 'veripro', name: 'VeriPro (Rekomendasi)', price: 'Rp 75rb/bln', tag: 'Centang Biru + Audit Fisik' },
                  { id: 'veripremium', name: 'VeriPremium', price: 'Rp 150rb/bln', tag: 'Banner Utama + Promosi' }
                ].map((pkg) => (
                  <label
                    key={pkg.id}
                    className={`p-3 rounded-2xl border-2 cursor-pointer flex flex-col justify-between transition-all ${
                      formData.selectedPlan === pkg.id 
                        ? 'border-brand-500 bg-brand-50/60 shadow-xs' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-slate-900">{pkg.name}</span>
                      <input
                        type="radio"
                        name="plan"
                        checked={formData.selectedPlan === pkg.id}
                        onChange={() => setFormData({ ...formData, selectedPlan: pkg.id })}
                        className="text-brand-500 focus:ring-brand-500"
                      />
                    </div>
                    <div className="text-sm font-extrabold text-brand-600">{pkg.price}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{pkg.tag}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-600 shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-98"
              >
                <span>Ajukan Verifikasi & Jadwalkan Survei</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                Bebas biaya komisi 0%. Pembayaran langganan dilakukan hanya setelah surveyor selesai mengaudit.
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
