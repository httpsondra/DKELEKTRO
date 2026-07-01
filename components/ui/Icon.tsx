import {
  Plug,
  Wrench,
  HouseLine,
  SunHorizon,
  ShieldCheck,
  Lightbulb,
  Flame,
  Lightning,
  SecurityCamera,
  Factory,
  Handshake,
  SealCheck,
  Broom,
  FlowArrow,
  Cpu,
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Check,
  Star,
  Quotes,
  Plus,
  Minus,
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentType } from "react";

/**
 * Phosphor icon set (bold weight) behind a stable `name` API.
 * Technical, even-stroke aesthetic — no thin-line generic library.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const map: Record<string, ComponentType<any>> = {
  plug: Plug,
  wrench: Wrench,
  "smart-home": HouseLine,
  solar: SunHorizon,
  "shield-check": ShieldCheck,
  light: Lightbulb,
  fire: Flame,
  bolt: Lightning,
  cctv: SecurityCamera,
  factory: Factory,
  handshake: Handshake,
  experience: SealCheck,
  broom: Broom,
  route: FlowArrow,
  cpu: Cpu,
  phone: Phone,
  mail: EnvelopeSimple,
  pin: MapPin,
  clock: Clock,
  arrow: ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "arrow-down": ArrowDown,
  check: Check,
  star: Star,
  quote: Quotes,
  plus: Plus,
  minus: Minus,
};

export function Icon({
  name,
  size = 22,
  weight = "bold",
  ...props
}: {
  name: string;
  size?: number;
  weight?: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Lightning;
  return <Cmp size={size} weight={weight} aria-hidden {...props} />;
}
