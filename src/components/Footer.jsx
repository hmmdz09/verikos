import React from 'react';
import { 
  Home, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Heart, 
  ExternalLink,
  MessageCircle,
  FileCheck2
} from 'lucide-react';

export default function Footer({ onOpenMitraModal, onOpenVerifyModal }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-white/95 px-3 py-1.5 rounded-xl inline-flex items-center shadow-xs">
                <img
                  src="/verikos-logo-transparent.png"
                  alt="VeriKos"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Platform agregator kos terverifikasi di kawasan kampus perguruan tinggi Indonesia. Menjamin 100% bebas kos fiktif melalui audit surveyor fisik di lapangan dan 0% potongan komisi untuk pemilik kos.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Audited Field Survey System</span>
              </div>
            </div>
          </div>

          {/* Kampus Coverage */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Cakupan Wilayah Kampus
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2 text-white font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>UPI Bandung - Bumi Siliwangi (Utama)</span>
              </li>
              <li className="pl-3.5 text-slate-400">
                • Gegerkalong Girang & Hilir (FPMIPA / FIP)
              </li>
              <li className="pl-3.5 text-slate-400">
                • Isola & Sukasari (FPSD / FPIPS)
              </li>
              <li className="pl-3.5 text-slate-400">
                • Jl. Dr. Setiabudi & Ledeng (FPOK / FPBS)
              </li>
              <li className="flex items-center gap-2 pt-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                <span>Polban Ciwaruga (Tahap Ekspansi)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                <span>Unpas Setiabudi (Tahap Ekspansi)</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Menu Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#katalog-kos" className="hover:text-white transition-colors">
                  Katalog Kos Terverifikasi
                </a>
              </li>
              <li>
                <a href="#mengapa-verikos" className="hover:text-white transition-colors">
                  Mengapa VeriKos?
                </a>
              </li>
              <li>
                <a href="#paket-mitra" className="hover:text-white transition-colors">
                  Paket Langganan Pemilik
                </a>
              </li>
              <li>
                <button onClick={onOpenVerifyModal} className="hover:text-white transition-colors text-left">
                  Validasi Sertifikat Kos
                </button>
              </li>
              <li>
                <button onClick={onOpenMitraModal} className="text-brand-400 hover:text-brand-300 font-semibold text-left">
                  + Daftarkan Properti Anda
                </button>
              </li>
            </ul>
          </div>

          {/* Hotline & Security */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hotline Advokasi Mahasiswa
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Menemukan akun mencurigakan yang mengatasnamakan pemilik kos di sekitar UPI? Laporkan segera ke tim patroli kami:
            </p>
            <div className="space-y-2 text-xs">
              <a 
                href="https://wa.me/6282288206271?text=Halo%20Tim%20VeriKos,%20saya%20ingin%20melaporkan%20indikasi%20penipuan%20kos" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-emerald-400 font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Pengaduan: 0822-8820-6271</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-[11px] px-1">
                <Mail className="w-3.5 h-3.5" />
                <span>halo@verikos.id / upi-support@verikos.id</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <strong>VeriKos Indonesia</strong>. Seluruh Hak Cipta Dilindungi. Dibuat dengan bangga untuk sivitas akademika UPI Bandung.
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <a href="#" className="hover:text-slate-200">Panduan Privasi</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-200">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-200">Anti-Scam SLA</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
