"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Star,
  Users,
  TrendingUp,
  AlertTriangle,
  MapPin,
  Building2,
  Monitor,
  Laptop,
  Globe,
  Award,
  Quote,
  CheckCircle,
} from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import HeroIllustration from "@/components/HeroIllustration";
import CalendlyButton from "@/components/CalendlyButton";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#1a0a1e" }}
      >
        <GradientBlob />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#cda540 1px, transparent 1px), linear-gradient(90deg, #cda540 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: text ── */}
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 mb-7">
                <span
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full"
                  style={{
                    border: "1px solid rgba(205,165,64,0.5)",
                    color: "#cda540",
                    backgroundColor: "rgba(205,165,64,0.08)",
                    letterSpacing: "0.18em",
                  }}
                >
                  Manager de Transition · Neurosciences · Équicoaching
                </span>
              </div>

              <h1
                className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-6 leading-[1.12]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Neurosciences appliquées{" "}
                <em
                  className="not-italic"
                  style={{
                    background: "linear-gradient(135deg, #cda540 0%, #e8c060 60%, #cda540 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  à la performance collective
                </em>
              </h1>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <CalendlyButton variant="primary" size="lg">
                  Réserver un diagnostic gratuit
                </CalendlyButton>
                <a
                  href="#methode"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white/85 transition-all duration-200 border border-white/15 hover:border-white/40 hover:text-white hover:bg-white/5 cursor-pointer"
                >
                  Découvrir l&apos;approche
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* ── Right: illustration motion design ── */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full" style={{ maxWidth: "480px" }}>

                {/* Soft radial backdrop behind the illustration */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(120,66,127,0.18) 0%, transparent 70%)",
                    filter: "blur(48px)",
                    transform: "scale(1.15)",
                  }}
                />

                {/* Illustration — carré 1:1 */}
                <div style={{ aspectRatio: "1 / 1", position: "relative" }}>
                  <HeroIllustration />

                  {/* Animated words following the particle wave diagonal */}
                  <span
                    className="hero-word"
                    style={{ bottom: "18%", left: "7%", animationDelay: "0s" }}
                  >
                    Performance
                  </span>
                  <span
                    className="hero-word"
                    style={{ top: "38%", left: "18%", animationDelay: "3s" }}
                  >
                    Collective
                  </span>
                  <span
                    className="hero-word"
                    style={{ top: "7%", right: "6%", animationDelay: "6s" }}
                  >
                    Régulation
                  </span>
                </div>

                {/* Caption flottant sous l'illustration */}
                <div className="text-center mt-3">
                  <p
                    className="text-white/30 text-[10px] tracking-[0.22em] uppercase"
                  >
                    Système Nerveux Autonome · Régulation · Performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — static */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
            Défiler
          </span>
          <ChevronDown size={18} className="text-white/25" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "#f2ede5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { target: 150, suffix: "+", label: "Managers formés" },
              { target: 98, suffix: "%", label: "Taux de satisfaction" },
              { target: 15, suffix: "+", label: "Années d'expérience" },
            ].map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.1} className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#78427f",
                  }}
                >
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="flex flex-wrap justify-center gap-4">
            {["Qualiopi", "ICF", "Manager de Transition"].map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{
                  background: "rgba(120,66,127,0.08)",
                  border: "1px solid rgba(120,66,127,0.2)",
                  color: "#78427f",
                }}
              >
                <Award size={14} />
                {cert}
              </span>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* ── 3 SITUATIONS ─────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "#cda540" }}
            >
              Diagnostic
            </span>
            <h2
              className="text-3xl lg:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}
            >
              3 situations qui coûtent cher
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users size={28} />,
                title: "Le bug de communication",
                body: "Vos réunions se terminent sans décision claire. Chacun repart avec sa propre version.",
                cost: "Coût : erreurs, retards, tensions.",
              },
              {
                icon: <TrendingUp size={28} />,
                title: "L'érosion des talents",
                body: "Vos meilleurs éléments partent. Pas pour le salaire. Pour le manager.",
                cost: "Coût : recrutement, montée en compétence, moral.",
              },
              {
                icon: <AlertTriangle size={28} />,
                title: "Le leadership réactif",
                body: "Vous gérez les urgences. Vous ne construisez pas.",
                cost: "Coût : épuisement, stratégie en retard, croissance freinée.",
              },
            ].map((card, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <div
                  className="rounded-2xl p-8 h-full card-hover cursor-default"
                  style={{
                    background: "white",
                    border: "1px solid rgba(205,165,64,0.35)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(205,165,64,0.1)",
                      color: "#cda540",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{card.body}</p>
                  <p className="text-sm font-semibold" style={{ color: "#cda540" }}>
                    {card.cost}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTHODE A.N.E. ───────────────────────────────── */}
      <section
        id="methode"
        style={{ backgroundColor: "#f2ede5" }}
        className="py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "#cda540" }}
            >
              Notre approche
            </span>
            <h2
              className="text-3xl lg:text-5xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              La Méthode{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #78427f, #cda540)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                A.N.E.
              </span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                letter: "A",
                title: "Analyse du système nerveux collectif",
                subtitle: "Cartographie & diagnostic",
                body: "Cartographie neurologique de votre équipe. Identification précise des points de grippage : qui régule, qui réagit, qui se déconnecte sous pression.",
                detail: "2–3 semaines · Sur site ou à distance",
                color: "#78427f",
              },
              {
                letter: "N",
                title: "Neurosciences comportementales & Leadership",
                subtitle: "Formation certifiée",
                body: "Comprendre pourquoi le cerveau \"bug\" sous pression. Théorie polyvagale, neurobiologie de la décision, co-régulation. Applicable dès le lendemain.",
                detail: "21h · Certifié Qualiopi · Éligible OPCO",
                color: "#cda540",
              },
              {
                letter: "E",
                title: "Équicoaching",
                subtitle: "Ancrage corporel",
                body: "Le cheval comme miroir de votre cohérence. Ce que les mots ne montrent pas, il le révèle. Ancrage profond des apprentissages.",
                detail: "Demi-journée ou journée · 200+ centres",
                color: "#9b5aaa",
              },
            ].map((card, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{
                    background: "white",
                    border: "1px solid rgba(120,66,127,0.1)",
                    boxShadow: "0 4px 24px rgba(120,66,127,0.06)",
                  }}
                >
                  <div className="p-6" style={{ backgroundColor: card.color }}>
                    <span
                      className="text-6xl font-black text-white/20"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {card.letter}
                    </span>
                    <h3
                      className="text-lg font-bold text-white mt-2 leading-tight"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">{card.subtitle}</p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-700 leading-relaxed flex-1 mb-4">
                      {card.body}
                    </p>
                    <span
                      className="text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full self-start"
                      style={{
                        backgroundColor: `rgba(120,66,127,0.08)`,
                        color: card.color,
                      }}
                    >
                      {card.detail}
                    </span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRÉSENCE NATIONALE ───────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#f2ede5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              5 formats d&apos;intervention
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Nous intervenons partout en France, en présentiel et à distance,
              dans 12 régions avec plus de 200 centres équestres partenaires.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: <Building2 size={28} />, label: "Séminaires résidentiels" },
              { icon: <MapPin size={28} />, label: "Sur site entreprise" },
              { icon: <Laptop size={28} />, label: "À distance" },
              { icon: <Globe size={28} />, label: "Équicoaching 200+ centres" },
              { icon: <Monitor size={28} />, label: "Inter-entreprises" },
            ].map((format, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div
                  className="flex flex-col items-center text-center p-6 rounded-xl"
                  style={{
                    background: "rgba(120,66,127,0.04)",
                    border: "1px solid rgba(120,66,127,0.1)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#78427f", color: "white" }}
                  >
                    {format.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {format.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-10 text-center">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{ background: "rgba(120,66,127,0.08)", color: "#78427f" }}
            >
              <MapPin size={14} />
              12 régions · 200+ centres équestres partenaires
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── LOGOS CLIENTS ────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-10">
            <p
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#78427f" }}
            >
              Ils nous font confiance
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Vinci Energies", color: "#003082" },
              { name: "AP-HP Necker", color: "#0055a4" },
              { name: "ARS Île-de-France", color: "#009174" },
              { name: "Pôle Emploi", color: "#0070c0" },
              { name: "Episaveur", color: "#e07b39" },
              { name: "Octave Management", color: "#2d2d2d" },
            ].map((logo) => (
              <SectionReveal key={logo.name}>
                <div className="logo-placeholder h-16 rounded-lg" style={{ color: logo.color }}>
                  <span className="text-xs font-bold text-center leading-tight">
                    {logo.name}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "#cda540" }}
            >
              Témoignages
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}
            >
              Ce que disent ceux qui l&apos;ont vécu
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Notre CODIR était en train de s'éviter. Après la journée équicoaching, on a eu notre première vraie conversation difficile, et elle a débouché sur une décision. C'est rare.",
                author: "DRH, Groupe industriel",
              },
              {
                quote:
                  "J'attendais le côté 'développement personnel'. Ce que j'ai eu, c'est une lecture neurologique de mes comportements sous pression. Beaucoup plus utile.",
                author: "Directeur BU, Secteur tech",
              },
              {
                quote:
                  "Le ROI est simple : deux de mes managers qui allaient partir sont restés. La formation a changé leur rapport à leur propre fonctionnement.",
                author: "DG, Retail premium",
              },
            ].map((t, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <div
                  className="rounded-2xl p-8 h-full flex flex-col"
                  style={{
                    background: "white",
                    border: "1px solid rgba(120,66,127,0.12)",
                  }}
                >
                  <Quote
                    size={28}
                    className="mb-5 opacity-40"
                    style={{ color: "#cda540" }}
                  />
                  <p className="text-gray-700 leading-relaxed flex-1 italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <Star
                          key={si}
                          size={12}
                          fill="#cda540"
                          style={{ color: "#cda540" }}
                        />
                      ))}
                    </div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#cda540" }}
                    >
                      {t.author}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <div
              className="rounded-3xl p-10 lg:p-16"
              style={{
                background: "white",
                border: "2px solid rgba(120,66,127,0.2)",
                boxShadow: "0 20px 80px rgba(120,66,127,0.08)",
              }}
            >
              <span
                className="text-sm font-semibold uppercase tracking-widest mb-4 block"
                style={{ color: "#cda540" }}
              >
                Premier pas
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#1a0a1e",
                }}
              >
                Diagnostic préliminaire, 30 minutes
              </h2>
              <ul className="text-left space-y-3 mb-10 max-w-md mx-auto">
                {[
                  "Identifier les freins neurologiques actuels",
                  "Évaluer la cohésion et la communication",
                  "Définir les priorités d'intervention",
                  "Co-construire un plan d'action adapté",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#78427f" }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4l3 3 5-6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <CalendlyButton variant="primary" size="lg" className="mb-4">
                Réserver mon diagnostic gratuit
              </CalendlyButton>
              <p className="text-sm text-gray-400 mt-4">
                Gratuit · Confidentiel · Dirigeants & DRH
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}