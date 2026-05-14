"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ease } from "@/lib/motion";

const clientLogos = [
  "portfolio_logos_13_0a_Laspartners.jpg",
  "portfolio_logos_19_0a_Verbrugge.jpeg",
  "portfolio_logos_20_0a_Logo_Wielemaker_RGB.jpg",
  "portfolio_logos_21_0a_Damen.png",
  "portfolio_logos_2140fe4830c4935b7ba_0a_renault_dijkwel_logo.png",
  "portfolio_logos_27_0a_VRZ.jpeg",
  "portfolio_logos_299789548395fd25cfc_0a_Archipel.png",
  "portfolio_logos_43413d6c3d106cc14fe_0a_Weststrate.png",
  "portfolio_logos_4a33ff25e3eff4f8b94_0a_Shipyard_Reimerswaal.png",
  "portfolio_logos_60fdbfa132e6c4ae286_0a_Dockwize.png",
  "portfolio_logos_730ecea40edf08a032a_0a_McCain.png",
  "portfolio_logos_7627be236de6d7e621a_0a_philadelphia.jpg",
  "portfolio_logos_85daa3a0ccd4381d89f_0a_van-den-berg.png",
  "portfolio_logos_91be213e2da7cce54ef_0a_Schipper.png",
  "portfolio_logos_93ad45d7d044e38f239_0a_Luijten-VVZ-logo-home.png",
  "portfolio_logos_a465068211dd0c2a09e_0a_logo_zib.png",
  "portfolio_logos_ac6a8b3cc5aeb9a58c8_0a_Gapph.jpg",
  "portfolio_logos_c99e31f1c321e79b3ee_0a_Bouwbedrijf_joziasse_logo.png",
  "portfolio_logos_dc6f9c9d3c38caf3430_0a_Website_logo_zichtbaar_def.png",
  "portfolio_logos_e18b654a405245b524c_0a_Onze_Wijs.png",
  "portfolio_logos_ee4ddd1dc3a6d0515da_0a_Zeeuws_Museum.png",
  "portfolio_logos_f5266a7f9c6c09b2ac2_0a_logo_sinke_wonen.png",
  "portfolio_logos_f69a7be71569685b329_0a_emergis.png",
];

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[750px] lg:min-h-[850px] flex items-center">
      {/* Diagonal Background Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease }}
        className="absolute top-0 right-0 w-full h-[40%] lg:h-full bg-primary [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] lg:[clip-path:polygon(76%_0,100%_0,100%_100%,54%_100%)] z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 pt-10 pb-20 lg:pr-12">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-display"
          >
            De schoonmaakpartner van{" "}
            <span className="relative inline-block z-10">
              Zeeland
              <span className="absolute left-0 bottom-2 w-full h-3 bg-accent -skew-x-12 -z-10" />
            </span>
            {" "}sinds 1983.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-600 mt-8 leading-relaxed font-sans max-w-lg"
          >
            Betrouwbaar, gecertificeerd en altijd flexibel. Voor kantoren, scholen, zorg en industrie. 80 vaste medewerkers, 300+ locaties.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-5 items-start sm:items-center"
          >
            <Button
              render={<Link href="/offerte" />}
              nativeButton={false}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-7 text-lg rounded-md shadow-lg shadow-accent/20 transition-all hover:translate-y-[-2px]"
            >
              Vrijblijvende offerte aanvragen
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full px-4 py-2 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-700">Keurmerk Schoon</span>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">NEN 4400-1</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visuals */}
        <div className="lg:col-span-5 relative h-[550px] lg:h-[700px] flex items-end justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Orange Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="absolute top-[15%] lg:top-[20%] right-[0%] lg:right-[40%] w-[350px] h-[350px] bg-accent rounded-full z-10 shadow-[0_20px_60px_rgba(234,88,12,0.5)]"
            aria-hidden="true"
          />

          {/* Cutout Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="relative z-20 h-[105%] lg:h-[115%] w-auto flex items-end overflow-visible lg:-translate-x-12"
          >
            <Image
              src="/cleaning-lady-hero.svg"
              alt="Schoonmaak specialist Jansma & Dik"
              width={800}
              height={1000}
              className="h-full w-auto object-contain object-bottom drop-shadow-[20px_20px_40px_rgba(0,0,0,0.7)] origin-bottom"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Social Proof Strip - Infinite Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.7 }}
        className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 py-6 lg:py-8 z-40 overflow-hidden"
      >
        <div className="w-full flex">
          <div className="flex min-w-full shrink-0 animate-ticker items-center gap-12 px-6">
            {clientLogos.map((logo, index) => (
              <Image
                key={index}
                src={`/logos/${logo}`}
                alt="Client Logo"
                width={120}
                height={60}
                className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
            {clientLogos.map((logo, index) => (
              <Image
                key={`dup-${index}`}
                src={`/logos/${logo}`}
                alt="Client Logo"
                width={120}
                height={60}
                className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
