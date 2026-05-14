"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ease, viewport } from "@/lib/motion";

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
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="w-full bg-primary py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-white/60 font-semibold tracking-wider uppercase text-sm mb-4 block">
              — Onze Diensten
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight font-display tracking-tight">
              Voor elk bedrijf de juiste{" "}
              <span className="text-accent">schoonmaakoplossing.</span>
            </h2>
          </div>
          <Button
            render={<Link href="/diensten" />}
            nativeButton={false}
            className="bg-accent hover:bg-accent/90 text-white rounded-md px-8 py-7 text-lg font-semibold group flex-shrink-0 shadow-lg shadow-accent/20 transition-all hover:translate-y-[-2px]"
          >
            Alle diensten bekijken
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                animate={{ scale: isActive ? 1.02 : 1 }}
                transition={{
                  opacity: { duration: 0.65, ease, delay: idx * 0.08 },
                  y: { duration: 0.65, ease, delay: idx * 0.08 },
                  scale: { duration: 0.3, ease },
                }}
                className={cn(
                  "relative rounded-2xl p-6 lg:p-8 flex flex-col justify-between group",
                  "transition-[background-color,box-shadow] duration-300",
                  isActive
                    ? "bg-white text-slate-900 shadow-2xl z-10"
                    : "bg-white/10 text-white border border-white/10 hover:bg-white/15"
                )}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3 font-display">{service.title}</h3>
                  <p className={cn("text-base leading-relaxed", isActive ? "text-slate-600" : "text-white/70")}>
                    {service.description}
                  </p>
                </div>

                {/* Image Area */}
                <div className="relative mt-auto">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-500 group-hover:scale-105",
                        !isActive && "opacity-90 saturate-50 group-hover:saturate-100"
                      )}
                    />
                  </div>

                  {/* Floating Action Button */}
                  <Link
                    href="/diensten"
                    className={cn(
                      "absolute -bottom-4 -right-4 w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-200 hover:scale-110 hover:shadow-accent/40",
                      !isActive && "opacity-90 group-hover:opacity-100"
                    )}
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
