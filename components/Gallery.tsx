import Image from "next/image";
import { useTranslations } from "next-intl";
import { galleryByService, galleryServiceKeys } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section id="gallery" className="section section-alt">
      <div className="wrap-wide flex flex-col gap-12">
        <SectionHeading
          title={t("heading")}
          description={t("description")}
          align="center"
        />

        {galleryServiceKeys.map((service) => (
          <div key={service} className="flex flex-col gap-4">
            <h3 className="font-display text-xl font-semibold text-midnight-violet">
              {t(`categories.${service}`)}
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
              {galleryByService[service].map((src, i) => (
                <li
                  key={src}
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-sand shadow-[var(--shadow)]${i >= 3 ? " sm:hidden" : ""}`}
                >
                  <Image
                    src={src}
                    alt={t("imageAlt", { category: t(`categories.${service}`), n: i + 1 })}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="image-cover transition-transform duration-500 hover:scale-105"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
