import { useTranslations } from "next-intl";
import { images } from "@/lib/site";
import { LazyImage } from "./LazyImage";
import { PhoneScheduleButton } from "./PhoneScheduleButton";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section">
      <div className="wrap-wide grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
        <div className="relative aspect-[3/4] max-h-[28rem] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]">
          <LazyImage
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
