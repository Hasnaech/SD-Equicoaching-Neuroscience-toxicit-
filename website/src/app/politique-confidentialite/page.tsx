import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Politique de confidentialité | SD Équicoaching",
  description: "Politique de confidentialité et de traitement des données personnelles de SD Équicoaching.",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
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
          Politique de confidentialité
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles collectées
              via ce site est :
            </p>
            <p className="mt-3">
              <strong>SD Équicoaching</strong>, Sarah Dabancens
              <br />
              Email : sarah.dabancens@sd-equicoaching.fr
              <br />
              Téléphone : 06 43 45 51 45
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Données collectées
            </h2>
            <p>
              Ce site ne contient aucun formulaire de contact. Les données
              personnelles susceptibles d&apos;être collectées sont :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 pl-2">
              <li>
                Via Calendly (service tiers) : nom, prénom, adresse email,
                informations saisies lors de la prise de rendez-vous
              </li>
              <li>
                Via les liens de contact directs (email, téléphone) : les
                données que vous nous communiquez volontairement
              </li>
              <li>
                Données de navigation : adresse IP, données de navigation
                collectées via les outils d&apos;analyse du prestataire
                d&apos;hébergement
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Finalités du traitement
            </h2>
            <p>
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 pl-2">
              <li>
                La gestion des prises de rendez-vous et des demandes de contact
              </li>
              <li>
                La communication relative aux services de SD Équicoaching
              </li>
              <li>
                L&apos;amélioration du site et de l&apos;expérience utilisateur
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Durée de conservation
            </h2>
            <p>
              Les données personnelles sont conservées pendant la durée
              nécessaire à l&apos;accomplissement des finalités pour lesquelles
              elles ont été collectées, et en tout état de cause pendant une
              durée maximale de 3 ans à compter du dernier contact.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Partage des données
            </h2>
            <p>
              SD Équicoaching ne vend, ne loue et ne partage pas vos données
              personnelles avec des tiers à des fins commerciales.
            </p>
            <p className="mt-3">
              Des données peuvent être transmises à des prestataires techniques
              (Calendly, hébergeur) dans le cadre de la fourniture de leurs
              services, dans le respect du RGPD. Calendly est soumis à sa
              propre politique de confidentialité disponible sur
              calendly.com/privacy.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Vos droits
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez des
              droits suivants :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 pl-2">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous par email à{" "}
              <a
                href="mailto:sarah.dabancens@sd-equicoaching.fr"
                className="hover:underline font-medium"
                style={{ color: "#78427f" }}
              >
                sarah.dabancens@sd-equicoaching.fr
              </a>{" "}
              en joignant une copie d&apos;un justificatif d&apos;identité.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Cookies
            </h2>
            <p>
              Ce site utilise des cookies techniques nécessaires au
              fonctionnement du site. Il n&apos;utilise pas de cookies de
              traçage publicitaire ou de suivi comportemental tiers à des fins
              commerciales.
            </p>
            <p className="mt-3">
              Les cookies de l&apos;hébergeur (Vercel) peuvent collecter des
              données de performance anonymisées conformément à leur politique
              de confidentialité.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#78427f" }}
            >
              Réclamation auprès de la CNIL
            </h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              introduire une réclamation auprès de la Commission Nationale de
              l&apos;Informatique et des Libertés (CNIL), 3 place de Fontenoy,
              75007 Paris, www.cnil.fr.
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
