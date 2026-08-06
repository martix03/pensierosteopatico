import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, MessageSquare, Car, Accessibility } from 'lucide-react';
import FormContactGDPR from '../components/FormContactGDPR';

export default function ContattiPage({ onOpenPrivacy }) {
  const [selectedStudio, setSelectedStudio] = useState('volta');

  const studios = {
    volta: {
      id: 'volta',
      name: 'Studio Centrale - Volta',
      address: 'Via Alessandro Volta 12, 20121 Milano (MI)',
      hours: 'LUN - VEN: 08:30 - 19:30',
      parking: 'Parcheggio convenzionato Volta Parking a 100m. Zona ZTL regolamentata.',
      accessibility: 'Ascensore al piano, ingresso senza barriere architettoniche.',
      geo: { lat: 45.4782, lng: 9.1866 },
      mapsUrl: 'https://maps.google.com/?q=Via+Alessandro+Volta+12+Milano'
    },
    buenosaires: {
      id: 'buenosaires',
      name: 'Punto Salute Est - Buenos Aires',
      address: 'Corso Buenos Aires 45, 20124 Milano (MI)',
      hours: 'MAR - GIO: 09:30 - 18:30',
      parking: 'Strisce blu Corso Buenos Aires e Garage Lima a 50m. M1 Lima.',
      accessibility: 'Accesso facilitato piano terra con rampa d\'accesso.',
      geo: { lat: 45.4805, lng: 9.2112 },
      mapsUrl: 'https://maps.google.com/?q=Corso+Buenos+Aires+45+Milano'
    }
  };

  const activeStudio = studios[selectedStudio];

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Header Section */}
      <section className="bg-surface-bright py-section-padding-mobile md:py-section-padding-desktop border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-2xl space-y-4">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block font-bold">
              Dove Trovarci
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              Sedi e Contatti Diretti
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Scegli la sede più comoda per te o inviaci una richiesta di contatto per concordare il primo appuntamento.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Locations & Interactive Map */}
          <div className="lg:col-span-7 space-y-8">
            {/* Locations Selector Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Studio 1 */}
              <div
                onClick={() => setSelectedStudio('volta')}
                className={`p-6 rounded-2xl border-t-4 cursor-pointer transition-all ${
                  selectedStudio === 'volta'
                    ? 'bg-surface-container-lowest border-primary shadow-lg ring-2 ring-primary/20'
                    : 'bg-surface-container-low border-outline-variant hover:bg-surface-container'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <MapPin className={selectedStudio === 'volta' ? 'text-primary' : 'text-secondary'} size={24} />
                  {selectedStudio === 'volta' && (
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-primary-fixed text-on-primary-fixed-variant px-2.5 py-1 rounded-full">
                      Selezionata
                    </span>
                  )}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Studio Volta</h3>
                <p className="text-on-surface-variant text-sm mb-4">Via Alessandro Volta 12, Milano</p>
                <div className="flex items-center text-xs font-label-caps text-outline font-semibold gap-1.5">
                  <Clock size={14} />
                  <span>{studios.volta.hours}</span>
                </div>
              </div>

              {/* Studio 2 */}
              <div
                onClick={() => setSelectedStudio('buenosaires')}
                className={`p-6 rounded-2xl border-t-4 cursor-pointer transition-all ${
                  selectedStudio === 'buenosaires'
                    ? 'bg-surface-container-lowest border-primary shadow-lg ring-2 ring-primary/20'
                    : 'bg-surface-container-low border-outline-variant hover:bg-surface-container'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <MapPin className={selectedStudio === 'buenosaires' ? 'text-primary' : 'text-secondary'} size={24} />
                  {selectedStudio === 'buenosaires' && (
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-primary-fixed text-on-primary-fixed-variant px-2.5 py-1 rounded-full">
                      Selezionata
                    </span>
                  )}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Punto Salute Est</h3>
                <p className="text-on-surface-variant text-sm mb-4">Corso Buenos Aires 45, Milano</p>
                <div className="flex items-center text-xs font-label-caps text-outline font-semibold gap-1.5">
                  <Clock size={14} />
                  <span>{studios.buenosaires.hours}</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-lg border border-outline-variant">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-500"
                style={{
                  backgroundImage: selectedStudio === 'volta'
                    ? `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8b4qVDaO1cITQWnFvoqBDHzmsN0ljvLsk3cnSvTVa6dlSpwuQHYDsgAZAhwOpMj-kLE_ksLlOX0ukiH4r18V56imxcMdmwJV4FM_rmGUPpe2Wd0Rrw5rAp5SYAcqIKtjXKhlnGCtA3RFYzM7ZpRU-31Ona0f-IETPNnwVwJHt0UHfT6_eFClroVX_LhAjgd1iBx_ul8309DRVhNS2JKmXLFBm1WR0qIyXiF9WkFz4QxbSXHXm-puTuQ')`
                    : `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhNqVbVTkFe3U0NKklLdBA_nD9bHUzesRRGNspQSYflZxBkgzBHG_4_befe99V4mrhllFhc7S-Wk7nEoeEqjB5lzlMpiwQj3cOIw0zjLmQbh5ovGhTXJX2p4cs1Z2fvQl--baMr_H4fvQGil0_EtXKUW_lGXw-igjQxB1C1Z78LM1FkiWi6f0lAnuEijsKjCCxwrOA02v70BO3pnN2zNcY5tHYZ7wpAAqAM94QL0LKnTEn93sW1NSJ1A')`
                }}
              ></div>

              {/* Overlay Details Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl border border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <p className="font-label-caps text-[10px] text-outline uppercase font-bold tracking-wider">Sede Attualmente Selezionata</p>
                  <p className="font-body-md font-bold text-on-surface text-base">{activeStudio.name}</p>
                  <p className="text-xs text-on-surface-variant">{activeStudio.address}</p>
                </div>
                <a
                  href={activeStudio.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:brightness-90 transition-all flex items-center gap-2 shadow"
                >
                  <Navigation size={16} />
                  <span>Avvia Navigatore GPS</span>
                </a>
              </div>
            </div>

            {/* Logistics Info Card */}
            <div className="bg-surface p-6 rounded-2xl border border-outline-variant space-y-4 shadow-sm">
              <h4 className="font-bold text-on-surface text-base">Informazioni Logistiche ed Accessibilità</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-on-surface-variant">
                <div className="flex items-start gap-2.5">
                  <Car className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="font-bold text-on-surface block">Parcheggio e Viabilità</span>
                    <span>{activeStudio.parking}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Accessibility className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="font-bold text-on-surface block">Accessibilità Disabili</span>
                    <span>{activeStudio.accessibility}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Bar (WhatsApp & Direct Phone) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/390212345678?text=Buongiorno%20Dottore,%20vorrei%20informazioni%20sulle%20disponibilit%C3%A0."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-gradient flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-headline-sm lift-effect shadow-md"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Business Direct</span>
              </a>

              <a
                href="tel:+390212345678"
                className="flex-1 bg-surface-container-high border border-outline-variant flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-on-surface font-headline-sm lift-effect shadow-sm hover:bg-surface-container"
              >
                <Phone size={20} className="text-primary" />
                <span>Chiama +39 02 12345678</span>
              </a>
            </div>
          </div>

          {/* Right Column: GDPR Minimized Form */}
          <div className="lg:col-span-5">
            <FormContactGDPR
              title="Richiedi Ricontatto o Visita"
              onOpenPrivacy={onOpenPrivacy}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
