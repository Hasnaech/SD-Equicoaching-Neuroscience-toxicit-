import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mentions légales | SD Équicoaching",
  description: "Mentions légales de SD Équicoaching.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div style={{ backgroundColor: "#f2ede5" }} className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1
          className="text-4xl font-bold mb-12"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#1a0a1e",
          }}
        >
          Mentions légales
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Éditeur du site
            </h2>
            <p>
              <strong>SD Équicoaching</strong>
              <br />
              Fondatrice : Sarah Dabancens
              <br />
              Adresse : Ranch Horse Paradise, Boutigny-sur-Essonne, France
              <br />
              Email :{" "}
              <a
                href="mailto:sarah.dabancens@sd-equicoaching.fr"
                className="hover:underline"
                style={{ color: "#78427f" }}
              >
                sarah.dabancens@sd-equicoaching.fr
              </a>
              <br />
              Téléphone : 06 43 45 51 45
            </p>
            <p className="mt-3">
              SD Équicoaching est un organisme de formation enregistré sous le
              numéro de déclaration d&apos;activité conforme à la réglementation
              en vigueur, certifié Qualiopi.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701,
              San Francisco, California 94104, États-Unis.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes,
              structure) est la propriété exclusive de SD Équicoaching ou de
              ses partenaires et est protégé par les lois françaises et
              internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation
              écrite préalable de SD Équicoaching.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Liens hypertextes
            </h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. SD
              Équicoaching n&apos;a aucun contrôle sur le contenu de ces sites et
              décline toute responsabilité quant à leur contenu ou leur
              politique de confidentialité.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Limitation de responsabilité
            </h2>
            <p>
              Les informations contenues sur ce site sont données à titre
              informatif. SD Équicoaching ne saurait garantir l&apos;exactitude,
              l&apos;exhaustivité ou l&apos;actualité des informations diffusées sur ce
              site.
            </p>
            <p className="mt-3">
              SD Équicoaching décline toute responsabilité pour tout dommage
              direct ou indirect résultant de l&apos;accès à ce site ou de
              l&apos;utilisation des informations y figurant.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <p className="text-sm text-gray-400 pt-6 border-t border-gray-200">
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </div>
    </div>
  );
}
