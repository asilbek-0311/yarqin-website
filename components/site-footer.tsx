import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { solutions } from "@/lib/solutions";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="about">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              Payment technology for a brighter,
              <br />
              more connected Afghanistan.
            </p>
          </div>
          <div className="footer-group">
            <h2>Solutions</h2>
            {solutions.map((item) => (
              <Link key={item.slug} href={`/solutions/${item.slug}#top`}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="footer-group">
            <h2>YARQINPAY</h2>
            <Link href="/#for-business">For business</Link>
            <Link href="/#technology">Our technology</Link>
            <Link href="/#security">Security & trust</Link>
            <Link href="/#support">Questions & answers</Link>
          </div>
          <div className="footer-group">
            <h2>Let’s connect</h2>
            <button data-partner-trigger>
              Partnership inquiries{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <p>
              Built for people.
              <br />
              Connected by possibility.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 YARQINPAY. All rights reserved.</p>
          <span>AFGHANISTAN · ENGLISH</span>
          <a href="#top">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
