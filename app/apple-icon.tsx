import { ImageResponse } from "next/og";
import { faviconScissorsSvg } from "@/lib/favicon-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const { viewBox, stroke, paths } = faviconScissorsSvg;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#27213c",
          borderRadius: 40,
        }}
      >
        <svg
          viewBox={viewBox}
          width="120"
          height="120"
          fill="none"
          stroke={stroke}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {paths.map((item) =>
            item.tag === "circle" ? (
              <circle key={`${item.cx}-${item.cy}`} cx={item.cx} cy={item.cy} r={item.r} />
            ) : (
              <path key={item.d} d={item.d} />
            ),
          )}
        </svg>
      </div>
    ),
    { ...size },
  );
}
