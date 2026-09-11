"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const servicesList = [
  {
    title: "Kantoor schoonmaak",
    description: "Dagelijks of periodiek, afgestemd op uw werktijden en wensen.",
    image: "/images/kantoor-schoonmaak.jpeg",
  },
  {
    title: "Industrie & bouw",
    description: "Opleveringsschoonmaak en productielocaties. Veiligheid staat voorop.",
    image: "/images/industrie-bouw.jpeg",
  },
  {
    title: "Zorg & scholen",
    description: "Ervaren in zorglocaties, scholen en sportscholen. Flexibele inzet.",
    image: "/images/zorg-scholen.jpeg",
  },
  {
    title: "Makelaardij & VVE's",
    description: "Woningen bezichtigingsklaar en trappenhuizen van wooncomplexen.",
    image: "/images/makelaardij-vve.jpeg",
  },
  {
    title: "Specialistische reiniging",
    description: "Vloeronderhoud, glas- en gevelreiniging. Periodiek of eenmalig.",
    image: "/images/specialistische-reiniging.jpeg",
  },
  {
    title: "Maatwerk",
    description: "Schepen, evenementen, vakantievervanging. Bijna alles is mogelijk.",
    image: "/images/maatwerk.jpeg",
    featured: true,
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section className="w-full bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block">
              Onze diensten
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 leading-tight font-display tracking-tight">
              Voor elk bedrijf de juiste{" "}
              <span className="text-accent">schoonmaakoplossing.</span>
            </h2>
          </div>
          <Button
            render={<Link href="/diensten" />}
            nativeButton={false}
            variant="accent"
            className="h-auto px-6 py-3.5 text-base font-medium group flex-shrink-0 rounded-md transition-colors duration-150"
          >
            Alle diensten bekijken
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, idx) => {
            const isActive = activeIndex === idx;
            const accentBorder = service.featured ? "border-t-accent" : "border-t-primary";

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                className={cn(
                  "relative rounded-xl border border-border border-t-[3px] bg-white p-6 lg:p-8 flex flex-col justify-between",
                  "transition-colors duration-150",
                  accentBorder,
                  isActive && "bg-secondary/40"
                )}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-slate-900 mb-3 font-display">{service.title}</h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Image Area */}
                <div className="relative mt-auto">
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />

                    {/* Floating Action Button — inside image to avoid overflow */}
                    <Link
                      href="/diensten"
                      aria-label={`Meer over ${service.title}`}
                      className="absolute bottom-3 right-3 w-11 h-11 lg:w-12 lg:h-12 bg-accent hover:bg-[#d5551a] rounded-full flex items-center justify-center text-white transition-colors duration-150"
                    >
                      <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
