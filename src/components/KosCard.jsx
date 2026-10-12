import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  MessageCircle, 
  Wifi, 
  Bed, 
  Bath, 
  ShieldCheck, 
  Star, 
  Heart, 
  Eye, 
  Calendar, 
  Check, 
  User, 
  ExternalLink 
} from 'lucide-react';

export default function KosCard({ 
  kos, 
  onSelectDetail, 
  onWhatsAppClick, 
  isBookmarked, 
  onToggleBookmark 
}) {
  const getGenderBadge = (type) => {
    switch (type) {
      case 'Putri':
        return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'Putra':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Campur':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-brand-300 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between">
      
      {/* Image & Top Badges Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={kos.images[0]}
          alt={kos.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Dark Gradient Overlay for Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/95 ${getGenderBadge(kos.type)}`}>
              {kos.type}
            </span>
            {kos.remainingRooms <= 2 && (
              <span className="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-red-500/90 text-white shadow-sm backdrop-blur">
                Sisa {kos.remainingRooms} Kamar!
              </span>
            )}
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(kos.id);
            }}
            className="p-2 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-red-500 shadow-md transition-all active:scale-90"
            title={isBookmarked ? 'Hapus dari simpanan' : 'Simpan kos'}
          >
            <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>

        {/* Prominent Blue Verified Pill on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600/95 backdrop-blur-md text-white text-[11px] font-bold shadow-md border border-brand-400/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            <span>Terbukti Amanah • Audit {kos.auditDate}</span>
          </div>

          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-[11px] font-semibold">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>{kos.rating}</span>
            <span className="text-white/70">({kos.reviewCount})</span>
          </div>
        </div>

      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Distance & Area Badge */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 mb-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-brand-500" />
            <span className="truncate">{kos.distance}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 text-[11px] font-normal">{kos.distanceMinutes}</span>
          </div>

          {/* Kos Title */}
          <h3 
            onClick={() => onSelectDetail(kos)}
            className="text-base font-bold text-slate-900 group-hover:text-brand-600 cursor-pointer transition-colors line-clamp-1 mb-1"
          >
            {kos.title}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-1 mb-3">
            {kos.address}
          </p>

          {/* Facility Chips (Max 3-4 visible) */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {kos.facilities.slice(0, 4).map((facility, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[11px] rounded-lg font-medium"
              >
                {facility}
              </span>
            ))}
            {kos.facilities.length > 4 && (
              <span className="px-1.5 py-0.5 text-slate-400 text-[11px] font-medium">
                +{kos.facilities.length - 4} lagi
              </span>
            )}
          </div>
        </div>

        {/* Pricing & Action Buttons */}
        <div className="pt-3 border-t border-slate-100">
          
          {/* Price Header */}
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-extrabold text-slate-900">{kos.priceFormatted}</span>
                <span className="text-xs font-medium text-slate-500">/ bulan</span>
              </div>
              <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-500" />
                <span>Tanpa Biaya Admin • 0% Komisi</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block">Pemilik Resmi:</span>
              <span className="text-xs font-semibold text-slate-700 block truncate max-w-[110px]">{kos.ownerName}</span>
            </div>
          </div>

          {/* Action Buttons: Detail & WhatsApp */}
          <div className="grid grid-cols-12 gap-2">
            <button
              type="button"
              onClick={() => onSelectDetail(kos)}
              className="col-span-5 py-2.5 px-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-colors flex items-center justify-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Detail Kos</span>
            </button>

            <button
              type="button"
              onClick={() => onWhatsAppClick(kos)}
              className="col-span-7 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 group/wa"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600 group-hover/wa:scale-110 transition-transform" />
              <span>Chat WhatsApp</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
