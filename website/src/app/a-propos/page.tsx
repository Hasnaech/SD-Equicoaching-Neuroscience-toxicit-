import type { Metadata } from "next";
import React from "react";
import { Award, Heart, Target, BookOpen } from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import PhotoSarah from "@/components/PhotoSarah";
import CalendlyButton from "@/components/CalendlyButton";
import SectionReveal from "@/components/SectionReveal";
import TiltCard from "@/components/TiltCard";

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

type TeamMember = {
  number: string;
  name: string;
  role: string;
  tagline: string;
  photo: string;
  accentColor: string;
  tags: string[];
  paras: string[];
};

const team: TeamMember[] = [
  {
    number: "01",
    name: "Christine Le Cœur",
    role: "Réseaux dirigeants & Dynamiques relationnelles",
    tagline: "Le regard qui voit les talents que personne ne voit",
    photo: "/christine-lecoeur.jpg",
    accentColor: "#78427f",
    tags: ["Réseaux dirigeants", "14 000+ membres", "QVT", "Croix-Rouge"],
    paras: [
      "Christine fait ce que peu de consultants savent faire : entrer dans une organisation et identifier en quelques heures les forces cachées, les talents sous-exploités, les tensions sous-jacentes. Vingt ans à animer des réseaux de dirigeants (plus de 14 000 membres aujourd'hui via le réseau Protéine) lui ont donné cette acuité rare.",
      "Formée au management, à la qualité de vie au travail et au coaching de cadres par la Croix-Rouge, elle apporte au collectif la lecture fine des dynamiques humaines. Quand j'identifie ce qui se passe dans le système nerveux d'une équipe, Christine identifie ce qui se passe dans son tissu relationnel. Les deux lectures ensemble, c'est ce qui rend les diagnostics implacables.",
    ],
  },
  {
    number: "02",
    name: "Mahdi Lansari",
    role: "Business Game & Simulation managériale",
    tagline: "Celui qui fait passer la théorie dans le réel",
    photo: "/mehdi-lansari.jpg",
    accentColor: "#cda540",
    tags: ["Business Game", "Simulation", "Négociation", "Stratégie"],
    paras: [
      "Mahdi est enseignant et consultant en Business Game. Concrètement, ça veut dire qu'il construit des simulations dans lesquelles les managers vivent en 2 heures ce qu'ils mettraient 2 ans à comprendre en formation classique. Stratégie, négociation, gestion de conflit : il transforme chaque concept en expérience.",
      "Sa valeur dans notre collectif est précieuse. Pendant que je travaille sur l'ancrage corporel avec les chevaux, Mahdi travaille l'ancrage mental par la mise en situation. Ce sont deux portes d'entrée vers la même chose : un apprentissage qui tient quand le manager est de retour dans son équipe le lundi.",
    ],
  },
  {
    number: "03",
    name: "Anja Niestroy",
    role: "Équicoach & Coaching humaniste",
    tagline: "La gardienne du sens dans la transformation",
    photo: "/anja-niestroy.png",
    accentColor: "#9b5aaa",
    tags: ["Équicoach", "Coaching humaniste", "Conduite du changement", "Head of Office"],
    paras: [
      "Anja est Head of Office et coach humaniste à Paris. Son terrain, c'est la conduite du changement quand elle est vraiment respectueuse des personnes qui le vivent.",
      "Dans notre collectif, elle joue un rôle qu'on néglige trop souvent : s'assurer que la transformation a du sens pour ceux qui la traversent. Une formation peut être brillante, un protocole peut être parfait, si les équipes n'y trouvent pas leur place, rien ne tient. Anja écoute, traduit, accompagne. Elle est l'interface humaine entre les ambitions du dirigeant et la réalité du terrain.",
    ],
  },
  {
    number: "04",
    name: "Hasnae Chnaif",
    role: "Growth hacking & Intelligence digitale",
    tagline: "L'intelligence digitale au service de l'humain",
    photo: "/hasnae-chnaif.png",
    accentColor: "#cda540",
    tags: ["Growth hacking", "IA & Données", "Oxford Ommunotec", "Formatrice"],
    paras: [
      "Hasnae est growth hacker et formatrice. Elle pilote la croissance digitale d'Oxford Ommunotec et forme la nouvelle génération de marketeurs dans plusieurs écoles parisiennes (Collège de Paris, Metaverse College, Ascencia Business School).",
      "Pourquoi elle compte dans notre collectif ? Parce qu'aucune transformation managériale ne tient aujourd'hui sans intégrer la donnée et l'IA. Hasnae apporte ce que la plupart des consultants en RH n'ont pas : la maîtrise des outils qui amplifient les bonnes pratiques managériales, l'analyse fine des indicateurs RH, l'automatisation intelligente. Elle nous permet de mesurer ce qu'on fait, et de prouver les résultats avec des chiffres.",
    ],
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

const synthesis = [
  { name: "Christine", color: "#78427f", text: "voit le système relationnel." },
  { name: "Mahdi", color: "#cda540", text: "crée l'expérience d'apprentissage." },
  { name: "Anja", color: "#9b5aaa", text: "sécurise le sens pour les équipes." },
  { name: "Hasnae", color: "#e8c060", text: "outille avec la donnée et l'IA." },
  {
    name: "Et moi,",
    color: "#cda540",
    text: "j'apporte la lecture par les neurosciences et l'ancrage corporel avec les chevaux.",
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

      {/* ── SARAH'S STORY ───────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SectionReveal direction="left" className="sticky top-24">
              <div className="flex flex-col gap-5">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: "3 / 4",
                    border: "1px solid rgba(205,165,64,0.25)",
                    boxShadow: "0 24px 64px rgba(120,66,127,0.18)",
                  }}
                >
                  <PhotoSarah />
                </div>
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
      <section className="py-14" style={{ backgroundColor: "#f2ede5" }}>
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

      {/* ── COLLECTIF INTRO ──────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="pt-4 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div
              className="rounded-3xl px-10 py-12 lg:px-16 lg:py-14"
              style={{
                background: "white",
                border: "2px solid rgba(205,165,64,0.2)",
                boxShadow: "0 20px 80px rgba(120,66,127,0.07)",
              }}
            >
              <span
                className="text-sm font-semibold uppercase tracking-widest mb-5 block"
                style={{ color: "#cda540" }}
              >
                Le collectif
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-8"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#1a0a1e",
                }}
              >
                Je ne travaille pas seule.
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  {`On accompagne aujourd'hui des organisations qui ne peuvent plus se contenter d'une expertise isolée. Une formation managériale qui ignore les vraies dynamiques de réseau, c'est de la théorie. Un coaching qui ne sait pas activer la croissance d'une entreprise, c'est du bien-être. Une transformation qui oublie l'humain, c'est de l'échec annoncé.`}
                </p>
                <p>
                  {`C'est pour ça que j'ai monté un collectif. Quatre expertises qui se complètent vraiment, autour d'une même conviction : on ne change pas une organisation sans changer la qualité des relations qui la font tenir.`}
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── ÉQUIPE ───────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-28">
            {team.map((member, i) => {
              const isReversed = i % 2 === 1;
              return (
                <SectionReveal key={i} delay={0.05} direction={isReversed ? "right" : "left"}>
                  <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-center">

                    {/* ── Photo block ── */}
                    <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                      <TiltCard className="w-full" intensity={5}>
                        <div
                          className="relative rounded-3xl overflow-hidden"
                          style={{
                            aspectRatio: "3 / 4",
                            boxShadow: `0 32px 80px ${member.accentColor}28, 0 8px 24px rgba(0,0,0,0.12)`,
                          }}
                        >
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover object-center"
                            style={{ display: "block" }}
                          />

                          {/* Bottom gradient with name */}
                          <div
                            className="absolute bottom-0 left-0 right-0 px-7 py-6"
                            style={{
                              background: `linear-gradient(to top, rgba(26,10,30,0.88) 0%, rgba(26,10,30,0.4) 60%, transparent 100%)`,
                            }}
                          >
                            <p
                              className="text-white font-bold text-xl leading-tight"
                              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                              {member.name}
                            </p>
                            <p
                              className="text-xs font-semibold tracking-widest uppercase mt-1"
                              style={{ color: member.accentColor }}
                            >
                              {member.role}
                            </p>
                          </div>

                          {/* Number badge top-right */}
                          <div
                            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center"
                            style={{
                              background: "rgba(26,10,30,0.7)",
                              backdropFilter: "blur(8px)",
                              border: `1px solid ${member.accentColor}60`,
                            }}
                          >
                            <span
                              className="text-xs font-bold tracking-widest"
                              style={{ color: member.accentColor }}
                            >
                              {member.number}
                            </span>
                          </div>

                          {/* Subtle colored top border */}
                          <div
                            className="absolute top-0 left-0 right-0 h-0.5"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${member.accentColor}, transparent)`,
                            }}
                          />
                        </div>
                      </TiltCard>
                    </div>

                    {/* ── Text block ── */}
                    <div className={isReversed ? "lg:order-1" : "lg:order-2"}>

                      {/* Large ghost number behind content */}
                      <div className="relative">
                        <span
                          className="absolute -top-8 -left-4 select-none pointer-events-none font-black leading-none"
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(5rem, 12vw, 9rem)",
                            color: `${member.accentColor}0d`,
                            lineHeight: 1,
                          }}
                        >
                          {member.number}
                        </span>

                        <div className="relative">
                          <span
                            className="text-xs font-semibold uppercase tracking-[0.18em] mb-3 block"
                            style={{ color: "#cda540" }}
                          >
                            {member.role}
                          </span>

                          <h3
                            className="text-3xl lg:text-4xl font-bold mb-6"
                            style={{
                              fontFamily: "'Playfair Display', Georgia, serif",
                              color: "#1a0a1e",
                              lineHeight: 1.15,
                            }}
                          >
                            {member.name}
                          </h3>

                          {/* Tagline */}
                          <div
                            className="mb-8 py-4 px-5 rounded-xl"
                            style={{
                              background: `${member.accentColor}0a`,
                              borderLeft: `3px solid ${member.accentColor}`,
                            }}
                          >
                            <p
                              className="text-lg font-semibold italic leading-snug"
                              style={{
                                color: member.accentColor,
                                fontFamily: "'Playfair Display', Georgia, serif",
                              }}
                            >
                              {`"${member.tagline}"`}
                            </p>
                          </div>

                          {/* Description */}
                          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                            {member.paras.map((para, j) => (
                              <p key={j}>{para}</p>
                            ))}
                          </div>

                          {/* Expertise tags */}
                          <div className="flex flex-wrap gap-2">
                            {member.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                                style={{
                                  background: `${member.accentColor}12`,
                                  color: member.accentColor,
                                  border: `1px solid ${member.accentColor}30`,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS QUATRE ─────────────────────── */}
      <section style={{ backgroundColor: "#1a0a1e" }} className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "#cda540" }}
            >
              Synergie
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Pourquoi nous quatre ensemble
            </h2>
          </SectionReveal>

          <div className="space-y-3">
            {synthesis.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.09} direction="left">
                <div
                  className="flex items-center gap-5 rounded-xl px-6 py-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(205,165,64,0.1)",
                  }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="text-white/80 leading-snug">
                    <span className="font-bold" style={{ color: item.color }}>
                      {item.name}
                    </span>{" "}
                    {item.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.55} className="mt-10">
            <p className="text-white/55 text-center leading-relaxed">
              {`C'est ce maillage-là qui fait qu'aucune situation ne nous échappe. Quand un client nous appelle, il n'a pas accès à une consultante. Il a accès à une expertise collective, qui mobilise les bonnes compétences au bon moment.`}
            </p>
          </SectionReveal>
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
