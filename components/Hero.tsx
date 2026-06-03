import Image from "next/image";
import { useTranslations } from "next-intl";
import { images } from "@/lib/site";
import { PhoneScheduleButton } from "./PhoneScheduleButton";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="hero relative min-h-[32rem] overflow-hidden md:min-h-[36rem] lg:min-h-[40rem]">
      <Image
        src={images.hero}
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="image-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-midnight-violet/92 via-midnight-violet/78 to-midnight-violet/45"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[inherit] w-full items-center">
        <div className="wrap-wide w-full py-16 md:py-20 lg:py-24">
          <div className="flex max-w-2xl flex-col items-start gap-6 text-left">
          <span className="eyebrow !text-thistle">{t("eyebrow")}</span>
          <h1 className="text-large !text-white text-[clamp(2.25rem,6vw,3.25rem)]">
            {t("title")}
          </h1>
          <p className="text-lg leading-relaxed text-white/90">{t("description")}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <PhoneScheduleButton label={t("cta")} />
            <a
              href="#pricing"
              className="btn !bg-white !text-midnight-violet !shadow-none hover:!bg-thistle"
            >
              {t("ctaSecondary")}
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
