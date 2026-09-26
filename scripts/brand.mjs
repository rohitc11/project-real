// Recolours everything that carries the theme outside CSS, for the theme set
// in src/config/theme.ts:
//   · src/assets/photos/  graded from the originals in brand/photos/
//   · src/app/            icon.svg, favicon.ico, apple-icon.png, opengraph-image.jpg
//   · logo/               profile pictures, post sizes, transparent PNGs, SVGs
// Run with `npm run brand` after changing THEME, then commit the result.
import fs from "node:fs";
import path from "node:path";

import opentype from "opentype.js";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const at = (...p) => path.join(ROOT, ...p);

// ── Theme ────────────────────────────────────────────────────────────────
const themes = JSON.parse(fs.readFileSync(at("src/config/themes.json"), "utf8"));
const themeName = fs
  .readFileSync(at("src/config/theme.ts"), "utf8")
  .match(/export const THEME[^=]*=\s*"(\w+)"/)?.[1];
const theme = themes[themeName];
if (!theme) throw new Error(`Unknown THEME "${themeName}" in src/config/theme.ts`);

const C = theme.colors;
const role = (k) => C[theme.roles[k]] ?? theme.roles[k];
const INK = C.ink, CLOUD = C.cloud, SKY = C.sky, ACCENT = C.accent;
const KEY = role("key");              // key on light backgrounds
const KEY_ON_DARK = role("footerKey"); // key on the dark footer colour

// Pick whichever of ink/cloud reads better on the accent colour.
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
const ON_ACCENT = contrast(ACCENT, INK) >= contrast(ACCENT, CLOUD) ? INK : CLOUD;

// ── Logo geometry (matches src/components/brand/LogoMark.tsx) ────────────
const BODY = "M11.75 20h6.5V42H26v6h-7.75v5H26v6h-7.75V64h-6.5z";
const mark = (x, y, h, c) =>
  `<g transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${(h / 64).toFixed(5)})">` +
  `<circle cx="15" cy="12" r="9" fill="none" stroke="${c}" stroke-width="6"/><path fill="${c}" d="${BODY}"/></g>`;

// Lettering is converted to outlines so the files need no installed font.
const semibold = opentype.loadSync(at("brand/fonts/HankenGrotesk-SemiBold.ttf"));
const light = opentype.loadSync(at("brand/fonts/HankenGrotesk-Light.ttf"));
function textPath(runs, x0, baseline, size, tracking) {
  let x = x0;
  const d = [];
  for (const { font, text } of runs) {
    const k = size / font.unitsPerEm;
    const glyphs = font.stringToGlyphs(text);
    glyphs.forEach((g, i) => {
      d.push(g.getPath(x, baseline, size).toPathData(2));
      x += g.advanceWidth * k + tracking * size;
      if (glyphs[i + 1]) x += font.getKerningValue(g, glyphs[i + 1]) * k;
    });
  }
  return { d: d.filter(Boolean).join(""), width: x - x0 - tracking * size };
}

const FS = 100; // lettering size in SVG units
const NAME = [{ font: semibold, text: "Keyturn" }, { font: light, text: " Media" }];
const nameAt = (x, baseline) => textPath(NAME, x, baseline, FS, -0.02);
// Baseline offset from the line-box centre at line-height 1 (the site's flex centring).
const BASE = ((semibold.ascender + semibold.descender) / 2 / semibold.unitsPerEm) * FS;

const svg = (w, h, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w.toFixed(2)} ${h.toFixed(2)}" width="${Math.round(w)}" height="${Math.round(h)}">${body}</svg>\n`;

