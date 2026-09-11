import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 items-center">

        {/* Column 1: Content & Form */}
        <div>
          <div className="mb-8">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-2 block">
              Contact
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mb-4 font-display leading-tight">
              Klaar voor een schone werkomgeving?
            </h2>
            <p className="text-lg text-slate-600">
              Neem contact op voor een vrijblijvende offerte. Binnen één werkdag reactie.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-900 font-semibold">Naam</Label>
                <Input id="name" placeholder="Uw volledige naam" className="bg-white border-slate-200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-900 font-semibold">Telefoonnummer</Label>
                <Input id="phone" type="tel" placeholder="06 12345678" className="bg-white border-slate-200" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-900 font-semibold">E-mailadres</Label>
              <Input id="email" type="email" placeholder="uw@emailadres.nl" className="bg-white border-slate-200" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-slate-900 font-semibold">Dienst</Label>
              <Select>
                <SelectTrigger id="service" className="bg-white border-slate-200">
                  <SelectValue placeholder="Kies een dienst..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kantoor">Kantoorschoonmaak</SelectItem>
                  <SelectItem value="industrie">Industrie & bouw</SelectItem>
                  <SelectItem value="zorg">Zorg & scholen</SelectItem>
                  <SelectItem value="makelaardij">Makelaardij & VVE's</SelectItem>
                  <SelectItem value="specialistisch">Specialistische reiniging</SelectItem>
                  <SelectItem value="maatwerk">Maatwerk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-900 font-semibold">Uw bericht</Label>
              <Textarea
                id="message"
                placeholder="Hoe kunnen we u helpen?"
                className="bg-white border-slate-200 min-h-[120px] resize-y"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
              <Button
                type="submit"
                variant="accent"
                className="h-auto w-full sm:w-auto px-8 py-4 text-base rounded-md transition-colors duration-150"
              >
                Offerte aanvragen
              </Button>
              <Link
                href="tel:0118461892"
                className="flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors duration-150"
              >
                <Phone className="w-5 h-5 text-primary" />
                Of bel ons: 0118 - 461892
              </Link>
            </div>
          </form>
        </div>

        {/* Column 2: Map */}
        <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[600px] bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          <iframe
            src="https://maps.google.com/maps?q=Jansma%20%26%20Dik%20Schoonmaakbedrijf%2C%20Vlissingen&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locatie Jansma & Dik"
          />

          {/* Floating Contact Card */}
          <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:w-80 bg-white p-6 rounded-xl border border-slate-200 z-10">
            <h3 className="font-display font-medium text-slate-900 text-lg mb-4">
              Jansma <span className="text-accent">&</span> Dik Schoonmaakbedrijf
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-slate-600">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Stroomweg 14<br />
                  4382 WX Vlissingen
                </p>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <Link href="tel:0118461892" className="text-sm font-medium hover:text-primary transition-colors duration-150">
                  0118 - 461892
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
