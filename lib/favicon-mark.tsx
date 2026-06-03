import { LuScissors } from "react-icons/lu";

/** Lucide scissors (react-icons/lu) — shared mark for favicon assets */
export function FaviconMark({
  size = 24,
  color = "#f3e8ff",
}: {
  size?: number;
  color?: string;
}) {
  return <LuScissors size={size} color={color} aria-hidden />;
}

/** SVG paths from LuScissors for static / ImageResponse favicons */
export const faviconScissorsSvg = {
  viewBox: "0 0 24 24",
  stroke: "#f3e8ff",
  strokeWidth: 2,
  paths: [
    { tag: "circle" as const, cx: 6, cy: 6, r: 3 },
    { tag: "path" as const, d: "M8.12 8.12 12 12" },
    { tag: "path" as const, d: "M20 4 8.12 15.88" },
    { tag: "circle" as const, cx: 6, cy: 18, r: 3 },
    { tag: "path" as const, d: "M14.8 14.8 20 20" },
  ],
};
