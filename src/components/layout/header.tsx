"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "Kantoor",
    description: "Professionele reiniging van kantoorruimtes en zakelijke omgevingen.",
    href: "/diensten/kantoor",
    image: "/images/kantoor-schoonmaak.jpeg",
  },
  {
    title: "Industrie & bouw",
    description: "Gespecialiseerde reiniging voor bouwplaatsen en industriële complexen.",
    href: "/diensten/industrie-bouw",
    image: "/images/industrie-bouw.jpeg",
  },
  {
    title: "Zorg & scholen",
    description: "Hygiënische schoonmaak voor zorginstellingen en onderwijsgebouwen.",
    href: "/diensten/zorg-scholen",
    image: "/images/zorg-scholen.jpeg",
  },
  {
    title: "Makelaardij & VVE's",
    description: "Schoonmaakonderhoud voor gedeelde ruimtes en verkoopklaar maken.",
    href: "/diensten/makelaardij",
    image: "/images/makelaardij-vve.jpeg",
  },
  {
    title: "Maatwerk",
    description: "Specifieke schoonmaakoplossingen afgestemd op uw unieke behoeften.",
    href: "/diensten/maatwerk",
    image: "/images/maatwerk.jpeg",
  },
];

const mainLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Kwaliteit", href: "/kwaliteit" },
  { name: "Over ons", href: "/over-ons" },
  { name: "Werken bij", href: "/werken-bij" },
  { name: "Contact", href: "/contact" },
];

// Origin of the circle animation: center of the 44px (w-11) button
// Button is px-4 (16px) + mr-3 (12px) from the right edge → center at 16+12+22=50px from right
// Header is h-20 (80px) → button center at 40px from top
const CIRCLE_ORIGIN = "calc(100% - 50px) 40px";

export function Header() {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout>>(null);

  // Scroll detection
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleOpen = React.useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }, []);

  const closeMenu = React.useCallback(() => setMenuOpen(false), []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled
        ? "lg:bg-white/95 lg:backdrop-blur-sm lg:border-b lg:border-slate-100 lg:shadow-sm"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">

        {/* Logo — sits above the mobile overlay */}
        <div className={cn(
          "flex shrink-0 items-center relative z-[70] transition-all duration-300",
          isScrolled && !menuOpen ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : "opacity-100"
        )}>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-no-bg.svg"
              alt="Jansma & Dik Logo"
              width={140}
              height={48}
              className={cn(
                "h-10 w-auto transition-all duration-300",
                menuOpen && "brightness-0 invert"
              )}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <button
                  onMouseEnter={handleOpen}
                  onMouseLeave={handleClose}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent font-medium text-slate-600 hover:text-slate-900 group/diensten-trigger"
                  )}
                >
                  Diensten
                  <ChevronDown
                    className={cn(
                      "relative top-px ml-1 size-3 transition-transform duration-300",
                      servicesOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
              </NavigationMenuItem>

              {mainLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    render={<Link href={link.href} />}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent font-medium text-slate-600 hover:text-slate-900 relative"
                    )}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="tel:0118461892"
            className="flex items-center gap-2 font-medium transition-colors bg-white hover:bg-slate-50 text-black px-4 py-2 rounded-md shadow-sm border border-slate-100"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">0118 - 461892</span>
          </Link>
          <Link
            href="/offerte"
            className={cn(
              buttonVariants({ variant: "accent" }),
              "shadow-sm hover:translate-y-[-1px] transition-all"
            )}
          >
            Offerte Aanvragen
          </Link>
        </div>

        {/* Mobile Hamburger — always above the overlay (z-[70]) */}
        <div className="lg:hidden relative z-[70] mr-3">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="w-11 h-11 rounded-full bg-accent shadow-[0_4px_14px_rgba(234,88,12,0.35)] flex items-center justify-center"
          >
            {/* Three bars → X */}
            <div className="w-5 h-[14px] flex flex-col justify-between">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[2px] w-full bg-white origin-center rounded-full"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-full bg-white origin-center rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[2px] w-full bg-white origin-center rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile Full-Screen Menu Overlay ─────────────────────────────────────
          Sits at z-[60] (below the z-[70] button and logo).
          The circle clip-path expands from the centre of the hamburger button. */}
      <motion.div
        initial={false}
        animate={{
          clipPath: menuOpen
            ? `circle(200% at ${CIRCLE_ORIGIN})`
            : `circle(0px at ${CIRCLE_ORIGIN})`,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "lg:hidden fixed inset-0 z-[60] bg-primary overflow-hidden",
          !menuOpen && "pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        {/* Content fades in after circle has expanded */}
        <motion.div
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.25, delay: menuOpen ? 0.3 : 0 }}
          className="flex flex-col h-full px-6 overflow-y-auto"
        >
          {/* Sticky shield: keeps header area covered as content scrolls up */}
          <div className="sticky top-0 h-20 -mx-6 bg-primary shrink-0 z-10" />

          {/* Diensten sub-section */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Diensten
            </p>
            <div className="flex flex-col">
              <Link
                href="/diensten"
                onClick={closeMenu}
                className="text-base font-semibold text-white/70 hover:text-white py-2 transition-colors"
              >
                Overzicht alle diensten
              </Link>
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  onClick={closeMenu}
                  className="text-base font-medium text-white/70 hover:text-white py-2 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/15 mb-4" />

          {/* Main links */}
          <nav className="flex flex-col">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-bold text-white hover:text-white/75 py-3 transition-colors flex items-center justify-between group"
              >
                {link.name}
                <span className="text-white/30 group-hover:text-white/50 transition-colors text-xl leading-none">
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="mt-auto pt-10 pb-10 flex flex-col gap-3">
            <Link
              href="tel:0118461892"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-md border border-white/25 text-white font-medium hover:bg-white/10 transition-colors text-sm"
            >
              <Phone className="w-4 h-4 shrink-0" />
              0118 - 461892
            </Link>
            <Link
              href="/offerte"
              onClick={closeMenu}
              className={cn(buttonVariants({ variant: "accent" }), "w-full justify-center")}
            >
              Offerte Aanvragen
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Desktop Mega Menu ────────────────────────────────────────────────── */}
      <div
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        className={cn(
          "absolute top-full inset-x-0 w-full bg-white border-b border-slate-100 shadow-2xl",
          "hidden lg:block",
          "transition-[opacity,transform] duration-200 ease-out origin-top",
          servicesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        )}
        aria-hidden={!servicesOpen}
      >
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-50">
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-900">Onze Diensten</h2>
              <p className="text-slate-500 text-sm mt-1">Ontdek onze professionele schoonmaakoplossingen voor elke sector.</p>
            </div>
            <Link
              href="/diensten"
              className="group flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Bekijk alle diensten
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-5 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="flex flex-col gap-5 group"
              >
                <div className="aspect-[4/3] w-full rounded-2xl bg-slate-50 overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                  <span className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {service.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
