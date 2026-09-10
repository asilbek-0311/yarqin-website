import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function PartnerCta({ networkControl = false }: { networkControl?: boolean }) {
  return (
    <section id="partner" className="partner-cta-section">
      <Image src="/images/afghanistan-landscape.png" alt="A mountain road crossing Afghanistan at sunset" fill sizes="100vw" />
      <div className="partner-cta-overlay" aria-hidden="true" />
      <div className="shell partner-cta-grid">
        <div><p className="eyebrow">{networkControl ? "LET'S BUILD TOGETHER" : "PARTNER WITH YARQINPAY"}</p><h2>{networkControl ? "Partner with YARQINPAY" : "Let's build a more connected Afghanistan."}</h2></div>
        <div>
          <p>{networkControl ? "Join banks, service providers, merchants and agents across Afghanistan in building a more connected and inclusive economy." : "Join a growing network of banks, businesses and agents powering financial inclusion across the country."}</p>
          <div className="partner-cta-actions"><button className="button button-primary" type="button" data-partner-trigger>Become a partner <ArrowRight aria-hidden="true" size={17} weight="bold" /></button>{networkControl ? <a className="button button-on-dark" href="#support">Contact our team</a> : null}</div>
        </div>
      </div>
      <p className="partner-mantra">{networkControl ? <>MORE<br />PAYMENTS.<br />A STRONGER<br />AFGHANISTAN.</> : <>PEOPLE<br />PAYMENTS<br />POSSIBILITIES</>}</p>
    </section>
  );
}
