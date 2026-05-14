"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Diensten", href: "/diensten" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Certificeringen", href: "/certificeringen" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground border-b border-primary/10 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-display text-2xl font-semibold tracking-tight">
            Jansma <span className="text-accent">&</span> Dik
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-white/10 hover:text-white text-white/90 font-normal text-sm"
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link 
            href="/offerte" 
            className={cn(
              buttonVariants({ variant: "accent" }),
              "bg-accent hover:bg-accent/90 text-white font-medium rounded-md px-6 h-10 flex items-center"
            )}
          >
            Offerte aanvragen
          </Link>
        </div>

        {/* Mobile Nav would go here (using Sheet) */}
      </div>
    </header>
  );
}
