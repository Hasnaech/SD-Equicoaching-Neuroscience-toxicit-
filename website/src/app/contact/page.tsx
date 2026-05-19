import type { Metadata } from "next";
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import CalendlyButton from "@/components/CalendlyButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Contact | SD Équicoaching",
  description:
    "Contactez SD Équicoaching pour un diagnostic préliminaire gratuit. Téléphone, email, ou réserver directement via Calendly.",
  openGraph: {
    title: "Contact — SD Équicoaching",
    description: "Prenez contact avec Sarah Dabancens pour un diagnostic préliminaire gratuit.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "#1a0a1e" }}
      >
        <GradientBlob />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Contactez-nous
            </h1>
            <p className="text-white/60 text-lg">
              Pas de formulaire. Juste un échange direct.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── CONTACT INFO ─────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: contact details */}
            <SectionReveal direction="left">
              <h2
                className="text-3xl font-bold mb-10"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#1a0a1e",
                }}
              >
                Toutes nos coordonnées
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#78427f", color: "white" }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Téléphone</p>
                    <a
                      href="tel:0643455145"
                      className="text-lg font-bold transition-colors hover:underline"
                      style={{ color: "#78427f" }}
                    >
                      06 43 45 51 45
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Réponse sous 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#78427f", color: "white" }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href="mailto:sarah.dabancens@sd-equicoaching.fr"
                      className="font-bold transition-colors hover:underline break-all"
                      style={{ color: "#78427f" }}
                    >
                      sarah.dabancens@sd-equicoaching.fr
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Réponse sous 48h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#78427f", color: "white" }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Adresse principale</p>
                    <p className="font-medium" style={{ color: "#1a0a1e" }}>
                      Ranch Horse Paradise
                    </p>
                    <p className="text-gray-600">Boutigny-sur-Essonne</p>
                    <p className="text-sm text-gray-500 mt-1">
                      (interventions dans toute la France)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#78427f", color: "white" }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Horaires de contact
                    </p>
                    <p className="font-medium" style={{ color: "#1a0a1e" }}>
                      Lundi – Vendredi
                    </p>
                    <p className="text-gray-600">9h – 18h</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="font-semibold text-gray-900 mb-4">
                  Retrouvez-nous sur les réseaux
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/sarahdabancens/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all hover:shadow-md"
                    style={{
                      background: "white",
                      border: "1px solid rgba(120,66,127,0.15)",
                      color: "#78427f",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sarah-dabancens/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all hover:shadow-md"
                    style={{
                      background: "white",
                      border: "1px solid rgba(120,66,127,0.15)",
                      color: "#78427f",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </SectionReveal>

            {/* Right: Calendly CTA */}
            <SectionReveal direction="right">
              <div
                className="rounded-3xl p-10"
                style={{
                  background: "#1a0a1e",
                  border: "1px solid rgba(205,165,64,0.2)",
                }}
              >
                <span
                  className="text-sm font-semibold uppercase tracking-widest mb-4 block"
                  style={{ color: "#cda540" }}
                >
                  Le plus simple
                </span>
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Réserver directement
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  30 minutes d&apos;échange pour faire connaissance, comprendre
                  votre contexte et voir si notre approche correspond à vos
                  enjeux actuels.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Aucune préparation requise",
                    "Confidentiel",
                    "Gratuit",
                    "Disponible dans 48h",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(205,165,64,0.2)" }}
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path
                            d="M1 4l3 3 5-6"
                            stroke="#cda540"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <CalendlyButton variant="primary" size="lg" className="w-full justify-center">
                  Réserver mon créneau
                </CalendlyButton>
                <p className="text-center text-white/30 text-xs mt-4">
                  Dirigeants · DRH · Managers
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
