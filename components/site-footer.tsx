import { LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { footerGroups } from "@/lib/content";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer id="support" className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Payment technology for a more connected Afghanistan.</p>
          <div className="social-links">
            <a href="#support" aria-label="YARQINPAY on LinkedIn"><LinkedinLogo aria-hidden="true" size={20} /></a>
            <a href="#support" aria-label="YARQINPAY on YouTube"><YoutubeLogo aria-hidden="true" size={20} /></a>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title} className="footer-group">
            <h2>{group.title}</h2>
            {group.links.map((link) => <a key={`${group.title}-${link.label}`} href={link.href}>{link.label}</a>)}
          </div>
        ))}
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 YARQINPAY. Prototype experience.</p>
        <div><a href="#support">Privacy</a><a href="#support">Terms</a><a href="#support">Cookies</a></div>
      </div>
    </footer>
  );
}
