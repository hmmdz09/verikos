import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BadgePercent, 
  MessageCircle, 
  CheckCircle2, 
  XCircle, 
  Camera, 
  UserCheck, 
  Lock, 
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function TrustBanner({ onOpenMitraModal }) {
  const [showComparison, setShowComparison] = useState(false);

  const features = [
    {
      icon: ShieldCheck,
      iconColor: 'text-brand-500',
      bgColor: 'bg-brand-50',
      borderColor: 'border-brand-200',
      badge: 'Jaminan 100% Riil',
      badgeColor: 'bg-brand-100 text-brand-700',
      title: 'Audit Fisik Lapangan Langsung',
      desc: 'Setiap kos bercentang biru disurvei langsung oleh surveyor lapangan di kawasan UPI (Gegerkalong, Isola, Setiabudi). Foto 100% nyata tanpa sudut palsu.',
      points: [
        'Inspeksi kelayakan ventilasi & air bersih',
        'Validasi keaslian titik lokasi GPS fisik',
        'Cek kesesuaian fasilitas di kamar'
      ]
    },
    {
      icon: BadgePercent,
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      badge: '0% Komisi Transaksi',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      title: 'Bebas Potongan Komisi Sewa',
      desc: 'Berbeda dari platform lain yang memotong 5%-15% uang sewa, di VeriKos pemilik kos menerima 100% uang sewanya utuh lewat model langganan bulanan flat.',
      points: [
        'Harga sewa untuk mahasiswa tetap transparan',
        'Pemilik kos untung maksimal tanpa potongan',
        'Tanpa biaya admin aplikasi bagi mahasiswa'
      ]
    },
    {
      icon: MessageCircle,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50/70',
      borderColor: 'border-emerald-200',
      badge: 'Direct WhatsApp',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      title: 'Direct Chat WhatsApp Pemilik',
      desc: 'Hubungi langsung bapak/ibu pemilik kos yang sah tanpa perantara, tanpa calo, dan tanpa sistem chat tertutup yang merepotkan.',
      points: [
        'Nomor WA telah divalidasi KTP & nama pemilik',
        'Klarifikasi ketersediaan kamar secara instan',
        'Bisa janjian survei lokasi tatap muka langsung'
      ]
    }
  ];

  return (
    <section id="mengapa-verikos" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            Keunggulan VeriKos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengapa Mahasiswa UPI Memilih VeriKos?
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Kami menyelesaikan masalah klasik pencarian kos di Bandung Utara: maraknya kos fiktif di media sosial dan mahalnya potongan komisi di aplikasi booking.
          </p>
        </div>

        {/* 3 Key Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-brand-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${feature.badgeColor}`}>
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  {feature.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Comparison Table */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs sm:text-sm font-bold transition-all border border-slate-200"
          >
            <span>{showComparison ? 'Tutup Perbandingan' : 'Bandingkan: VeriKos vs Platform Kos Biasa'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${showComparison ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Comparison Table Content */}
        {showComparison && (
          <div className="mt-8 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-in fade-in slide-in-from-top-4">
            <h4 className="text-lg font-bold text-slate-900 mb-4 text-center">
              Tabel Komparasi Transparansi Layanan
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase text-[11px]">
                    <th className="py-3 px-4">Fitur Layanan</th>
                    <th className="py-3 px-4 text-brand-600 font-extrabold bg-brand-50/60 rounded-t-xl">VeriKos (Kami)</th>
                    <th className="py-3 px-4 text-slate-500">Platform Kos Biasa</th>
                    <th className="py-3 px-4 text-slate-500">Grup FB / Media Sosial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold">Survei Fisik Lapangan Lapangan</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-brand-50/40">✓ Diaudit Surveyor Resmi</td>
                    <td className="py-3.5 px-4 text-slate-500">Hanya sebagian / Foto kiriman</td>
                    <td className="py-3.5 px-4 text-red-500">✗ Tidak ada survei (Rawan scam)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold">Potongan Komisi Uang Sewa</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-brand-50/40">0% (Sistem Langganan Flat)</td>
                    <td className="py-3.5 px-4 text-red-500">5% - 15% dipotong per bulan</td>
                    <td className="py-3.5 px-4 text-slate-500">Tergantung calo liar</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold">Kontak Pemilik Asli</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-brand-50/40">✓ Direct WhatsApp Terverifikasi</td>
                    <td className="py-3.5 px-4 text-slate-500">Nomor disembunyikan / Chat in-app</td>
                    <td className="py-3.5 px-4 text-slate-500">Banyak nomor calo perantara</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold">Biaya Tambahan Mahasiswa</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700 bg-brand-50/40">Rp 0 (100% Gratis)</td>
                    <td className="py-3.5 px-4 text-slate-500">Biaya admin booking Rp 15rb-25rb</td>
                    <td className="py-3.5 px-4 text-red-500">Rawan uang DP hangus tertipu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