function horizontal(text, key) {
  const mh = 1.7 * FS, mw = (mh * 30) / 64, gap = 0.5 * FS;
  const t = nameAt(mw + gap, mh / 2 + BASE);
  return svg(mw + gap + t.width, mh, mark(0, 0, mh, key) + `<path fill="${text}" d="${t.d}"/>`);
}
function stacked(text, key) {
  const mh = 2.9 * FS, mw = (mh * 30) / 64, gap = 0.5 * FS;
  const width = nameAt(0, 0).width, W = Math.max(width, mw), top = mh + gap;
  const t = nameAt((W - width) / 2, top + FS / 2 + BASE);
  const H = top + FS / 2 + BASE + (-semibold.descender / semibold.unitsPerEm) * FS + 4;
  return svg(W, H, mark((W - mw) / 2, 0, mh, key) + `<path fill="${text}" d="${t.d}"/>`);
}
const keyOnly = (c) => svg(30, 64, mark(0, 0, 64, c));
const square = (n, share, bg, c, rx = 0) => {
  const h = n * share, w = (h * 30) / 64;
  return svg(n, n, `<rect width="${n}" height="${n}" rx="${rx}" fill="${bg}"/>` + mark((n - w) / 2, (n - h) / 2, h, c));
};

// ── Rendering helpers ─────────────────────────────────────────────────────
const dims = (s) => s.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).slice(1).map(Number);
const resize = (s, w, h) => s.replace(/width="\d+" height="\d+"/, `width="${Math.round(w)}" height="${Math.round(h)}"`);
const toPng = (s) => sharp(Buffer.from(s)).png({ compressionLevel: 9 }).toBuffer();
const write = (file, data) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, data); };

