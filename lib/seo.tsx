import { site, services, faqs } from "./data";

/** LocalBusiness / Electrician schema for the organisation. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${site.domain}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    image: `${site.domain}/og.jpg`,
    logo: `${site.domain}/logo.png`,
    description: site.description,
    founder: { "@type": "Person", name: site.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.zip,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    vatID: site.dic,
    taxID: site.ico,
    priceRange: "$$",
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.excerpt,
        url: `${site.domain}/sluzby/${s.slug}`,
      },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.domain}/#website`,
    url: site.domain,
    name: site.name,
    inLanguage: "cs-CZ",
    publisher: { "@id": `${site.domain}/#business` },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceJsonLd(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.detail,
    url: `${site.domain}/sluzby/${s.slug}`,
    serviceType: s.title,
    provider: { "@id": `${site.domain}/#business` },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

/** Renders a JSON-LD <script>. data can be one object or an array. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
