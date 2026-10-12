import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  BadgePercent, 
  ArrowRight, 
  TrendingUp, 
  Calculator,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { pricingPlans } from '../data/kosData';

export default function MitraPricingSection({ onOpenMitraModal }) {
  // Interactive Calculator State
  const [roomCount, setRoomCount] = useState(8);
  const [roomPrice, setRoomPrice] = useState(900000);

  const monthlyGrossIncome = roomCount * roomPrice;
  const otaCut10Percent = monthlyGrossIncome * 0.10;
  const veriproCost = 75000;
  const ownerMonthlySavings = otaCut10Percent - veriproCost;
  const ownerYearlySavings = ownerMonthlySavings * 12;

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="paket-mitra" className="py-20 bg-gradient-to-b from-slate-50 via-white to-brand-50/50 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BadgePercent className="w-4 h-4 text-emerald-600" />
            Khusus Pemilik Rumah Kos (Mitra VeriKos)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Punya Rumah Kos di Sekitar Kampus? Penuhi Kamar Tanpa Potongan Komisi Sewa!
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Platform lain memotong <span className="font-bold text-red-500">5%–15%</span> dari seluruh uang sewa bulanan Anda. Di VeriKos, nikmati model langganan flat bulanan yang ramah kantong. Uang sewa mahasiswa 100% masuk ke rekening Anda!
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {pricingPlans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? 'bg-white border-2 border-brand-500 shadow-xl shadow-brand-500/10 lg:-translate-y-2'
                    : 'bg-white/80 backdrop-blur border border-slate-200 shadow-sm hover:shadow-card'
                }`}
              >
                {/* Best Seller Pill */}
                {plan.badge && (
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${plan.badgeClass}`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-sm font-semibold text-slate-500">{plan.period}</span>
                  </div>

                  {plan.savingsTag && (
                    <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg mb-6 border border-emerald-200">
                      ✨ {plan.savingsTag}
                    </div>
                  )}

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        {feat.included ? (
                          <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-slate-400" />
                          </div>
                        )}
                        <span className={`${feat.bold ? 'font-bold text-slate-900' : ''} ${!feat.included ? 'text-slate-400' : ''}`}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <button
                  onClick={() => onOpenMitraModal(plan.id)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 transform hover:-translate-y-0.5'
                      : plan.ctaVariant === 'dark'
                      ? 'bg-slate-900 hover:bg-slate-800 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* INTERACTIVE CALCULATOR: Hemat Jutaan Rupiah dengan VeriKos */}
        <div className="bg-gradient-to-br from-slate-900 to-brand-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulasi Kalkulator Penghematan Pemilik Kos</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Berapa Uang yang Anda Selamatkan Setiap Bulan?
              </h3>
              <p className="text-slate-300 text-sm">
                Geser simulasi di bawah untuk melihat perbandingan jika kos Anda memakai aplikasi pemotong komisi vs paket flat langganan VeriKos (Rp75.000/bln):
              </p>

              {/* Slider 1: Jumlah Kamar */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Jumlah Kamar Tersewa:</span>
                  <span className="text-brand-300 text-base">{roomCount} Kamar</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={roomCount}
                  onChange={(e) => setRoomCount(parseInt(e.target.value))}
                  className="w-full accent-brand-400 cursor-pointer"
                />
              </div>

              {/* Slider 2: Tarif Sewa */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-300">Tarif Sewa Kamar Rata-Rata:</span>
                  <span className="text-brand-300 text-base">{formatRupiah(roomPrice)} / bln</span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="2500000"
                  step="50000"
                  value={roomPrice}
                  onChange={(e) => setRoomPrice(parseInt(e.target.value))}
                  className="w-full accent-brand-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Right Result Comparison Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <div>
                <div className="text-xs text-slate-300">Total Pemasukan Sewa Bruto:</div>
                <div className="text-xl font-bold text-white">{formatRupiah(monthlyGrossIncome)} / bln</div>
              </div>

              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-xs">
                <div className="text-red-300 font-medium">Potongan Komisi OTA Lain (10%):</div>
                <div className="text-base font-black text-red-200">-{formatRupiah(otaCut10Percent)} / bulan hilang!</div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-xs">
                <div className="text-emerald-300 font-medium">Biaya VeriKos (Paket VeriPro):</div>
                <div className="text-base font-black text-emerald-200">Hanya Rp 75.000 / bulan (Flat)</div>
              </div>

              <div className="pt-3 border-t border-white/20">
                <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">Anda Berhasil Menghemat:</div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">
                  {formatRupiah(ownerMonthlySavings)}
                  <span className="text-xs font-normal text-slate-300 ml-1">/ bulan</span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Setara hemat <strong className="text-white">{formatRupiah(ownerYearlySavings)}</strong> per tahun!
                </div>
              </div>

              <button
                onClick={() => onOpenMitraModal('veripro')}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Ajukan Verifikasi Kos Saya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