// A logo centred on a coloured canvas, sized to fit fw × fh of it.
function canvas(W, H, bg, logo, fw, fh) {
  const [w, h] = dims(logo), k = Math.min((W * fw) / w, (H * fh) / h);
  const inner = logo.replace(/^<svg[^>]*>/, `<svg x="${((W - w * k) / 2).toFixed(1)}" y="${((H - h * k) / 2).toFixed(1)}" width="${(w * k).toFixed(1)}" height="${(h * k).toFixed(1)}" viewBox="0 0 ${w} ${h}">`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="${bg}"/>${inner}</svg>`;
}

// Minimal .ico writer: PNG-encoded entries, supported by every current browser.
function ico(pngs) {
  const head = Buffer.alloc(6 + 16 * pngs.length);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(pngs.length, 4);
  let offset = head.length;
  pngs.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i;
    head.writeUInt8(size >= 256 ? 0 : size, e); head.writeUInt8(size >= 256 ? 0 : size, e + 1);
    head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
    head.writeUInt32LE(data.length, e + 8); head.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([head, ...pngs.map((p) => p.data)]);
}

// ── 1 · Photos ────────────────────────────────────────────────────────────
for (const file of fs.readdirSync(at("brand/photos")).filter((f) => f.endsWith(".jpg"))) {
  const src = at("brand/photos", file), out = at("src/assets/photos", file);
  const m = theme.photoGrade;
  if (!m) { fs.copyFileSync(src, out); continue; }
  await sharp(src)
    .recomb([m.slice(0, 3), m.slice(3, 6), m.slice(6, 9)])
    .jpeg({ quality: 82, progressive: true, chromaSubsampling: "4:2:0", mozjpeg: true })
    .toFile(out);
}

// ── 2 · Site icons and share image ────────────────────────────────────────
const siteIcon = square(64, 46 / 64, INK, KEY_ON_DARK, 14);
write(at("src/app/icon.svg"), siteIcon);
write(at("src/app/apple-icon.png"), await toPng(square(180, 0.62, INK, KEY_ON_DARK)));
write(at("src/app/favicon.ico"), ico(await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await toPng(resize(siteIcon, size, size)) })))));

{
  // Hero photo cropped like the site (centre, 30% down), logo + headline in its sky.
  const W = 1200, H = 630;
  const photo = await sharp(at("src/assets/photos/kenrick.jpg")).resize({ width: W }).toBuffer();
  const { height } = await sharp(photo).metadata();
  const base = await sharp(photo).extract({ left: 0, top: Math.round((height - H) * 0.3), width: W, height: H }).toBuffer();

  const logo = horizontal(INK, KEY), [lw, lh] = dims(logo), lk = 54 / lh;
  const size = 100, lineH = 0.95 * size;
  const halfLeading = (lineH - ((light.ascender - light.descender) / light.unitsPerEm) * size) / 2;
  const first = 196 + halfLeading + (light.ascender / light.unitsPerEm) * size;
  const head = ["Built to", "be seen."].map((t, i) =>
    textPath([{ font: light, text: t }], 64, first + i * lineH, size, -0.035).d).join("");
  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">` +
    logo.replace(/^<svg[^>]*>/, `<svg x="64" y="56" width="${(lw * lk).toFixed(1)}" height="54" viewBox="0 0 ${lw} ${lh}">`) +
    `<path fill="${INK}" d="${head}"/></svg>`;
  await sharp(base).composite([{ input: Buffer.from(overlay) }]).jpeg({ quality: 86, mozjpeg: true }).toFile(at("src/app/opengraph-image.jpg"));
}

// ── 3 · logo/ folder ──────────────────────────────────────────────────────
const L = at("logo");
fs.rmSync(L, { recursive: true, force: true });

const V = {
  "horizontal-for-light-bg": horizontal(INK, KEY),
  "horizontal-for-dark-bg": horizontal(CLOUD, KEY_ON_DARK),
  "stacked-for-light-bg": stacked(INK, KEY),
  "stacked-for-dark-bg": stacked(CLOUD, KEY_ON_DARK),
  "key-colour": keyOnly(KEY),
  "key-dark": keyOnly(INK),
  "key-white": keyOnly(CLOUD),
  "app-icon": square(512, 46 / 64, INK, KEY_ON_DARK),
};
for (const [name, s] of Object.entries(V)) write(`${L}/vector/${name}.svg`, s);

// Transparent PNGs, large enough for print and posts
const WIDTHS = { horizontal: 3000, stacked: 2000, key: 750 };
for (const [name, s] of Object.entries(V)) {
  if (name === "app-icon") continue;
  const [w, h] = dims(s), tw = WIDTHS[name.split("-")[0]];
  write(`${L}/transparent/${name}.png`, await toPng(resize(s, tw, (h * tw) / w)));
}

// Profile pictures: 1080 square, everything inside the circle crop
const DP = {
  "key-on-dark": [INK, keyOnly(KEY_ON_DARK), 1, 0.56],
  "key-on-light": [SKY, V["key-colour"], 1, 0.56],
  "key-on-brand-colour": [ACCENT, keyOnly(ON_ACCENT), 1, 0.56],
  "stacked-on-dark": [INK, V["stacked-for-dark-bg"], 0.66, 0.5],
  "stacked-on-light": [SKY, V["stacked-for-light-bg"], 0.66, 0.5],
};
for (const [name, [bg, s, fw, fh]] of Object.entries(DP))
  write(`${L}/profile-pictures/${name}.png`, await toPng(canvas(1080, 1080, bg, s, fw, fh)));

// Posts: three looks × the common feed and story sizes
const LOOKS = {
  "stacked-on-light": [SKY, V["stacked-for-light-bg"], 0.5, 0.42],
  "horizontal-on-light": [SKY, V["horizontal-for-light-bg"], 0.62, 0.3],
  "horizontal-on-dark": [INK, V["horizontal-for-dark-bg"], 0.62, 0.3],
};
const SIZES = {
  "square-1080x1080": [1080, 1080],   // Instagram, Facebook, LinkedIn feed
  "portrait-1080x1350": [1080, 1350], // Instagram 4:5
  "story-1080x1920": [1080, 1920],    // stories and WhatsApp status
  "landscape-1200x630": [1200, 630],  // link posts on LinkedIn, Facebook, X
};
for (const [look, [bg, s, fw, fh]] of Object.entries(LOOKS))
  for (const [size, [W, H]] of Object.entries(SIZES))
    write(`${L}/posts/${look}/${size}.png`, await toPng(canvas(W, H, bg, s, fw, fh)));

console.log(`Brand assets rebuilt for "${theme.name}" (${themeName}).`);
