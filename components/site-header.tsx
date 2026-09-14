"use client";

import {
  ArrowRight,
  CaretDown,
  List,
  X,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { languages, products } from "@/lib/content";
import { Brand } from "./brand";

const navItems = [
  { label: "For business", href: "/#for-business" },
  { label: "Technology", href: "/#technology" },
  { label: "Security", href: "/#security" },
  { label: "FAQ", href: "/#support" },
];

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languageStatus, setLanguageStatus] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const close = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
        setLanguageOpen(false);
      }
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setLanguageOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", close);
    document.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  function chooseLanguage(label: string, available: boolean) {
    setLanguageOpen(false);
    setLanguageStatus(
      available
        ? "English is selected."
        : `${label} content preview is coming next.`,
    );
  }

  return (
    <header
      ref={headerRef}
      className={`site-header ${home && !scrolled && !mobileOpen && !productsOpen && !languageOpen ? "header-on-orange" : ""}`}
    >
      <a href="#top" className="skip-link">
        Skip to content
      </a>
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
              Solutions <CaretDown aria-hidden="true" size={13} weight="bold" />
            </button>
            {productsOpen ? (
              <div className="mega-menu hs-dropdown-menu">
                <div>
                  <h2>Find your solution.</h2>
                </div>
                <div className="mega-links">
                  {products.map(({ id, title, icon: Icon }) => (
                    <Link
                      key={id}
                      href={`/solutions/${id}#top`}
                      onClick={() => setProductsOpen(false)}
                    >
                      <Icon aria-hidden="true" size={24} />
                      <span>
                        <strong>{title}</strong>
                      </span>
                      <ArrowRight aria-hidden="true" size={15} />
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {navItems.map((item) => (
            <Link key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
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
              <span className="language-flag" aria-hidden="true">🇬🇧</span> EN{" "}
              <CaretDown aria-hidden="true" size={12} />
            </button>
            {languageOpen ? (
              <div className="language-list hs-dropdown-menu">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() =>
                      chooseLanguage(language.label, language.available)
                    }
                  >
                    <span className="language-option-label">
                      <span className="language-flag" aria-hidden="true">{language.flag}</span>
                      {language.label}
                    </span>
                    <small>
                      {language.available ? "Selected" : "Preview soon"}
                    </small>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <button
            className="button button-primary header-cta"
            type="button"
            data-partner-trigger
          >
            Become a partner
          </button>
          <button
            type="button"
            className="mobile-toggle"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="site-mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X aria-hidden="true" size={22} />
            ) : (
              <List aria-hidden="true" size={22} />
            )}
          </button>
        </div>
      </div>

      <div
        id="site-mobile-navigation"
        data-testid="mobile-navigation"
        data-open={mobileOpen ? "true" : "false"}
        className={`hs-collapse mobile-navigation ${mobileOpen ? "is-open" : ""}`}
      >
        {mobileOpen ? (
          <div className="shell mobile-nav-inner">
            <p className="mobile-nav-label">Products</p>
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/solutions/${product.id}#top`}
                onClick={() => setMobileOpen(false)}
              >
                {product.title}
              </Link>
            ))}
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              className="button button-primary"
              type="button"
              data-partner-trigger
              onClick={() => setMobileOpen(false)}
            >
              Become a partner
            </button>
          </div>
        ) : null}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {languageStatus}
      </p>
    </header>
  );
}
