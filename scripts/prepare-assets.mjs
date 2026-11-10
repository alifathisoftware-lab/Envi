import sharp from "sharp";
import { stat } from "node:fs/promises";

// Crop only the supplied reference artwork; never reconstruct the product UI.
for (const [name, top] of [["hero", 90], ["vistore", 86]]) {
  const input = `public/assets/${name}.png`;
  const { width, height } = await sharp(input).metadata();
  await sharp(input).extract({ left: 0, top, width, height: height - top }).webp({ quality: 91 }).toFile(`public/assets/${name}.webp`);
}
await sharp("public/assets/erp.png").extract({ left: 636, top: 350, width: 940, height: 545 }).webp({ quality: 94 }).toFile("public/assets/erp-dashboard.webp");
await sharp("public/assets/vistore-logo.png").webp({ quality: 95 }).toFile("public/assets/vistore-logo.webp");
await sharp("public/assets/hero.png").extract({ left: 850, top: 90, width: 822, height: 851 }).webp({ quality: 92 }).toFile("public/assets/hero-ribbon.webp");
await sharp("public/assets/vistore.png").extract({ left: 640, top: 86, width: 1032, height: 855 }).webp({ quality: 92 }).toFile("public/assets/vistore-art.webp");
await sharp("source-assets/contracts-dashboard.png").extract({ left: 0, top: 121, width: 1920, height: 887 }).webp({ quality: 92 }).toFile("public/assets/contracts-dashboard.webp");
for (const name of ["hero.webp", "vistore.webp", "erp-dashboard.webp", "vistore-logo.webp"]) {
  console.log(`${name}: ${Math.round((await stat(`public/assets/${name}`)).size / 1024)} KB`);
}
