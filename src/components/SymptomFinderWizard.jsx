import React, { useState } from 'react';
import { Compass, Check, ArrowRight, RotateCcw } from 'lucide-react';

export default function SymptomFinderWizard({ onSelectTreatment, onOpenBooking }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    area: '',
    duration: '',
    activity: ''
  });

  const handleSelectArea = (val) => {
    setAnswers(prev => ({ ...prev, area: val }));
    setStep(2);
  };

  const handleSelectDuration = (val) => {
    setAnswers(prev => ({ ...prev, duration: val }));
    setStep(3);
  };

  const handleSelectActivity = (val) => {
    setAnswers(prev => ({ ...prev, activity: val }));
    setStep(4);
  };

  const resetWizard = () => {
    setAnswers({ area: '', duration: '', activity: '' });
    setStep(1);
  };

  const getRecommendation = () => {
    if (answers.area === 'cervicale') {
      return {
        title: 'Trattamento Cervicalgia & Tensioni Cranio-Cervicali',
        page: 'trattamenti',
        desc: 'In base alle tue risposte, l\'approccio osteopatico mirerà a valutare la cerniera cervico-dorsale, la mobilità delle prime vertebre ed il rilascio dei muscoli trapezii e sotto-occipitali.',
        durationText: 'Durata indicativa prima visita: 60 minuti'
      };
    } else if (answers.area === 'lombare') {
      return {
        title: 'Trattamento Lombalgia & Equilibrio Pelvico',
        page: 'trattamenti',
        desc: 'L\'approccio si concentrerà sulla valutazione del bacino, della catena muscolare posteriore e sulla decompressione delle tensioni vertebrali lombari.',
        durationText: 'Durata indicativa prima visita: 60 minuti'
      };
    } else {
      return {
        title: 'Percorso di Riequilibrio Posturale Globale',
        page: 'trattamenti',
        desc: 'Consigliato un inquadramento posturale completo con test dinamici e propriocettivi per individuare gli squilibri ripetitivi legati al lavoro ed al movimento.',
        durationText: 'Durata indicativa prima visita: 60 minuti'
      };
    }
  };

  const recommendation = step === 4 ? getRecommendation() : null;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-3xl p-8 md:p-10 shadow-lg space-y-6">
      <div className="flex items-center justify-between border-b border-outline-variant pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center font-bold">
            <Compass size={22} />
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Guida Interattiva al Trattamento</h3>
            <p className="text-xs text-outline">Strumento divulgativo privo di raccolta dati sanitari</p>
          </div>
        </div>

        {step > 1 && (
          <button
            onClick={resetWizard}
            className="text-xs text-on-surface-variant hover:text-primary flex items-center gap-1 font-semibold"
          >
            <RotateCcw size={14} />
            <span>Ricomincia</span>
          </button>
        )}
      </div>

      {step === 1 && (
        <div className="space-y-4 animate-fadeIn">
          <p className="font-bold text-on-surface text-base">Passo 1: Quale zona del corpo avverte maggiore rigidità o fastidio?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => handleSelectArea('cervicale')}
              className="p-5 rounded-2xl border-2 border-outline-variant hover:border-primary bg-surface hover:bg-surface-container-low text-left font-bold text-on-surface transition-all flex flex-col justify-between h-32"
            >
              <span className="material-symbols-outlined text-primary text-3xl">panorama_horizontal</span>
              <span>Collo, Spalle e Cervicale</span>
            </button>
            <button
              onClick={() => handleSelectArea('lombare')}
              className="p-5 rounded-2xl border-2 border-outline-variant hover:border-primary bg-surface hover:bg-surface-container-low text-left font-bold text-on-surface transition-all flex flex-col justify-between h-32"
            >
              <span className="material-symbols-outlined text-primary text-3xl">back_hand</span>
              <span>Schiena e Zona Lombare</span>
            </button>
            <button
              onClick={() => handleSelectArea('postura')}
              className="p-5 rounded-2xl border-2 border-outline-variant hover:border-primary bg-surface hover:bg-surface-container-low text-left font-bold text-on-surface transition-all flex flex-col justify-between h-32"
            >
              <span className="material-symbols-outlined text-primary text-3xl">accessibility_new</span>
              <span>Postura e Movimento Globale</span>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-fadeIn">
          <p className="font-bold text-on-surface text-base">Passo 2: Da quanto tempo è presente questa sensazione?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => handleSelectDuration('recente')}
              className="p-5 rounded-2xl border-2 border-outline-variant hover:border-primary bg-surface hover:bg-surface-container-low text-left font-bold text-on-surface transition-all space-y-2"
            >
              <span className="text-xs uppercase text-primary font-bold block">Recente</span>
              <span className="text-sm block">Da pochi giorni o a seguito di uno sforzo occasionale.</span>
            </button>
            <button
              onClick={() => handleSelectDuration('persintente')}
              className="p-5 rounded-2xl border-2 border-outline-variant hover:border-primary bg-surface hover:bg-surface-container-low text-left font-bold text-on-surface transition-all space-y-2"
            >
              <span className="text-xs uppercase text-primary font-bold block">Persistente</span>
              <span className="text-sm block">Da diversi mesi con fasi alternanti.</span>
            </button>
            <button
              onClick={() => handleSelectDuration('prevenzione')}
              className="p-5 rounded-2xl border-2 border-outline-variant hover:border-primary bg-surface hover:bg-surface-container-low text-left font-bold text-on-surface transition-all space-y-2"
            >
              <span className="text-xs uppercase text-primary font-bold block">Prevenzione</span>
              <span className="text-sm block">Desidero una manutenzione periodica per il benessere.</span>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 animate-fadeIn">
          <p className="font-bold text-on-surface text-base">Passo 3: Qual è la tua attività principale prevalente?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => handleSelectActivity('sedentario')}
              className="p-5 rounded-2xl border-2 border-outline-variant hover:border-primary bg-surface hover:bg-surface-container-low text-left font-bold text-on-surface transition-all space-y-2"
            >
              <span className="text-xs uppercase text-primary font-bold block">Sedentaria / PC</span>
              <span className="text-sm block">Molte ore seduto a scrivania o guida prolungata.</span>
            </button>
            <button
              onClick={() => handleSelectActivity('fisico')}
              className="p-5 rounded-2xl border-2 border-outline-variant hover:border-primary bg-surface hover:bg-surface-container-low text-left font-bold text-on-surface transition-all space-y-2"
            >
              <span className="text-xs uppercase text-primary font-bold block">Lavoro Fisico</span>
              <span className="text-sm block">Movimenti ripetitivi, sollevamento carichi o in piedi.</span>
            </button>
            <button
              onClick={() => handleSelectActivity('sportivo')}
              className="p-5 rounded-2xl border-2 border-outline-variant hover:border-primary bg-surface hover:bg-surface-container-low text-left font-bold text-on-surface transition-all space-y-2"
            >
              <span className="text-xs uppercase text-primary font-bold block">Sportivo</span>
              <span className="text-sm block">Attività sportiva regolare o amatoriale intensa.</span>
            </button>
          </div>
        </div>
      )}

      {step === 4 && recommendation && (
        <div className="bg-surface-container-low p-6 rounded-2xl border border-primary-container space-y-4 animate-fadeIn">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <Check size={20} />
            <span>Indicazione Orientativa Elaborata</span>
          </div>

          <h4 className="font-bold text-lg text-on-surface">{recommendation.title}</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">{recommendation.desc}</p>
          <p className="text-xs font-semibold text-outline">{recommendation.durationText}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm shadow hover:brightness-90 transition-all flex items-center justify-center gap-2"
            >
              <span>Richiedi Appuntamento in Studio</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onSelectTreatment(recommendation.page)}
              className="border border-primary text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-container/20 transition-all"
            >
              Approfondisci la Scheda Clinica
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
