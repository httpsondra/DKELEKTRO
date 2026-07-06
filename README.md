# D&K Elektro-instalace — web

Moderní, rychlý a konverzní web pro D&K Elektro-instalace s.r.o.
(elektroinstalace · chytré domácnosti · fotovoltaika).

Postaveno od základu jako prémiový produkt — ne šablona.

## Design

Premium utilitární minimalismus / editorial. Teplá monochromatická plocha
(`#FBFBFA`), vlásečnicové linky `#EAEAEA`, ultra-ploché „bento" karty,
tlumené pastelové akcenty (bez privilegované barvy), faux-OS okno pro
mockup chytré domácnosti.

## Stack

- **Next.js 15** (App Router, Server Components)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first design tokens)
- **Newsreader** (editorial serif nadpisy) · **Geist** (UI) · **Geist Mono**
  (meta/labels) — `next/font`, self-hosted, `latin` + `latin-ext`.
- **Phosphor Icons** (bold/fill) — technický, stejnoměrný tah.

## Spuštění

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkční build
npm start        # produkční server
```

## Struktura

```
app/
  layout.tsx              # metadata, OG/Twitter, JSON-LD, fonty, skip-link
  page.tsx                # domovská stránka (skládá sekce)
  globals.css             # design systém (tokeny, typografie, komponenty)
  sluzby/[slug]/page.tsx  # landing page pro každou službu (SSG + breadcrumb JSON-LD)
  api/contact/route.ts    # příjem poptávky (validace; sem napojit e-mail/CRM)
  sitemap.ts / robots.ts  # SEO
  ochrana-osobnich-udaju, cookies   # právní stránky (šablony k doplnění)
  not-found.tsx           # 404
  icon.png                # favicon
components/
  site/                   # Header, Footer, LegalShell
  sections/               # Hero, TrustBar, WhyUs, Services, SmartHome,
                          # Fotovoltaika, Process, About, Projects,
                          # Testimonials, Faq, FinalCta, Contact, Partners
  ui/                     # Icon, Logo, Reveal, CountUp, MediaPlaceholder
lib/
  data.ts                 # JEDINÝ zdroj obsahu (texty, služby, kontakt…)
  seo.tsx                 # generátory JSON-LD (LocalBusiness, FAQ, Service, Breadcrumb)
public/
  og.jpg, logo.jpg        # OG náhled a logo
```

## Kde upravovat obsah

Veškerý text, služby, kontaktní údaje, FAQ i reference jsou v **`lib/data.ts`**.
Není potřeba sahat do komponent.

## Připraveno k doplnění (záměrné placeholdery — nic se nevymýšlí)

Podle zadání nejsou žádná čísla ani recenze vymyšlené. Tato místa jsou
elegantně připravená na reálné podklady:

- **Fotografie realizací** — aktuálně **ilustrační demo fotografie**
  (stock, Unsplash) v `public/images/`, aby klient viděl potenciál hotového
  webu. Nejsou to fotky skutečných realizací D&K — před ostrým spuštěním je
  nahraďte reálnými snímky (stejné názvy souborů, žádná změna kódu).
- **Recenze** — sekce „Reference“ je honest empty-state ve stylu Google recenzí.
- **Čísla** (roky, hodnocení Google) — trust strip používá pouze doložitelná
  tvrzení z původní prezentace; číselná pole jsou připravena pro `CountUp`
  (`components/ui/CountUp.tsx`).
- **Otevírací doba** — `site.hours` v `lib/data.ts` (k potvrzení).
- **Právní texty** — `ochrana-osobnich-udaju` a `cookies` jsou šablony
  k právní kontrole.
- **Doručení poptávky** — `app/api/contact/route.ts` validuje vstup; doplňte
  odeslání e-mailu (Resend / SMTP) nebo napojení na CRM (označeno `TODO`).

## SEO & přístupnost

- Sémantické HTML, jediný `<h1>`, korektní hierarchie nadpisů.
- JSON-LD: `Electrician`/`LocalBusiness`, `WebSite`, `FAQPage`,
  `Service`, `BreadcrumbList`.
- OpenGraph + Twitter Card, kanonické URL, `sitemap.xml`, `robots.txt`.
- WCAG 2.2 AA: viditelný focus ring, skip-link, ARIA stavy, `prefers-reduced-motion`,
  dostatečný kontrast, klávesová ovladatelnost.
- Animace jsou progresivní vylepšení — bez JS je veškerý obsah viditelný
  (třída `js` na `<html>`), hero animace neblokuje LCP.

## Doména

Produkční doména je nastavena v `lib/data.ts` (`site.domain`).
Před nasazením ji upravte podle skutečné adresy.
