import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { MotionCta } from "./motion";
import { Reveal } from "./reveal";

export function PartnerCta() {
  return (
    <section className="partner-cta-section" id="partner">
      <div className="shell">
        <Reveal>
          <h2>
            Let’s move
            <br />
            <span>forward.</span>
          </h2>
          <MotionCta>
            Become a partner <ArrowUpRight size={21} aria-hidden="true" />
          </MotionCta>
        </Reveal>
      </div>
    </section>
  );
}
