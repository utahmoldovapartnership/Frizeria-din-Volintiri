import Image, { type ImageProps } from "next/image";
import { imageBlurDataURL } from "@/lib/image-blur";

type LazyImageProps = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  priority?: boolean;
};

export function LazyImage({ priority = false, className, ...props }: LazyImageProps) {
  return (
    <Image
      {...props}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      placeholder={priority ? "empty" : "blur"}
      blurDataURL={priority ? undefined : imageBlurDataURL}
      className={[className, !priority && "lazy-image"].filter(Boolean).join(" ")}
    />
  );
}
