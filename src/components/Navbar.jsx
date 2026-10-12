import React, { useState } from 'react';
import { 
  Home, 
  CheckCircle2, 
  MapPin, 
  Plus, 
  ShieldCheck, 
  Menu, 
  X, 
  Sparkles, 
  Heart, 
  FileCheck2,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { campusAreas } from '../data/kosData';

export default function Navbar({ 
  onOpenMitraModal, 
  onOpenVerifyModal, 
  selectedArea, 
  setSelectedArea, 
  bookmarkCount,
  onOpenBookmarks
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areaDropdownOpen, setAreaDropdownOpen] = useState(false);

  const currentAreaObj = campusAreas.find(a => a.id === selectedArea);
  const currentAreaName = currentAreaObj ? (selectedArea === 'all' ? 'Semua Area UPI' : currentAreaObj.name.split(' ')[0]) : 'Area UPI';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/70 transition-all">
      {/* Top Banner Notice: Sleek, Subtle, and Trustworthy */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wide border border-emerald-500/30">
              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              100% AUDIT FISIK
            </span>
            <span className="hidden sm:inline text-slate-300 font-medium text-[11px]">
              Kawasan Kampus UPI Bandung: Hunian disurvei langsung oleh surveyor resmi, bebas kos fiktif & 0% potongan sewa.
            </span>
          </div>

          <button 
            onClick={onOpenVerifyModal}
            className="flex items-center gap-1.5 font-semibold text-brand-300 hover:text-white text-[11px] whitespace-nowrap transition-colors ml-3 shrink-0"
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Cek Sertifikat Kos</span>
            <span className="text-brand-400">→</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo & Location Chip */}
          <div className="flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Official Brand Logo */}
            <a href="#" className="flex items-center group shrink-0">
              <img
                src="/verikos-logo-transparent.png"
                alt="VeriKos"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            {/* Compact Campus Selector Chip */}
            <div className="hidden sm:block relative">
              <button
                type="button"
                onClick={() => setAreaDropdownOpen(!areaDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200/70 border border-slate-200/80 text-xs font-semibold text-slate-700 transition-all hover:border-brand-300"
                title="Pilih radius area kampus UPI"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                <span className="truncate max-w-[120px] lg:max-w-[150px]">
                  UPI: {currentAreaName}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
              </button>

              {/* Dropdown Menu */}
              {areaDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <p className="text-xs font-bold text-slate-900">Pilih Radius Area Kampus UPI</p>
                    <p className="text-[11px] text-slate-500">Sesuaikan dengan fakultas tujuan Anda</p>
                  </div>
                  <div className="space-y-1 max-h-64 overflow-y-auto">
                    {campusAreas.map((area) => (
                      <button
                        key={area.id}
                        onClick={() => {
                          setSelectedArea(area.id);
                          setAreaDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs flex flex-col transition-colors ${
                          selectedArea === area.id 
                            ? 'bg-brand-50 text-brand-700 font-bold' 
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{area.name}</span>
                          {selectedArea === area.id && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 font-normal">{area.distance}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center: Desktop Navigation Links (With whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-600">
            <a 
              href="#katalog-kos" 
              className="hover:text-brand-600 transition-colors whitespace-nowrap"
            >
              Cari Kos
            </a>
            <a 
              href="#mengapa-verikos" 
              className="hover:text-brand-600 transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Mengapa VeriKos?</span>
              <span className="px-1.5 py-0.2 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-full">
                Aman
              </span>
            </a>
            <a 
              href="#paket-mitra" 
              className="hover:text-brand-600 transition-colors whitespace-nowrap"
            >
              Paket Mitra Pemilik
            </a>
            <button 
              onClick={onOpenVerifyModal}
              className="hover:text-brand-600 transition-colors whitespace-nowrap flex items-center gap-1.5 text-slate-600"
            >
              <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
              <span>Cek Status Verifikasi</span>
            </button>
          </nav>

          {/* Right: Bookmarks & Clean CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Bookmarks Counter */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50/50 transition-all"
              title="Kos Tersimpan"
            >
              <Heart className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${bookmarkCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {bookmarkCount}
                </span>
              )}
            </button>

            {/* Clean, Refined CTA Button */}
            <button
              onClick={onOpenMitraModal}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-500 hover:bg-brand-600 shadow-sm hover:shadow transition-all whitespace-nowrap transform active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Daftarkan Kos</span>
              <span className="hidden xl:inline text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-medium text-brand-50">
                Rp75rb/bln
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 lg:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              Pilih Area Sekitar Kampus UPI:
            </div>
            <select
              value={selectedArea}
              onChange={(e) => {
                setSelectedArea(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="w-full text-xs font-semibold bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {campusAreas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.name} ({area.distance})
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <a 
              href="#katalog-kos" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Cari Kos Terverifikasi</span>
              <span className="text-xs text-brand-500 font-bold">Lihat Semua →</span>
            </a>
            <a 
              href="#mengapa-verikos" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Mengapa VeriKos?</span>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">100% Audit</span>
            </a>
            <a 
              href="#paket-mitra" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Paket Mitra Pemilik</span>
              <span className="text-[10px] bg-brand-50 text-brand-700 border border-brand-200 px-2 py-0.5 rounded-full font-bold">0% Komisi</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerifyModal();
              }}
              className="p-2.5 rounded-xl hover:bg-slate-50 text-left flex items-center gap-2 text-brand-600 font-bold"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Cek Status Verifikasi Sertifikat</span>
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMitraModal();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-brand-500 hover:bg-brand-600 shadow-md shadow-brand-500/20 flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              + Daftarkan Kos (Mulai Rp75rb/bln)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
