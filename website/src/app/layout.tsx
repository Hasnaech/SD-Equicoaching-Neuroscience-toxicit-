import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sd-equicoaching.fr"),
  title: {
    template: "%s | SD Équicoaching",
    default:
      "SD Équicoaching : Formation Leadership & Neurosciences pour Managers",
  },
  description:
    "Formation leadership par les neurosciences et l'équicoaching. Certifié Qualiopi, éligible OPCO. Manager de Transition pour dirigeants et DRH.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "SD Équicoaching",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="flex flex-col min-h-screen antialiased">
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
