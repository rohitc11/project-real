# Keyturn Media — Website Design Prompt

## The brief

Design a website for **Keyturn Media**, a marketing agency. Real estate marketing
is its specialty, but it also markets brands in other industries. The site must
feel **elegant, calm and premium**, and it must use **very little text**.
Photos do the talking and words only label them.

Design concept: **"Open Sky"**. Every photo looks up at buildings against a big
sky, and the site should feel the same way: airy and full of light. Headlines
sit in the empty sky of each photo.

Brand line: **Built to be seen.**

---

## Text rules (most important)

- Headlines: 8 words max. Supporting lines: 12 words max. No paragraphs.
- The whole homepage should stay under ~120 words.
- If a section needs a paragraph to make sense, redesign the section.
- No stat counters, testimonials, client logos or results until real ones exist.

---

## Look & feel

**Colours** (sampled from the photos)

| Role            | Hex       | Use                                   |
|-----------------|-----------|---------------------------------------|
| Cloud           | `#F6F9FB` | Main page background                  |
| Sky             | `#E3ECF5` | Soft section backgrounds              |
| Haze            | `#BED3E0` | Hairlines, dividers, hover tints      |
| Glass           | `#2B6B95` | The one accent: links, focus, details |
| Ink             | `#0F1D26` | Text, primary buttons, footer         |
| Steel           | `#5A6975` | Secondary text                        |

**Signature device, day to dusk:** the page background shifts slowly with scroll,
from Cloud at the top to Sky in the middle and deep Ink at the footer, as if the
day turns to evening as you scroll down.

**Typography**: one family, **Hanken Grotesk**.
- Display: weight 300, very large (hero up to ~9rem), tracking −0.035em, line-height 0.95, sentence case.
- Labels: 12px, weight 500, UPPERCASE, tracking +0.16em.
- Body: 17–18px, weight 400.

**Shapes**
- Photos are always full-bleed or crisp rectangles: no rounded corners and no shadows, just like architecture.
- Primary button: Ink pill with white text. Secondary: text with arrow and underline that draws in on hover.
- Hairline dividers in Haze, 1px.

**Motion** (slow and smooth, nothing bouncy)
- Hero photo eases from 1.08× to 1× over 1.6s on load, and headline words rise in one by one.
- On scroll the hero photo drifts slower than the page, like a camera tilting up.
- Sections fade up gently once (≤700ms).
- Turn off all motion when `prefers-reduced-motion` is set.

---

## Homepage, section by section (copy included)

1. **Header**: "Keyturn Media" wordmark on the left. On the right: Services · About · Contact, plus a **Start a project** pill button. Transparent over the hero, and it turns Cloud with a hairline border on scroll.

2. **Hero**: full-screen `kenrick` (curved glass facade, open sky on the left). Text sits in the sky on the left:
   - **Built to be seen.**
   - Real estate and brand marketing.
   - [Start a project]

   On mobile, use `joel` (portrait white building) instead.

3. **Statement**: no photo, lots of space, one line in large light type:
   - *We help developers, agents and brands get noticed — and chosen.*

4. **Skyline of services**: label "What we do". Five tall portrait photo panels in a row with **staggered heights, like a city skyline**. Each panel shows a number and one word. On hover it lifts 16px, the photo zooms slightly and one line appears.

   | # | Service     | Photo     | Hover line               |
   |---|-------------|-----------|--------------------------|
   | 01| Real Estate | `cytonn`  | Launch. List. Sell.      |
   | 02| Social Media| `pexels`  | Content people stop for. |
   | 03| SEO         | `merakist`| Found first.             |
   | 04| Branding    | `kaffie`  | Look like the leader.    |
   | 05| Paid Ads    | `rahul`   | Spend that pays back.    |

   On mobile the panels become a horizontal swipe row.

5. **Real estate spotlight**: split layout with the tall `valentyn` photo (row of towers) on one side and this on the other:
   - Label: OUR SPECIALTY
   - **Property, marketed to sell.**
   - Launches · Listings · Developments
   - See real estate →

6. **Beyond property**: Sky background, no photo:
   - **Not just property.**
   - A slow, endless line of industries drifting sideways: Hospitality · Retail · Healthcare · Education · Startups · Lifestyle

7. **How we work**: `harry` (looking up at glass towers) full-bleed, with three huge words over the sky:
   - **Plan. Create. Grow.**

8. **Final call**: full-bleed `scott` (building along the bottom, huge sky above). Headline in the sky:
   - **Ready to be seen?**
   - [Start a project]  [WhatsApp us]

9. **Footer**: deep Ink (dusk). Wordmark, email, phone, Instagram, LinkedIn, © 2026. One or two rows at most.

---

## Other pages (same rules)

- **Services**: one row per service, each with a big photo, a one-line promise and 3 short tags. `jason` (skyline) as the page header.
- **About**: `pexels` team photo, two short lines and three value words.
- **Contact**: name, email or phone, "What do you need?" as tap-to-select chips (the five services), and an optional message. Big WhatsApp and email buttons next to the form.
- No "Work" or case-study page until real projects are supplied.

---

## Photos

| Short name | File                                        | What it shows                          |
|------------|---------------------------------------------|----------------------------------------|
| cytonn     | cytonn-photography-TVyhDpvL8MY-unsplash.jpg | Apartment block looking up, blue sky   |
| pexels     | pexels-mikael-blomkvist-6476192.jpg         | Team meeting, "Digital Marketing" screen|
| rahul      | rahul-bhogal-Ub9LkIWxyec-unsplash.jpg       | Glass office, palm trees, motion blur  |
| harry      | harry-shelton-pPxhM0CRzl4-unsplash.jpg      | Curved glass towers, looking up        |
| valentyn   | valentyn-chernetskyi-jUP7m4Svtus-unsplash.jpg| Row of white residential towers       |
| jason      | jason-dent-w3eFhqXjkZE-unsplash.jpg         | City skyline, clear blue sky           |
| kaffie     | kaffie-co-DJb2MdMuzbU-unsplash.jpg          | Hand pinning up campaign designs       |
| merakist   | merakist-l5if0iQfV4c-unsplash.jpg           | "SEO" patterned letters on white       |
| scott      | scott-webb-_K-QKkbn7Ds-unsplash.jpg         | Building roofline, huge open sky       |
| kenrick    | kenrick-baksh-Wm8opOd-MDE-unsplash.jpg      | Curved blue glass facade, sky on left  |
| joel       | joel-filipe-RFDP7_80v5A-unsplash.jpg        | White modern building, pale blue sky   |

- Give every photo the same light grade (slightly cool, slightly soft) so the set looks like one shoot. This matters most for the warm office photos.
- These are stock photos. Use them for atmosphere and never present them as Keyturn client projects.

---

## Do not

- Write paragraphs, long bullet lists or "why choose us" blocks.
- Use icons in circles, gradient blobs, frosted-glass cards, neon or emoji.
- Use rounded image cards with drop shadows.
- Reuse the three rejected looks: black + gold "dark luxe"; cream + serif + terracotta; blueprint / architectural-drawing style.

---

## Build notes

- Keep the brand name and every contact detail in one place so a rename touches one line. Mark placeholder contact details clearly.
- The original photos are 1–8 MB. Export them at a 2400px maximum edge in AVIF/WebP, preload the hero image and lazy-load the rest.
- Put text over photos only in sky areas, with a very soft scrim where needed, and keep AA contrast.
- Design mobile-first, and every section must look intentional on a phone.
- Services and industries above are best guesses. Confirm them with Keyturn.
