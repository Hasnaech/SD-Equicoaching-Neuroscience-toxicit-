import type { Metadata } from "next";
import React from "react";
import { CheckCircle, Users, Briefcase, GraduationCap, CreditCard } from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import CalendlyButton from "@/components/CalendlyButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Formation Leadership Neurosciences — 21h Certifié Qualiopi | SD Équicoaching",
  description:
    "Formation leadership par les neurosciences comportementales. 21h certifiées Qualiopi, éligible OPCO. Comprendre pourquoi le cerveau bug sous pression. Pour managers et directeurs.",
  keywords:
    "formation leadership neurosciences, formation manager neurosciences, formation leadership qualiopi, formation management cerveau pression",
  openGraph: {
    title: "Formation Leadership Haute Performance | SD Équicoaching",
    description:
      "21h de formation certifiée Qualiopi sur le leadership par les neurosciences. Éligible OPCO.",
  },
};

const modules = [
  {
    number: "01",
    title: "Polyvagale appliquée",
    subtitle: "Les 4 états du système nerveux",
    body: "La théorie polyvagale de Stephen Porges explique comment le système nerveux autonome régule nos états internes. Apprenez à identifier vos états : sécurité ventrale, mobilisation, immobilisation. Comprenez pourquoi vous ne pouvez pas décider correctement en état de menace.",
  },
  {
    number: "02",
    title: "Neurobiologie de la décision",
    subtitle: "Pourquoi le cerveau bug sous pression",
    body: "Sous stress, le cortex préfrontal — siège de la décision rationnelle — se met en veille au profit du système limbique. Nous explorons les mécanismes neurobiologiques qui expliquent les décisions impulsives, les conflits escaladés et les angles morts cognitifs.",
  },
  {
    number: "03",
    title: "Neuroception & contagion émotionnelle",
    subtitle: "L'impact de votre état sur votre équipe",
    body: "Votre système nerveux parle à celui de votre équipe — avant même que vous ouvriez la bouche. Neuroception (Porges), neurones miroirs (Rizzolatti) : comprendre comment votre état interne contamine l'environnement de travail, positivement ou négativement.",
  },
  {
    number: "04",
    title: "Saboteurs & neuroplasticité",
    subtitle: "Reconfigurer les schémas limitants",
    body: "Chamine (Positive Intelligence) identifie 9 saboteurs cognitifs qui parasitent le leadership. Nous les cartographions dans votre équipe et dans votre propre fonctionnement. La neuroplasticité permet de les reconfigurer — avec les bons outils, en moins de 6 semaines.",
  },
  {
    number: "05",
    title: "Co-régulation & leadership",
    subtitle: "Devenir un leader régulateur",
    body: "Un leader régulateur est capable de stabiliser le système nerveux collectif de son équipe — même sous pression. Techniques de régulation descendante et ascendante, ancrage somatique, posture de présence. Ce module est le cœur opérationnel de la formation.",
  },
  {
    number: "06",
    title: "Équicoaching accélérateur",
    subtitle: "Ancrage corporel des apprentissages",
    body: "Une demi-journée en centre équestre avec des praticiens certifiés. Le cheval révèle en temps réel l'écart entre ce que vous pensez projeter et ce que vous projetez réellement. Ancrage profond des 5 modules précédents dans la mémoire corporelle.",
  },
];

const programme = [
  {
    jour: "Jour 1 — Matin",
    titre: "Fondations neurologiques",
    contenu: [
      "Introduction à la théorie polyvagale",
      "Cartographie de vos états nerveux habituels",
      "Exercices de reconnaissance somatique",
    ],
  },
  {
    jour: "Jour 1 — Après-midi",
    titre: "Neurobiologie de la décision",
    contenu: [
      "Mécanismes du cerveau sous pression",
      "Identifier vos propres biais de décision",
      "Protocoles de régulation pour managers",
    ],
  },
  {
    jour: "Jour 2",
    titre: "Contagion & saboteurs",
    contenu: [
      "Neuroception et impact environnemental",
      "Cartographie des saboteurs de l'équipe",
      "Pratiques de neuroplasticité appliquée",
      "Co-régulation : exercices en dyades",
    ],
  },
  {
    jour: "Jour 3",
    titre: "Intégration & équicoaching",
    contenu: [
      "Leadership régulateur : plan personnel",
      "Demi-journée équicoaching en centre équestre",
      "Ancrage et plan d'action 90 jours",
    ],
  },
];

