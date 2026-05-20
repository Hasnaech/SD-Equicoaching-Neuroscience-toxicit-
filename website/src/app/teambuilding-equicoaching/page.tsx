import type { Metadata } from "next";
import React from "react";
import { Clock, MapPin, Users, CheckCircle } from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import CalendlyButton from "@/components/CalendlyButton";
import SectionReveal from "@/components/SectionReveal";

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
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
                style={{
                  border: "1px solid #cda540",
                  color: "#cda540",
                  backgroundColor: "rgba(205,165,64,0.08)",
                }}
              >
                Teambuilding Équicoaching
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Vos teambuildings habituels :{" "}
              <span style={{ color: "#cda540" }}>
                tout le monde fait semblant de s&apos;amuser,
                puis rien ne change.
              </span>
            </h1>
            <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed text-lg">
              L&apos;équicoaching ne repose pas sur la confiance aveugle ou les jeux de
              rôle. Il révèle les dynamiques réelles de votre équipe — en temps
              réel, sans filtre.
            </p>
            <CalendlyButton variant="primary" size="lg">
              Demander un devis
            </CalendlyButton>
          </SectionReveal>
        </div>
      </section>

      {/* ── VIDÉO ────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-10">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              Découvrez l&apos;équicoaching en action
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Une immersion concrète dans ce que vos équipes vont vivre.
            </p>
          </SectionReveal>
          <SectionReveal>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 8px 40px rgba(120,66,127,0.15)",
                border: "1px solid rgba(120,66,127,0.1)",
              }}
            >
              <video
                controls
                playsInline
                className="w-full"
                style={{ display: "block", maxHeight: "520px", objectFit: "cover" }}
              >
                <source src="/video-teambuilding.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
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
