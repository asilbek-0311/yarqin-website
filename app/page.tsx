import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowsLeftRight,
} from "@phosphor-icons/react/dist/ssr";
import { PartnerCta } from "@/components/partner-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  SolutionShowcase,
  BusinessShowcase,
} from "@/components/solution-showcase";
import { Reveal } from "@/components/reveal";
import { MotionArtwork, MotionCta } from "@/components/motion";

export default function Home() {
  return (
    <>
      <SiteHeader home />
      <main id="top">
        <section className="plata-hero" aria-labelledby="hero-title">
          <MotionArtwork className="hero-art" travel={45}>
            <Image
              src="/images/chrome-hero-transparent.png"
              alt="Sculptural silver Y with a floating payment card and coin"
              fill
              sizes="(max-width: 760px) 100vw, 65vw"
              preload
            />
          </MotionArtwork>
          <div className="shell hero-content">
            <h1 id="hero-title">
              More ways
              <br />
              to move
              <br />
              <span>forward.</span>
            </h1>
            <p className="hero-description">
              Connected payments for Afghanistan.
            </p>
            <MotionCta href="#solutions">
              Find your solution <ArrowUpRight size={20} aria-hidden="true" />
            </MotionCta>
          </div>
          <div className="shell hero-bottom">
            <a href="#possibilities" aria-label="Discover YARQINPAY">
              <ArrowDown size={21} aria-hidden="true" />
            </a>
          </div>
        </section>
        <section className="possibilities shell" id="possibilities">
          <Reveal>
            <h2>
              One platform.
              <br />
              <span className="muted">A world of connections.</span>
            </h2>
            <p className="section-intro">
              Connecting businesses, banks, and communities.
            </p>
          </Reveal>
          <div className="benefit-row">
            <Reveal>
              <MotionArtwork className="benefit-art" travel={10}>
                <Image
                  src="/images/chrome-qr.png"
                  alt=""
                  width={90}
                  height={90}
                />
              </MotionArtwork>
              <h3>Every way to pay</h3>
              <p>At the counter, branch, or local agent.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <MotionArtwork className="benefit-art" travel={14}>
                <Image
                  src="/images/chrome-network.png"
                  alt=""
                  width={90}
                  height={90}
                />
              </MotionArtwork>
              <h3>Better, connected</h3>
              <p>Your channels. One platform.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <MotionArtwork className="benefit-art" travel={18}>
                <Image
                  src="/images/chrome-shield.png"
                  alt=""
                  width={90}
                  height={90}
                />
              </MotionArtwork>
              <h3>Confidence, built in</h3>
              <p>See and manage every payment.</p>
            </Reveal>
          </div>
        </section>
        <section className="solutions-section" id="solutions">
          <div className="shell">
            <Reveal>
              <h2>
                A solution for
                <br />
                <span className="accent">every next step.</span>
              </h2>
            </Reveal>
            <SolutionShowcase />
          </div>
        </section>
        <section className="connection-section shell" id="technology">
          <Reveal>
            <h2>
              Different channels.
              <br />
              Same <span className="accent">possibility.</span>
            </h2>
            <p className="section-intro">
              From the first tap to settlement. All connected.
            </p>
          </Reveal>
          <Reveal>
            <div
              className="connection-line"
              aria-label="Payment channels connect through YARQINPAY to banks, APS, billers and service providers"
            >
              <div>
                <p>
                  Tap. Scan.
                  <br />
                  Withdraw. Connect.
                </p>
              </div>
              <ArrowsLeftRight
                className="connection-arrow"
                size={27}
                aria-hidden="true"
              />
              <div className="platform-wordmark">
                YARQINPAY<small>Switching · Clearing · Settlement</small>
              </div>
              <ArrowsLeftRight
                className="connection-arrow"
                size={27}
                aria-hidden="true"
              />
              <div>
                <p>
                  Banks. APS.
                  <br />
                  Billers. Service providers.
                </p>
              </div>
            </div>
          </Reveal>
        </section>
        <section className="business-section" id="for-business">
          <BusinessShowcase />
        </section>
        <section className="security-section shell" id="security">
          <MotionArtwork className="security-art" travel={30}>
            <Image
              src="/images/chrome-shield.png"
              alt="Polished silver shield with an inset checkmark"
              fill
              sizes="(max-width: 760px) 90vw, 45vw"
            />
          </MotionArtwork>
          <Reveal>
            <h2>
              Big on possibility.
              <br />
              <span className="muted">Serious about trust.</span>
            </h2>
            <p className="section-intro">
              Keep your payments visible and in control.
            </p>
            <div className="security-details">
              <div>
                <p>
                  <strong>See every channel</strong>Clear monitoring and
                  reporting.
                </p>
              </div>
              <div>
                <p>
                  <strong>Stay in control</strong>Built-in risk and access
                  controls.
                </p>
              </div>
              <div>
                <p>
                  <strong>Connect with confidence</strong>Support for your
                  integrations.
                </p>
              </div>
            </div>
            <button className="text-link" data-partner-trigger>
              Talk to our team <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </Reveal>
        </section>
        <section className="faq-section shell" id="support">
          <Reveal>
            <h2>
              Good questions.
              <br />
              <span className="muted">Simple answers.</span>
            </h2>
          </Reveal>
          <div className="faq-list">
            <details>
              <summary>
                What does YARQINPAY do?<span aria-hidden="true">+</span>
              </summary>
              <p>
                YARQINPAY connects payment software, POS terminals, QR payments,
                ATMs, self-service terminals, and an agent network through one
                platform for Afghanistan.
              </p>
            </details>
            <details>
              <summary>
                Who can partner with YARQINPAY?<span aria-hidden="true">+</span>
              </summary>
              <p>
                Banks, merchants, payment agents, service providers, and
                government organizations can explore a partnership. Tell us
                about your needs to find the right starting point.
              </p>
            </details>
            <details>
              <summary>
                Can I start with just one solution?
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                Yes. Start a conversation around the channel you need today. Our
                team can help scope the integration and discuss how other
                channels could fit as your needs grow.
              </p>
            </details>
            <details>
              <summary>
                How do I get started?<span aria-hidden="true">+</span>
              </summary>
              <p>
                Choose a solution to learn more, then use “Become a partner” to
                tell us about your organization and what you want to connect.
              </p>
              <button className="text-link" data-partner-trigger>
                Start a conversation{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            </details>
          </div>
        </section>
        <PartnerCta />
      </main>
      <SiteFooter />
    </>
  );
}
