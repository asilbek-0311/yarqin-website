import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { audiences } from "@/lib/content";

export function Audiences() {
  return (
    <section id="for-business" className="section audiences-section">
      <div className="shell">
        <div className="section-heading split-heading audience-heading">
          <div><p className="eyebrow">BUILT FOR YOUR INDUSTRY</p><h2>Solutions for every stakeholder.</h2></div>
          <p>We understand your challenges and provide the technology to help you move forward.</p>
        </div>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <article key={audience.title} className="audience-card">
              <div className="audience-media"><Image src={audience.image} alt="" fill sizes="(max-width: 720px) 100vw, 25vw" /></div>
              <div className="audience-card-body">
                <div className="audience-card-title"><h3>{audience.title}</h3><ArrowRight aria-hidden="true" size={17} weight="bold" /></div>
                <p>{audience.description}</p>
                <a className="text-link" href="#partner">Learn more <ArrowRight aria-hidden="true" size={14} weight="bold" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
