/**
 * Single source of truth for all business content.
 * Everything here is faithful to the company's existing material.
 * Fields marked `placeholder: true` are intentionally empty and ready
 * for the owner to supply real data (per brief: never fabricate numbers).
 */

export const site = {
  name: "D&K Elektro-instalace s.r.o.",
  shortName: "D&K Elektro",
  legalName: "D&K Elektro-instalace s.r.o.",
  domain: "https://www.dkelektro-in.cz",
  tagline: "Moderní elektroinstalace pro vaše bydlení.",
  description:
    "Elektroinstalace, chytré domácnosti a fotovoltaika od profesionálního týmu elektrikářů. Efektivní, spolehlivé a bezpečné — od projektu až po realizaci.",
  owner: "Vlastimil Dufek",
  phone: "+420 722 411 839",
  phoneHref: "tel:+420722411839",
  email: "vlastik.dufek@dkelektro-in.cz",
  ico: "17546541",
  dic: "CZ17546541",
  address: {
    street: "Příčná 796",
    city: "Zvole u Prahy",
    zip: "252 45",
    region: "Středočeský kraj",
    country: "CZ",
  },
  /** Approx. coordinates for Zvole u Prahy — refine if exact pin is needed. */
  geo: { lat: 49.9419, lng: 14.395 },
  areaServed: ["Praha", "Praha-západ", "Středočeský kraj"],
  /** No published hours in source material — placeholder, owner to confirm. */
  hours: {
    placeholder: true,
    weekday: "Po–Pá  7:00–17:00",
    weekend: "So–Ne  po domluvě",
  },
};

