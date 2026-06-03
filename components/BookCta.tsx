import { useTranslations } from "next-intl";
import { SectionHeading } from "./SectionHeading";
import { PhoneScheduleButton } from "./PhoneScheduleButton";

export function BookCta() {
  const t = useTranslations("cta");

  return (
    <section className="section bg-thistle/50">
      <div className="wrap-wide flex flex-col items-center gap-6 text-center">
        <SectionHeading
          title={t("title")}
          description={t("description")}
          align="center"
        />
        <PhoneScheduleButton label={t("button")} />
      </div>
    </section>
  );
}
