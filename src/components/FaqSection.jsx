import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Receipt, Stethoscope, Clock, ShieldCheck } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Le prestazioni osteopatiche sono detraibili ai fini fiscali?",
      a: "Sì. Le ricevute fiscali/fatture sanitarie emesse dal professionista iscritto all'Elenco Speciale ad esaurimento / Albo dell'Ordine TSRM e PSTRP rientrano tra le spese sanitarie detraibili nella misura del 19% ai sensi del TUIR, a condizione che il pagamento avvenga mediante tracciabilità elettronica (bancomat, carta di credito o bonifico).",
      icon: Receipt
    },
    {
      q: "Occorre una prescrizione o impegnativa del medico di base?",
      a: "No, la prescrizione medica non è strettamente obbligatoria per accedere alla prima visita osteopatica. Tuttavia, durante l'anamnesi iniziale verranno esaminati eventuali referti medici (radiografie, risonanze magnetiche, ecografie) ed, in presenza di segnali d'allarme ('red flags'), il professionista invierà il paziente dal medico specialista competente.",
      icon: Stethoscope
    },
    {
      q: "Quanto dura la prima visita e come si svolge?",
      a: "La prima visita dura circa 60 minuti ed include: colloquio anamnestico iniziale, esame obiettivo muscolo-scheletrico con test ortopedici e funzionali, ed il primo trattamento manuale mirato. Le sedute successive di controllo ed approfondimento hanno solitamente una durata di 45 minuti.",
      icon: Clock
    },
    {
      q: "Come bisogna vestirsi per la seduta?",
      a: "Si consiglia un abbigliamento comodo e confortevole (tuta da ginnastica, pantaloni morbidi o leggings). Durante la fase di valutazione e trattamento, potrebbe essere richiesto di rimanere in intimo per permettere l'osservazione e l'ispezione della postura e della colonna vertebrale.",
      icon: ShieldCheck
    },
    {
      q: "L'osteopatia è dolorosa o comporta manovre brusche?",
      a: "L'approccio dell'osteopatia clinica si avvale di tecniche manuali dolci, non invasive ed adeguate alla sensibilità ed alle condizioni specifiche del singolo paziente. Ogni manovra viene eseguita nel rispetto della soglia del dolore del paziente e previa spiegazione.",
      icon: HelpCircle
    }
  ];

  const toggleFaq = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-12 space-y-2">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
            Risposte ai Dubbi più Comuni
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface">Domande Frequenti (FAQ)</h2>
          <p className="text-on-surface-variant text-sm max-w-xl mx-auto">
            Informazioni trasparenti su detraibilità fiscale, modalità di svolgimento e preparazione alla visita.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-surface rounded-2xl border border-outline-variant overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-surface-container-low/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary-fixed/40 text-primary flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <span className="font-bold text-on-surface text-base md:text-lg">{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-on-surface-variant transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/40 animate-fadeIn">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
