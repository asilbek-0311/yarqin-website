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

export default function Home() {
  return (
    <>
      <SiteHeader home />
      <main id="top">
        <section className="plata-hero" aria-labelledby="hero-title">
          <div className="hero-art">
            <Image
              src="/images/chrome-hero-transparent.png"
              alt="Sculptural silver Y with a floating payment card and coin"
              fill
              sizes="(max-width: 760px) 100vw, 65vw"
              preload
            />
          </div>
          <div className="shell hero-content">
            <p className="hero-kicker">
              <span /> A brighter way to pay
            </p>
            <h1 id="hero-title">
              More ways
              <br />
              to move
              <br />
              <span>forward.</span>
            </h1>
            <p className="hero-description">
              One connected platform for payments.
              <br />
              Built for the way Afghanistan moves.
            </p>
            <a className="button button-white" href="#solutions">
              Find your solution <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
          <div className="shell hero-bottom">
            <span>People. Payments. Possibilities.</span>
            <a href="#possibilities" aria-label="Discover YARQINPAY">
              <ArrowDown size={21} aria-hidden="true" />
            </a>
            <span>Made for Afghanistan</span>
          </div>
        </section>
        <section className="possibilities shell" id="possibilities">
          <Reveal>
            <p className="eyebrow">PAYMENTS, WITH POSSIBILITY</p>
            <h2>
              One platform.
              <br />
              <span className="muted">A world of connections.</span>
            </h2>
            <p className="section-intro">
              From a shop counter to a bank branch, we connect the technology
              <br className="desktop-break" /> that brings people and payments
              together.
            </p>
          </Reveal>
          <div className="benefit-row">
            <Reveal>
              <Image
                src="/images/chrome-qr.png"
                alt=""
                width={90}
                height={90}
              />
              <h3>Every way to pay</h3>
              <p>
                POS, QR, ATMs, self-service,
                <br />
                and people-powered payments.
              </p>
            </Reveal>
            <Reveal>
              <Image
                src="/images/chrome-network.png"
                alt=""
                width={90}
                height={90}
              />
              <h3>Better, connected</h3>
              <p>
                Channels and financial partners,
                <br />
                working through one platform.
              </p>
            </Reveal>
            <Reveal>
              <Image
                src="/images/chrome-shield.png"
                alt=""
                width={90}
                height={90}
              />
              <h3>Confidence, built in</h3>
              <p>
                Monitoring, reporting, and control
                <br />
                across your payment channels.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="solutions-section" id="solutions">
          <div className="shell">
            <Reveal>
              <div className="section-label-row">
                <p className="eyebrow">FIVE CHANNELS. ONE CONNECTION.</p>
                <span>01 — 05</span>
              </div>
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
            <p className="eyebrow">THE TECHNOLOGY BEHIND IT ALL</p>
            <h2>
              Different channels.
              <br />
              Same <span className="accent">possibility.</span>
            </h2>
            <p className="section-intro">
              One payment platform connects the entire journey.
              <br />
              From your customer’s first tap to your financial partners.
            </p>
          </Reveal>
          <Reveal>
            <div
              className="connection-line"
              aria-label="Payment channels connect through YARQINPAY to banks, APS, billers and service providers"
            >
              <div>
                <span className="connection-label">THE WAY PEOPLE PAY</span>
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
                <span className="connection-label">THE PARTNERS BEHIND IT</span>
                <p>
                  Banks. APS.
                  <br />
                  Billers. Service providers.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="technology-notes">
            <span>APIs & integrations</span>
            <span>Risk & monitoring</span>
            <span>Reconciliation & reporting</span>
          </div>
        </section>
        <section className="business-section" id="for-business">
          <BusinessShowcase />
        </section>
        <section className="security-section shell" id="security">
          <div className="security-art">
            <Image
              src="/images/chrome-shield.png"
              alt="Polished silver shield with an inset checkmark"
              fill
              sizes="(max-width: 760px) 90vw, 45vw"
            />
          </div>
          <Reveal>
            <p className="eyebrow">CONFIDENCE, BUILT IN</p>
            <h2>
              Big on possibility.
              <br />
              <span className="muted">Serious about trust.</span>
            </h2>
            <p className="section-intro">
              Behind every payment is technology designed to keep your
              operations connected, visible, and in control.
            </p>
            <div className="security-details">
              <div>
                <span>01</span>
                <p>
                  <strong>See the whole picture</strong>Monitoring and reporting
                  across your payment channels.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Keep control where it belongs</strong>Risk management
                  and access controls built into the platform.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Connect with confidence</strong>Integration support
                  for your systems and financial partners.
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
            <p className="eyebrow">A LITTLE MORE CLARITY</p>
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
