import type { Metadata } from "next";
import { LegalShell } from "@/components/site/LegalShell";

export const metadata: Metadata = {
  title: "Zásady používání cookies",
  description: "Informace o použití souborů cookies na webu D&K Elektro-instalace.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalShell title="Zásady používání cookies">
      <p>
        <strong>Poznámka:</strong> Tento dokument je připravená šablona. Doplňte
        ji podle cookies, které web po nasazení skutečně používá (analytika,
        marketing, mapy apod.).
      </p>

      <h2>Co jsou cookies</h2>
      <p>
        Cookies jsou malé textové soubory, které se ukládají ve vašem prohlížeči
        při návštěvě webových stránek. Pomáhají zajistit správné fungování webu a
        případně měřit jeho návštěvnost.
      </p>

      <h2>Jaké cookies používáme</h2>
      <ul>
        <li>
          <strong>Nezbytné</strong> — potřebné pro základní funkce webu.
        </li>
        <li>
          <strong>Analytické</strong> — pomáhají nám rozumět, jak je web
          využíván (pouze s vaším souhlasem).
        </li>
      </ul>

      <h2>Správa souhlasu</h2>
      <p>
        Nastavení cookies můžete kdykoli změnit ve svém prohlížeči. Po nasazení
        nástroje pro správu souhlasu zde bude k dispozici i možnost úpravy
        souhlasu přímo na webu.
      </p>
    </LegalShell>
  );
}
