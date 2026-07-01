import type { Metadata } from "next";
import { LegalShell } from "@/components/site/LegalShell";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Jak D&K Elektro-instalace s.r.o. zpracovává osobní údaje zájemců a zákazníků.",
  alternates: { canonical: "/ochrana-osobnich-udaju" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Ochrana osobních údajů">
      <p>
        <strong>Poznámka:</strong> Tento dokument je připravená šablona. Před
        zveřejněním jej prosím doplňte a nechte zkontrolovat dle skutečného
        rozsahu zpracování a aktuální legislativy (GDPR / zákon č. 110/2019 Sb.).
      </p>

      <h2>1. Správce osobních údajů</h2>
      <p>
        Správcem osobních údajů je <strong>{site.legalName}</strong>, IČ{" "}
        {site.ico}, se sídlem {site.address.street}, {site.address.zip}{" "}
        {site.address.city}. Kontakt:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>,{" "}
        <a href={site.phoneHref}>{site.phone}</a>.
      </p>

      <h2>2. Jaké údaje zpracováváme</h2>
      <p>
        Zpracováváme údaje, které nám sami poskytnete prostřednictvím
        kontaktního formuláře, e-mailu nebo telefonu — zejména jméno, telefonní
        číslo, e-mail a obsah vaší zprávy.
      </p>

      <h2>3. Účel a právní základ</h2>
      <ul>
        <li>vyřízení vaší poptávky a komunikace s vámi (oprávněný zájem, příp. plnění smlouvy),</li>
        <li>příprava a realizace zakázky,</li>
        <li>plnění zákonných povinností (např. účetnictví).</li>
      </ul>

      <h2>4. Doba uchování</h2>
      <p>
        Údaje uchováváme po dobu nezbytně nutnou k uvedeným účelům a po dobu
        stanovenou právními předpisy.
      </p>

      <h2>5. Vaše práva</h2>
      <p>
        Máte právo na přístup ke svým údajům, jejich opravu či výmaz, omezení
        zpracování, vznesení námitky a podání stížnosti u Úřadu pro ochranu
        osobních údajů. Pro uplatnění práv nás kontaktujte na{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
