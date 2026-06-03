import Image from "next/image";
import { useTranslations } from "next-intl";
import { images } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

const keys = ["hair", "nails", "wax"] as const;

const serviceImages = {
  hair: images.serviceHair,
  nails: images.serviceNails,
  wax: images.serviceWax,
} as const;

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section bg-sand">
      <div className="wrap-wide flex flex-col gap-10">
        <SectionHeading
          title={t("heading")}
          description={t("intro")}
          align="center"
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {keys.map((key) => (
            <li key={key} className="card flex flex-col">
              <div className="relative aspect-[4/3] bg-sand">
                <Image
                  src={serviceImages[key]}
                  alt={t(`${key}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="image-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-display text-xl font-semibold text-midnight-violet">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-body">{t(`${key}.text`)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
