import React from 'react';
import { ArrowRight, ShieldCheck, Award, Calendar, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import FaqSection from '../components/FaqSection';
import SymptomFinderWizard from '../components/SymptomFinderWizard';

export default function HomePage({ setActivePage, onOpenBooking }) {
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck size={16} />
              <span>Osteopatia Clinica Qualificata</span>
            </div>
            
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
              Ritrova l'Equilibrio del Tuo Corpo
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              Trattamenti osteopatici personalizzati per il benessere fisico e la gestione del dolore muscolo-scheletrico. Un approccio clinico empatico per individuare la causa primaria delle tensioni.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg lift-hover transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar size={20} />
                <span>Prenota la Prima Visita</span>
              </button>
              
              <button
                onClick={() => setActivePage('trattamenti')}
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-container/20 transition-all text-center"
              >
                Scopri i Trattamenti
              </button>
            </div>

            {/* Quick Contact Micro-Actions */}
            <div className="mt-8 pt-6 border-t border-outline-variant/60 flex items-center gap-6 text-sm text-on-surface-variant">
              <a href="tel:+390212345678" className="flex items-center gap-2 hover:text-primary font-semibold transition-colors">
                <Phone size={16} className="text-primary" />
                <span>+39 02 12345678</span>
              </a>
              <a 
                href="https://wa.me/390212345678?text=Buongiorno%20Dottore,%20vorrei%20informazioni%20per%20un%20appuntamento." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary font-semibold transition-colors"
              >
                <MessageSquare size={16} className="text-emerald-600" />
                <span>WhatsApp Diretto</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-6 relative">
            <div className="aspect-square rounded-full bg-primary-fixed-dim absolute -top-10 -right-10 w-64 h-64 blur-3xl opacity-30"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-surface">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhNqVbVTkFe3U0NKklLdBA_nD9bHUzesRRGNspQSYflZxBkgzBHG_4_befe99V4mrhllFhc7S-Wk7nEoeEqjB5lzlMpiwQj3cOIw0zjLmQbh5ovGhTXJX2p4cs1Z2fvQl--baMr_H4fvQGil0_EtXKUW_lGXw-igjQxB1C1Z78LM1FkiWi6f0lAnuEijsKjCCxwrOA02v70BO3pnN2zNcY5tHYZ7wpAAqAM94QL0LKnTEn93sW1NSJ1A"
                alt="Ambiente dello studio osteopatico curato e luminoso"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-surface p-5 rounded-2xl shadow-xl border-l-4 border-primary flex items-center gap-4 hidden sm:flex">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                <Award size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-outline">Qualifica Ufficiale</p>
                <p className="font-bold text-on-surface text-sm">Ordine TSRM & PSTRP n. 123</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Doctor Bio Summary Section */}
      <section className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-8 border-surface relative">
              <img
                src="/images/foto1.jpg"
                alt="Dr.ssa Alessia Caffio Osteopata"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2 space-y-6">
            <div className="uppercase tracking-widest text-primary font-bold text-sm">La tua salute in buone mani</div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Dr.ssa Alessia Caffio</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Con oltre dieci anni di esperienza clinica, il mio obiettivo è guidarti attraverso un percorso di salute e mobilità consapevole. Utilizzo tecniche manuali ed evidenze cliniche non invasive per ripristinare il corretto movimento e supportare i naturali processi di autoregolazione dell'organismo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-surface p-4 rounded-xl border border-outline-variant">
                <CheckCircle2 className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-on-surface text-sm">Valutazione Clinica</h4>
                  <p className="text-xs text-on-surface-variant">Anamnesi approfondita ed esame obiettivo strutturato.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-surface p-4 rounded-xl border border-outline-variant">
                <CheckCircle2 className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-on-surface text-sm">Piano Su Misura</h4>
                  <p className="text-xs text-on-surface-variant">Trattamenti personalizzati sulle specifiche esigenze.</p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-outline-variant">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <div className="font-label-caps text-label-caps text-secondary uppercase">Iscritto Ordine</div>
                  <div className="font-bold text-on-surface">TSRM e PSTRP n. 123</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <div>
                  <div className="font-label-caps text-label-caps text-secondary uppercase">Certificazione</div>
                  <div className="font-bold text-on-surface">Osteopatia Clinica Integrata</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActivePage('chi-sono')}
                className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                <span>Scopri di più sul percorso accademico</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="bg-surface py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-2">Principali Ambiti d'Intervento</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Trattamenti Specializzati</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Interventi mirati per le principali problematiche muscolo-scheletriche, progettati per restituire mobilità e libertà di movimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cervicalgia */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-primary-container shadow-sm lift-hover flex flex-col justify-between">
              <div>
                <div className="text-primary mb-6">
                  <span className="material-symbols-outlined text-5xl">panorama_horizontal</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Cervicalgia</h3>
                <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
                  Risoluzione delle tensioni al collo, cefalee muscolo-tensive e rigidità articolare attraverso tecniche di rilascio miofasciale.
                </p>
              </div>
              <button
                onClick={() => setActivePage('trattamenti')}
                className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-left"
              >
                <span>Approfondisci disturbo</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Lombalgia */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-primary-container shadow-sm lift-hover flex flex-col justify-between">
              <div>
                <div className="text-primary mb-6">
                  <span className="material-symbols-outlined text-5xl">back_hand</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Lombalgia</h3>
                <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
                  Trattamento del mal di schiena e delle tensioni lombari attraverso manovre dolci di decompressione ed equilibrio vertebrale.
                </p>
              </div>
              <button
                onClick={() => setActivePage('trattamenti')}
                className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-left"
              >
                <span>Approfondisci disturbo</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Postura */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-primary-container shadow-sm lift-hover flex flex-col justify-between">
              <div>
                <div className="text-primary mb-6">
                  <span className="material-symbols-outlined text-5xl">accessibility_new</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Riequilibrio Posturale</h3>
                <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
                  Analisi biomeccanica e correzione della postura per prevenire squilibri ripetitivi e migliorare l'ergonomia quotidiana.
                </p>
              </div>
              <button
                onClick={() => setActivePage('trattamenti')}
                className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-left"
              >
                <span>Approfondisci disturbo</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Symptom Finder Wizard */}
      <section className="bg-surface-container-low py-12">
        <div className="max-w-container-max mx-auto px-gutter">
          <SymptomFinderWizard
            onSelectTreatment={(page) => setActivePage(page)}
            onOpenBooking={onOpenBooking}
          />
        </div>
      </section>

      {/* Social Proof (Verifiable Reviews) */}
      <section className="bg-surface py-section-padding-mobile md:py-section-padding-desktop border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-12">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Esperienza dei Pazienti</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-2">Testimonianze Verificate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm space-y-4">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant text-sm italic">
                "Professionista estremamente preparato ed empatico. Ha dedicato molta attenzione all'anamnesi iniziale spiegandomi con chiarezza l'origine del mio problema al collo."
              </p>
              <div className="pt-2 border-t border-outline-variant text-xs text-outline font-bold">
                M. Bianchi &bull; Paziente Verificato
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm space-y-4">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant text-sm italic">
                "Studio accogliente, pulito e puntuale. Già dopo le prime sedute ho riscontrato un notevole miglioramento della mobilità della schiena durante il lavoro."
              </p>
              <div className="pt-2 border-t border-outline-variant text-xs text-outline font-bold">
                L. Rossi &bull; Paziente Verificato
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm space-y-4">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant text-sm italic">
                "Ho apprezzato la trasparenza e l'approccio scientifico del Dottore. Consigli pratici utilissimi anche da eseguire a casa per mantenere la postura."
              </p>
              <div className="pt-2 border-t border-outline-variant text-xs text-outline font-bold">
                G. Verdi &bull; Paziente Verificato
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faq Section */}
      <FaqSection />

      {/* Main CTA Banner */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-secondary text-on-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="font-display-lg-mobile md:font-headline-md text-white">
                Inizia oggi il tuo percorso verso il benessere fisico
              </h2>
              <p className="text-secondary-fixed max-w-xl mx-auto text-lg leading-relaxed">
                Prenota una prima visita valutativa per definire un inquadramento osteopatico su misura per le tue esigenze.
              </p>
              <button
                onClick={onOpenBooking}
                className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-xl hover:brightness-110 shadow-lg transition-all active:scale-95 inline-flex items-center gap-3"
              >
                <Calendar size={24} />
                <span>Prenota un Appuntamento</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
