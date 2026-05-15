"use client";

import * as React from "react";
import {
  Search, MapPin, Clock, Euro, SlidersHorizontal,
  ChevronDown, UploadCloud, X,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────

type Job = {
  id: number;
  title: string;
  badge: string;
  badgeClass: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  fullDescription: string;
  requirements: string[];
  offer: string[];
  filters: { dienstverband: string; locatie: string; ervaring: string };
};

// ── Data ──────────────────────────────────────────────────────────────────────

const jobs: Job[] = [
  {
    id: 1,
    title: "Bezorger & Magazijnmedewerker",
    badge: "Nieuw",
    badgeClass: "bg-blue-50 text-blue-600",
    location: "Vlissingen",
    type: "Parttime (8-12u)",
    salary: "€ 2.500 - € 2.700 p/m",
    description: "Zowel onderweg als in het magazijn. Bezorg waszakken en materialen, en houd het magazijn op orde.",
    fullDescription:
      "In deze afwisselende functie ben je zowel onderweg als in het magazijn te vinden. Jij zorgt ervoor dat alles op rolletjes loopt, zodat je collega's hun werk goed kunnen doen. Je rijdt materialen en bestellingen rond, houdt het magazijn netjes en overzichtelijk, en rijdt auto's door de wasstraat. Je werkt nauw samen met een directe collega en stemt samen de werkzaamheden af.",
    requirements: [
      "Beschikbaar voor minimaal 2 ochtenden per week (di, wo en/of do)",
      "Beschikbaar voor 8 tot 12 uur per week",
      "Bereid om extra te werken bij afwezigheid van je collega",
      "Rijbewijs B",
      "Zelfstandig en neemt initiatief",
      "Betrouwbaar, klantvriendelijk en representatief",
      "Werkt graag samen en is flexibel ingesteld",
    ],
    offer: [
      "Parttime functie van 8 tot 12 uur per week",
      "Flexibele werktijden in overleg",
      "Afwisselende baan met veel zelfstandigheid",
      "Informele, collegiale werksfeer",
      "Salaris € 2.500 - € 2.700 p/m (o.b.v. fulltime)",
      "Onderdeel van een betrokken en gezellig team",
    ],
    filters: { dienstverband: "Parttime", locatie: "Vlissingen", ervaring: "Geen ervaring" },
  },
  {
    id: 2,
    title: "Schoonmaakmedewerker Vlissingen",
    badge: "Nieuw",
    badgeClass: "bg-blue-50 text-blue-600",
    location: "Vlissingen",
    type: "Parttime (20,5u)",
    salary: "€ 15,52 - € 17,05 p/u",
    description: "Schoonmaak op een schoollocatie in Vlissingen. Maandag t/m vrijdag van 15:00 tot 19:00.",
    fullDescription:
      "Je bent verantwoordelijk voor het schoon en netjes houden van de locatie, waaronder algemene ruimtes, werkplekken en sanitaire voorzieningen. Je zorgt voor een prettige omgeving waarin iedereen zich welkom voelt. Je werkt zelfstandig, maar kunt altijd rekenen op ondersteuning vanuit ons team.",
    requirements: [
      "Zelfstandig en staat stevig in je schoenen",
      "Aanpakker die uitdaging ziet in een schone omgeving",
      "Ervaring met schoonmaakwerk of wilt dit graag leren",
      "Beschikbaar ma t/m vr van 15:00 tot 19:00 (20,5u p/w)",
      "Beheersing van de Nederlandse of Engelse taal",
    ],
    offer: [
      "Gezellig en ondersteunend team",
      "Mogelijkheid om aanvullende uren te werken",
      "Salaris € 15,52 - € 17,05 bruto p/u (vanaf 20 jaar)",
      "8% vakantietoeslag, 26 vakantiedagen en eindejaarsuitkering van 5%",
      "Fijne, betrokken werksfeer binnen ons familiebedrijf",
    ],
    filters: { dienstverband: "Parttime", locatie: "Vlissingen", ervaring: "Geen ervaring" },
  },
  {
    id: 3,
    title: "Schoonmaakmedewerker Middelburg",
    badge: "Nieuw",
    badgeClass: "bg-blue-50 text-blue-600",
    location: "Middelburg",
    type: "Parttime (8u p/w)",
    salary: "€ 15,52 - € 17,05 p/u",
    description: "Schoonmaak bij een metaalbedrijf in Middelburg. Dinsdagochtend en donderdagochtend, 4 uur per ochtend.",
    fullDescription:
      "Bij dit metaalbedrijf in Middelburg zorg jij voor een schone en veilige werkomgeving. Je werkt op vaste tijden — dinsdagochtend en donderdagochtend vanaf 08:30 — en weet precies wat er van je verwacht wordt. Een rustige, zelfstandige functie met vaste collega's en duidelijke begeleiding.",
    requirements: [
      "Zelfstandig kunnen werken",
      "Aanpakker die uitdaging ziet in een schone omgeving",
      "Ervaring met schoonmaken",
      "Beschikbaar op dinsdag en donderdag ochtend vanaf 08:30 (4u p/ochtend)",
      "Beheersing van de Nederlandse taal",
    ],
    offer: [
      "Dynamische en inspirerende werkomgeving",
      "Gezellig en ondersteunend team",
      "Mogelijkheid om aanvullende uren te werken",
      "Salaris € 15,52 - € 17,05 p/u conform cao Schoonmaak",
      "8% vakantietoeslag, 26 vakantiedagen en eindejaarsuitkering van 5%",
      "Goede inwerkperiode en duidelijke begeleiding",
    ],
    filters: { dienstverband: "Parttime", locatie: "Middelburg", ervaring: "Ervaren" },
  },
  {
    id: 4,
    title: "Vliegende Keep – Flexibele Schoonmaker",
    badge: "Gezocht",
    badgeClass: "bg-orange-50 text-orange-600",
    location: "Walcheren & Beveland",
    type: "Parttime (20u)",
    salary: "€ 15,52 - € 17,05 p/u",
    description: "Geen vaste werkplek maar overal welkom. Jij bent de flexibele kracht die wij kunnen inzetten waar het nodig is.",
    fullDescription:
      "Als vliegende keep ben jij de flexibele kracht binnen ons schoonmaakteam. Je hebt geen vaste werkplek, maar wordt ingezet op verschillende locaties waar extra hulp nodig is. Jij houdt van afwisseling, werkt zelfstandig en schakelt makkelijk tussen projecten. Je weet meestal een week van tevoren waar je aan de slag gaat, maar kunt ook last-minute worden opgeroepen. Geen dag is hetzelfde — en dat is precies wat jij leuk vindt.",
    requirements: [
      "Ervaring in de schoonmaakbranche",
      "Rijbewijs B (verplicht)",
      "Flexibel inzetbaar tussen 06:00 - 21:00 uur",
      "Snel beschikbaar",
      "Zelfstandig en betrouwbaar",
    ],
    offer: [
      "Contract van 20u p/w, bruto uurloon € 15,52 - € 17,05",
      "Auto van de zaak (indien nodig)",
      "Uitbetaalde reistijd",
      "Afwisselend werk met flexibele werktijden",
      "Hecht team met betrokken leidinggevenden",
      "Werkkleding en een warm welkom",
    ],
    filters: { dienstverband: "Parttime", locatie: "Meerdere locaties", ervaring: "Ervaren" },
  },
  {
    id: 5,
    title: "Vakantiekracht Schoonmaak",
    badge: "Seizoen",
    badgeClass: "bg-green-50 text-green-700",
    location: "Meerdere locaties",
    type: "Oproepbasis",
    salary: "€ 15,29 p/u (all-in)",
    description: "Lekker bijverdienen in de vakanties? Werk op afwisselende locaties en maak je eigen planning.",
    fullDescription:
      "Je gaat aan de slag op verschillende locaties en helpt mee om alles schoon en netjes te houden. Je kunt zowel overdag als in de avond werken, dus er is altijd wel iets dat bij jou past. Het all-in uurloon betekent dat vakantiegeld en verlof al zijn inbegrepen — je ontvangt dit direct in je uurloon.",
    requirements: [
      "Je bent 18 jaar of ouder",
      "Flexibel inzetbaar in de vakantieperiode",
      "Houdt van aanpakken en werkt netjes",
      "Rijbewijs en eigen auto is een grote plus",
    ],
    offer: [
      "All-in uurloon vanaf € 15,29 (vanaf 18 jaar)",
      "Flexibel werk, goed te combineren met je vakantieplannen",
      "Afwisselende werklocaties en werkzaamheden",
    ],
    filters: { dienstverband: "Oproepbasis", locatie: "Meerdere locaties", ervaring: "Geen ervaring" },
  },
];

const filterGroups = [
  { key: "dienstverband", title: "Dienstverband", options: ["Parttime", "Oproepbasis"] },
  { key: "locatie", title: "Locatie", options: ["Middelburg", "Vlissingen", "Meerdere locaties"] },
  { key: "ervaring", title: "Ervaring", options: ["Geen ervaring", "Ervaren"] },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WerkenBijPage() {
  // Search & filter state
  const [keyword, setKeyword] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [activeFilters, setActiveFilters] = React.useState<Record<string, string[]>>({
    dienstverband: [],
    locatie: [],
    ervaring: [],
  });

  // Sheet state
  const [selectedJob, setSelectedJob] = React.useState<Job | null>(null);
  const [sheetOpen, setSheetOpen] = React.useState(false);

  const openJob = (job: Job) => {
    setSelectedJob(job);
    setSheetOpen(true);
  };

  const toggleFilter = (groupKey: string, option: string) => {
    setActiveFilters((prev) => {
      const current = prev[groupKey] ?? [];
      return {
        ...prev,
        [groupKey]: current.includes(option) ? current.filter((o) => o !== option) : [...current, option],
      };
    });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesKeyword =
      keyword === "" ||
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.description.toLowerCase().includes(keyword.toLowerCase());
    const matchesLocation =
      location === "" || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesFilters = filterGroups.every((group) => {
      const selected = activeFilters[group.key] ?? [];
      if (selected.length === 0) return true;
      return selected.includes(job.filters[group.key as keyof typeof job.filters]);
    });
    return matchesKeyword && matchesLocation && matchesFilters;
  });

  const activeFilterCount = Object.values(activeFilters).flat().length;

  const clearFilters = () => {
    setActiveFilters({ dienstverband: [], locatie: [], ervaring: [] });
    setKeyword("");
    setLocation("");
  };

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#004998]/5 pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#ea580c] mb-4">
              Werken bij Jansma &amp; Dik
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 font-display">
              Vind jouw nieuwe{" "}
              <span className="text-[#004998]">droombaan</span>{" "}
              vandaag
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Word onderdeel van het leukste schoonmaakbedrijf in Zeeland. Meer dan 80 collega's gingen je voor.
            </p>

            {/* Search bar */}
            <div className="bg-white p-2 rounded-xl sm:rounded-full shadow-md flex flex-col sm:flex-row gap-2 border border-slate-200">
              <div className="flex items-center gap-2 flex-1 px-3 sm:px-4 bg-slate-50 sm:bg-transparent rounded-lg sm:rounded-none">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Functie of trefwoord..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none py-2.5"
                />
              </div>
              <div className="hidden sm:block w-px bg-slate-200 my-1" />
              <div className="flex items-center gap-2 flex-1 px-3 sm:px-4 bg-slate-50 sm:bg-transparent rounded-lg sm:rounded-none">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Zeeland"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none py-2.5"
                />
              </div>
              <button className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-3 rounded-lg sm:rounded-full font-semibold text-sm transition-colors shrink-0">
                Zoeken
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { value: "80+", label: "Medewerkers" },
                { value: "300+", label: "Locaties" },
                { value: "40jr", label: "Ervaring" },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-[#004998] font-display">{value}</span>
                  <span className="text-sm text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-[80%] aspect-[4/5] bg-slate-200 rounded-[3rem] rotate-3 overflow-hidden shadow-2xl">
              <img
                src="/images/why-us-banner-image.jpeg"
                alt="Team Jansma & Dik aan het werk"
                className="-rotate-3 scale-110 w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 -rotate-3 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4 whitespace-nowrap border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#004998]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#004998] font-extrabold text-xs">J&D</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Familiebedrijf</p>
                  <p className="text-xs text-slate-500">Sinds 1983 • Vlissingen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-slate-500" />
                  <h2 className="text-lg font-bold text-slate-900">Filters</h2>
                  {activeFilterCount > 0 && (
                    <span className="bg-[#004998] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </div>
                {activeFilterCount > 0 && (
                  <button onClick={clearFilters} className="text-xs text-slate-500 hover:text-[#ea580c] transition-colors font-medium">
                    Wis alles
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {filterGroups.map((group, gi) => (
                  <div key={group.key} className={cn(gi > 0 && "pt-6 border-t border-slate-100")}>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">{group.title}</h3>
                    <div className="space-y-2.5">
                      {group.options.map((option) => {
                        const checked = (activeFilters[group.key] ?? []).includes(option);
                        return (
                          <label key={option} className="flex items-center gap-3 cursor-pointer group">
                            <div
                              onClick={() => toggleFilter(group.key, option)}
                              className={cn(
                                "w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all",
                                checked ? "bg-[#004998] border-[#004998]" : "border-slate-300 group-hover:border-[#004998]"
                              )}
                            >
                              {checked && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                                  <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                            <span className={cn("text-sm transition-colors", checked ? "text-slate-900 font-medium" : "text-slate-600 group-hover:text-slate-900")}>
                              {option}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Job Grid */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 font-display">Laatste Vacatures</h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  {filteredJobs.length} {filteredJobs.length === 1 ? "vacature" : "vacatures"} gevonden
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl px-4 py-2.5 hover:border-slate-300 transition-colors shrink-0 shadow-sm">
                Nieuwste eerst
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className={cn("text-xs font-bold px-2.5 py-1 rounded-full", job.badgeClass)}>
                        {job.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#004998]/8 border border-[#004998]/10 flex items-center justify-center shrink-0">
                        <span className="text-[#004998] font-extrabold text-[10px] tracking-tight">J&D</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-display group-hover:text-[#004998] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">{job.description}</p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />{job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />{job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Euro className="w-3.5 h-3.5 text-slate-400 shrink-0" />{job.salary}
                      </span>
                    </div>

                    <hr className="my-5 border-slate-100" />

                    <button
                      onClick={() => openJob(job)}
                      className="w-full text-center border-2 border-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl hover:border-[#004998] hover:text-[#004998] hover:bg-[#004998]/5 transition-all text-sm"
                    >
                      Bekijk Vacature →
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center bg-white border border-slate-200 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Geen vacatures gevonden</h3>
                <p className="text-sm text-slate-500 mb-6 max-w-xs">
                  Pas je filters aan of verwijder je zoekopdracht om meer resultaten te zien.
                </p>
                <button onClick={clearFilters} className="text-sm font-semibold text-[#004998] hover:underline">
                  Wis alle filters
                </button>
              </div>
            )}

            {/* CTA Banner */}
            <div className="mt-10 bg-[#004998] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display mb-1">Geen passende vacature gevonden?</h3>
                <p className="text-white/70 text-sm">Stuur een open sollicitatie — we zijn altijd op zoek naar goed personeel.</p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Open sollicitatie →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Job Detail Modal ───────────────────────────────────────────────── */}
      <Dialog open={sheetOpen} onOpenChange={setSheetOpen}>
        <DialogContent
          showCloseButton={false}
          className="top-3 left-3 right-3 bottom-3 sm:top-4 sm:left-4 sm:right-4 sm:bottom-4 translate-x-0 translate-y-0 w-auto max-w-none sm:max-w-none flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden overflow-x-hidden p-0 gap-0 bg-white ring-0 border border-slate-200 shadow-2xl"
        >
          {selectedJob && (
            <>
              {/* ── Top bar ────────────────────────────────────────────── */}
              <div className="shrink-0 flex items-center justify-between gap-4 px-6 sm:px-8 py-4 border-b border-slate-100 bg-white">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#004998]/8 border border-[#004998]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#004998] font-extrabold text-[10px]">J&D</span>
                  </div>
                  <div className="min-w-0">
                    <DialogTitle className="text-base font-bold text-slate-900 leading-tight truncate">
                      {selectedJob.title}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      {selectedJob.location} — {selectedJob.type} — {selectedJob.salary}
                    </DialogDescription>
                    <div className="flex flex-wrap gap-3 mt-0.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />{selectedJob.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400 shrink-0" />{selectedJob.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Euro className="w-3 h-3 text-slate-400 shrink-0" />{selectedJob.salary}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSheetOpen(false)}
                  className="shrink-0 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                  aria-label="Sluiten"
                >
                  <X className="w-4 h-4 text-slate-600" />
                </button>
              </div>

              {/* ── Body — single scroll on mobile, split on lg ────────── */}
              <div className="flex-1 overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row min-h-0">

                {/* Left — Job details */}
                <div className="lg:flex-1 lg:overflow-y-auto px-6 sm:px-10 py-8 lg:border-r border-slate-100">
                  <span className={cn("text-xs font-bold px-2.5 py-1 rounded-full mb-6 inline-block", selectedJob.badgeClass)}>
                    {selectedJob.badge}
                  </span>

                  <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-display leading-tight mb-2">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mb-8 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />{selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />{selectedJob.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Euro className="w-4 h-4 text-slate-400 shrink-0" />{selectedJob.salary}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Functieomschrijving
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-8">
                    {selectedJob.fullDescription}
                  </p>

                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Wat wij vragen
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {selectedJob.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ea580c] shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Wat wij bieden
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.offer.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#004998] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — Application form */}
                <div className="lg:w-[420px] lg:shrink-0 lg:overflow-y-auto px-6 sm:px-8 py-8 bg-slate-50/60 border-t lg:border-t-0 border-slate-100">
                  <h2 className="text-2xl font-extrabold text-[#004998] font-display mb-1">
                    Solliciteer direct
                  </h2>
                  <p className="text-sm text-slate-500 mb-6">Vul het formulier in — we reageren binnen één werkdag.</p>

                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="voornaam" className="text-slate-700 font-semibold text-xs uppercase tracking-wide">Voornaam</Label>
                        <Input id="voornaam" placeholder="Jan" className="bg-white" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="achternaam" className="text-slate-700 font-semibold text-xs uppercase tracking-wide">Achternaam</Label>
                        <Input id="achternaam" placeholder="de Vries" className="bg-white" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-slate-700 font-semibold text-xs uppercase tracking-wide">E-mailadres</Label>
                      <Input id="email" type="email" placeholder="jan@email.nl" className="bg-white" />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="telefoon" className="text-slate-700 font-semibold text-xs uppercase tracking-wide">Telefoonnummer</Label>
                      <Input id="telefoon" type="tel" placeholder="06 12345678" className="bg-white" />
                    </div>

                    <div
                      className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-[#004998] hover:bg-white transition-colors cursor-pointer"
                      onClick={() => document.getElementById("cv-upload")?.click()}
                    >
                      <input id="cv-upload" type="file" accept=".pdf,.doc,.docx" className="hidden" />
                      <UploadCloud className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                      <p className="text-sm font-bold text-slate-700 mb-0.5">Upload je CV</p>
                      <p className="text-xs text-slate-400">PDF of Word, max 5MB</p>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="motivatie" className="text-slate-700 font-semibold text-xs uppercase tracking-wide">
                        Motivatie <span className="text-slate-400 normal-case font-normal">(optioneel)</span>
                      </Label>
                      <Textarea
                        id="motivatie"
                        placeholder="Vertel ons waarom jij de juiste persoon bent..."
                        className="min-h-[100px] resize-none bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white py-4 text-base rounded-xl font-bold shadow-md hover:shadow-lg transition-all mt-2"
                    >
                      Verstuur Sollicitatie
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      Door te solliciteren ga je akkoord met onze{" "}
                      <Link href="/privacy" className="underline hover:text-slate-600 transition-colors">
                        privacyverklaring
                      </Link>.
                    </p>
                  </form>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
