import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import { PhoneDisplay } from "./PhoneDisplay";
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
            <PhoneDisplay tone="light" />
            <address className="text-body !text-white/85 not-italic">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 !text-thistle"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-0.5">
                    <strong className="block font-semibold text-white">
                      {siteConfig.locationName}
                    </strong>
                    <span>{siteConfig.addressLine}</span>
                  </div>
                  <a
                    href={siteConfig.mapsOpenUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link !text-thistle w-fit"
                  >
                    {t("openInMaps")} →
                  </a>
                </div>
              </div>
            </address>
          </div>

          <div className="footer-contact-map relative min-h-[20rem] overflow-hidden rounded-2xl ring-1 ring-white/15 sm:min-h-[22rem] lg:min-h-0 lg:h-full">
            <iframe
              title={t("mapTitle")}
              src={siteConfig.mapsEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
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
