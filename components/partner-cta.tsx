import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function PartnerCta() {
  return (
    <section className="partner-cta-section" id="partner">
      <div className="shell">
        <p className="eyebrow">THE NEXT CHAPTER STARTS TOGETHER</p>
        <h2>
          Let’s move
          <br />
          <span>forward.</span>
        </h2>
        <button className="button button-white" data-partner-trigger>
          Become a partner <ArrowUpRight size={21} aria-hidden="true" />
        </button>
        <p>
          More connected businesses.
          <br />A more connected Afghanistan.
        </p>
      </div>
    </section>
  );
}
