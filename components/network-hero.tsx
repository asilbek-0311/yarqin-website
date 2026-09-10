import Image from "next/image";
import { ArrowRight, DeviceMobile, IdentificationCard, QrCode, Storefront, UsersThree } from "@phosphor-icons/react/dist/ssr";

const nodes = [
  { label: "Agent", icon: UsersThree },
  { label: "QR", icon: QrCode },
  { label: "POS", icon: IdentificationCard },
  { label: "ATM", icon: Storefront },
  { label: "Self-Service", icon: DeviceMobile },
];

export function NetworkHero() {
  return (
    <section id="top" className="network-hero">
      <Image src="/images/network-hero.png" alt="Payment terminals connected across Kabul" fill priority sizes="100vw" />
      <div className="network-hero-shade" aria-hidden="true" />
      <div className="shell network-hero-copy">
        <p className="eyebrow">THE NETWORK CONTROL PLANE</p>
        <h1>Payment infrastructure for modern Afghanistan.</h1>
        <p>Connecting software, agents, QR, POS, ATM and self-service terminals through one secure technology layer.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#one-platform">See the platform <ArrowRight aria-hidden="true" size={17} weight="bold" /></a>
          <button className="button button-on-dark" type="button" data-partner-trigger>Become a partner</button>
        </div>
      </div>
      <p className="network-hero-mantra">MORE PAYMENTS.<br />A STRONGER AFGHANISTAN.</p>
      <div className="shell network-node-row" aria-label="Connected payment channels">
        {nodes.map(({ label, icon: Icon }) => <div key={label}><Icon aria-hidden="true" size={18} weight="bold" /><span>{label}</span></div>)}
      </div>
    </section>
  );
}
