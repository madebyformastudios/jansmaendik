import Image from "next/image";
import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="relative bg-white overflow-hidden min-h-[640px] h-dvh flex items-center pt-20 lg:pt-28 xl:pt-36">

      {/* Background diagonal — narrow accent strip on mobile, full diagonal on desktop */}
      <div
        className="absolute inset-0 bg-primary [clip-path:polygon(0%_68%,100%_52%,100%_100%,0%_100%)] lg:[clip-path:polygon(76%_0,100%_0,100%_100%,54%_100%)] z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid lg:grid-cols-12 items-center">

        {/* Left Column: Text & CTAs — full width on mobile */}
        <div className="lg:col-span-7 pt-14 pb-32 lg:pt-[clamp(1rem,3dvh,2.5rem)] lg:pb-[clamp(6rem,13dvh,8rem)] xl:pb-[clamp(7rem,14dvh,10rem)] lg:pr-20 xl:pr-28">
          <h1 className="text-[2rem] sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-slate-900 tracking-tight leading-[1.15] font-display">
            De schoonmaakpartner van{" "}
            <span className="relative inline-block z-10">
              Zeeland
              <svg
                aria-hidden="true"
                viewBox="0 0 200 24"
                preserveAspectRatio="none"
                className="absolute left-[-3%] w-[106%] overflow-visible pointer-events-none"
                style={{ bottom: "-0.05em", height: "0.3em" }}
              >
                <path
                  d="M0,8 C28,2 72,13 112,7 C150,2 176,10 200,7 L200,18 C176,22 150,15 112,20 C72,25 28,18 0,19 Z"
                  fill="#EA5E1D"
                  opacity="0.72"
                />
              </svg>
            </span>
            {" "}sinds 1983.
          </h1>

          <p className="text-base lg:text-lg text-slate-600 mt-6 lg:mt-8 leading-relaxed font-sans max-w-lg">
            Betrouwbaar, gecertificeerd en altijd flexibel. Voor kantoren, scholen, zorg en industrie. 80 vaste medewerkers, 300+ locaties.
          </p>

          <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Button
              render={<Link href="/offerte" />}
              nativeButton={false}
              variant="accent"
              className="h-auto px-8 py-4 text-base lg:text-lg rounded-md transition-colors duration-150 justify-center"
            >
              Vrijblijvende offerte aanvragen
            </Button>
            {/* Mobile: button style matching the nav */}
            <Link
              href="tel:0118461892"
              className="lg:hidden flex items-center justify-center gap-2 font-medium bg-white hover:bg-slate-50 text-slate-900 px-5 py-3 rounded-md border border-slate-200 transition-colors duration-150 text-sm"
            >
              <Phone className="w-4 h-4 text-primary shrink-0" />
              0118 - 461892
            </Link>

            {/* Desktop: icon-circle style */}
            <Link
              href="tel:0118461892"
              className="hidden lg:flex items-center gap-3 text-slate-800 font-semibold text-lg hover:text-primary transition-colors duration-150 group px-4 py-2"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-150">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              0118 - 461892
            </Link>
          </div>

          <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-3 bg-white border border-primary/30 rounded-full px-4 py-2">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold text-primary">Keurmerk Schoon</span>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">NEN 4400-1</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visuals — hidden on mobile */}
        <div className="hidden lg:flex lg:col-span-5 relative h-[min(700px,73dvh)] xl:h-[min(820px,77dvh)] items-end justify-end">
          {/* Orange Circle */}
          <div
            className="absolute top-[20%] right-[40%] w-[min(350px,38dvh)] h-[min(350px,38dvh)] bg-accent rounded-full z-10"
            aria-hidden="true"
          />

          {/* Cutout Image */}
          <div className="relative z-20 h-[115%] w-auto flex items-end overflow-visible -translate-x-12">
            <Image
              src="/cleaning-lady-hero.svg"
              alt="Schoonmaak specialist Jansma & Dik"
              width={800}
              height={1000}
              className="h-full w-auto object-contain object-bottom origin-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* Social Proof Strip - Infinite Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 py-5 lg:py-8 z-40 overflow-hidden">
        <div className="w-full flex">
          <div className="flex min-w-full shrink-0 animate-ticker items-center gap-8 lg:gap-12 px-6">
            {clientLogos.map((logo, index) => (
              <Image
                key={index}
                src={`/logos/${logo}`}
                alt="Client Logo"
                width={120}
                height={60}
                className="h-8 lg:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-150"
              />
            ))}
            {clientLogos.map((logo, index) => (
              <Image
                key={`dup-${index}`}
                src={`/logos/${logo}`}
                alt="Client Logo"
                width={120}
                height={60}
                className="h-8 lg:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-150"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
