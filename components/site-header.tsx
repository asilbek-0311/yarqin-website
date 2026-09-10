"use client";

import { ArrowRight, CaretDown, GlobeHemisphereWest, List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { languages, products } from "@/lib/content";
import { Brand } from "./brand";

const navItems = [
  { label: "For Business", href: "#for-business" },
  { label: "Technology", href: "#technology" },
  { label: "Security", href: "#security" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languageStatus, setLanguageStatus] = useState("");

  function chooseLanguage(label: string, available: boolean) {
    setLanguageOpen(false);
    setLanguageStatus(available ? "English is selected." : `${label} content preview is coming next.`);
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="hs-dropdown nav-dropdown">
            <button
              type="button"
              className="nav-link"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((open) => !open)}
            >
              Products <CaretDown aria-hidden="true" size={13} weight="bold" />
            </button>
            {productsOpen ? (
              <div className="mega-menu hs-dropdown-menu" role="menu">
                <div>
                  <p className="eyebrow">PAYMENT CHANNELS</p>
                  <h2>One platform for every payment touchpoint.</h2>
                </div>
                <div className="mega-links">
                  {products.map(({ href, title, description, icon: Icon }) => (
                    <a key={href} href={href} role="menuitem" onClick={() => setProductsOpen(false)}>
                      <Icon aria-hidden="true" size={24} />
                      <span><strong>{title}</strong><small>{description}</small></span>
                      <ArrowRight aria-hidden="true" size={15} />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {navItems.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}
        </nav>

        <div className="header-actions">
          <div className="hs-dropdown language-menu">
            <button
              type="button"
              className="language-trigger"
              aria-label="Choose language"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((open) => !open)}
            >
              <GlobeHemisphereWest aria-hidden="true" size={17} /> EN <CaretDown aria-hidden="true" size={12} />
            </button>
            {languageOpen ? (
              <div className="language-list hs-dropdown-menu">
                {languages.map((language) => (
                  <button key={language.code} type="button" onClick={() => chooseLanguage(language.label, language.available)}>
                    <span>{language.label}</span><small>{language.available ? "Selected" : "Preview soon"}</small>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <button className="button button-primary header-cta" type="button" data-partner-trigger>
            Become a partner
          </button>
          <button
            type="button"
            className="mobile-toggle"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            data-hs-collapse="#site-mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X aria-hidden="true" size={22} /> : <List aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      <div
        id="site-mobile-navigation"
        data-testid="mobile-navigation"
        data-open={mobileOpen ? "true" : "false"}
        className={`hs-collapse mobile-navigation ${mobileOpen ? "is-open" : ""}`}
      >
        <div className="shell mobile-nav-inner">
          <p className="mobile-nav-label">Products</p>
          {products.map((product) => <a key={product.href} href={product.href} onClick={() => setMobileOpen(false)}>{product.title}</a>)}
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>)}
          <button className="button button-primary" type="button" data-partner-trigger>Become a partner</button>
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">{languageStatus}</p>
    </header>
  );
}

