import { ImageResponse } from "next/og";
import { faviconScissorsSvg } from "@/lib/favicon-mark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const { viewBox, stroke, strokeWidth, paths } = faviconScissorsSvg;

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
          borderRadius: 8,
        }}
      >
        <svg
          viewBox={viewBox}
          width="22"
          height="22"
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
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
