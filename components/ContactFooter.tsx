import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import { LazyMap } from "./LazyMap";
import { SectionHeading } from "./SectionHeading";

export function ContactFooter() {
  const t = useTranslations("contact");
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="section border-t border-white/10 bg-midnight-violet text-white"
    >
      <div className="wrap-wide flex flex-col gap-12">
        <div className="footer-contact-grid grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col gap-6">
            <SectionHeading title={siteConfig.name} description={t("hours")} light />
            <p className="text-body !text-white/85">{t("phoneLead")}</p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="btn w-fit !bg-white !text-midnight-violet hover:!bg-thistle !shadow-none"
            >
              {siteConfig.phoneFormatted}
            </a>
            <address className="text-body !text-white/85 not-italic">
              <strong className="block font-semibold text-white">
                {siteConfig.locationName}
              </strong>
              {siteConfig.addressLine}
            </address>
            <a
              href={siteConfig.mapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link !text-thistle w-fit"
            >
              {t("openInMaps")} →
            </a>
          </div>

          <div className="footer-contact-map relative min-h-[14rem] overflow-hidden rounded-2xl ring-1 ring-white/15 lg:min-h-0 lg:h-full">
            <LazyMap
              title={t("mapTitle")}
              src={siteConfig.mapsEmbedUrl}
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center text-sm text-white/45">
          <Link href="/certificates" className="link !text-thistle font-medium">
            {t("certificatesLink")}
          </Link>
          <p>{t("copyright", { year })}</p>
        </div>
      </div>
    </footer>
  );
}
