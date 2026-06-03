"use client";

import { useEffect, useRef, useState } from "react";

type LazyMapProps = {
  title: string;
  src: string;
  className?: string;
};

export function LazyMap({ title, src, className }: LazyMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["lazy-map", load && "lazy-map-loaded", className].filter(Boolean).join(" ")}
    >
      {load ? (
        <iframe title={title} src={src} className="h-full w-full border-0" loading="lazy" allowFullScreen />
      ) : (
        <div className="lazy-map-placeholder" aria-hidden />
      )}
    </div>
  );
}
