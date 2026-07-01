import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import { JsonLd, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CableFrames } from "@/components/ui/CableFrames";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  keywords: [
    "elektroinstalace",
    "elektrikář Praha",
    "chytrá domácnost",
    "smart home",
    "fotovoltaika",
    "revize elektro",
    "hromosvody",
    "Zvole u Prahy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1a21",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Mark JS as available before paint so reveal/entrance animations
            are purely progressive — no-JS users see all content instantly. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        {/* Ambient depth: a single, very faint drifting warm light spot. */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="ambient-blob ambient-spot absolute left-1/2 top-[-10%] h-[70vh] w-[70vh] -translate-x-1/2" />
        </div>
        {/* Scroll-scrubbed cable frame-sequence backdrop. */}
        <CableFrames />
        {/* Film grain — tactile, print-like luxury. Fixed, non-interactive. */}
        <div aria-hidden className="grain-overlay" />
        <ScrollProgress />
        <a href="#main" className="skip-link">
          Přeskočit na obsah
        </a>
        {children}
      </body>
    </html>
  );
}
