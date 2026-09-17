// Run: node scripts/process-hero-images.mjs
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/assets/images/hero");

async function process() {
  for (const name of ["building-final", "building-structure"]) {
    const src = path.join(outDir, `${name}.jpg`);

    // WebP desktop version
    await sharp(src)
      .webp({ quality: 80 })
      .toFile(path.join(outDir, `${name}.webp`));

    // Mobile crop: 1080x1350 (4:5) — crop from center
    const meta = await sharp(src).metadata();
    const w = meta.width ?? 1920;
    const h = meta.height ?? 1080;
    const targetAspect = 1080 / 1350; // ~0.8
    const cropW = Math.round(h * targetAspect);
    const left = Math.round((w - cropW) / 2);

    await sharp(src)
      .extract({ left, top: 0, width: cropW, height: h })
      .resize(1080, 1350)
      .webp({ quality: 80 })
      .toFile(path.join(outDir, `${name}-mobile.webp`));

    console.log(`✓ Processed ${name}`);
  }
}

process().catch(console.error);
