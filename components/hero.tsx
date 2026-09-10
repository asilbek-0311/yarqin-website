import Image from "next/image";
import { ArrowRight, CheckCircle, CirclesFour, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { audienceStrip } from "@/lib/content";

const proofPoints = [
  { icon: CheckCircle, text: "Trusted payment infrastructure" },
  { icon: ShieldCheck, text: "Secure, scalable and compliant" },
  { icon: CirclesFour, text: "Built for connected access" },
];

export function Hero() {
  return (
    <>
      <section id="top" className="hero-section">
        <Image
          className="hero-image"
          src="/images/hero-equipment.png"
          alt="YARQINPAY ATM, self-service kiosk, and point-of-sale terminal"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-wash" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">BUILDING A MORE CONNECTED AFGHANISTAN</p>
            <h1>One payment platform. Multiple channels.</h1>
            <p className="hero-intro">YARQINPAY unifies software, agent networks, QR, POS, ATM and self-service terminals—so banks, businesses and communities can move money with confidence.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">Explore solutions <ArrowRight aria-hidden="true" size={17} weight="bold" /></a>
              <button className="button button-secondary" type="button" data-partner-trigger>Become a partner</button>
            </div>
            <div className="proof-row">
              {proofPoints.map(({ icon: Icon, text }) => (
                <div key={text}><Icon aria-hidden="true" size={20} /><span>{text}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="audience-strip" aria-labelledby="audience-strip-title">
        <div className="shell">
          <p id="audience-strip-title">ONE PLATFORM. A STRONGER ECOSYSTEM.</p>
          <div className="audience-strip-grid">
            {audienceStrip.map(({ label, icon: Icon }) => (
              <a key={label} href="#for-business"><Icon aria-hidden="true" size={26} /><span>{label}</span></a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
