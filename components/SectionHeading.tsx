type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`section-heading flex flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <span className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</span>
      ) : null}
      <h2 className={`text-large ${light ? "text-large-light" : ""}`}>{title}</h2>
      {description ? (
        <p className={`text-body max-w-prose ${light ? "text-body-light" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
