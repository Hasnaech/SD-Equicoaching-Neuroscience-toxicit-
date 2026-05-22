"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import CalendlyButton from "./CalendlyButton";
import imgLogo from "@/assets/logo.svg";

const INSTAGRAM = "https://www.instagram.com/sarahdabancens/";
const LINKEDIN = "https://www.linkedin.com/in/sarah-dabancens/";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [offresOpen, setOffresOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openOffres = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOffresOpen(true);
  };
  const closeOffres = () => {
    closeTimer.current = setTimeout(() => setOffresOpen(false), 120);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a0a1e]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src={imgLogo}
              alt="SD Équicoaching"
              height={48}
              className="h-10 lg:h-12 w-auto"
            />
            <div className="flex flex-col leading-none">
              <span
                className="text-white font-semibold text-sm tracking-wide"
                style={{ fontFamily: "Georgia, serif" }}
              >
                SD Équicoaching
              </span>
              <span
                className="text-[#cda540] text-[10px] tracking-widest uppercase mt-0.5"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Neurosciences
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={openOffres}
              onMouseLeave={closeOffres}
            >
              <button className="flex items-center gap-1 text-white/90 hover:text-[#cda540] transition-colors font-medium text-sm py-2">
                Offres
                <ChevronDown
                  size={14}
                  className={`transition-transform ${offresOpen ? "rotate-180" : ""}`}
                />
              </button>
              {offresOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#1a0a1e] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  onMouseEnter={openOffres}
                  onMouseLeave={closeOffres}
                  style={{ marginTop: "-2px", paddingTop: "6px" }}
                >
                  <Link
                    href="/formation-leadership"
                    className="block px-5 py-3.5 text-sm text-white/80 hover:text-[#cda540] hover:bg-white/5 transition-colors border-b border-white/5"
                    onClick={() => setOffresOpen(false)}
                  >
                    <span className="font-medium">Formation Leadership</span>
                    <span className="block text-xs text-white/40 mt-0.5">
                      Inter-entreprise · Qualiopi · OPCO
                    </span>
                  </Link>
                  <Link
                    href="/teambuilding-equicoaching"
                    className="block px-5 py-3.5 text-sm text-white/80 hover:text-[#cda540] hover:bg-white/5 transition-colors border-b border-white/5"
                    onClick={() => setOffresOpen(false)}
                  >
                    <span className="font-medium">Teambuilding Équicoaching</span>
                    <span className="block text-xs text-white/40 mt-0.5">
                      Demi-journée ou journée complète
                    </span>
                  </Link>
                  <Link
                    href="/neurosciences-managers"
                    className="block px-5 py-3.5 text-sm text-white/80 hover:text-[#cda540] hover:bg-white/5 transition-colors"
                    onClick={() => setOffresOpen(false)}
                  >
                    <span className="font-medium">Neurosciences pour Managers</span>
                    <span className="block text-xs text-white/40 mt-0.5">
                      Formation en ligne · Accompagnement individuel
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-white/90 hover:text-[#cda540] transition-colors font-medium text-sm">Blog</Link>
            <Link href="/a-propos" className="text-white/90 hover:text-[#cda540] transition-colors font-medium text-sm">À propos</Link>
            <Link href="/contact" className="text-white/90 hover:text-[#cda540] transition-colors font-medium text-sm">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#cda540] transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#cda540] transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <CalendlyButton variant="primary" size="sm">Réserver un diagnostic</CalendlyButton>
          </div>

          <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1a0a1e] border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-1">
            <div className="py-2">
              <button className="flex items-center gap-2 text-white/80 font-medium text-base w-full" onClick={() => setOffresOpen(!offresOpen)}>
                Offres
                <ChevronDown size={14} className={`transition-transform ${offresOpen ? "rotate-180" : ""}`} />
              </button>
              {offresOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  <Link href="/formation-leadership" className="text-sm text-white/60 hover:text-[#cda540] transition-colors py-1" onClick={() => setMenuOpen(false)}>Formation Leadership</Link>
                  <Link href="/teambuilding-equicoaching" className="text-sm text-white/60 hover:text-[#cda540] transition-colors py-1" onClick={() => setMenuOpen(false)}>Teambuilding Équicoaching</Link>
                  <Link href="/neurosciences-managers" className="text-sm text-white/60 hover:text-[#cda540] transition-colors py-1" onClick={() => setMenuOpen(false)}>Neurosciences pour Managers</Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="py-2 text-white/80 hover:text-[#cda540] transition-colors font-medium" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/a-propos" className="py-2 text-white/80 hover:text-[#cda540] transition-colors font-medium" onClick={() => setMenuOpen(false)}>À propos</Link>
            <Link href="/contact" className="py-2 text-white/80 hover:text-[#cda540] transition-colors font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
            <div className="pt-4 flex items-center gap-4">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#cda540] transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#cda540] transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
            <div className="pt-2">
              <CalendlyButton variant="primary" size="md" className="w-full">Réserver un diagnostic</CalendlyButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}