import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface max-w-3xl w-full max-h-[85vh] rounded-2xl shadow-2xl border border-outline-variant flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant bg-surface-container-low">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-primary" size={26} />
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Informativa Privacy & Note Legali Sanitari
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-on-surface-variant text-sm leading-relaxed">
          <div className="bg-primary-fixed/30 p-4 rounded-xl border border-primary-container text-on-primary-container font-medium text-xs">
            Informativa resa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR) e delle direttive dell'Ordine TSRM e PSTRP in materia di comunicazione e pubblicità sanitaria.
          </div>

          <section className="space-y-2">
            <h3 className="font-bold text-base text-on-surface">1. Titolare del Trattamento</h3>
            <p>
              Il Titolare del trattamento dei dati è il <strong>Dr. Nome Cognome</strong>, Osteopata iscritto all'Ordine TSRM e PSTRP della Provincia di Milano (n. iscrizione 123).<br />
              Sede dello studio: Via Alessandro Volta 12, 20121 Milano (MI).<br />
              Contatto PEC: studio@legalmail.it &bull; Email: info@pensierosteopatico.it
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-base text-on-surface">2. Tipologia di Dati Trattati e Minimizzazione Sanitaria</h3>
            <p>
              In ottemperanza al principio di minimizzazione dei dati (art. 5 GDPR), i moduli di contatto presenti sul sito richiedono unicamente:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nome e Cognome</li>
              <li>Indirizzo di posta elettronica</li>
              <li>Recapito telefonico</li>
            </ul>
            <p className="italic text-xs bg-surface-container-low p-3 rounded border border-outline-variant">
              <strong>Nota di Tutela Sanitaria:</strong> I moduli di contatto NON contengono campi di testo libero relativi a sintomi, patologie o anamnesi medica, per evitare la trasmissione non protetta di dati relativi alla salute prima dell'inquadramento clinico in sede di visita.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-base text-on-surface">3. Finalità e Base Giuridica del Trattamento</h3>
            <p>
              I dati forniti verranno utilizzati esclusivamente per dare riscontro alle richieste di informazioni ed alla pianificazione degli appuntamenti dello studio. La base giuridica è il consenso dell'interessato (art. 6 par. 1 lett. a GDPR).
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-base text-on-surface">4. Trasparenza della Comunicazione Sanitaria</h3>
            <p>
              Le informazioni contenute nel presente sito sono improntate alla massima trasparenza, correttezza e prudenza scientifica, nel rispetto della Legge 145/2018 e del Codice Deontologico. Non vengono promossi sconti, pacchetti promozionali, sedute gratuite o messaggi che generino illusorie aspettative di guarigione.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-base text-on-surface">5. Diritti dell'Interessato</h3>
            <p>
              L'utente ha diritto di accedere, rettificare o cancellare i propri dati personalizzati in qualsiasi momento inviando una comunicazione a <strong>info@pensierosteopatico.it</strong>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-low flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:brightness-90 transition-all"
          >
            Ho Compreso
          </button>
        </div>
      </div>
    </div>
  );
}
