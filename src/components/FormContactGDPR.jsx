import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function FormContactGDPR({ title = "Richiedi Appuntamento", onOpenPrivacy }) {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    privacyConsent: false,
    informedConsent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.cognome || !formData.email || !formData.telefono) {
      setErrorMsg('Tutti i campi di contatto sono obbligatori.');
      return;
    }
    if (!formData.privacyConsent) {
      setErrorMsg('È necessario acconsentire al trattamento dei dati personali (Privacy Policy).');
      return;
    }
    if (!formData.informedConsent) {
      setErrorMsg('È necessario confermare la presa visione dell\'informativa preliminare.');
      return;
    }

    // Simulate clean form submission and thank-you redirect state
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl border border-primary-container shadow-xl text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 bg-primary-fixed text-primary rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Richiesta Inviata con Successo!</h3>
        <p className="text-on-surface-variant text-body-md leading-relaxed">
          Grazie <strong>{formData.nome} {formData.cognome}</strong>. La tua richiesta di contatto è stata ricevuta. Lo studio provvederà a ricontattarti telefonicamente o via email entro 24 ore lavorative per confermare la disponibilità dell'appuntamento.
        </p>
        <div className="bg-surface-container-low p-4 rounded-xl text-xs text-outline space-y-1">
          <p className="font-bold text-on-surface">Minimizzazione Dati GDPR Rispettata</p>
          <p>Nessun dato relativo allo stato di salute è stato trasmesso online.</p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ nome: '', cognome: '', email: '', telefono: '', privacyConsent: false, informedConsent: false });
          }}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:brightness-90 transition-all"
        >
          Invia Nuova Richiesta
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-highest/50 p-8 md:p-10 rounded-3xl border border-outline-variant shadow-lg sticky top-28">
      <div className="mb-8">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">{title}</h2>
        <p className="text-on-surface-variant text-sm">
          Compila il modulo per essere ricontattato dallo studio per la prima visita od una consulenza.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-xl text-xs font-bold border border-error/30 flex items-center gap-2">
          <span className="material-symbols-outlined text-base">error</span>
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="font-label-caps text-on-surface-variant block text-xs uppercase tracking-wider font-bold">
              Nome *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Es. Mario"
              className="w-full px-4 py-3 bg-surface rounded-lg border border-outline-variant font-body-md form-focus-ring transition-all"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="font-label-caps text-on-surface-variant block text-xs uppercase tracking-wider font-bold">
              Cognome *
            </label>
            <input
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              placeholder="Es. Rossi"
              className="w-full px-4 py-3 bg-surface rounded-lg border border-outline-variant font-body-md form-focus-ring transition-all"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="font-label-caps text-on-surface-variant block text-xs uppercase tracking-wider font-bold">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="mario.rossi@email.it"
            className="w-full px-4 py-3 bg-surface rounded-lg border border-outline-variant font-body-md form-focus-ring transition-all"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="font-label-caps text-on-surface-variant block text-xs uppercase tracking-wider font-bold">
            Telefono *
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+39 000 0000000"
            className="w-full px-4 py-3 bg-surface rounded-lg border border-outline-variant font-body-md form-focus-ring transition-all"
            required
          />
        </div>

        {/* Checkboxes per Consenso GDPR */}
        <div className="space-y-3 pt-3 border-t border-outline-variant/40">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyConsent"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mt-1 rounded text-primary focus:ring-primary border-outline-variant h-4 w-4"
            />
            <label htmlFor="privacyConsent" className="text-xs text-on-surface-variant leading-tight cursor-pointer">
              Ho letto e compreso l'informativa sulla{' '}
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-primary underline font-bold"
              >
                Privacy Policy (GDPR)
              </button>{' '}
              e acconsento al trattamento dei miei dati di contatto per la pianificazione della visita.
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="informedConsent"
              name="informedConsent"
              checked={formData.informedConsent}
              onChange={handleChange}
              className="mt-1 rounded text-primary focus:ring-primary border-outline-variant h-4 w-4"
            />
            <label htmlFor="informedConsent" className="text-xs text-on-surface-variant leading-tight cursor-pointer">
              Dichiaro di aver preso visione delle informazioni relative alla procedura di valutazione osteopatica.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-[#3d5a4d] text-white py-4 rounded-xl font-headline-sm transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Send size={18} />
          <span>Invia Richiesta di Contatto</span>
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[10px] text-outline uppercase tracking-wider pt-2">
          <ShieldCheck size={14} className="text-primary" />
          <span>Minimizzazione Dati Sanitari (GDPR 2016/679)</span>
        </div>
      </form>
    </div>
  );
}
