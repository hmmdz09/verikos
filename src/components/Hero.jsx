import React from 'react';
import { 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  BadgePercent, 
  Users, 
  MapPin, 
  Check, 
  ArrowRight,
  Filter,
  DollarSign
} from 'lucide-react';
import { campusAreas } from '../data/kosData';

export default function Hero({
  searchTerm,
  setSearchTerm,
  genderFilter,
  setGenderFilter,
  priceRange,
  setPriceRange,
  verifiedOnly,
  setVerifiedOnly,
  selectedArea,
  setSelectedArea,
  totalResults,
  onPerformSearch
}) {
  const quickTags = [
    { label: 'FPMIPA UPI', query: 'FPMIPA' },
    { label: 'Gegerkalong Girang', query: 'Gegerkalong' },
    { label: 'Kamar Mandi Dalam', query: 'Kamar Mandi Dalam' },
    { label: 'Dekat Isola', query: 'Isola' },
    { label: 'Budget < Rp850rb', budget: 'under-800' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-12 -left-20 w-80 h-80 bg-brand-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200/90 text-brand-700 text-xs font-bold shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-ping"></span>
            <span>Platform Agregator Terverifikasi Khusus UPI Bandung</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>0% Potongan Komisi Sewa</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Temukan Kos Impian di Sekitar UPI,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-600">
              100% Bebas Penipuan.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
            Setiap hunian bercentang biru telah disurvei fisik langsung oleh tim surveyor resmi. 
            Bebas biaya admin bagi mahasiswa, <span className="text-emerald-700 font-semibold underline decoration-emerald-400">0% potongan uang sewa</span> untuk pemilik kos, dan langsung chat WhatsApp ke pemilik asli.
          </p>
        </div>

        {/* Interactive Search & Filter Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-card border border-slate-200/80 p-4 sm:p-6 lg:p-7 relative transition-all">
          
          {/* Filter Pills: Gender / Type */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tipe Kos:</span>
              <div className="inline-flex bg-slate-100 p-1 rounded-2xl">
                {[
                  { id: 'all', label: 'Semua Kos' },
                  { id: 'Putri', label: 'Khusus Putri' },
                  { id: 'Putra', label: 'Khusus Putra' },
                  { id: 'Campur', label: 'Campur' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setGenderFilter(type.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      genderFilter === type.id
                        ? 'bg-brand-500 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Blue Verified Amanah Toggle */}
            <label className="flex items-center gap-2.5 cursor-pointer bg-brand-50/80 hover:bg-brand-50 px-3.5 py-1.5 rounded-xl border border-brand-200/70 transition-colors">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500 cursor-pointer"
              />
              <span className="flex items-center gap-1.5 text-xs font-bold text-brand-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                Hanya Kos Centang Biru Amanah
              </span>
            </label>
          </div>

          {/* Search Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 pt-5">
            
            {/* Keyword Search */}
            <div className="md:col-span-5 relative">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Cari Lokasi / Fakultas / Nama Kos
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cth: FPMIPA UPI, Gegerkalong Girang, WiFi..."
                  className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Sub-Area Radius Dropdown */}
            <div className="md:col-span-3">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Radius Sekitar UPI
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-brand-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 appearance-none cursor-pointer"
                >
                  {campusAreas.map((area) => (
                    <option key={area.id} value={area.id}>
                      {area.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Budget Range */}
            <div className="md:col-span-2">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Kisaran Budget
              </label>
              <div className="relative">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 appearance-none cursor-pointer"
                >
                  <option value="all">Semua Budget</option>
                  <option value="under-800">&lt; Rp 800.000</option>
                  <option value="800-1200">Rp 800rb - 1.2jt</option>
                  <option value="above-1200">&gt; Rp 1.200.000</option>
                </select>
              </div>
            </div>

            {/* Search Action CTA Button */}
            <div className="md:col-span-2 flex items-end">
              <button
                onClick={onPerformSearch}
                className="w-full py-3 px-4 rounded-2xl font-bold text-sm text-white bg-brand-500 hover:bg-brand-600 shadow-md shadow-brand-500/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Cari</span>
                <span className="bg-white/20 text-[11px] px-1.5 py-0.2 rounded-full font-bold">
                  {totalResults}
                </span>
              </button>
            </div>

          </div>

          {/* Quick Search Suggestions */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-400">Pencarian Populer Mahasiswa:</span>
            {quickTags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (tag.query) setSearchTerm(tag.query);
                  if (tag.budget) setPriceRange(tag.budget);
                  onPerformSearch();
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-slate-600 font-medium transition-colors"
              >
                #{tag.label}
              </button>
            ))}
          </div>

        </div>

        {/* Live Trust Metrics Bar */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          
          <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/70 shadow-sm">
            <div className="text-2xl lg:text-3xl font-extrabold text-brand-600">128+</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Kos Terverifikasi Lapangan</div>
            <div className="text-[10px] text-emerald-600 font-medium mt-0.5">✓ Area Kampus UPI Bandung</div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/70 shadow-sm">
            <div className="text-2xl lg:text-3xl font-extrabold text-emerald-600">100%</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Bebas Akun Penipuan</div>
            <div className="text-[10px] text-slate-500 font-medium mt-0.5">KTP & Rekening Terverifikasi</div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/70 shadow-sm">
            <div className="text-2xl lg:text-3xl font-extrabold text-brand-700">0%</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Potongan Biaya Sewa</div>
            <div className="text-[10px] text-slate-500 font-medium mt-0.5">Uang 100% ke Pemilik Kos</div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/70 shadow-sm">
            <div className="text-2xl lg:text-3xl font-extrabold text-slate-800">1.840+</div>
            <div className="text-xs font-semibold text-slate-600 mt-1">Mahasiswa Telah Terbantu</div>
            <div className="text-[10px] text-brand-600 font-medium mt-0.5">FPMIPA, FIP, FPSD, FPOK, dll</div>
          </div>

        </div>

      </div>
    </div>
  );
}
