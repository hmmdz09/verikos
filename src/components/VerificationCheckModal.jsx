import React, { useState } from 'react';
import { 
  X, 
  Search, 
  FileCheck2, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Building, 
  UserCheck, 
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';
import { verificationCertificates } from '../data/kosData';

export default function VerificationCheckModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState(verificationCertificates[0]);

  if (!isOpen) return null;

  const filteredCerts = verificationCertificates.filter(cert => 
    cert.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in">
      
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in zoom-in-95 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-xs">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Pusat Validasi Sertifikat Digital VeriKos
              </h3>
              <p className="text-xs text-slate-500">
                Verifikasi keaslian kos terdaftar di sekitar UPI Bandung
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Search Certificate Bar */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
              Masukkan Nomor Kode Sertifikat atau Nama Kos:
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cth: VK-UPI-2026-0042 atau Pondok Amanah..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium"
              />
            </div>
          </div>

          {/* Quick Click Samples */}
          <div>
            <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">Sampel Sertifikat Aktif Terverifikasi:</span>
            <div className="flex flex-wrap gap-1.5">
              {verificationCertificates.map((cert) => (
                <button
                  key={cert.code}
                  onClick={() => {
                    setSelectedCert(cert);
                    setSearchQuery(cert.code);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-colors ${
                    selectedCert?.code === cert.code
                      ? 'bg-brand-500 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cert.code}
                </button>
              ))}
            </div>
          </div>

          {/* Certificate Card Display */}
          {selectedCert ? (
            <div className="bg-gradient-to-br from-brand-50/60 via-white to-emerald-50/40 rounded-3xl p-6 border-2 border-brand-300/80 shadow-md relative overflow-hidden">
              
              {/* Watermark Seal */}
              <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-brand-500/5 rounded-full flex items-center justify-center pointer-events-none">
                <Award className="w-32 h-32 text-brand-500/10" />
              </div>

              <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-200/80">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-extrabold shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>STATUS: {selectedCert.status}</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mt-2">
                    {selectedCert.name}
                  </h4>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {selectedCert.area}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">KODE SERTIFIKAT</span>
                  <span className="text-xs font-mono font-black text-brand-700 bg-white px-2.5 py-1 rounded-lg border border-brand-200 inline-block shadow-2xs">
                    {selectedCert.code}
                  </span>
                </div>
              </div>

              {/* Certificate Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 block text-[10px] font-semibold uppercase">Nama Pemilik Resmi</span>
                  <span className="font-bold text-slate-800 text-sm">{selectedCert.owner}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 block text-[10px] font-semibold uppercase">Skor Audit Fisik</span>
                  <span className="font-extrabold text-emerald-600 text-sm">{selectedCert.score}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 block text-[10px] font-semibold uppercase">Tanggal Survei Lapangan</span>
                  <span className="font-bold text-slate-800">{selectedCert.auditDate}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 block text-[10px] font-semibold uppercase">Surveyor Bertugas</span>
                  <span className="font-bold text-slate-800">{selectedCert.surveyor}</span>
                </div>
              </div>

              <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200 text-xs text-emerald-800">
                <strong>Catatan Surveyor:</strong> {selectedCert.notes}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>Diterbitkan oleh Divisi Verifikasi Lapangan VeriKos Bandung</span>
                <span className="font-bold text-brand-600">Terdaftar Resmi 2026</span>
              </div>

            </div>
          ) : (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-slate-500 text-xs">
              Tidak ditemukan data sertifikat untuk pencarian ini. Pastikan Anda memasukkan kode verifikasi yang tertera di kartu profil kos.
            </div>
          )}

          {/* Anti Fraud Reminder */}
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Peringatan Anti-Penipuan Mahasiswa:</strong>
              Jangan pernah mentransfer uang muka (DP) ke nomor rekening yang namanya berbeda dengan nama pemilik yang terdaftar di sertifikat ini.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
