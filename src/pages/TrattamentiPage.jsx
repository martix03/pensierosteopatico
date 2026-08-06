import React, { useState } from 'react';
import { Clock, HelpCircle, CheckCircle2, ArrowRight, ShieldAlert, X } from 'lucide-react';

export default function TrattamentiPage({ onOpenBooking }) {
  const [selectedCondition, setSelectedCondition] = useState(null);

  const treatments = [
    {
      id: 'cervicalgia',
      title: 'Cervicalgia e Tensioni del Collo',
      duration: '45-60 MIN',
      icon: 'panorama_horizontal',
      shortDesc: 'Risoluzione di tensioni muscolari al collo, rigidità articolare e limitazioni di rotazione del capo.',
      fullDesc: 'La cervicalgia è uno dei disturbi muscolo-scheletrici più frequenti, spesso correlata a posture prolungate al computer, stress o sovraccarichi posturali. Il trattamento osteopatico combina tecniche di rilascio miofasciale, mobilità articolare dolce ed allungamento delle catene muscolari per restituire naturale flessibilità.'
    },
    {
      id: 'lombalgia',
      title: 'Lombalgia e Sciatalgia',
      duration: '45-60 MIN',
      icon: 'back_hand',
      shortDesc: 'Approccio integrato per il dolore alla schiena, tensioni lombari e decompressione delle strutture nervose.',
      fullDesc: 'Il trattamento del dolore lombare mira a ripristinare il corretto allineamento del bacino, liberare le restrizioni della colonna ed ottimizzare la trasmissione dei carichi corporali. Vengono impiegate manovre manuali non invasive per decongestionare le zone tese e stimolare la stabilità dell\'area core.'
    },
    {
      id: 'cefalee',
      title: 'Cefalee Muscolo-tensive',
      duration: '45-60 MIN',
      icon: 'psychology',
      shortDesc: 'Tecniche cranio-sacrali e decontratturanti per la riduzione delle tensioni tra collo, spalle e cuoio capelluto.',
      fullDesc: 'Molte forme di mal di testa hanno origine da contratture persistenti dei muscoli sotto-occipitali ed erettori del collo. L\'intervento osteopatico lavora sul bilanciamento delle membrane, sul drenaggio venoso-linfatico del distretto cervicale ed alievia i punti di innesco del dolore (trigger point).'
    },
    {
      id: 'postura',
      title: 'Disturbi e Squilibri Posturali',
      duration: '60 MIN',
      icon: 'accessibility_new',
      shortDesc: 'Analisi biomeccanica globale e rieducazione alla mobilità per prevenire compensi ripetitivi.',
      fullDesc: 'La postura è la risposta dinamica del corpo alla forza di gravità. Attraverso specifici test di mobilità propriocettiva e funzionale, si individuano le asimmetrie e si impostano sedute volte al riequilibrio della catena cinematica durante le attività lavorative o sportive.'
    }
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative pt-section-padding-desktop pb-section-padding-desktop overflow-hidden bg-surface-bright border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block font-bold">
              Ambito d'Intervento Clinico
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-secondary">
              Trattamenti e Metodo Operativo
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              L'osteopatia è una disciplina terapeutica basata sull'approccio manuale al corpo. Attraverso <strong>tecniche specifiche</strong>, agiamo sulle restrizioni di mobilità per ripristinare l'equilibrio fisiologico naturale, stimolando la capacità di autoregolazione dell'organismo in totale sicurezza.
            </p>
          </div>
        </div>
      </section>

      {/* Visita Process Bento (3 Passaggi) */}
      <section className="bg-surface-container-low py-section-padding-desktop border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md text-secondary">Come si Svolge la Visita</h2>
            <p className="text-on-surface-variant text-sm mt-2 max-w-xl mx-auto">
              Un percorso strutturato in tre fasi essenziali per garantire la massima accuratezza clinica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-2xl border border-outline-variant shadow-sm space-y-4 lift-effect">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">assignment</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-secondary">1. Anamnesi</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Colloquio iniziale ed analisi della documentazione clinica pregressa. Si esaminano lo stile di vita, la storia dei traumi ed il contesto di insorgenza del disturbo.
              </p>
            </div>

            <div className="bg-surface p-8 rounded-2xl border border-outline-variant shadow-sm space-y-4 lift-effect">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-3xl font-bold">analytics</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-secondary">2. Valutazione</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Esecuzione di test ortopedici, neurologici ed osteopatici di mobilità per escludere controindicazioni ed individuare le disfunzioni primarie.
              </p>
            </div>

            <div className="bg-surface p-8 rounded-2xl border border-outline-variant shadow-sm space-y-4 lift-effect">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">back_hand</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-secondary">3. Trattamento</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Manovre manuali personalizzate volte al rilascio delle rigidità muscolo-scheletriche ed al miglioramento dell'ampiezza di movimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-section-padding-desktop bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
              Schede Informative
            </span>
            <h2 className="font-headline-md text-headline-md text-secondary mt-2">Disturbi Trattati</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((t) => (
              <div
                key={t.id}
                className="bg-surface-container-lowest border-t-4 border-primary-container rounded-2xl p-8 lift-effect flex flex-col justify-between shadow-sm space-y-6"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-secondary text-5xl">{t.icon}</span>
                    <div className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full font-label-caps text-xs font-bold flex items-center gap-1">
                      <Clock size={14} />
                      <span>{t.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-secondary mb-3">{t.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{t.shortDesc}</p>
                </div>

                <div className="pt-4 border-t border-outline-variant/50 flex gap-3">
                  <button
                    onClick={() => setSelectedCondition(t)}
                    className="flex-1 py-3 px-4 border border-primary-container text-primary font-bold rounded-xl hover:bg-primary-container/20 transition-all text-sm flex items-center justify-center gap-1.5"
                  >
                    <HelpCircle size={16} />
                    <span>Scheda Dettagliata</span>
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="py-3 px-5 bg-primary text-on-primary font-bold rounded-xl hover:brightness-90 transition-all text-sm shadow"
                  >
                    Prenota
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deontological Disclaimer Banner */}
      <section className="py-12 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-surface p-6 rounded-2xl border border-outline-variant flex flex-col md:flex-row items-center gap-6 text-on-surface-variant text-xs">
            <div className="p-3 bg-secondary-container text-secondary rounded-xl flex-shrink-0">
              <ShieldAlert size={28} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-on-surface">Avviso di Convalidazione Deontologica ed Etica</h4>
              <p className="leading-relaxed">
                Le prestazioni osteopatiche hanno scopo preventivo ed integrativo del benessere muscolo-scheletrico. In caso di patologie organiche ed urgenze mediche, è fondamentale consultare il proprio medico curante o il Pronto Soccorso. Il sito non eroga diagnosi online né promuove trattamenti senza previa valutazione vis-à-vis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Detail Modal */}
      {selectedCondition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface max-w-xl w-full rounded-2xl shadow-2xl border border-outline-variant p-6 md:p-8 space-y-6 relative">
            <button
              onClick={() => setSelectedCondition(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">{selectedCondition.icon}</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-secondary">{selectedCondition.title}</h3>
                <span className="text-xs text-outline font-bold">Durata indicativa: {selectedCondition.duration}</span>
              </div>
            </div>

            <div className="space-y-3 text-on-surface-variant text-sm leading-relaxed">
              <h4 className="font-bold text-on-surface">Approccio Osteopatico Specifico</h4>
              <p>{selectedCondition.fullDesc}</p>
            </div>

            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/60 text-xs text-on-surface-variant space-y-1">
              <p className="font-bold text-on-surface">Pianificazione Visita</p>
              <p>Per confermare l'idoneità del trattamento viene effettuato un esame obiettivo in studio.</p>
            </div>

            <div className="flex gap-4 pt-2">
              <button
                onClick={() => {
                  setSelectedCondition(null);
                  onOpenBooking();
                }}
                className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold text-sm shadow hover:brightness-90 transition-all flex items-center justify-center gap-2"
              >
                <span>Richiedi Appuntamento in Studio</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
