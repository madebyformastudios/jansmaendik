import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Kantoorschoonmaak", href: "/diensten/kantoor" },
    { name: "Glasbewassing", href: "/diensten/glasbewassing" },
    { name: "Vloeronderhoud", href: "/diensten/vloeronderhoud" },
    { name: "Industriële reiniging", href: "/diensten/industrieel" },
  ],
  company: [
    { name: "Over ons", href: "/over-ons" },
    { name: "Certificeringen", href: "/certificeringen" },
    { name: "Werken bij", href: "/vacatures" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/60 py-16 px-6 text-sm">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="font-display text-xl font-semibold text-white tracking-tight">
            Jansma <span className="text-accent">&</span> Dik
          </div>
          <p className="leading-relaxed">
            Schoonmaakbedrijf Jansma & Dik B.V.<br />
            Langezelestraat 4<br />
            4382 NJ Vlissingen
          </p>
          <p>
            T: 0118 - 461892<br />
            E: info@jansmadik.nl
          </p>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="text-[11px] font-medium text-white/50 uppercase tracking-[0.06em]">
            Diensten
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
          <h4 className="text-[11px] font-medium text-white/50 uppercase tracking-[0.06em]">
            Bedrijf
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
          <h4 className="text-[11px] font-medium text-white/50 uppercase tracking-[0.06em]">
            Keurmerken
          </h4>
          <div className="bg-white p-4 rounded-md inline-block">
            {/* Placeholder for Keurmerk logo */}
            <div className="text-primary font-bold text-xs">KEURMERK SCHOON</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[12px]">
        <p>&copy; {new Date().getFullYear()} Jansma & Dik B.V. Alle rechten voorbehouden.</p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookiebeleid</Link>
        </div>
      </div>
    </footer>
  );
}
