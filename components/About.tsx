import Image from "next/image";
import { useTranslations } from "next-intl";
import { images } from "@/lib/site";
import { PhoneScheduleButton } from "./PhoneScheduleButton";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section">
      <div className="wrap-wide grid gap-10 md:grid-cols-[minmax(0,0.95fr)_1.1fr] md:items-stretch md:gap-14">
        <div className="relative aspect-[3/4] max-h-[28rem] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-lg)] md:aspect-auto md:max-h-none md:h-full">
          <Image
            src={images.stylist}
            alt={t("imageAlt")}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="image-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading title={t("heading")} />
          <div className="flex flex-col gap-4">
            <p className="text-body text-[1.125rem] leading-relaxed">{t("text1")}</p>
            <p className="text-body text-[1.125rem] leading-relaxed">{t("text2")}</p>
          </div>
          <PhoneScheduleButton label={t("cta")} className="btn w-fit" />
        </div>
      </div>
    </section>
  );
}
