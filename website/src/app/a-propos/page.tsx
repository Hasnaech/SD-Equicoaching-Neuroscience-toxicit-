import type { Metadata } from "next";
import React from "react";
import { Award, Heart, Target, BookOpen } from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import PhotoSarah from "@/components/PhotoSarah";
import CalendlyButton from "@/components/CalendlyButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "À propos de Sarah Dabancens : Manager de Transition & Équicoach | SD Équicoaching",
  description:
    "Sarah Dabancens : 15 ans de terrain en direction commerciale, secteur pharmaceutique et international. Manager de Transition, équicoach certifiée ICF. Fondatrice de SD Équicoaching.",
  openGraph: {
    title: "Sarah Dabancens : Fondatrice SD Équicoaching",
    description:
      "De Directrice Commerciale à Manager de Transition. 15 ans de terrain. Équicoach certifiée. Qualiopi.",
  },
};

const team = [
  {
    name: "Christine Lecoeur",
    role: "Praticienne en équicoaching",
    description:
      "Certifiée équicoach et praticienne EMDR. 12 ans d'expérience en accompagnement individuel et collectif. Spécialiste des dynamiques de groupe et de la gestion du stress post-traumatique en milieu professionnel.",
  },
  {
    name: "Mahdi Lansari",
    role: "Coach certifié ICF, Neurosciences",
    description:
      "Coach certifié ICF et formateur en neurosciences comportementales. Intervient sur les modules de neuroplasticité et de régulation émotionnelle. Ancien directeur de business unit, 10 ans d'expérience terrain.",
  },
  {
    name: "Hasnae Chnaif",
    role: "Facilitatrice & coach d'équipe",
    description:
      "Facilitatrice certifiée et coach d'équipe. Spécialiste des dynamiques CODIR et des processus de prise de décision collective. Intervient sur les ateliers de co-régulation et de leadership systémique.",
  },
  {
    name: "Anja Niestroy",
    role: "Experte en sécurité psychologique",
    description:
      "Docteure en psychologie organisationnelle. Experte en sécurité psychologique et en cultures d'équipe. Référente scientifique du programme sur les travaux d'Amy Edmondson et la recherche Google Project Aristotle.",
  },
];

