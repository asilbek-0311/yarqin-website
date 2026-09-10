import Image from "next/image";
import { ChartLineUp, Lightning, ShieldCheck, UsersThree } from "@phosphor-icons/react/dist/ssr";

const benefits = [
  { title: "Broader access", text: "From cities to every community", icon: Lightning },
  { title: "Greater efficiency", text: "Lower cost, higher reach", icon: ChartLineUp },
  { title: "Inclusive growth", text: "More people in the formal economy", icon: ShieldCheck },
  { title: "Stronger Afghanistan", text: "Payments for a brighter tomorrow", icon: UsersThree },
];

export function OnePlatform() {
  return (
    <section id="for-business" className="network-section one-platform-section">
      <div id="one-platform" className="shell one-platform-grid">
        <div id="about">
          <p className="eyebrow">ONE PLATFORM</p>
          <h2>A unified payment ecosystem for Afghanistan.</h2>
          <p className="network-lead">YARQINPAY provides the technology layer that connects financial institutions, merchants, agents and government services—enabling secure, reliable and scalable payments across every channel.</p>
          <div className="benefit-grid">
            {benefits.map(({ title, text, icon: Icon }) => <div key={title}><Icon aria-hidden="true" size={25} /><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </div>
        <div className="map-panel">
          <Image src="/images/afghanistan-map.png" alt="YARQINPAY network connections across Afghanistan" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <p>One network.<br />A stronger<br /><strong>Afghanistan.</strong></p>
        </div>
      </div>
    </section>
  );
}
