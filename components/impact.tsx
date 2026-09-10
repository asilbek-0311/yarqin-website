import { LockKey, Network, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const metrics = [
  ["100+", "Partners and institutions"],
  ["10,000+", "Active agents"],
  ["99.9%", "Platform uptime"],
] as const;

export function Impact() {
  return (
    <>
      <section id="about" className="impact-section">
        <div className="shell impact-grid">
          <div><p className="eyebrow">REAL IMPACT</p><h2>A stronger payment ecosystem for Afghanistan.</h2></div>
          <div className="metrics">
            {metrics.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <p className="metric-note">Illustrative prototype metrics — replace with verified YARQINPAY data before launch.</p>
        </div>
      </section>

      <section id="security" className="security-band">
        <div className="shell security-grid">
          <div><p className="eyebrow">SECURITY AT EVERY LAYER</p><h2>Designed for trust from transaction to settlement.</h2></div>
          <div className="security-items">
            <div><ShieldCheck aria-hidden="true" size={27} /><span><strong>Protected</strong><small>Controls designed around payment risk.</small></span></div>
            <div><Network aria-hidden="true" size={27} /><span><strong>Observable</strong><small>Connected monitoring across every channel.</small></span></div>
            <div><LockKey aria-hidden="true" size={27} /><span><strong>Accountable</strong><small>Clear roles, access and audit visibility.</small></span></div>
          </div>
        </div>
      </section>
    </>
  );
}
