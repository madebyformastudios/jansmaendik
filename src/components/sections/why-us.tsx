import Image from "next/image";
import { ShieldCheck, Users, Leaf } from "lucide-react";

const usps = [
  {
    icon: ShieldCheck,
    title: "Keurmerk Schoon",
    description: "NEN 4400-1 gecertificeerd. U doet zaken met een organisatie die zich aan de regels houdt.",
  },
  {
    icon: Users,
    title: "Familiebedrijf",
    description: "Korte lijnen, snel schakelen. U belt ons, niet een callcenter.",
  },
  {
    icon: Leaf,
    title: "Milieubewust",
    description: "Responsible Cleaning en Europees Ecolabel. Microvezelmethode, minder chemie.",
  },
];

const stats = [
  { value: "1983", label: "Sinds" },
  { value: "80+", label: "Vaste medewerkers" },
  { value: "300+", label: "Locaties" },
  { value: "100%", label: "Inzet" },
];

export function WhyUs() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Top Header Row */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <div>
            <span className="text-accent font-semibold tracking-wider text-sm mb-3 uppercase block">
              Waarom Jansma &amp; Dik
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 leading-tight font-display">
              Betrokken, betrouwbaar en flexibel.
            </h2>
          </div>
          <p className="text-lg text-slate-600 lg:pt-8 font-sans leading-relaxed">
            Al ruim 40 jaar de vertrouwde keuze voor professionele schoonmaak. Wij combineren Zeeuwse nuchterheid met de hoogste kwaliteitsstandaarden om uw werkomgeving optimaal te onderhouden.
          </p>
        </div>

        {/* 2. USPs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 text-center mb-12 lg:mb-16">
          {usps.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="mb-4 p-4 rounded-full bg-secondary">
                <Icon className="w-6 h-6 text-primary stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2 font-display">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm">{description}</p>
            </div>
          ))}
        </div>

        {/* 3. Large Image */}
        <div className="w-full aspect-[4/3] sm:aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 lg:mb-16 relative bg-slate-100">
          <Image
            src="/images/why-us-banner-image.jpeg"
            alt="Schoonmaak team aan het werk"
            fill
            className="object-cover"
          />
        </div>

        {/* 4. Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 md:divide-x divide-slate-200 border-t border-slate-200 pt-10 lg:pt-12">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl md:text-5xl font-medium text-slate-900 mb-2 font-display">
                {value}
              </span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
