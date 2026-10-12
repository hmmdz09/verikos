import React from 'react';
import { 
  X, 
  Heart, 
  Trash2, 
  Eye, 
  MessageCircle, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export default function BookmarksModal({ 
  isOpen, 
  onClose, 
  bookmarkedKosList, 
  onRemoveBookmark, 
  onSelectDetail, 
  onWhatsAppClick 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in zoom-in-95 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <h3 className="text-base font-extrabold text-slate-900">
              Kos Impian Tersimpan ({bookmarkedKosList.length})
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {bookmarkedKosList.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-700 text-sm">Belum Ada Kos Tersimpan</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Klik ikon hati pada kartu kos mana pun di katalog untuk menyimpannya ke daftar perbandingan ini.
              </p>
            </div>
          ) : (
            bookmarkedKosList.map((kos) => (
              <div 
                key={kos.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 hover:border-brand-300 bg-white transition-all shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={kos.images[0]}
                    alt={kos.title}
                    className="w-20 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-brand-50 text-brand-700 rounded-full">
                        {kos.type}
                      </span>
                      <span className="text-xs font-extrabold text-brand-600">
                        {kos.priceFormatted}/bln
                      </span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm line-clamp-1">
                      {kos.title}
                    </h5>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin className="w-3 h-3 text-brand-500 shrink-0" />
                      <span className="truncate">{kos.distance}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectDetail(kos);
                    }}
                    className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat</span>
                  </button>
                  <button
                    onClick={() => onWhatsAppClick(kos)}
                    className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WA</span>
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(kos.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
