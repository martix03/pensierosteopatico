import React, { useState, useEffect } from 'react';

export default function CookieBanner({ onOpenPrivacy }) {
  const [consentGiven, setConsentGiven] = useState(true); // Default true for initial check
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('osteo_cookie_consent');
    if (!consent) {
      setConsentGiven(false);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('osteo_cookie_consent', JSON.stringify({ technical: true, analytics: true, date: new Date().toISOString() }));
    setConsentGiven(true);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('osteo_cookie_consent', JSON.stringify({ technical: true, analytics: false, date: new Date().toISOString() }));
    setConsentGiven(true);
  };

  const handleSaveCustom = () => {
    localStorage.setItem('osteo_cookie_consent', JSON.stringify({ technical: true, analytics: analyticsConsent, date: new Date().toISOString() }));
    setConsentGiven(true);
  };

  if (consentGiven) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-surface-container-highest/98 backdrop-blur-xl border-t-2 border-primary shadow-2xl animate-slideUp">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 font-bold text-on-surface text-lg">
            <span className="material-symbols-outlined text-primary">cookie</span>
            <span>Gestione Privacy e Cookie (GDPR Regolamento UE 2016/679)</span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-4xl">
            Questo sito utilizza cookie tecnici strettamente necessari al funzionamento ed eventuali cookie analitici anonimizzati per migliorare l'esperienza di navigazione. In conformità con la normativa sulla privacy sanitaria, i tracciamenti non essenziali sono <strong>preventivamente bloccati</strong> finché non presti il consenso.
          </p>
          {showSettings && (
            <div className="pt-3 border-t border-outline-variant/60 space-y-3">
              <div className="flex items-center justify-between bg-surface p-3 rounded-lg border border-outline-variant">
                <div>
                  <span className="font-bold text-sm text-on-surface block">Cookie Tecnici ed Essenziali</span>
                  <span className="text-xs text-on-surface-variant">Necessari per la sicurezza e la navigazione delle pagine.</span>
                </div>
                <span className="text-xs font-bold text-primary px-2 py-1 bg-primary-fixed rounded">Sempre Attivi</span>
              </div>
              <div className="flex items-center justify-between bg-surface p-3 rounded-lg border border-outline-variant">
                <div>
                  <span className="font-bold text-sm text-on-surface block">Cookie Analitici Anonimizzati</span>
                  <span className="text-xs text-on-surface-variant">Statistiche anonime sul traffico web senza profilazione utente.</span>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                  className="rounded text-primary focus:ring-primary h-5 w-5 border-outline-variant"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {!showSettings ? (
            <>
              <button
                onClick={handleAcceptAll}
                className="flex-1 md:flex-none bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:brightness-90 transition-all shadow"
              >
                Accetta Tutti
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="flex-1 md:flex-none bg-surface-container border border-outline-variant text-on-surface px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-surface-variant transition-all"
              >
                Solo Necessari
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="text-primary text-sm underline font-bold px-2 py-1"
              >
                Personalizza
              </button>
            </>
          ) : (
            <button
              onClick={handleSaveCustom}
              className="w-full md:w-auto bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:brightness-90 transition-all"
            >
              Salva Preferenze
            </button>
          )}
          <button
            onClick={onOpenPrivacy}
            className="text-xs text-on-surface-variant hover:text-primary underline"
          >
            Leggi Policy
          </button>
        </div>
      </div>
    </div>
  );
}
