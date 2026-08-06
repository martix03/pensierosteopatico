import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'chi-sono', label: 'Chi Sono' },
    { id: 'trattamenti', label: 'Trattamenti' },
    { id: 'contatti', label: 'Sedi e Contatti' },
    { id: 'blog', label: 'Blog & News' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant shadow-sm h-20">
      <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto h-full">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 font-headline-sm text-headline-sm text-primary font-extrabold tracking-tight hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
          <span>Pensierosteopatico</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-body-md text-body-md transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold hover:brightness-90 active:scale-95 transition-all shadow-md flex items-center gap-2"
          >
            <span>Prenota Visita</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant px-gutter py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 text-lg font-medium transition-colors ${
                  activePage === item.id
                    ? 'text-primary font-bold pl-2 border-l-4 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-outline-variant flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold shadow-md text-center"
              >
                Prenota un Appuntamento
              </button>
              <a
                href="tel:+390212345678"
                className="w-full border-2 border-secondary text-secondary py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                <span>Chiama Ora (+39 02 12345678)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
