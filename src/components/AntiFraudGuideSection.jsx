import React from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  PhoneCall, 
  UserX, 
  Lock, 
  Check, 
  HelpCircle,
  FileCheck2
} from 'lucide-react';

export default function AntiFraudGuideSection({ onOpenVerifyModal }) {
  const rules = [
    {
      num: '01',
      title: 'Waspadai Harga Terlalu Murah di Medsos',
      desc: 'Penipu sering mengunggah foto interior hotel mewah di grup Facebook UPI dengan harga Rp400.000/bln. Jika harga tak masuk akal di area Gegerkalong/Setiabudi, dipastikan itu sindikat fiktif.',
      tip: 'Harga wajar kos UPI: Rp650rb – Rp1.5jt/bln.'
    },
    {
      num: '02',
      title: 'Jangan Mau Ditakut-takuti "Kamar Rebutan"',
      desc: 'Modus klasik: penipu mengaku banyak peminat lain lalu memaksa mahasiswa transfer DP hari ini juga tanpa survei. Di VeriKos, pemilik asli selalu terbuka untuk survei fisik langsung.',
      tip: 'Jangan transfer sepeser pun sebelum identitas klop.'
    },
    {
      num: '03',
      title: 'Cek Kesesuaian Nama Rekening Bank',
      desc: 'Pastikan nama pemilik rekening transfer persis sama dengan nama di Laporan Audit VeriKos. Penipu kerap menggunakan rekening bodong atas nama orang lain atau virtual account e-wallet.',
      tip: 'Gunakan fitur Cek Status Verifikasi di VeriKos.'
    }
  ];

  return (
    <section className="py-16 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
            Edukasi Keamanan Mahasiswa Baru UPI
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            3 Aturan Emas Mahasiswa: Hindari Sindikat Kos Bodong
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Setiap tahun ajaran baru, puluhan mahasiswa baru UPI menjadi korban penipuan kos online. VeriKos hadir melindungi Anda dengan verifikasi fisik nyata.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {rules.map((rule, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-black text-brand-200 mb-2 font-mono">
                  {rule.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {rule.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {rule.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg block">
                  💡 {rule.tip}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action card */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-3xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4 shadow-lg shadow-brand-500/20">
          <div className="space-y-1">
            <h4 className="text-lg font-bold">Ragu dengan sebuah kos di sekitar kampus UPI?</h4>
            <p className="text-xs sm:text-sm text-brand-100 max-w-xl">
              Cek kode verifikasinya di database VeriKos atau laporkan nomor WhatsApp mencurigakan ke tim advokasi kami.
            </p>
          </div>
          <button
            onClick={onOpenVerifyModal}
            className="py-3 px-5 rounded-2xl font-bold text-xs sm:text-sm bg-white text-brand-700 hover:bg-brand-50 shadow transition-all flex items-center gap-2"
          >
            <FileCheck2 className="w-4 h-4 text-brand-600" />
            <span>Validasi Sertifikat Sekarang</span>
          </button>
        </div>

      </div>
    </section>
  );
}
