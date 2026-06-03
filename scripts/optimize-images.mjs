import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imagesDir = path.join(process.cwd(), "public", "images");

/** Enough for hero (100vw) and 2x gallery tiles; Next still serves AVIF/WebP */
const DEFAULT_MAX = 1600;
const DEFAULT_QUALITY = 80;

/** Certificates: readable text, smaller than full 2048 uploads */
const CERT_MAX = 1400;
const CERT_QUALITY = 85;

function isCertificate(name) {
  return name.startsWith("certificate-");
}

async function optimizeFile(filePath) {
  const name = path.basename(filePath);
  const before = (await stat(filePath)).size;
  const cert = isCertificate(name);
  const max = cert ? CERT_MAX : DEFAULT_MAX;
  const quality = cert ? CERT_QUALITY : DEFAULT_QUALITY;

  const input = sharp(filePath, { failOn: "none" });
  const meta = await input.metadata();
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
  const needsResize = longEdge > max;

  let pipeline = sharp(filePath, { failOn: "none" }).rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? max : undefined,
      height: meta.height > meta.width ? max : undefined,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const buffer = await pipeline
    .jpeg({
      quality,
      mozjpeg: true,
      progressive: true,
    })
    .toBuffer();

  if (buffer.length >= before) {
    return { name, before, after: before, skipped: true };
  }

  const { writeFile } = await import("node:fs/promises");
  await writeFile(filePath, buffer);
  return {
    name,
    before,
    after: buffer.length,
    skipped: false,
    resized: needsResize,
  };
}

const files = (await readdir(imagesDir))
  .filter((f) => /\.(jpe?g)$/i.test(f))
  .sort();

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const filePath = path.join(imagesDir, file);
  const result = await optimizeFile(filePath);
  totalBefore += result.before;
  totalAfter += result.after;
  const pct = ((1 - result.after / result.before) * 100).toFixed(0);
  const tag = result.skipped
    ? "skip"
    : `${result.resized ? "resize, " : ""}-${pct}%`;
  console.log(
    `${result.name}: ${(result.before / 1024).toFixed(0)}KB → ${(result.after / 1024).toFixed(0)}KB (${tag})`,
  );
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}% saved)`,
);