export default function FormationLeadershipPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20"
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
                Formation certifiée Qualiopi
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Formation Leadership
              <br />
              <span style={{ color: "#cda540" }}>Haute Performance</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              21h · Certifié Qualiopi · Éligible OPCO
            </p>
            <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Une formation fondée sur les neurosciences comportementales pour
              comprendre pourquoi vos décisions — et celles de vos managers —
              se dégradent sous pression, et comment y remédier durablement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton variant="primary" size="lg">
                Diagnostic préliminaire 90 minutes
              </CalendlyButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── OBJECTIFS PÉDAGOGIQUES ─────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              4 objectifs pédagogiques
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Comprendre son système nerveux",
                body: "Identifier ses propres états nerveux sous pression et leurs effets sur ses décisions, sa communication et son leadership.",
              },
              {
                num: "02",
                title: "Lire l'état collectif de l'équipe",
                body: "Cartographier le système nerveux collectif de son équipe : qui régule, qui réagit, qui se dissocie. Intervenir au bon moment.",
              },
              {
                num: "03",
                title: "Devenir un leader régulateur",
                body: "Acquérir des outils concrets de co-régulation pour stabiliser le système nerveux collectif — même en contexte de crise.",
              },
              {
                num: "04",
                title: "Ancrer durablement les apprentissages",
                body: "Utiliser la neuroplasticité et l'équicoaching pour transformer des prises de conscience intellectuelles en changements comportementaux réels.",
              },
            ].map((obj) => (
              <SectionReveal key={obj.num} delay={parseInt(obj.num) * 0.05}>
                <div
                  className="flex gap-5 p-6 rounded-xl"
                  style={{
                    background: "rgba(120,66,127,0.04)",
                    border: "1px solid rgba(120,66,127,0.1)",
                  }}
                >
                  <span
                    className="text-4xl font-black shrink-0"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: "rgba(120,66,127,0.15)",
                    }}
                  >
                    {obj.num}
                  </span>
                  <div>
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: "#78427f" }}
                    >
                      {obj.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{obj.body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 MODULES ──────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#cda540" }}
            >
              Programme
            </span>
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              6 modules fondés sur la science
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {modules.map((mod, i) => (
              <SectionReveal key={mod.number} delay={i * 0.08}>
                <div
                  className="rounded-xl p-6 h-full"
                  style={{
                    background: "white",
                    border: "1px solid rgba(120,66,127,0.1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="text-2xl font-black shrink-0"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        color: "#78427f",
                        opacity: 0.4,
                      }}
                    >
                      {mod.number}
                    </span>
                    <div>
                      <h3
                        className="font-bold text-base mb-1"
                        style={{ color: "#1a0a1e" }}
                      >
                        {mod.title}
                      </h3>
                      <p
                        className="text-xs font-semibold uppercase tracking-wide mb-3"
                        style={{ color: "#cda540" }}
                      >
                        {mod.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {mod.body}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME 3 JOURS ──────────────────────────── */}
      <section style={{ backgroundColor: "#1a0a1e" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Programme sur 3 jours
            </h2>
          </SectionReveal>

          <div className="space-y-4">
            {programme.map((p, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(205,165,64,0.15)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div
                      className="shrink-0 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded"
                      style={{
                        backgroundColor: "rgba(205,165,64,0.1)",
                        color: "#cda540",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.jour}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-3">{p.titre}</h3>
                      <ul className="space-y-1.5">
                        {p.contenu.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <CheckCircle
                              size={14}
                              className="shrink-0 mt-0.5"
                              style={{ color: "#cda540" }}
                            />
                            <span className="text-sm text-white/70">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉFÉRENCES SCIENTIFIQUES ───────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2
              className="text-xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              Références scientifiques
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Stephen Porges — Théorie polyvagale",
                "Shirzad Chamine — Positive Intelligence",
                "Bessel Van der Kolk — Le corps n'oublie rien",
                "Amy Edmondson — Sécurité psychologique",
                "Giacomo Rizzolatti — Neurones miroirs",
              ].map((ref) => (
                <span
                  key={ref}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(120,66,127,0.06)",
                    border: "1px solid rgba(120,66,127,0.12)",
                    color: "#78427f",
                  }}
                >
                  {ref}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── PROFILS CIBLES ─────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              Pour qui ?
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Briefcase size={28} />,
                title: "Directeurs & DG",
                body: "Vous pilotez une organisation, un département ou une BU. Vous êtes confronté à des décisions complexes sous pression constante.",
              },
              {
                icon: <Users size={28} />,
                title: "Managers d'équipes",
                body: "Vous gérez une équipe de 3 à 50 personnes. Vous observez des tensions, des inefficacités ou un turnover que vous ne savez pas comment adresser.",
              },
              {
                icon: <GraduationCap size={28} />,
                title: "DRH & responsables RH",
                body: "Vous cherchez une solution formation concrète, mesurable, avec un ROI démontrable et une certification reconnue.",
              },
            ].map((profile, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-xl p-7 text-center h-full"
                  style={{
                    background: "white",
                    border: "1px solid rgba(120,66,127,0.1)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "#78427f", color: "white" }}
                  >
                    {profile.icon}
                  </div>
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{ color: "#1a0a1e" }}
                  >
                    {profile.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {profile.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATS & FINANCEMENT ──────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <SectionReveal direction="left">
              <div
                className="rounded-xl p-8 h-full"
                style={{
                  border: "2px solid #78427f",
                  background: "rgba(120,66,127,0.02)",
                }}
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#78427f" }}
                >
                  Format individuel
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#78427f" }} />
                    <span>Coaching personnalisé sur 3 mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#78427f" }} />
                    <span>Flexibilité totale des horaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#78427f" }} />
                    <span>Sessions en présentiel ou à distance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#78427f" }} />
                    <span>Suivi post-formation 30 jours</span>
                  </li>
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal direction="right">
              <div
                className="rounded-xl p-8 h-full"
                style={{
                  border: "2px solid #cda540",
                  background: "rgba(205,165,64,0.02)",
                }}
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#cda540" }}
                >
                  Format intra-entreprise
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#cda540" }} />
                    <span>Groupe de 6 à 12 managers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#cda540" }} />
                    <span>Sur site ou en résidentiel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#cda540" }} />
                    <span>Adaptation aux enjeux spécifiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#cda540" }} />
                    <span>Tarif sur devis</span>
                  </li>
                </ul>
              </div>
            </SectionReveal>
          </div>

          {/* Financement */}
          <SectionReveal className="text-center">
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: "#1a0a1e" }}
            >
              Financement
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "OPCO", detail: "Financement via votre OPCO" },
                { label: "PDC", detail: "Plan de Développement des Compétences" },
                { label: "FNE-Formation", detail: "Fonds National de l'Emploi" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl"
                  style={{
                    background: "rgba(120,66,127,0.05)",
                    border: "1px solid rgba(120,66,127,0.12)",
                  }}
                >
                  <CreditCard size={20} style={{ color: "#78427f" }} />
                  <div className="text-left">
                    <span
                      className="font-bold text-sm block"
                      style={{ color: "#78427f" }}
                    >
                      {f.label}
                    </span>
                    <span className="text-xs text-gray-500">{f.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#78427f" }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Évaluons ensemble ce que cette formation peut changer
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              90 minutes d&apos;échange pour comprendre votre contexte, identifier
              les freins actuels et co-construire un programme adapté.
            </p>
            <CalendlyButton variant="outline" size="lg">
              Réserver un diagnostic préliminaire
            </CalendlyButton>
            <p className="text-white/50 text-sm mt-4">Gratuit · Confidentiel</p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
