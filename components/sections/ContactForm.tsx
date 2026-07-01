"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "sending" | "ok" | "error";
type Field = "name" | "phone" | "email" | "consent";
type Errors = Partial<Record<Field | "form", string>>;

const fieldBase =
  "w-full rounded-[6px] border bg-[var(--color-paper)] px-3.5 py-2.5 text-[0.95rem] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-ink)] focus-visible:outline-none";
const labelClass =
  "font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-muted)]";

const MESSAGES = {
  name: "Napište prosím své jméno a příjmení.",
  phone: "Uveďte prosím telefon, ať se vám můžeme ozvat.",
  email: "Zkontrolujte prosím formát e-mailu — např. jan@email.cz.",
  consent: "Bez souhlasu se zpracováním údajů poptávku bohužel nemůžeme odeslat.",
  network:
    "Odeslání se teď nezdařilo. Zkuste to prosím znovu, nebo nám zavolejte na +420 722 411 839.",
} as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function fieldClass(field: Field) {
    return `${fieldBase} ${
      errors[field] ? "border-[var(--color-pastel-red-fg)]" : "border-[var(--color-line)]"
    }`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot — bots fill this hidden field; pretend success, do nothing.
    if (data.company) {
      setStatus("ok");
      return;
    }

    const next: Errors = {};
    if (!data.name?.trim()) next.name = MESSAGES.name;
    if (!data.phone?.trim()) next.phone = MESSAGES.phone;
    if (data.email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = MESSAGES.email;
    if (!data.consent) next.consent = MESSAGES.consent;

    if (Object.keys(next).length > 0) {
      setErrors(next);
      setStatus("idle");
      // Move focus to the first field that needs attention.
      const first = (["name", "phone", "email", "consent"] as Field[]).find((f) => next[f]);
      if (first) document.getElementById(first)?.focus();
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        // Map known server responses back to the relevant field.
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        if (body.error === "invalid_email") {
          setErrors({ email: MESSAGES.email });
          setStatus("idle");
          document.getElementById("email")?.focus();
          return;
        }
        throw new Error(body.error ?? "request_failed");
      }
      setStatus("ok");
      form.reset();
    } catch {
      setErrors({ form: MESSAGES.network });
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-4 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-10 text-center"
      >
        <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-[var(--color-pastel-green)] text-[var(--color-pastel-green-fg)]">
          <Icon name="check" size={24} />
        </span>
        <h3 className="h3-serif text-[1.4rem] text-[var(--color-ink)]">Děkujeme.</h3>
        <p className="max-w-sm text-[0.95rem] text-[var(--color-body)]">
          Vaši poptávku jsme přijali. Brzy se vám ozveme s dalšími kroky.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-secondary mt-2">
          Odeslat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="name" label="Jméno a příjmení" required error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass("name")}
            placeholder="Jan Novák"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field id="phone" label="Telefon" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={fieldClass("phone")}
            placeholder="+420 …"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field id="email" label="E-mail" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass("email")}
            placeholder="vas@email.cz"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="topic" className={labelClass}>
          Čeho se poptávka týká
        </label>
        <select id="topic" name="topic" className={`${fieldBase} border-[var(--color-line)]`} defaultValue="">
          <option value="" disabled>
            Vyberte oblast…
          </option>
          <option>Elektroinstalace</option>
          <option>Chytrá domácnost</option>
          <option>Fotovoltaika</option>
          <option>Revize a servis</option>
          <option>Zabezpečení / slaboproud</option>
          <option>Jiné</option>
        </select>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClass}>
          Zpráva
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldBase} resize-y border-[var(--color-line)]`}
          placeholder="Popište prosím, s čím vám můžeme pomoct…"
        />
      </div>

      {/* Honeypot — hidden from users and assistive tech. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0"
      />

      <div className="mt-5 flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 accent-[var(--color-charcoal)]"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <div>
          <label htmlFor="consent" className="text-[0.85rem] leading-relaxed text-[var(--color-body)]">
            Souhlasím se zpracováním osobních údajů pro účely vyřízení poptávky.{" "}
            <a href="/ochrana-osobnich-udaju" className="text-[var(--color-accent-ink)] underline underline-offset-2">
              Zásady ochrany osobních údajů
            </a>
            .
          </label>
          {errors.consent && (
            <p id="consent-error" role="alert" className="mt-1.5 text-[0.82rem] font-medium text-[var(--color-pastel-red-fg)]">
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      {errors.form && (
        <p
          role="alert"
          aria-live="polite"
          className="mt-4 rounded-[6px] bg-[var(--color-pastel-red)] px-3.5 py-2.5 text-[0.88rem] font-medium text-[var(--color-pastel-red-fg)]"
        >
          {errors.form}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-6 w-full disabled:opacity-70">
        {status === "sending" ? "Odesílám…" : "Odeslat poptávku"}
        {status !== "sending" && <Icon name="arrow" size={17} />}
      </button>

      <p className="mt-3 text-center text-[0.78rem] text-[var(--color-muted)]">
        Ozveme se vám co nejdříve. Spěcháte?{" "}
        <a href="tel:+420722411839" className="font-medium text-[var(--color-accent-ink)] underline underline-offset-2">
          Zavolejte nám
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-[var(--color-pastel-red-fg)]"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-[0.82rem] font-medium text-[var(--color-pastel-red-fg)]">
          {error}
        </p>
      )}
    </div>
  );
}
