import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { Clock, MapPin, Users, CheckCircle } from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import CalendlyButton from "@/components/CalendlyButton";
import SectionReveal from "@/components/SectionReveal";
import VimeoAutoplay from "@/components/VimeoAutoplay";

export const metadata: Metadata = {
  title: "Teambuilding Équicoaching Entreprise | SD Équicoaching",
  description:
    "Teambuilding équicoaching pour managers et CODIR. Le cheval révèle ce que vos réunions cachent. Présent dans 12 régions, 200+ centres équestres. Journée ou demi-journée.",
  keywords:
    "teambuilding manager, teambuilding équicoaching, teambuilding cheval entreprise, cohésion équipe dirigeante",
  openGraph: {
    title: "Teambuilding Équicoaching | SD Équicoaching",
    description:
      "Votre teambuilding habituel : tout le monde fait semblant de s'amuser, puis rien ne change.",
  },
};

const timeline = [
  { time: "9h00", titre: "Accueil & cadrage", desc: "Présentation du cadre, des règles de sécurité, des objectifs de la journée. Aucune expérience équestre requise." },
  { time: "9h30", titre: "Observation libre", desc: "Observer les chevaux en liberté. Premier miroir : comment vous vous positionnez dans l'espace collectif." },
  { time: "10h30", titre: "Exercice individuel — Contact", desc: "Approcher un cheval seul. Le cheval réagit à votre état interne, pas à votre intention. Premier retour corporel." },
  { time: "12h00", titre: "Débrief & déjeuner", desc: "Partage des observations. Apport théorique sur la neuroception et la contagion émotionnelle." },
  { time: "14h00", titre: "Exercice collectif — Leadership en mouvement", desc: "Guider un cheval en groupe. Qui prend le leadership naturellement ? Qui s'efface ? Qui entre en conflit ?" },
  { time: "16h00", titre: "Retour sur le terrain professionnel", desc: "Transposition explicite : qu'est-ce que la journée a révélé sur les dynamiques de votre équipe ?" },
  { time: "17h00", titre: "Plan d'action collectif", desc: "Co-construction des 3 engagements prioritaires pour les 90 prochains jours." },
];

const raisons = [
  {
    number: "01",
    title: "Il détecte ce que vous cachez",
    body: "500 kilos de capteurs neurologiques. Aucun discours ne passe. Le cheval perçoit l'incohérence entre votre état interne et votre communication externe — instantanément, sans jugement.",
  },
  {
    number: "02",
    title: "Impossible de jouer un rôle",
    body: "Il réagit à votre état interne, pas à vos intentions affichées. Vous pouvez sourire et donner l'air d'être calme : si votre système nerveux est en alerte, il le sait. Et il le montre.",
  },
  {
    number: "03",
    title: "L'ancrage est corporel",
    body: "Ce que vous vivez avec lui reste. Pas comme un PowerPoint. La mémoire corporelle ancre les apprentissages différemment — et durablement. Nos clients en parlent encore 6 mois après.",
  },
];

const casClients = [
  {
    titre: "CODIR qui s'évitait",
    contexte: "Un comité de direction de 8 personnes dans un groupe industriel. Réunions hebdomadaires où tout le monde acquiesçait. Décisions prises en couloir. Sujet tabou : deux membres en conflit depuis 18 mois.",
    exercice: "Exercice de co-guidage : deux membres du CODIR doivent guider ensemble le même cheval, sans se parler.",
    resultat: "Le cheval s'immobilise. Refus total. L'un des deux dirige, l'autre contre-dirige inconsciemment. Le conflit devient visible pour toute l'équipe.",
    impact: "6 mois plus tard : les deux membres ont eu leur première conversation directe. Le CODIR a adopté un protocole de décision structuré. Un poste clé, bloqué depuis un an, a été pourvu.",
  },
  {
    titre: "Équipe commerciale en silos",
    contexte: "Une équipe de 14 commerciaux terrain dans le retail premium. Compétition interne, pas de partage d'informations clients. Le manager national était épuisé à arbitrer.",
    exercice: "Exercice de guidage en équipe : l'ensemble du groupe doit amener le cheval d'un point A à un point B, en restant coordonné.",
    resultat: "Chaos complet. Le cheval refuse d'avancer. L'équipe découvre qu'elle n'a aucun processus de coordination informel — chacun tire dans sa direction.",
    impact: "3 mois après : mise en place d'un standup hebdomadaire de partage clients. Le NPS interne a progressé de 22 points. Un commercial 'désengagé' s'est repositionné en leader pair.",
  },
];

