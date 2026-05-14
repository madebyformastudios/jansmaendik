"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export function Header() {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout>>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = React.useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm" 
        : "bg-transparent border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        {/* Left: Logo */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-no-bg.svg"
              alt="Jansma & Dik Logo"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {/* Diensten trigger — state managed here, menu rendered outside the popup system */}
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
              ))}            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Actions */}
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

        {/* Mobile: Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-slate-600">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-0">
              <SheetHeader className="px-6 text-left border-b pb-6">
                <SheetTitle className="font-display text-xl font-semibold">
                  Jansma <span className="text-accent">&</span> Dik
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-6">
                <div className="px-6 py-2">
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Diensten
                  </h3>
                  <div className="flex flex-col gap-3">
                    <Link href="/diensten" className="text-sm font-semibold text-primary">
                      Overzicht alle diensten
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-slate-100 my-4 mx-6" />
                {mainLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-6 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 flex items-center justify-between"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-auto px-6 pt-10 pb-6 flex flex-col gap-4">
                  <Link
                    href="tel:0118461892"
                    className={cn(buttonVariants({ variant: "outline" }), "w-full justify-start gap-3")}
                  >
                    <Phone className="w-4 h-4" />
                    0118 - 461892
                  </Link>
                  <Link
                    href="/offerte"
                    className={cn(buttonVariants({ variant: "accent" }), "w-full")}
                  >
                    Offerte Aanvragen
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mega Menu — rendered as absolute child of the sticky header, completely outside
          Base UI's portal/popup system so no animated ancestor can break its positioning */}
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
