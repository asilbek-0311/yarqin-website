import { ArrowsLeftRight, Bank, FileText, HardDrives, Network, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const steps = [
  { title: "Channels", lines: ["Agent · QR", "POS · ATM · Self-Service"], icon: Network },
  { title: "API & Security", lines: ["Open APIs", "Security by design"], icon: ShieldCheck },
  { title: "Transaction Processing", lines: ["Real-time", "Highly available"], icon: HardDrives },
  { title: "Routing & Integration", lines: ["Smart routing", "Interoperability"], icon: ArrowsLeftRight },
  { title: "Banks / APS / Billers", lines: ["Financial institutions", "Utilities & billers"], icon: Bank },
  { title: "Ledger / Reconciliation", lines: ["Accurate records", "Regulatory reporting"], icon: FileText },
];

export function HowItWorks() {
  return (
    <section id="technology" className="network-section how-section">
      <div id="how-it-works" className="shell">
        <div className="network-heading"><p className="eyebrow">HOW IT WORKS</p><h2>Built for real-world payments.</h2><p>Our technology stack powers the entire payment lifecycle, from customer touchpoint to settlement, with enterprise-grade security and reliability.</p></div>
        <div className="process-grid">
          {steps.map(({ title, lines, icon: Icon }, index) => (
            <div className="process-step" key={title}>
              <Icon aria-hidden="true" size={31} />
              <h3>{title}</h3>
              {lines.map((line) => <span key={line}>{line}</span>)}
              {index < steps.length - 1 ? <b aria-hidden="true">→</b> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
