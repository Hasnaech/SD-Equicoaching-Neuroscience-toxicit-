import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const INSTAGRAM = "https://www.instagram.com/sarahdabancens/";
const LINKEDIN = "https://www.linkedin.com/in/sarah-dabancens/";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#1a0a1e", color: "rgba(255,255,255,0.7)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo complet */}
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="SD Équicoaching"
                style={{
                  height: "140px",
                  width: "auto",
                  mixBlendMode: "screen",
                }}
              />
            </div>
            <p className="text-sm text-white/50 mb-5 leading-relaxed">
              Manager de Transition · Neurosciences · Équicoaching
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#cda540] hover:border-[#cda540] transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#cda540] hover:border-[#cda540] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="qualiopi-badge">Qualiopi</span>
              <span
                className="inline-flex items-center border border-white/20 text-white/50 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded"
                style={{ fontSize: "0.72rem" }}
              >
                ICF
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Accueil" },
                { href: "/blog", label: "Blog" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[#cda540] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offres */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Offres
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/formation-leadership"
                  className="text-sm text-white/50 hover:text-[#cda540] transition-colors"
                >
                  Formation Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/teambuilding-equicoaching"
                  className="text-sm text-white/50 hover:text-[#cda540] transition-colors"
                >
                  Teambuilding Équicoaching
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-xs text-white/30">Éligible OPCO</span>
              </li>
              <li>
                <span className="text-xs text-white/30">
                  12 régions · 200+ centres
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-[#cda540] mt-0.5 shrink-0" />
                <a
                  href="tel:0643455145"
                  className="text-sm text-white/50 hover:text-[#cda540] transition-colors"
                >
                  06 43 45 51 45
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-[#cda540] mt-0.5 shrink-0" />
                <a
                  href="mailto:sarah.dabancens@sd-equicoaching.fr"
                  className="text-sm text-white/50 hover:text-[#cda540] transition-colors break-all"
                >
                  sarah.dabancens@sd-equicoaching.fr
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#cda540] mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">
                  Ranch Horse Paradise
                  <br />
                  Boutigny-sur-Essonne
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SD Équicoaching : Tous droits réservés
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
