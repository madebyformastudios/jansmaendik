import Image from "next/image";
import { ShieldCheck, Users, Leaf } from "lucide-react";

export function WhyUs() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Top Header Row (Split 50/50 on desktop) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <span className="text-accent font-bold tracking-widest text-sm mb-3 uppercase block">
              WAAROM JANSMA & DIK
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-display">
              Betrokken, betrouwbaar en flexibel.
            </h2>
          </div>
          <div>
            <p className="text-lg text-slate-600 lg:pt-8 font-sans leading-relaxed">
              Al ruim 40 jaar de vertrouwde keuze voor professionele schoonmaak. Wij combineren Zeeuwse nuchterheid met de hoogste kwaliteitsstandaarden om uw werkomgeving optimaal te onderhouden.
            </p>
          </div>
        </div>

        {/* 2. Middle Row - The 3 USPs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16">
          
          {/* USP 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 rounded-full bg-slate-50">
              <ShieldCheck className="w-8 h-8 text-primary stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Keurmerk Schoon</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              NEN 4400-1 gecertificeerd. U doet zaken met een organisatie die zich aan de regels houdt.
            </p>
          </div>

          {/* USP 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 rounded-full bg-slate-50">
              <Users className="w-8 h-8 text-primary stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Familiebedrijf</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Korte lijnen, snel schakelen. U belt ons, niet een callcenter.
            </p>
          </div>

          {/* USP 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 rounded-full bg-slate-50">
              <Leaf className="w-8 h-8 text-primary stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Milieubewust</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Responsible Cleaning en Europees Ecolabel. Microvezelmethode, minder chemie.
            </p>
          </div>

        </div>

        {/* 3. Large Image Section */}
        <div className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 relative bg-slate-100">
          {/* Using kantoor-schoonmaak.jpeg as a placeholder, fits the aspect ratio well enough with object-cover */}
          <Image
            src="/images/kantoor-schoonmaak.jpeg"
            alt="Schoonmaak team aan het werk"
            fill
            className="object-cover"
          />
        </div>

        {/* 4. Bottom Row - Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-slate-200 border-t border-slate-200 pt-12">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-4xl md:text-5xl font-light text-slate-900 mb-2 font-display">
              1983
            </span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Sinds
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-4xl md:text-5xl font-light text-slate-900 mb-2 font-display">
              80<span className="text-accent">+</span>
            </span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Vaste Medewerkers
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-4xl md:text-5xl font-light text-slate-900 mb-2 font-display">
              300<span className="text-accent">+</span>
            </span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Locaties
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-4xl md:text-5xl font-light text-slate-900 mb-2 font-display">
              100<span className="text-accent">%</span>
            </span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Inzet
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
