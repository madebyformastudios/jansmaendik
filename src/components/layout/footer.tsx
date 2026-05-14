import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "Diensten overzicht", href: "/diensten" },
    { name: "Kantoor", href: "/diensten/kantoor" },
    { name: "Industrie & bouw", href: "/diensten/industrie-bouw" },
    { name: "Zorg & scholen", href: "/diensten/zorg-scholen" },
    { name: "Makelaardij & VVE's", href: "/diensten/makelaardij" },
    { name: "Maatwerk", href: "/diensten/maatwerk" },
  ],
  company: [
    { name: "Over ons", href: "/over-ons" },
    { name: "Werken bij", href: "/werken-bij" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Kwaliteit", href: "/kwaliteit" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/60 py-16 px-6 text-sm">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <div className="shrink-0">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo-no-bg.svg" 
                alt="Jansma & Dik Logo" 
                width={160} 
                height={55} 
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
            </Link>
          </div>
          <p className="leading-relaxed">
            Schoonmaakbedrijf Jansma & Dik B.V.<br />
            Langezelestraat 4<br />
            4382 NJ Vlissingen
          </p>
          <div className="space-y-1">
            <p>T: <Link href="tel:0118461892" className="hover:text-white transition-colors">0118 - 461892</Link></p>
            <p>E: <Link href="mailto:info@jansmadik.nl" className="hover:text-white transition-colors">info@jansmadik.nl</Link></p>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.1em]">
            Onze Diensten
          </h4>
          <ul className="space-y-3">
            {footerLinks.services.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-6">
          <h4 className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.1em]">
            Het Bedrijf
          </h4>
          <ul className="space-y-3">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Keurmerken */}
        <div className="space-y-6">
          <h4 className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.1em]">
            Gecertificeerd
          </h4>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 group hover:border-white/20 transition-colors">
              <div className="text-white font-bold text-xs mb-1">KEURMERK SCHOON</div>
              <p className="text-[10px] leading-tight text-white/40 group-hover:text-white/60 transition-colors">
                Gecertificeerd lid van de Vereniging Schoonmaak Research.
              </p>
            </div>
            {/* Additional badges can go here */}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px]">
        <p>&copy; {new Date().getFullYear()} Jansma & Dik B.V. • Betrokken, betrouwbaar en professioneel.</p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookiebeleid</Link>
          <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