export default function TeambuildingEquicoachingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-20"
        style={{ backgroundColor: "#1a0a1e" }}
      >
        <GradientBlob />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 mb-8">
              <span
                className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
                style={{
                  border: "1px solid #cda540",
                  color: "#cda540",
                  backgroundColor: "rgba(205,165,64,0.08)",
                }}
              >
                Leadership &amp; Neurosciences Comportementales
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Former vos comités de direction
              <br />
              <span style={{ color: "#cda540" }}>
                à la régulation du système nerveux
              </span>
              <br />
              sous pression.
            </h1>
            <p
              className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed"
              style={{ fontSize: "1.2rem", fontStyle: "italic" }}
            >
              Une compétence stratégique
              <br />
              rarement enseignée.
            </p>
            <CalendlyButton variant="primary" size="lg">
              Demander un devis
            </CalendlyButton>
          </SectionReveal>
        </div>
      </section>

      {/* ── VIDÉO ────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#f2ede5", position: "relative", overflow: "hidden" }}
        className="py-24"
      >
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(120,66,127,0.13) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(120,66,127,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Decorative small dots */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 60,
            left: "8%",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(120,66,127,0.25)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 90,
            left: "10%",
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "rgba(120,66,127,0.15)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 80,
            right: "9%",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(120,66,127,0.2)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative" }}>
          {/* Header */}
          <SectionReveal className="text-center mb-12">
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(120,66,127,0.08)",
                border: "1px solid rgba(120,66,127,0.22)",
                borderRadius: 100,
                padding: "6px 18px",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#78427f",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#78427f",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Vidéo exclusive
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              L&apos;équicoaching{" "}
              <em style={{ color: "#78427f", fontStyle: "italic" }}>en action</em>
            </h2>
            <p
              style={{
                color: "#5a4a60",
                fontSize: "1.1rem",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Une immersion concrète dans ce que vos équipes vont vivre lors de
              votre journée teambuilding.
            </p>
          </SectionReveal>

          {/* Video — gradient border frame */}
          <SectionReveal>
            <div
              style={{
                padding: 3,
                borderRadius: 22,
                background:
                  "linear-gradient(135deg, #78427f 0%, #b087b7 50%, #78427f 100%)",
                boxShadow:
                  "0 24px 70px rgba(120,66,127,0.28), 0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ borderRadius: 19, overflow: "hidden" }}>
                <VimeoAutoplay videoId="1194368692" />
              </div>
            </div>

            {/* Caption row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginTop: 20,
              }}
            >
              <div
                style={{
                  height: 1,
                  width: 40,
                  background: "rgba(120,66,127,0.3)",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  color: "#78427f",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                Cliquez pour mettre en pause · Son réglé à 30 %
              </span>
              <div
                style={{
                  height: 1,
                  width: 40,
                  background: "rgba(120,66,127,0.3)",
                }}
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── GALERIE PHOTOS ───────────────────────────── */}
      <section
        style={{ backgroundColor: "#1a0a1e", position: "relative", overflow: "hidden" }}
        className="py-24"
      >
        {/* Background glow */}
        <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(120,66,127,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative" }}>
          {/* Header */}
          <SectionReveal className="text-center mb-14">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(205,165,64,0.08)", border: "1px solid rgba(205,165,64,0.25)", borderRadius: 100, padding: "6px 18px", marginBottom: 20 }}>
              <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#cda540", flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#cda540", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Ils ont vécu l&apos;expérience
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#ffffff", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 14 }}>
              Sur le terrain,{" "}
              <em style={{ color: "#cda540", fontStyle: "italic" }}>avec les chevaux</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
              Des équipes dirigeantes en situation réelle — pas en salle de conférence.
            </p>
          </SectionReveal>

          {/* Bento grid */}
          <SectionReveal>
            <div className="gallery-bento" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "auto", gap: 16 }}>

              {/* Photo 1 — large left (castle ruins, team celebrating) */}
              <div style={{ gridColumn: "1 / 8", gridRow: "1 / 2", position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "16/10" }}>
                <Image
                  src="/images/teambuilding/photo-1.jpg"
                  alt="Équipe qui célèbre avec un cheval devant des ruines de château"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="gallery-img"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,30,0.55) 0%, transparent 50%)", borderRadius: 18 }} />
                <span style={{ position: "absolute", bottom: 16, left: 18, color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500, letterSpacing: "0.03em" }}>
                  Célébration collective
                </span>
              </div>

              {/* Photo 2 — right top (two women with horse) */}
              <div style={{ gridColumn: "8 / 13", gridRow: "1 / 2", position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "16/10" }}>
                <Image
                  src="/images/teambuilding/photo-2.jpg"
                  alt="Deux participantes avec un cheval dans un pré"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="gallery-img"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,30,0.55) 0%, transparent 50%)", borderRadius: 18 }} />
                <span style={{ position: "absolute", bottom: 16, left: 18, color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500, letterSpacing: "0.03em" }}>
                  Connexion & présence
                </span>
              </div>

              {/* Photo 3 — bottom left (group in paddock) */}
              <div style={{ gridColumn: "1 / 6", gridRow: "2 / 3", position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image
                  src="/images/teambuilding/photo-3.jpg"
                  alt="Groupe de participants dans le paddock avec un cheval blanc"
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="gallery-img"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,30,0.55) 0%, transparent 50%)", borderRadius: 18 }} />
                <span style={{ position: "absolute", bottom: 16, left: 18, color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500, letterSpacing: "0.03em" }}>
                  Dynamiques d&apos;équipe
                </span>
              </div>

              {/* Photo 4 — bottom right large (man with white horse) */}
              <div style={{ gridColumn: "6 / 13", gridRow: "2 / 3", position: "relative", borderRadius: 18, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image
                  src="/images/teambuilding/photo-4.jpg"
                  alt="Dirigeant en contact avec un cheval blanc accompagné d'une coach"
                  fill
                  sizes="(max-width: 768px) 100vw, 57vw"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="gallery-img"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,30,0.55) 0%, transparent 50%)", borderRadius: 18 }} />
                <span style={{ position: "absolute", bottom: 16, left: 18, color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500, letterSpacing: "0.03em" }}>
                  Leadership & lâcher-prise
                </span>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── 3 RAISONS ────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              Pourquoi le cheval ?
            </h2>
          </SectionReveal>

          <div className="space-y-6">
            {raisons.map((r, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 flex gap-6 items-start"
                  style={{
                    background: "white",
                    border: "1px solid rgba(120,66,127,0.1)",
                    boxShadow: "0 4px 20px rgba(120,66,127,0.04)",
                  }}
                >
                  <span
                    className="text-5xl font-black shrink-0"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: "rgba(120,66,127,0.12)",
                    }}
                  >
                    {r.number}
                  </span>
                  <div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "#78427f" }}
                    >
                      {r.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{r.body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS CLIENTS ──────────────────────────────── */}
      <section style={{ backgroundColor: "#1a0a1e" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "#cda540" }}
            >
              Cas clients anonymisés
            </span>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ce qui s&apos;est passé concrètement
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {casClients.map((cas, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 h-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(205,165,64,0.2)",
                  }}
                >
                  <h3
                    className="text-lg font-bold text-white mb-6"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {cas.titre}
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: "Contexte", content: cas.contexte },
                      { label: "Exercice", content: cas.exercice },
                      { label: "Ce qui s'est passé", content: cas.resultat },
                      { label: "Impact 6 mois après", content: cas.impact },
                    ].map((section) => (
                      <div key={section.label}>
                        <span
                          className="text-xs font-bold uppercase tracking-widest block mb-1"
                          style={{ color: "#cda540" }}
                        >
                          {section.label}
                        </span>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE JOURNÉE ─────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              Programme d&apos;une journée (9h–18h)
            </h2>
          </SectionReveal>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
              style={{ backgroundColor: "rgba(120,66,127,0.15)" }}
            />

            <div className="space-y-6">
              {timeline.map((step, i) => (
                <SectionReveal key={i} delay={i * 0.08}>
                  <div className="flex gap-6 items-start">
                    {/* Time bubble */}
                    <div
                      className="hidden sm:flex shrink-0 w-12 h-12 rounded-full items-center justify-center text-xs font-bold text-white relative z-10"
                      style={{ backgroundColor: "#78427f" }}
                    >
                      {step.time.replace("h00", "h").replace("h30", "h30")}
                    </div>
                    <div
                      className="flex-1 rounded-xl p-5"
                      style={{
                        background: "rgba(120,66,127,0.04)",
                        border: "1px solid rgba(120,66,127,0.1)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="sm:hidden text-xs font-bold"
                          style={{ color: "#78427f" }}
                        >
                          {step.time}
                        </span>
                        <h3
                          className="font-bold"
                          style={{ color: "#1a0a1e" }}
                        >
                          {step.titre}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRÉSENCE ─────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center">
            <h2
              className="text-2xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              Présence nationale
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                "Île-de-France",
                "Normandie",
                "Hauts-de-France",
                "Grand Est",
                "Bretagne",
                "Pays de la Loire",
                "Centre-Val de Loire",
                "Bourgogne",
                "Auvergne-Rhône-Alpes",
                "Nouvelle-Aquitaine",
                "Occitanie",
                "PACA",
              ].map((region) => (
                <span
                  key={region}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "white",
                    border: "1px solid rgba(120,66,127,0.15)",
                    color: "#78427f",
                  }}
                >
                  {region}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <MapPin size={14} style={{ color: "#78427f" }} />
                12 régions couvertes
              </span>
              <span className="flex items-center gap-2">
                <Users size={14} style={{ color: "#78427f" }} />
                200+ centres équestres partenaires
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} style={{ color: "#78427f" }} />
                Demi-journée ou journée complète
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── INCLUS ───────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-10">
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}
            >
              Ce qui est inclus
            </h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Facilitation par une équicoach certifiée",
              "Praticien équin certifié sur site",
              "Matériel pédagogique et supports",
              "Débrief collectif structuré",
              "Apports théoriques en neurosciences",
              "Rapport d'observation anonymisé",
              "Plan d'action collectif 90 jours",
              "Suivi post-journée à 30 jours",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={16} className="shrink-0" style={{ color: "#78427f" }} />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#78427f" }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Tarif sur devis · Adapté à votre contexte
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
              Chaque intervention est calibrée selon la taille du groupe, les
              enjeux identifiés et la localisation. Devis sous 48h.
            </p>
            <CalendlyButton variant="outline" size="lg">
              Demander un devis personnalisé
            </CalendlyButton>
            <p className="text-white/50 text-sm mt-4">
              Gratuit · Sans engagement · Réponse sous 48h
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
