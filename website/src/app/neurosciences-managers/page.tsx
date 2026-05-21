import type { Metadata } from "next";
import React from "react";
import {
  CheckCircle,
  Monitor,
  Users,
  Brain,
  Calendar,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import CalendlyButton from "@/components/CalendlyButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Neurosciences pour Managers — Formation en ligne & Accompagnement individuel | SD Équicoaching",
  description:
    "Formation en ligne 24h (8 modules, 54 capsules vidéo) + accompagnement individuel 18h sur 3 mois. Gérer les comportements toxiques, réguler son système nerveux, manager sous pression. 3 500 € net.",
  keywords:
    "formation neurosciences managers, comportements toxiques management, accompagnement individuel manager, formation en ligne leadership, CNV management, régulation système nerveux manager",
  openGraph: {
    title: "Neurosciences pour Managers — Formation & Accompagnement individuel | SD Équicoaching",
    description:
      "24h de formation en ligne + 18h d'accompagnement individuel sur 3 mois. Gérer les comportements difficiles et toxiques par les neurosciences.",
  },
};

const modules = [
  { number: "01", title: "Comprendre ton système nerveux", color: "#78427f", items: ["Les 3 états nerveux et leur impact sur le leadership", "Neuroception, saboteurs internes, régulation polyvagale", "Profil R.E.A.L. — auto-diagnostic de ta signature neurologique"] },
  { number: "02", title: "Émotions, attachement et intelligence relationnelle", color: "#78427f", items: ["CNV appliquée au management : les 4 étapes (Observation – Sentiment – Besoin – Demande)", "Difficile vs toxique : les 3 critères clés (impact, persistance, conscience)", "Premières grilles d'observation factuelle"] },
  { number: "03", title: "Réguler ton système nerveux", color: "#78427f", items: ["Respiration, ancrage corporel, 5 outils de régulation rapide", "Routine de régulation quotidienne", "Gérer son énergie sur le long terme"] },
  { number: "04", title: "Triangle de Karpman et dynamiques toxiques", color: "#78427f", items: ["Victime, sauveur, persécuteur : reconnaître et sortir du triangle", "5 dynamiques toxiques en équipe : lire et désamorcer", "Profil R.E.A.L. point d'étape mi-parcours"] },
  { number: "05", title: "Reprogrammer tes schémas", color: "#78427f", items: ["Neuroplasticité, croyances limitantes, expérience corrective", "De l'identité héritée à l'identité choisie de manager", "Pratique d'ancrage : installer une nouvelle norme intérieure"] },
  { number: "06", title: "Intelligence émotionnelle et relationnelle", color: "#78427f", items: ["5 compétences de Goleman appliquées au management", "Feedback émotionnellement intelligent", "Manager en période de changement et d'incertitude"] },
  { number: "07", title: "Ancrer ton nouveau standard", color: "#78427f", items: ["Stabilité émotionnelle durable et rituels quotidiens", "Tenir dans les crises et pics de pression", "Profil R.E.A.L. bilan final"] },
  { number: "08", title: "AVANCÉ — Gérer un collaborateur toxique", color: "#cda540", items: ["Reconnaître : 3 critères, 5 profils, diagnostic factuel", "Intervenir : conversation directe, maintenir le cadre, protéger l'équipe", "Sortir et reconstruire : l'après, plan d'action"] },
];

const mois = [
  { num: "01", title: "Réguler son système nerveux", items: ["Définir les objectifs personnalisés et le plan des 3 mois", "Explorer les états nerveux et identifier son profil dominant", "Installer une routine de régulation adaptée", "Travailler les modules M1–M3 en lien avec les situations réelles", "Premiers outils : respiration, ancrage, régulation rapide, visualisation, audios"] },
  { num: "02", title: "Comprendre ses schémas relationnels", items: ["Triangle de Karpman et schémas — modules M4–M5", "Identification du rôle réflexe dans les dynamiques toxiques", "CNV : préparer et conduire un entretien difficile", "Travail sur les croyances limitantes et l'identité de manager"] },
  { num: "03", title: "Ancrer — Intervenir — Atteindre son objectif", items: ["Simulation d'entretiens difficiles avec debriefing", "Ancrage des rituels de régulation long terme", "Déploiement du plan d'action 30/60/90 jours"] },
];

