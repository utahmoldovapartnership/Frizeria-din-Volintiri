import { useTranslations } from "next-intl";
import { faqKeys, siteConfig } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="section">
      <div className="wrap-wide grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start lg:gap-14">
        <SectionHeading title={t("title")} description={t("intro")} />
        <div className="faq min-w-0">
          {faqKeys.map((key) => (
            <details key={key}>
              <summary>{t(`items.${key}.q`)}</summary>
              <p>{t(`items.${key}.a`, { phone: siteConfig.phoneFormatted })}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
