"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Users, Leaf } from "lucide-react";
import { ease, viewport, staggerContainer, fadeUp } from "@/lib/motion";

function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  suffix = ""
}: {
  end: number;
  start?: number;
  duration?: number;
  suffix?: React.ReactNode
}) {
  const [count, setCount] = React.useState(start);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number;
          let animationFrame: number;

          const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const easeOut = 1 - Math.pow(1 - progress / duration, 3);

            if (progress < duration) {
              setCount(Math.round(start + ((end - start) * easeOut)));
              animationFrame = requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };

          animationFrame = requestAnimationFrame(updateCount);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, start, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

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

export function WhyUs() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Top Header Row */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, ease }}
          >
            <span className="text-accent font-bold tracking-widest text-sm mb-3 uppercase block">
              WAAROM JANSMA &amp; DIK
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-display">
              Betrokken, betrouwbaar en flexibel.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, ease, delay: 0.15 }}
          >
            <p className="text-lg text-slate-600 lg:pt-8 font-sans leading-relaxed">
              Al ruim 40 jaar de vertrouwde keuze voor professionele schoonmaak. Wij combineren Zeeuwse nuchterheid met de hoogste kwaliteitsstandaarden om uw werkomgeving optimaal te onderhouden.
            </p>
          </motion.div>
        </div>

        {/* 2. USPs */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 text-center mb-12 lg:mb-16"
        >
          {usps.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.65, ease }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="mb-4 p-4 rounded-full bg-slate-50 group-hover:bg-accent/10 transition-colors duration-300">
                <Icon className="w-8 h-8 text-primary stroke-[1.5] group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Large Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.85, ease }}
          className="w-full aspect-[4/3] sm:aspect-video md:aspect-[21/9] rounded-2xl lg:rounded-[2rem] overflow-hidden mb-12 lg:mb-16 relative bg-slate-100"
        >
          <Image
            src="/images/why-us-banner-image.jpeg"
            alt="Schoonmaak team aan het werk"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* 4. Statistics */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 md:divide-x divide-slate-200 border-t border-slate-200 pt-10 lg:pt-12"
        >
          {[
            { end: 1983, start: 1900, label: "Sinds", suffix: "" },
            { end: 80, start: 0, label: "Vaste Medewerkers", suffix: <span className="text-accent">+</span> },
            { end: 300, start: 0, label: "Locaties", suffix: <span className="text-accent">+</span> },
            { end: 100, start: 0, label: "Inzet", suffix: <span className="text-accent">%</span> },
          ].map(({ end, start, label, suffix }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={{ duration: 0.65, ease }}
              className="flex flex-col items-center justify-center text-center"
            >
              <span className="text-3xl md:text-5xl font-light text-slate-900 mb-2 font-display">
                <AnimatedCounter end={end} start={start} duration={2000} suffix={suffix} />
              </span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
