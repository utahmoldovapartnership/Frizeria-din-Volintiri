import Image from "next/image";
import { useTranslations } from "next-intl";
import { certificateImages } from "@/lib/site";

type CertificatesGalleryProps = {
  className?: string;
};

export function CertificatesGallery({ className }: CertificatesGalleryProps) {
  const t = useTranslations("certificates");

  return (
    <ul
      className={[
        "grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {certificateImages.map((src, i) => (
        <li
          key={src}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--border)] bg-sand shadow-[var(--shadow)]"
        >
          <Image
            src={src}
            alt={t("imageAlt", { n: i + 1 })}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
