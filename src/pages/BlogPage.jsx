import React, { useState } from 'react';
import { Calendar, User, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

export default function BlogPage({ onOpenBooking }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'Smart Working e Cervicalgia: 5 Consigli per Proteggere il Collo',
      category: 'Prevenzione & Ergonomia',
      date: '28 Luglio 2026',
      readTime: '4 min lettura',
      excerpt: 'Lavorare molte ore al computer con posizioni non idonee è una delle cause primarie di tensione alla colonna cervicale. Ecco come disporre lo schermo ed eseguire micro-pause defaticanti.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8AUTE24JEAsK6edk2K1-O6GRHQSucU98ySwyFu-8Ond-_Sx96oRJy6lxKJFjkAqdHNEGlfV3U9ohCG4ZNem1ymW995XJUkSY_27WBDn7kF7wbJVVVkgDnA0T6e5hkC1gS6xSxQyG24VkoU-3u3S7fDxbRM5nQf4LjPYAo_P1xM83lnLg9UXFW1l8Tj6ZMmjVJbjqWPomQySd9qW2drB7TFYcNZe5hrbtrnmVU6VOFah2SfTXRd4htiA',
      content: `La postura da videoterminalista impone una flessione anteriore prolungata del capo. Per ogni centimetro di avanzamento della testa rispetto al baricentro delle spalle, il carico effettivo percepito dai muscoli estensori del collo aumenta fino a 4 volte.

Ecco 5 regole fondamentali per prevenire la rigidità:
1. Posiziona il bordo superiore dello schermo all'altezza dei tuoi occhi.
2. Mantieni i gomiti appoggiati a 90 gradi durante la digitazione.
3. Effettua una micro-pausa di 2 minuti ogni 50 minuti di lavoro continuativo.
4. Esegui leggeri movimenti di retropulsione del mento per sbloccare la cerniera cervico-dorsale.
5. Inserisci una camminata quotidiana di almeno 20 minuti per stimolare la circolazione generale.`
    },
    {
      id: 2,
      title: 'Lombalgia da Sedentario: Quando la Prevenzione Fa la Differenza',
      category: 'Salute della Schiena',
      date: '15 Luglio 2026',
      readTime: '5 min lettura',
      excerpt: 'Il dolore alla zona lombare non deriva sempre da traumi improvvisi. Più frequentemente è l\'esito di una perdita di mobilità delle anche e di un indebolimento del corsetto addominale.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhNqVbVTkFe3U0NKklLdBA_nD9bHUzesRRGNspQSYflZxBkgzBHG_4_befe99V4mrhllFhc7S-Wk7nEoeEqjB5lzlMpiwQj3cOIw0zjLmQbh5ovGhTXJX2p4cs1Z2fvQl--baMr_H4fvQGil0_EtXKUW_lGXw-igjQxB1C1Z78LM1FkiWi6f0lAnuEijsKjCCxwrOA02v70BO3pnN2zNcY5tHYZ7wpAAqAM94QL0LKnTEn93sW1NSJ1A',
      content: `Restare seduti a lungo disattiva gradualmente i muscoli glutei ed accorcia i muscoli flessori dell'anca (psoas). Questa combinazione altera la normale lordosi lombare facendola sovraccaricare durante i movimenti di flessione.

Attraverso l'approccio osteopatico, si valuta sia la mobilità del bacino che l'elasticità del diaframma respiratorio, elemento chiave per la gestione delle pressioni endo-addominali.`
    },
    {
      id: 3,
      title: 'Cefalea Muscolo-Tensiva: Il Ruolo della Respirazione e della Terapia Manuale',
      category: 'Approfondimento Clinico',
      date: '02 Luglio 2026',
      readTime: '6 min lettura',
      excerpt: 'La sensazione di "cerchio alla testa" può trarre beneficio da tecniche indirizzate alle membrane cranio-sacrali ed ai muscoli respiratori accessori.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsmEuwyXj9stNKbLp92zhmQrIaO8dndGPsd1u87WyFukg9_dmkcT2gAhm1vWNPqxN_7gClKnmGaWFbQSsrlUIaBCXFU0P3thIqOxoXTvCk1kve3SHFBrkT14CMjPLBb_Sx-Gyy5xb2SIVrmgIbGtvzpaGluMPl8qCwk8P4TX_SbHEDdQRpC9flsePrRGFbJwV0ACIMuOtD2s_f0Dgtri73AsYyWp0JLxYefSKv8NZI3Bpi8ArRsTRUAA',
      content: `Le tensioni accumulate a livello delle prime vertebre cervicali (Atlante ed Epistrofeo) possono riflettersi sulle fasce craniche dando origine a cefalee episodiche o ricorrenti. L'integrazione di esercizi respiratori diaframmatici supporta il rilassamento del tono simpatico e migliora la tolleranza allo stress quotidiano.`
    }
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Header */}
      <section className="bg-surface-bright py-section-padding-mobile md:py-section-padding-desktop border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-2xl space-y-4">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block font-bold">
              Divulgazione & Consigli Pratici
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              Blog & Notizie Osteopatiche
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Articoli informativi dedicati alla prevenzione posturale, alla gestione dell'ergonomia quotidiana ed alla salute del sistema muscolo-scheletrico.
            </p>
          </div>
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="py-section-padding-desktop bg-surface max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm lift-hover flex flex-col justify-between"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-surface-container">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-outline font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{art.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-on-surface-variant text-sm line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-outline-variant/40 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  <span>Leggi Articolo</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Selected Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface max-w-2xl w-full max-h-[85vh] rounded-2xl shadow-2xl border border-outline-variant flex flex-col overflow-hidden">
            <div className="p-6 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
              <div>
                <span className="text-xs font-bold uppercase text-primary tracking-wider">{selectedArticle.category}</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">{selectedArticle.title}</h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container"
              >
                ✕
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-on-surface-variant text-sm leading-relaxed">
              <div className="aspect-video rounded-xl overflow-hidden shadow">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center gap-4 text-xs text-outline font-semibold pb-3 border-b border-outline-variant/60">
                <span className="flex items-center gap-1">
                  <User size={14} />
                  <span>Dr. Nome Cognome</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{selectedArticle.date}</span>
                </span>
              </div>

              <div className="whitespace-pre-line text-on-surface leading-relaxed">
                {selectedArticle.content}
              </div>

              {/* End of article CTA */}
              <div className="mt-8 bg-secondary text-white p-6 rounded-2xl space-y-4 text-center">
                <h4 className="font-bold text-base">Desideri una valutazione personalizzata della tua postura?</h4>
                <p className="text-xs text-secondary-fixed opacity-90">
                  Ogni persona presenta caratteristiche biomeccaniche uniche. Prenota una visita in studio per definire il piano terapeutico più idoneo.
                </p>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenBooking();
                  }}
                  className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 shadow transition-all inline-flex items-center gap-2"
                >
                  <CheckCircle2 size={18} />
                  <span>Prenota un Appuntamento in Studio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