export default function NeurosciencesManagersPage() {
  return (
    <>
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-24 pb-20" style={{ backgroundColor: "#1a0a1e" }}>
        <GradientBlob />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full" style={{ border: "1px solid #cda540", color: "#cda540", backgroundColor: "rgba(205,165,64,0.08)" }}>Formation en ligne · Accompagnement individuel</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Neurosciences{" "}<span style={{ color: "#cda540" }}>pour Managers</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">24h de formation en ligne · 18h d&apos;accompagnement individuel · 3 mois</p>
            <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">Comprendre et gérer les comportements difficiles et toxiques à la lumière des neurosciences. Un programme complet pour managers en activité, 100 % à distance.</p>
            <CalendlyButton variant="primary" size="lg">Réserver un entretien découverte</CalendlyButton>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}>Un programme en deux piliers</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <SectionReveal direction="left">
              <div className="rounded-xl p-8 h-full" style={{ border: "2px solid #78427f", background: "rgba(120,66,127,0.02)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "#78427f", color: "white" }}><Monitor size={22} /></div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#78427f" }}>Formation en ligne</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: "#cda540" }}>24h · 8 modules · 54 capsules vidéo (~10 min)</p>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">Un contenu structuré, progressif, accessible à vie avec tous les ajouts en temps réel inclus.</p>
                <ul className="space-y-2">
                  {["Accès illimité à vie", "Tous les ajouts en temps réel inclus", "Progressez à votre rythme, depuis n'importe où"].map((item) => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "#78427f" }} /><span className="text-sm text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal direction="right">
              <div className="rounded-xl p-8 h-full" style={{ border: "2px solid #cda540", background: "rgba(205,165,64,0.02)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "#cda540", color: "white" }}><Users size={22} /></div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#cda540" }}>Accompagnement individuel</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: "#78427f" }}>1h30 / semaine · 3 mois · 18h au total · Zoom</p>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">Chaque séance s&apos;articule autour de vos situations professionnelles réelles de la semaine.</p>
                <ul className="space-y-2">
                  {["Travail sur vos situations réelles", "Progression personnalisée à votre rythme", "Plan d'action 30/60/90 jours", "Suivi de la transformation sur 3 mois"].map((item) => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "#cda540" }} /><span className="text-sm text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f2ede5" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#cda540" }}>À l&apos;issue du programme</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}>Vous serez capable de</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { num: "01", title: "Qualifier avec précision", body: "Distinguer une situation de comportement difficile ou toxique à partir de faits observables, en utilisant les 3 critères clés : impact, persistance, conscience." },
              { num: "02", title: "Expliquer les mécanismes", body: "Comprendre les mécanismes neuro-émotionnels impliqués dans les comportements toxiques et leurs effets sur l'équipe et sur vous-même." },
              { num: "03", title: "Utiliser une boîte à outils", body: "Maîtriser grilles de lecture, trames d'entretien et protocoles de régulation directement opérationnels en situation réelle." },
              { num: "04", title: "Adopter une posture régulée", body: "Développer une posture managériale plus ferme et protectrice pour l'équipe, ancrée dans la stabilité de votre système nerveux." },
              { num: "05", title: "Déployer un plan d'action", body: "Construire et mettre en œuvre un plan d'action personnel à 30/60/90 jours sur vos propres cas managériaux." },
            ].map((obj, i) => (
              <SectionReveal key={obj.num} delay={i * 0.05}>
                <div className="flex gap-5 p-6 rounded-xl" style={{ background: "white", border: "1px solid rgba(120,66,127,0.1)" }}>
                  <span className="text-4xl font-black shrink-0" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "rgba(120,66,127,0.15)" }}>{obj.num}</span>
                  <div><h3 className="font-bold text-base mb-2" style={{ color: "#78427f" }}>{obj.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{obj.body}</p></div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#1a0a1e" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#cda540" }}>Formation en ligne</span>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Les 8 modules</h2>
            <p className="text-white/50 mt-3 text-sm">54 capsules vidéo · ~10 min chacune · Accès illimité à vie</p>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-5">
            {modules.map((mod, i) => (
              <SectionReveal key={mod.number} delay={i * 0.06}>
                <div className="rounded-xl p-6 h-full" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${mod.color === "#cda540" ? "rgba(205,165,64,0.3)" : "rgba(120,66,127,0.2)"}` }}>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-2xl font-black shrink-0" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: mod.color, opacity: 0.6 }}>{mod.number}</span>
                    <h3 className="font-bold text-sm leading-snug" style={{ color: mod.color === "#cda540" ? "#cda540" : "white" }}>{mod.title}</h3>
                  </div>
                  <ul className="space-y-2 pl-10">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: mod.color, opacity: 0.7 }} />
                        <span className="text-xs text-white/60 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#cda540" }}>Accompagnement individuel</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}>Progression sur 3 mois</h2>
            <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">1h30 par semaine en distanciel via Zoom — 18h d&apos;accompagnement personnalisé sur vos situations réelles</p>
          </SectionReveal>
          <div className="space-y-5">
            {mois.map((m, i) => (
              <SectionReveal key={m.num} delay={i * 0.1}>
                <div className="rounded-xl p-7" style={{ border: "1px solid rgba(120,66,127,0.15)", background: "rgba(120,66,127,0.02)" }}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="shrink-0 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded" style={{ backgroundColor: "rgba(120,66,127,0.1)", color: "#78427f", whiteSpace: "nowrap" }}>Mois {m.num}</div>
                    <div>
                      <h3 className="font-bold mb-3" style={{ color: "#1a0a1e" }}>{m.title}</h3>
                      <ul className="space-y-1.5">
                        {m.items.map((item) => (
                          <li key={item} className="flex items-start gap-2"><CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: "#cda540" }} /><span className="text-sm text-gray-600">{item}</span></li>
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

      <section style={{ backgroundColor: "#f2ede5" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <SectionReveal direction="left">
              <div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#78427f", color: "white" }}><Users size={18} /></div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}>Public visé</h3>
                <p className="text-gray-700 leading-relaxed">Cadres, Dirigeants et Managers en activité qui souhaitent comprendre et gérer les comportements difficiles ou toxiques par les outils des neurosciences.</p>
              </div>
            </SectionReveal>
            <SectionReveal direction="right">
              <div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#cda540", color: "white" }}><Brain size={18} /></div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}>Prérequis</h3>
                <p className="text-gray-700 leading-relaxed">Aucun prérequis nécessaire. Une expérience en management d&apos;équipe est recommandée pour tirer pleinement profit du programme.</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#1a0a1e" }} className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block mb-6" style={{ border: "1px solid #cda540", color: "#cda540", backgroundColor: "rgba(205,165,64,0.08)" }}>Inclus dans le programme</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Un week-end immersif{" "}<span style={{ color: "#cda540" }}>au cœur du vivant</span></h2>
            <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">Au cours des 3 mois, un week-end complet pour ancrer dans le corps ce que la formation a travaillé dans la tête.</p>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
            <SectionReveal delay={0} className="col-span-2">
              <div className="relative rounded-2xl overflow-hidden h-64 md:h-72" style={{ background: "rgba(205,165,64,0.08)" }}>
                <img src="/weekend/jacuzzi.jpg" alt="Jacuzzi privatif" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(26,10,30,0.85) 0%, transparent 60%)" }}>
                  <span className="text-white font-semibold text-sm">Jacuzzi privatif</span>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.08} className="col-span-2">
              <div className="relative rounded-2xl overflow-hidden h-64 md:h-72" style={{ background: "rgba(120,66,127,0.12)" }}>
                <img src="/weekend/chambre.jpg" alt="Chambre confortable" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(26,10,30,0.85) 0%, transparent 60%)" }}>
                  <span className="text-white font-semibold text-sm">Chambre & espace privatif</span>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.14} className="col-span-2 md:col-span-3">
              <div className="relative rounded-2xl overflow-hidden h-56 md:h-64" style={{ background: "rgba(120,66,127,0.08)" }}>
                <img src="/weekend/equicoaching-session.jpg" alt="Atelier équicoaching avec Sarah Dabancens" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(26,10,30,0.85) 0%, transparent 60%)" }}>
                  <span className="text-white font-semibold text-sm">Atelier équicoaching en extérieur</span>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2} className="col-span-2 md:col-span-1">
              <div className="relative rounded-2xl overflow-hidden h-56 md:h-64" style={{ background: "rgba(205,165,64,0.06)" }}>
                <img src="/weekend/cheval.jpg" alt="Cheval au coucher du soleil" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(26,10,30,0.85) 0%, transparent 60%)" }}>
                  <span className="text-white font-semibold text-sm">Le cadre naturel</span>
                </div>
              </div>
            </SectionReveal>
          </div>
          <SectionReveal>
            <div className="rounded-2xl p-8 md:p-10" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(205,165,64,0.2)" }}>
              <h3 className="text-xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Tout est inclus dans les 3 500 €</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { emoji: "🛏️", title: "Hébergement", desc: "Chambre privatisée pour la durée du week-end" },
                  { emoji: "🍽️", title: "Repas", desc: "Repas inclus pendant tout le séjour" },
                  { emoji: "♨️", title: "Jacuzzi privatif", desc: "Accès au jacuzzi pour une récupération profonde" },
                  { emoji: "🐴", title: "Atelier équicoaching", desc: "Session intensive avec les chevaux pour ancrer les apprentissages" },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="text-3xl mb-3">{item.emoji}</div>
                    <h4 className="font-bold text-sm mb-2" style={{ color: "#cda540" }}>{item.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-white/40 text-xs mt-8">Le week-end se déroule pendant la période d&apos;accompagnement des 3 mois, à une date définie ensemble selon vos disponibilités.</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a0a1e" }}>Modalités pratiques</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Dates", value: "À définir selon vos disponibilités" },
              { label: "Durée totale", value: "24h formation + 18h accompagnement" },
              { label: "Format", value: "100 % distanciel via Zoom" },
              { label: "Accès formation", value: "Illimité à vie, mises à jour incluses" },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.07}>
                <div className="rounded-xl p-5 text-center" style={{ background: "rgba(120,66,127,0.03)", border: "1px solid rgba(120,66,127,0.1)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#78427f" }}>{item.label}</p>
                  <p className="text-sm text-gray-600 leading-snug">{item.value}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal className="mt-8">
            <div className="rounded-xl p-5 text-sm text-gray-500" style={{ background: "rgba(120,66,127,0.02)", border: "1px solid rgba(120,66,127,0.08)" }}>
              <p className="mb-1"><span className="font-semibold text-gray-700">Délai d&apos;accès :</span> Le bénéficiaire doit retourner tous les documents signés 5 jours avant le début de la formation.</p>
              <p><span className="font-semibold text-gray-700">Accessibilité :</span> Pour toute situation de handicap, merci de nous contacter. Aménagements au cas par cas : tiers-temps, adaptation des modalités.</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section style={{ backgroundColor: "#1a0a1e" }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block" style={{ color: "#cda540" }}>Investissement</span>
            <div className="inline-block rounded-2xl px-10 py-6 mb-8" style={{ border: "2px solid #cda540", background: "rgba(205,165,64,0.05)" }}>
              <p className="text-white/60 text-sm mb-1">Tarif inter-entreprise</p>
              <p className="text-5xl font-bold" style={{ color: "#cda540", fontFamily: "'Playfair Display', Georgia, serif" }}>3 500 €</p>
              <p className="text-white/50 text-sm mt-1">net de taxe · par participant</p>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Parlons de votre situation</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Un entretien découverte pour comprendre votre contexte, identifier ce qui bloque et co-construire le parcours le plus adapté.</p>
            <CalendlyButton variant="outline" size="lg">Réserver un entretien découverte</CalendlyButton>
            <p className="text-white/40 text-sm mt-4">Gratuit · Confidentiel · Sans engagement</p>
            <p className="text-white/40 text-xs mt-3">Sarah Dabancens · 06 43 45 51 45 · contact@sd-equicoaching.com</p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}