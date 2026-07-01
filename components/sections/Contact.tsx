import { site } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

const mapQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.zip} ${site.address.city}`
);

export function Contact() {
  return (
    <section id="kontakt" className="section" aria-labelledby="contact-title">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <h2 id="contact-title" className="h2">
              Ozvěte se <em>nám.</em>
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="measure mt-5 text-[var(--color-muted)]">
              Zavolejte, napište e-mail nebo vyplňte formulář. Domluvíme
              konzultaci a připravíme nezávaznou nabídku.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal className="flex flex-col gap-6">
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              <ContactRow icon="phone" label="Telefon">
                <a href={site.phoneHref} className="font-medium text-[var(--color-ink)] hover:underline">
                  {site.phone}
                </a>
              </ContactRow>
              <ContactRow icon="mail" label="E-mail">
                <a href={`mailto:${site.email}`} className="font-medium text-[var(--color-ink)] hover:underline break-all">
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow icon="pin" label="Adresa">
                <span className="text-[var(--color-body)]">
                  {site.address.street}, {site.address.zip} {site.address.city}
                </span>
              </ContactRow>
              <ContactRow icon="clock" label="Otevírací doba">
                <span className="text-[var(--color-body)]">
                  {site.hours.weekday}
                  <br />
                  {site.hours.weekend}
                </span>
              </ContactRow>
            </ul>

            <div className="text-[0.82rem] text-[var(--color-muted)]">
              <p className="text-[0.92rem] font-semibold text-[var(--color-ink)]">
                {site.legalName}
              </p>
              <p className="mt-1.5 font-mono">IČ {site.ico} · DIČ {site.dic}</p>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)]">
              <iframe
                title={`Mapa — ${site.legalName}`}
                src={`https://maps.google.com/maps?q=${mapQuery}&z=13&output=embed`}
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block", filter: "grayscale(1) contrast(0.95)" }}
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-baseline gap-4 py-4">
      <span className="flex w-28 shrink-0 items-center gap-2.5 text-[var(--color-muted)]">
        <Icon name={icon} size={17} />
        <span className="text-[0.82rem]">{label}</span>
      </span>
      <span className="text-[0.96rem]">{children}</span>
    </li>
  );
}
