import type { StaticImageData } from "next/image";

import cytonn from "@/assets/photos/cytonn.jpg";
import harry from "@/assets/photos/harry.jpg";
import jason from "@/assets/photos/jason.jpg";
import joel from "@/assets/photos/joel.jpg";
import kaffie from "@/assets/photos/kaffie.jpg";
import kenrick from "@/assets/photos/kenrick.jpg";
import merakist from "@/assets/photos/merakist.jpg";
import merakistTall from "@/assets/photos/merakist-tall.jpg";
import pexels from "@/assets/photos/pexels.jpg";
import rahul from "@/assets/photos/rahul.jpg";
import scott from "@/assets/photos/scott.jpg";
import valentyn from "@/assets/photos/valentyn.jpg";

export type Photo = { src: StaticImageData; alt: string };

// Stock photography (Unsplash / Pexels) used for atmosphere only — never
// present these as client projects.
export const photos = {
  cytonn: { src: cytonn, alt: "Apartment block seen from below against a blue sky" },
  harry: { src: harry, alt: "Curved glass towers seen from below" },
  jason: { src: jason, alt: "City skyline under a clear blue sky" },
  joel: { src: joel, alt: "White modern building against a pale blue sky" },
  kaffie: { src: kaffie, alt: "Designer pinning campaign artwork to a board" },
  kenrick: { src: kenrick, alt: "Curved blue glass facade against a pale sky" },
  merakist: { src: merakist, alt: "Patterned letters spelling SEO" },
  // Same letters re-stacked vertically so they fit a tall skyline panel.
  merakistTall: { src: merakistTall, alt: "Patterned letters spelling SEO, stacked" },
  pexels: { src: pexels, alt: "Team talking beside a screen reading Digital Marketing" },
  rahul: { src: rahul, alt: "Glass office building with palm trees and passing traffic" },
  scott: { src: scott, alt: "Building roofline beneath a wide open sky" },
  valentyn: { src: valentyn, alt: "Row of white residential towers" },
} satisfies Record<string, Photo>;
