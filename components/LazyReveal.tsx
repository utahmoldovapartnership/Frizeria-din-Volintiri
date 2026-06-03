"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { attachRevealSeenOnLeave, hasSeenReveal } from "@/lib/reveal-visit";

type LazyRevealProps = {
  children: ReactNode;
  className?: string;
};

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function shouldSkipReveal(): boolean {
  return prefersReducedMotion() || hasSeenReveal();
}

export function LazyReveal({ children, className }: LazyRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (shouldSkipReveal()) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (shouldSkipReveal()) return;

    attachRevealSeenOnLeave();

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["lazy-reveal", visible && "lazy-reveal-visible", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
