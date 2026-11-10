import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const source = await readFile("app/page.tsx", "utf8");
const css = await readFile("app/globals.css", "utf8");
const ids = [...source.matchAll(/\bid="([\w-]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, "IDs must be unique");
for (const [, anchor] of source.matchAll(/href="#([\w-]+)"/g)) assert(ids.includes(anchor), `Missing target: ${anchor}`);
let previous = -1;
for (const id of ["home", "school", "vistore", "contracts", "irrigation", "web", "about", "contact"]) {
  const index = source.indexOf(`section id="${id}"`);
  assert(index > previous, `Missing or out-of-order section: ${id}`);
  previous = index;
}
for (const [, asset] of (source + css).matchAll(/\/assets\/([\w.-]+)/g)) await access(`public/assets/${asset}`);
assert(css.includes("prefers-reduced-motion:reduce"), "Reduced motion support required");
assert(source.includes('dialog.current?.showModal()'), "Native accessible dialog required");
assert(!/href="#"/.test(source), "Do not ship empty destinations");
assert(source.includes("mailto:info@envi.ly") && source.includes("tel:+218915897498"), "Verified contact details required");
console.log("PASS: section order, unique IDs, anchor targets, supplied assets, reduced motion, dialogs, and link integrity.");
