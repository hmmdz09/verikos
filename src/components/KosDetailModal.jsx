import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  MessageCircle, 
  Star, 
  Heart, 
  Share2, 
  FileCheck2, 
  Clock, 
  Zap, 
  Droplets, 
  Users, 
  Sparkles, 
  Copy, 
  Check, 
  PhoneCall, 
  AlertTriangle 
} from 'lucide-react';

export default function KosDetailModal({ 
  kos, 
  onClose, 
  onWhatsAppClick, 
  isBookmarked, 
  onToggleBookmark,
  onShowToast
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    // Reset image index when modal opens with new kos
    setActiveImageIndex(0);
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [kos]);

  if (!kos) return null;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    onShowToast('Tautan info kos berhasil disalin ke clipboard!');
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in">
      
      {/* Modal Container */}
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 animate-in zoom-in-95 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/95 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
              {kos.type}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Terverifikasi Surveyor VeriKos</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(kos.id)}
              className="p-2 rounded-xl text-slate-500 hover:text-red-500 hover:bg-slate-100 transition-colors"
              title={isBookmarked ? 'Hapus Simpanan' : 'Simpan Kos'}
            >
              <Heart className={`w-5 h-5 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl text-slate-500 hover:text-brand-600 hover:bg-slate-100 transition-colors"
              title="Bagikan Tautan"
            >
              {copiedLink ? <Check className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-7">
          
          {/* Photo Gallery with Thumbnails */}
          <div>
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
              <img
                src={kos.images[activeImageIndex]}
                alt={kos.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
                Foto {activeImageIndex + 1} dari {kos.images.length}
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1">
              {kos.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-brand-500 scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title & Key Info */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {kos.title}
              </h2>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-brand-600">{kos.priceFormatted}</span>
                <span className="text-sm font-semibold text-slate-500">/ bulan</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
              <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
              <span>{kos.address}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-50 text-brand-700 text-xs font-bold">
              <span>{kos.distance}</span>
              <span>•</span>
              <span>{kos.distanceMinutes}</span>
            </div>
          </div>

          {/* HIGHLIGHT: Laporan Hasil Audit Tim VeriKos */}
          <div className="bg-gradient-to-br from-brand-50/90 via-slate-50 to-emerald-50/60 rounded-3xl p-5 sm:p-6 border-2 border-brand-200/80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-200/30 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-extrabold shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>HASIL AUDIT RESMI TIM VERIKOS</span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mt-2">
                  Laporan Inspeksi Lapangan & Integritas Dokumen
                </h3>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-[10px] text-slate-400 font-bold uppercase">No. Sertifikat Digital</div>
                <div className="text-xs font-mono font-bold text-brand-700 bg-white px-2 py-0.5 rounded border border-brand-200 inline-block">
                  {kos.auditReport.certificateNo}
                </div>
              </div>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              
              <div className="bg-white/90 p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Keaslian Lokasi: VALID</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {kos.auditReport.locationCheck}
                </p>
              </div>

              <div className="bg-white/90 p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>KTP & Buku Rekening: COCOK</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {kos.auditReport.identityCheck}
                </p>
              </div>

              <div className="bg-white/90 p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Kelayakan Sanitasi & Air: BAIK</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {kos.auditReport.sanitationCheck}
                </p>
              </div>

              <div className="bg-white/90 p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transparansi Biaya: RESMI</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {kos.auditReport.contractIntegrity}
                </p>
              </div>

            </div>

            {/* Surveyor Footnote */}
            <div className="pt-3 border-t border-brand-200/60 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-brand-600" />
                <span>Diaudit oleh: <strong className="text-slate-700">{kos.surveyorName}</strong> ({kos.surveyorId})</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Tanggal Audit: {kos.auditDate}
              </div>
            </div>
          </div>

          {/* Spesifikasi Kamar & Aturan Kos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Spesifikasi */}
            <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200">
              <h4 className="font-extrabold text-slate-900 text-sm mb-3.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-500" />
                Spesifikasi Teknis Kamar
              </h4>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Ukuran Kamar:</span>
                  <span className="font-bold text-slate-800">{kos.specs.roomSize}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Listrik:</span>
                  <span className="font-bold text-slate-800">{kos.specs.electricity}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Sumber Air:</span>
                  <span className="font-bold text-slate-800">{kos.specs.water}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-500 font-medium">Layanan Kebersihan:</span>
                  <span className="font-bold text-slate-800">{kos.specs.cleaning}</span>
                </div>
              </div>
            </div>

            {/* Aturan Kos */}
            <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200">
              <h4 className="font-extrabold text-slate-900 text-sm mb-3.5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-500" />
                Aturan & Ketertiban Kos
              </h4>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Jam Malam (Curfew):</span>
                  <span className="font-bold text-slate-800">{kos.specs.curfew}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Kebijakan Tamu:</span>
                  <span className="font-bold text-slate-800">{kos.specs.guestPolicy}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Ketersediaan Kamar:</span>
                  <span className="font-bold text-emerald-600">Sisa {kos.remainingRooms} Kamar Kosong</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-500 font-medium">Biaya Tambahan Calo:</span>
                  <span className="font-bold text-emerald-600">Rp 0 (Bebas Komisi)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Fasilitas Lengkap */}
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm mb-3">
              Fasilitas Terverifikasi di Lokasi ({kos.facilities.length})
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {kos.facilities.map((fac, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-100 rounded-xl text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profil Pemilik & Anti-Scam Notice */}
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">
                {kos.ownerName.charAt(0)}
              </div>
              <div>
                <div className="text-xs text-emerald-800 font-bold uppercase tracking-wider">Pemilik Kos Terdaftar</div>
                <div className="text-sm font-extrabold text-slate-900">{kos.ownerName}</div>
                <div className="text-[11px] text-slate-500">Nomor WhatsApp & Identitas KTP telah terverifikasi</div>
              </div>
            </div>
            <div className="text-xs bg-white px-3 py-1.5 rounded-xl border border-emerald-200 text-emerald-800 font-semibold">
              ✓ Garansi Tanpa Perantara
            </div>
          </div>

        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-10">
          <div>
            <div className="text-xs text-slate-500">Harga Sewa Bulanan</div>
            <div className="text-xl sm:text-2xl font-black text-slate-900">
              {kos.priceFormatted}
              <span className="text-xs text-emerald-600 font-semibold ml-2">✓ Bebas Biaya Admin</span>
            </div>
          </div>

          <button
            onClick={() => onWhatsAppClick(kos)}
            className="flex-1 sm:flex-initial py-3 px-6 rounded-2xl font-extrabold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span>Hubungi Pemilik via WhatsApp</span>
          </button>
        </div>

      </div>

    </div>
  );
}
