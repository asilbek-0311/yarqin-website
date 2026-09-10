import Image from "next/image";
import { Certificate, GearSix, ShieldCheck, UsersThree } from "@phosphor-icons/react/dist/ssr";

const trustItems = [
  { title: "Enterprise security", text: "Data protection and fraud prevention", icon: ShieldCheck },
  { title: "Regulatory compliance", text: "Aligned with local and international standards", icon: Certificate },
  { title: "High availability", text: "Built for continuous operations", icon: GearSix },
  { title: "Trusted partners", text: "Banks, APS and government institutions", icon: UsersThree },
];

export function NetworkTrust() {
  return (
    <section id="security" className="network-trust-section">
      <div className="trust-photo">
        <Image src="/images/audience-banks.png" alt="Modern financial infrastructure in Afghanistan" fill sizes="(max-width: 760px) 100vw, 44vw" />
        <div><strong>Secure.<br />Reliable.<br />Always on.</strong></div>
      </div>
      <div className="trust-copy">
        <p className="eyebrow">TRUST &amp; SECURITY</p>
        <h2>Built for trust. Designed for scale.</h2>
        <p>Security, compliance and reliability are at the core of YARQINPAY. We work with regulated financial institutions and follow international best practices to keep the network safe and always on.</p>
        <div className="trust-grid">
          {trustItems.map(({ title, text, icon: Icon }) => <div key={title}><Icon aria-hidden="true" size={25} /><strong>{title}</strong><span>{text}</span></div>)}
        </div>
      </div>
    </section>
  );
}
