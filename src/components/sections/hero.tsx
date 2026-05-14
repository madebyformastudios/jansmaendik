import Image from "next/image";
import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[750px] lg:min-h-[850px] flex items-center">
      {/* Diagonal Background Layer */}
      {/* Mobile: solid strip across top 40% */}
      {/* Desktop: clip-path percentages are relative to the full section width,
          same coordinate space as the circle, so they stay aligned at all viewport sizes */}
      <div
        className="absolute top-0 right-0 w-full h-[40%] lg:h-full bg-primary [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] lg:[clip-path:polygon(76%_0,100%_0,100%_100%,54%_100%)] z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 pt-10 pb-20 lg:pr-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-display">
            De schoonmaakpartner van {" "}
            <span className="relative inline-block z-10">
              Zeeland
              <span className="absolute left-0 bottom-2 w-full h-3 bg-accent -skew-x-12 -z-10"></span>
            </span>
            {" "} sinds 1983.
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mt-8 leading-relaxed font-sans max-w-lg">
            Betrouwbaar, gecertificeerd en altijd flexibel. Voor kantoren, scholen, zorg en industrie. 80 vaste medewerkers, 300+ locaties.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-7 text-lg rounded-md shadow-lg shadow-accent/20 transition-all hover:translate-y-[-2px]"
            >
              <Link href="/offerte">Vrijblijvende offerte aanvragen</Link>
            </Button>
            <Link 
              href="tel:0118461892" 
              className="flex items-center gap-3 text-slate-800 font-semibold text-lg hover:text-primary transition-colors group px-4 py-2"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              0118 - 461892
            </Link>
          </div>
        </div>

        {/* Right Column: Visuals */}
        <div className="lg:col-span-5 relative h-[550px] lg:h-[700px] flex items-end justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Orange Circle */}
          <div
            className="absolute top-[15%] lg:top-[20%] right-[0%] lg:right-[40%] w-[350px] h-[350px] bg-accent rounded-full z-10 shadow-2xl shadow-accent/20"
            aria-hidden="true"
          />

          {/* Cutout Image - Moved more to the right */}
          <div className="relative z-20 h-[105%] lg:h-[115%] w-auto flex items-end overflow-visible lg:-translate-x-12">
            <Image
              src="/cleaning-lady-hero.svg"
              alt="Schoonmaak specialist Jansma & Dik"
              width={800}
              height={1000}
              className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)] origin-bottom"
              priority
            />
          </div>

          {/* Floating Trust Badge */}
          <div className="absolute bottom-20 lg:bottom-28 -left-8 lg:-left-40 z-30 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="bg-white shadow-2xl rounded-xl p-4 lg:p-5 flex items-center gap-4 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800 whitespace-nowrap">Keurmerk Schoon</span>
                <span className="text-xs text-slate-500 font-medium">& NEN 4400-1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-slate-900 py-6 lg:py-8 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 opacity-40 grayscale">
            {["Emergis", "Schipper", "Damen", "Zeeuws Museum", "KOW"].map((logo) => (
              <span 
                key={logo} 
                className="text-white font-bold text-base lg:text-lg uppercase tracking-[0.2em] whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
