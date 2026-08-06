import React from 'react';
import { School, Award, Activity, Heart, CheckCircle2, Mail, ArrowRight } from 'lucide-react';

export default function ChiSonoPage({ setActivePage, onOpenBooking }) {
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Hero Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block">
              Il Professionista
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              Passione Clinica per il Tuo Benessere.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Mi chiamo <strong>Alessia Caffio</strong>. La mia missione professionale è guidare ogni paziente verso il recupero dell'equilibrio e della funzione motoria, integrando il rigore della formazione accademica con un ascolto umano ed empatico.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-secondary text-white px-8 py-3.5 rounded-lg font-bold hover:brightness-95 transition-all flex items-center gap-2 shadow"
              >
                <Mail size={18} />
                <span>Richiedi Informazioni</span>
              </button>
              <button
                onClick={() => setActivePage('trattamenti')}
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-bold hover:bg-primary-container/20 transition-all"
              >
                Scopri i Trattamenti
              </button>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-surface">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDts8UHvRUWQzT99zp51ZbDUStFfd4tVmpDe6N2uslLB56wh4Uk6q1MDOymDolTs4BfP0B1eM7sOLiGtbHJoH3AYRxegcP-eMN8p2aHdXC7A34xe3LFI4NdvF7Y9__Pw8NvmhH-RFrFU6tt-jS2Zz91OGx9QY3m3pLkADh25O73z8yecCsHqJzZNpSeKN9UFHytOyPmKqSkCUjE5qigRKc6BB2uXV3nuZyM0OAsAKr0FwezeSSEIptJOw"
                alt="Dr.ssa Alessia Caffio ritratto professionale"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Trust Overlay Badge */}
            <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-xl shadow-lg border-l-4 border-primary hidden md:block">
              <p className="font-label-caps text-xs text-primary mb-1 uppercase font-bold">Iscrizione Ufficiale Ordine</p>
              <p className="font-body-md text-on-surface-variant font-bold text-sm">TSRM e PSTRP n. 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Background: Bento Grid */}
      <section className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Formazione e Specializzazioni</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
              Un percorso accademico continuo ed approfondito, dedicato alla comprensione della fisiologia e biomeccanica umana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento 1 */}
            <div className="bg-surface p-8 rounded-xl border-t-4 border-primary-container lift-hover col-span-1 md:col-span-2 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <School size={28} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Laurea in Farmacia e Titolo in Osteopatia</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Specializzazione accademica conseguita presso istituti accreditati con un percorso quinquennale a tempo pieno. Tesi di laurea sperimentale sulla valutazione biomeccanica e gestione delle disfunzioni della colonna vertebrale.
              </p>
            </div>

            {/* Bento 2 */}
            <div className="bg-surface p-8 rounded-xl border-t-4 border-primary-container lift-hover space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
                <Award size={28} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Master Posturale</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Perfezionamento in Riabilitazione Posturale Globale e analisi biomeccanica applicata alle attività lavorative e sportive.
              </p>
            </div>

            {/* Bento 3 */}
            <div className="bg-surface p-8 rounded-xl border-t-4 border-primary-container lift-hover space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
                <Activity size={28} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Tecniche Avanzate</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Certificazioni in approcci miofasciali, integrazione viscerale ed articolare per un supporto ad ampio raggio.
              </p>
            </div>

            {/* Bento 4 */}
            <div className="bg-surface p-8 rounded-xl border-t-4 border-primary-container lift-hover col-span-1 md:col-span-2 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <Heart size={28} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Tirocinio Clinico Integrato</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Oltre 1.500 ore di pratica clinica supervisionata e collaborazioni multidisciplinari con medici di medicina generale, ortopedici e fisiatri per garantire la massima sicurezza del paziente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-container opacity-10 rounded-full blur-3xl -z-10 transform scale-150"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8AUTE24JEAsK6edk2K1-O6GRHQSucU98ySwyFu-8Ond-_Sx96oRJy6lxKJFjkAqdHNEGlfV3U9ohCG4ZNem1ymW995XJUkSY_27WBDn7kF7wbJVVVkgDnA0T6e5hkC1gS6xSxQyG24VkoU-3u3S7fDxbRM5nQf4LjPYAo_P1xM83lnLg9UXFW1l8Tj6ZMmjVJbjqWPomQySd9qW2drB7TFYcNZe5hrbtrnmVU6VOFah2SfTXRd4htiA"
              alt="Dettaglio trattamento manuale osteopatico"
              className="w-full h-auto rounded-2xl shadow-xl border border-outline-variant"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-headline-md text-headline-md text-on-surface">La Mia Filosofia di Cura</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-headline-sm text-body-lg font-bold text-on-surface">Ascolto Attivo ed Empatia</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mt-1">
                    Ogni percorso inizia con un dialogo approfondito. Comprendere le tue abitudini ed il contesto di insorgenza del disturbo è fondamentale per impostare un piano mirato.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-headline-sm text-body-lg font-bold text-on-surface">Unità Corporea ed Integrazione</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mt-1">
                    Il corpo lavora come un unico sistema interconnesso. La valutazione non si limita alla zona del dolore, ma ricerca le compensazioni primarie lungo la catena cinetica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-headline-sm text-body-lg font-bold text-on-surface">Fondamento Scientifico e Sicurezza</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mt-1">
                    Le manovre praticate si basano sui protocolli clinici più aggiornati. Qualora emergano controindicazioni, il paziente viene tempestivamente indirizzato allo specialista competente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="py-12 border-t border-b border-outline-variant bg-surface-container-low">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="flex flex-wrap justify-around items-center gap-8 opacity-80 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-4xl">verified_user</span>
              <span className="font-label-caps text-xs text-on-surface font-bold">ORDINE TSRM PSTRP</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-4xl">medical_services</span>
              <span className="font-label-caps text-xs text-on-surface font-bold">AGGIORNAMENTO ECM</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-4xl">health_metrics</span>
              <span className="font-label-caps text-xs text-on-surface font-bold">OSTEOPATIA INTEGRATA</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-4xl">diversity_1</span>
              <span className="font-label-caps text-xs text-on-surface font-bold">APPROCCIO ETICO</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
