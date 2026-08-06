import React from 'react';

export default function Footer({ onOpenPrivacy, onOpenCookie }) {
  return (
    <footer className="w-full pt-section-padding-desktop pb-20 md:pb-10 bg-surface-container-highest border-t border-outline-variant">
      <div className="flex flex-col items-center text-center px-gutter max-w-container-max mx-auto">
        <div className="font-headline-sm text-headline-sm text-primary mb-6 font-extrabold flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">medical_services</span>
          <span>Pensierosteopatico</span>
        </div>
        
        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          <button 
            onClick={onOpenPrivacy}
            className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors"
          >
            Privacy Policy (GDPR)
          </button>
          <button 
            onClick={onOpenCookie}
            className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors"
          >
            Cookie Policy
          </button>
          <button 
            onClick={onOpenPrivacy}
            className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors"
          >
            Note Legali & Deontologia
          </button>
          <a 
            href="#accessibilita" 
            onClick={(e) => { e.preventDefault(); alert("Sito sviluppato in conformità alle Linee Guida di Accessibilità Web WCAG 2.1 livello AA."); }}
            className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors"
          >
            Accessibilità WCAG 2.1
          </a>
        </nav>

        {/* Legal & Regulatory Compliance Block (Pubblicità Sanitaria & Ordine TSRM/PSTRP) */}
        <div className="w-full max-w-4xl pt-8 border-t border-outline-variant text-on-surface-variant opacity-90 text-sm leading-relaxed space-y-3">
          <p className="font-semibold text-on-surface">
            Studio di Osteopatia - Dr. Nome Cognome | Osteopata
          </p>
          <p>
            Domicilio Professionale: Via Alessandro Volta 12, 20121 Milano (MI) &bull; Tel: +39 02 12345678 &bull; Email: info@pensierosteopatico.it
          </p>
          <p className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/60 text-xs">
            <strong>Dati Obbligatori Pubblicità Sanitaria:</strong> P.IVA 12345678901 &bull; Iscritto all'Ordine TSRM e PSTRP della Provincia di Milano (n. iscrizione 123 nell'Elenco Speciale ad esaurimento) &bull; PEC: studio@legalmail.it &bull; Comunicazione informativa diffusa in conformità all'autodichiarazione di conformità trasmessa all'Ordine di appartenenza.
          </p>
          <p className="text-[11px] text-outline">
            &copy; {new Date().getFullYear()} Pensierosteopatico - Dr. Nome Cognome. Tutti i diritti riservati. Le informazioni fornite su questo sito hanno carattere puramente divulgativo e non sostituiscono il parere o la diagnosi medica.
          </p>
        </div>
      </div>
    </footer>
  );
}
