import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function PartnerCta() {
  return (
    <section id="partner" className="partner-cta-section">
      <Image src="/images/afghanistan-landscape.png" alt="A mountain road crossing Afghanistan at sunset" fill sizes="100vw" />
      <div className="partner-cta-overlay" aria-hidden="true" />
      <div className="shell partner-cta-grid">
        <div><p className="eyebrow">PARTNER WITH YARQINPAY</p><h2>Let&apos;s build a more connected Afghanistan.</h2></div>
        <div><p>Join a growing network of banks, businesses and agents powering financial inclusion across the country.</p><button className="button button-primary" type="button" data-partner-trigger>Become a partner <ArrowRight aria-hidden="true" size={17} weight="bold" /></button></div>
      </div>
      <p className="partner-mantra">PEOPLE<br />PAYMENTS<br />POSSIBILITIES</p>
    </section>
  );
}
