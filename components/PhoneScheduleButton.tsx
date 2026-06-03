import { siteConfig } from "@/lib/site";

type PhoneScheduleButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

export function PhoneScheduleButton({
  label,
  className = "btn",
  onClick,
}: PhoneScheduleButtonProps) {
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className={[className, "btn-phone"].filter(Boolean).join(" ")}
      onClick={onClick}
    >
      <span className="btn-phone-label">{label}</span>
      <span className="btn-phone-number">{siteConfig.phoneFormatted}</span>
    </a>
  );
}