const valeurs = [
  {
    icon: <Target size={24} />,
    titre: "Excellence",
    desc: "Chaque intervention est préparée, mesurée et suivie. Nous ne promettons pas ce que nous ne pouvons pas démontrer.",
  },
  {
    icon: <Heart size={24} />,
    titre: "Authenticité",
    desc: "Le travail que nous faisons avec vos équipes, nous le faisons aussi sur nous-mêmes. Nous ne vendons pas ce que nous ne pratiquons pas.",
  },
  {
    icon: <BookOpen size={24} />,
    titre: "Rigueur scientifique",
    desc: "Chaque outil utilisé est fondé sur la recherche en neurosciences, en psychologie organisationnelle ou en sciences du comportement. Aucun ésotérisme.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative min-h-[55vh] flex items-center overflow-hidden pt-24 pb-20"
        style={{ backgroundColor: "#1a0a1e" }}
      >
        <GradientBlob />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
                style={{
                  border: "1px solid #cda540",
                  color: "#cda540",
                  backgroundColor: "rgba(205,165,64,0.08)",
                }}
              >
                Fondatrice
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Sarah Dabancens
            </h1>
            <p className="text-xl text-white/60">
              Manager de Transition · Équicoach certifiée · Fondatrice
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── SARAH'S STORY FULL ───────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo Sarah */}
            <SectionReveal direction="left" className="sticky top-24">
              <div className="flex flex-col gap-5">
                {/* Cadre photo */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(205,165,64,0.25)",
                    boxShadow: "0 24px 64px rgba(120,66,127,0.18)",
                  }}
                >
                  <PhotoSarah />
                </div>

                {/* Identité + badges */}
                <div className="px-1">
                  <p
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: "#1a0a1e",
                    }}
                  >
                    Sarah Dabancens
                  </p>
                  <p className="text-gray-500 text-sm mt-1 mb-4">
                    Fondatrice · Manager de Transition · Équicoach ICF
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Qualiopi", "ICF", "Manager de Transition"].map((tag) => (
                      <span key={tag} className="qualiopi-badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Full story */}
            <SectionReveal direction="right">
              <span
                className="text-sm font-semibold uppercase tracking-widest mb-6 block"
                style={{ color: "#cda540" }}
              >
                Mon parcours
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-8"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#1a0a1e",
                }}
              >
                De Directrice Commerciale à Manager de Transition
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Pendant 15 ans, j&apos;ai piloté des équipes de vente en France et
                  à l&apos;international, dans les secteurs pharmaceutique, start-up
                  et luxe. J&apos;ai géré des équipes de 5 à 45 personnes, traversé
                  des fusions, des restructurations, des changements de direction
                  stratégique à 180 degrés.
                </p>
                <p>
                  J&apos;ai vécu ce que vivent vos managers aujourd&apos;hui : les décisions
                  prises sous pression dans des couloirs, les équipes qui
                  performent jusqu&apos;au burnout, les meilleurs éléments qui partent
                  en silence, et les réunions où personne ne dit vraiment ce qui
                  se passe.
                </p>
                <p>
                  Ce que j&apos;ai compris à 38 ans, en me formant aux neurosciences
                  comportementales, à l&apos;équicoaching et aux outils de régulation
                  du système nerveux, m&apos;a changée. Pas en tant que personne. En
                  tant que leader. J&apos;ai arrêté de gérer les symptômes pour
                  travailler sur les causes.
                </p>
                <p>
                  SD Équicoaching, c&apos;est tout ce que j&apos;aurais voulu apprendre à
                  l&apos;époque. Une approche ancrée dans la science, testée sur le
                  terrain pendant des années, et accélérée par la puissance de
                  l&apos;équicoaching.
                </p>
                <p>
                  Aujourd&apos;hui, j&apos;interviens comme Manager de Transition auprès de
                  directions générales et de CODIR en transformation. Je forme
                  des managers à comprendre leur propre système nerveux pour
                  mieux réguler celui de leurs équipes. Et je certifie des
                  programmes qui ont un impact mesurable, pas des formations
                  qu&apos;on oublie 3 semaines après.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Manager de Transition",
                  "Équicoach certifiée",
                  "Qualiopi",
                  "ICF",
                  "Neurosciences comportementales",
                  "Secteur pharmaceutique",
                  "Start-up",
                  "Luxe",
                  "International",
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
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── 3 VALEURS ────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a0a1e" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Nos valeurs
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {valeurs.map((v, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 h-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(205,165,64,0.15)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(205,165,64,0.1)", color: "#cda540" }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {v.titre}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2
              className="text-2xl font-bold mb-8"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              Certifications & labels
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Qualiopi", detail: "Certifié par l'État" },
                { label: "ICF", detail: "International Coaching Federation" },
                { label: "Manager de Transition", detail: "Praticien certifié" },
                { label: "Neurosciences comportementales", detail: "Formation spécialisée" },
              ].map((cert) => (
                <div
                  key={cert.label}
                  className="px-6 py-4 rounded-xl text-left"
                  style={{
                    background: "rgba(120,66,127,0.04)",
                    border: "1px solid rgba(120,66,127,0.12)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Award size={16} style={{ color: "#78427f" }} />
                    <span className="font-bold text-sm" style={{ color: "#78427f" }}>
                      {cert.label}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{cert.detail}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── ÉQUIPE ───────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "#cda540" }}
            >
              L&apos;équipe
            </span>
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              Les praticiens qui interviennent
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 h-full"
                  style={{
                    background: "white",
                    border: "1px solid rgba(120,66,127,0.1)",
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #78427f, #9b5aaa)",
                      }}
                    />
                    <div>
                      <h3
                        className="font-bold text-lg"
                        style={{ color: "#1a0a1e" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#78427f" }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#78427f" }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Réserver un diagnostic de 30 minutes
            </h2>
            <p className="text-white/70 mb-8">
              Un échange confidentiel pour identifier vos enjeux et voir si
              notre approche correspond à votre contexte.
            </p>
            <CalendlyButton variant="outline" size="lg">
              Réserver mon diagnostic gratuit
            </CalendlyButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
