import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StickyMobileNav from './components/StickyMobileNav';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyModal from './components/PrivacyModal';
import FormContactGDPR from './components/FormContactGDPR';

import HomePage from './pages/HomePage';
import ChiSonoPage from './pages/ChiSonoPage';
import TrattamentiPage from './pages/TrattamentiPage';
import ContattiPage from './pages/ContattiPage';
import BlogPage from './pages/BlogPage';
import { X } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'chi-sono':
        return <ChiSonoPage setActivePage={setActivePage} onOpenBooking={() => setIsBookingOpen(true)} />;
      case 'trattamenti':
        return <TrattamentiPage onOpenBooking={() => setIsBookingOpen(true)} />;
      case 'contatti':
        return <ContattiPage onOpenPrivacy={() => setIsPrivacyOpen(true)} />;
      case 'blog':
        return <BlogPage onOpenBooking={() => setIsBookingOpen(true)} />;
      case 'home':
      default:
        return <HomePage setActivePage={setActivePage} onOpenBooking={() => setIsBookingOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Page Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer with Legal & Regulatory info */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenCookie={() => {
          // Reset cookie preference to re-show banner
          localStorage.removeItem('osteo_cookie_consent');
          window.location.reload();
        }}
      />

      {/* Sticky Bottom Nav Bar for Mobile */}
      <StickyMobileNav onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Cookie Consent Banner */}
      <CookieBanner onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Booking Overlay Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative">
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-2 rounded-full hover:bg-surface-container transition-colors z-10"
              aria-label="Chiudi"
            >
              <X size={24} />
            </button>
            <div className="p-2">
              <FormContactGDPR
                title="Prenota un Appuntamento"
                onOpenPrivacy={() => {
                  setIsBookingOpen(false);
                  setIsPrivacyOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
