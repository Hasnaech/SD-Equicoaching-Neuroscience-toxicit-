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
} from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8">
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
                  style={{
                    border: "1px solid #cda540",
                    color: "#cda540",
                    backgroundColor: "rgba(205,165,64,0.08)",
                  }}
                >
                  Manager de Transition · Neurosciences · Équicoaching
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Neurosciences appliquées{" "}
                <span style={{ color: "#cda540" }}>
                  à la performance collective
                </span>
              </h1>

              <p className="text-lg text-white/70 mb-6 leading-relaxed max-w-xl">
                Les décisions stratégiques ne se prennent pas sous stress.
                Nous formons vos directions à maintenir leur disponibilité
                neurologique sous pression.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CalendlyButton variant="primary" size="lg">
                  Réserver un diagnostic gratuit
                </CalendlyButton>
                <a
                  href="#methode"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition-all border border-white/20 hover:border-white/60 hover:bg-white/5"
                >
                  Découvrir notre approche
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right: animated abstract illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 select-none">
                {/* Ambient glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 55% 50%, rgba(205,165,64,0.14) 0%, rgba(120,66,127,0.09) 50%, transparent 75%)",
                    filter: "blur(28px)",
                    transform: "scale(1.25)",
                  }}
                />

                {/* SVG: rotating rings + dashed connection lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 320 320"
                  fill="none"
                  overflow="visible"
                >
                  <motion.circle
                    cx="160" cy="160" r="148"
                    stroke="rgba(205,165,64,0.15)"
                    strokeWidth="1"
                    strokeDasharray="10 8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "160px 160px" }}
                  />
                  <motion.circle
                    cx="160" cy="160" r="98"
                    stroke="rgba(120,66,127,0.2)"
                    strokeWidth="1"
                    strokeDasharray="5 10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "160px 160px" }}
                  />
                  {/* Connection lines center → nodes */}
                  <line x1="160" y1="160" x2="262" y2="68"  stroke="rgba(205,165,64,0.18)"  strokeWidth="0.8" strokeDasharray="5 7" />
                  <line x1="160" y1="160" x2="292" y2="208" stroke="rgba(205,165,64,0.12)"  strokeWidth="0.8" strokeDasharray="5 7" />
                  <line x1="160" y1="160" x2="58"  y2="264" stroke="rgba(120,66,127,0.18)"  strokeWidth="0.8" strokeDasharray="5 7" />
                  <line x1="160" y1="160" x2="48"  y2="98"  stroke="rgba(120,66,127,0.12)"  strokeWidth="0.8" strokeDasharray="5 7" />
                  <line x1="160" y1="160" x2="160" y2="24"  stroke="rgba(205,165,64,0.10)"  strokeWidth="0.8" strokeDasharray="5 7" />
                </svg>

                {/* Center: horse-head icon, floating */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -11, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "rgba(205,165,64,0.07)",
                        border: "1px solid rgba(205,165,64,0.28)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                        {/* Simplified horse-head silhouette */}
                        <path
                          d="M23 7 C20 7 17 9 16 12 C15 15 16 19 18 22 C20 25 21 28 21 33 L25 33 C25 28 26 25 28 22 C30 19 31 15 30 12 C29 9 26 7 23 7 Z"
                          fill="#cda540" opacity="0.88"
                        />
                        <path
                          d="M20 8 C18 6 15 6 14 8 C13 10 14 13 16 14 C14 13 13 10 14 8 C15 6 18 7 20 8 Z"
                          fill="#78427f" opacity="0.75"
                        />
                        <circle cx="20" cy="16" r="1.6" fill="#1a0a1e" opacity="0.65" />
                        <circle cx="19.4" cy="15.4" r="0.5" fill="white" opacity="0.7" />
                        <path d="M16 21 Q18 23 20 21" stroke="#cda540" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Node — top center: golden star */}
                <div className="absolute" style={{ top: "4%", left: "43%" }}>
                  <motion.div
                    animate={{ y: [0, -14, 0], rotate: [0, 18, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(205,165,64,0.1)", border: "1px solid rgba(205,165,64,0.38)" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                          d="M9 1 L10.4 6.5 L16 6.5 L11.5 10 L13 16 L9 12.8 L5 16 L6.5 10 L2 6.5 L7.6 6.5 Z"
                          fill="#cda540" opacity="0.92"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Node — top-right: floating asterisk */}
                <div className="absolute" style={{ top: "14%", right: "8%" }}>
                  <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, 30, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  >
                    <span style={{ color: "#cda540", fontSize: "22px", lineHeight: 1, opacity: 0.7 }}>✦</span>
                  </motion.div>
                </div>

                {/* Node — right: Neurosciences label */}
                <div className="absolute" style={{ top: "44%", right: "2%" }}>
                  <motion.div
                    animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(120,66,127,0.13)",
                        border: "1px solid rgba(120,66,127,0.38)",
                        color: "rgba(200,155,220,0.92)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Neurosciences
                    </div>
                  </motion.div>
                </div>

                {/* Node — bottom-left: leaf */}
                <div className="absolute" style={{ bottom: "12%", left: "7%" }}>
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(120,66,127,0.1)", border: "1px solid rgba(120,66,127,0.3)" }}
                    >
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <ellipse cx="11" cy="11" rx="6" ry="9" transform="rotate(-20 11 11)"
                          fill="rgba(120,66,127,0.5)" stroke="rgba(120,66,127,0.7)" strokeWidth="1" />
                        <line x1="11" y1="4" x2="11" y2="18" stroke="rgba(120,66,127,0.5)"
                          strokeWidth="0.8" transform="rotate(-20 11 11)" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Node — top-left: Leadership label */}
                <div className="absolute" style={{ top: "13%", left: "4%" }}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  >
                    <div
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(205,165,64,0.08)",
                        border: "1px solid rgba(205,165,64,0.28)",
                        color: "rgba(205,165,64,0.88)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Leadership
                    </div>
                  </motion.div>
                </div>

                {/* Node — bottom: Équicoaching label */}
                <div className="absolute" style={{ bottom: "5%", left: "26%" }}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    <div
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(205,165,64,0.07)",
                        border: "1px solid rgba(205,165,64,0.22)",
                        color: "rgba(205,165,64,0.78)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Équicoaching
                    </div>
                  </motion.div>
                </div>

                {/* Floating micro-particles */}
                {([
                  { top: "31%", left: "5%",  size: 3, color: "rgba(205,165,64,0.55)", dur: 3.5, delay: 0   },
                  { top: "63%", left: "22%", size: 2, color: "rgba(120,66,127,0.5)",  dur: 4.0, delay: 0.8 },
                  { top: "21%", left: "56%", size: 4, color: "rgba(205,165,64,0.38)", dur: 5.0, delay: 1.2 },
                  { top: "79%", left: "64%", size: 2, color: "rgba(120,66,127,0.4)",  dur: 3.8, delay: 0.4 },
                  { top: "47%", left: "79%", size: 3, color: "rgba(205,165,64,0.48)", dur: 4.5, delay: 1.8 },
                  { top: "14%", left: "37%", size: 2, color: "rgba(120,66,127,0.55)", dur: 3.2, delay: 2.2 },
                ] as Array<{ top: string; left: string; size: number; color: string; dur: number; delay: number }>).map(
                  (p, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{ top: p.top, left: p.left, width: p.size, height: p.size, backgroundColor: p.color }}
                      animate={{ y: [0, -(7 + i * 2), 0], opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
                    />
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-widest uppercase">
            Défiler
          </span>
          <ChevronDown
            size={20}
            className="text-white/30 animate-scroll-bounce"
          />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="bg-white py-16">
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

      {/* ── SARAH'S STORY ────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SectionReveal direction="left">
              <div
                className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(120,66,127,0.15), rgba(205,165,64,0.08))",
                  border: "1px solid rgba(120,66,127,0.15)",
                  height: "420px",
                }}
              >
                <div
                  className="w-28 h-28 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #78427f, #cda540)",
                  }}
                />
                <p
                  className="text-center font-semibold text-xl"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#1a0a1e",
                  }}
                >
                  Sarah Dabancens
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <span
                className="text-sm font-semibold uppercase tracking-widest mb-4 block"
                style={{ color: "#cda540" }}
              >
                Fondatrice
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#1a0a1e",
                }}
              >
                De Directrice Commerciale à Manager de Transition
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pendant 15 ans, j&apos;ai piloté des équipes en France et à
                l&apos;international, secteur pharmaceutique, start-ups, luxe.
                J&apos;ai vécu ce que vivent vos managers : les décisions sous
                pression, les équipes démotivées, le coût humain et financier
                d&apos;un leadership qui grippe.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                SD Équicoaching, c&apos;est tout ce que j&apos;aurais voulu
                apprendre à l&apos;époque. Une approche ancrée dans les
                neurosciences comportementales, testée sur le terrain, et
                accélérée par l&apos;équicoaching.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Manager de Transition",
                  "Équicoach certifiée",
                  "Qualiopi",
                  "ICF",
                  "Neurosciences comportementales",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(120,66,127,0.1)",
                      color: "#78427f",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 font-semibold transition-colors hover:gap-3"
                style={{ color: "#78427f" }}
              >
                En savoir plus sur Sarah
                <ArrowRight size={16} />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── 3 SITUATIONS ─────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a0a1e" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "#cda540" }}
            >
              Diagnostic
            </span>
            <h2
              className="text-3xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="rounded-2xl p-8 h-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(205,165,64,0.2)",
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
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-4">{card.body}</p>
                  <p className="text-sm font-semibold" style={{ color: "#cda540" }}>
                    {card.cost}
                  </p>
                </motion.div>
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
      <section className="bg-white py-20">
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
      <section style={{ backgroundColor: "#1a0a1e" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "#cda540" }}
            >
              Témoignages
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Quote
                    size={28}
                    className="mb-5 opacity-40"
                    style={{ color: "#cda540" }}
                  />
                  <p className="text-white/80 leading-relaxed flex-1 italic mb-6">
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