"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { PhoneScheduleButton } from "./PhoneScheduleButton";

const links = [
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#gallery", key: "gallery" },
  { href: "#pricing", key: "pricing" },
  { href: "#faq", key: "faq" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileMenu = (
    <div
      className={`mobile-nav-overlay md:hidden ${open ? "mobile-nav-overlay-open" : ""}`}
      aria-hidden={!open}
      onClick={() => setOpen(false)}
    >
      <nav
        className="mobile-nav-panel"
        aria-label="Mobile"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="mobile-nav-list">
          {links.map(({ href, key }, index) => (
            <li key={key} className="mobile-nav-item" style={{ "--i": index } as CSSProperties}>
              <a
                href={href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="mobile-nav-cta"
          style={{ "--i": links.length } as CSSProperties}
        >
          <PhoneScheduleButton
            label={t("call")}
            className="btn w-full"
            onClick={() => setOpen(false)}
          />
        </div>
      </nav>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
      <div className="wrap-wide flex h-[var(--header-h)] items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-midnight-violet no-underline md:text-2xl"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted no-underline transition-colors hover:bg-thistle/50 hover:text-midnight-violet"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LocaleSwitcher />
          <span className="hidden md:contents">
            <a href={`tel:${siteConfig.phoneTel}`} className="btn btn-sm">
              {t("call")}
            </a>
          </span>
          <div className="md:hidden">
            <button
              type="button"
              className="nav-menu-btn"
              aria-expanded={open}
              aria-label={t("menu")}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mounted ? createPortal(mobileMenu, document.body) : null}
    </header>
  );
}