export const nav = [
  { label: "Služby", href: "/#sluzby" },
  { label: "Chytré domácnosti", href: "/#chytre-domacnosti" },
  { label: "Fotovoltaika", href: "/#fotovoltaika" },
  { label: "Realizace", href: "/#realizace" },
  { label: "O nás", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;

/** Hero — four faithful, benefit-led points. */
export const heroBenefits = [
  "Kompletní i drobné elektroinstalace",
  "Chytré domácnosti na míru",
  "Fotovoltaika a úspora energií",
  "Revize, servis a práce načisto",
];

/** Trust strip — qualitative claims taken verbatim from the company's
 *  own material. Numeric values (years, Google rating) are placeholders. */
export const trust = [
  {
    value: "Stovky",
    label: "úspěšných realizací",
    note: "Z vlastní prezentace firmy.",
  },
  {
    value: "Dlouholeté",
    label: "zkušenosti v oboru",
    note: "„Elektrikáři s dlouholetými zkušenostmi.“",
  },
  {
    value: "Férové",
    label: "jednání a ceny",
    note: "„Elektrikáři s férovým jednáním.“",
  },
  {
    value: "Načisto",
    label: "včetně zednického začištění",
    note: "Realizace dotahujeme do detailu.",
  },
];

export const whyUs = [
  {
    icon: "handshake",
    title: "Férové jednání",
    text: "Jasná domluva a transparentní cena, na kterou se můžete spolehnout.",
  },
  {
    icon: "experience",
    title: "Dlouholeté zkušenosti",
    text: "Tým elektrikářů a odborníků na chytré technologie i fotovoltaiku.",
  },
  {
    icon: "broom",
    title: "Práce načisto",
    text: "Instalace dokončujeme včetně následného zednického začištění.",
  },
  {
    icon: "route",
    title: "Od projektu po realizaci",
    text: "Provedeme vás celým procesem — od návrhu až po předání.",
  },
  {
    icon: "shield-check",
    title: "Revize a servis",
    text: "Kvalitní revize i pravidelná údržba, aby vše fungovalo, jak má.",
  },
  {
    icon: "cpu",
    title: "Chytré technologie",
    text: "Specializujeme se na propojení domácnosti a moderní řízení.",
  },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  excerpt: string;
  /** Longer copy for the dedicated landing page. */
  detail: string;
  highlights: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "elektroinstalace",
    icon: "plug",
    title: "Kompletní elektroinstalace",
    excerpt:
      "Drobné i kompletní elektroinstalace v domácnostech, přívodech i dílčích rozvodech.",
    detail:
      "Úspěšně provádíme drobné i kompletní elektroinstalace v domácnostech, přívodech či dílčích elektro rozvodech. Postaráme se o návrh, samotnou realizaci i následné zednické začištění, abyste dostali práci hotovou načisto.",
    highlights: [
      "Nové i rekonstruované rozvody",
      "Přívody a dílčí elektro rozvody",
      "Následné zednické začištění",
    ],
    featured: true,
  },
  {
    slug: "opravy-a-domovni-instalace",
    icon: "wrench",
    title: "Opravy a domovní instalace",
    excerpt:
      "Spolehlivé opravy a údržba světel, zásuvek a veškerých domovních instalací.",
    detail:
      "Poskytujeme kvalitní a spolehlivé služby v oblasti oprav a údržby světel, zásuvek a veškerých domovních instalací. Ozvěte se s čímkoli, co doma nefunguje, jak má.",
    highlights: ["Světla a zásuvky", "Domovní instalace", "Rychlé opravy"],
  },
  {
    slug: "chytre-domacnosti",
    icon: "smart-home",
    title: "Chytré domácnosti",
    excerpt:
      "Instalace a propojení chytré domácnosti — pohodlí, úspora a bezpečí na dosah.",
    detail:
      "Nabízíme instalaci a propojení vaší domácnosti s internetem, abyste mohli využívat všechny výhody moderních technologií. Naši technici jsou odborníci na instalaci Wi-Fi sítí, propojení chytrých zařízení i vytváření sítí pro kancelářské potřeby. Rádi poradíme i s výběrem vhodného poskytovatele připojení.",
    highlights: [
      "Chytré osvětlení, termostaty a zásuvky",
      "Hlasový asistent a scénáře",
      "Wi-Fi sítě a propojení zařízení",
    ],
    featured: true,
  },
  {
    slug: "fotovoltaika",
    icon: "solar",
    title: "Fotovoltaika",
    excerpt:
      "Vlastní čistá energie ze střechy. Nižší účty a menší závislost na dodavatelích.",
    detail:
      "Využijte střechu vašeho domu a ušetřete na energiích s naší instalací fotovoltaiky. S fotovoltaickými panely získáte čistou a levnou energii ze slunce — šetrnou k životnímu prostředí i k vaší peněžence. Realizace provádíme ve spolupráci s firmou green energy solution s.r.o.",
    highlights: [
      "Návrh dle spotřeby domácnosti",
      "Kvalitní a spolehlivé komponenty",
      "Realizace s partnerem green energy solution s.r.o.",
    ],
    featured: true,
  },
  {
    slug: "revize-a-servis",
    icon: "shield-check",
    title: "Revize a servis",
    excerpt:
      "Pravidelná údržba a revize elektroinstalací i chytrých domácností.",
    detail:
      "Nabízíme kvalitní služby v oblasti revizí a servisu. Provádíme pravidelnou údržbu vašich elektroinstalací a chytrých domácností, abyste měli jistotu, že všechno funguje tak, jak má.",
    highlights: ["Revize elektroinstalací", "Pravidelná údržba", "Servis chytrých domácností"],
  },
  {
    slug: "mereni-osvetleni",
    icon: "light",
    title: "Měření osvětlení",
    excerpt:
      "Změříme osvětlení ve vašem domě a najdeme nejlepší řešení pro vaše potřeby.",
    detail:
      "Provádíme měření osvětlení vašeho domu a pomáháme vám najít nejlepší řešení pro vaše potřeby — ať už jde o komfort, úsporu, nebo splnění požadavků na pracovní prostředí.",
    highlights: ["Měření intenzity osvětlení", "Návrh řešení", "Úsporné varianty"],
  },
  {
    slug: "protipozarni-ucpavky",
    icon: "fire",
    title: "Protipožární ucpávky",
    excerpt: "Ucpávky, které pomáhají chránit váš domov před šířením požáru.",
    detail:
      "Poskytujeme služby v oblasti protipožárních ucpávek, které pomáhají chránit váš domov před požáry a omezují šíření ohně mezi prostory.",
    highlights: ["Prostupy a kabelové trasy", "Ochrana před šířením ohně", "Dle norem"],
  },
  {
    slug: "hromosvody",
    icon: "bolt",
    title: "Hromosvody",
    excerpt: "Instalace hromosvodů, abyste se cítili bezpečně i během bouřky.",
    detail:
      "Provádíme instalace hromosvodů, abyste se mohli cítit bezpečně i během bouřky a ochránili svůj majetek před následky úderu blesku.",
    highlights: ["Návrh a montáž", "Ochrana objektu", "Klid i za bouřky"],
  },
  {
    slug: "zabezpecovaci-a-slaboproude-systemy",
    icon: "cctv",
    title: "Zabezpečovací a slaboproudé systémy",
    excerpt:
      "Zabezpečení proti vloupání a slaboproud ve spolupráci s firmou TCS.",
    detail:
      "Poskytujeme zabezpečovací systémy, které pomáhají chránit váš domov před vloupáním a krádežemi. Spolupracujeme s českou pobočkou firmy TCS — specialistou na přístupové systémy a komunikační technologie (čipové přístupy, domovní telefony a podobně).",
    highlights: [
      "Zabezpečení proti vloupání",
      "Přístupové systémy a čipy",
      "Domovní telefony (partner TCS)",
    ],
  },
  {
    slug: "externi-sluzby",
    icon: "factory",
    title: "Externí služby",
    excerpt:
      "Záskok v průmyslových technologiích a elektroúdržbě pro firmy.",
    detail:
      "Nabízíme širokou škálu externích služeb v oblasti záskoku v průmyslových technologiích a elektroúdržbě. Hodí se, když potřebujete spolehlivě posílit vlastní tým.",
    highlights: ["Záskok v průmyslu", "Elektroúdržba", "Flexibilní spolupráce"],
  },
];

export const smartHomePackages = [
  {
    name: "Smart Home Basic",
    text: "Instalace a propojení chytrých termostatů, osvětlení, zabezpečovacích systémů a chytrých zásuvek.",
    items: ["Chytré termostaty", "Osvětlení", "Zabezpečení", "Chytré zásuvky"],
  },
  {
    name: "Smart Home Deluxe",
    text: "Vše z balíčku Basic, navíc chytré ovladače a hlasový asistent pro plné pohodlí.",
    items: [
      "Vše z Basic",
      "Chytré ovladače",
      "Hlasový asistent",
      "Propojené scénáře",
    ],
    featured: true,
  },
  {
    name: "Smart Home Custom",
    text: "Řešení na míru pro konkrétní požadavky — kompletní instalace a propojení zařízení dle vašeho výběru.",
    items: ["Návrh na míru", "Zařízení dle výběru", "Kompletní instalace"],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Kontakt",
    text: "Ozvete se nám telefonem nebo přes formulář a popíšete svou představu.",
  },
  {
    n: "02",
    title: "Konzultace",
    text: "Probereme možnosti, navrhneme řešení a domluvíme se na rozsahu prací.",
  },
  {
    n: "03",
    title: "Cenová nabídka",
    text: "Připravíme jasnou a férovou nabídku bez skrytých položek.",
  },
  {
    n: "04",
    title: "Realizace",
    text: "Vše odborně nainstalujeme — včetně následného zednického začištění.",
  },
  {
    n: "05",
    title: "Předání a servis",
    text: "Předáme hotové dílo, provedeme revizi a jsme tu i pro pozdější servis.",
  },
];

/** Partners explicitly named in the company's material. */
export const partners = [
  { name: "TCS", note: "Přístupové systémy a slaboproud" },
  { name: "green energy solution s.r.o.", note: "Fotovoltaika" },
];

export type Project = {
  slug: string;
  title: string;
  category: "Elektroinstalace" | "Fotovoltaika" | "Chytré domácnosti";
  location?: string;
  excerpt: string;
};

/** Real references named on the existing site. Photography to be added. */
export const projects: Project[] = [
  {
    slug: "rozvody-po-zdech-atelier",
    title: "Rozvody po zdech",
    category: "Elektroinstalace",
    location: "Ateliér",
    excerpt: "Realizace povrchové elektroinstalace v ateliéru.",
  },
  {
    slug: "fotovoltaika-rd-uhrineves",
    title: "Fotovoltaika RD Uhříněves",
    category: "Fotovoltaika",
    location: "Praha – Uhříněves",
    excerpt: "Instalace fotovoltaiky na rodinném domě.",
  },
  {
    slug: "fve-topelec",
    title: "FVE Topělec",
    category: "Fotovoltaika",
    location: "Topělec",
    excerpt: "Realizace fotovoltaiky na bobrovce v Topělci.",
  },
];

export const projectFilters = [
  "Vše",
  "Elektroinstalace",
  "Fotovoltaika",
  "Chytré domácnosti",
] as const;

/** FAQ — answers grounded strictly in the company's services and facts.
 *  Nothing about price, warranty length, or timelines is invented. */
export const faqs = [
  {
    q: "Jaké služby nabízíte?",
    a: "Provádíme drobné i kompletní elektroinstalace, opravy a domovní instalace, chytré domácnosti, fotovoltaiku, revize a servis, měření osvětlení, protipožární ucpávky, hromosvody, zabezpečovací a slaboproudé systémy i externí služby pro firmy.",
  },
  {
    q: "Kde působíte?",
    a: "Sídlíme ve Zvoli u Prahy a působíme v Praze a okolí. Pro konkrétní lokalitu se nám ozvěte — rádi domluvíme detaily.",
  },
  {
    q: "Instalujete chytré domácnosti?",
    a: "Ano. Nabízíme instalaci a propojení chytré domácnosti — termostaty, osvětlení, zabezpečení, chytré zásuvky, ovladače i hlasového asistenta. Vybírat můžete ze tří balíčků (Basic, Deluxe, Custom) nebo připravíme řešení na míru.",
  },
  {
    q: "Provádíte revize elektroinstalací?",
    a: "Ano, nabízíme kvalitní služby v oblasti revizí a servisu, včetně pravidelné údržby elektroinstalací i chytrých domácností.",
  },
  {
    q: "Spolupracujete na fotovoltaice s někým?",
    a: "Realizace fotovoltaiky provádíme ve spolupráci s firmou green energy solution s.r.o. U zabezpečovacích a slaboproudých systémů spolupracujeme s českou pobočkou firmy TCS.",
  },
  {
    q: "Uklidíte po sobě a začistíte zdi?",
    a: "Ano. Instalace provádíme včetně následného zednického začištění, takže práci dostanete hotovou načisto.",
  },
  {
    q: "Jak si u vás objednám práci?",
    a: "Stačí zavolat na +420 722 411 839 nebo vyplnit kontaktní formulář. Domluvíme konzultaci, připravíme cenovou nabídku a po odsouhlasení realizujeme.",
  },
];

export const legalPages = [
  { slug: "ochrana-osobnich-udaju", title: "Ochrana osobních údajů" },
  { slug: "cookies", title: "Zásady používání cookies" },
];
