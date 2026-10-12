import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import KosCard from './components/KosCard';
import KosDetailModal from './components/KosDetailModal';
import MitraPricingSection from './components/MitraPricingSection';
import MitraRegistrationModal from './components/MitraRegistrationModal';
import VerificationCheckModal from './components/VerificationCheckModal';
import AntiFraudGuideSection from './components/AntiFraudGuideSection';
import BookmarksModal from './components/BookmarksModal';
import Footer from './components/Footer';
import Toast from './components/Toast';

import { kosListings, campusAreas } from './data/kosData';
import { 
  Building2, 
  Sparkles, 
  Filter, 
  RotateCcw, 
  CheckCircle2, 
  MapPin, 
  SlidersHorizontal,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');
  const [verifiedOnly, setVerifiedOnly] = useState(true);

  // Modals & UI State
  const [selectedKos, setSelectedKos] = useState(null);
  const [isMitraModalOpen, setIsMitraModalOpen] = useState(false);
  const [mitraModalPlan, setMitraModalPlan] = useState('veripro');
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isBookmarksModalOpen, setIsBookmarksModalOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState(['kost-pondok-amanah']);
  const [toastMessage, setToastMessage] = useState(null);

  // Filter Computation
  const filteredListings = useMemo(() => {
    return kosListings.filter((kos) => {
      // Verified only
      if (verifiedOnly && !kos.verified) return false;

      // Gender filter
      if (genderFilter !== 'all' && kos.type !== genderFilter) return false;

      // Area filter
      if (selectedArea !== 'all' && kos.area !== selectedArea) return false;

      // Price range
      if (priceRange === 'under-800' && kos.priceMonthly > 800000) return false;
      if (priceRange === '800-1200' && (kos.priceMonthly < 800000 || kos.priceMonthly > 1200000)) return false;
      if (priceRange === 'above-1200' && kos.priceMonthly <= 1200000) return false;

      // Search keyword
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchTitle = kos.title.toLowerCase().includes(query);
        const matchAddress = kos.address.toLowerCase().includes(query);
        const matchDistance = kos.distance.toLowerCase().includes(query);
        const matchFacilities = kos.facilities.some(f => f.toLowerCase().includes(query));
        const matchArea = kos.areaLabel.toLowerCase().includes(query);
        if (!matchTitle && !matchAddress && !matchDistance && !matchFacilities && !matchArea) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, genderFilter, priceRange, selectedArea, verifiedOnly]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleBookmark = (kosId) => {
    if (bookmarkedIds.includes(kosId)) {
      setBookmarkedIds(bookmarkedIds.filter(id => id !== kosId));
      showToast('Kos dihapus dari daftar simpanan.');
    } else {
      setBookmarkedIds([...bookmarkedIds, kosId]);
      showToast('✓ Kos berhasil disimpan ke favorit!');
    }
  };

  const handleWhatsAppClick = (kos) => {
    const text = encodeURIComponent(
      `Halo Bu/Pak ${kos.ownerName}, saya menemukan kos Anda "${kos.title}" di VeriKos yang bercentang biru (${kos.auditReport.certificateNo}). Apakah kamar masih tersedia?`
    );
    const waUrl = `https://wa.me/${kos.ownerWa}?text=${text}`;
    window.open(waUrl, '_blank');
    showToast(`Membuka WhatsApp resmi pemilik (${kos.ownerName})...`);
  };

  const handleOpenMitraModal = (plan = 'veripro') => {
    setMitraModalPlan(plan);
    setIsMitraModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setGenderFilter('all');
    setPriceRange('all');
    setSelectedArea('all');
    setVerifiedOnly(true);
    showToast('Filter pencarian diatur ulang.');
  };

  const bookmarkedKosList = kosListings.filter(k => bookmarkedIds.includes(k.id));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      
      {/* Navbar */}
      <Navbar
        onOpenMitraModal={() => handleOpenMitraModal('veripro')}
        onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
        selectedArea={selectedArea}
        setSelectedArea={setSelectedArea}
        bookmarkCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksModalOpen(true)}
      />

      <main className="flex-1">
        
        {/* Hero Section with Interactive Filter */}
        <Hero
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          verifiedOnly={verifiedOnly}
          setVerifiedOnly={setVerifiedOnly}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          totalResults={filteredListings.length}
          onPerformSearch={() => {
            const el = document.getElementById('katalog-kos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3 Core Value Proposition Feature Cards */}
        <TrustBanner onOpenMitraModal={() => handleOpenMitraModal('veripro')} />

        {/* FEATURED LISTINGS GRID */}
        <section id="katalog-kos" className="py-16 bg-slate-50 border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Catalog Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  Listing Terverifikasi
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Kos Terverifikasi Amanah di Sekitar UPI Bandung
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Menampilkan <strong className="text-slate-800 font-bold">{filteredListings.length}</strong> dari {kosListings.length} kos berstatus aktif audit fisik
                </p>
              </div>

              {/* Active Filter Chips & Reset */}
              <div className="flex items-center gap-2 flex-wrap">
                {(genderFilter !== 'all' || priceRange !== 'all' || selectedArea !== 'all' || searchTerm !== '' || !verifiedOnly) && (
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                    <span>Reset Filter</span>
                  </button>
                )}
                
                <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Bebas Biaya Admin</span>
                </span>
              </div>
            </div>

            {/* Grid of Listings */}
            {filteredListings.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-300 max-w-xl mx-auto my-8">
                <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  Tidak Ada Kos yang Cocok
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  Coba ubah kata kunci pencarian, perluas radius fakultas UPI, atau atur ulang batasan budget Anda.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-500 hover:bg-brand-600 shadow-md"
                >
                  Tampilkan Semua Kos Terverifikasi
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredListings.map((kos) => (
                  <KosCard
                    key={kos.id}
                    kos={kos}
                    onSelectDetail={(k) => setSelectedKos(k)}
                    onWhatsAppClick={handleWhatsAppClick}
                    isBookmarked={bookmarkedIds.includes(kos.id)}
                    onToggleBookmark={handleToggleBookmark}
                  />
                ))}
              </div>
            )}

            {/* Bottom Guarantee Banner */}
            <div className="mt-14 bg-gradient-to-r from-brand-50 via-white to-emerald-50 rounded-3xl p-6 sm:p-8 border border-brand-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Jaminan Nol Penipuan (Zero Scam Guarantee)
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Jika Anda menemukan salah satu kos centang biru di VeriKos ternyata fiktif atau berpura-pura, laporkan dan dapatkan pendampingan hukum gratis dari tim kami.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVerifyModalOpen(true)}
                className="shrink-0 py-2.5 px-4 rounded-xl text-xs font-bold text-brand-700 bg-white border border-brand-200 hover:bg-brand-50 transition-colors shadow-xs"
              >
                Cek Validitas Sertifikat →
              </button>
            </div>

          </div>
        </section>

        {/* Dedicated Mitra Kos Subscription Section */}
        <MitraPricingSection onOpenMitraModal={handleOpenMitraModal} />

        {/* Anti-Fraud Guide Section */}
        <AntiFraudGuideSection onOpenVerifyModal={() => setIsVerifyModalOpen(true)} />

      </main>

      {/* Footer */}
      <Footer 
        onOpenMitraModal={() => handleOpenMitraModal('veripro')}
        onOpenVerifyModal={() => setIsVerifyModalOpen(true)}
      />

      {/* Modals */}
      {selectedKos && (
        <KosDetailModal
          kos={selectedKos}
          onClose={() => setSelectedKos(null)}
          onWhatsAppClick={handleWhatsAppClick}
          isBookmarked={bookmarkedIds.includes(selectedKos.id)}
          onToggleBookmark={handleToggleBookmark}
          onShowToast={showToast}
        />
      )}

      <MitraRegistrationModal
        isOpen={isMitraModalOpen}
        onClose={() => setIsMitraModalOpen(false)}
        defaultPlan={mitraModalPlan}
        onSuccess={(msg) => {
          showToast(msg);
        }}
      />

      <VerificationCheckModal
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
      />

      <BookmarksModal
        isOpen={isBookmarksModalOpen}
        onClose={() => setIsBookmarksModalOpen(false)}
        bookmarkedKosList={bookmarkedKosList}
        onRemoveBookmark={handleToggleBookmark}
        onSelectDetail={(k) => setSelectedKos(k)}
        onWhatsAppClick={handleWhatsAppClick}
      />

      {/* Toast Alert */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />

    </div>
  );
}
