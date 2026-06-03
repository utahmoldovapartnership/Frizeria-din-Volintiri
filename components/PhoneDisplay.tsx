import { siteConfig } from "@/lib/site";

type PhoneDisplayProps = {
  className?: string;
  tone?: "default" | "light";
};

function PhoneIconFilled({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export function PhoneDisplay({ className, tone = "default" }: PhoneDisplayProps) {
  const linkClass =
    tone === "light" ? "link !text-thistle w-fit" : "link font-medium";
  const sepClass = tone === "light" ? "!text-thistle/55" : undefined;

  const numbers = (
    <>
      <a href={`tel:${siteConfig.phoneTel}`} className={linkClass}>
        {siteConfig.phoneLocal}
      </a>
      <span className={sepClass} aria-hidden>
        {" "}/{" "}
      </span>
      <a href={`tel:${siteConfig.phoneTel}`} className={linkClass}>
        {siteConfig.phoneInternational}
      </a>
    </>
  );

  if (tone === "light") {
    return (
      <div className={["flex items-center gap-3", className].filter(Boolean).join(" ")}>
        <PhoneIconFilled className="h-5 w-5 shrink-0 !text-thistle" />
        <p className="m-0">{numbers}</p>
      </div>
    );
  }

  return <p className={className}>{numbers}</p>;
}
