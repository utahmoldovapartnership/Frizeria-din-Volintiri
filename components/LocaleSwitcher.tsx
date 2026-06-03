"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const locales = [
  { value: "ro", label: "RO" },
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className={`locale-dropdown-chevron ${open ? "locale-dropdown-chevron-open" : ""}`}
    >
      <path
        d="M3 4.5 6 7.5 9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LocaleSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.value === locale) ?? locales[0];

  useEffect(() => {
    if (!open) return;

    const close = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selectLocale = (value: string) => {
    setOpen(false);
    if (value !== locale) {
      router.replace(pathname, { locale: value });
    }
  };

  return (
    <div ref={rootRef} className={`locale-dropdown ${open ? "locale-dropdown-open" : ""}`}>
      <button
        type="button"
        className="locale-dropdown-trigger"
        aria-label={t("localeLabel")}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{current.label}</span>
        <Chevron open={open} />
      </button>

      {open ? (
        <ul className="locale-dropdown-menu" role="listbox" aria-label={t("localeLabel")}>
          {locales.map(({ value, label }) => (
            <li key={value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={locale === value}
                className={`locale-dropdown-option ${locale === value ? "locale-dropdown-option-active" : ""}`}
                onClick={() => selectLocale(value)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
