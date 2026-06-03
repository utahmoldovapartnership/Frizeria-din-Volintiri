import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

/** Matches lib/favicon-mark.tsx (LuScissors / react-icons/lu) */
function faviconSvg(size) {
  const pad = Math.round(size * 0.125);
  const inner = size - pad * 2;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.25)}" fill="#27213c"/>
  <svg x="${pad}" y="${pad}" width="${inner}" height="${inner}" viewBox="0 0 24 24" fill="none" stroke="#f3e8ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="6" cy="6" r="3"/>
    <path d="M8.12 8.12 12 12"/>
    <path d="M20 4 8.12 15.88"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M14.8 14.8 20 20"/>
  </svg>
</svg>`;
}

async function renderPng(size) {
  return sharp(Buffer.from(faviconSvg(size))).resize(size, size).png().toBuffer();
}

const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map(renderPng));
const ico = await toIco(pngs);

const out = path.join(process.cwd(), "app", "favicon.ico");
await writeFile(out, ico);
console.log(`Wrote ${out} (${ico.length} bytes, ${sizes.join(", ")}px)`);
